import { Event } from "./event"

export const handler = async (event: Event): Promise<Event> => {
	console.info("Received S3 event:", JSON.stringify(event, null, 2))

	const bucket = event.Records[0].s3.bucket.name
	const key = event.Records[0].s3.object.key

	console.info(`Bucket: ${bucket}`, `Key: ${key}`)

	await Promise.all([])

	return event
}
