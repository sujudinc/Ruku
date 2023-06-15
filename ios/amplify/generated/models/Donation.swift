// swiftlint:disable all
import Amplify
import Foundation

public struct Donation: Model {
  public let id: String
  public var amount: Double
  public var currency: String
  public var isAnonymous: Bool
  public var donor: User?
  public var fundraisingCampaign: FundraisingCampaign?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      amount: Double,
      currency: String,
      isAnonymous: Bool,
      donor: User? = nil,
      fundraisingCampaign: FundraisingCampaign? = nil) {
    self.init(id: id,
      amount: amount,
      currency: currency,
      isAnonymous: isAnonymous,
      donor: donor,
      fundraisingCampaign: fundraisingCampaign,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      amount: Double,
      currency: String,
      isAnonymous: Bool,
      donor: User? = nil,
      fundraisingCampaign: FundraisingCampaign? = nil,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.amount = amount
      self.currency = currency
      self.isAnonymous = isAnonymous
      self.donor = donor
      self.fundraisingCampaign = fundraisingCampaign
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}