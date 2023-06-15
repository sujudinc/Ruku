// swiftlint:disable all
import Amplify
import Foundation

extension Hours {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case monday
    case tuesday
    case wednesday
    case thursday
    case friday
    case saturday
    case sunday
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let hours = Hours.keys
    
    model.pluralName = "Hours"
    
    model.fields(
      .field(hours.monday, is: .optional, ofType: .embedded(type: Day.self)),
      .field(hours.tuesday, is: .optional, ofType: .embedded(type: Day.self)),
      .field(hours.wednesday, is: .optional, ofType: .embedded(type: Day.self)),
      .field(hours.thursday, is: .optional, ofType: .embedded(type: Day.self)),
      .field(hours.friday, is: .optional, ofType: .embedded(type: Day.self)),
      .field(hours.saturday, is: .optional, ofType: .embedded(type: Day.self)),
      .field(hours.sunday, is: .optional, ofType: .embedded(type: Day.self))
    )
    }
}