import type { OperationsDefinition, LogoutOptions, Client } from '@virgograph/sdk/client';
import type { CreateFileUpload, CreateMutation, CreateQuery, CreateSubscription, GetUser, PrefetchQuery, QueryKey } from './types';
export declare const userQueryKey = "wg_user";
export declare function createSvelteClient<Operations extends OperationsDefinition>(client: Client): {
    createQuery: CreateQuery<Operations>;
    createMutation: CreateMutation<Operations>;
    getAuth: () => {
        login: (authProviderID: Operations["authProvider"], redirectURI?: string | undefined) => void;
        logout: (options?: LogoutOptions | undefined) => Promise<boolean>;
    };
    getUser: GetUser<Operations>;
    createFileUpload: CreateFileUpload<Operations>;
    queryKey: QueryKey<Operations>;
    createSubscription: CreateSubscription<Operations>;
    prefetchQuery: PrefetchQuery<Operations>;
};
