import type { CustomMessageVerifyUserAttributeTriggerEvent } from "aws-lambda"

import type { CustomMessage, CustomMessageBuilder, Locale } from "../types"

export default class VerifyUserAttributeCustomMessage
	implements CustomMessageBuilder<CustomMessageVerifyUserAttributeTriggerEvent>
{
	private event: CustomMessageVerifyUserAttributeTriggerEvent

	constructor(event: CustomMessageVerifyUserAttributeTriggerEvent) {
		this.event = event
	}

	sendEmail(): CustomMessageVerifyUserAttributeTriggerEvent {
		const { event } = this

		const response = this.response({
			locale: event.request.userAttributes.locale as Locale || "en",
			name: event.request.userAttributes.name,
			code: event.request.codeParameter,
		})

		event.response = response

		return event
	}

	private response = (params: {
		locale: Locale
		name: string
		code: string
	}): CustomMessage => {
		const { locale, name, code } = params
	
		return {
			en: {
				emailSubject: "Reset my password",
				emailMessage: `Hello ${name}, your new one-time code is ${code}.`,
				smsMessage: `Hello ${name}, your new one-time code is ${code}`,
			},
			ar: {
				emailSubject: "إعادة تعيين كلمة المرور",
				emailMessage: `مرحبًا ${name}، رمزك الجديد لمرة واحدة هو ${code}.`,
				smsMessage: `مرحبًا ${name}، رمزك الجديد لمرة واحدة هو ${code}`,
			},
		}[locale]
	}
}
