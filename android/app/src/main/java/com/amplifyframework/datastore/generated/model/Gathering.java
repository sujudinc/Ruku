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

/** This is an auto generated class representing the Gathering type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "Gatherings", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PRIVATE, operations = { ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
@Index(name = "byCreator", fields = {"creatorId"})
@Index(name = "byMosque", fields = {"mosqueId"})
public final class Gathering implements Model {
  public static final QueryField ID = field("Gathering", "id");
  public static final QueryField TITLE = field("Gathering", "title");
  public static final QueryField DESCRIPTION = field("Gathering", "description");
  public static final QueryField GATHERING_TYPE = field("Gathering", "gatheringType");
  public static final QueryField START_DATE = field("Gathering", "startDate");
  public static final QueryField END_DATE = field("Gathering", "endDate");
  public static final QueryField LOCATION = field("Gathering", "location");
  public static final QueryField CREATOR = field("Gathering", "creatorId");
  public static final QueryField MOSQUE = field("Gathering", "mosqueId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String", isRequired = true) String title;
  private final @ModelField(targetType="String") String description;
  private final @ModelField(targetType="GatheringType", isRequired = true) GatheringType gatheringType;
  private final @ModelField(targetType="AWSDateTime", isRequired = true) Temporal.DateTime startDate;
  private final @ModelField(targetType="AWSDateTime") Temporal.DateTime endDate;
  private final @ModelField(targetType="Location", isRequired = true) Location location;
  private final @ModelField(targetType="User") @BelongsTo(targetName = "creatorId", targetNames = {"creatorId"}, type = User.class) User creator;
  private final @ModelField(targetType="Mosque") @BelongsTo(targetName = "mosqueId", targetNames = {"mosqueId"}, type = Mosque.class) Mosque mosque;
  private final @ModelField(targetType="GatheringAttendees") @HasMany(associatedWith = "gathering", type = GatheringAttendees.class) List<GatheringAttendees> attendees = null;
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
  
  public GatheringType getGatheringType() {
      return gatheringType;
  }
  
  public Temporal.DateTime getStartDate() {
      return startDate;
  }
  
  public Temporal.DateTime getEndDate() {
      return endDate;
  }
  
  public Location getLocation() {
      return location;
  }
  
  public User getCreator() {
      return creator;
  }
  
  public Mosque getMosque() {
      return mosque;
  }
  
  public List<GatheringAttendees> getAttendees() {
      return attendees;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private Gathering(String id, String title, String description, GatheringType gatheringType, Temporal.DateTime startDate, Temporal.DateTime endDate, Location location, User creator, Mosque mosque) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.gatheringType = gatheringType;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
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
      Gathering gathering = (Gathering) obj;
      return ObjectsCompat.equals(getId(), gathering.getId()) &&
              ObjectsCompat.equals(getTitle(), gathering.getTitle()) &&
              ObjectsCompat.equals(getDescription(), gathering.getDescription()) &&
              ObjectsCompat.equals(getGatheringType(), gathering.getGatheringType()) &&
              ObjectsCompat.equals(getStartDate(), gathering.getStartDate()) &&
              ObjectsCompat.equals(getEndDate(), gathering.getEndDate()) &&
              ObjectsCompat.equals(getLocation(), gathering.getLocation()) &&
              ObjectsCompat.equals(getCreator(), gathering.getCreator()) &&
              ObjectsCompat.equals(getMosque(), gathering.getMosque()) &&
              ObjectsCompat.equals(getCreatedAt(), gathering.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), gathering.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getTitle())
      .append(getDescription())
      .append(getGatheringType())
      .append(getStartDate())
      .append(getEndDate())
      .append(getLocation())
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
      .append("Gathering {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("title=" + String.valueOf(getTitle()) + ", ")
      .append("description=" + String.valueOf(getDescription()) + ", ")
      .append("gatheringType=" + String.valueOf(getGatheringType()) + ", ")
      .append("startDate=" + String.valueOf(getStartDate()) + ", ")
      .append("endDate=" + String.valueOf(getEndDate()) + ", ")
      .append("location=" + String.valueOf(getLocation()) + ", ")
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
  public static Gathering justId(String id) {
    return new Gathering(
      id,
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
      gatheringType,
      startDate,
      endDate,
      location,
      creator,
      mosque);
  }
  public interface TitleStep {
    GatheringTypeStep title(String title);
  }
  

  public interface GatheringTypeStep {
    StartDateStep gatheringType(GatheringType gatheringType);
  }
  

  public interface StartDateStep {
    LocationStep startDate(Temporal.DateTime startDate);
  }
  

  public interface LocationStep {
    BuildStep location(Location location);
  }
  

  public interface BuildStep {
    Gathering build();
    BuildStep id(String id);
    BuildStep description(String description);
    BuildStep endDate(Temporal.DateTime endDate);
    BuildStep creator(User creator);
    BuildStep mosque(Mosque mosque);
  }
  

  public static class Builder implements TitleStep, GatheringTypeStep, StartDateStep, LocationStep, BuildStep {
    private String id;
    private String title;
    private GatheringType gatheringType;
    private Temporal.DateTime startDate;
    private Location location;
    private String description;
    private Temporal.DateTime endDate;
    private User creator;
    private Mosque mosque;
    @Override
     public Gathering build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new Gathering(
          id,
          title,
          description,
          gatheringType,
          startDate,
          endDate,
          location,
          creator,
          mosque);
    }
    
    @Override
     public GatheringTypeStep title(String title) {
        Objects.requireNonNull(title);
        this.title = title;
        return this;
    }
    
    @Override
     public StartDateStep gatheringType(GatheringType gatheringType) {
        Objects.requireNonNull(gatheringType);
        this.gatheringType = gatheringType;
        return this;
    }
    
    @Override
     public LocationStep startDate(Temporal.DateTime startDate) {
        Objects.requireNonNull(startDate);
        this.startDate = startDate;
        return this;
    }
    
    @Override
     public BuildStep location(Location location) {
        Objects.requireNonNull(location);
        this.location = location;
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
    private CopyOfBuilder(String id, String title, String description, GatheringType gatheringType, Temporal.DateTime startDate, Temporal.DateTime endDate, Location location, User creator, Mosque mosque) {
      super.id(id);
      super.title(title)
        .gatheringType(gatheringType)
        .startDate(startDate)
        .location(location)
        .description(description)
        .endDate(endDate)
        .creator(creator)
        .mosque(mosque);
    }
    
    @Override
     public CopyOfBuilder title(String title) {
      return (CopyOfBuilder) super.title(title);
    }
    
    @Override
     public CopyOfBuilder gatheringType(GatheringType gatheringType) {
      return (CopyOfBuilder) super.gatheringType(gatheringType);
    }
    
    @Override
     public CopyOfBuilder startDate(Temporal.DateTime startDate) {
      return (CopyOfBuilder) super.startDate(startDate);
    }
    
    @Override
     public CopyOfBuilder location(Location location) {
      return (CopyOfBuilder) super.location(location);
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
