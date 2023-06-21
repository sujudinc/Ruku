// swiftlint:disable all
import Amplify
import Foundation

extension ListUploadedPartsOutput {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case items
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let listUploadedPartsOutput = ListUploadedPartsOutput.keys
    
    model.pluralName = "ListUploadedPartsOutputs"
    
    model.fields(
      .field(listUploadedPartsOutput.items, is: .required, ofType: .embeddedCollection(of: UploadedPart.self))
    )
    }
}