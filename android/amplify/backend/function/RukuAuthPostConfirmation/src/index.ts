import { Callback, Context } from "aws-lambda";

import addToGroup from "./add-to-group";
import createUser from "./create-user";
import { Event } from "./event";

export const handler = async (
  event: Event,
  context: Context,
  callback: Callback
) => {
  await Promise.all([
    addToGroup(event, context, callback),
    createUser(event, context, callback),
  ]);

  return event;
};