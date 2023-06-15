package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.temporal.Temporal;

import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the PrayerTime type in your schema. */
public final class PrayerTime {
  private final PrayerType type;
  private final Temporal.DateTime athan;
  private final Temporal.DateTime iqamah;
  public PrayerType getType() {
      return type;
  }
  
  public Temporal.DateTime getAthan() {
      return athan;
  }
  
  public Temporal.DateTime getIqamah() {
      return iqamah;
  }
  
  private PrayerTime(PrayerType type, Temporal.DateTime athan, Temporal.DateTime iqamah) {
    this.type = type;
    this.athan = athan;
    this.iqamah = iqamah;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      PrayerTime prayerTime = (PrayerTime) obj;
      return ObjectsCompat.equals(getType(), prayerTime.getType()) &&
              ObjectsCompat.equals(getAthan(), prayerTime.getAthan()) &&
              ObjectsCompat.equals(getIqamah(), prayerTime.getIqamah());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getType())
      .append(getAthan())
      .append(getIqamah())
      .toString()
      .hashCode();
  }
  
  public static TypeStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(type,
      athan,
      iqamah);
  }
  public interface TypeStep {
    AthanStep type(PrayerType type);
  }
  

  public interface AthanStep {
    IqamahStep athan(Temporal.DateTime athan);
  }
  

  public interface IqamahStep {
    BuildStep iqamah(Temporal.DateTime iqamah);
  }
  

  public interface BuildStep {
    PrayerTime build();
  }
  

  public static class Builder implements TypeStep, AthanStep, IqamahStep, BuildStep {
    private PrayerType type;
    private Temporal.DateTime athan;
    private Temporal.DateTime iqamah;
    @Override
     public PrayerTime build() {
        
        return new PrayerTime(
          type,
          athan,
          iqamah);
    }
    
    @Override
     public AthanStep type(PrayerType type) {
        Objects.requireNonNull(type);
        this.type = type;
        return this;
    }
    
    @Override
     public IqamahStep athan(Temporal.DateTime athan) {
        Objects.requireNonNull(athan);
        this.athan = athan;
        return this;
    }
    
    @Override
     public BuildStep iqamah(Temporal.DateTime iqamah) {
        Objects.requireNonNull(iqamah);
        this.iqamah = iqamah;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(PrayerType type, Temporal.DateTime athan, Temporal.DateTime iqamah) {
      super.type(type)
        .athan(athan)
        .iqamah(iqamah);
    }
    
    @Override
     public CopyOfBuilder type(PrayerType type) {
      return (CopyOfBuilder) super.type(type);
    }
    
    @Override
     public CopyOfBuilder athan(Temporal.DateTime athan) {
      return (CopyOfBuilder) super.athan(athan);
    }
    
    @Override
     public CopyOfBuilder iqamah(Temporal.DateTime iqamah) {
      return (CopyOfBuilder) super.iqamah(iqamah);
    }
  }
  
}
