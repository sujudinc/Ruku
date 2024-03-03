export const STRIPE = {
	SecretKey: process.env.STRIPE_SECRET_KEY as string,
	WebhookAccount: process.env.STRIPE_WEBHOOK_ACCOUNT_SECRET_KEY as string,
	WebhookConnectedAccount: process.env
		.STRIPE_WEBHOOK_CONNECTED_ACCOUNT_SECRET_KEY as string,
}
