// swiftlint:disable all
import Amplify
import Foundation

extension OperatingHours {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case open
    case close
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let operatingHours = OperatingHours.keys
    
    model.pluralName = "OperatingHours"
    
    model.fields(
      .field(operatingHours.open, is: .required, ofType: .time),
      .field(operatingHours.close, is: .required, ofType: .time)
    )
    }
}