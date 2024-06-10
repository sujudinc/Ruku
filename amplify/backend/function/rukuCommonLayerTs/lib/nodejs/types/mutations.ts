/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAnnouncement = /* GraphQL */ `mutation CreateAnnouncement(
  $input: CreateAnnouncementInput!
  $condition: ModelAnnouncementConditionInput
) {
  createAnnouncement(input: $input, condition: $condition) {
    id
    type
    content
    images
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
      prayerTimes {
        timeZone
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAnnouncementMutationVariables,
  APITypes.CreateAnnouncementMutation
>;
export const deleteAnnouncement = /* GraphQL */ `mutation DeleteAnnouncement(
  $input: DeleteAnnouncementInput!
  $condition: ModelAnnouncementConditionInput
) {
  deleteAnnouncement(input: $input, condition: $condition) {
    id
    type
    content
    images
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
      prayerTimes {
        timeZone
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAnnouncementMutationVariables,
  APITypes.DeleteAnnouncementMutation
>;
export const createBookmark = /* GraphQL */ `mutation CreateBookmark(
  $input: CreateBookmarkInput!
  $condition: ModelBookmarkConditionInput
) {
  createBookmark(input: $input, condition: $condition) {
    id
    announcementID
    announcement {
      id
      type
      content
      images
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
      mosqueID
      mosque {
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
      createdAt
      updatedAt
      owner
      __typename
    }
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
      prayerTimes {
        timeZone
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBookmarkMutationVariables,
  APITypes.CreateBookmarkMutation
>;
export const deleteBookmark = /* GraphQL */ `mutation DeleteBookmark(
  $input: DeleteBookmarkInput!
  $condition: ModelBookmarkConditionInput
) {
  deleteBookmark(input: $input, condition: $condition) {
    id
    announcementID
    announcement {
      id
      type
      content
      images
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
      mosqueID
      mosque {
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
      createdAt
      updatedAt
      owner
      __typename
    }
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
      prayerTimes {
        timeZone
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBookmarkMutationVariables,
  APITypes.DeleteBookmarkMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    text
    parentCommentID
    parentComment {
      id
      text
      parentCommentID
      parentComment {
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
      subComments {
        nextToken
        __typename
      }
      announcementID
      announcement {
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
      mosqueID
      mosque {
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
      createdAt
      updatedAt
      owner
      __typename
    }
    subComments {
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
    announcementID
    announcement {
      id
      type
      content
      images
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
      mosqueID
      mosque {
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
      createdAt
      updatedAt
      owner
      __typename
    }
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
      prayerTimes {
        timeZone
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    text
    parentCommentID
    parentComment {
      id
      text
      parentCommentID
      parentComment {
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
      subComments {
        nextToken
        __typename
      }
      announcementID
      announcement {
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
      mosqueID
      mosque {
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
      createdAt
      updatedAt
      owner
      __typename
    }
    subComments {
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
    announcementID
    announcement {
      id
      type
      content
      images
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
      mosqueID
      mosque {
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
      createdAt
      updatedAt
      owner
      __typename
    }
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
      prayerTimes {
        timeZone
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createDonation = /* GraphQL */ `mutation CreateDonation(
  $input: CreateDonationInput!
  $condition: ModelDonationConditionInput
) {
  createDonation(input: $input, condition: $condition) {
    id
    amount
    currency
    isAnonymous
    donorID
    donor {
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
      createdAt
      updatedAt
      owner
      __typename
    }
    fundraisingCampaignID
    fundraisingCampaign {
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
      donations {
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDonationMutationVariables,
  APITypes.CreateDonationMutation
>;
export const deleteDonation = /* GraphQL */ `mutation DeleteDonation(
  $input: DeleteDonationInput!
  $condition: ModelDonationConditionInput
) {
  deleteDonation(input: $input, condition: $condition) {
    id
    amount
    currency
    isAnonymous
    donorID
    donor {
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
      createdAt
      updatedAt
      owner
      __typename
    }
    fundraisingCampaignID
    fundraisingCampaign {
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
      donations {
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDonationMutationVariables,
  APITypes.DeleteDonationMutation
>;
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
      prayerTimes {
        timeZone
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
      prayerTimes {
        timeZone
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
      prayerTimes {
        timeZone
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
export const createLike = /* GraphQL */ `mutation CreateLike(
  $input: CreateLikeInput!
  $condition: ModelLikeConditionInput
) {
  createLike(input: $input, condition: $condition) {
    id
    announcementID
    announcement {
      id
      type
      content
      images
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
      mosqueID
      mosque {
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
      createdAt
      updatedAt
      owner
      __typename
    }
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
      prayerTimes {
        timeZone
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLikeMutationVariables,
  APITypes.CreateLikeMutation
>;
export const deleteLike = /* GraphQL */ `mutation DeleteLike(
  $input: DeleteLikeInput!
  $condition: ModelLikeConditionInput
) {
  deleteLike(input: $input, condition: $condition) {
    id
    announcementID
    announcement {
      id
      type
      content
      images
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
      mosqueID
      mosque {
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
      createdAt
      updatedAt
      owner
      __typename
    }
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
      prayerTimes {
        timeZone
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
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLikeMutationVariables,
  APITypes.DeleteLikeMutation
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
    prayerTimes {
      timeZone
      fajr {
        athan
        iqamahAfter
        __typename
      }
      thuhr {
        athan
        iqamahAfter
        __typename
      }
      asr {
        athan
        iqamahAfter
        __typename
      }
      maghrib {
        athan
        iqamahAfter
        __typename
      }
      isha {
        athan
        iqamahAfter
        __typename
      }
      jummah {
        athan
        iqamahAfter
        __typename
      }
      tahajjud {
        start
        end
        __typename
      }
      taraweeh {
        start
        end
        __typename
      }
      eidAlAdha {
        start
        end
        __typename
      }
      eidAlFitr {
        start
        end
        __typename
      }
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
    prayerTimes {
      timeZone
      fajr {
        athan
        iqamahAfter
        __typename
      }
      thuhr {
        athan
        iqamahAfter
        __typename
      }
      asr {
        athan
        iqamahAfter
        __typename
      }
      maghrib {
        athan
        iqamahAfter
        __typename
      }
      isha {
        athan
        iqamahAfter
        __typename
      }
      jummah {
        athan
        iqamahAfter
        __typename
      }
      tahajjud {
        start
        end
        __typename
      }
      taraweeh {
        start
        end
        __typename
      }
      eidAlAdha {
        start
        end
        __typename
      }
      eidAlFitr {
        start
        end
        __typename
      }
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
    prayerTimes {
      timeZone
      fajr {
        athan
        iqamahAfter
        __typename
      }
      thuhr {
        athan
        iqamahAfter
        __typename
      }
      asr {
        athan
        iqamahAfter
        __typename
      }
      maghrib {
        athan
        iqamahAfter
        __typename
      }
      isha {
        athan
        iqamahAfter
        __typename
      }
      jummah {
        athan
        iqamahAfter
        __typename
      }
      tahajjud {
        start
        end
        __typename
      }
      taraweeh {
        start
        end
        __typename
      }
      eidAlAdha {
        start
        end
        __typename
      }
      eidAlFitr {
        start
        end
        __typename
      }
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
export const createOrganizationMember = /* GraphQL */ `mutation CreateOrganizationMember(
  $input: CreateOrganizationMemberInput!
  $condition: ModelOrganizationMemberConditionInput
) {
  createOrganizationMember(input: $input, condition: $condition) {
    id
    role
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
    memberID
    member {
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
  APITypes.CreateOrganizationMemberMutationVariables,
  APITypes.CreateOrganizationMemberMutation
>;
export const deleteOrganizationMember = /* GraphQL */ `mutation DeleteOrganizationMember(
  $input: DeleteOrganizationMemberInput!
  $condition: ModelOrganizationMemberConditionInput
) {
  deleteOrganizationMember(input: $input, condition: $condition) {
    id
    role
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
    memberID
    member {
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
  APITypes.DeleteOrganizationMemberMutationVariables,
  APITypes.DeleteOrganizationMemberMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
    createdAnnouncements {
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
    createdFundraisingCampaigns {
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
    createdOrganizations {
      items {
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
      nextToken
      __typename
    }
    createdMosques {
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
    mosques {
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
    organizations {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
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
      prayerTimes {
        timeZone
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
      prayerTimes {
        timeZone
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
      prayerTimes {
        timeZone
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
