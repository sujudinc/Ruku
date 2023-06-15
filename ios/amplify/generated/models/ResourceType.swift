// swiftlint:disable all
import Amplify
import Foundation

public enum ResourceType: String, EnumPersistable {
  case article = "ARTICLE"
  case video = "VIDEO"
  case book = "BOOK"
  case other = "OTHER"
}