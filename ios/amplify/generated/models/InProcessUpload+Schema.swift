// swiftlint:disable all
import Amplify
import Foundation

extension InProcessUpload {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case uploadId
    case fileName
    case contentType
    case createdAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let inProcessUpload = InProcessUpload.keys
    
    model.pluralName = "InProcessUploads"
    
    model.fields(
      .field(inProcessUpload.uploadId, is: .required, ofType: .string),
      .field(inProcessUpload.fileName, is: .required, ofType: .string),
      .field(inProcessUpload.contentType, is: .required, ofType: .string),
      .field(inProcessUpload.createdAt, is: .required, ofType: .string)
    )
    }
}