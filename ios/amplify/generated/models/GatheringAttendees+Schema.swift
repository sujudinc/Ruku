// swiftlint:disable all
import Amplify
import Foundation

extension GatheringAttendees {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case gathering
    case user
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let gatheringAttendees = GatheringAttendees.keys
    
    model.pluralName = "GatheringAttendees"
    
    model.attributes(
      .index(fields: ["gatheringId"], name: "byGathering"),
      .index(fields: ["userId"], name: "byUser"),
      .primaryKey(fields: [gatheringAttendees.id])
    )
    
    model.fields(
      .field(gatheringAttendees.id, is: .required, ofType: .string),
      .belongsTo(gatheringAttendees.gathering, is: .required, ofType: Gathering.self, targetNames: ["gatheringId"]),
      .belongsTo(gatheringAttendees.user, is: .required, ofType: User.self, targetNames: ["userId"]),
      .field(gatheringAttendees.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(gatheringAttendees.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension GatheringAttendees: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}