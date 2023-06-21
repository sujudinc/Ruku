// swiftlint:disable all
import Amplify
import Foundation

public struct UploadedPart: Embeddable {
  var partNumber: Int
  var eTag: String
}