import type { CustomMessageAuthenticationTriggerEvent } from "aws-lambda";

import type { CustomMessage, CustomMessageBuilder, Locale } from "../types";

export default class AuthenticationCustomMessage
	implements CustomMessageBuilder<CustomMessageAuthenticationTriggerEvent> {
	private event: CustomMessageAuthenticationTriggerEvent;

	constructor(event: CustomMessageAuthenticationTriggerEvent) {
		this.event = event;
	}

	sendEmail(): CustomMessageAuthenticationTriggerEvent {
		const { event } = this;

		const response = this.response({
			locale: event.request.userAttributes.locale as Locale,
			name: event.request.userAttributes.name,
			code: event.request.codeParameter,
		});

		event.response = response;

		return event;
	}

	private response = (params: {
		locale: Locale;
		name: string;
		code: string;
	}): CustomMessage => {
		const { locale, name, code } = params
		
		return {
			en: {
				emailSubject: "Your MFA Code",
				emailMessage: `Hello ${name}, your Multi-Factor Authentication code is: ${code}. This code will expire in 5 minutes.`,
				smsMessage: `Hello ${name}, your Multi-Factor Authentication code is: ${code}. This code will expire in 5 minutes.`,
			},
			ar: {
				emailSubject: "رمز المصادقة متعددة العوامل الخاص بك",
				emailMessage: `مرحبًا ${name}، رمز المصادقة متعددة العوامل الخاص بك هو: ${code}. سينتهي صلاحية هذا الرمز خلال 5 دقائق.`,
				smsMessage: `مرحبًا ${name}، رمز المصادقة متعددة العوامل الخاص بك هو: ${code}. سينتهي صلاحية هذا الرمز خلال 5 دقائق.`,
			},
		}[locale]
	};
}
