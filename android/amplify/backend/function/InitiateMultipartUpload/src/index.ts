/* Amplify Params - DO NOT EDIT
    API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT
    API_RUKUAPI_GRAPHQLAPIIDOUTPUT
    API_RUKUAPI_GRAPHQLAPIKEYOUTPUT
    STORAGE_RUKUSTORAGE_BUCKETNAME
    ENV
    REGION
Amplify Params - DO NOT EDIT */

import { Callback, Context } from "aws-lambda";
import {
    S3,
    CreateMultipartUploadCommandOutput,
    CreateMultipartUploadCommand,
} from "@aws-sdk/client-s3";
// import { API } from "rukuCommonLayerTs/";
import { Event } from "./event";

const GRAPHQL_ENDPOINT: string = process.env.API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT!;
const GRAPHQL_API_KEY: string = process.env.API_RUKUAPI_GRAPHQLAPIKEYOUTPUT!;
const BUCKET: string = process.env.STORAGE_OPERANCEFILESTORAGE_BUCKETNAME!;
const REGION: string = process.env.REGION!;

const s3: S3 = new S3({ region: REGION });

type InitiateMultipartUploadOutput = {
    bucket: string;
    key: string;
    uploadId: string;
};

export const handler = async (
    event: Event,
    _context: Context,
    _callback: Callback
): Promise<InitiateMultipartUploadOutput> => {
    const { objectId, fileName, contentType, uploadType } = event.arguments.input;
    const userId = event.identity.claims.sub;
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
        const output: CreateMultipartUploadCommandOutput = await s3.send(
            new CreateMultipartUploadCommand({
                Bucket: BUCKET,
                Key: key,
                ContentType: contentType,
            })
        );

        return {
            bucket: BUCKET,
            key,
            uploadId: output.UploadId!,
        };
    } catch (error) {
        throw error;
    }
};
