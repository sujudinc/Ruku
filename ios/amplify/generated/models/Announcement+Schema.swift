// swiftlint:disable all
import Amplify
import Foundation

extension Announcement {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case title
    case content
    case creator
    case mosque
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let announcement = Announcement.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "creatorId", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .private, operations: [.read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "Announcements"
    
    model.attributes(
      .index(fields: ["creatorId"], name: "byCreator"),
      .index(fields: ["mosqueId"], name: "byMosque"),
      .primaryKey(fields: [announcement.id])
    )
    
    model.fields(
      .field(announcement.id, is: .required, ofType: .string),
      .field(announcement.title, is: .required, ofType: .string),
      .field(announcement.content, is: .required, ofType: .string),
      .belongsTo(announcement.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .belongsTo(announcement.mosque, is: .optional, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .field(announcement.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(announcement.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension Announcement: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}