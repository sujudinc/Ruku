// swiftlint:disable all
import Amplify
import Foundation

public struct Mosque: Model {
  public let id: String
  public var name: String
  public var description: String?
  public var images: [String?]?
  public var location: Location
  public var hours: Hours
  public var contactInfo: ContactInfo?
  public var liveVideoUrl: String?
  public var creator: User?
  public var followers: List<MosqueFollowers>?
  public var announcements: List<Announcement>?
  public var classes: List<`Class`>?
  public var committees: List<Committee>?
  public var gatherings: List<Gathering>?
  public var fundraisingCampaigns: List<FundraisingCampaign>?
  public var monthlyPrayerSchedules: List<MonthlyPrayerSchedule>?
  public var resources: List<Resource>?
  public var services: List<Service>?
  public var volunteerTasks: List<VolunteerTask>?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      name: String,
      description: String? = nil,
      images: [String?]? = nil,
      location: Location,
      hours: Hours,
      contactInfo: ContactInfo? = nil,
      liveVideoUrl: String? = nil,
      creator: User? = nil,
      followers: List<MosqueFollowers>? = [],
      announcements: List<Announcement>? = [],
      classes: List<`Class`>? = [],
      committees: List<Committee>? = [],
      gatherings: List<Gathering>? = [],
      fundraisingCampaigns: List<FundraisingCampaign>? = [],
      monthlyPrayerSchedules: List<MonthlyPrayerSchedule>? = [],
      resources: List<Resource>? = [],
      services: List<Service>? = [],
      volunteerTasks: List<VolunteerTask>? = []) {
    self.init(id: id,
      name: name,
      description: description,
      images: images,
      location: location,
      hours: hours,
      contactInfo: contactInfo,
      liveVideoUrl: liveVideoUrl,
      creator: creator,
      followers: followers,
      announcements: announcements,
      classes: classes,
      committees: committees,
      gatherings: gatherings,
      fundraisingCampaigns: fundraisingCampaigns,
      monthlyPrayerSchedules: monthlyPrayerSchedules,
      resources: resources,
      services: services,
      volunteerTasks: volunteerTasks,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      name: String,
      description: String? = nil,
      images: [String?]? = nil,
      location: Location,
      hours: Hours,
      contactInfo: ContactInfo? = nil,
      liveVideoUrl: String? = nil,
      creator: User? = nil,
      followers: List<MosqueFollowers>? = [],
      announcements: List<Announcement>? = [],
      classes: List<`Class`>? = [],
      committees: List<Committee>? = [],
      gatherings: List<Gathering>? = [],
      fundraisingCampaigns: List<FundraisingCampaign>? = [],
      monthlyPrayerSchedules: List<MonthlyPrayerSchedule>? = [],
      resources: List<Resource>? = [],
      services: List<Service>? = [],
      volunteerTasks: List<VolunteerTask>? = [],
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.name = name
      self.description = description
      self.images = images
      self.location = location
      self.hours = hours
      self.contactInfo = contactInfo
      self.liveVideoUrl = liveVideoUrl
      self.creator = creator
      self.followers = followers
      self.announcements = announcements
      self.classes = classes
      self.committees = committees
      self.gatherings = gatherings
      self.fundraisingCampaigns = fundraisingCampaigns
      self.monthlyPrayerSchedules = monthlyPrayerSchedules
      self.resources = resources
      self.services = services
      self.volunteerTasks = volunteerTasks
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}