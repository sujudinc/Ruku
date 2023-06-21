// swiftlint:disable all
import Amplify
import Foundation

extension UploadedPart {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case partNumber
    case eTag
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let uploadedPart = UploadedPart.keys
    
    model.pluralName = "UploadedParts"
    
    model.fields(
      .field(uploadedPart.partNumber, is: .required, ofType: .int),
      .field(uploadedPart.eTag, is: .required, ofType: .string)
    )
    }
}