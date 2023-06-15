import { Callback, Context } from "aws-lambda";
import { Event } from "./event";

const domainDenyList: string = process.env.DOMAINDENYLIST!;

export default async (
  event: Event,
  _context: Context,
  _callback: Callback
): Promise<Event> => {
  const { email } = event.request.userAttributes;

  const denyList = domainDenyList.split(",").map((d) => d.trim());
  const domain = email.substring(email.indexOf("@") + 1);

  if (denyList.includes(domain)) {
    throw new Error(`Invalid email domain: ${domain}`);
  }

  return event;
};
