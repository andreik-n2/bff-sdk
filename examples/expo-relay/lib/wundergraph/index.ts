import { createClient } from '../../.wundergraph/generated/client';
import { createWunderGraphRelayApp } from '@virgograph/react-relay';

const client = createClient();

export const { WunderGraphRelayProvider, useLiveQuery, getEnvironment } = createWunderGraphRelayApp({ client });
