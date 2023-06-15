import { Callback, Context } from "aws-lambda";
import { Event } from "./event";

const domainAllowList: string = process.env.DOMAINALLOWLIST!;

export default async (
  event: Event,
  _context: Context,
  _callback: Callback
): Promise<Event> => {
  const { email } = event.request.userAttributes;

  if (domainAllowList.trim() === "") {
    return event;
  }

  const allowList = domainAllowList.split(",").map((d) => d.trim());
  const domain = email.substring(email.indexOf("@") + 1);

  if (allowList.length !== 0) {
    if (!allowList.includes(domain)) {
      throw new Error(`Invalid email domain: ${domain}`);
    }
  }

  return event;
};
