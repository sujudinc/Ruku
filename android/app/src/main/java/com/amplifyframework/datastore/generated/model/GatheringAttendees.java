package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.annotations.BelongsTo;
import com.amplifyframework.core.model.temporal.Temporal;

import java.util.List;
import java.util.UUID;
import java.util.Objects;

import androidx.core.util.ObjectsCompat;

import com.amplifyframework.core.model.Model;
import com.amplifyframework.core.model.annotations.Index;
import com.amplifyframework.core.model.annotations.ModelConfig;
import com.amplifyframework.core.model.annotations.ModelField;
import com.amplifyframework.core.model.query.predicate.QueryField;

import static com.amplifyframework.core.model.query.predicate.QueryField.field;

/** This is an auto generated class representing the GatheringAttendees type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "GatheringAttendees", type = Model.Type.USER, version = 1)
@Index(name = "byGathering", fields = {"gatheringId"})
@Index(name = "byUser", fields = {"userId"})
public final class GatheringAttendees implements Model {
  public static final QueryField ID = field("GatheringAttendees", "id");
  public static final QueryField GATHERING = field("GatheringAttendees", "gatheringId");
  public static final QueryField USER = field("GatheringAttendees", "userId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="Gathering", isRequired = true) @BelongsTo(targetName = "gatheringId", targetNames = {"gatheringId"}, type = Gathering.class) Gathering gathering;
  private final @ModelField(targetType="User", isRequired = true) @BelongsTo(targetName = "userId", targetNames = {"userId"}, type = User.class) User user;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public Gathering getGathering() {
      return gathering;
  }
  
  public User getUser() {
      return user;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private GatheringAttendees(String id, Gathering gathering, User user) {
    this.id = id;
    this.gathering = gathering;
    this.user = user;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      GatheringAttendees gatheringAttendees = (GatheringAttendees) obj;
      return ObjectsCompat.equals(getId(), gatheringAttendees.getId()) &&
              ObjectsCompat.equals(getGathering(), gatheringAttendees.getGathering()) &&
              ObjectsCompat.equals(getUser(), gatheringAttendees.getUser()) &&
              ObjectsCompat.equals(getCreatedAt(), gatheringAttendees.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), gatheringAttendees.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getGathering())
      .append(getUser())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("GatheringAttendees {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("gathering=" + String.valueOf(getGathering()) + ", ")
      .append("user=" + String.valueOf(getUser()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static GatheringStep builder() {
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
  public static GatheringAttendees justId(String id) {
    return new GatheringAttendees(
      id,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      gathering,
      user);
  }
  public interface GatheringStep {
    UserStep gathering(Gathering gathering);
  }
  

  public interface UserStep {
    BuildStep user(User user);
  }
  

  public interface BuildStep {
    GatheringAttendees build();
    BuildStep id(String id);
  }
  

  public static class Builder implements GatheringStep, UserStep, BuildStep {
    private String id;
    private Gathering gathering;
    private User user;
    @Override
     public GatheringAttendees build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new GatheringAttendees(
          id,
          gathering,
          user);
    }
    
    @Override
     public UserStep gathering(Gathering gathering) {
        Objects.requireNonNull(gathering);
        this.gathering = gathering;
        return this;
    }
    
    @Override
     public BuildStep user(User user) {
        Objects.requireNonNull(user);
        this.user = user;
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
    private CopyOfBuilder(String id, Gathering gathering, User user) {
      super.id(id);
      super.gathering(gathering)
        .user(user);
    }
    
    @Override
     public CopyOfBuilder gathering(Gathering gathering) {
      return (CopyOfBuilder) super.gathering(gathering);
    }
    
    @Override
     public CopyOfBuilder user(User user) {
      return (CopyOfBuilder) super.user(user);
    }
  }
  
}
