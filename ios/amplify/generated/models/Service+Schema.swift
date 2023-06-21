// swiftlint:disable all
import Amplify
import Foundation

extension Service {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case type
    case description
    case documents
    case creator
    case mosque
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let service = Service.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .private, operations: [.read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "Services"
    
    model.attributes(
      .index(fields: ["creatorId"], name: "byCreator"),
      .index(fields: ["mosqueId"], name: "byMosque"),
      .primaryKey(fields: [service.id])
    )
    
    model.fields(
      .field(service.id, is: .required, ofType: .string),
      .field(service.type, is: .required, ofType: .enum(type: ServiceType.self)),
      .field(service.description, is: .optional, ofType: .string),
      .field(service.documents, is: .optional, ofType: .embeddedCollection(of: String.self)),
      .belongsTo(service.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .belongsTo(service.mosque, is: .optional, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .field(service.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(service.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension Service: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}