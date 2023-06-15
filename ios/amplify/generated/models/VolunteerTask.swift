// swiftlint:disable all
import Amplify
import Foundation

public struct VolunteerTask: Model {
  public let id: String
  public var name: String
  public var description: String?
  public var startDate: Temporal.DateTime
  public var endDate: Temporal.DateTime?
  public var creator: User?
  public var mosque: Mosque?
  public var volunteers: List<VolunteerTaskUser>?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      name: String,
      description: String? = nil,
      startDate: Temporal.DateTime,
      endDate: Temporal.DateTime? = nil,
      creator: User? = nil,
      mosque: Mosque? = nil,
      volunteers: List<VolunteerTaskUser>? = []) {
    self.init(id: id,
      name: name,
      description: description,
      startDate: startDate,
      endDate: endDate,
      creator: creator,
      mosque: mosque,
      volunteers: volunteers,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      name: String,
      description: String? = nil,
      startDate: Temporal.DateTime,
      endDate: Temporal.DateTime? = nil,
      creator: User? = nil,
      mosque: Mosque? = nil,
      volunteers: List<VolunteerTaskUser>? = [],
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.name = name
      self.description = description
      self.startDate = startDate
      self.endDate = endDate
      self.creator = creator
      self.mosque = mosque
      self.volunteers = volunteers
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}