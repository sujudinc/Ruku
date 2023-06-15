// swiftlint:disable all
import Amplify
import Foundation

public struct Service: Model {
  public let id: String
  public var type: ServiceType
  public var description: String?
  public var documents: [String?]?
  public var creator: User?
  public var mosque: Mosque?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      type: ServiceType,
      description: String? = nil,
      documents: [String?]? = nil,
      creator: User? = nil,
      mosque: Mosque? = nil) {
    self.init(id: id,
      type: type,
      description: description,
      documents: documents,
      creator: creator,
      mosque: mosque,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      type: ServiceType,
      description: String? = nil,
      documents: [String?]? = nil,
      creator: User? = nil,
      mosque: Mosque? = nil,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.type = type
      self.description = description
      self.documents = documents
      self.creator = creator
      self.mosque = mosque
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}