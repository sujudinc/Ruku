// swiftlint:disable all
import Amplify
import Foundation

public struct GatheringAttendees: Model {
  public let id: String
  public var gathering: Gathering
  public var user: User
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      gathering: Gathering,
      user: User) {
    self.init(id: id,
      gathering: gathering,
      user: user,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      gathering: Gathering,
      user: User,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.gathering = gathering
      self.user = user
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}