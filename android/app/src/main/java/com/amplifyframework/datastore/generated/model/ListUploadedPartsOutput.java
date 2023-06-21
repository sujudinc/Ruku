package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the ListUploadedPartsOutput type in your schema. */
public final class ListUploadedPartsOutput {
  private final List<UploadedPart> items;
  public List<UploadedPart> getItems() {
      return items;
  }
  
  private ListUploadedPartsOutput(List<UploadedPart> items) {
    this.items = items;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      ListUploadedPartsOutput listUploadedPartsOutput = (ListUploadedPartsOutput) obj;
      return ObjectsCompat.equals(getItems(), listUploadedPartsOutput.getItems());
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
    BuildStep items(List<UploadedPart> items);
  }
  

  public interface BuildStep {
    ListUploadedPartsOutput build();
  }
  

  public static class Builder implements ItemsStep, BuildStep {
    private List<UploadedPart> items;
    @Override
     public ListUploadedPartsOutput build() {
        
        return new ListUploadedPartsOutput(
          items);
    }
    
    @Override
     public BuildStep items(List<UploadedPart> items) {
        Objects.requireNonNull(items);
        this.items = items;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(List<UploadedPart> items) {
      super.items(items);
    }
    
    @Override
     public CopyOfBuilder items(List<UploadedPart> items) {
      return (CopyOfBuilder) super.items(items);
    }
  }
  
}
