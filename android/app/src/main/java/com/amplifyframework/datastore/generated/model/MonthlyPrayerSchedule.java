package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.annotations.BelongsTo;
import com.amplifyframework.core.model.temporal.Temporal;

import java.util.List;
import java.util.UUID;
import java.util.Objects;

import androidx.core.util.ObjectsCompat;

import com.amplifyframework.core.model.AuthStrategy;
import com.amplifyframework.core.model.Model;
import com.amplifyframework.core.model.ModelOperation;
import com.amplifyframework.core.model.annotations.AuthRule;
import com.amplifyframework.core.model.annotations.Index;
import com.amplifyframework.core.model.annotations.ModelConfig;
import com.amplifyframework.core.model.annotations.ModelField;
import com.amplifyframework.core.model.query.predicate.QueryField;

import static com.amplifyframework.core.model.query.predicate.QueryField.field;

/** This is an auto generated class representing the MonthlyPrayerSchedule type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "MonthlyPrayerSchedules", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PRIVATE, operations = { ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
@Index(name = "byCreator", fields = {"creatorId"})
@Index(name = "byMosque", fields = {"mosqueId"})
public final class MonthlyPrayerSchedule implements Model {
  public static final QueryField ID = field("MonthlyPrayerSchedule", "id");
  public static final QueryField YEAR = field("MonthlyPrayerSchedule", "year");
  public static final QueryField MONTH = field("MonthlyPrayerSchedule", "month");
  public static final QueryField PRAYER_TIMES = field("MonthlyPrayerSchedule", "prayerTimes");
  public static final QueryField CREATOR = field("MonthlyPrayerSchedule", "creatorId");
  public static final QueryField MOSQUE = field("MonthlyPrayerSchedule", "mosqueId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="Int", isRequired = true) Integer year;
  private final @ModelField(targetType="Int", isRequired = true) Integer month;
  private final @ModelField(targetType="PrayerTime", isRequired = true) List<PrayerTime> prayerTimes;
  private final @ModelField(targetType="User") @BelongsTo(targetName = "creatorId", targetNames = {"creatorId"}, type = User.class) User creator;
  private final @ModelField(targetType="Mosque") @BelongsTo(targetName = "mosqueId", targetNames = {"mosqueId"}, type = Mosque.class) Mosque mosque;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public Integer getYear() {
      return year;
  }
  
  public Integer getMonth() {
      return month;
  }
  
  public List<PrayerTime> getPrayerTimes() {
      return prayerTimes;
  }
  
  public User getCreator() {
      return creator;
  }
  
  public Mosque getMosque() {
      return mosque;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private MonthlyPrayerSchedule(String id, Integer year, Integer month, List<PrayerTime> prayerTimes, User creator, Mosque mosque) {
    this.id = id;
    this.year = year;
    this.month = month;
    this.prayerTimes = prayerTimes;
    this.creator = creator;
    this.mosque = mosque;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      MonthlyPrayerSchedule monthlyPrayerSchedule = (MonthlyPrayerSchedule) obj;
      return ObjectsCompat.equals(getId(), monthlyPrayerSchedule.getId()) &&
              ObjectsCompat.equals(getYear(), monthlyPrayerSchedule.getYear()) &&
              ObjectsCompat.equals(getMonth(), monthlyPrayerSchedule.getMonth()) &&
              ObjectsCompat.equals(getPrayerTimes(), monthlyPrayerSchedule.getPrayerTimes()) &&
              ObjectsCompat.equals(getCreator(), monthlyPrayerSchedule.getCreator()) &&
              ObjectsCompat.equals(getMosque(), monthlyPrayerSchedule.getMosque()) &&
              ObjectsCompat.equals(getCreatedAt(), monthlyPrayerSchedule.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), monthlyPrayerSchedule.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getYear())
      .append(getMonth())
      .append(getPrayerTimes())
      .append(getCreator())
      .append(getMosque())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("MonthlyPrayerSchedule {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("year=" + String.valueOf(getYear()) + ", ")
      .append("month=" + String.valueOf(getMonth()) + ", ")
      .append("prayerTimes=" + String.valueOf(getPrayerTimes()) + ", ")
      .append("creator=" + String.valueOf(getCreator()) + ", ")
      .append("mosque=" + String.valueOf(getMosque()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static YearStep builder() {
      return new Builder();
  }
  
  /**
   * WARNING: This method should not be used to build an instance of this object for a CREATE mutation.
   * This is a convenience method to return an instance of the object with only its ID populated
   * to be used in the context of a parameter in a delete mutation or referencing a foreign key
   * in a relationship.
   * @param id the id of the existing item this instance will represent
   * @return an instance of this model with only ID populated
   */
  public static MonthlyPrayerSchedule justId(String id) {
    return new MonthlyPrayerSchedule(
      id,
      null,
      null,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      year,
      month,
      prayerTimes,
      creator,
      mosque);
  }
  public interface YearStep {
    MonthStep year(Integer year);
  }
  

  public interface MonthStep {
    PrayerTimesStep month(Integer month);
  }
  

  public interface PrayerTimesStep {
    BuildStep prayerTimes(List<PrayerTime> prayerTimes);
  }
  

  public interface BuildStep {
    MonthlyPrayerSchedule build();
    BuildStep id(String id);
    BuildStep creator(User creator);
    BuildStep mosque(Mosque mosque);
  }
  

  public static class Builder implements YearStep, MonthStep, PrayerTimesStep, BuildStep {
    private String id;
    private Integer year;
    private Integer month;
    private List<PrayerTime> prayerTimes;
    private User creator;
    private Mosque mosque;
    @Override
     public MonthlyPrayerSchedule build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new MonthlyPrayerSchedule(
          id,
          year,
          month,
          prayerTimes,
          creator,
          mosque);
    }
    
    @Override
     public MonthStep year(Integer year) {
        Objects.requireNonNull(year);
        this.year = year;
        return this;
    }
    
    @Override
     public PrayerTimesStep month(Integer month) {
        Objects.requireNonNull(month);
        this.month = month;
        return this;
    }
    
    @Override
     public BuildStep prayerTimes(List<PrayerTime> prayerTimes) {
        Objects.requireNonNull(prayerTimes);
        this.prayerTimes = prayerTimes;
        return this;
    }
    
    @Override
     public BuildStep creator(User creator) {
        this.creator = creator;
        return this;
    }
    
    @Override
     public BuildStep mosque(Mosque mosque) {
        this.mosque = mosque;
        return this;
    }
    
    /**
     * @param id id
     * @return Current Builder instance, for fluent method chaining
     */
    public BuildStep id(String id) {
        this.id = id;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String id, Integer year, Integer month, List<PrayerTime> prayerTimes, User creator, Mosque mosque) {
      super.id(id);
      super.year(year)
        .month(month)
        .prayerTimes(prayerTimes)
        .creator(creator)
        .mosque(mosque);
    }
    
    @Override
     public CopyOfBuilder year(Integer year) {
      return (CopyOfBuilder) super.year(year);
    }
    
    @Override
     public CopyOfBuilder month(Integer month) {
      return (CopyOfBuilder) super.month(month);
    }
    
    @Override
     public CopyOfBuilder prayerTimes(List<PrayerTime> prayerTimes) {
      return (CopyOfBuilder) super.prayerTimes(prayerTimes);
    }
    
    @Override
     public CopyOfBuilder creator(User creator) {
      return (CopyOfBuilder) super.creator(creator);
    }
    
    @Override
     public CopyOfBuilder mosque(Mosque mosque) {
      return (CopyOfBuilder) super.mosque(mosque);
    }
  }
  
}
