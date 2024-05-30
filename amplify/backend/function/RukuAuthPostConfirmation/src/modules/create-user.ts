import { ENVS } from "@ruku/common-layer/configs"
import { DynamoDBService } from "@ruku/common-layer/services"
import { API } from "@ruku/common-layer/types"

import { Event } from "../event"


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

	if (!userId || !email || !given_name || !family_name || !userType) {
		throw new Error("Missing required attributes")
	}

	const now = new Date().toISOString()

	const user: API.User = {
		__typename: "User",
		id: userId,
		selfie: null,
		firstName: given_name,
		lastName: family_name,
		email,
		phone: null,
		type: userType as API.UserType,
		status: API.UserStatus.ACTIVE,
		createdAt: now,
		updatedAt: now,
	}

	await new DynamoDBService().createItem({
		tableName: ENVS.DYNAMODB_TABLES.User,
		item: user,
	})

	return event
}
