import type { CustomMessageTriggerEvent } from "aws-lambda"

import CustomMessageStrategy from "./trigger-sources"

export const handler = async (event: CustomMessageTriggerEvent) => {
	return new CustomMessageStrategy().fromEvent(event).sendEmail()
}
