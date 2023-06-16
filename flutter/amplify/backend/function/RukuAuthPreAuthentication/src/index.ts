import { Callback, Context } from "aws-lambda";

import { Event } from "./event";

export const handler = async (
  event: Event,
  _context: Context,
  _callback: Callback
): Promise<Event> => {
  await Promise.all([]);

  return event;
};