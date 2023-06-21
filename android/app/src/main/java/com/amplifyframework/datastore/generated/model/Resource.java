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

/** This is an auto generated class representing the Resource type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "Resources", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PRIVATE, operations = { ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
@Index(name = "byCreator", fields = {"creatorId"})
@Index(name = "byMosque", fields = {"mosqueId"})
public final class Resource implements Model {
  public static final QueryField ID = field("Resource", "id");
  public static final QueryField TITLE = field("Resource", "title");
  public static final QueryField DESCRIPTION = field("Resource", "description");
  public static final QueryField TYPE = field("Resource", "type");
  public static final QueryField URL = field("Resource", "url");
  public static final QueryField CREATOR = field("Resource", "creatorId");
  public static final QueryField MOSQUE = field("Resource", "mosqueId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String", isRequired = true) String title;
  private final @ModelField(targetType="String") String description;
  private final @ModelField(targetType="ResourceType", isRequired = true) ResourceType type;
  private final @ModelField(targetType="String", isRequired = true) String url;
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
  
  public ResourceType getType() {
      return type;
  }
  
  public String getUrl() {
      return url;
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
  
  private Resource(String id, String title, String description, ResourceType type, String url, User creator, Mosque mosque) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.type = type;
    this.url = url;
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
      Resource resource = (Resource) obj;
      return ObjectsCompat.equals(getId(), resource.getId()) &&
              ObjectsCompat.equals(getTitle(), resource.getTitle()) &&
              ObjectsCompat.equals(getDescription(), resource.getDescription()) &&
              ObjectsCompat.equals(getType(), resource.getType()) &&
              ObjectsCompat.equals(getUrl(), resource.getUrl()) &&
              ObjectsCompat.equals(getCreator(), resource.getCreator()) &&
              ObjectsCompat.equals(getMosque(), resource.getMosque()) &&
              ObjectsCompat.equals(getCreatedAt(), resource.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), resource.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getTitle())
      .append(getDescription())
      .append(getType())
      .append(getUrl())
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
      .append("Resource {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("title=" + String.valueOf(getTitle()) + ", ")
      .append("description=" + String.valueOf(getDescription()) + ", ")
      .append("type=" + String.valueOf(getType()) + ", ")
      .append("url=" + String.valueOf(getUrl()) + ", ")
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
  public static Resource justId(String id) {
    return new Resource(
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
      title,
      description,
      type,
      url,
      creator,
      mosque);
  }
  public interface TitleStep {
    TypeStep title(String title);
  }
  

  public interface TypeStep {
    UrlStep type(ResourceType type);
  }
  

  public interface UrlStep {
    BuildStep url(String url);
  }
  

  public interface BuildStep {
    Resource build();
    BuildStep id(String id);
    BuildStep description(String description);
    BuildStep creator(User creator);
    BuildStep mosque(Mosque mosque);
  }
  

  public static class Builder implements TitleStep, TypeStep, UrlStep, BuildStep {
    private String id;
    private String title;
    private ResourceType type;
    private String url;
    private String description;
    private User creator;
    private Mosque mosque;
    @Override
     public Resource build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new Resource(
          id,
          title,
          description,
          type,
          url,
          creator,
          mosque);
    }
    
    @Override
     public TypeStep title(String title) {
        Objects.requireNonNull(title);
        this.title = title;
        return this;
    }
    
    @Override
     public UrlStep type(ResourceType type) {
        Objects.requireNonNull(type);
        this.type = type;
        return this;
    }
    
    @Override
     public BuildStep url(String url) {
        Objects.requireNonNull(url);
        this.url = url;
        return this;
    }
    
    @Override
     public BuildStep description(String description) {
        this.description = description;
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
    private CopyOfBuilder(String id, String title, String description, ResourceType type, String url, User creator, Mosque mosque) {
      super.id(id);
      super.title(title)
        .type(type)
        .url(url)
        .description(description)
        .creator(creator)
        .mosque(mosque);
    }
    
    @Override
     public CopyOfBuilder title(String title) {
      return (CopyOfBuilder) super.title(title);
    }
    
    @Override
     public CopyOfBuilder type(ResourceType type) {
      return (CopyOfBuilder) super.type(type);
    }
    
    @Override
     public CopyOfBuilder url(String url) {
      return (CopyOfBuilder) super.url(url);
    }
    
    @Override
     public CopyOfBuilder description(String description) {
      return (CopyOfBuilder) super.description(description);
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
