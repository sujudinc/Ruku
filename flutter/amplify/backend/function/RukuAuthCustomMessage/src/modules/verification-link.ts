import authCustomMessage from "../emails/email"
import { Event } from "../event"

export default async (event: Event) => {
	switch (event.triggerSource) {
		case "CustomMessage_SignUp": //Sign-up trigger whenever a new user signs him/herself up.
			return _signUpMessage(event)
		// case "CustomMessage_AdminCreateUser": //When the user is created with adminCreateUser() API
		// 	return adminCreateUserMessage(event)
		// case "CustomMessage_ResendCode": //When user requests the code again.
		// 	return resendCodeMessage(event)
		// case "CustomMessage_ForgotPassword": //Forgot password request initiated by user
		// 	return forgotPassword(event)
		// case "CustomMessage_UpdateUserAttribute": //Whenever the user attributes are updated
		// 	return updateUserAttributeMessage(event)
		// case "CustomMessage_VerifyUserAttribute": //Verify mobile number/email
		// 	return verifyUserAttribute(event)
		// case "CustomMessage_Authentication": //MFA authenitcation code.
		// 	return authenitcationMessage(event)
		default:
			return event
	}
}

const _signUpMessage = (event: Event) => {
	const {
		region,
		userName,
		request: { codeParameter },
		callerContext: { clientId },
	} = event
	const redirectUrl = `${process.env.REDIRECTURL!}/?username=${userName}`
	const resourcePrefix = process.env.RESOURCENAME!.split("CustomMessage")[0]
	const hyphenRegions = [
		"us-east-1",
		"us-west-1",
		"us-west-2",
		"ap-southeast-1",
		"ap-southeast-2",
		"ap-northeast-1",
		"eu-west-1",
		"sa-east-1",
	]
	const separator = hyphenRegions.includes(region) ? "-" : "."
	const payload = Buffer.from(
		JSON.stringify({
			userName,
			redirectUrl,
			region,
			clientId,
		}),
	).toString("base64")
	const bucketUrl = `http://${resourcePrefix}verificationbucket-${process.env.ENV}.s3-website${separator}${region}.amazonaws.com`
	const url = `${bucketUrl}/?data=${payload}&code=${codeParameter}`
	const message = `${process.env.EMAILMESSAGE} \n ${url}`

	event.response.smsMessage = message
	event.response.emailSubject = process.env.EMAILSUBJECT!
	event.response.emailMessage = authCustomMessage({
		heading: "🔒 Confirm your email",
		body: `Please copy the code: ${codeParameter}, or click the button below to confirm your email address.`,
		buttonText: "Confirm Account",
		buttonUrl: url,
		disclaimer:
			"If you didn't request this code, you can safely ignore this email.",
	})

	return event
}
