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

/** This is an auto generated class representing the FundraisingCampaign type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "FundraisingCampaigns", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PRIVATE, operations = { ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
@Index(name = "byCreator", fields = {"creatorId"})
@Index(name = "byMosque", fields = {"mosqueId"})
public final class FundraisingCampaign implements Model {
  public static final QueryField ID = field("FundraisingCampaign", "id");
  public static final QueryField TITLE = field("FundraisingCampaign", "title");
  public static final QueryField DESCRIPTION = field("FundraisingCampaign", "description");
  public static final QueryField FEATURE_IMAGE = field("FundraisingCampaign", "featureImage");
  public static final QueryField TYPE = field("FundraisingCampaign", "type");
  public static final QueryField GOAL = field("FundraisingCampaign", "goal");
  public static final QueryField GOAL_DATE = field("FundraisingCampaign", "goalDate");
  public static final QueryField CURRENT_AMOUNT = field("FundraisingCampaign", "currentAmount");
  public static final QueryField CURRENCY = field("FundraisingCampaign", "currency");
  public static final QueryField CREATOR = field("FundraisingCampaign", "creatorId");
  public static final QueryField MOSQUE = field("FundraisingCampaign", "mosqueId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String", isRequired = true) String title;
  private final @ModelField(targetType="String") String description;
  private final @ModelField(targetType="String") String featureImage;
  private final @ModelField(targetType="FundraisingCampaignType", isRequired = true) FundraisingCampaignType type;
  private final @ModelField(targetType="Float", isRequired = true) Double goal;
  private final @ModelField(targetType="AWSDateTime", isRequired = true) Temporal.DateTime goalDate;
  private final @ModelField(targetType="Float", isRequired = true) Double currentAmount;
  private final @ModelField(targetType="String", isRequired = true) String currency;
  private final @ModelField(targetType="User") @BelongsTo(targetName = "creatorId", targetNames = {"creatorId"}, type = User.class) User creator;
  private final @ModelField(targetType="Mosque") @BelongsTo(targetName = "mosqueId", targetNames = {"mosqueId"}, type = Mosque.class) Mosque mosque;
  private final @ModelField(targetType="Donation") @HasMany(associatedWith = "fundraisingCampaign", type = Donation.class) List<Donation> donations = null;
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
  
  public String getFeatureImage() {
      return featureImage;
  }
  
  public FundraisingCampaignType getType() {
      return type;
  }
  
  public Double getGoal() {
      return goal;
  }
  
  public Temporal.DateTime getGoalDate() {
      return goalDate;
  }
  
  public Double getCurrentAmount() {
      return currentAmount;
  }
  
  public String getCurrency() {
      return currency;
  }
  
  public User getCreator() {
      return creator;
  }
  
  public Mosque getMosque() {
      return mosque;
  }
  
  public List<Donation> getDonations() {
      return donations;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private FundraisingCampaign(String id, String title, String description, String featureImage, FundraisingCampaignType type, Double goal, Temporal.DateTime goalDate, Double currentAmount, String currency, User creator, Mosque mosque) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.featureImage = featureImage;
    this.type = type;
    this.goal = goal;
    this.goalDate = goalDate;
    this.currentAmount = currentAmount;
    this.currency = currency;
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
      FundraisingCampaign fundraisingCampaign = (FundraisingCampaign) obj;
      return ObjectsCompat.equals(getId(), fundraisingCampaign.getId()) &&
              ObjectsCompat.equals(getTitle(), fundraisingCampaign.getTitle()) &&
              ObjectsCompat.equals(getDescription(), fundraisingCampaign.getDescription()) &&
              ObjectsCompat.equals(getFeatureImage(), fundraisingCampaign.getFeatureImage()) &&
              ObjectsCompat.equals(getType(), fundraisingCampaign.getType()) &&
              ObjectsCompat.equals(getGoal(), fundraisingCampaign.getGoal()) &&
              ObjectsCompat.equals(getGoalDate(), fundraisingCampaign.getGoalDate()) &&
              ObjectsCompat.equals(getCurrentAmount(), fundraisingCampaign.getCurrentAmount()) &&
              ObjectsCompat.equals(getCurrency(), fundraisingCampaign.getCurrency()) &&
              ObjectsCompat.equals(getCreator(), fundraisingCampaign.getCreator()) &&
              ObjectsCompat.equals(getMosque(), fundraisingCampaign.getMosque()) &&
              ObjectsCompat.equals(getCreatedAt(), fundraisingCampaign.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), fundraisingCampaign.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getTitle())
      .append(getDescription())
      .append(getFeatureImage())
      .append(getType())
      .append(getGoal())
      .append(getGoalDate())
      .append(getCurrentAmount())
      .append(getCurrency())
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
      .append("FundraisingCampaign {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("title=" + String.valueOf(getTitle()) + ", ")
      .append("description=" + String.valueOf(getDescription()) + ", ")
      .append("featureImage=" + String.valueOf(getFeatureImage()) + ", ")
      .append("type=" + String.valueOf(getType()) + ", ")
      .append("goal=" + String.valueOf(getGoal()) + ", ")
      .append("goalDate=" + String.valueOf(getGoalDate()) + ", ")
      .append("currentAmount=" + String.valueOf(getCurrentAmount()) + ", ")
      .append("currency=" + String.valueOf(getCurrency()) + ", ")
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
  public static FundraisingCampaign justId(String id) {
    return new FundraisingCampaign(
      id,
      null,
      null,
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
      featureImage,
      type,
      goal,
      goalDate,
      currentAmount,
      currency,
      creator,
      mosque);
  }
  public interface TitleStep {
    TypeStep title(String title);
  }
  

  public interface TypeStep {
    GoalStep type(FundraisingCampaignType type);
  }
  

  public interface GoalStep {
    GoalDateStep goal(Double goal);
  }
  

  public interface GoalDateStep {
    CurrentAmountStep goalDate(Temporal.DateTime goalDate);
  }
  

  public interface CurrentAmountStep {
    CurrencyStep currentAmount(Double currentAmount);
  }
  

  public interface CurrencyStep {
    BuildStep currency(String currency);
  }
  

  public interface BuildStep {
    FundraisingCampaign build();
    BuildStep id(String id);
    BuildStep description(String description);
    BuildStep featureImage(String featureImage);
    BuildStep creator(User creator);
    BuildStep mosque(Mosque mosque);
  }
  

  public static class Builder implements TitleStep, TypeStep, GoalStep, GoalDateStep, CurrentAmountStep, CurrencyStep, BuildStep {
    private String id;
    private String title;
    private FundraisingCampaignType type;
    private Double goal;
    private Temporal.DateTime goalDate;
    private Double currentAmount;
    private String currency;
    private String description;
    private String featureImage;
    private User creator;
    private Mosque mosque;
    @Override
     public FundraisingCampaign build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new FundraisingCampaign(
          id,
          title,
          description,
          featureImage,
          type,
          goal,
          goalDate,
          currentAmount,
          currency,
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
     public GoalStep type(FundraisingCampaignType type) {
        Objects.requireNonNull(type);
        this.type = type;
        return this;
    }
    
    @Override
     public GoalDateStep goal(Double goal) {
        Objects.requireNonNull(goal);
        this.goal = goal;
        return this;
    }
    
    @Override
     public CurrentAmountStep goalDate(Temporal.DateTime goalDate) {
        Objects.requireNonNull(goalDate);
        this.goalDate = goalDate;
        return this;
    }
    
    @Override
     public CurrencyStep currentAmount(Double currentAmount) {
        Objects.requireNonNull(currentAmount);
        this.currentAmount = currentAmount;
        return this;
    }
    
    @Override
     public BuildStep currency(String currency) {
        Objects.requireNonNull(currency);
        this.currency = currency;
        return this;
    }
    
    @Override
     public BuildStep description(String description) {
        this.description = description;
        return this;
    }
    
    @Override
     public BuildStep featureImage(String featureImage) {
        this.featureImage = featureImage;
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
    private CopyOfBuilder(String id, String title, String description, String featureImage, FundraisingCampaignType type, Double goal, Temporal.DateTime goalDate, Double currentAmount, String currency, User creator, Mosque mosque) {
      super.id(id);
      super.title(title)
        .type(type)
        .goal(goal)
        .goalDate(goalDate)
        .currentAmount(currentAmount)
        .currency(currency)
        .description(description)
        .featureImage(featureImage)
        .creator(creator)
        .mosque(mosque);
    }
    
    @Override
     public CopyOfBuilder title(String title) {
      return (CopyOfBuilder) super.title(title);
    }
    
    @Override
     public CopyOfBuilder type(FundraisingCampaignType type) {
      return (CopyOfBuilder) super.type(type);
    }
    
    @Override
     public CopyOfBuilder goal(Double goal) {
      return (CopyOfBuilder) super.goal(goal);
    }
    
    @Override
     public CopyOfBuilder goalDate(Temporal.DateTime goalDate) {
      return (CopyOfBuilder) super.goalDate(goalDate);
    }
    
    @Override
     public CopyOfBuilder currentAmount(Double currentAmount) {
      return (CopyOfBuilder) super.currentAmount(currentAmount);
    }
    
    @Override
     public CopyOfBuilder currency(String currency) {
      return (CopyOfBuilder) super.currency(currency);
    }
    
    @Override
     public CopyOfBuilder description(String description) {
      return (CopyOfBuilder) super.description(description);
    }
    
    @Override
     public CopyOfBuilder featureImage(String featureImage) {
      return (CopyOfBuilder) super.featureImage(featureImage);
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
