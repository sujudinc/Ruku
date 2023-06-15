// swiftlint:disable all
import Amplify
import Foundation

extension PrayerTime {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case type
    case athan
    case iqamah
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let prayerTime = PrayerTime.keys
    
    model.pluralName = "PrayerTimes"
    
    model.fields(
      .field(prayerTime.type, is: .required, ofType: .enum(type: PrayerType.self)),
      .field(prayerTime.athan, is: .required, ofType: .dateTime),
      .field(prayerTime.iqamah, is: .required, ofType: .dateTime)
    )
    }
}