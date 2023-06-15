package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.temporal.Temporal;

import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the OperatingHours type in your schema. */
public final class OperatingHours {
  private final Temporal.Time open;
  private final Temporal.Time close;
  public Temporal.Time getOpen() {
      return open;
  }
  
  public Temporal.Time getClose() {
      return close;
  }
  
  private OperatingHours(Temporal.Time open, Temporal.Time close) {
    this.open = open;
    this.close = close;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      OperatingHours operatingHours = (OperatingHours) obj;
      return ObjectsCompat.equals(getOpen(), operatingHours.getOpen()) &&
              ObjectsCompat.equals(getClose(), operatingHours.getClose());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getOpen())
      .append(getClose())
      .toString()
      .hashCode();
  }
  
  public static OpenStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(open,
      close);
  }
  public interface OpenStep {
    CloseStep open(Temporal.Time open);
  }
  

  public interface CloseStep {
    BuildStep close(Temporal.Time close);
  }
  

  public interface BuildStep {
    OperatingHours build();
  }
  

  public static class Builder implements OpenStep, CloseStep, BuildStep {
    private Temporal.Time open;
    private Temporal.Time close;
    @Override
     public OperatingHours build() {
        
        return new OperatingHours(
          open,
          close);
    }
    
    @Override
     public CloseStep open(Temporal.Time open) {
        Objects.requireNonNull(open);
        this.open = open;
        return this;
    }
    
    @Override
     public BuildStep close(Temporal.Time close) {
        Objects.requireNonNull(close);
        this.close = close;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(Temporal.Time open, Temporal.Time close) {
      super.open(open)
        .close(close);
    }
    
    @Override
     public CopyOfBuilder open(Temporal.Time open) {
      return (CopyOfBuilder) super.open(open);
    }
    
    @Override
     public CopyOfBuilder close(Temporal.Time close) {
      return (CopyOfBuilder) super.close(close);
    }
  }
  
}
