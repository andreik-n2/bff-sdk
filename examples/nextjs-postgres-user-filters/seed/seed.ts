import { createClient } from '../components/generated/client';
import fetch from 'node-fetch';

const seed = async () => {
	const client = createClient({
		customFetch: fetch as any,
	});
	const user = await client.query({
		operationName: 'UserByEmail',
		input: {
			email: 'jens@virgograph.com',
		},
	});
	if (user?.data?.db_findFirstUser) {
		return;
	}
	const nodes = await client.mutate({
		operationName: 'CreateNode',
		input: {
			data: [
				{
					name: 'A',
					created_at: new Date(2020, 0, 1).toISOString(),
				},
				{
					name: 'B',
					created_at: new Date(2020, 0, 2).toISOString(),
				},
				{
					name: 'C',
					created_at: new Date(2020, 0, 3).toISOString(),
				},
				{
					name: 'D',
					created_at: new Date(2020, 0, 4).toISOString(),
				},
			],
		},
	});
	console.log('seed:nodes', nodes);
	const out = await client.mutate({
		operationName: 'CreateUser',
		input: {
			data: {
				name: 'Jens',
				email: 'jens@virgograph.com',
				Filter: {
					create: {
						node_created_after: new Date(2020, 0, 2).toISOString(),
					},
				},
			},
		},
	});
	console.log('seed:user', JSON.stringify(out));
};

seed();
