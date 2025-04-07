import { createClient, Operations } from '../components/generated/client';

import { createHooks } from '@virgograph/swr';

export const client = createClient();

export const { useQuery, useMutation, useSubscription, useUser, useAuth } = createHooks<Operations>(client);
