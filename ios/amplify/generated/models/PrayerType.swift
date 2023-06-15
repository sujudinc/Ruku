// swiftlint:disable all
import Amplify
import Foundation

public enum PrayerType: String, EnumPersistable {
  case fajr = "FAJR"
  case thuhr = "THUHR"
  case asr = "ASR"
  case maghrib = "MAGHRIB"
  case isha = "ISHA"
  case jumuah = "JUMUAH"
  case eidAlFitr = "EID_AL_FITR"
  case eidAlAdha = "EID_AL_ADHA"
}