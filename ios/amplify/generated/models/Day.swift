// swiftlint:disable all
import Amplify
import Foundation

public struct Day: Embeddable {
  var type: DayType
  var operatingHours: [OperatingHours]?
}