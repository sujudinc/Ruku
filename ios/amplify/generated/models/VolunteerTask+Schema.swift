// swiftlint:disable all
import Amplify
import Foundation

extension VolunteerTask {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case name
    case description
    case startDate
    case endDate
    case creator
    case mosque
    case volunteers
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let volunteerTask = VolunteerTask.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "VolunteerTasks"
    
    model.attributes(
      .index(fields: ["creatorId"], name: "byCreator"),
      .index(fields: ["mosqueId"], name: "byMosque"),
      .primaryKey(fields: [volunteerTask.id])
    )
    
    model.fields(
      .field(volunteerTask.id, is: .required, ofType: .string),
      .field(volunteerTask.name, is: .required, ofType: .string),
      .field(volunteerTask.description, is: .optional, ofType: .string),
      .field(volunteerTask.startDate, is: .required, ofType: .dateTime),
      .field(volunteerTask.endDate, is: .optional, ofType: .dateTime),
      .belongsTo(volunteerTask.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .belongsTo(volunteerTask.mosque, is: .optional, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .hasMany(volunteerTask.volunteers, is: .optional, ofType: VolunteerTaskUser.self, associatedWith: VolunteerTaskUser.keys.volunteerTask),
      .field(volunteerTask.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(volunteerTask.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension VolunteerTask: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}