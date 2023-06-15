import {
  AdminAddUserToGroupCommand,
  CognitoIdentityProviderClient,
  CreateGroupCommand,
  GetGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { Callback, Context } from "aws-lambda";

import { Event } from "./event";

const cipc = new CognitoIdentityProviderClient({ region: process.env.REGION! });

export default async (event: Event, _context: Context, _callback: Callback) => {
  const {
    userPoolId,
    request: {
      userAttributes: {
        sub: userId,
        "custom:userType": userType,
      },
    },
  } = event;
  const groupName = userType === "ADMIN" ? "Admins" : "Jamaah";
  const groupParams = {
    GroupName: groupName,
    UserPoolId: userPoolId,
  };

  try {
    await cipc.send(new GetGroupCommand(groupParams));
  } catch (e) {
    await cipc.send(new CreateGroupCommand(groupParams));
  }

  await cipc.send(
    new AdminAddUserToGroupCommand({
      GroupName: groupName,
      UserPoolId: userPoolId,
      Username: userId,
    })
  );

  return event;
};
