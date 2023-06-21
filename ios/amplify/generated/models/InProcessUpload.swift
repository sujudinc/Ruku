// swiftlint:disable all
import Amplify
import Foundation

public struct InProcessUpload: Embeddable {
  var uploadId: String
  var fileName: String
  var contentType: String
  var createdAt: String
}