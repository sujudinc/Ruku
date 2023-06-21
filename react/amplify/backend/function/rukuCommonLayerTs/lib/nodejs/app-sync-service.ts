import { RequestInit, Response } from "node-fetch";

type HttpFetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>;

export interface AppSyncOperationParams {
    query: string;
    variables?: Record<string, any>;
}

export default class AppSyncService {
    constructor(
        private readonly endpoint: string,
        private readonly apiKey: string,
        private readonly fetch: HttpFetch = fetch
    ) {
        if (!endpoint) throw new Error("endpoint is required");
        if (!apiKey) throw new Error("apiKey is required");
    }

    async execute(params: AppSyncOperationParams): Promise<any> {
        const options: RequestInit = {
            method: "POST",
            headers: {
                "x-api-key": this.apiKey,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        };

        let statusCode = 200;
        let response: Response;
        let body: any;

        try {
            response = await this.fetch(this.endpoint, options);
            body = await response.json();
            if (body.errors) statusCode = 400;
        } catch (error) {
            statusCode = 400;
            body = {
                statusCode,
                errors: [
                    {
                        message: error.message,
                        stack: error.stack,
                    },
                ],
            };
        }

        return {
            statusCode,
            body: JSON.stringify(body),
        };
    }
}
