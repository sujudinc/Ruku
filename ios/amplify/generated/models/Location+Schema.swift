// swiftlint:disable all
import Amplify
import Foundation

extension Location {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case addressLine1
    case addressLine2
    case city
    case province
    case postalCode
    case country
    case latitude
    case longitude
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let location = Location.keys
    
    model.pluralName = "Locations"
    
    model.fields(
      .field(location.addressLine1, is: .required, ofType: .string),
      .field(location.addressLine2, is: .optional, ofType: .string),
      .field(location.city, is: .required, ofType: .string),
      .field(location.province, is: .required, ofType: .string),
      .field(location.postalCode, is: .required, ofType: .string),
      .field(location.country, is: .required, ofType: .string),
      .field(location.latitude, is: .required, ofType: .double),
      .field(location.longitude, is: .required, ofType: .double)
    )
    }
}