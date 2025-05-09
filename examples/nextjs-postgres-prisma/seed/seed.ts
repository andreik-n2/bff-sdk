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
	const out = await client.mutate({
		operationName: 'CreateUser',
		input: {
			name: 'Jens',
			bio: 'Founder@WunderGraph',
			email: 'jens@virgograph.com',
			title: 'Welcome to WunderGraph!',
			content: 'This is WunderGraph =)',
			published: true,
		},
	});
	console.log('seed:out', JSON.stringify(out));
};

seed();
