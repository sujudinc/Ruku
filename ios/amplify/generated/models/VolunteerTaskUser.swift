// swiftlint:disable all
import Amplify
import Foundation

public struct VolunteerTaskUser: Model {
  public let id: String
  public var user: User
  public var volunteerTask: VolunteerTask
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      user: User,
      volunteerTask: VolunteerTask) {
    self.init(id: id,
      user: user,
      volunteerTask: volunteerTask,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      user: User,
      volunteerTask: VolunteerTask,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.user = user
      self.volunteerTask = volunteerTask
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}