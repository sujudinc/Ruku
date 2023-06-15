// swiftlint:disable all
import Amplify
import Foundation

public struct `Class`: Model {
  public let id: String
  public var title: String
  public var description: String?
  public var startDateTime: Temporal.DateTime
  public var endDateTime: Temporal.DateTime?
  public var recurring: Bool
  public var daysOfWeek: [DayType]?
  public var instructor: User?
  public var creator: User?
  public var mosque: Mosque?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      startDateTime: Temporal.DateTime,
      endDateTime: Temporal.DateTime? = nil,
      recurring: Bool,
      daysOfWeek: [DayType]? = nil,
      instructor: User? = nil,
      creator: User? = nil,
      mosque: Mosque? = nil) {
    self.init(id: id,
      title: title,
      description: description,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      recurring: recurring,
      daysOfWeek: daysOfWeek,
      instructor: instructor,
      creator: creator,
      mosque: mosque,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      title: String,
      description: String? = nil,
      startDateTime: Temporal.DateTime,
      endDateTime: Temporal.DateTime? = nil,
      recurring: Bool,
      daysOfWeek: [DayType]? = nil,
      instructor: User? = nil,
      creator: User? = nil,
      mosque: Mosque? = nil,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.title = title
      self.description = description
      self.startDateTime = startDateTime
      self.endDateTime = endDateTime
      self.recurring = recurring
      self.daysOfWeek = daysOfWeek
      self.instructor = instructor
      self.creator = creator
      self.mosque = mosque
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}