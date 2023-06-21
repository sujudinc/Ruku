package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the GenerateMultipartUploadUrlOutput type in your schema. */
public final class GenerateMultipartUploadUrlOutput {
  private final Integer partNumber;
  private final String url;
  public Integer getPartNumber() {
      return partNumber;
  }
  
  public String getUrl() {
      return url;
  }
  
  private GenerateMultipartUploadUrlOutput(Integer partNumber, String url) {
    this.partNumber = partNumber;
    this.url = url;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      GenerateMultipartUploadUrlOutput generateMultipartUploadUrlOutput = (GenerateMultipartUploadUrlOutput) obj;
      return ObjectsCompat.equals(getPartNumber(), generateMultipartUploadUrlOutput.getPartNumber()) &&
              ObjectsCompat.equals(getUrl(), generateMultipartUploadUrlOutput.getUrl());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getPartNumber())
      .append(getUrl())
      .toString()
      .hashCode();
  }
  
  public static PartNumberStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(partNumber,
      url);
  }
  public interface PartNumberStep {
    UrlStep partNumber(Integer partNumber);
  }
  

  public interface UrlStep {
    BuildStep url(String url);
  }
  

  public interface BuildStep {
    GenerateMultipartUploadUrlOutput build();
  }
  

  public static class Builder implements PartNumberStep, UrlStep, BuildStep {
    private Integer partNumber;
    private String url;
    @Override
     public GenerateMultipartUploadUrlOutput build() {
        
        return new GenerateMultipartUploadUrlOutput(
          partNumber,
          url);
    }
    
    @Override
     public UrlStep partNumber(Integer partNumber) {
        Objects.requireNonNull(partNumber);
        this.partNumber = partNumber;
        return this;
    }
    
    @Override
     public BuildStep url(String url) {
        Objects.requireNonNull(url);
        this.url = url;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(Integer partNumber, String url) {
      super.partNumber(partNumber)
        .url(url);
    }
    
    @Override
     public CopyOfBuilder partNumber(Integer partNumber) {
      return (CopyOfBuilder) super.partNumber(partNumber);
    }
    
    @Override
     public CopyOfBuilder url(String url) {
      return (CopyOfBuilder) super.url(url);
    }
  }
  
}
