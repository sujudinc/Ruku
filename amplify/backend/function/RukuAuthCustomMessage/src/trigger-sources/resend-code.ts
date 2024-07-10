import type { CustomMessageResendCodeTriggerEvent } from "aws-lambda";

import type { CustomMessage, CustomMessageBuilder, Locale } from "../types";

export default class ResendCodeCustomMessage
	implements CustomMessageBuilder<CustomMessageResendCodeTriggerEvent> {
	private event: CustomMessageResendCodeTriggerEvent;

	constructor(event: CustomMessageResendCodeTriggerEvent) {
		this.event = event;
	}

	sendEmail(): CustomMessageResendCodeTriggerEvent {
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
		const { locale, name, code } = params;

		return {
			en: {
				emailSubject: "Your new verification code",
				emailMessage: `Hello ${name}, as requested, your new verification code is ${code}.`,
				smsMessage: `Hello ${name}, as requested, your new verification code is ${code}.`,
			},
			ar: {
				emailSubject: "رمز التحقق الجديد الخاص بك",
				emailMessage: `مرحبًا ${name}، كما طلبت، رمز التحقق الجديد الخاص بك هو ${code}.`,
				smsMessage: `مرحبًا ${name}، كما طلبت، رمز التحقق الجديد الخاص بك هو ${code}.`,
			},
		}[locale];
	};
}
