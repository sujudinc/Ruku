// swiftlint:disable all
import Amplify
import Foundation

public struct Committee: Model {
  public let id: String
  public var title: String
  public var description: String?
  public var creator: User?
  public var mosque: Mosque?
  public var members: List<CommitteeMembers>?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      creator: User? = nil,
      mosque: Mosque? = nil,
      members: List<CommitteeMembers>? = []) {
    self.init(id: id,
      title: title,
      description: description,
      creator: creator,
      mosque: mosque,
      members: members,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      creator: User? = nil,
      mosque: Mosque? = nil,
      members: List<CommitteeMembers>? = [],
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.title = title
      self.description = description
      self.creator = creator
      self.mosque = mosque
      self.members = members
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}