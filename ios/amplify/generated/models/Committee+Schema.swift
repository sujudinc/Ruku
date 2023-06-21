// swiftlint:disable all
import Amplify
import Foundation

extension Committee {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case title
    case description
    case creator
    case mosque
    case members
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let committee = Committee.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .private, operations: [.read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "Committees"
    
    model.attributes(
      .index(fields: ["creatorId"], name: "byCreator"),
      .index(fields: ["mosqueId"], name: "byMosque"),
      .primaryKey(fields: [committee.id])
    )
    
    model.fields(
      .field(committee.id, is: .required, ofType: .string),
      .field(committee.title, is: .required, ofType: .string),
      .field(committee.description, is: .optional, ofType: .string),
      .belongsTo(committee.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .belongsTo(committee.mosque, is: .optional, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .hasMany(committee.members, is: .optional, ofType: CommitteeMembers.self, associatedWith: CommitteeMembers.keys.committee),
      .field(committee.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(committee.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension Committee: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}