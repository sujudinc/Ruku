import type { CustomMessageSignUpTriggerEvent } from "aws-lambda"

import type { CustomMessage, CustomMessageBuilder, Locale } from "../types"

export default class SignupCustomMessage
	implements CustomMessageBuilder<CustomMessageSignUpTriggerEvent> {
	private event: CustomMessageSignUpTriggerEvent

	constructor(event: CustomMessageSignUpTriggerEvent) {
		this.event = event
	}

	sendEmail(): CustomMessageSignUpTriggerEvent {
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
				emailSubject: "Welcome to Sujud!",
				emailMessage: `Welcome ${name}! Your verification code is ${code}. Please use this to complete your signup.`,
				smsMessage: `Welcome ${name}! Your verification code is ${code}. Please use this to complete your signup.`,
			},
			ar: {
				emailSubject: "تحقق من حسابك",
				emailMessage: `مرحبًا ${name}! رمز التحقق الخاص بك هو ${code}. يرجى استخدام هذا لإكمال التسجيل.`,
				smsMessage: `مرحبًا ${name}! رمز التحقق الخاص بك هو ${code}. يرجى استخدام هذا لإكمال التسجيل.`,
			},
		}[locale]
	}
}
