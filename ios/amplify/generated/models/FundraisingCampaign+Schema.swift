// swiftlint:disable all
import Amplify
import Foundation

extension FundraisingCampaign {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case title
    case description
    case featureImage
    case type
    case goal
    case goalDate
    case currentAmount
    case currency
    case creator
    case mosque
    case donations
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let fundraisingCampaign = FundraisingCampaign.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .private, operations: [.read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "FundraisingCampaigns"
    
    model.attributes(
      .index(fields: ["creatorId"], name: "byCreator"),
      .index(fields: ["mosqueId"], name: "byMosque"),
      .primaryKey(fields: [fundraisingCampaign.id])
    )
    
    model.fields(
      .field(fundraisingCampaign.id, is: .required, ofType: .string),
      .field(fundraisingCampaign.title, is: .required, ofType: .string),
      .field(fundraisingCampaign.description, is: .optional, ofType: .string),
      .field(fundraisingCampaign.featureImage, is: .optional, ofType: .string),
      .field(fundraisingCampaign.type, is: .required, ofType: .enum(type: FundraisingCampaignType.self)),
      .field(fundraisingCampaign.goal, is: .required, ofType: .double),
      .field(fundraisingCampaign.goalDate, is: .required, ofType: .dateTime),
      .field(fundraisingCampaign.currentAmount, is: .required, ofType: .double),
      .field(fundraisingCampaign.currency, is: .required, ofType: .string),
      .belongsTo(fundraisingCampaign.creator, is: .optional, ofType: User.self, targetNames: ["creatorId"]),
      .belongsTo(fundraisingCampaign.mosque, is: .optional, ofType: Mosque.self, targetNames: ["mosqueId"]),
      .hasMany(fundraisingCampaign.donations, is: .optional, ofType: Donation.self, associatedWith: Donation.keys.fundraisingCampaign),
      .field(fundraisingCampaign.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(fundraisingCampaign.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension FundraisingCampaign: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}