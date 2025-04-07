import { createClient } from '../../.wundergraph/generated/client';
import { createWunderGraphRelayApp } from '@virgograph/react-relay';

export const client = createClient();

export const { fetchWunderGraphSSGQuery } = createWunderGraphRelayApp({ client });
