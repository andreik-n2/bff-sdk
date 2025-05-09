import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { configureWunderGraphServer } from '@virgograph/sdk/server';

export default configureWunderGraphServer(() => ({
	hooks: {
		queries: {},
		mutations: {},
	},
	graphqlServers: [
		{
			serverName: 'gql',
			apiNamespace: 'gql',
			schema: new GraphQLSchema({
				query: new GraphQLObjectType({
					name: 'RootQueryType',
					fields: {
						hello: {
							type: GraphQLString,
							resolve() {
								return 'world';
							},
						},
					},
				}),
			}),
		},
	],
}));
