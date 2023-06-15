// swiftlint:disable all
import Amplify
import Foundation

extension `Class` {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case title
    case description
    case startDateTime
    case endDateTime
    case recurring
    case daysOfWeek
    case instructor
    case creator
    case mosque
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let class = Class.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "Classes"
    
    model.attributes(
      .index(fields: ["instructorId"], name: "byInstructor"),
      .index(fields: ["creatorId"], name: "byCreator"),
      .index(fields: ["mosqueId"], name: "byMosque"),
      .primaryKey(fields: [class.id])
    )
    
    model.fields(
      .field(class.id, is: .required, ofType: .string),
      .field(class.title, is: .required, ofType: .string),
      .field(class.description, is: .optional, ofType: .string),
      .field(class.startDateTime, is: .required, ofType: .dateTime),
      .field(class.endDateTime, is: .optional, ofType: .dateTime),
      .field(class.recurring, is: .required, ofType: .bool),
      .field(class.daysOfWeek, is: .optional, ofType: .embeddedCollection(of: DayType.self)),
      .belongsTo(class.instructor, is: .optional, ofType: User.self, targetNames: ["instructorId"]),
      .belongsTo(class.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .belongsTo(class.mosque, is: .optional, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .field(class.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(class.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension Class: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}