import {
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
    UpdateItemCommand,
    DeleteItemCommand,
    ScanCommand,
    QueryCommand,
    BatchGetItemCommand,
    BatchWriteItemCommand,
    PutItemCommandInput,
    GetItemCommandInput,
    UpdateItemCommandInput,
    DeleteItemCommandInput,
    ScanCommandInput,
    QueryCommandInput,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

export interface DynamoDbOperation {
    execute(
        params:
            | PutItemCommandInput
            | GetItemCommandInput
            | UpdateItemCommandInput
            | DeleteItemCommandInput
            | ScanCommandInput
            | QueryCommandInput
            | Record<string, any>[]
    ): Promise<any>;
}

export default class DynamoModelApi {
    private operationFactory: OperationFactory;

    constructor(dynamoDB: DynamoDBClient, tableName: string) {
        this.operationFactory = new OperationFactory(dynamoDB, tableName);
    }

    async execute(operationName: string, params: any): Promise<any> {
        const operation = this.operationFactory.createOperation(operationName);
        return operation.execute(params);
    }
}

export class OperationFactory {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) {}

    createOperation(type: string): DynamoDbOperation {
        switch (type) {
            case "create":
                return new CreateOperation(this.dynamoDB, this.tableName);
            case "read":
                return new ReadOperation(this.dynamoDB, this.tableName);
            case "update":
                return new UpdateOperation(this.dynamoDB, this.tableName);
            case "delete":
                return new DeleteOperation(this.dynamoDB, this.tableName);
            case "scan":
                return new ScanOperation(this.dynamoDB, this.tableName);
            case "query":
                return new QueryOperation(this.dynamoDB, this.tableName);
            case "batchGet":
                return new BatchReadOperation(this.dynamoDB, this.tableName);
            case "batchWrite":
                return new BatchWriteOperation(this.dynamoDB, this.tableName);
            case "batchDelete":
                return new BatchDeleteOperation(this.dynamoDB, this.tableName);
            default:
                throw new Error(`Unsupported operation: ${type}`);
        }
    }
}

export class CreateOperation implements DynamoDbOperation {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) { }

    async execute(
        params: PutItemCommandInput
    ): Promise<Record<string, any> | null> {
        const { Attributes } = await this.dynamoDB.send(
            new PutItemCommand({
                ...params,
                TableName: this.tableName,
            })
        );

        return Attributes ? unmarshall(Attributes) : null;
    }
}

export class ReadOperation implements DynamoDbOperation {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) { }

    async execute(
        params: GetItemCommandInput
    ): Promise<Record<string, any> | null> {
        const { Item } = await this.dynamoDB.send(
            new GetItemCommand({
                ...params,
                TableName: this.tableName,
            })
        );

        return Item ? unmarshall(Item) : null;
    }
}

export class UpdateOperation implements DynamoDbOperation {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) { }

    async execute(
        params: UpdateItemCommandInput
    ): Promise<Record<string, any> | null> {
        const { Attributes } = await this.dynamoDB.send(
            new UpdateItemCommand({
                ...params,
                TableName: this.tableName,
            })
        );

        return Attributes ? unmarshall(Attributes) : null;
    }
}

export class DeleteOperation implements DynamoDbOperation {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) { }

    async execute(
        params: DeleteItemCommandInput
    ): Promise<Record<string, any> | null> {
        const { Attributes } = await this.dynamoDB.send(
            new DeleteItemCommand({
                ...params,
                TableName: this.tableName,
            })
        );

        return Attributes ? unmarshall(Attributes) : null;
    }
}

export class ScanOperation implements DynamoDbOperation {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) { }

    async execute(params: ScanCommandInput): Promise<Record<string, any> | null> {
        const { Items } = await this.dynamoDB.send(
            new ScanCommand({
                ...params,
                TableName: this.tableName,
            })
        );

        return (Items ?? []).map((item) => unmarshall(item));
    }
}

export class QueryOperation implements DynamoDbOperation {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) { }

    async execute(
        params: QueryCommandInput
    ): Promise<Record<string, any> | null> {
        const { Items } = await this.dynamoDB.send(
            new QueryCommand({
                ...params,
                TableName: this.tableName,
            })
        );

        return (Items ?? []).map((item) => unmarshall(item));
    }
}

export class BatchReadOperation implements DynamoDbOperation {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) { }

    async execute(params: Record<string, any>[]): Promise<Record<string, any>[]> {
        const { Responses } = await this.dynamoDB.send(
            new BatchGetItemCommand({
                RequestItems: {
                    [this.tableName]: {
                        Keys: params.map((key) => marshall(key)),
                    },
                },
            })
        );

        return (Responses?.[this.tableName] ?? []).map((item) => unmarshall(item));
    }
}

export class BatchWriteOperation implements DynamoDbOperation {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) { }

    async execute(params: Record<string, any>[]): Promise<Record<string, any>[]> {
        const { UnprocessedItems } = await this.dynamoDB.send(
            new BatchWriteItemCommand({
                RequestItems: {
                    [this.tableName]: params.map((item) => ({
                        PutRequest: {
                            Item: marshall(item),
                        },
                    })),
                },
            })
        );

        if (UnprocessedItems && Object.keys(UnprocessedItems).length > 0) {
            throw new Error("Failed to process all items");
        }

        return params;
    }
}

export class BatchDeleteOperation implements DynamoDbOperation {
    constructor(private dynamoDB: DynamoDBClient, private tableName: string) { }

    async execute(params: Record<string, any>[]): Promise<Record<string, any>[]> {
        const { UnprocessedItems } = await this.dynamoDB.send(
            new BatchWriteItemCommand({
                RequestItems: {
                    [this.tableName]: params.map((key) => ({
                        DeleteRequest: {
                            Key: marshall(key),
                        },
                    })),
                },
            })
        );

        if (UnprocessedItems && Object.keys(UnprocessedItems).length > 0) {
            throw new Error("Failed to process all items");
        }

        return params;
    }
}
