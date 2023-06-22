/* Amplify Params - DO NOT EDIT
    API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT
    API_RUKUAPI_GRAPHQLAPIIDOUTPUT
    API_RUKUAPI_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
    STORAGE_RUKUSTORAGE_BUCKETNAME
Amplify Params - DO NOT EDIT */

import { Callback, Context } from "aws-lambda";
import {
    AbortMultipartUploadCommand,
    AbortMultipartUploadCommandOutput,
    S3Client,
} from "@aws-sdk/client-s3";
// import { API } from "rukuCommonLayerTs/";
import { Event } from "./event";

const GRAPHQL_ENDPOINT: string = process.env.API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT!;
const GRAPHQL_API_KEY: string = process.env.API_RUKUAPI_GRAPHQLAPIKEYOUTPUT!;
const BUCKET: string = process.env.STORAGE_OPERANCEFILESTORAGE_BUCKETNAME!;
const REGION: string = process.env.REGION!;

const s3: S3Client = new S3Client({ region: REGION });

interface AbortMultipartUploadOutput {
    success: Boolean;
}

export const handler = async (
    event: Event,
    _context: Context,
    _callback: Callback
): Promise<AbortMultipartUploadOutput> => {
    const { key, uploadId } = event.arguments.input;
    const userId = event.identity.claims.sub;
    const uploadType = key.split("/")[0];
    const objectId = key.split("/")[1];

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
        const output: AbortMultipartUploadCommandOutput = await s3.send(
            new AbortMultipartUploadCommand({
                Bucket: BUCKET,
                Key: key,
                UploadId: uploadId
            })
        );

        return {
            success: output.$metadata.httpStatusCode === 200 || output.$metadata.httpStatusCode === 204,
        };
    } catch (error) {
        throw error;
    }
};
