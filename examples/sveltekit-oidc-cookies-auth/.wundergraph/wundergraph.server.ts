import { configureWunderGraphServer } from '@virgograph/sdk/server';

export default configureWunderGraphServer(() => ({
	hooks: {
		authentication: {
			async mutatingPostAuthentication({operations, user}){						
				if(!user.email) {
					return {
						status: 'deny',
						message: 'Email is required'
					}
				}
				const {data, errors} = await operations.mutate({
					operationName: 'UserAdd',
					input: {
						email: user.email as string,
						firstName: user.firstName ? user.firstName : '',
						lastName: user.lastName ? user.lastName : '',
						name: user.name ? user.name : '',
						picture: user.picture ? user.picture : ''
					}
				})

				if(errors || !data?.db_upsertOneUser?.id) {
					return {
						status: 'deny',
						message: 'Error creating the user'
					}
				}
				return {
					status: 'ok',
					user: data.db_upsertOneUser
				}
			},
		},
		queries: {},
		mutations: {
			
		},
	},
}));
