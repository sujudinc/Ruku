// swiftlint:disable all
import Amplify
import Foundation

public struct ContactInfo: Embeddable {
  var phoneNumber: String?
  var email: String?
  var website: String?
  var socialMedia: SocialMedia?
}