// swiftlint:disable all
import Amplify
import Foundation

public struct Resource: Model {
  public let id: String
  public var title: String
  public var description: String?
  public var type: ResourceType
  public var url: String
  public var creator: User?
  public var mosque: Mosque?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      type: ResourceType,
      url: String,
      creator: User? = nil,
      mosque: Mosque? = nil) {
    self.init(id: id,
      title: title,
      description: description,
      type: type,
      url: url,
      creator: creator,
      mosque: mosque,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      type: ResourceType,
      url: String,
      creator: User? = nil,
      mosque: Mosque? = nil,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.title = title
      self.description = description
      self.type = type
      self.url = url
      self.creator = creator
      self.mosque = mosque
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}