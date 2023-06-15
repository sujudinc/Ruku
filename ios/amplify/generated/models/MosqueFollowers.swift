// swiftlint:disable all
import Amplify
import Foundation

public struct MosqueFollowers: Model {
  public let id: String
  public var mosque: Mosque
  public var user: User
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      mosque: Mosque,
      user: User) {
    self.init(id: id,
      mosque: mosque,
      user: user,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      mosque: Mosque,
      user: User,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.mosque = mosque
      self.user = user
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}