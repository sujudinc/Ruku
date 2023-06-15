// swiftlint:disable all
import Amplify
import Foundation

public struct CommitteeMembers: Model {
  public let id: String
  public var committee: Committee
  public var user: User
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      committee: Committee,
      user: User) {
    self.init(id: id,
      committee: committee,
      user: user,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      committee: Committee,
      user: User,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.committee = committee
      self.user = user
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}