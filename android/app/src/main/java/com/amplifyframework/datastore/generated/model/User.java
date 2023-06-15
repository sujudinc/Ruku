package com.amplifyframework.datastore.generated.model;

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

/** This is an auto generated class representing the User type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "Users", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
public final class User implements Model {
  public static final QueryField ID = field("User", "id");
  public static final QueryField SELFIE = field("User", "selfie");
  public static final QueryField FIRST_NAME = field("User", "firstName");
  public static final QueryField LAST_NAME = field("User", "lastName");
  public static final QueryField EMAIL = field("User", "email");
  public static final QueryField TYPE = field("User", "type");
  public static final QueryField STATUS = field("User", "status");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String selfie;
  private final @ModelField(targetType="String", isRequired = true) String firstName;
  private final @ModelField(targetType="String", isRequired = true) String lastName;
  private final @ModelField(targetType="AWSEmail", isRequired = true) String email;
  private final @ModelField(targetType="UserType", isRequired = true) UserType type;
  private final @ModelField(targetType="UserStatus", isRequired = true) UserStatus status;
  private final @ModelField(targetType="Announcement") @HasMany(associatedWith = "creator", type = Announcement.class) List<Announcement> createdAnnouncements = null;
  private final @ModelField(targetType="Class") @HasMany(associatedWith = "creator", type = Class.class) List<Class> createdClasses = null;
  private final @ModelField(targetType="Committee") @HasMany(associatedWith = "creator", type = Committee.class) List<Committee> createdCommittees = null;
  private final @ModelField(targetType="Gathering") @HasMany(associatedWith = "creator", type = Gathering.class) List<Gathering> createdGatherings = null;
  private final @ModelField(targetType="FundraisingCampaign") @HasMany(associatedWith = "creator", type = FundraisingCampaign.class) List<FundraisingCampaign> createdFundraisingCampaigns = null;
  private final @ModelField(targetType="MonthlyPrayerSchedule") @HasMany(associatedWith = "creator", type = MonthlyPrayerSchedule.class) List<MonthlyPrayerSchedule> createdMonthlyPrayerSchedules = null;
  private final @ModelField(targetType="Mosque") @HasMany(associatedWith = "creator", type = Mosque.class) List<Mosque> createdMosques = null;
  private final @ModelField(targetType="Resource") @HasMany(associatedWith = "creator", type = Resource.class) List<Resource> createdResources = null;
  private final @ModelField(targetType="Service") @HasMany(associatedWith = "creator", type = Service.class) List<Service> createdServices = null;
  private final @ModelField(targetType="VolunteerTask") @HasMany(associatedWith = "creator", type = VolunteerTask.class) List<VolunteerTask> createdVolunteerTasks = null;
  private final @ModelField(targetType="Class") @HasMany(associatedWith = "instructor", type = Class.class) List<Class> instructingClasses = null;
  private final @ModelField(targetType="Donation") @HasMany(associatedWith = "donor", type = Donation.class) List<Donation> donations = null;
  private final @ModelField(targetType="CommitteeMembers") @HasMany(associatedWith = "user", type = CommitteeMembers.class) List<CommitteeMembers> committees = null;
  private final @ModelField(targetType="GatheringAttendees") @HasMany(associatedWith = "user", type = GatheringAttendees.class) List<GatheringAttendees> gatherings = null;
  private final @ModelField(targetType="MosqueFollowers") @HasMany(associatedWith = "user", type = MosqueFollowers.class) List<MosqueFollowers> mosques = null;
  private final @ModelField(targetType="VolunteerTaskUser") @HasMany(associatedWith = "user", type = VolunteerTaskUser.class) List<VolunteerTaskUser> volunteerTasks = null;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public String getSelfie() {
      return selfie;
  }
  
  public String getFirstName() {
      return firstName;
  }
  
  public String getLastName() {
      return lastName;
  }
  
  public String getEmail() {
      return email;
  }
  
  public UserType getType() {
      return type;
  }
  
  public UserStatus getStatus() {
      return status;
  }
  
  public List<Announcement> getCreatedAnnouncements() {
      return createdAnnouncements;
  }
  
  public List<Class> getCreatedClasses() {
      return createdClasses;
  }
  
  public List<Committee> getCreatedCommittees() {
      return createdCommittees;
  }
  
  public List<Gathering> getCreatedGatherings() {
      return createdGatherings;
  }
  
  public List<FundraisingCampaign> getCreatedFundraisingCampaigns() {
      return createdFundraisingCampaigns;
  }
  
  public List<MonthlyPrayerSchedule> getCreatedMonthlyPrayerSchedules() {
      return createdMonthlyPrayerSchedules;
  }
  
  public List<Mosque> getCreatedMosques() {
      return createdMosques;
  }
  
  public List<Resource> getCreatedResources() {
      return createdResources;
  }
  
  public List<Service> getCreatedServices() {
      return createdServices;
  }
  
  public List<VolunteerTask> getCreatedVolunteerTasks() {
      return createdVolunteerTasks;
  }
  
  public List<Class> getInstructingClasses() {
      return instructingClasses;
  }
  
  public List<Donation> getDonations() {
      return donations;
  }
  
  public List<CommitteeMembers> getCommittees() {
      return committees;
  }
  
  public List<GatheringAttendees> getGatherings() {
      return gatherings;
  }
  
  public List<MosqueFollowers> getMosques() {
      return mosques;
  }
  
  public List<VolunteerTaskUser> getVolunteerTasks() {
      return volunteerTasks;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private User(String id, String selfie, String firstName, String lastName, String email, UserType type, UserStatus status) {
    this.id = id;
    this.selfie = selfie;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.type = type;
    this.status = status;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      User user = (User) obj;
      return ObjectsCompat.equals(getId(), user.getId()) &&
              ObjectsCompat.equals(getSelfie(), user.getSelfie()) &&
              ObjectsCompat.equals(getFirstName(), user.getFirstName()) &&
              ObjectsCompat.equals(getLastName(), user.getLastName()) &&
              ObjectsCompat.equals(getEmail(), user.getEmail()) &&
              ObjectsCompat.equals(getType(), user.getType()) &&
              ObjectsCompat.equals(getStatus(), user.getStatus()) &&
              ObjectsCompat.equals(getCreatedAt(), user.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), user.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getSelfie())
      .append(getFirstName())
      .append(getLastName())
      .append(getEmail())
      .append(getType())
      .append(getStatus())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("User {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("selfie=" + String.valueOf(getSelfie()) + ", ")
      .append("firstName=" + String.valueOf(getFirstName()) + ", ")
      .append("lastName=" + String.valueOf(getLastName()) + ", ")
      .append("email=" + String.valueOf(getEmail()) + ", ")
      .append("type=" + String.valueOf(getType()) + ", ")
      .append("status=" + String.valueOf(getStatus()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static FirstNameStep builder() {
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
  public static User justId(String id) {
    return new User(
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
      selfie,
      firstName,
      lastName,
      email,
      type,
      status);
  }
  public interface FirstNameStep {
    LastNameStep firstName(String firstName);
  }
  

  public interface LastNameStep {
    EmailStep lastName(String lastName);
  }
  

  public interface EmailStep {
    TypeStep email(String email);
  }
  

  public interface TypeStep {
    StatusStep type(UserType type);
  }
  

  public interface StatusStep {
    BuildStep status(UserStatus status);
  }
  

  public interface BuildStep {
    User build();
    BuildStep id(String id);
    BuildStep selfie(String selfie);
  }
  

  public static class Builder implements FirstNameStep, LastNameStep, EmailStep, TypeStep, StatusStep, BuildStep {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private UserType type;
    private UserStatus status;
    private String selfie;
    @Override
     public User build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new User(
          id,
          selfie,
          firstName,
          lastName,
          email,
          type,
          status);
    }
    
    @Override
     public LastNameStep firstName(String firstName) {
        Objects.requireNonNull(firstName);
        this.firstName = firstName;
        return this;
    }
    
    @Override
     public EmailStep lastName(String lastName) {
        Objects.requireNonNull(lastName);
        this.lastName = lastName;
        return this;
    }
    
    @Override
     public TypeStep email(String email) {
        Objects.requireNonNull(email);
        this.email = email;
        return this;
    }
    
    @Override
     public StatusStep type(UserType type) {
        Objects.requireNonNull(type);
        this.type = type;
        return this;
    }
    
    @Override
     public BuildStep status(UserStatus status) {
        Objects.requireNonNull(status);
        this.status = status;
        return this;
    }
    
    @Override
     public BuildStep selfie(String selfie) {
        this.selfie = selfie;
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
    private CopyOfBuilder(String id, String selfie, String firstName, String lastName, String email, UserType type, UserStatus status) {
      super.id(id);
      super.firstName(firstName)
        .lastName(lastName)
        .email(email)
        .type(type)
        .status(status)
        .selfie(selfie);
    }
    
    @Override
     public CopyOfBuilder firstName(String firstName) {
      return (CopyOfBuilder) super.firstName(firstName);
    }
    
    @Override
     public CopyOfBuilder lastName(String lastName) {
      return (CopyOfBuilder) super.lastName(lastName);
    }
    
    @Override
     public CopyOfBuilder email(String email) {
      return (CopyOfBuilder) super.email(email);
    }
    
    @Override
     public CopyOfBuilder type(UserType type) {
      return (CopyOfBuilder) super.type(type);
    }
    
    @Override
     public CopyOfBuilder status(UserStatus status) {
      return (CopyOfBuilder) super.status(status);
    }
    
    @Override
     public CopyOfBuilder selfie(String selfie) {
      return (CopyOfBuilder) super.selfie(selfie);
    }
  }
  
}
