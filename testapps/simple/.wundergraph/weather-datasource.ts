import { defineDatasource, GraphQLDatasourceOptions } from '@virgograph/sdk/datasources';

export const weather = defineDatasource<Partial<Omit<GraphQLDatasourceOptions, 'url'>>>((config) => {
	const { namespace = 'weather', ...rest } = config || {};
	return {
		name: 'weather',
		hooks: {
			'config:setup': async (options) => {
				const { introspect } = await import('@virgograph/sdk');
				options.addApi(
					introspect.graphql({
						apiNamespace: namespace,
						url: 'https://weather-api.wundergraph.com/',
						...rest,
					})
				);
			},
		},
	};
});
