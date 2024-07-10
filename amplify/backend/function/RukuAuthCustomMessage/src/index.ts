import type { CustomMessageTriggerEvent } from "aws-lambda"

import CustomMessageStrategy from "./trigger-sources"

export const handler = async (event: CustomMessageTriggerEvent) => {
	try {
		console.log("hi")
		return new CustomMessageStrategy().fromEvent(event).sendEmail()
	} catch (error) {
		console.error('-------- ERROR: ', error, JSON.stringify(event, null, 2))

		throw error
	}
}
