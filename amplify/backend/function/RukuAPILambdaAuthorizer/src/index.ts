import type { Event } from "./event"

type ResolverContext = {
	userid: string
	info: string
	more_info: string
}

type Response = {
	isAuthorized: boolean
	resolverContext: ResolverContext
	deniedFields: string[]
	ttlOverride: number
}

export const handler = (event: Event): Response => {
	const {
		authorizationToken,
		requestContext: { apiId, accountId },
	} = event
	const response = {
		isAuthorized: authorizationToken === "custom-authorized",
		resolverContext: {
			userid: "user-id",
			info: "contextual information A",
			more_info: "contextual information B",
		},
		deniedFields: [
			`arn:aws:appsync:${process.env.AWS_REGION}:${accountId}:apis/${apiId}/types/Event/fields/comments`,
			"Mutation.createEvent",
		],
		ttlOverride: 300,
	}

	return response
}
