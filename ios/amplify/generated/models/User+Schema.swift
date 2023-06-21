// swiftlint:disable all
import Amplify
import Foundation

extension User {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case selfie
    case firstName
    case lastName
    case email
    case type
    case status
    case createdAnnouncements
    case createdClasses
    case createdCommittees
    case createdGatherings
    case createdFundraisingCampaigns
    case createdMonthlyPrayerSchedules
    case createdMosques
    case createdResources
    case createdServices
    case createdVolunteerTasks
    case instructingClasses
    case donations
    case committees
    case gatherings
    case mosques
    case volunteerTasks
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let user = User.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .private, operations: [.read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "Users"
    
    model.attributes(
      .primaryKey(fields: [user.id])
    )
    
    model.fields(
      .field(user.id, is: .required, ofType: .string),
      .field(user.selfie, is: .optional, ofType: .string),
      .field(user.firstName, is: .required, ofType: .string),
      .field(user.lastName, is: .required, ofType: .string),
      .field(user.email, is: .required, ofType: .string),
      .field(user.type, is: .required, ofType: .enum(type: UserType.self)),
      .field(user.status, is: .required, ofType: .enum(type: UserStatus.self)),
      .hasMany(user.createdAnnouncements, is: .optional, ofType: Announcement.self, associatedWith: Announcement.keys.creator),
      .hasMany(user.createdClasses, is: .optional, ofType: Class.self, associatedWith: Class.keys.creator),
      .hasMany(user.createdCommittees, is: .optional, ofType: Committee.self, associatedWith: Committee.keys.creator),
      .hasMany(user.createdGatherings, is: .optional, ofType: Gathering.self, associatedWith: Gathering.keys.creator),
      .hasMany(user.createdFundraisingCampaigns, is: .optional, ofType: FundraisingCampaign.self, associatedWith: FundraisingCampaign.keys.creator),
      .hasMany(user.createdMonthlyPrayerSchedules, is: .optional, ofType: MonthlyPrayerSchedule.self, associatedWith: MonthlyPrayerSchedule.keys.creator),
      .hasMany(user.createdMosques, is: .optional, ofType: Mosque.self, associatedWith: Mosque.keys.creator),
      .hasMany(user.createdResources, is: .optional, ofType: Resource.self, associatedWith: Resource.keys.creator),
      .hasMany(user.createdServices, is: .optional, ofType: Service.self, associatedWith: Service.keys.creator),
      .hasMany(user.createdVolunteerTasks, is: .optional, ofType: VolunteerTask.self, associatedWith: VolunteerTask.keys.creator),
      .hasMany(user.instructingClasses, is: .optional, ofType: Class.self, associatedWith: Class.keys.instructor),
      .hasMany(user.donations, is: .optional, ofType: Donation.self, associatedWith: Donation.keys.donor),
      .hasMany(user.committees, is: .optional, ofType: CommitteeMembers.self, associatedWith: CommitteeMembers.keys.user),
      .hasMany(user.gatherings, is: .optional, ofType: GatheringAttendees.self, associatedWith: GatheringAttendees.keys.user),
      .hasMany(user.mosques, is: .optional, ofType: MosqueFollowers.self, associatedWith: MosqueFollowers.keys.user),
      .hasMany(user.volunteerTasks, is: .optional, ofType: VolunteerTaskUser.self, associatedWith: VolunteerTaskUser.keys.user),
      .field(user.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(user.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension User: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}