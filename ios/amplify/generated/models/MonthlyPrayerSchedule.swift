// swiftlint:disable all
import Amplify
import Foundation

public struct MonthlyPrayerSchedule: Model {
  public let id: String
  public var year: Int
  public var month: Int
  public var prayerTimes: [PrayerTime]
  public var creator: User?
  public var mosque: Mosque?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      year: Int,
      month: Int,
      prayerTimes: [PrayerTime] = [],
      creator: User? = nil,
      mosque: Mosque? = nil) {
    self.init(id: id,
      year: year,
      month: month,
      prayerTimes: prayerTimes,
      creator: creator,
      mosque: mosque,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      year: Int,
      month: Int,
      prayerTimes: [PrayerTime] = [],
      creator: User? = nil,
      mosque: Mosque? = nil,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.year = year
      self.month = month
      self.prayerTimes = prayerTimes
      self.creator = creator
      self.mosque = mosque
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}