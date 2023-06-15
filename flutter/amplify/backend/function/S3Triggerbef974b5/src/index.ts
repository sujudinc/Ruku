import { Callback, Context } from "aws-lambda";

import { Event } from "./event";

export const handler = async (
  event: Event,
  _context: Context,
  _callback: Callback
): Promise<Event> => {
  await Promise.all([
    _doSomething(event),
  ]);

  return event;
};


async function _doSomething(event: Event) {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);
}