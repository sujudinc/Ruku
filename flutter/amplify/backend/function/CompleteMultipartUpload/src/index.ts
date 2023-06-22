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
    S3Client,
    CompleteMultipartUploadCommand,
    CompleteMultipartUploadCommandOutput,
} from "@aws-sdk/client-s3";
// import { API } from "rukuCommonLayerTs/";
import { Event } from "./event";

const GRAPHQL_ENDPOINT: string = process.env.API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT!;
const GRAPHQL_API_KEY: string = process.env.API_RUKUAPI_GRAPHQLAPIKEYOUTPUT!;
const BUCKET: string = process.env.STORAGE_OPERANCEFILESTORAGE_BUCKETNAME!;
const REGION: string = process.env.REGION!;

const s3: S3Client = new S3Client({ region: REGION });

interface CompleteMultipartUploadOutput {
    location: String;
    versionId: String;
}

export const handler = async (
    event: Event,
    _context: Context,
    _callback: Callback
): Promise<CompleteMultipartUploadOutput> => {
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

    try {
        const output: CompleteMultipartUploadCommandOutput = await s3.send(
            new CompleteMultipartUploadCommand({
                Bucket: BUCKET,
                Key: key,
                UploadId: uploadId,
                MultipartUpload: {
                    Parts: parts.map((part) => {
                        return {
                            ETag: part.eTag,
                            PartNumber: part.partNumber,
                        };
                    }),
                },
            })
        );

        return {
            location: output.Location!,
            versionId: output.VersionId!
        };
    } catch (error) {
        throw error;
    }
};
