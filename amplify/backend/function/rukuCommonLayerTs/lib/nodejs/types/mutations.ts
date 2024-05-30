/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../api";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFundraisingCampaign = /* GraphQL */ `mutation CreateFundraisingCampaign(
  $input: CreateFundraisingCampaignInput!
  $condition: ModelFundraisingCampaignConditionInput
) {
  createFundraisingCampaign(input: $input, condition: $condition) {
    id
    title
    description
    featureImage
    type
    currentAmount
    goal
    goalDate
    currency
    creatorID
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueID
    mosque {
      id
      name
      description
      images
      address
      latitude
      longitude
      hours {
        __typename
      }
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      organizationID
      organization {
        id
        name
        description
        domain
        logo
        phone
        email
        website
        isVerified
        creatorID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      prayerTimes {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    donations {
      items {
        id
        amount
        currency
        isAnonymous
        donorID
        fundraisingCampaignID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFundraisingCampaignMutationVariables,
  APITypes.CreateFundraisingCampaignMutation
>;
export const updateFundraisingCampaign = /* GraphQL */ `mutation UpdateFundraisingCampaign(
  $input: UpdateFundraisingCampaignInput!
  $condition: ModelFundraisingCampaignConditionInput
) {
  updateFundraisingCampaign(input: $input, condition: $condition) {
    id
    title
    description
    featureImage
    type
    currentAmount
    goal
    goalDate
    currency
    creatorID
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueID
    mosque {
      id
      name
      description
      images
      address
      latitude
      longitude
      hours {
        __typename
      }
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      organizationID
      organization {
        id
        name
        description
        domain
        logo
        phone
        email
        website
        isVerified
        creatorID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      prayerTimes {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    donations {
      items {
        id
        amount
        currency
        isAnonymous
        donorID
        fundraisingCampaignID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFundraisingCampaignMutationVariables,
  APITypes.UpdateFundraisingCampaignMutation
>;
export const deleteFundraisingCampaign = /* GraphQL */ `mutation DeleteFundraisingCampaign(
  $input: DeleteFundraisingCampaignInput!
  $condition: ModelFundraisingCampaignConditionInput
) {
  deleteFundraisingCampaign(input: $input, condition: $condition) {
    id
    title
    description
    featureImage
    type
    currentAmount
    goal
    goalDate
    currency
    creatorID
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueID
    mosque {
      id
      name
      description
      images
      address
      latitude
      longitude
      hours {
        __typename
      }
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      organizationID
      organization {
        id
        name
        description
        domain
        logo
        phone
        email
        website
        isVerified
        creatorID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      prayerTimes {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    donations {
      items {
        id
        amount
        currency
        isAnonymous
        donorID
        fundraisingCampaignID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFundraisingCampaignMutationVariables,
  APITypes.DeleteFundraisingCampaignMutation
>;
export const createPrayerTime = /* GraphQL */ `mutation CreatePrayerTime(
  $input: CreatePrayerTimeInput!
  $condition: ModelPrayerTimeConditionInput
) {
  createPrayerTime(input: $input, condition: $condition) {
    id
    fajr {
      athan
      iqamah
      __typename
    }
    dhuhr {
      athan
      iqamah
      __typename
    }
    asr {
      athan
      iqamah
      __typename
    }
    maghrib {
      athan
      iqamah
      __typename
    }
    isha {
      athan
      iqamah
      __typename
    }
    jummah {
      athan
      iqamah
      __typename
    }
    taraweeh {
      start
      end
      __typename
    }
    eid {
      athan
      iqamah
      __typename
    }
    startDate
    timeZone
    createdByUserID
    createdByUser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    updatedByUserID
    updatedByUser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueID
    mosque {
      id
      name
      description
      images
      address
      latitude
      longitude
      hours {
        __typename
      }
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      organizationID
      organization {
        id
        name
        description
        domain
        logo
        phone
        email
        website
        isVerified
        creatorID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      prayerTimes {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePrayerTimeMutationVariables,
  APITypes.CreatePrayerTimeMutation
>;
export const updatePrayerTime = /* GraphQL */ `mutation UpdatePrayerTime(
  $input: UpdatePrayerTimeInput!
  $condition: ModelPrayerTimeConditionInput
) {
  updatePrayerTime(input: $input, condition: $condition) {
    id
    fajr {
      athan
      iqamah
      __typename
    }
    dhuhr {
      athan
      iqamah
      __typename
    }
    asr {
      athan
      iqamah
      __typename
    }
    maghrib {
      athan
      iqamah
      __typename
    }
    isha {
      athan
      iqamah
      __typename
    }
    jummah {
      athan
      iqamah
      __typename
    }
    taraweeh {
      start
      end
      __typename
    }
    eid {
      athan
      iqamah
      __typename
    }
    startDate
    timeZone
    createdByUserID
    createdByUser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    updatedByUserID
    updatedByUser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueID
    mosque {
      id
      name
      description
      images
      address
      latitude
      longitude
      hours {
        __typename
      }
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      organizationID
      organization {
        id
        name
        description
        domain
        logo
        phone
        email
        website
        isVerified
        creatorID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      prayerTimes {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePrayerTimeMutationVariables,
  APITypes.UpdatePrayerTimeMutation
>;
export const deletePrayerTime = /* GraphQL */ `mutation DeletePrayerTime(
  $input: DeletePrayerTimeInput!
  $condition: ModelPrayerTimeConditionInput
) {
  deletePrayerTime(input: $input, condition: $condition) {
    id
    fajr {
      athan
      iqamah
      __typename
    }
    dhuhr {
      athan
      iqamah
      __typename
    }
    asr {
      athan
      iqamah
      __typename
    }
    maghrib {
      athan
      iqamah
      __typename
    }
    isha {
      athan
      iqamah
      __typename
    }
    jummah {
      athan
      iqamah
      __typename
    }
    taraweeh {
      start
      end
      __typename
    }
    eid {
      athan
      iqamah
      __typename
    }
    startDate
    timeZone
    createdByUserID
    createdByUser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    updatedByUserID
    updatedByUser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    mosqueID
    mosque {
      id
      name
      description
      images
      address
      latitude
      longitude
      hours {
        __typename
      }
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      organizationID
      organization {
        id
        name
        description
        domain
        logo
        phone
        email
        website
        isVerified
        creatorID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      prayerTimes {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePrayerTimeMutationVariables,
  APITypes.DeletePrayerTimeMutation
>;
export const createMosque = /* GraphQL */ `mutation CreateMosque(
  $input: CreateMosqueInput!
  $condition: ModelMosqueConditionInput
) {
  createMosque(input: $input, condition: $condition) {
    id
    name
    description
    images
    address
    latitude
    longitude
    hours {
      monday {
        type
        __typename
      }
      tuesday {
        type
        __typename
      }
      wednesday {
        type
        __typename
      }
      thursday {
        type
        __typename
      }
      friday {
        type
        __typename
      }
      saturday {
        type
        __typename
      }
      sunday {
        type
        __typename
      }
      __typename
    }
    phone
    email
    website
    socialMedia {
      facebook
      instagram
      twitter
      youtube
      __typename
    }
    isVerified
    creatorID
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    organizationID
    organization {
      id
      name
      description
      domain
      logo
      phone
      email
      website
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      members {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    followers {
      items {
        id
        mosqueId
        userId
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    announcements {
      items {
        id
        type
        content
        images
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    fundraisingCampaigns {
      items {
        id
        title
        description
        featureImage
        type
        currentAmount
        goal
        goalDate
        currency
        creatorID
        mosqueID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    prayerTimes {
      items {
        id
        startDate
        timeZone
        createdByUserID
        updatedByUserID
        mosqueID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementID
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementID
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentID
        announcementID
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMosqueMutationVariables,
  APITypes.CreateMosqueMutation
>;
export const updateMosque = /* GraphQL */ `mutation UpdateMosque(
  $input: UpdateMosqueInput!
  $condition: ModelMosqueConditionInput
) {
  updateMosque(input: $input, condition: $condition) {
    id
    name
    description
    images
    address
    latitude
    longitude
    hours {
      monday {
        type
        __typename
      }
      tuesday {
        type
        __typename
      }
      wednesday {
        type
        __typename
      }
      thursday {
        type
        __typename
      }
      friday {
        type
        __typename
      }
      saturday {
        type
        __typename
      }
      sunday {
        type
        __typename
      }
      __typename
    }
    phone
    email
    website
    socialMedia {
      facebook
      instagram
      twitter
      youtube
      __typename
    }
    isVerified
    creatorID
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    organizationID
    organization {
      id
      name
      description
      domain
      logo
      phone
      email
      website
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      members {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    followers {
      items {
        id
        mosqueId
        userId
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    announcements {
      items {
        id
        type
        content
        images
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    fundraisingCampaigns {
      items {
        id
        title
        description
        featureImage
        type
        currentAmount
        goal
        goalDate
        currency
        creatorID
        mosqueID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    prayerTimes {
      items {
        id
        startDate
        timeZone
        createdByUserID
        updatedByUserID
        mosqueID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementID
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementID
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentID
        announcementID
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMosqueMutationVariables,
  APITypes.UpdateMosqueMutation
>;
export const deleteMosque = /* GraphQL */ `mutation DeleteMosque(
  $input: DeleteMosqueInput!
  $condition: ModelMosqueConditionInput
) {
  deleteMosque(input: $input, condition: $condition) {
    id
    name
    description
    images
    address
    latitude
    longitude
    hours {
      monday {
        type
        __typename
      }
      tuesday {
        type
        __typename
      }
      wednesday {
        type
        __typename
      }
      thursday {
        type
        __typename
      }
      friday {
        type
        __typename
      }
      saturday {
        type
        __typename
      }
      sunday {
        type
        __typename
      }
      __typename
    }
    phone
    email
    website
    socialMedia {
      facebook
      instagram
      twitter
      youtube
      __typename
    }
    isVerified
    creatorID
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    organizationID
    organization {
      id
      name
      description
      domain
      logo
      phone
      email
      website
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      members {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    followers {
      items {
        id
        mosqueId
        userId
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    announcements {
      items {
        id
        type
        content
        images
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    fundraisingCampaigns {
      items {
        id
        title
        description
        featureImage
        type
        currentAmount
        goal
        goalDate
        currency
        creatorID
        mosqueID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    prayerTimes {
      items {
        id
        startDate
        timeZone
        createdByUserID
        updatedByUserID
        mosqueID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementID
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementID
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentID
        announcementID
        creatorID
        mosqueID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMosqueMutationVariables,
  APITypes.DeleteMosqueMutation
>;
export const createOrganization = /* GraphQL */ `mutation CreateOrganization(
  $input: CreateOrganizationInput!
  $condition: ModelOrganizationConditionInput
) {
  createOrganization(input: $input, condition: $condition) {
    id
    name
    description
    domain
    logo
    phone
    email
    website
    isVerified
    creatorID
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    members {
      items {
        id
        role
        organizationID
        memberID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    mosques {
      items {
        id
        name
        description
        images
        address
        latitude
        longitude
        phone
        email
        website
        isVerified
        creatorID
        organizationID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrganizationMutationVariables,
  APITypes.CreateOrganizationMutation
>;
export const updateOrganization = /* GraphQL */ `mutation UpdateOrganization(
  $input: UpdateOrganizationInput!
  $condition: ModelOrganizationConditionInput
) {
  updateOrganization(input: $input, condition: $condition) {
    id
    name
    description
    domain
    logo
    phone
    email
    website
    isVerified
    creatorID
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    members {
      items {
        id
        role
        organizationID
        memberID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    mosques {
      items {
        id
        name
        description
        images
        address
        latitude
        longitude
        phone
        email
        website
        isVerified
        creatorID
        organizationID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrganizationMutationVariables,
  APITypes.UpdateOrganizationMutation
>;
export const deleteOrganization = /* GraphQL */ `mutation DeleteOrganization(
  $input: DeleteOrganizationInput!
  $condition: ModelOrganizationConditionInput
) {
  deleteOrganization(input: $input, condition: $condition) {
    id
    name
    description
    domain
    logo
    phone
    email
    website
    isVerified
    creatorID
    creator {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    members {
      items {
        id
        role
        organizationID
        memberID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    mosques {
      items {
        id
        name
        description
        images
        address
        latitude
        longitude
        phone
        email
        website
        isVerified
        creatorID
        organizationID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrganizationMutationVariables,
  APITypes.DeleteOrganizationMutation
>;
export const createMosqueFollower = /* GraphQL */ `mutation CreateMosqueFollower(
  $input: CreateMosqueFollowerInput!
  $condition: ModelMosqueFollowerConditionInput
) {
  createMosqueFollower(input: $input, condition: $condition) {
    id
    mosqueId
    userId
    mosque {
      id
      name
      description
      images
      address
      latitude
      longitude
      hours {
        __typename
      }
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      organizationID
      organization {
        id
        name
        description
        domain
        logo
        phone
        email
        website
        isVerified
        creatorID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      prayerTimes {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    user {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMosqueFollowerMutationVariables,
  APITypes.CreateMosqueFollowerMutation
>;
export const updateMosqueFollower = /* GraphQL */ `mutation UpdateMosqueFollower(
  $input: UpdateMosqueFollowerInput!
  $condition: ModelMosqueFollowerConditionInput
) {
  updateMosqueFollower(input: $input, condition: $condition) {
    id
    mosqueId
    userId
    mosque {
      id
      name
      description
      images
      address
      latitude
      longitude
      hours {
        __typename
      }
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      organizationID
      organization {
        id
        name
        description
        domain
        logo
        phone
        email
        website
        isVerified
        creatorID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      prayerTimes {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    user {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMosqueFollowerMutationVariables,
  APITypes.UpdateMosqueFollowerMutation
>;
export const deleteMosqueFollower = /* GraphQL */ `mutation DeleteMosqueFollower(
  $input: DeleteMosqueFollowerInput!
  $condition: ModelMosqueFollowerConditionInput
) {
  deleteMosqueFollower(input: $input, condition: $condition) {
    id
    mosqueId
    userId
    mosque {
      id
      name
      description
      images
      address
      latitude
      longitude
      hours {
        __typename
      }
      phone
      email
      website
      socialMedia {
        facebook
        instagram
        twitter
        youtube
        __typename
      }
      isVerified
      creatorID
      creator {
        id
        selfie
        firstName
        lastName
        email
        phone
        type
        status
        stripeCustomerId
        isOnline
        createdAt
        updatedAt
        owner
        __typename
      }
      organizationID
      organization {
        id
        name
        description
        domain
        logo
        phone
        email
        website
        isVerified
        creatorID
        createdAt
        updatedAt
        owners
        owner
        __typename
      }
      followers {
        nextToken
        __typename
      }
      announcements {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      prayerTimes {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owners
      owner
      __typename
    }
    user {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      isOnline
      bookmarks {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAnnouncements {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdPrayerTimes {
        nextToken
        __typename
      }
      createdOrganizations {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedPrayerTimes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owners
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMosqueFollowerMutationVariables,
  APITypes.DeleteMosqueFollowerMutation
>;
