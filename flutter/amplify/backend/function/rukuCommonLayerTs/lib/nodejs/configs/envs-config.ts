export const AWS = {
	Region: process.env.REGION as string,
	Env: process.env.ENV as string,
}

export const RUKU_API = {
	Endpoint: process.env.API_RUKUAPI_GRAPHQLAPIENDPOINTOUTPUT as string,
	Id: process.env.API_RUKUAPI_GRAPHQLAPIIDOUTPUT as string,
	Key: process.env.API_RUKUAPI_GRAPHQLAPIKEYOUTPUT as string,
}

export const S3_BUCKET = process.env.STORAGE_RUKUSTORAGE_BUCKETNAME as string

export const COGNITO_IDS = {
	UserPool: process.env.USERPOOL as string,
	Group: process.env.GROUP as string,
	Client: process.env.CLIENT as string,
}

export const DYNAMODB_TABLES = {
	User: process.env.API_RUKUAPI_USERTABLE_NAME as string,
}

export const SES_EMAILS = {
	NoReply: process.env.NO_REPLY_EMAIL as string,
	General: process.env.GENERAL_EMAIL as string,
	Marketing: process.env.MARKETING_EMAIL as string,
	Support: process.env.SUPPORT_EMAIL as string,
	Test: process.env.TEST_EMAIL as string,
}

export const URLS = {
	Sujud: process.env.SUJUD_URL as string,
}
