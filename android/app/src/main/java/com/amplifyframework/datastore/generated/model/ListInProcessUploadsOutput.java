package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the ListInProcessUploadsOutput type in your schema. */
public final class ListInProcessUploadsOutput {
  private final List<InProcessUpload> items;
  public List<InProcessUpload> getItems() {
      return items;
  }
  
  private ListInProcessUploadsOutput(List<InProcessUpload> items) {
    this.items = items;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      ListInProcessUploadsOutput listInProcessUploadsOutput = (ListInProcessUploadsOutput) obj;
      return ObjectsCompat.equals(getItems(), listInProcessUploadsOutput.getItems());
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
    BuildStep items(List<InProcessUpload> items);
  }
  

  public interface BuildStep {
    ListInProcessUploadsOutput build();
  }
  

  public static class Builder implements ItemsStep, BuildStep {
    private List<InProcessUpload> items;
    @Override
     public ListInProcessUploadsOutput build() {
        
        return new ListInProcessUploadsOutput(
          items);
    }
    
    @Override
     public BuildStep items(List<InProcessUpload> items) {
        Objects.requireNonNull(items);
        this.items = items;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(List<InProcessUpload> items) {
      super.items(items);
    }
    
    @Override
     public CopyOfBuilder items(List<InProcessUpload> items) {
      return (CopyOfBuilder) super.items(items);
    }
  }
  
}
