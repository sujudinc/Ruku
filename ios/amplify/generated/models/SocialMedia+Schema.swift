// swiftlint:disable all
import Amplify
import Foundation

extension SocialMedia {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case facebook
    case twitter
    case instagram
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let socialMedia = SocialMedia.keys
    
    model.pluralName = "SocialMedias"
    
    model.fields(
      .field(socialMedia.facebook, is: .optional, ofType: .string),
      .field(socialMedia.twitter, is: .optional, ofType: .string),
      .field(socialMedia.instagram, is: .optional, ofType: .string)
    )
    }
}