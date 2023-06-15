// swiftlint:disable all
import Amplify
import Foundation

public enum UserType: String, EnumPersistable {
  case admin = "ADMIN"
  case superAdmin = "SUPER_ADMIN"
  case user = "USER"
  case userReadOnly = "USER_READ_ONLY"
}