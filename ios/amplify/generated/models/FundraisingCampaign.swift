// swiftlint:disable all
import Amplify
import Foundation

public struct FundraisingCampaign: Model {
  public let id: String
  public var title: String
  public var description: String?
  public var featureImage: String?
  public var type: FundraisingCampaignType
  public var goal: Double
  public var goalDate: Temporal.DateTime
  public var currentAmount: Double
  public var currency: String
  public var creator: User?
  public var mosque: Mosque?
  public var donations: List<Donation>?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      featureImage: String? = nil,
      type: FundraisingCampaignType,
      goal: Double,
      goalDate: Temporal.DateTime,
      currentAmount: Double,
      currency: String,
      creator: User? = nil,
      mosque: Mosque? = nil,
      donations: List<Donation>? = []) {
    self.init(id: id,
      title: title,
      description: description,
      featureImage: featureImage,
      type: type,
      goal: goal,
      goalDate: goalDate,
      currentAmount: currentAmount,
      currency: currency,
      creator: creator,
      mosque: mosque,
      donations: donations,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      featureImage: String? = nil,
      type: FundraisingCampaignType,
      goal: Double,
      goalDate: Temporal.DateTime,
      currentAmount: Double,
      currency: String,
      creator: User? = nil,
      mosque: Mosque? = nil,
      donations: List<Donation>? = [],
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.title = title
      self.description = description
      self.featureImage = featureImage
      self.type = type
      self.goal = goal
      self.goalDate = goalDate
      self.currentAmount = currentAmount
      self.currency = currency
      self.creator = creator
      self.mosque = mosque
      self.donations = donations
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}