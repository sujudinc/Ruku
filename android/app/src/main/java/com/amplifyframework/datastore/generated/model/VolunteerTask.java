package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.temporal.Temporal;
import com.amplifyframework.core.model.annotations.BelongsTo;
import com.amplifyframework.core.model.annotations.HasMany;

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

/** This is an auto generated class representing the VolunteerTask type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "VolunteerTasks", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PRIVATE, operations = { ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
@Index(name = "byCreator", fields = {"creatorId"})
@Index(name = "byMosque", fields = {"mosqueId"})
public final class VolunteerTask implements Model {
  public static final QueryField ID = field("VolunteerTask", "id");
  public static final QueryField NAME = field("VolunteerTask", "name");
  public static final QueryField DESCRIPTION = field("VolunteerTask", "description");
  public static final QueryField START_DATE = field("VolunteerTask", "startDate");
  public static final QueryField END_DATE = field("VolunteerTask", "endDate");
  public static final QueryField CREATOR = field("VolunteerTask", "creatorId");
  public static final QueryField MOSQUE = field("VolunteerTask", "mosqueId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String", isRequired = true) String name;
  private final @ModelField(targetType="String") String description;
  private final @ModelField(targetType="AWSDateTime", isRequired = true) Temporal.DateTime startDate;
  private final @ModelField(targetType="AWSDateTime") Temporal.DateTime endDate;
  private final @ModelField(targetType="User") @BelongsTo(targetName = "creatorId", targetNames = {"creatorId"}, type = User.class) User creator;
  private final @ModelField(targetType="Mosque") @BelongsTo(targetName = "mosqueId", targetNames = {"mosqueId"}, type = Mosque.class) Mosque mosque;
  private final @ModelField(targetType="VolunteerTaskUser") @HasMany(associatedWith = "volunteerTask", type = VolunteerTaskUser.class) List<VolunteerTaskUser> volunteers = null;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public String getName() {
      return name;
  }
  
  public String getDescription() {
      return description;
  }
  
  public Temporal.DateTime getStartDate() {
      return startDate;
  }
  
  public Temporal.DateTime getEndDate() {
      return endDate;
  }
  
  public User getCreator() {
      return creator;
  }
  
  public Mosque getMosque() {
      return mosque;
  }
  
  public List<VolunteerTaskUser> getVolunteers() {
      return volunteers;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private VolunteerTask(String id, String name, String description, Temporal.DateTime startDate, Temporal.DateTime endDate, User creator, Mosque mosque) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
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
      VolunteerTask volunteerTask = (VolunteerTask) obj;
      return ObjectsCompat.equals(getId(), volunteerTask.getId()) &&
              ObjectsCompat.equals(getName(), volunteerTask.getName()) &&
              ObjectsCompat.equals(getDescription(), volunteerTask.getDescription()) &&
              ObjectsCompat.equals(getStartDate(), volunteerTask.getStartDate()) &&
              ObjectsCompat.equals(getEndDate(), volunteerTask.getEndDate()) &&
              ObjectsCompat.equals(getCreator(), volunteerTask.getCreator()) &&
              ObjectsCompat.equals(getMosque(), volunteerTask.getMosque()) &&
              ObjectsCompat.equals(getCreatedAt(), volunteerTask.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), volunteerTask.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getName())
      .append(getDescription())
      .append(getStartDate())
      .append(getEndDate())
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
      .append("VolunteerTask {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("name=" + String.valueOf(getName()) + ", ")
      .append("description=" + String.valueOf(getDescription()) + ", ")
      .append("startDate=" + String.valueOf(getStartDate()) + ", ")
      .append("endDate=" + String.valueOf(getEndDate()) + ", ")
      .append("creator=" + String.valueOf(getCreator()) + ", ")
      .append("mosque=" + String.valueOf(getMosque()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static NameStep builder() {
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
  public static VolunteerTask justId(String id) {
    return new VolunteerTask(
      id,
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
      name,
      description,
      startDate,
      endDate,
      creator,
      mosque);
  }
  public interface NameStep {
    StartDateStep name(String name);
  }
  

  public interface StartDateStep {
    BuildStep startDate(Temporal.DateTime startDate);
  }
  

  public interface BuildStep {
    VolunteerTask build();
    BuildStep id(String id);
    BuildStep description(String description);
    BuildStep endDate(Temporal.DateTime endDate);
    BuildStep creator(User creator);
    BuildStep mosque(Mosque mosque);
  }
  

  public static class Builder implements NameStep, StartDateStep, BuildStep {
    private String id;
    private String name;
    private Temporal.DateTime startDate;
    private String description;
    private Temporal.DateTime endDate;
    private User creator;
    private Mosque mosque;
    @Override
     public VolunteerTask build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new VolunteerTask(
          id,
          name,
          description,
          startDate,
          endDate,
          creator,
          mosque);
    }
    
    @Override
     public StartDateStep name(String name) {
        Objects.requireNonNull(name);
        this.name = name;
        return this;
    }
    
    @Override
     public BuildStep startDate(Temporal.DateTime startDate) {
        Objects.requireNonNull(startDate);
        this.startDate = startDate;
        return this;
    }
    
    @Override
     public BuildStep description(String description) {
        this.description = description;
        return this;
    }
    
    @Override
     public BuildStep endDate(Temporal.DateTime endDate) {
        this.endDate = endDate;
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
    private CopyOfBuilder(String id, String name, String description, Temporal.DateTime startDate, Temporal.DateTime endDate, User creator, Mosque mosque) {
      super.id(id);
      super.name(name)
        .startDate(startDate)
        .description(description)
        .endDate(endDate)
        .creator(creator)
        .mosque(mosque);
    }
    
    @Override
     public CopyOfBuilder name(String name) {
      return (CopyOfBuilder) super.name(name);
    }
    
    @Override
     public CopyOfBuilder startDate(Temporal.DateTime startDate) {
      return (CopyOfBuilder) super.startDate(startDate);
    }
    
    @Override
     public CopyOfBuilder description(String description) {
      return (CopyOfBuilder) super.description(description);
    }
    
    @Override
     public CopyOfBuilder endDate(Temporal.DateTime endDate) {
      return (CopyOfBuilder) super.endDate(endDate);
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
