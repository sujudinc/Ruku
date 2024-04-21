import { sanitizeException } from "@ruku/common-layer/exceptions"
import { Callback } from "aws-lambda"

import { Event } from "./event"
import { addToGroup, createUser } from "./modules"

export const handler = async (event: Event, callback: Callback) => {
	try {
		await Promise.all([addToGroup(event), createUser(event)])

		return event
	} catch (error) {
		console.error("---------- ERROR: ", error)
		console.error("---------- EVENT: ", JSON.stringify(event, null, 2))

		return callback(sanitizeException(error))
	}
}
