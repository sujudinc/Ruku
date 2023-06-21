// swiftlint:disable all
import Amplify
import Foundation

public struct GenerateMultipartUploadUrlOutput: Embeddable {
  var partNumber: Int
  var url: String
}