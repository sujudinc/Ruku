// swiftlint:disable all
import Amplify
import Foundation

public struct Gathering: Model {
  public let id: String
  public var title: String
  public var description: String?
  public var gatheringType: GatheringType
  public var startDate: Temporal.DateTime
  public var endDate: Temporal.DateTime?
  public var location: Location
  public var creator: User?
  public var mosque: Mosque?
  public var attendees: List<GatheringAttendees>?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      gatheringType: GatheringType,
      startDate: Temporal.DateTime,
      endDate: Temporal.DateTime? = nil,
      location: Location,
      creator: User? = nil,
      mosque: Mosque? = nil,
      attendees: List<GatheringAttendees>? = []) {
    self.init(id: id,
      title: title,
      description: description,
      gatheringType: gatheringType,
      startDate: startDate,
      endDate: endDate,
      location: location,
      creator: creator,
      mosque: mosque,
      attendees: attendees,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      gatheringType: GatheringType,
      startDate: Temporal.DateTime,
      endDate: Temporal.DateTime? = nil,
      location: Location,
      creator: User? = nil,
      mosque: Mosque? = nil,
      attendees: List<GatheringAttendees>? = [],
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.title = title
      self.description = description
      self.gatheringType = gatheringType
      self.startDate = startDate
      self.endDate = endDate
      self.location = location
      self.creator = creator
      self.mosque = mosque
      self.attendees = attendees
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}