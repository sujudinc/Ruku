// swiftlint:disable all
import Amplify
import Foundation

extension MosqueFollowers {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case mosque
    case user
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let mosqueFollowers = MosqueFollowers.keys
    
    model.pluralName = "MosqueFollowers"
    
    model.attributes(
      .index(fields: ["mosqueId"], name: "byMosque"),
      .index(fields: ["userId"], name: "byUser"),
      .primaryKey(fields: [mosqueFollowers.id])
    )
    
    model.fields(
      .field(mosqueFollowers.id, is: .required, ofType: .string),
      .belongsTo(mosqueFollowers.mosque, is: .required, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .belongsTo(mosqueFollowers.user, is: .required, ofType: User.self, targetNames: ["userId"]),
      .field(mosqueFollowers.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(mosqueFollowers.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension MosqueFollowers: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}