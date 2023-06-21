// swiftlint:disable all
import Amplify
import Foundation

public struct ListInProcessUploadsOutput: Embeddable {
  var items: [InProcessUpload]
}