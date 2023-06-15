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

/** This is an auto generated class representing the MosqueFollowers type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "MosqueFollowers", type = Model.Type.USER, version = 1)
@Index(name = "byMosque", fields = {"mosqueId"})
@Index(name = "byUser", fields = {"userId"})
public final class MosqueFollowers implements Model {
  public static final QueryField ID = field("MosqueFollowers", "id");
  public static final QueryField MOSQUE = field("MosqueFollowers", "mosqueId");
  public static final QueryField USER = field("MosqueFollowers", "userId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="Mosque", isRequired = true) @BelongsTo(targetName = "mosqueId", targetNames = {"mosqueId"}, type = Mosque.class) Mosque mosque;
  private final @ModelField(targetType="User", isRequired = true) @BelongsTo(targetName = "userId", targetNames = {"userId"}, type = User.class) User user;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public Mosque getMosque() {
      return mosque;
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
  
  private MosqueFollowers(String id, Mosque mosque, User user) {
    this.id = id;
    this.mosque = mosque;
    this.user = user;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      MosqueFollowers mosqueFollowers = (MosqueFollowers) obj;
      return ObjectsCompat.equals(getId(), mosqueFollowers.getId()) &&
              ObjectsCompat.equals(getMosque(), mosqueFollowers.getMosque()) &&
              ObjectsCompat.equals(getUser(), mosqueFollowers.getUser()) &&
              ObjectsCompat.equals(getCreatedAt(), mosqueFollowers.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), mosqueFollowers.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getMosque())
      .append(getUser())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("MosqueFollowers {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("mosque=" + String.valueOf(getMosque()) + ", ")
      .append("user=" + String.valueOf(getUser()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static MosqueStep builder() {
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
  public static MosqueFollowers justId(String id) {
    return new MosqueFollowers(
      id,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      mosque,
      user);
  }
  public interface MosqueStep {
    UserStep mosque(Mosque mosque);
  }
  

  public interface UserStep {
    BuildStep user(User user);
  }
  

  public interface BuildStep {
    MosqueFollowers build();
    BuildStep id(String id);
  }
  

  public static class Builder implements MosqueStep, UserStep, BuildStep {
    private String id;
    private Mosque mosque;
    private User user;
    @Override
     public MosqueFollowers build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new MosqueFollowers(
          id,
          mosque,
          user);
    }
    
    @Override
     public UserStep mosque(Mosque mosque) {
        Objects.requireNonNull(mosque);
        this.mosque = mosque;
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
    private CopyOfBuilder(String id, Mosque mosque, User user) {
      super.id(id);
      super.mosque(mosque)
        .user(user);
    }
    
    @Override
     public CopyOfBuilder mosque(Mosque mosque) {
      return (CopyOfBuilder) super.mosque(mosque);
    }
    
    @Override
     public CopyOfBuilder user(User user) {
      return (CopyOfBuilder) super.user(user);
    }
  }
  
}
