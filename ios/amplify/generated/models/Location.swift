// swiftlint:disable all
import Amplify
import Foundation

public struct Location: Embeddable {
  var addressLine1: String
  var addressLine2: String?
  var city: String
  var province: String
  var postalCode: String
  var country: String
  var latitude: Double
  var longitude: Double
}