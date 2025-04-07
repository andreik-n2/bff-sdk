import { configureWunderGraphServer } from '@virgograph/sdk/server';

export default configureWunderGraphServer(() => ({
	hooks: {},
	graphqlServers: [],
}));
