package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the SocialMedia type in your schema. */
public final class SocialMedia {
  private final String facebook;
  private final String twitter;
  private final String instagram;
  public String getFacebook() {
      return facebook;
  }
  
  public String getTwitter() {
      return twitter;
  }
  
  public String getInstagram() {
      return instagram;
  }
  
  private SocialMedia(String facebook, String twitter, String instagram) {
    this.facebook = facebook;
    this.twitter = twitter;
    this.instagram = instagram;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      SocialMedia socialMedia = (SocialMedia) obj;
      return ObjectsCompat.equals(getFacebook(), socialMedia.getFacebook()) &&
              ObjectsCompat.equals(getTwitter(), socialMedia.getTwitter()) &&
              ObjectsCompat.equals(getInstagram(), socialMedia.getInstagram());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getFacebook())
      .append(getTwitter())
      .append(getInstagram())
      .toString()
      .hashCode();
  }
  
  public static BuildStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(facebook,
      twitter,
      instagram);
  }
  public interface BuildStep {
    SocialMedia build();
    BuildStep facebook(String facebook);
    BuildStep twitter(String twitter);
    BuildStep instagram(String instagram);
  }
  

  public static class Builder implements BuildStep {
    private String facebook;
    private String twitter;
    private String instagram;
    @Override
     public SocialMedia build() {
        
        return new SocialMedia(
          facebook,
          twitter,
          instagram);
    }
    
    @Override
     public BuildStep facebook(String facebook) {
        this.facebook = facebook;
        return this;
    }
    
    @Override
     public BuildStep twitter(String twitter) {
        this.twitter = twitter;
        return this;
    }
    
    @Override
     public BuildStep instagram(String instagram) {
        this.instagram = instagram;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String facebook, String twitter, String instagram) {
      super.facebook(facebook)
        .twitter(twitter)
        .instagram(instagram);
    }
    
    @Override
     public CopyOfBuilder facebook(String facebook) {
      return (CopyOfBuilder) super.facebook(facebook);
    }
    
    @Override
     public CopyOfBuilder twitter(String twitter) {
      return (CopyOfBuilder) super.twitter(twitter);
    }
    
    @Override
     public CopyOfBuilder instagram(String instagram) {
      return (CopyOfBuilder) super.instagram(instagram);
    }
  }
  
}
