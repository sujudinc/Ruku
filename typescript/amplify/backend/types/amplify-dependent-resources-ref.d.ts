export type AmplifyDependentResourcesAttributes = {
	api: {
		AdminQueries: {
			ApiId: "string"
			ApiName: "string"
			RootUrl: "string"
		}
		RukuAPI: {
			GraphQLAPIEndpointOutput: "string"
			GraphQLAPIIdOutput: "string"
			GraphQLAPIKeyOutput: "string"
		}
	}
	auth: {
		RukuAuth: {
			AppClientID: "string"
			AppClientIDWeb: "string"
			CreatedSNSRole: "string"
			GoogleWebClient: "string"
			HostedUIDomain: "string"
			IdentityPoolId: "string"
			IdentityPoolName: "string"
			OAuthMetadata: "string"
			UserPoolArn: "string"
			UserPoolId: "string"
			UserPoolName: "string"
		}
		userPoolGroups: {
			AdminGroupRole: "string"
			JamaahGroupRole: "string"
			ModeratorGroupRole: "string"
			SuperAdminGroupRole: "string"
		}
	}
	function: {
		AdminQueriesa8865030: {
			Arn: "string"
			LambdaExecutionRole: "string"
			LambdaExecutionRoleArn: "string"
			Name: "string"
			Region: "string"
		}
		RukuAPILambdaAuthorizer: {
			Arn: "string"
			LambdaExecutionRole: "string"
			LambdaExecutionRoleArn: "string"
			Name: "string"
			Region: "string"
		}
		RukuAuthCustomMessage: {
			Arn: "string"
			LambdaExecutionRole: "string"
			LambdaExecutionRoleArn: "string"
			Name: "string"
			Region: "string"
		}
		RukuAuthPostAuthentication: {
			Arn: "string"
			LambdaExecutionRole: "string"
			LambdaExecutionRoleArn: "string"
			Name: "string"
			Region: "string"
		}
		RukuAuthPostConfirmation: {
			Arn: "string"
			LambdaExecutionRole: "string"
			LambdaExecutionRoleArn: "string"
			Name: "string"
			Region: "string"
		}
		RukuAuthPreAuthentication: {
			Arn: "string"
			LambdaExecutionRole: "string"
			LambdaExecutionRoleArn: "string"
			Name: "string"
			Region: "string"
		}
		RukuAuthPreSignup: {
			Arn: "string"
			LambdaExecutionRole: "string"
			LambdaExecutionRoleArn: "string"
			Name: "string"
			Region: "string"
		}
		RukuStorageTrigger: {
			Arn: "string"
			LambdaExecutionRole: "string"
			LambdaExecutionRoleArn: "string"
			Name: "string"
			Region: "string"
		}
		rukuCommonLayerTs: {
			Arn: "string"
		}
	}
	storage: {
		RukuStorage: {
			BucketName: "string"
			Region: "string"
		}
	}
}
