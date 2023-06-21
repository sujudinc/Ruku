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

/** This is an auto generated class representing the Donation type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "Donations", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PRIVATE, operations = { ModelOperation.READ }),
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.READ })
})
@Index(name = "byDonor", fields = {"donorId"})
@Index(name = "byFundraisingCampaign", fields = {"fundraisingCampaignId"})
public final class Donation implements Model {
  public static final QueryField ID = field("Donation", "id");
  public static final QueryField AMOUNT = field("Donation", "amount");
  public static final QueryField CURRENCY = field("Donation", "currency");
  public static final QueryField IS_ANONYMOUS = field("Donation", "isAnonymous");
  public static final QueryField DONOR = field("Donation", "donorId");
  public static final QueryField FUNDRAISING_CAMPAIGN = field("Donation", "fundraisingCampaignId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="Float", isRequired = true) Double amount;
  private final @ModelField(targetType="String", isRequired = true) String currency;
  private final @ModelField(targetType="Boolean", isRequired = true) Boolean isAnonymous;
  private final @ModelField(targetType="User") @BelongsTo(targetName = "donorId", targetNames = {"donorId"}, type = User.class) User donor;
  private final @ModelField(targetType="FundraisingCampaign") @BelongsTo(targetName = "fundraisingCampaignId", targetNames = {"fundraisingCampaignId"}, type = FundraisingCampaign.class) FundraisingCampaign fundraisingCampaign;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public Double getAmount() {
      return amount;
  }
  
  public String getCurrency() {
      return currency;
  }
  
  public Boolean getIsAnonymous() {
      return isAnonymous;
  }
  
  public User getDonor() {
      return donor;
  }
  
  public FundraisingCampaign getFundraisingCampaign() {
      return fundraisingCampaign;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private Donation(String id, Double amount, String currency, Boolean isAnonymous, User donor, FundraisingCampaign fundraisingCampaign) {
    this.id = id;
    this.amount = amount;
    this.currency = currency;
    this.isAnonymous = isAnonymous;
    this.donor = donor;
    this.fundraisingCampaign = fundraisingCampaign;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      Donation donation = (Donation) obj;
      return ObjectsCompat.equals(getId(), donation.getId()) &&
              ObjectsCompat.equals(getAmount(), donation.getAmount()) &&
              ObjectsCompat.equals(getCurrency(), donation.getCurrency()) &&
              ObjectsCompat.equals(getIsAnonymous(), donation.getIsAnonymous()) &&
              ObjectsCompat.equals(getDonor(), donation.getDonor()) &&
              ObjectsCompat.equals(getFundraisingCampaign(), donation.getFundraisingCampaign()) &&
              ObjectsCompat.equals(getCreatedAt(), donation.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), donation.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getAmount())
      .append(getCurrency())
      .append(getIsAnonymous())
      .append(getDonor())
      .append(getFundraisingCampaign())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("Donation {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("amount=" + String.valueOf(getAmount()) + ", ")
      .append("currency=" + String.valueOf(getCurrency()) + ", ")
      .append("isAnonymous=" + String.valueOf(getIsAnonymous()) + ", ")
      .append("donor=" + String.valueOf(getDonor()) + ", ")
      .append("fundraisingCampaign=" + String.valueOf(getFundraisingCampaign()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static AmountStep builder() {
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
  public static Donation justId(String id) {
    return new Donation(
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
      amount,
      currency,
      isAnonymous,
      donor,
      fundraisingCampaign);
  }
  public interface AmountStep {
    CurrencyStep amount(Double amount);
  }
  

  public interface CurrencyStep {
    IsAnonymousStep currency(String currency);
  }
  

  public interface IsAnonymousStep {
    BuildStep isAnonymous(Boolean isAnonymous);
  }
  

  public interface BuildStep {
    Donation build();
    BuildStep id(String id);
    BuildStep donor(User donor);
    BuildStep fundraisingCampaign(FundraisingCampaign fundraisingCampaign);
  }
  

  public static class Builder implements AmountStep, CurrencyStep, IsAnonymousStep, BuildStep {
    private String id;
    private Double amount;
    private String currency;
    private Boolean isAnonymous;
    private User donor;
    private FundraisingCampaign fundraisingCampaign;
    @Override
     public Donation build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new Donation(
          id,
          amount,
          currency,
          isAnonymous,
          donor,
          fundraisingCampaign);
    }
    
    @Override
     public CurrencyStep amount(Double amount) {
        Objects.requireNonNull(amount);
        this.amount = amount;
        return this;
    }
    
    @Override
     public IsAnonymousStep currency(String currency) {
        Objects.requireNonNull(currency);
        this.currency = currency;
        return this;
    }
    
    @Override
     public BuildStep isAnonymous(Boolean isAnonymous) {
        Objects.requireNonNull(isAnonymous);
        this.isAnonymous = isAnonymous;
        return this;
    }
    
    @Override
     public BuildStep donor(User donor) {
        this.donor = donor;
        return this;
    }
    
    @Override
     public BuildStep fundraisingCampaign(FundraisingCampaign fundraisingCampaign) {
        this.fundraisingCampaign = fundraisingCampaign;
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
    private CopyOfBuilder(String id, Double amount, String currency, Boolean isAnonymous, User donor, FundraisingCampaign fundraisingCampaign) {
      super.id(id);
      super.amount(amount)
        .currency(currency)
        .isAnonymous(isAnonymous)
        .donor(donor)
        .fundraisingCampaign(fundraisingCampaign);
    }
    
    @Override
     public CopyOfBuilder amount(Double amount) {
      return (CopyOfBuilder) super.amount(amount);
    }
    
    @Override
     public CopyOfBuilder currency(String currency) {
      return (CopyOfBuilder) super.currency(currency);
    }
    
    @Override
     public CopyOfBuilder isAnonymous(Boolean isAnonymous) {
      return (CopyOfBuilder) super.isAnonymous(isAnonymous);
    }
    
    @Override
     public CopyOfBuilder donor(User donor) {
      return (CopyOfBuilder) super.donor(donor);
    }
    
    @Override
     public CopyOfBuilder fundraisingCampaign(FundraisingCampaign fundraisingCampaign) {
      return (CopyOfBuilder) super.fundraisingCampaign(fundraisingCampaign);
    }
  }
  
}
