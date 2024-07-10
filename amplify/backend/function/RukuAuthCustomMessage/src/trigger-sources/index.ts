import type { CustomMessageTriggerEvent } from "aws-lambda"

import AdminCreateUserCustomMessage from "./admin-create-user"
import AuthenticationCustomMessage from "./authentication"
import ForgotPasswordCustomMessage from "./forgot-password"
import ResendCodeCustomMessage from "./resend-code"
import SignupCustomMessage from "./signup"
import UpdateUserAttributeCustomMessage from "./update-user-attribute"
import VerifyUserAttributeCustomMessage from "./verify-user-attribute"

import type { CustomMessageBuilder, Strategy } from "../types"

export default class CustomMessageStrategy
	implements Strategy<CustomMessageTriggerEvent, CustomMessageTriggerEvent>
{
	fromEvent(
		param: CustomMessageTriggerEvent,
	): CustomMessageBuilder<CustomMessageTriggerEvent> {
		console.log("triggerSource: ", param.triggerSource)
		switch (param.triggerSource) {
			case "CustomMessage_AdminCreateUser":
				return new AdminCreateUserCustomMessage(param)
			case "CustomMessage_Authentication":
				return new AuthenticationCustomMessage(param)
			case "CustomMessage_ForgotPassword":
				return new ForgotPasswordCustomMessage(param)
			case "CustomMessage_ResendCode":
				return new ResendCodeCustomMessage(param)
			case "CustomMessage_SignUp":
				return new SignupCustomMessage(param)
			case "CustomMessage_UpdateUserAttribute":
				return new UpdateUserAttributeCustomMessage(param)
			case "CustomMessage_VerifyUserAttribute":
				return new VerifyUserAttributeCustomMessage(param)
		}
	}
}
