import { ENVS } from "@ruku/common-layer/configs"
import { DynamoDBService } from "@ruku/common-layer/services"
import { API } from "@ruku/common-layer/types"

import { Event } from "../event"

const _dynamoDBService = new DynamoDBService()

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

	await _dynamoDBService.createItem({
		tableName: ENVS.DYNAMODB_TABLES.User,
		item: {
			id: userId,
			selfie: null,
			firstName: given_name,
			lastName: family_name,
			email,
			phone: null,
			type: userType === "ADMIN" ? API.UserType.ADMIN : API.UserType.USER,
			status: API.UserStatus.ACTIVE,
		},
	})

	return event
}
