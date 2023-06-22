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
    ListMultipartUploadsCommand,
    ListMultipartUploadsCommandOutput,
    S3,
} from "@aws-sdk/client-s3";
// import { API } from "rukuCommonLayerTs/";
import { Event } from "./event";

const GRAPHQL_ENDPOINT: string = process.env.API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT!;
const GRAPHQL_API_KEY: string = process.env.API_RUKUAPI_GRAPHQLAPIKEYOUTPUT!;
const BUCKET: string = process.env.STORAGE_OPERANCEFILESTORAGE_BUCKETNAME!;
const REGION: string = process.env.REGION!;

const s3: S3 = new S3({ region: REGION });

interface InProgressUpload {
    key: string;
    uploadId: string;
}

interface ListInProgressMultipartUploadsOutput {
    items: InProgressUpload[];
}

export const handler = async (
    event: Event,
    _context: Context,
    _callback: Callback
): Promise<ListInProgressMultipartUploadsOutput> => {
    const userId = event.identity.claims.sub;

    try {
        const output: ListMultipartUploadsCommandOutput = await s3.send(
            new ListMultipartUploadsCommand({
                Bucket: BUCKET,
            })
        );

        return {
            items: output.Uploads?.map((upload) => ({
                key: upload.Key!,
                uploadId: upload.UploadId!,
            }))!,
        };
    } catch (error) {
        throw error;
    }
};
