// swiftlint:disable all
import Amplify
import Foundation

public enum UserStatus: String, EnumPersistable {
  case active = "ACTIVE"
  case blocked = "BLOCKED"
  case deactivated = "DEACTIVATED"
}