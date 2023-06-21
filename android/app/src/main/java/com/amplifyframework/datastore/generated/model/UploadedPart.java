package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the UploadedPart type in your schema. */
public final class UploadedPart {
  private final Integer partNumber;
  private final String eTag;
  public Integer getPartNumber() {
      return partNumber;
  }
  
  public String getETag() {
      return eTag;
  }
  
  private UploadedPart(Integer partNumber, String eTag) {
    this.partNumber = partNumber;
    this.eTag = eTag;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      UploadedPart uploadedPart = (UploadedPart) obj;
      return ObjectsCompat.equals(getPartNumber(), uploadedPart.getPartNumber()) &&
              ObjectsCompat.equals(getETag(), uploadedPart.getETag());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getPartNumber())
      .append(getETag())
      .toString()
      .hashCode();
  }
  
  public static PartNumberStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(partNumber,
      eTag);
  }
  public interface PartNumberStep {
    ETagStep partNumber(Integer partNumber);
  }
  

  public interface ETagStep {
    BuildStep eTag(String eTag);
  }
  

  public interface BuildStep {
    UploadedPart build();
  }
  

  public static class Builder implements PartNumberStep, ETagStep, BuildStep {
    private Integer partNumber;
    private String eTag;
    @Override
     public UploadedPart build() {
        
        return new UploadedPart(
          partNumber,
          eTag);
    }
    
    @Override
     public ETagStep partNumber(Integer partNumber) {
        Objects.requireNonNull(partNumber);
        this.partNumber = partNumber;
        return this;
    }
    
    @Override
     public BuildStep eTag(String eTag) {
        Objects.requireNonNull(eTag);
        this.eTag = eTag;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(Integer partNumber, String eTag) {
      super.partNumber(partNumber)
        .eTag(eTag);
    }
    
    @Override
     public CopyOfBuilder partNumber(Integer partNumber) {
      return (CopyOfBuilder) super.partNumber(partNumber);
    }
    
    @Override
     public CopyOfBuilder eTag(String eTag) {
      return (CopyOfBuilder) super.eTag(eTag);
    }
  }
  
}
