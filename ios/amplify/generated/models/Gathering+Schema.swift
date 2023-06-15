// swiftlint:disable all
import Amplify
import Foundation

extension Gathering {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case title
    case description
    case gatheringType
    case startDate
    case endDate
    case location
    case creator
    case mosque
    case attendees
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let gathering = Gathering.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "Gatherings"
    
    model.attributes(
      .index(fields: ["creatorId"], name: "byCreator"),
      .index(fields: ["mosqueId"], name: "byMosque"),
      .primaryKey(fields: [gathering.id])
    )
    
    model.fields(
      .field(gathering.id, is: .required, ofType: .string),
      .field(gathering.title, is: .required, ofType: .string),
      .field(gathering.description, is: .optional, ofType: .string),
      .field(gathering.gatheringType, is: .required, ofType: .enum(type: GatheringType.self)),
      .field(gathering.startDate, is: .required, ofType: .dateTime),
      .field(gathering.endDate, is: .optional, ofType: .dateTime),
      .field(gathering.location, is: .required, ofType: .embedded(type: Location.self)),
      .belongsTo(gathering.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .belongsTo(gathering.mosque, is: .optional, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .hasMany(gathering.attendees, is: .optional, ofType: GatheringAttendees.self, associatedWith: GatheringAttendees.keys.gathering),
      .field(gathering.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(gathering.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension Gathering: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}