import { Callback, Context } from "aws-lambda";

import allowEmails from "./email-filter-allowlist";
import denyEmails from "./email-filter-denylist";
import { Event } from "./event";

export const handler = async (
  event: Event,
  context: Context,
  callback: Callback
): Promise<Event> => {
  await Promise.all([
    allowEmails(event, context, callback),
    denyEmails(event, context, callback),
  ]);

  return event;
};