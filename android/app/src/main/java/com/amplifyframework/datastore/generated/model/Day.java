package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the Day type in your schema. */
public final class Day {
  private final DayType type;
  private final List<OperatingHours> operatingHours;
  public DayType getType() {
      return type;
  }
  
  public List<OperatingHours> getOperatingHours() {
      return operatingHours;
  }
  
  private Day(DayType type, List<OperatingHours> operatingHours) {
    this.type = type;
    this.operatingHours = operatingHours;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      Day day = (Day) obj;
      return ObjectsCompat.equals(getType(), day.getType()) &&
              ObjectsCompat.equals(getOperatingHours(), day.getOperatingHours());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getType())
      .append(getOperatingHours())
      .toString()
      .hashCode();
  }
  
  public static TypeStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(type,
      operatingHours);
  }
  public interface TypeStep {
    BuildStep type(DayType type);
  }
  

  public interface BuildStep {
    Day build();
    BuildStep operatingHours(List<OperatingHours> operatingHours);
  }
  

  public static class Builder implements TypeStep, BuildStep {
    private DayType type;
    private List<OperatingHours> operatingHours;
    @Override
     public Day build() {
        
        return new Day(
          type,
          operatingHours);
    }
    
    @Override
     public BuildStep type(DayType type) {
        Objects.requireNonNull(type);
        this.type = type;
        return this;
    }
    
    @Override
     public BuildStep operatingHours(List<OperatingHours> operatingHours) {
        this.operatingHours = operatingHours;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(DayType type, List<OperatingHours> operatingHours) {
      super.type(type)
        .operatingHours(operatingHours);
    }
    
    @Override
     public CopyOfBuilder type(DayType type) {
      return (CopyOfBuilder) super.type(type);
    }
    
    @Override
     public CopyOfBuilder operatingHours(List<OperatingHours> operatingHours) {
      return (CopyOfBuilder) super.operatingHours(operatingHours);
    }
  }
  
}
