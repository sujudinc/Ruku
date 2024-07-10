import type { CustomMessageAdminCreateUserTriggerEvent } from "aws-lambda";

import type { CustomMessage, CustomMessageBuilder, Locale } from "../types";

export default class AdminCreateUserCustomMessage
	implements CustomMessageBuilder<CustomMessageAdminCreateUserTriggerEvent> {
	private event: CustomMessageAdminCreateUserTriggerEvent;

	constructor(event: CustomMessageAdminCreateUserTriggerEvent) {
		this.event = event;
	}

	sendEmail(): CustomMessageAdminCreateUserTriggerEvent {
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
				emailSubject: "Your new account",
				emailMessage: `Hello ${name}, an account has been created for you. Your temporary password is: ${code}. Please log in and change your password immediately.`,
				smsMessage: `Hello ${name}, an account has been created for you. Check your email for your temporary password.`,
			},
			ar: {
				emailSubject: "حسابك الجديد",
				emailMessage: `مرحبًا ${name}، تم إنشاء حساب لك. كلمة المرور المؤقتة الخاصة بك هي: ${code}. يرجى تسجيل الدخول وتغيير كلمة المرور الخاصة بك على الفور.`,
				smsMessage: `مرحبًا ${name}، تم إنشاء حساب لك. تحقق من بريدك الإلكتروني للحصول على كلمة المرور المؤقتة الخاصة بك.`,
			},
		}[locale]
	};
}
