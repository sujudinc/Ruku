import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
    ListObjectsCommand,
    PutObjectCommandInput,
    GetObjectCommandInput,
    DeleteObjectCommandInput,
    ListObjectsCommandInput,
} from "@aws-sdk/client-s3";
import { Readable } from 'stream';

export default class StorageService {
    constructor(private s3: S3Client, private bucketName: string) {}

    async upload(params: PutObjectCommandInput): Promise<void> {
        const uploadParams: PutObjectCommandInput = {
            ...params,
            Bucket: this.bucketName,
        };

        await this.s3.send(new PutObjectCommand(uploadParams));
    }

    async download(params: GetObjectCommandInput): Promise<Readable | undefined> {
        const downloadParams: GetObjectCommandInput = {
            ...params,
            Bucket: this.bucketName,
        };
        const { Body } = await this.s3.send(new GetObjectCommand(downloadParams));

        return Body as Readable;
    }

    async delete(params: DeleteObjectCommandInput): Promise<void> {
        const deleteParams: DeleteObjectCommandInput = {
            ...params,
            Bucket: this.bucketName,
        };

        await this.s3.send(new DeleteObjectCommand(deleteParams));
    }

    async list(params?: ListObjectsCommandInput): Promise<Array<string>> {
        const listParams: ListObjectsCommandInput = {
            ...params,
            Bucket: this.bucketName,
        };
        const { Contents } = await this.s3.send(new ListObjectsCommand(listParams));

        return Contents?.map(({ Key }) => Key!) ?? [];
    }
}
