// swiftlint:disable all
import Amplify
import Foundation

public enum ServiceType: String, EnumPersistable {
  case marriage = "MARRIAGE"
  case funeral = "FUNERAL"
  case counseling = "COUNSELING"
  case other = "OTHER"
}