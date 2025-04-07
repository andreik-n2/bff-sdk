import { configureWunderGraphServer } from '@virgograph/sdk/server';

import config from './wundergraph.config';

export default configureWunderGraphServer(() => ({
	integrations: config.integrations,
	hooks: {
		queries: {},
	},
}));
