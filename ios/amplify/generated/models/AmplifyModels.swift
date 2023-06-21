// swiftlint:disable all
import Amplify
import Foundation

// Contains the set of classes that conforms to the `Model` protocol. 

final public class AmplifyModels: AmplifyModelRegistration {
  public let version: String = "2bc745b9313601df50f18aebe599393d"
  
  public func registerModels(registry: ModelRegistry.Type) {
    ModelRegistry.register(modelType: Announcement.self)
    ModelRegistry.register(modelType: Class.self)
    ModelRegistry.register(modelType: Committee.self)
    ModelRegistry.register(modelType: Gathering.self)
    ModelRegistry.register(modelType: Donation.self)
    ModelRegistry.register(modelType: FundraisingCampaign.self)
    ModelRegistry.register(modelType: Mosque.self)
    ModelRegistry.register(modelType: MonthlyPrayerSchedule.self)
    ModelRegistry.register(modelType: Resource.self)
    ModelRegistry.register(modelType: Service.self)
    ModelRegistry.register(modelType: User.self)
    ModelRegistry.register(modelType: VolunteerTask.self)
    ModelRegistry.register(modelType: CommitteeMembers.self)
    ModelRegistry.register(modelType: GatheringAttendees.self)
    ModelRegistry.register(modelType: MosqueFollowers.self)
    ModelRegistry.register(modelType: VolunteerTaskUser.self)
  }
}