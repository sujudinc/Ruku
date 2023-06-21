package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the InitiateMultipartUploadOutput type in your schema. */
public final class InitiateMultipartUploadOutput {
  private final String uploadId;
  public String getUploadId() {
      return uploadId;
  }
  
  private InitiateMultipartUploadOutput(String uploadId) {
    this.uploadId = uploadId;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      InitiateMultipartUploadOutput initiateMultipartUploadOutput = (InitiateMultipartUploadOutput) obj;
      return ObjectsCompat.equals(getUploadId(), initiateMultipartUploadOutput.getUploadId());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getUploadId())
      .toString()
      .hashCode();
  }
  
  public static UploadIdStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(uploadId);
  }
  public interface UploadIdStep {
    BuildStep uploadId(String uploadId);
  }
  

  public interface BuildStep {
    InitiateMultipartUploadOutput build();
  }
  

  public static class Builder implements UploadIdStep, BuildStep {
    private String uploadId;
    @Override
     public InitiateMultipartUploadOutput build() {
        
        return new InitiateMultipartUploadOutput(
          uploadId);
    }
    
    @Override
     public BuildStep uploadId(String uploadId) {
        Objects.requireNonNull(uploadId);
        this.uploadId = uploadId;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String uploadId) {
      super.uploadId(uploadId);
    }
    
    @Override
     public CopyOfBuilder uploadId(String uploadId) {
      return (CopyOfBuilder) super.uploadId(uploadId);
    }
  }
  
}
