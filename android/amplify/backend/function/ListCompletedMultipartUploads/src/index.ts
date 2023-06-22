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
    S3,
    ListPartsCommand,
    ListPartsCommandOutput,
} from "@aws-sdk/client-s3";
// import { API } from "rukuCommonLayerTs/";
import { Event } from "./event";

const GRAPHQL_ENDPOINT: string = process.env.API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT!;
const GRAPHQL_API_KEY: string = process.env.API_RUKUAPI_GRAPHQLAPIKEYOUTPUT!;
const BUCKET: string = process.env.STORAGE_OPERANCEFILESTORAGE_BUCKETNAME!;
const REGION: string = process.env.REGION!;

const s3: S3 = new S3({ region: REGION });

interface UploadedPart {
    partNumber: number;
    eTag: string;
    size: number;
}

interface ListCompletedMultipartUploadsOutput {
    items: UploadedPart[];
}

export const handler = async (
    event: Event,
    _context: Context,
    _callback: Callback
): Promise<ListCompletedMultipartUploadsOutput> => {
    const { key, uploadId } = event.arguments.input;
    const userId = event.identity.claims.sub;

    try {
        const outout: ListPartsCommandOutput = await s3.send(
            new ListPartsCommand({
                Bucket: BUCKET,
                Key: key,
                UploadId: uploadId,
            })
        );

        return {
            items: outout.Parts?.map((part) => ({
                partNumber: part.PartNumber!,
                eTag: part.ETag!,
                size: part.Size!,
            }))!,
        };
    } catch (error) {
        throw error;
    }
};
