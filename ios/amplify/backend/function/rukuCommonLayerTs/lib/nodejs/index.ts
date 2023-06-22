import * as API from "./graphql/api";
import * as Mutations from "./graphql/mutations";
import * as Queries from "./graphql/queries";
import AppSyncService, { AppSyncOperationParams } from "./app-sync-service";
import DynamoModelApi, {
    CreateOperation,
    ReadOperation,
    UpdateOperation,
    DeleteOperation,
    ScanOperation,
    QueryOperation,
    BatchReadOperation,
    BatchWriteOperation,
    BatchDeleteOperation,
    OperationFactory,
    DynamoDbOperation,
} from "./dynamo-model-api";
import StorageService from "./storage-service";

export {
    API,
    Mutations,
    Queries,
    AppSyncService,
    DynamoModelApi,
    CreateOperation,
    ReadOperation,
    UpdateOperation,
    DeleteOperation,
    ScanOperation,
    QueryOperation,
    BatchReadOperation,
    BatchWriteOperation,
    BatchDeleteOperation,
    OperationFactory,
    StorageService,
};

export type { AppSyncOperationParams, DynamoDbOperation };
