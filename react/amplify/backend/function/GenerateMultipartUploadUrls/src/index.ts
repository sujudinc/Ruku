/* Amplify Params - DO NOT EDIT
    API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT
    API_RUKUAPI_GRAPHQLAPIIDOUTPUT
    API_RUKUAPI_GRAPHQLAPIKEYOUTPUT
    STORAGE_RUKUSTORAGE_BUCKETNAME
    ENV
    REGION
Amplify Params - DO NOT EDIT */

import { Callback, Context } from "aws-lambda";
import { S3Client, UploadPartCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { API } from "rukuCommonLayerTs/";
import { Event } from "./event";

const GRAPHQL_ENDPOINT: string = process.env.API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT!;
const GRAPHQL_API_KEY: string = process.env.API_RUKUAPI_GRAPHQLAPIKEYOUTPUT!;
const bucket: string = process.env.STORAGE_OPERANCEFILESTORAGE_BUCKETNAME!;
const region: string = process.env.REGION!;

const s3: S3Client = new S3Client({ region });

interface GenerateMultipartUploadUrlsOutput {
    items: GenerateMultipartUploadUrlOutput[];
}

interface GenerateMultipartUploadUrlOutput {
    partNumber: number;
    url: string;
}

export const handler = async (
    event: Event,
    _context: Context,
    _callback: Callback
): Promise<GenerateMultipartUploadUrlsOutput> => {
    const { key, uploadId, parts } = event.arguments.input;
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

    const promises: Promise<string>[] = [];

    for (let index = 1; index < parts; index++) {
        promises.push(
            getSignedUrl(
                s3,
                new UploadPartCommand({
                    Bucket: bucket,
                    Key: key,
                    UploadId: uploadId,
                    PartNumber: index,
                }),
                { expiresIn: 3600 }
            )
        );
    }

    try {
        const results = await Promise.all(promises);

        return {
            items: results.map((url, index) => ({
                partNumber: index + 1,
                url,
            })),
        };
    } catch (error) {
        throw error;
    }
};
