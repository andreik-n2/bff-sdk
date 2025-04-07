import { configureWunderGraphGeneration, templates } from '@virgograph/sdk';
import { rustClient } from '@virgograph/rust-client';

export default configureWunderGraphGeneration({
	codeGenerators: [
		{
			templates: [
				// use all the typescript react templates to generate a client
				...templates.typescript.all,
			],
		},
		{
			templates: rustClient(),
			path: '../rust/client',
		},
	],
	operationsGenerator: (config) => {
		config.includeNamespaces('weather');
	},
});
