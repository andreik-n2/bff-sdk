import { configureWunderGraphGeneration, templates } from '@virgograph/sdk';
import { golangClient } from '@virgograph/golang-client';

export default configureWunderGraphGeneration({
	codeGenerators: [
		{
			templates: [
				...golangClient.all({
					packageName: 'client',
				}),
			],
			path: './generated/golang/client',
		},
	],
	operationsGenerator: (config) => {
		config.includeNamespaces('weather', 'federated');
	},
});
