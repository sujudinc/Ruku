import { GraphQLService } from "@ruku/common-layer/services"
import { API, Mutations } from "@ruku/common-layer/types"

import { Event } from "../event"

const _graphQLService = new GraphQLService()

export default async (event: Event) => {
	const {
		request: {
			userAttributes: {
				sub: userId,
				email,
				given_name,
				family_name,
				"custom:user_type": userType,
			},
		},
	} = event
	const user: API.CreateUserInput = {
		id: userId,
		selfie: null,
		firstName: given_name,
		lastName: family_name,
		email,
		phone: null,
		type: userType === "ADMIN" ? API.UserType.ADMIN : API.UserType.USER,
		status: API.UserStatus.ACTIVE,
	}

	await _graphQLService.executeOperation({
		operation: Mutations.createUser,
		variables: {
			input: user,
		},
	})

	return event
}
