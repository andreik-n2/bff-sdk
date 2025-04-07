import type { Webhook, WebhookHttpEvent, WebhookHttpResponse } from '@virgograph/sdk/server';

const webhook: Webhook<
	WebhookHttpEvent<{ myBodyVar: string }, { myQueryVar: string }, { myHeaderVar: string }>,
	WebhookHttpResponse<{ hello: string }, { myHeader: string }>
> = {
	handler: async (event, context) => {
		event.method;
		event.url;
		// event.body.myBodyVar;
		event.headers.myHeaderVar;
		event.query.myQueryVar;

		return {
			statusCode: 200,
			headers: {
				myHeader: 'test',
			},
			body: {
				hello: 'github',
			},
		};
	},
};

export default webhook;
