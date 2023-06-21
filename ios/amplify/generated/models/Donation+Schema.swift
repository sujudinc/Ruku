// swiftlint:disable all
import Amplify
import Foundation

extension Donation {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case amount
    case currency
    case isAnonymous
    case donor
    case fundraisingCampaign
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let donation = Donation.keys
    
    model.authRules = [
      rule(allow: .owner, ownerField: "owner", identityClaim: "cognito:username", provider: .userPools, operations: [.create, .update, .delete, .read]),
      rule(allow: .private, operations: [.read]),
      rule(allow: .public, operations: [.read])
    ]
    
    model.pluralName = "Donations"
    
    model.attributes(
      .index(fields: ["donorId"], name: "byDonor"),
      .index(fields: ["fundraisingCampaignId"], name: "byFundraisingCampaign"),
      .primaryKey(fields: [donation.id])
    )
    
    model.fields(
      .field(donation.id, is: .required, ofType: .string),
      .field(donation.amount, is: .required, ofType: .double),
      .field(donation.currency, is: .required, ofType: .string),
      .field(donation.isAnonymous, is: .required, ofType: .bool),
      .belongsTo(donation.donor, is: .optional, ofType: User.self, targetNames: ["donorId"]),
      .belongsTo(donation.fundraisingCampaign, is: .optional, ofType: FundraisingCampaign.self, targetNames: ["fundraisingCampaignId"]),
      .field(donation.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(donation.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}

extension Donation: ModelIdentifiable {
  public typealias IdentifierFormat = ModelIdentifierFormat.Default
  public typealias IdentifierProtocol = DefaultModelIdentifier<Self>
}