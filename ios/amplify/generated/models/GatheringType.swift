// swiftlint:disable all
import Amplify
import Foundation

public enum GatheringType: String, EnumPersistable {
  case lecture = "LECTURE"
  case gathering = "GATHERING"
  case communityActivity = "COMMUNITY_ACTIVITY"
  case other = "OTHER"
}