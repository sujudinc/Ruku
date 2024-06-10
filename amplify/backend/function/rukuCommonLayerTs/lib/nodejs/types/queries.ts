/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAnnouncement = /* GraphQL */ `query GetAnnouncement($id: ID!) {
  getAnnouncement(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAnnouncementQueryVariables,
  APITypes.GetAnnouncementQuery
>;
export const listAnnouncements = /* GraphQL */ `query ListAnnouncements(
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAnnouncementsQueryVariables,
  APITypes.ListAnnouncementsQuery
>;
export const announcementsByCreatorID = /* GraphQL */ `query AnnouncementsByCreatorID(
  $creatorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  announcementsByCreatorID(
    creatorID: $creatorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AnnouncementsByCreatorIDQueryVariables,
  APITypes.AnnouncementsByCreatorIDQuery
>;
export const announcementsByMosqueID = /* GraphQL */ `query AnnouncementsByMosqueID(
  $mosqueID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  announcementsByMosqueID(
    mosqueID: $mosqueID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AnnouncementsByMosqueIDQueryVariables,
  APITypes.AnnouncementsByMosqueIDQuery
>;
export const bookmarksByAnnouncementID = /* GraphQL */ `query BookmarksByAnnouncementID(
  $announcementID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  bookmarksByAnnouncementID(
    announcementID: $announcementID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BookmarksByAnnouncementIDQueryVariables,
  APITypes.BookmarksByAnnouncementIDQuery
>;
export const bookmarksByCreatorID = /* GraphQL */ `query BookmarksByCreatorID(
  $creatorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  bookmarksByCreatorID(
    creatorID: $creatorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BookmarksByCreatorIDQueryVariables,
  APITypes.BookmarksByCreatorIDQuery
>;
export const bookmarksByMosqueID = /* GraphQL */ `query BookmarksByMosqueID(
  $mosqueID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  bookmarksByMosqueID(
    mosqueID: $mosqueID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BookmarksByMosqueIDQueryVariables,
  APITypes.BookmarksByMosqueIDQuery
>;
export const commentsByParentCommentID = /* GraphQL */ `query CommentsByParentCommentID(
  $parentCommentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByParentCommentID(
    parentCommentID: $parentCommentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByParentCommentIDQueryVariables,
  APITypes.CommentsByParentCommentIDQuery
>;
export const commentsByAnnouncementID = /* GraphQL */ `query CommentsByAnnouncementID(
  $announcementID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByAnnouncementID(
    announcementID: $announcementID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByAnnouncementIDQueryVariables,
  APITypes.CommentsByAnnouncementIDQuery
>;
export const commentsByCreatorID = /* GraphQL */ `query CommentsByCreatorID(
  $creatorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByCreatorID(
    creatorID: $creatorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByCreatorIDQueryVariables,
  APITypes.CommentsByCreatorIDQuery
>;
export const commentsByMosqueID = /* GraphQL */ `query CommentsByMosqueID(
  $mosqueID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByMosqueID(
    mosqueID: $mosqueID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByMosqueIDQueryVariables,
  APITypes.CommentsByMosqueIDQuery
>;
export const donationsByDonorID = /* GraphQL */ `query DonationsByDonorID(
  $donorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDonationFilterInput
  $limit: Int
  $nextToken: String
) {
  donationsByDonorID(
    donorID: $donorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        mosqueID
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DonationsByDonorIDQueryVariables,
  APITypes.DonationsByDonorIDQuery
>;
export const donationsByFundraisingCampaignID = /* GraphQL */ `query DonationsByFundraisingCampaignID(
  $fundraisingCampaignID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDonationFilterInput
  $limit: Int
  $nextToken: String
) {
  donationsByFundraisingCampaignID(
    fundraisingCampaignID: $fundraisingCampaignID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        mosqueID
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DonationsByFundraisingCampaignIDQueryVariables,
  APITypes.DonationsByFundraisingCampaignIDQuery
>;
export const getFundraisingCampaign = /* GraphQL */ `query GetFundraisingCampaign($id: ID!) {
  getFundraisingCampaign(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFundraisingCampaignQueryVariables,
  APITypes.GetFundraisingCampaignQuery
>;
export const listFundraisingCampaigns = /* GraphQL */ `query ListFundraisingCampaigns(
  $filter: ModelFundraisingCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listFundraisingCampaigns(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFundraisingCampaignsQueryVariables,
  APITypes.ListFundraisingCampaignsQuery
>;
export const fundraisingCampaignsByCreatorID = /* GraphQL */ `query FundraisingCampaignsByCreatorID(
  $creatorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFundraisingCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  fundraisingCampaignsByCreatorID(
    creatorID: $creatorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FundraisingCampaignsByCreatorIDQueryVariables,
  APITypes.FundraisingCampaignsByCreatorIDQuery
>;
export const fundraisingCampaignsByMosqueID = /* GraphQL */ `query FundraisingCampaignsByMosqueID(
  $mosqueID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFundraisingCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  fundraisingCampaignsByMosqueID(
    mosqueID: $mosqueID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FundraisingCampaignsByMosqueIDQueryVariables,
  APITypes.FundraisingCampaignsByMosqueIDQuery
>;
export const likesByAnnouncementID = /* GraphQL */ `query LikesByAnnouncementID(
  $announcementID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByAnnouncementID(
    announcementID: $announcementID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByAnnouncementIDQueryVariables,
  APITypes.LikesByAnnouncementIDQuery
>;
export const likesByCreatorID = /* GraphQL */ `query LikesByCreatorID(
  $creatorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByCreatorID(
    creatorID: $creatorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByCreatorIDQueryVariables,
  APITypes.LikesByCreatorIDQuery
>;
export const likesByMosqueID = /* GraphQL */ `query LikesByMosqueID(
  $mosqueID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByMosqueID(
    mosqueID: $mosqueID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByMosqueIDQueryVariables,
  APITypes.LikesByMosqueIDQuery
>;
export const getMosque = /* GraphQL */ `query GetMosque($id: ID!) {
  getMosque(id: $id) {
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
` as GeneratedQuery<APITypes.GetMosqueQueryVariables, APITypes.GetMosqueQuery>;
export const listMosques = /* GraphQL */ `query ListMosques(
  $filter: ModelMosqueFilterInput
  $limit: Int
  $nextToken: String
) {
  listMosques(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMosquesQueryVariables,
  APITypes.ListMosquesQuery
>;
export const mosquesByCreatorID = /* GraphQL */ `query MosquesByCreatorID(
  $creatorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMosqueFilterInput
  $limit: Int
  $nextToken: String
) {
  mosquesByCreatorID(
    creatorID: $creatorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MosquesByCreatorIDQueryVariables,
  APITypes.MosquesByCreatorIDQuery
>;
export const mosquesByOrganizationID = /* GraphQL */ `query MosquesByOrganizationID(
  $organizationID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMosqueFilterInput
  $limit: Int
  $nextToken: String
) {
  mosquesByOrganizationID(
    organizationID: $organizationID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MosquesByOrganizationIDQueryVariables,
  APITypes.MosquesByOrganizationIDQuery
>;
export const getOrganization = /* GraphQL */ `query GetOrganization($id: ID!) {
  getOrganization(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOrganizationQueryVariables,
  APITypes.GetOrganizationQuery
>;
export const listOrganizations = /* GraphQL */ `query ListOrganizations(
  $filter: ModelOrganizationFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrganizationsQueryVariables,
  APITypes.ListOrganizationsQuery
>;
export const organizationsByCreatorID = /* GraphQL */ `query OrganizationsByCreatorID(
  $creatorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrganizationFilterInput
  $limit: Int
  $nextToken: String
) {
  organizationsByCreatorID(
    creatorID: $creatorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrganizationsByCreatorIDQueryVariables,
  APITypes.OrganizationsByCreatorIDQuery
>;
export const organizationMembersByOrganizationID = /* GraphQL */ `query OrganizationMembersByOrganizationID(
  $organizationID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrganizationMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  organizationMembersByOrganizationID(
    organizationID: $organizationID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrganizationMembersByOrganizationIDQueryVariables,
  APITypes.OrganizationMembersByOrganizationIDQuery
>;
export const organizationMembersByMemberID = /* GraphQL */ `query OrganizationMembersByMemberID(
  $memberID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrganizationMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  organizationMembersByMemberID(
    memberID: $memberID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrganizationMembersByMemberIDQueryVariables,
  APITypes.OrganizationMembersByMemberIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getMosqueFollower = /* GraphQL */ `query GetMosqueFollower($id: ID!) {
  getMosqueFollower(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMosqueFollowerQueryVariables,
  APITypes.GetMosqueFollowerQuery
>;
export const listMosqueFollowers = /* GraphQL */ `query ListMosqueFollowers(
  $filter: ModelMosqueFollowerFilterInput
  $limit: Int
  $nextToken: String
) {
  listMosqueFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMosqueFollowersQueryVariables,
  APITypes.ListMosqueFollowersQuery
>;
export const mosqueFollowersByMosqueId = /* GraphQL */ `query MosqueFollowersByMosqueId(
  $mosqueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMosqueFollowerFilterInput
  $limit: Int
  $nextToken: String
) {
  mosqueFollowersByMosqueId(
    mosqueId: $mosqueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MosqueFollowersByMosqueIdQueryVariables,
  APITypes.MosqueFollowersByMosqueIdQuery
>;
export const mosqueFollowersByUserId = /* GraphQL */ `query MosqueFollowersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMosqueFollowerFilterInput
  $limit: Int
  $nextToken: String
) {
  mosqueFollowersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MosqueFollowersByUserIdQueryVariables,
  APITypes.MosqueFollowersByUserIdQuery
>;
