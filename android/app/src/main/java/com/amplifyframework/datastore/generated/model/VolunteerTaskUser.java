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

/** This is an auto generated class representing the VolunteerTaskUser type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "VolunteerTaskUsers", type = Model.Type.USER, version = 1)
@Index(name = "byUser", fields = {"userId"})
@Index(name = "byVolunteerTask", fields = {"volunteerTaskId"})
public final class VolunteerTaskUser implements Model {
  public static final QueryField ID = field("VolunteerTaskUser", "id");
  public static final QueryField USER = field("VolunteerTaskUser", "userId");
  public static final QueryField VOLUNTEER_TASK = field("VolunteerTaskUser", "volunteerTaskId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="User", isRequired = true) @BelongsTo(targetName = "userId", targetNames = {"userId"}, type = User.class) User user;
  private final @ModelField(targetType="VolunteerTask", isRequired = true) @BelongsTo(targetName = "volunteerTaskId", targetNames = {"volunteerTaskId"}, type = VolunteerTask.class) VolunteerTask volunteerTask;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public User getUser() {
      return user;
  }
  
  public VolunteerTask getVolunteerTask() {
      return volunteerTask;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private VolunteerTaskUser(String id, User user, VolunteerTask volunteerTask) {
    this.id = id;
    this.user = user;
    this.volunteerTask = volunteerTask;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      VolunteerTaskUser volunteerTaskUser = (VolunteerTaskUser) obj;
      return ObjectsCompat.equals(getId(), volunteerTaskUser.getId()) &&
              ObjectsCompat.equals(getUser(), volunteerTaskUser.getUser()) &&
              ObjectsCompat.equals(getVolunteerTask(), volunteerTaskUser.getVolunteerTask()) &&
              ObjectsCompat.equals(getCreatedAt(), volunteerTaskUser.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), volunteerTaskUser.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getUser())
      .append(getVolunteerTask())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("VolunteerTaskUser {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("user=" + String.valueOf(getUser()) + ", ")
      .append("volunteerTask=" + String.valueOf(getVolunteerTask()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static UserStep builder() {
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
  public static VolunteerTaskUser justId(String id) {
    return new VolunteerTaskUser(
      id,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      user,
      volunteerTask);
  }
  public interface UserStep {
    VolunteerTaskStep user(User user);
  }
  

  public interface VolunteerTaskStep {
    BuildStep volunteerTask(VolunteerTask volunteerTask);
  }
  

  public interface BuildStep {
    VolunteerTaskUser build();
    BuildStep id(String id);
  }
  

  public static class Builder implements UserStep, VolunteerTaskStep, BuildStep {
    private String id;
    private User user;
    private VolunteerTask volunteerTask;
    @Override
     public VolunteerTaskUser build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new VolunteerTaskUser(
          id,
          user,
          volunteerTask);
    }
    
    @Override
     public VolunteerTaskStep user(User user) {
        Objects.requireNonNull(user);
        this.user = user;
        return this;
    }
    
    @Override
     public BuildStep volunteerTask(VolunteerTask volunteerTask) {
        Objects.requireNonNull(volunteerTask);
        this.volunteerTask = volunteerTask;
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
    private CopyOfBuilder(String id, User user, VolunteerTask volunteerTask) {
      super.id(id);
      super.user(user)
        .volunteerTask(volunteerTask);
    }
    
    @Override
     public CopyOfBuilder user(User user) {
      return (CopyOfBuilder) super.user(user);
    }
    
    @Override
     public CopyOfBuilder volunteerTask(VolunteerTask volunteerTask) {
      return (CopyOfBuilder) super.volunteerTask(volunteerTask);
    }
  }
  
}
