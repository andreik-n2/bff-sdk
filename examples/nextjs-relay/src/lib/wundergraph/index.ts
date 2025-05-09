import { createWunderGraphRelayApp } from '@virgograph/react-relay';
import { createClient } from '../../../.wundergraph/generated/client';

const client = createClient();

export const { WunderGraphRelayProvider, useLiveQuery, fetchWunderGraphSSRQuery } = createWunderGraphRelayApp({
	client,
});
