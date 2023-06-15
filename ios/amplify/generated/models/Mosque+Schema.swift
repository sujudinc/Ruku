// swiftlint:disable all
import Amplify
import Foundation

extension Mosque {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case name
    case description
    case images
    case location
    case hours
    case contactInfo
    case liveVideoUrl
    case creator
    case followers
    case announcements
    case classes
    case committees
    case gatherings
    case fundraisingCampaigns
    case monthlyPrayerSchedules
    case resources
    case services
    case volunteerTasks
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let mosque = Mosque.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "Mosques"
    
    model.attributes(
      .index(fields: ["creatorId"], name: "byCreator"),
      .primaryKey(fields: [mosque.id])
    )
    
    model.fields(
      .field(mosque.id, is: .required, ofType: .string),
      .field(mosque.name, is: .required, ofType: .string),
      .field(mosque.description, is: .optional, ofType: .string),
      .field(mosque.images, is: .optional, ofType: .embeddedCollection(of: String.self)),
      .field(mosque.location, is: .required, ofType: .embedded(type: Location.self)),
      .field(mosque.hours, is: .required, ofType: .embedded(type: Hours.self)),
      .field(mosque.contactInfo, is: .optional, ofType: .embedded(type: ContactInfo.self)),
      .field(mosque.liveVideoUrl, is: .optional, ofType: .string),
      .belongsTo(mosque.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .hasMany(mosque.followers, is: .optional, ofType: MosqueFollowers.self, associatedWith: MosqueFollowers.keys.mosque),
      .hasMany(mosque.announcements, is: .optional, ofType: Announcement.self, associatedWith: Announcement.keys.mosque),
      .hasMany(mosque.classes, is: .optional, ofType: Class.self, associatedWith: Class.keys.mosque),
      .hasMany(mosque.committees, is: .optional, ofType: Committee.self, associatedWith: Committee.keys.mosque),
      .hasMany(mosque.gatherings, is: .optional, ofType: Gathering.self, associatedWith: Gathering.keys.mosque),
      .hasMany(mosque.fundraisingCampaigns, is: .optional, ofType: FundraisingCampaign.self, associatedWith: FundraisingCampaign.keys.mosque),
      .hasMany(mosque.monthlyPrayerSchedules, is: .optional, ofType: MonthlyPrayerSchedule.self, associatedWith: MonthlyPrayerSchedule.keys.mosque),
      .hasMany(mosque.resources, is: .optional, ofType: Resource.self, associatedWith: Resource.keys.mosque),
      .hasMany(mosque.services, is: .optional, ofType: Service.self, associatedWith: Service.keys.mosque),
      .hasMany(mosque.volunteerTasks, is: .optional, ofType: VolunteerTask.self, associatedWith: VolunteerTask.keys.mosque),
      .field(mosque.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(mosque.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension Mosque: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}