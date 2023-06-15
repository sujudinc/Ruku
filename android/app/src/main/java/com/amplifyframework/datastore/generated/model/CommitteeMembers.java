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

/** This is an auto generated class representing the CommitteeMembers type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "CommitteeMembers", type = Model.Type.USER, version = 1)
@Index(name = "byCommittee", fields = {"committeeId"})
@Index(name = "byUser", fields = {"userId"})
public final class CommitteeMembers implements Model {
  public static final QueryField ID = field("CommitteeMembers", "id");
  public static final QueryField COMMITTEE = field("CommitteeMembers", "committeeId");
  public static final QueryField USER = field("CommitteeMembers", "userId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="Committee", isRequired = true) @BelongsTo(targetName = "committeeId", targetNames = {"committeeId"}, type = Committee.class) Committee committee;
  private final @ModelField(targetType="User", isRequired = true) @BelongsTo(targetName = "userId", targetNames = {"userId"}, type = User.class) User user;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public Committee getCommittee() {
      return committee;
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
  
  private CommitteeMembers(String id, Committee committee, User user) {
    this.id = id;
    this.committee = committee;
    this.user = user;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      CommitteeMembers committeeMembers = (CommitteeMembers) obj;
      return ObjectsCompat.equals(getId(), committeeMembers.getId()) &&
              ObjectsCompat.equals(getCommittee(), committeeMembers.getCommittee()) &&
              ObjectsCompat.equals(getUser(), committeeMembers.getUser()) &&
              ObjectsCompat.equals(getCreatedAt(), committeeMembers.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), committeeMembers.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getCommittee())
      .append(getUser())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("CommitteeMembers {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("committee=" + String.valueOf(getCommittee()) + ", ")
      .append("user=" + String.valueOf(getUser()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static CommitteeStep builder() {
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
  public static CommitteeMembers justId(String id) {
    return new CommitteeMembers(
      id,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      committee,
      user);
  }
  public interface CommitteeStep {
    UserStep committee(Committee committee);
  }
  

  public interface UserStep {
    BuildStep user(User user);
  }
  

  public interface BuildStep {
    CommitteeMembers build();
    BuildStep id(String id);
  }
  

  public static class Builder implements CommitteeStep, UserStep, BuildStep {
    private String id;
    private Committee committee;
    private User user;
    @Override
     public CommitteeMembers build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new CommitteeMembers(
          id,
          committee,
          user);
    }
    
    @Override
     public UserStep committee(Committee committee) {
        Objects.requireNonNull(committee);
        this.committee = committee;
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
    private CopyOfBuilder(String id, Committee committee, User user) {
      super.id(id);
      super.committee(committee)
        .user(user);
    }
    
    @Override
     public CopyOfBuilder committee(Committee committee) {
      return (CopyOfBuilder) super.committee(committee);
    }
    
    @Override
     public CopyOfBuilder user(User user) {
      return (CopyOfBuilder) super.user(user);
    }
  }
  
}
