import { Callback, Context } from "aws-lambda";

import { Event } from "./event";
import verificationLink from "./verification-link";

export const handler = async (
  event: Event,
  context: Context,
  callback: Callback
) => {
  await Promise.all([
    verificationLink(event, context, callback)
  ]);

  return event;
};