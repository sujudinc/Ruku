// swiftlint:disable all
import Amplify
import Foundation

extension InitiateMultipartUploadOutput {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case uploadId
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let initiateMultipartUploadOutput = InitiateMultipartUploadOutput.keys
    
    model.pluralName = "InitiateMultipartUploadOutputs"
    
    model.fields(
      .field(initiateMultipartUploadOutput.uploadId, is: .required, ofType: .string)
    )
    }
}