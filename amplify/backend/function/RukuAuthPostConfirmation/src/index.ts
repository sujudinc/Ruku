import { sanitizeException } from "@ruku/common-layer/exceptions"

import { Event } from "./event"
import { addToGroup, createUser } from "./modules"

export const handler = async (event: Event) => {
	try {
		await Promise.all([addToGroup(event), createUser(event)])

		return event
	} catch (error) {
		console.error("---------- ERROR: ", JSON.stringify(error, null, 2))
		console.error("---------- EVENT: ", JSON.stringify(event, null, 2))

		return sanitizeException(error)
	}
}
