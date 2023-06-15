// swiftlint:disable all
import Amplify
import Foundation

public struct User: Model {
  public let id: String
  public var selfie: String?
  public var firstName: String
  public var lastName: String
  public var email: String
  public var type: UserType
  public var status: UserStatus
  public var createdAnnouncements: List<Announcement>?
  public var createdClasses: List<`Class`>?
  public var createdCommittees: List<Committee>?
  public var createdGatherings: List<Gathering>?
  public var createdFundraisingCampaigns: List<FundraisingCampaign>?
  public var createdMonthlyPrayerSchedules: List<MonthlyPrayerSchedule>?
  public var createdMosques: List<Mosque>?
  public var createdResources: List<Resource>?
  public var createdServices: List<Service>?
  public var createdVolunteerTasks: List<VolunteerTask>?
  public var instructingClasses: List<`Class`>?
  public var donations: List<Donation>?
  public var committees: List<CommitteeMembers>?
  public var gatherings: List<GatheringAttendees>?
  public var mosques: List<MosqueFollowers>?
  public var volunteerTasks: List<VolunteerTaskUser>?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      selfie: String? = nil,
      firstName: String,
      lastName: String,
      email: String,
      type: UserType,
      status: UserStatus,
      createdAnnouncements: List<Announcement>? = [],
      createdClasses: List<`Class`>? = [],
      createdCommittees: List<Committee>? = [],
      createdGatherings: List<Gathering>? = [],
      createdFundraisingCampaigns: List<FundraisingCampaign>? = [],
      createdMonthlyPrayerSchedules: List<MonthlyPrayerSchedule>? = [],
      createdMosques: List<Mosque>? = [],
      createdResources: List<Resource>? = [],
      createdServices: List<Service>? = [],
      createdVolunteerTasks: List<VolunteerTask>? = [],
      instructingClasses: List<`Class`>? = [],
      donations: List<Donation>? = [],
      committees: List<CommitteeMembers>? = [],
      gatherings: List<GatheringAttendees>? = [],
      mosques: List<MosqueFollowers>? = [],
      volunteerTasks: List<VolunteerTaskUser>? = []) {
    self.init(id: id,
      selfie: selfie,
      firstName: firstName,
      lastName: lastName,
      email: email,
      type: type,
      status: status,
      createdAnnouncements: createdAnnouncements,
      createdClasses: createdClasses,
      createdCommittees: createdCommittees,
      createdGatherings: createdGatherings,
      createdFundraisingCampaigns: createdFundraisingCampaigns,
      createdMonthlyPrayerSchedules: createdMonthlyPrayerSchedules,
      createdMosques: createdMosques,
      createdResources: createdResources,
      createdServices: createdServices,
      createdVolunteerTasks: createdVolunteerTasks,
      instructingClasses: instructingClasses,
      donations: donations,
      committees: committees,
      gatherings: gatherings,
      mosques: mosques,
      volunteerTasks: volunteerTasks,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      selfie: String? = nil,
      firstName: String,
      lastName: String,
      email: String,
      type: UserType,
      status: UserStatus,
      createdAnnouncements: List<Announcement>? = [],
      createdClasses: List<`Class`>? = [],
      createdCommittees: List<Committee>? = [],
      createdGatherings: List<Gathering>? = [],
      createdFundraisingCampaigns: List<FundraisingCampaign>? = [],
      createdMonthlyPrayerSchedules: List<MonthlyPrayerSchedule>? = [],
      createdMosques: List<Mosque>? = [],
      createdResources: List<Resource>? = [],
      createdServices: List<Service>? = [],
      createdVolunteerTasks: List<VolunteerTask>? = [],
      instructingClasses: List<`Class`>? = [],
      donations: List<Donation>? = [],
      committees: List<CommitteeMembers>? = [],
      gatherings: List<GatheringAttendees>? = [],
      mosques: List<MosqueFollowers>? = [],
      volunteerTasks: List<VolunteerTaskUser>? = [],
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.selfie = selfie
      self.firstName = firstName
      self.lastName = lastName
      self.email = email
      self.type = type
      self.status = status
      self.createdAnnouncements = createdAnnouncements
      self.createdClasses = createdClasses
      self.createdCommittees = createdCommittees
      self.createdGatherings = createdGatherings
      self.createdFundraisingCampaigns = createdFundraisingCampaigns
      self.createdMonthlyPrayerSchedules = createdMonthlyPrayerSchedules
      self.createdMosques = createdMosques
      self.createdResources = createdResources
      self.createdServices = createdServices
      self.createdVolunteerTasks = createdVolunteerTasks
      self.instructingClasses = instructingClasses
      self.donations = donations
      self.committees = committees
      self.gatherings = gatherings
      self.mosques = mosques
      self.volunteerTasks = volunteerTasks
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}