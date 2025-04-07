import { configureWunderGraphServer } from '@virgograph/sdk/server';

export default configureWunderGraphServer(() => ({
	hooks: {
		queries: {
			Continents: {
				preResolve: async ({ log }) => {
					log.info('preResolve');
				},
			},
		},
		mutations: {},
	},
}));
