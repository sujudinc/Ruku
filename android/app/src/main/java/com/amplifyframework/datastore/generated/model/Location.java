package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the Location type in your schema. */
public final class Location {
  private final String addressLine1;
  private final String addressLine2;
  private final String city;
  private final String province;
  private final String postalCode;
  private final String country;
  private final Double latitude;
  private final Double longitude;
  public String getAddressLine1() {
      return addressLine1;
  }
  
  public String getAddressLine2() {
      return addressLine2;
  }
  
  public String getCity() {
      return city;
  }
  
  public String getProvince() {
      return province;
  }
  
  public String getPostalCode() {
      return postalCode;
  }
  
  public String getCountry() {
      return country;
  }
  
  public Double getLatitude() {
      return latitude;
  }
  
  public Double getLongitude() {
      return longitude;
  }
  
  private Location(String addressLine1, String addressLine2, String city, String province, String postalCode, String country, Double latitude, Double longitude) {
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.province = province;
    this.postalCode = postalCode;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      Location location = (Location) obj;
      return ObjectsCompat.equals(getAddressLine1(), location.getAddressLine1()) &&
              ObjectsCompat.equals(getAddressLine2(), location.getAddressLine2()) &&
              ObjectsCompat.equals(getCity(), location.getCity()) &&
              ObjectsCompat.equals(getProvince(), location.getProvince()) &&
              ObjectsCompat.equals(getPostalCode(), location.getPostalCode()) &&
              ObjectsCompat.equals(getCountry(), location.getCountry()) &&
              ObjectsCompat.equals(getLatitude(), location.getLatitude()) &&
              ObjectsCompat.equals(getLongitude(), location.getLongitude());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getAddressLine1())
      .append(getAddressLine2())
      .append(getCity())
      .append(getProvince())
      .append(getPostalCode())
      .append(getCountry())
      .append(getLatitude())
      .append(getLongitude())
      .toString()
      .hashCode();
  }
  
  public static AddressLine1Step builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(addressLine1,
      addressLine2,
      city,
      province,
      postalCode,
      country,
      latitude,
      longitude);
  }
  public interface AddressLine1Step {
    CityStep addressLine1(String addressLine1);
  }
  

  public interface CityStep {
    ProvinceStep city(String city);
  }
  

  public interface ProvinceStep {
    PostalCodeStep province(String province);
  }
  

  public interface PostalCodeStep {
    CountryStep postalCode(String postalCode);
  }
  

  public interface CountryStep {
    LatitudeStep country(String country);
  }
  

  public interface LatitudeStep {
    LongitudeStep latitude(Double latitude);
  }
  

  public interface LongitudeStep {
    BuildStep longitude(Double longitude);
  }
  

  public interface BuildStep {
    Location build();
    BuildStep addressLine2(String addressLine2);
  }
  

  public static class Builder implements AddressLine1Step, CityStep, ProvinceStep, PostalCodeStep, CountryStep, LatitudeStep, LongitudeStep, BuildStep {
    private String addressLine1;
    private String city;
    private String province;
    private String postalCode;
    private String country;
    private Double latitude;
    private Double longitude;
    private String addressLine2;
    @Override
     public Location build() {
        
        return new Location(
          addressLine1,
          addressLine2,
          city,
          province,
          postalCode,
          country,
          latitude,
          longitude);
    }
    
    @Override
     public CityStep addressLine1(String addressLine1) {
        Objects.requireNonNull(addressLine1);
        this.addressLine1 = addressLine1;
        return this;
    }
    
    @Override
     public ProvinceStep city(String city) {
        Objects.requireNonNull(city);
        this.city = city;
        return this;
    }
    
    @Override
     public PostalCodeStep province(String province) {
        Objects.requireNonNull(province);
        this.province = province;
        return this;
    }
    
    @Override
     public CountryStep postalCode(String postalCode) {
        Objects.requireNonNull(postalCode);
        this.postalCode = postalCode;
        return this;
    }
    
    @Override
     public LatitudeStep country(String country) {
        Objects.requireNonNull(country);
        this.country = country;
        return this;
    }
    
    @Override
     public LongitudeStep latitude(Double latitude) {
        Objects.requireNonNull(latitude);
        this.latitude = latitude;
        return this;
    }
    
    @Override
     public BuildStep longitude(Double longitude) {
        Objects.requireNonNull(longitude);
        this.longitude = longitude;
        return this;
    }
    
    @Override
     public BuildStep addressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String addressLine1, String addressLine2, String city, String province, String postalCode, String country, Double latitude, Double longitude) {
      super.addressLine1(addressLine1)
        .city(city)
        .province(province)
        .postalCode(postalCode)
        .country(country)
        .latitude(latitude)
        .longitude(longitude)
        .addressLine2(addressLine2);
    }
    
    @Override
     public CopyOfBuilder addressLine1(String addressLine1) {
      return (CopyOfBuilder) super.addressLine1(addressLine1);
    }
    
    @Override
     public CopyOfBuilder city(String city) {
      return (CopyOfBuilder) super.city(city);
    }
    
    @Override
     public CopyOfBuilder province(String province) {
      return (CopyOfBuilder) super.province(province);
    }
    
    @Override
     public CopyOfBuilder postalCode(String postalCode) {
      return (CopyOfBuilder) super.postalCode(postalCode);
    }
    
    @Override
     public CopyOfBuilder country(String country) {
      return (CopyOfBuilder) super.country(country);
    }
    
    @Override
     public CopyOfBuilder latitude(Double latitude) {
      return (CopyOfBuilder) super.latitude(latitude);
    }
    
    @Override
     public CopyOfBuilder longitude(Double longitude) {
      return (CopyOfBuilder) super.longitude(longitude);
    }
    
    @Override
     public CopyOfBuilder addressLine2(String addressLine2) {
      return (CopyOfBuilder) super.addressLine2(addressLine2);
    }
  }
  
}
