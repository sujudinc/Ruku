// swiftlint:disable all
import Amplify
import Foundation

public struct PrayerTime: Embeddable {
  var type: PrayerType
  var athan: Temporal.DateTime
  var iqamah: Temporal.DateTime
}