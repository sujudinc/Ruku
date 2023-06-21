// swiftlint:disable all
import Amplify
import Foundation

extension MonthlyPrayerSchedule {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case year
    case month
    case prayerTimes
    case creator
    case mosque
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let monthlyPrayerSchedule = MonthlyPrayerSchedule.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .private, operations: [.read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "MonthlyPrayerSchedules"
    
    model.attributes(
      .index(fields: ["creatorId"], name: "byCreator"),
      .index(fields: ["mosqueId"], name: "byMosque"),
      .primaryKey(fields: [monthlyPrayerSchedule.id])
    )
    
    model.fields(
      .field(monthlyPrayerSchedule.id, is: .required, ofType: .string),
      .field(monthlyPrayerSchedule.year, is: .required, ofType: .int),
      .field(monthlyPrayerSchedule.month, is: .required, ofType: .int),
      .field(monthlyPrayerSchedule.prayerTimes, is: .required, ofType: .embeddedCollection(of: PrayerTime.self)),
      .belongsTo(monthlyPrayerSchedule.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .belongsTo(monthlyPrayerSchedule.mosque, is: .optional, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .field(monthlyPrayerSchedule.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(monthlyPrayerSchedule.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension MonthlyPrayerSchedule: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}