package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.annotations.BelongsTo;
import com.amplifyframework.core.model.annotations.HasMany;
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

/** This is an auto generated class representing the Mosque type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "Mosques", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
@Index(name = "byCreator", fields = {"creatorId"})
public final class Mosque implements Model {
  public static final QueryField ID = field("Mosque", "id");
  public static final QueryField NAME = field("Mosque", "name");
  public static final QueryField DESCRIPTION = field("Mosque", "description");
  public static final QueryField IMAGES = field("Mosque", "images");
  public static final QueryField LOCATION = field("Mosque", "location");
  public static final QueryField HOURS = field("Mosque", "hours");
  public static final QueryField CONTACT_INFO = field("Mosque", "contactInfo");
  public static final QueryField LIVE_VIDEO_URL = field("Mosque", "liveVideoUrl");
  public static final QueryField CREATOR = field("Mosque", "creatorId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String", isRequired = true) String name;
  private final @ModelField(targetType="String") String description;
  private final @ModelField(targetType="String") List<String> images;
  private final @ModelField(targetType="Location", isRequired = true) Location location;
  private final @ModelField(targetType="Hours", isRequired = true) Hours hours;
  private final @ModelField(targetType="ContactInfo") ContactInfo contactInfo;
  private final @ModelField(targetType="String") String liveVideoUrl;
  private final @ModelField(targetType="User") @BelongsTo(targetName = "creatorId", targetNames = {"creatorId"}, type = User.class) User creator;
  private final @ModelField(targetType="MosqueFollowers") @HasMany(associatedWith = "mosque", type = MosqueFollowers.class) List<MosqueFollowers> followers = null;
  private final @ModelField(targetType="Announcement") @HasMany(associatedWith = "mosque", type = Announcement.class) List<Announcement> announcements = null;
  private final @ModelField(targetType="Class") @HasMany(associatedWith = "mosque", type = Class.class) List<Class> classes = null;
  private final @ModelField(targetType="Committee") @HasMany(associatedWith = "mosque", type = Committee.class) List<Committee> committees = null;
  private final @ModelField(targetType="Gathering") @HasMany(associatedWith = "mosque", type = Gathering.class) List<Gathering> gatherings = null;
  private final @ModelField(targetType="FundraisingCampaign") @HasMany(associatedWith = "mosque", type = FundraisingCampaign.class) List<FundraisingCampaign> fundraisingCampaigns = null;
  private final @ModelField(targetType="MonthlyPrayerSchedule") @HasMany(associatedWith = "mosque", type = MonthlyPrayerSchedule.class) List<MonthlyPrayerSchedule> monthlyPrayerSchedules = null;
  private final @ModelField(targetType="Resource") @HasMany(associatedWith = "mosque", type = Resource.class) List<Resource> resources = null;
  private final @ModelField(targetType="Service") @HasMany(associatedWith = "mosque", type = Service.class) List<Service> services = null;
  private final @ModelField(targetType="VolunteerTask") @HasMany(associatedWith = "mosque", type = VolunteerTask.class) List<VolunteerTask> volunteerTasks = null;
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
  
  public List<String> getImages() {
      return images;
  }
  
  public Location getLocation() {
      return location;
  }
  
  public Hours getHours() {
      return hours;
  }
  
  public ContactInfo getContactInfo() {
      return contactInfo;
  }
  
  public String getLiveVideoUrl() {
      return liveVideoUrl;
  }
  
  public User getCreator() {
      return creator;
  }
  
  public List<MosqueFollowers> getFollowers() {
      return followers;
  }
  
  public List<Announcement> getAnnouncements() {
      return announcements;
  }
  
  public List<Class> getClasses() {
      return classes;
  }
  
  public List<Committee> getCommittees() {
      return committees;
  }
  
  public List<Gathering> getGatherings() {
      return gatherings;
  }
  
  public List<FundraisingCampaign> getFundraisingCampaigns() {
      return fundraisingCampaigns;
  }
  
  public List<MonthlyPrayerSchedule> getMonthlyPrayerSchedules() {
      return monthlyPrayerSchedules;
  }
  
  public List<Resource> getResources() {
      return resources;
  }
  
  public List<Service> getServices() {
      return services;
  }
  
  public List<VolunteerTask> getVolunteerTasks() {
      return volunteerTasks;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private Mosque(String id, String name, String description, List<String> images, Location location, Hours hours, ContactInfo contactInfo, String liveVideoUrl, User creator) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.location = location;
    this.hours = hours;
    this.contactInfo = contactInfo;
    this.liveVideoUrl = liveVideoUrl;
    this.creator = creator;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      Mosque mosque = (Mosque) obj;
      return ObjectsCompat.equals(getId(), mosque.getId()) &&
              ObjectsCompat.equals(getName(), mosque.getName()) &&
              ObjectsCompat.equals(getDescription(), mosque.getDescription()) &&
              ObjectsCompat.equals(getImages(), mosque.getImages()) &&
              ObjectsCompat.equals(getLocation(), mosque.getLocation()) &&
              ObjectsCompat.equals(getHours(), mosque.getHours()) &&
              ObjectsCompat.equals(getContactInfo(), mosque.getContactInfo()) &&
              ObjectsCompat.equals(getLiveVideoUrl(), mosque.getLiveVideoUrl()) &&
              ObjectsCompat.equals(getCreator(), mosque.getCreator()) &&
              ObjectsCompat.equals(getCreatedAt(), mosque.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), mosque.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getName())
      .append(getDescription())
      .append(getImages())
      .append(getLocation())
      .append(getHours())
      .append(getContactInfo())
      .append(getLiveVideoUrl())
      .append(getCreator())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("Mosque {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("name=" + String.valueOf(getName()) + ", ")
      .append("description=" + String.valueOf(getDescription()) + ", ")
      .append("images=" + String.valueOf(getImages()) + ", ")
      .append("location=" + String.valueOf(getLocation()) + ", ")
      .append("hours=" + String.valueOf(getHours()) + ", ")
      .append("contactInfo=" + String.valueOf(getContactInfo()) + ", ")
      .append("liveVideoUrl=" + String.valueOf(getLiveVideoUrl()) + ", ")
      .append("creator=" + String.valueOf(getCreator()) + ", ")
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
  public static Mosque justId(String id) {
    return new Mosque(
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
      name,
      description,
      images,
      location,
      hours,
      contactInfo,
      liveVideoUrl,
      creator);
  }
  public interface NameStep {
    LocationStep name(String name);
  }
  

  public interface LocationStep {
    HoursStep location(Location location);
  }
  

  public interface HoursStep {
    BuildStep hours(Hours hours);
  }
  

  public interface BuildStep {
    Mosque build();
    BuildStep id(String id);
    BuildStep description(String description);
    BuildStep images(List<String> images);
    BuildStep contactInfo(ContactInfo contactInfo);
    BuildStep liveVideoUrl(String liveVideoUrl);
    BuildStep creator(User creator);
  }
  

  public static class Builder implements NameStep, LocationStep, HoursStep, BuildStep {
    private String id;
    private String name;
    private Location location;
    private Hours hours;
    private String description;
    private List<String> images;
    private ContactInfo contactInfo;
    private String liveVideoUrl;
    private User creator;
    @Override
     public Mosque build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new Mosque(
          id,
          name,
          description,
          images,
          location,
          hours,
          contactInfo,
          liveVideoUrl,
          creator);
    }
    
    @Override
     public LocationStep name(String name) {
        Objects.requireNonNull(name);
        this.name = name;
        return this;
    }
    
    @Override
     public HoursStep location(Location location) {
        Objects.requireNonNull(location);
        this.location = location;
        return this;
    }
    
    @Override
     public BuildStep hours(Hours hours) {
        Objects.requireNonNull(hours);
        this.hours = hours;
        return this;
    }
    
    @Override
     public BuildStep description(String description) {
        this.description = description;
        return this;
    }
    
    @Override
     public BuildStep images(List<String> images) {
        this.images = images;
        return this;
    }
    
    @Override
     public BuildStep contactInfo(ContactInfo contactInfo) {
        this.contactInfo = contactInfo;
        return this;
    }
    
    @Override
     public BuildStep liveVideoUrl(String liveVideoUrl) {
        this.liveVideoUrl = liveVideoUrl;
        return this;
    }
    
    @Override
     public BuildStep creator(User creator) {
        this.creator = creator;
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
    private CopyOfBuilder(String id, String name, String description, List<String> images, Location location, Hours hours, ContactInfo contactInfo, String liveVideoUrl, User creator) {
      super.id(id);
      super.name(name)
        .location(location)
        .hours(hours)
        .description(description)
        .images(images)
        .contactInfo(contactInfo)
        .liveVideoUrl(liveVideoUrl)
        .creator(creator);
    }
    
    @Override
     public CopyOfBuilder name(String name) {
      return (CopyOfBuilder) super.name(name);
    }
    
    @Override
     public CopyOfBuilder location(Location location) {
      return (CopyOfBuilder) super.location(location);
    }
    
    @Override
     public CopyOfBuilder hours(Hours hours) {
      return (CopyOfBuilder) super.hours(hours);
    }
    
    @Override
     public CopyOfBuilder description(String description) {
      return (CopyOfBuilder) super.description(description);
    }
    
    @Override
     public CopyOfBuilder images(List<String> images) {
      return (CopyOfBuilder) super.images(images);
    }
    
    @Override
     public CopyOfBuilder contactInfo(ContactInfo contactInfo) {
      return (CopyOfBuilder) super.contactInfo(contactInfo);
    }
    
    @Override
     public CopyOfBuilder liveVideoUrl(String liveVideoUrl) {
      return (CopyOfBuilder) super.liveVideoUrl(liveVideoUrl);
    }
    
    @Override
     public CopyOfBuilder creator(User creator) {
      return (CopyOfBuilder) super.creator(creator);
    }
  }
  
}
