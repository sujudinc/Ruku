// swiftlint:disable all
import Amplify
import Foundation

extension CommitteeMembers {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case committee
    case user
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let committeeMembers = CommitteeMembers.keys
    
    model.pluralName = "CommitteeMembers"
    
    model.attributes(
      .index(fields: ["committeeId"], name: "byCommittee"),
      .index(fields: ["userId"], name: "byUser"),
      .primaryKey(fields: [committeeMembers.id])
    )
    
    model.fields(
      .field(committeeMembers.id, is: .required, ofType: .string),
      .belongsTo(committeeMembers.committee, is: .required, ofType: Committee.self, targetNames: ["committeeId"]),
      .belongsTo(committeeMembers.user, is: .required, ofType: User.self, targetNames: ["userId"]),
      .field(committeeMembers.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(committeeMembers.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension CommitteeMembers: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}