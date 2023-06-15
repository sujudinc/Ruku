package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.temporal.Temporal;
import com.amplifyframework.core.model.annotations.BelongsTo;

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

/** This is an auto generated class representing the Class type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "Classes", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
@Index(name = "byInstructor", fields = {"instructorId"})
@Index(name = "byCreator", fields = {"creatorId"})
@Index(name = "byMosque", fields = {"mosqueId"})
public final class Class implements Model {
  public static final QueryField ID = field("Class", "id");
  public static final QueryField TITLE = field("Class", "title");
  public static final QueryField DESCRIPTION = field("Class", "description");
  public static final QueryField START_DATE_TIME = field("Class", "startDateTime");
  public static final QueryField END_DATE_TIME = field("Class", "endDateTime");
  public static final QueryField RECURRING = field("Class", "recurring");
  public static final QueryField DAYS_OF_WEEK = field("Class", "daysOfWeek");
  public static final QueryField INSTRUCTOR = field("Class", "instructorId");
  public static final QueryField CREATOR = field("Class", "creatorId");
  public static final QueryField MOSQUE = field("Class", "mosqueId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String", isRequired = true) String title;
  private final @ModelField(targetType="String") String description;
  private final @ModelField(targetType="AWSDateTime", isRequired = true) Temporal.DateTime startDateTime;
  private final @ModelField(targetType="AWSDateTime") Temporal.DateTime endDateTime;
  private final @ModelField(targetType="Boolean", isRequired = true) Boolean recurring;
  private final @ModelField(targetType="DayType") List<DayType> daysOfWeek;
  private final @ModelField(targetType="User") @BelongsTo(targetName = "instructorId", targetNames = {"instructorId"}, type = User.class) User instructor;
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
  
  public String getTitle() {
      return title;
  }
  
  public String getDescription() {
      return description;
  }
  
  public Temporal.DateTime getStartDateTime() {
      return startDateTime;
  }
  
  public Temporal.DateTime getEndDateTime() {
      return endDateTime;
  }
  
  public Boolean getRecurring() {
      return recurring;
  }
  
  public List<DayType> getDaysOfWeek() {
      return daysOfWeek;
  }
  
  public User getInstructor() {
      return instructor;
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
  
  private Class(String id, String title, String description, Temporal.DateTime startDateTime, Temporal.DateTime endDateTime, Boolean recurring, List<DayType> daysOfWeek, User instructor, User creator, Mosque mosque) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.recurring = recurring;
    this.daysOfWeek = daysOfWeek;
    this.instructor = instructor;
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
      Class class = (Class) obj;
      return ObjectsCompat.equals(getId(), class.getId()) &&
              ObjectsCompat.equals(getTitle(), class.getTitle()) &&
              ObjectsCompat.equals(getDescription(), class.getDescription()) &&
              ObjectsCompat.equals(getStartDateTime(), class.getStartDateTime()) &&
              ObjectsCompat.equals(getEndDateTime(), class.getEndDateTime()) &&
              ObjectsCompat.equals(getRecurring(), class.getRecurring()) &&
              ObjectsCompat.equals(getDaysOfWeek(), class.getDaysOfWeek()) &&
              ObjectsCompat.equals(getInstructor(), class.getInstructor()) &&
              ObjectsCompat.equals(getCreator(), class.getCreator()) &&
              ObjectsCompat.equals(getMosque(), class.getMosque()) &&
              ObjectsCompat.equals(getCreatedAt(), class.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), class.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getTitle())
      .append(getDescription())
      .append(getStartDateTime())
      .append(getEndDateTime())
      .append(getRecurring())
      .append(getDaysOfWeek())
      .append(getInstructor())
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
      .append("Class {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("title=" + String.valueOf(getTitle()) + ", ")
      .append("description=" + String.valueOf(getDescription()) + ", ")
      .append("startDateTime=" + String.valueOf(getStartDateTime()) + ", ")
      .append("endDateTime=" + String.valueOf(getEndDateTime()) + ", ")
      .append("recurring=" + String.valueOf(getRecurring()) + ", ")
      .append("daysOfWeek=" + String.valueOf(getDaysOfWeek()) + ", ")
      .append("instructor=" + String.valueOf(getInstructor()) + ", ")
      .append("creator=" + String.valueOf(getCreator()) + ", ")
      .append("mosque=" + String.valueOf(getMosque()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static TitleStep builder() {
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
  public static Class justId(String id) {
    return new Class(
      id,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      title,
      description,
      startDateTime,
      endDateTime,
      recurring,
      daysOfWeek,
      instructor,
      creator,
      mosque);
  }
  public interface TitleStep {
    StartDateTimeStep title(String title);
  }
  

  public interface StartDateTimeStep {
    RecurringStep startDateTime(Temporal.DateTime startDateTime);
  }
  

  public interface RecurringStep {
    BuildStep recurring(Boolean recurring);
  }
  

  public interface BuildStep {
    Class build();
    BuildStep id(String id);
    BuildStep description(String description);
    BuildStep endDateTime(Temporal.DateTime endDateTime);
    BuildStep daysOfWeek(List<DayType> daysOfWeek);
    BuildStep instructor(User instructor);
    BuildStep creator(User creator);
    BuildStep mosque(Mosque mosque);
  }
  

  public static class Builder implements TitleStep, StartDateTimeStep, RecurringStep, BuildStep {
    private String id;
    private String title;
    private Temporal.DateTime startDateTime;
    private Boolean recurring;
    private String description;
    private Temporal.DateTime endDateTime;
    private List<DayType> daysOfWeek;
    private User instructor;
    private User creator;
    private Mosque mosque;
    @Override
     public Class build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new Class(
          id,
          title,
          description,
          startDateTime,
          endDateTime,
          recurring,
          daysOfWeek,
          instructor,
          creator,
          mosque);
    }
    
    @Override
     public StartDateTimeStep title(String title) {
        Objects.requireNonNull(title);
        this.title = title;
        return this;
    }
    
    @Override
     public RecurringStep startDateTime(Temporal.DateTime startDateTime) {
        Objects.requireNonNull(startDateTime);
        this.startDateTime = startDateTime;
        return this;
    }
    
    @Override
     public BuildStep recurring(Boolean recurring) {
        Objects.requireNonNull(recurring);
        this.recurring = recurring;
        return this;
    }
    
    @Override
     public BuildStep description(String description) {
        this.description = description;
        return this;
    }
    
    @Override
     public BuildStep endDateTime(Temporal.DateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    
    @Override
     public BuildStep daysOfWeek(List<DayType> daysOfWeek) {
        this.daysOfWeek = daysOfWeek;
        return this;
    }
    
    @Override
     public BuildStep instructor(User instructor) {
        this.instructor = instructor;
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
    private CopyOfBuilder(String id, String title, String description, Temporal.DateTime startDateTime, Temporal.DateTime endDateTime, Boolean recurring, List<DayType> daysOfWeek, User instructor, User creator, Mosque mosque) {
      super.id(id);
      super.title(title)
        .startDateTime(startDateTime)
        .recurring(recurring)
        .description(description)
        .endDateTime(endDateTime)
        .daysOfWeek(daysOfWeek)
        .instructor(instructor)
        .creator(creator)
        .mosque(mosque);
    }
    
    @Override
     public CopyOfBuilder title(String title) {
      return (CopyOfBuilder) super.title(title);
    }
    
    @Override
     public CopyOfBuilder startDateTime(Temporal.DateTime startDateTime) {
      return (CopyOfBuilder) super.startDateTime(startDateTime);
    }
    
    @Override
     public CopyOfBuilder recurring(Boolean recurring) {
      return (CopyOfBuilder) super.recurring(recurring);
    }
    
    @Override
     public CopyOfBuilder description(String description) {
      return (CopyOfBuilder) super.description(description);
    }
    
    @Override
     public CopyOfBuilder endDateTime(Temporal.DateTime endDateTime) {
      return (CopyOfBuilder) super.endDateTime(endDateTime);
    }
    
    @Override
     public CopyOfBuilder daysOfWeek(List<DayType> daysOfWeek) {
      return (CopyOfBuilder) super.daysOfWeek(daysOfWeek);
    }
    
    @Override
     public CopyOfBuilder instructor(User instructor) {
      return (CopyOfBuilder) super.instructor(instructor);
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
