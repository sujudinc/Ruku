// swiftlint:disable all
import Amplify
import Foundation

extension AbortMultipartUploadOutput {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case success
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let abortMultipartUploadOutput = AbortMultipartUploadOutput.keys
    
    model.pluralName = "AbortMultipartUploadOutputs"
    
    model.fields(
      .field(abortMultipartUploadOutput.success, is: .required, ofType: .bool)
    )
    }
}