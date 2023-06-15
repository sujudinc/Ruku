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

/** This is an auto generated class representing the Service type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "Services", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
@Index(name = "byCreator", fields = {"creatorId"})
@Index(name = "byMosque", fields = {"mosqueId"})
public final class Service implements Model {
  public static final QueryField ID = field("Service", "id");
  public static final QueryField TYPE = field("Service", "type");
  public static final QueryField DESCRIPTION = field("Service", "description");
  public static final QueryField DOCUMENTS = field("Service", "documents");
  public static final QueryField CREATOR = field("Service", "creatorId");
  public static final QueryField MOSQUE = field("Service", "mosqueId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="ServiceType", isRequired = true) ServiceType type;
  private final @ModelField(targetType="String") String description;
  private final @ModelField(targetType="String") List<String> documents;
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
  
  public ServiceType getType() {
      return type;
  }
  
  public String getDescription() {
      return description;
  }
  
  public List<String> getDocuments() {
      return documents;
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
  
  private Service(String id, ServiceType type, String description, List<String> documents, User creator, Mosque mosque) {
    this.id = id;
    this.type = type;
    this.description = description;
    this.documents = documents;
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
      Service service = (Service) obj;
      return ObjectsCompat.equals(getId(), service.getId()) &&
              ObjectsCompat.equals(getType(), service.getType()) &&
              ObjectsCompat.equals(getDescription(), service.getDescription()) &&
              ObjectsCompat.equals(getDocuments(), service.getDocuments()) &&
              ObjectsCompat.equals(getCreator(), service.getCreator()) &&
              ObjectsCompat.equals(getMosque(), service.getMosque()) &&
              ObjectsCompat.equals(getCreatedAt(), service.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), service.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getType())
      .append(getDescription())
      .append(getDocuments())
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
      .append("Service {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("type=" + String.valueOf(getType()) + ", ")
      .append("description=" + String.valueOf(getDescription()) + ", ")
      .append("documents=" + String.valueOf(getDocuments()) + ", ")
      .append("creator=" + String.valueOf(getCreator()) + ", ")
      .append("mosque=" + String.valueOf(getMosque()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static TypeStep builder() {
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
  public static Service justId(String id) {
    return new Service(
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
      type,
      description,
      documents,
      creator,
      mosque);
  }
  public interface TypeStep {
    BuildStep type(ServiceType type);
  }
  

  public interface BuildStep {
    Service build();
    BuildStep id(String id);
    BuildStep description(String description);
    BuildStep documents(List<String> documents);
    BuildStep creator(User creator);
    BuildStep mosque(Mosque mosque);
  }
  

  public static class Builder implements TypeStep, BuildStep {
    private String id;
    private ServiceType type;
    private String description;
    private List<String> documents;
    private User creator;
    private Mosque mosque;
    @Override
     public Service build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new Service(
          id,
          type,
          description,
          documents,
          creator,
          mosque);
    }
    
    @Override
     public BuildStep type(ServiceType type) {
        Objects.requireNonNull(type);
        this.type = type;
        return this;
    }
    
    @Override
     public BuildStep description(String description) {
        this.description = description;
        return this;
    }
    
    @Override
     public BuildStep documents(List<String> documents) {
        this.documents = documents;
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
    private CopyOfBuilder(String id, ServiceType type, String description, List<String> documents, User creator, Mosque mosque) {
      super.id(id);
      super.type(type)
        .description(description)
        .documents(documents)
        .creator(creator)
        .mosque(mosque);
    }
    
    @Override
     public CopyOfBuilder type(ServiceType type) {
      return (CopyOfBuilder) super.type(type);
    }
    
    @Override
     public CopyOfBuilder description(String description) {
      return (CopyOfBuilder) super.description(description);
    }
    
    @Override
     public CopyOfBuilder documents(List<String> documents) {
      return (CopyOfBuilder) super.documents(documents);
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
