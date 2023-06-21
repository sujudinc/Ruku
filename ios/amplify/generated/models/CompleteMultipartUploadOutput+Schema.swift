// swiftlint:disable all
import Amplify
import Foundation

extension CompleteMultipartUploadOutput {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case location
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let completeMultipartUploadOutput = CompleteMultipartUploadOutput.keys
    
    model.pluralName = "CompleteMultipartUploadOutputs"
    
    model.fields(
      .field(completeMultipartUploadOutput.location, is: .required, ofType: .string)
    )
    }
}