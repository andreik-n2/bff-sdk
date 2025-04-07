import path from 'path';
import { introspectOpenApiV2 } from './openapi-introspection';

describe('introspectOpenApiV2', () => {
	describe('introspection kind:string', function () {
		it('should introspect yaml string succesfully', async () => {
			const result = await (
				await introspectOpenApiV2({
					source: {
						kind: 'string',
						openAPISpec: `
openapi: 3.0.0
info:
  title: Example API
  version: 1.0.0

paths:
  /example:
    get:
      summary: Get example data
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: string`,
					},
				})
			)({});

			expect(result.DataSources[0].Custom.UpstreamSchema).toMatchSnapshot();
			expect(result.Schema).toMatchSnapshot('wg_schema');
		});

		it('should introspect json string succesfully', async () => {
			const result = await (
				await introspectOpenApiV2({
					source: {
						kind: 'string',
						openAPISpec: `
{
    "openapi": "3.0.0",
    "info": {
        "title": "Example API",
        "version": "1.0.0"
    },
    "paths": {
        "/example": {
            "get": {
                "summary": "Get example data",
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}`,
					},
				})
			)({});

			expect(result.DataSources[0].Custom.UpstreamSchema).toMatchSnapshot();
			expect(result.Schema).toMatchSnapshot('wg_schema');
		});
	});

	describe('introspection kind:object', function () {
		it('should introspect succesfully', async () => {
			const result = await (
				await introspectOpenApiV2({
					source: {
						kind: 'object',
						openAPIObject: {
							openapi: '3.0.0',
							info: {
								title: 'Example API',
								version: '1.0.0',
							},
							paths: {
								'/example': {
									get: {
										summary: 'Get example data',
										responses: {
											'200': {
												description: 'OK',
												content: {
													'application/json': {
														schema: {
															type: 'string',
														},
													},
												},
											},
										},
									},
								},
							},
						},
					},
				})
			)({});

			expect(result.DataSources[0].Custom.UpstreamSchema).toMatchSnapshot();
			expect(result.Schema).toMatchSnapshot('wg_schema');
		});
	});
});
