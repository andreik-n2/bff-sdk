import { authProviders, configureWunderGraphApplication, cors, introspect, templates } from '@virgograph/sdk';
import operations from './wundergraph.operations';
import server from './wundergraph.server';
import { EnvironmentVariable } from '@virgograph/sdk'

const db = introspect.postgresql({
	apiNamespace: 'db',
	databaseURL: new EnvironmentVariable('DATABASE_URL'),
	introspection: {
		disableCache: true,
	},
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
	apis: [db],
	server,
	operations,
	generate:{
		codeGenerators: [
			{
				templates: [templates.typescript.operations, templates.typescript.linkBuilder]			          
			},
			{
				templates: [templates.typescript.client],
				path: '../src/lib/generated/'
			}
		]
	},
	cors: {
		...cors.allowAll,
		allowedOrigins: ['http://localhost:5173'],
	},
	authentication: {
		cookieBased: {
			providers: [
			  authProviders.demo()
			],			
			authorizedRedirectUris: ['http://localhost:5173'],
		  },

	},
	security: {
		enableGraphQLEndpoint: process.env.NODE_ENV !== 'production'		
	},
});
