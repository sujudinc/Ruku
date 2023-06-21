// swiftlint:disable all
import Amplify
import Foundation

extension ListInProcessUploadsOutput {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case items
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let listInProcessUploadsOutput = ListInProcessUploadsOutput.keys
    
    model.pluralName = "ListInProcessUploadsOutputs"
    
    model.fields(
      .field(listInProcessUploadsOutput.items, is: .required, ofType: .embeddedCollection(of: InProcessUpload.self))
    )
    }
}