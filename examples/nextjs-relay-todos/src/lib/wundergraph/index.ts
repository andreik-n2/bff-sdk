import { createWunderGraphRelayApp } from '@virgograph/react-relay';
import { createClient } from '../../../.wundergraph/generated/client';

export const client = createClient();

export const { WunderGraphRelayProvider, useLiveQuery, fetchWunderGraphSSRQuery, getEnvironment } =
	createWunderGraphRelayApp({
		client,
	});
