// swiftlint:disable all
import Amplify
import Foundation

extension GenerateMultipartUploadUrlOutput {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case partNumber
    case url
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let generateMultipartUploadUrlOutput = GenerateMultipartUploadUrlOutput.keys
    
    model.pluralName = "GenerateMultipartUploadUrlOutputs"
    
    model.fields(
      .field(generateMultipartUploadUrlOutput.partNumber, is: .required, ofType: .int),
      .field(generateMultipartUploadUrlOutput.url, is: .required, ofType: .string)
    )
    }
}