import { createWunderGraphRelayApp } from '@virgograph/react-relay';
import { client } from '../components/generated/nextjs';

export const { useLiveQuery, WunderGraphRelayProvider, fetchWunderGraphSSRQuery } = createWunderGraphRelayApp({
	client,
});
