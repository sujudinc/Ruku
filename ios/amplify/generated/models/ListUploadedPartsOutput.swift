// swiftlint:disable all
import Amplify
import Foundation

public struct ListUploadedPartsOutput: Embeddable {
  var items: [UploadedPart]
}