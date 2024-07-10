import type { CustomMessageForgotPasswordTriggerEvent } from "aws-lambda"

import type { CustomMessage, CustomMessageBuilder, Locale } from "../types"

export default class ForgotPasswordCustomMessage
	implements CustomMessageBuilder<CustomMessageForgotPasswordTriggerEvent> {
	private event: CustomMessageForgotPasswordTriggerEvent

	constructor(event: CustomMessageForgotPasswordTriggerEvent) {
		this.event = event
	}

	sendEmail(): CustomMessageForgotPasswordTriggerEvent {
		const { event } = this

		const response = this.response({
			locale: event.request.userAttributes.locale as Locale,
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
				emailSubject: "Reset your password",
				emailMessage: `Hello ${name}, your new one-time code to reset your password is ${code}.`,
				smsMessage: `Hello ${name}, your new one-time code to reset your password is ${code}`,
			},
			ar: {
				emailSubject: "إعادة تعيين كلمة المرور",
				emailMessage: `مرحبًا ${name}، رمزك الجديد لمرة واحدة لإعادة تعيين كلمة المرور هو ${code}.`,
				smsMessage: `مرحبًا ${name}، رمزك الجديد لمرة واحدة لإعادة تعيين كلمة المرور هو ${code}`,
			},
		}[locale]
	}
}
