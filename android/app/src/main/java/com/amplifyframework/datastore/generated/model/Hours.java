package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the Hours type in your schema. */
public final class Hours {
  private final Day monday;
  private final Day tuesday;
  private final Day wednesday;
  private final Day thursday;
  private final Day friday;
  private final Day saturday;
  private final Day sunday;
  public Day getMonday() {
      return monday;
  }
  
  public Day getTuesday() {
      return tuesday;
  }
  
  public Day getWednesday() {
      return wednesday;
  }
  
  public Day getThursday() {
      return thursday;
  }
  
  public Day getFriday() {
      return friday;
  }
  
  public Day getSaturday() {
      return saturday;
  }
  
  public Day getSunday() {
      return sunday;
  }
  
  private Hours(Day monday, Day tuesday, Day wednesday, Day thursday, Day friday, Day saturday, Day sunday) {
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
    this.saturday = saturday;
    this.sunday = sunday;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      Hours hours = (Hours) obj;
      return ObjectsCompat.equals(getMonday(), hours.getMonday()) &&
              ObjectsCompat.equals(getTuesday(), hours.getTuesday()) &&
              ObjectsCompat.equals(getWednesday(), hours.getWednesday()) &&
              ObjectsCompat.equals(getThursday(), hours.getThursday()) &&
              ObjectsCompat.equals(getFriday(), hours.getFriday()) &&
              ObjectsCompat.equals(getSaturday(), hours.getSaturday()) &&
              ObjectsCompat.equals(getSunday(), hours.getSunday());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getMonday())
      .append(getTuesday())
      .append(getWednesday())
      .append(getThursday())
      .append(getFriday())
      .append(getSaturday())
      .append(getSunday())
      .toString()
      .hashCode();
  }
  
  public static BuildStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday);
  }
  public interface BuildStep {
    Hours build();
    BuildStep monday(Day monday);
    BuildStep tuesday(Day tuesday);
    BuildStep wednesday(Day wednesday);
    BuildStep thursday(Day thursday);
    BuildStep friday(Day friday);
    BuildStep saturday(Day saturday);
    BuildStep sunday(Day sunday);
  }
  

  public static class Builder implements BuildStep {
    private Day monday;
    private Day tuesday;
    private Day wednesday;
    private Day thursday;
    private Day friday;
    private Day saturday;
    private Day sunday;
    @Override
     public Hours build() {
        
        return new Hours(
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday);
    }
    
    @Override
     public BuildStep monday(Day monday) {
        this.monday = monday;
        return this;
    }
    
    @Override
     public BuildStep tuesday(Day tuesday) {
        this.tuesday = tuesday;
        return this;
    }
    
    @Override
     public BuildStep wednesday(Day wednesday) {
        this.wednesday = wednesday;
        return this;
    }
    
    @Override
     public BuildStep thursday(Day thursday) {
        this.thursday = thursday;
        return this;
    }
    
    @Override
     public BuildStep friday(Day friday) {
        this.friday = friday;
        return this;
    }
    
    @Override
     public BuildStep saturday(Day saturday) {
        this.saturday = saturday;
        return this;
    }
    
    @Override
     public BuildStep sunday(Day sunday) {
        this.sunday = sunday;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(Day monday, Day tuesday, Day wednesday, Day thursday, Day friday, Day saturday, Day sunday) {
      super.monday(monday)
        .tuesday(tuesday)
        .wednesday(wednesday)
        .thursday(thursday)
        .friday(friday)
        .saturday(saturday)
        .sunday(sunday);
    }
    
    @Override
     public CopyOfBuilder monday(Day monday) {
      return (CopyOfBuilder) super.monday(monday);
    }
    
    @Override
     public CopyOfBuilder tuesday(Day tuesday) {
      return (CopyOfBuilder) super.tuesday(tuesday);
    }
    
    @Override
     public CopyOfBuilder wednesday(Day wednesday) {
      return (CopyOfBuilder) super.wednesday(wednesday);
    }
    
    @Override
     public CopyOfBuilder thursday(Day thursday) {
      return (CopyOfBuilder) super.thursday(thursday);
    }
    
    @Override
     public CopyOfBuilder friday(Day friday) {
      return (CopyOfBuilder) super.friday(friday);
    }
    
    @Override
     public CopyOfBuilder saturday(Day saturday) {
      return (CopyOfBuilder) super.saturday(saturday);
    }
    
    @Override
     public CopyOfBuilder sunday(Day sunday) {
      return (CopyOfBuilder) super.sunday(sunday);
    }
  }
  
}
