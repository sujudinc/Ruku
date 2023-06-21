/* Amplify Params - DO NOT EDIT
    API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT
    API_RUKUAPI_GRAPHQLAPIIDOUTPUT
    API_RUKUAPI_GRAPHQLAPIKEYOUTPUT
    STORAGE_RUKUSTORAGE_BUCKETNAME
    ENV
    REGION
Amplify Params - DO NOT EDIT */

import { Callback, Context } from "aws-lambda";
import { Event } from "./event";
import {
    S3,
    CreateMultipartUploadCommandOutput,
    CreateMultipartUploadCommand,
} from "@aws-sdk/client-s3";

const GRAPHQL_ENDPOINT: string = process.env.API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT!;
const GRAPHQL_API_KEY: string = process.env.API_RUKUAPI_GRAPHQLAPIKEYOUTPUT!;
const bucket: string = process.env.STORAGE_OPERANCEFILESTORAGE_BUCKETNAME!;
const region: string = process.env.REGION!;

const s3: S3 = new S3({ region });

type InitiateMultipartUploadOutput = {
    bucket: string;
    key: string;
    uploadId: string;
};

// const appsync = new AppSyncService({
//     endpoint: GRAPHQL_ENDPOINT,
//     apiKey: GRAPHQL_API_KEY,
// });

export const handler = async (
    event: Event,
    _context: Context,
    _callback: Callback
): Promise<InitiateMultipartUploadOutput> => {
    const { sub: userId } = event.identity.claims;
    const { objectId, fileName, contentType, uploadType } = event.arguments.input;
    const key = `${uploadType}/${objectId}/${fileName}`;

    switch (uploadType) {
        case "SELFIE":
            if (userId !== objectId) {
                throw new Error("Invalid user");
            }
            break;
        default:
            throw new Error("Invalid upload type");
    }

    try {
        const result: CreateMultipartUploadCommandOutput = await s3.send(
            new CreateMultipartUploadCommand({
                Bucket: bucket,
                Key: key,
                ContentType: contentType,
            })
        );

        return {
            bucket,
            key,
            uploadId: result.UploadId!,
        };
    } catch (error) {
        throw error;
    }
};
