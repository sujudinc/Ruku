// swiftlint:disable all
import Amplify
import Foundation

public struct OperatingHours: Embeddable {
  var open: Temporal.Time
  var close: Temporal.Time
}