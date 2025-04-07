import { configureWunderGraphServer } from '@virgograph/sdk/server';

export default configureWunderGraphServer(() => ({
	hooks: {
		queries: {},
		mutations: {},
	},
	graphqlServers: [],
}));
