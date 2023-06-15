import { DynamoDB, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { Callback, Context } from "aws-lambda";

import { Event } from "./event";

const userTable = process.env.API_MOHJI_USERTABLE_NAME as string;
const ddb: DynamoDB = new DynamoDB({ region: process.env.REGION! });

export default async (event: Event, _context: Context, _callback: Callback) => {
  const {
    request: {
      userAttributes: {
        sub: userId,
        email,
        given_name,
        family_name,
        "custom:userType": userType,
      },
    },
  } = event;

  await _createUser(userId, given_name, family_name, email, userType);

  return event;
};

const _createUser = async (
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  userType: string
) => {
  const createdAt: string = new Date().toISOString();
  const user: User = {
    __typename: "User",
    id,
    selfie: null,
    firstName,
    lastName,
    email,
    type: userType === "ADMIN" ? UserType.ADMIN : UserType.USER,
    status: UserStatus.ACTIVE,
    createdAt,
    updatedAt: createdAt,
    _version: 1,
    _deleted: null,
    _lastChangedAt: new Date().getTime(),
    owner: id,
  };

  return await ddb.send(
    new PutItemCommand({
      TableName: userTable,
      Item: marshall(user),
    })
  );
};

type User = {
  __typename: "User";
  id: string;
  selfie?: string | null;
  firstName: string;
  lastName: string;
  email: string;
  type: UserType;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

enum UserType {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
  USER = "USER",
  USER_READ_ONLY = "USER_READ_ONLY",
}

enum UserStatus {
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",
  DEACTIVATED = "DEACTIVATED",
}
