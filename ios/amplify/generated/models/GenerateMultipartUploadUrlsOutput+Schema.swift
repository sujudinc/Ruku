// swiftlint:disable all
import Amplify
import Foundation

extension GenerateMultipartUploadUrlsOutput {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case items
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let generateMultipartUploadUrlsOutput = GenerateMultipartUploadUrlsOutput.keys
    
    model.pluralName = "GenerateMultipartUploadUrlsOutputs"
    
    model.fields(
      .field(generateMultipartUploadUrlsOutput.items, is: .required, ofType: .embeddedCollection(of: GenerateMultipartUploadUrlOutput.self))
    )
    }
}