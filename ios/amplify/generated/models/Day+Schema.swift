// swiftlint:disable all
import Amplify
import Foundation

extension Day {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case type
    case operatingHours
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let day = Day.keys
    
    model.pluralName = "Days"
    
    model.fields(
      .field(day.type, is: .required, ofType: .enum(type: DayType.self)),
      .field(day.operatingHours, is: .optional, ofType: .embeddedCollection(of: OperatingHours.self))
    )
    }
}