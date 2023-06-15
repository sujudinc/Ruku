// swiftlint:disable all
import Amplify
import Foundation

extension VolunteerTaskUser {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case user
    case volunteerTask
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let volunteerTaskUser = VolunteerTaskUser.keys
    
    model.pluralName = "VolunteerTaskUsers"
    
    model.attributes(
      .index(fields: ["userId"], name: "byUser"),
      .index(fields: ["volunteerTaskId"], name: "byVolunteerTask"),
      .primaryKey(fields: [volunteerTaskUser.id])
    )
    
    model.fields(
      .field(volunteerTaskUser.id, is: .required, ofType: .string),
      .belongsTo(volunteerTaskUser.user, is: .required, ofType: User.self, targetNames: ["userId"]),
      .belongsTo(volunteerTaskUser.volunteerTask, is: .required, ofType: VolunteerTask.self, targetNames: ["volunteerTaskId"]),
      .field(volunteerTaskUser.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(volunteerTaskUser.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension VolunteerTaskUser: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}