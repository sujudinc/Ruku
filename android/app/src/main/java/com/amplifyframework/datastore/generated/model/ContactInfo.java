package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the ContactInfo type in your schema. */
public final class ContactInfo {
  private final String phoneNumber;
  private final String email;
  private final String website;
  private final SocialMedia socialMedia;
  public String getPhoneNumber() {
      return phoneNumber;
  }
  
  public String getEmail() {
      return email;
  }
  
  public String getWebsite() {
      return website;
  }
  
  public SocialMedia getSocialMedia() {
      return socialMedia;
  }
  
  private ContactInfo(String phoneNumber, String email, String website, SocialMedia socialMedia) {
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.website = website;
    this.socialMedia = socialMedia;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      ContactInfo contactInfo = (ContactInfo) obj;
      return ObjectsCompat.equals(getPhoneNumber(), contactInfo.getPhoneNumber()) &&
              ObjectsCompat.equals(getEmail(), contactInfo.getEmail()) &&
              ObjectsCompat.equals(getWebsite(), contactInfo.getWebsite()) &&
              ObjectsCompat.equals(getSocialMedia(), contactInfo.getSocialMedia());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getPhoneNumber())
      .append(getEmail())
      .append(getWebsite())
      .append(getSocialMedia())
      .toString()
      .hashCode();
  }
  
  public static BuildStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(phoneNumber,
      email,
      website,
      socialMedia);
  }
  public interface BuildStep {
    ContactInfo build();
    BuildStep phoneNumber(String phoneNumber);
    BuildStep email(String email);
    BuildStep website(String website);
    BuildStep socialMedia(SocialMedia socialMedia);
  }
  

  public static class Builder implements BuildStep {
    private String phoneNumber;
    private String email;
    private String website;
    private SocialMedia socialMedia;
    @Override
     public ContactInfo build() {
        
        return new ContactInfo(
          phoneNumber,
          email,
          website,
          socialMedia);
    }
    
    @Override
     public BuildStep phoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    
    @Override
     public BuildStep email(String email) {
        this.email = email;
        return this;
    }
    
    @Override
     public BuildStep website(String website) {
        this.website = website;
        return this;
    }
    
    @Override
     public BuildStep socialMedia(SocialMedia socialMedia) {
        this.socialMedia = socialMedia;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String phoneNumber, String email, String website, SocialMedia socialMedia) {
      super.phoneNumber(phoneNumber)
        .email(email)
        .website(website)
        .socialMedia(socialMedia);
    }
    
    @Override
     public CopyOfBuilder phoneNumber(String phoneNumber) {
      return (CopyOfBuilder) super.phoneNumber(phoneNumber);
    }
    
    @Override
     public CopyOfBuilder email(String email) {
      return (CopyOfBuilder) super.email(email);
    }
    
    @Override
     public CopyOfBuilder website(String website) {
      return (CopyOfBuilder) super.website(website);
    }
    
    @Override
     public CopyOfBuilder socialMedia(SocialMedia socialMedia) {
      return (CopyOfBuilder) super.socialMedia(socialMedia);
    }
  }
  
}
