// swiftlint:disable all
import Amplify
import Foundation

extension ContactInfo {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case phoneNumber
    case email
    case website
    case socialMedia
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let contactInfo = ContactInfo.keys
    
    model.pluralName = "ContactInfos"
    
    model.fields(
      .field(contactInfo.phoneNumber, is: .optional, ofType: .string),
      .field(contactInfo.email, is: .optional, ofType: .string),
      .field(contactInfo.website, is: .optional, ofType: .string),
      .field(contactInfo.socialMedia, is: .optional, ofType: .embedded(type: SocialMedia.self))
    )
    }
}