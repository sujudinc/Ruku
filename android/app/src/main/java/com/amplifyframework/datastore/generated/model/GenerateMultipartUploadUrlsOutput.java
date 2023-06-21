package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the GenerateMultipartUploadUrlsOutput type in your schema. */
public final class GenerateMultipartUploadUrlsOutput {
  private final List<GenerateMultipartUploadUrlOutput> items;
  public List<GenerateMultipartUploadUrlOutput> getItems() {
      return items;
  }
  
  private GenerateMultipartUploadUrlsOutput(List<GenerateMultipartUploadUrlOutput> items) {
    this.items = items;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      GenerateMultipartUploadUrlsOutput generateMultipartUploadUrlsOutput = (GenerateMultipartUploadUrlsOutput) obj;
      return ObjectsCompat.equals(getItems(), generateMultipartUploadUrlsOutput.getItems());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getItems())
      .toString()
      .hashCode();
  }
  
  public static ItemsStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(items);
  }
  public interface ItemsStep {
    BuildStep items(List<GenerateMultipartUploadUrlOutput> items);
  }
  

  public interface BuildStep {
    GenerateMultipartUploadUrlsOutput build();
  }
  

  public static class Builder implements ItemsStep, BuildStep {
    private List<GenerateMultipartUploadUrlOutput> items;
    @Override
     public GenerateMultipartUploadUrlsOutput build() {
        
        return new GenerateMultipartUploadUrlsOutput(
          items);
    }
    
    @Override
     public BuildStep items(List<GenerateMultipartUploadUrlOutput> items) {
        Objects.requireNonNull(items);
        this.items = items;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(List<GenerateMultipartUploadUrlOutput> items) {
      super.items(items);
    }
    
    @Override
     public CopyOfBuilder items(List<GenerateMultipartUploadUrlOutput> items) {
      return (CopyOfBuilder) super.items(items);
    }
  }
  
}
