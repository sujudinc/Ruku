/* eslint-disable */
/*
 * Copyright 2019-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
import {
  AdminAddUserToGroupCommand,
  AdminConfirmSignUpCommand,
  AdminDisableUserCommand,
  AdminEnableUserCommand,
  AdminGetUserCommand,
  AdminListGroupsForUserCommand,
  AdminRemoveUserFromGroupCommand,
  AdminUserGlobalSignOutCommand,
  CognitoIdentityProviderClient,
  ListGroupsCommand,
  ListUsersCommand,
  ListUsersInGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const UserPoolId = process.env.USERPOOL;
const cisp = new CognitoIdentityProviderClient({ region: process.env.REGION! });

export async function addUserToGroup(Username: string, GroupName: string) {
  const params = {
    GroupName,
    UserPoolId,
    Username,
  };

  console.log(`Attempting to add ${Username} to ${GroupName}`);

  try {
    await cisp.send(new AdminAddUserToGroupCommand(params));
    console.log(`Success adding ${Username} to ${GroupName}`);
    return {
      message: `Success adding ${Username} to ${GroupName}`,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function removeUserFromGroup(Username: string, GroupName: string) {
  const params = {
    GroupName,
    UserPoolId,
    Username,
  };

  console.log(`Attempting to remove ${Username} from ${GroupName}`);

  try {
    await cisp.send(new AdminRemoveUserFromGroupCommand(params));
    console.log(`Removed ${Username} from ${GroupName}`);
    return {
      message: `Removed ${Username} from ${GroupName}`,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// Confirms as an admin without using a confirmation code.
export async function confirmUserSignUp(Username: string) {
  const params = {
    UserPoolId,
    Username,
  };

  try {
    await cisp.send(new AdminConfirmSignUpCommand(params));
    console.log(`Confirmed ${Username} registration`);
    return {
      message: `Confirmed ${Username} registration`,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function disableUser(Username: string) {
  const params = {
    UserPoolId,
    Username,
  };

  try {
    await cisp.send(new AdminDisableUserCommand(params));
    console.log(`Disabled ${Username}`);
    return {
      message: `Disabled ${Username}`,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function enableUser(Username: string) {
  const params = {
    UserPoolId,
    Username,
  };

  try {
    await cisp.send(new AdminEnableUserCommand(params));
    console.log(`Enabled ${Username}`);
    return {
      message: `Enabled ${Username}`,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getUser(Username: string) {
  const params = {
    UserPoolId,
    Username,
  };

  console.log(`Attempting to retrieve information for ${Username}`);

  try {
    const result = await cisp.send(new AdminGetUserCommand(params));
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function listUsers(Limit?: number, PaginationToken?: string) {
  const params = {
    UserPoolId,
    ...(Limit && { Limit }),
    ...(PaginationToken && { PaginationToken }),
  };

  console.log("Attempting to list users");

  try {
    const result = await cisp.send(new ListUsersCommand(params));
    // Rename to NextToken for consistency with other Cognito APIs
    const newResult: any = result;
    newResult.NextToken = result.PaginationToken;
    delete newResult.PaginationToken;

    return newResult;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function listGroups(Limit?: number, PaginationToken?: string) {
  const params = {
    UserPoolId,
    ...(Limit && { Limit }),
    ...(PaginationToken && { PaginationToken }),
  };

  console.log("Attempting to list groups");

  try {
    const result = await cisp.send(new ListGroupsCommand(params));
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function listGroupsForUser(
  Username: string,
  Limit?: number,
  NextToken?: string
) {
  const params = {
    UserPoolId,
    Username,
    ...(Limit && { Limit }),
    ...(NextToken && { NextToken }),
  };

  console.log(`Attempting to list groups for ${Username}`);

  try {
    const result = await cisp.send(new AdminListGroupsForUserCommand(params));
    /**
     * We are filtering out the results that seem to be innapropriate for client applications
     * to prevent any informaiton disclosure. Customers can modify if they have the need.
     */
    result.Groups?.forEach((val) => {
      delete val.UserPoolId,
        delete val.LastModifiedDate,
        delete val.CreationDate,
        delete val.Precedence,
        delete val.RoleArn;
    });
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function listUsersInGroup(
  GroupName: string,
  Limit?: number,
  NextToken?: string
) {
  const params = {
    UserPoolId,
    GroupName,
    ...(Limit && { Limit }),
    ...(NextToken && { NextToken }),
  };

  console.log(`Attempting to list users in group ${GroupName}`);

  try {
    const result = await cisp.send(new ListUsersInGroupCommand(params));
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// Signs out from all devices, as an administrator.
export async function signUserOut(Username: string) {
  const params = {
    UserPoolId,
    Username,
  };

  console.log(`Attempting to sign out ${Username}`);

  try {
    await cisp.send(new AdminUserGlobalSignOutCommand(params));
    console.log(`Signed out ${Username} from all devices`);
    return {
      message: `Signed out ${Username} from all devices`,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
