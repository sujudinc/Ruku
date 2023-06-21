package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the AbortMultipartUploadOutput type in your schema. */
public final class AbortMultipartUploadOutput {
  private final Boolean success;
  public Boolean getSuccess() {
      return success;
  }
  
  private AbortMultipartUploadOutput(Boolean success) {
    this.success = success;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      AbortMultipartUploadOutput abortMultipartUploadOutput = (AbortMultipartUploadOutput) obj;
      return ObjectsCompat.equals(getSuccess(), abortMultipartUploadOutput.getSuccess());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getSuccess())
      .toString()
      .hashCode();
  }
  
  public static SuccessStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(success);
  }
  public interface SuccessStep {
    BuildStep success(Boolean success);
  }
  

  public interface BuildStep {
    AbortMultipartUploadOutput build();
  }
  

  public static class Builder implements SuccessStep, BuildStep {
    private Boolean success;
    @Override
     public AbortMultipartUploadOutput build() {
        
        return new AbortMultipartUploadOutput(
          success);
    }
    
    @Override
     public BuildStep success(Boolean success) {
        Objects.requireNonNull(success);
        this.success = success;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(Boolean success) {
      super.success(success);
    }
    
    @Override
     public CopyOfBuilder success(Boolean success) {
      return (CopyOfBuilder) super.success(success);
    }
  }
  
}
