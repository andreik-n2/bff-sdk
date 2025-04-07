import { createQuery as tanstackCreateQuery, createMutation as tanstackCreateMutation, useQueryClient, } from '@tanstack/svelte-query';
import { writable, derived } from 'svelte/store';
import { onDestroy, onMount } from 'svelte';
import { serialize } from '@virgograph/sdk/internal';
export const userQueryKey = 'wg_user';
const withSubscriptionState = (query, subscriptionState) => {
    const queryWithSubscription = derived([query, subscriptionState], ($values, set) => {
        const newObject = Object.assign({}, $values[0], {
            isSubscribed: $values[1].isSubscribed,
        });
        set(newObject);
    });
    return queryWithSubscription;
};
export function createSvelteClient(client) {
    const queryFetcher = async (query) => {
        const result = await client.query(query);
        if (result.error) {
            throw result.error;
        }
        return result.data;
    };
    const queryKey = ({ operationName, input }) => {
        return [operationName, input];
    };
    const mutationFetcher = async (mutation) => {
        const result = await client.mutate(mutation);
        if (result.error) {
            throw result.error;
        }
        return result.data;
    };
    /**
     * Prefetch a WunderGraph query for SSR (for frameworks like SvelteKit)
     *
     * @usage
     * ```ts
     * prefetchQuery({
     *   operationName: 'Weather',
     * })
     * ```
     */
    const prefetchQuery = async (options, queryClient) => {
        const { operationName, liveQuery, input, enabled, refetchOnWindowFocus, ...queryOptions } = options;
        await queryClient.prefetchQuery({
            queryKey: queryKey({ operationName, input }),
            queryFn: ({ signal }) => queryFetcher({ operationName, input, abortSignal: signal }),
            ...queryOptions,
            enabled: liveQuery ? false : enabled,
            refetchOnWindowFocus: liveQuery ? false : refetchOnWindowFocus,
        });
    };
    /**
     * Execute a WunderGraph query.
     *
     * @usage
     * ```ts
     * const { data, error, isLoading } = createQuery({
     *   operationName: 'Weather',
     * })
     * ```
     *
     * All queries support liveQuery by default, enabling this will set up a realtime subscription.
     * ```ts
     * const { data, error, isLoading, isSubscribed } = useQuery({
     *   operationName: 'Weather',
     *   liveQuery: true,
     * })
     * ```
     */
    const createQuery = (options) => {
        const { operationName, liveQuery, input, enabled, refetchOnWindowFocus, ...queryOptions } = options;
        const queryHash = serialize([operationName, input]);
        const queryResult = tanstackCreateQuery({
            queryKey: queryKey({ operationName, input }),
            queryFn: ({ signal }) => queryFetcher({ operationName, input, abortSignal: signal }),
            ...queryOptions,
            enabled: liveQuery ? false : enabled,
            refetchOnWindowFocus: liveQuery ? false : refetchOnWindowFocus,
        });
        if (liveQuery) {
            const subscriptionState = createSubscribeTo({
                queryHash,
                operationName,
                input,
                liveQuery,
                enabled: options.enabled !== false && liveQuery,
                onSuccess: options.onSuccess,
                onError: options.onError,
            });
            const liveQueryResult = withSubscriptionState(queryResult, subscriptionState);
            return liveQueryResult;
        }
        return queryResult;
    };
    /**
     * Execute a WunderGraph mutation.
     *
     * @usage
     * ```ts
     * const { mutate, data, error, isLoading } = createMutation({
     *   operationName: 'SetName'
     * })
     *
     * mutate({
     *   name: 'John Doe'
     * })
     * ```
     */
    const createMutation = (options) => {
        const { operationName, ...mutationOptions } = options;
        return tanstackCreateMutation({
            mutationKey: [operationName],
            mutationFn: (input) => mutationFetcher({ operationName, input }),
            ...mutationOptions,
        });
    };
    const getAuth = () => {
        const queryClient = useQueryClient();
        return {
            login: (authProviderID, redirectURI) => client.login(authProviderID, redirectURI),
            logout: async (options) => {
                const result = await client.logout(options);
                // reset user in the cache and don't trigger a refetch
                queryClient.setQueryData([userQueryKey], null);
                return result;
            },
        };
    };
    /**
     * Return the logged in user.
     *
     * @usage
     * ```ts
     * const { data, error, isLoading } = getUser()
     * ```
     */
    const getUser = (options) => {
        const { revalidate, ...queryOptions } = options || {};
        return tanstackCreateQuery([userQueryKey], ({ signal }) => client.fetchUser({
            revalidate,
            abortSignal: signal,
        }), queryOptions);
    };
    /**
     * Upload a file to S3 compatible storage.
     *
     * @usage
     * ```ts
     * const { upload, data, error } = createFileUpload()
     *
     * const uploadFile = (file: File) => {
     *  upload(file)
     * }
     * ```
     */
    const createFileUpload = (options) => {
        const { mutate, mutateAsync, ...mutation } = tanstackCreateMutation(['uploadFiles'], async (input) => {
            const resp = await client.uploadFiles(input);
            return resp.fileKeys;
        }, options);
        return {
            upload: mutate,
            uploadAsync: mutateAsync,
            ...mutation,
        };
    };
    // Set up a subscription that can be aborted.
    const subscribeTo = (options) => {
        const abort = new AbortController();
        const { onSuccess, onError, onResult, onAbort, ...subscription } = options;
        subscription.abortSignal = abort.signal;
        client.subscribe(subscription, onResult).catch(onError);
        return () => {
            onAbort?.();
            abort.abort();
        };
    };
    // Helper function used in createQuery and createSubscription
    const createSubscribeTo = (props) => {
        const client = useQueryClient();
        const { operationName, input, enabled, liveQuery, subscribeOnce, resetOnMount, onSuccess, onError } = props;
        let startedAtRef = null;
        let unsubscribe;
        const subscriptionState = writable({
            isLoading: false,
            isSubscribed: false,
        });
        onMount(() => {
            if (!startedAtRef && resetOnMount) {
                client.removeQueries([operationName, input]);
            }
            subscriptionState.set({ isLoading: true, isSubscribed: false });
            if (enabled) {
                unsubscribe = subscribeTo({
                    operationName,
                    input,
                    liveQuery,
                    subscribeOnce,
                    onError(error) {
                        subscriptionState.set({ isLoading: false, isSubscribed: false });
                        onError?.(error);
                        startedAtRef = null;
                    },
                    onResult(result) {
                        if (!startedAtRef) {
                            subscriptionState.set({ isLoading: false, isSubscribed: true });
                            onSuccess?.(result);
                            startedAtRef = new Date().getTime();
                        }
                        // Promise is not handled because we are not interested in the result
                        // Errors are handled by React Query internally
                        client.setQueryData([operationName, input], () => {
                            if (result.error) {
                                throw result.error;
                            }
                            return result.data;
                        });
                    },
                    onAbort() {
                        subscriptionState.set({ isLoading: false, isSubscribed: false });
                        startedAtRef = null;
                    },
                });
            }
        });
        onDestroy(() => {
            unsubscribe?.();
        });
        return subscriptionState;
    };
    /**
     * createSubscription
     *
     * Subscribe to subscription operations.
     *
     * @usage
     * ```ts
     * const { data, error, isLoading, isSubscribed } = createSubscription({
     *   operationName: 'Countdown',
     * })
     */
    const createSubscription = (options) => {
        const { enabled = true, operationName, input, subscribeOnce, onSuccess, onError } = options;
        const queryHash = serialize([operationName, input]);
        const subscription = tanstackCreateQuery({
            queryKey: [operationName, input],
            enabled: false, // we update the cache async
        });
        const subscriptionState = createSubscribeTo({
            queryHash,
            operationName,
            input,
            subscribeOnce,
            enabled,
            onSuccess,
            onError,
        });
        return withSubscriptionState(subscription, subscriptionState);
    };
    return {
        createQuery,
        createMutation,
        getAuth,
        getUser,
        createFileUpload,
        queryKey,
        createSubscription,
        prefetchQuery,
    };
}
