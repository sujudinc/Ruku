// swiftlint:disable all
import Amplify
import Foundation

public enum FundraisingCampaignType: String, EnumPersistable {
  case bill = "BILL"
  case community = "COMMUNITY"
  case education = "EDUCATION"
  case emergencyRelief = "EMERGENCY_RELIEF"
  case environment = "ENVIRONMENT"
  case funeral = "FUNERAL"
  case health = "HEALTH"
  case mosque = "MOSQUE"
  case orphans = "ORPHANS"
  case other = "OTHER"
  case refugees = "REFUGEES"
}