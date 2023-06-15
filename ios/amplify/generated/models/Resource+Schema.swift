// swiftlint:disable all
import Amplify
import Foundation

extension Resource {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case title
    case description
    case type
    case url
    case creator
    case mosque
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let resource = Resource.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "Resources"
    
    model.attributes(
      .index(fields: ["creatorId"], name: "byCreator"),
      .index(fields: ["mosqueId"], name: "byMosque"),
      .primaryKey(fields: [resource.id])
    )
    
    model.fields(
      .field(resource.id, is: .required, ofType: .string),
      .field(resource.title, is: .required, ofType: .string),
      .field(resource.description, is: .optional, ofType: .string),
      .field(resource.type, is: .required, ofType: .enum(type: ResourceType.self)),
      .field(resource.url, is: .required, ofType: .string),
      .belongsTo(resource.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .belongsTo(resource.mosque, is: .optional, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .field(resource.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(resource.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension Resource: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}