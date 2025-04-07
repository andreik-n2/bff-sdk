import { configureWunderGraphServer } from '@virgograph/sdk/server';

export default configureWunderGraphServer(() => ({
	hooks: {
		queries: {
			Countries: {
				preResolve: async ({ operations }) => {},
			},
		},
		mutations: {},
	},
}));
