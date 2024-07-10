export type Locale = "en" | "ar"

export type CustomMessage = {
	emailSubject: string
	emailMessage: string
	smsMessage: string
}

export type CustomMessageBuilder<Event> = {
	sendEmail(): Event
}

export type Strategy<Param, Event> = {
	build(param: Param): CustomMessageBuilder<Event>
}
