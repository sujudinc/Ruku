package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the CompleteMultipartUploadOutput type in your schema. */
public final class CompleteMultipartUploadOutput {
  private final String location;
  public String getLocation() {
      return location;
  }
  
  private CompleteMultipartUploadOutput(String location) {
    this.location = location;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      CompleteMultipartUploadOutput completeMultipartUploadOutput = (CompleteMultipartUploadOutput) obj;
      return ObjectsCompat.equals(getLocation(), completeMultipartUploadOutput.getLocation());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getLocation())
      .toString()
      .hashCode();
  }
  
  public static LocationStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(location);
  }
  public interface LocationStep {
    BuildStep location(String location);
  }
  

  public interface BuildStep {
    CompleteMultipartUploadOutput build();
  }
  

  public static class Builder implements LocationStep, BuildStep {
    private String location;
    @Override
     public CompleteMultipartUploadOutput build() {
        
        return new CompleteMultipartUploadOutput(
          location);
    }
    
    @Override
     public BuildStep location(String location) {
        Objects.requireNonNull(location);
        this.location = location;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String location) {
      super.location(location);
    }
    
    @Override
     public CopyOfBuilder location(String location) {
      return (CopyOfBuilder) super.location(location);
    }
  }
  
}
