/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAnnouncement = /* GraphQL */ `subscription OnCreateAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
  $creatorId: String
) {
  onCreateAnnouncement(filter: $filter, creatorId: $creatorId) {
    id
    title
    body
    images
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAnnouncementSubscriptionVariables,
  APITypes.OnCreateAnnouncementSubscription
>;
export const onUpdateAnnouncement = /* GraphQL */ `subscription OnUpdateAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
  $creatorId: String
) {
  onUpdateAnnouncement(filter: $filter, creatorId: $creatorId) {
    id
    title
    body
    images
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAnnouncementSubscriptionVariables,
  APITypes.OnUpdateAnnouncementSubscription
>;
export const onDeleteAnnouncement = /* GraphQL */ `subscription OnDeleteAnnouncement(
  $filter: ModelSubscriptionAnnouncementFilterInput
  $creatorId: String
) {
  onDeleteAnnouncement(filter: $filter, creatorId: $creatorId) {
    id
    title
    body
    images
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAnnouncementSubscriptionVariables,
  APITypes.OnDeleteAnnouncementSubscription
>;
export const onCreateBookmark = /* GraphQL */ `subscription OnCreateBookmark(
  $filter: ModelSubscriptionBookmarkFilterInput
  $creatorId: String
) {
  onCreateBookmark(filter: $filter, creatorId: $creatorId) {
    id
    announcementId
    announcement {
      id
      title
      body
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBookmarkSubscriptionVariables,
  APITypes.OnCreateBookmarkSubscription
>;
export const onUpdateBookmark = /* GraphQL */ `subscription OnUpdateBookmark(
  $filter: ModelSubscriptionBookmarkFilterInput
  $creatorId: String
) {
  onUpdateBookmark(filter: $filter, creatorId: $creatorId) {
    id
    announcementId
    announcement {
      id
      title
      body
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBookmarkSubscriptionVariables,
  APITypes.OnUpdateBookmarkSubscription
>;
export const onDeleteBookmark = /* GraphQL */ `subscription OnDeleteBookmark(
  $filter: ModelSubscriptionBookmarkFilterInput
  $creatorId: String
) {
  onDeleteBookmark(filter: $filter, creatorId: $creatorId) {
    id
    announcementId
    announcement {
      id
      title
      body
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBookmarkSubscriptionVariables,
  APITypes.OnDeleteBookmarkSubscription
>;
export const onCreateClass = /* GraphQL */ `subscription OnCreateClass(
  $filter: ModelSubscriptionClassFilterInput
  $creatorId: String
) {
  onCreateClass(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    startDateTime
    endDateTime
    recurring
    daysOfWeek
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    instructorId
    instructor {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClassSubscriptionVariables,
  APITypes.OnCreateClassSubscription
>;
export const onUpdateClass = /* GraphQL */ `subscription OnUpdateClass(
  $filter: ModelSubscriptionClassFilterInput
  $creatorId: String
) {
  onUpdateClass(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    startDateTime
    endDateTime
    recurring
    daysOfWeek
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    instructorId
    instructor {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClassSubscriptionVariables,
  APITypes.OnUpdateClassSubscription
>;
export const onDeleteClass = /* GraphQL */ `subscription OnDeleteClass(
  $filter: ModelSubscriptionClassFilterInput
  $creatorId: String
) {
  onDeleteClass(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    startDateTime
    endDateTime
    recurring
    daysOfWeek
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    instructorId
    instructor {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClassSubscriptionVariables,
  APITypes.OnDeleteClassSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $creatorId: String
) {
  onCreateComment(filter: $filter, creatorId: $creatorId) {
    id
    text
    parentCommentId
    parentComment {
      id
      text
      parentCommentId
      parentComment {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      subComments {
        nextToken
        __typename
      }
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    subComments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    announcementId
    announcement {
      id
      title
      body
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $creatorId: String
) {
  onUpdateComment(filter: $filter, creatorId: $creatorId) {
    id
    text
    parentCommentId
    parentComment {
      id
      text
      parentCommentId
      parentComment {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      subComments {
        nextToken
        __typename
      }
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    subComments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    announcementId
    announcement {
      id
      title
      body
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $creatorId: String
) {
  onDeleteComment(filter: $filter, creatorId: $creatorId) {
    id
    text
    parentCommentId
    parentComment {
      id
      text
      parentCommentId
      parentComment {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      subComments {
        nextToken
        __typename
      }
      announcementId
      announcement {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    subComments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    announcementId
    announcement {
      id
      title
      body
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateCommittee = /* GraphQL */ `subscription OnCreateCommittee(
  $filter: ModelSubscriptionCommitteeFilterInput
  $creatorId: String
) {
  onCreateCommittee(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    members {
      items {
        id
        committeeId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommitteeSubscriptionVariables,
  APITypes.OnCreateCommitteeSubscription
>;
export const onUpdateCommittee = /* GraphQL */ `subscription OnUpdateCommittee(
  $filter: ModelSubscriptionCommitteeFilterInput
  $creatorId: String
) {
  onUpdateCommittee(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    members {
      items {
        id
        committeeId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommitteeSubscriptionVariables,
  APITypes.OnUpdateCommitteeSubscription
>;
export const onDeleteCommittee = /* GraphQL */ `subscription OnDeleteCommittee(
  $filter: ModelSubscriptionCommitteeFilterInput
  $creatorId: String
) {
  onDeleteCommittee(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    members {
      items {
        id
        committeeId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommitteeSubscriptionVariables,
  APITypes.OnDeleteCommitteeSubscription
>;
export const onCreateGathering = /* GraphQL */ `subscription OnCreateGathering(
  $filter: ModelSubscriptionGatheringFilterInput
  $creatorId: String
) {
  onCreateGathering(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    type
    startDate
    endDate
    address {
      addressLine1
      addressLine2
      addressLine3
      city
      province
      postalCode
      country
      latitude
      longitude
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    attendees {
      items {
        id
        gatheringId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGatheringSubscriptionVariables,
  APITypes.OnCreateGatheringSubscription
>;
export const onUpdateGathering = /* GraphQL */ `subscription OnUpdateGathering(
  $filter: ModelSubscriptionGatheringFilterInput
  $creatorId: String
) {
  onUpdateGathering(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    type
    startDate
    endDate
    address {
      addressLine1
      addressLine2
      addressLine3
      city
      province
      postalCode
      country
      latitude
      longitude
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    attendees {
      items {
        id
        gatheringId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGatheringSubscriptionVariables,
  APITypes.OnUpdateGatheringSubscription
>;
export const onDeleteGathering = /* GraphQL */ `subscription OnDeleteGathering(
  $filter: ModelSubscriptionGatheringFilterInput
  $creatorId: String
) {
  onDeleteGathering(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    type
    startDate
    endDate
    address {
      addressLine1
      addressLine2
      addressLine3
      city
      province
      postalCode
      country
      latitude
      longitude
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    attendees {
      items {
        id
        gatheringId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGatheringSubscriptionVariables,
  APITypes.OnDeleteGatheringSubscription
>;
export const onCreateDonation = /* GraphQL */ `subscription OnCreateDonation(
  $filter: ModelSubscriptionDonationFilterInput
  $donorId: String
) {
  onCreateDonation(filter: $filter, donorId: $donorId) {
    id
    amount
    currency
    isAnonymous
    donorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    fundraisingCampaignId
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      donations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDonationSubscriptionVariables,
  APITypes.OnCreateDonationSubscription
>;
export const onUpdateDonation = /* GraphQL */ `subscription OnUpdateDonation(
  $filter: ModelSubscriptionDonationFilterInput
  $donorId: String
) {
  onUpdateDonation(filter: $filter, donorId: $donorId) {
    id
    amount
    currency
    isAnonymous
    donorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    fundraisingCampaignId
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      donations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDonationSubscriptionVariables,
  APITypes.OnUpdateDonationSubscription
>;
export const onDeleteDonation = /* GraphQL */ `subscription OnDeleteDonation(
  $filter: ModelSubscriptionDonationFilterInput
  $donorId: String
) {
  onDeleteDonation(filter: $filter, donorId: $donorId) {
    id
    amount
    currency
    isAnonymous
    donorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    fundraisingCampaignId
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      donations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDonationSubscriptionVariables,
  APITypes.OnDeleteDonationSubscription
>;
export const onCreateFundraisingCampaign = /* GraphQL */ `subscription OnCreateFundraisingCampaign(
  $filter: ModelSubscriptionFundraisingCampaignFilterInput
  $creatorId: String
) {
  onCreateFundraisingCampaign(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    featureImage
    type
    currentAmount
    goal
    goalDate
    currency
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    donations {
      items {
        id
        amount
        currency
        isAnonymous
        donorId
        fundraisingCampaignId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFundraisingCampaignSubscriptionVariables,
  APITypes.OnCreateFundraisingCampaignSubscription
>;
export const onUpdateFundraisingCampaign = /* GraphQL */ `subscription OnUpdateFundraisingCampaign(
  $filter: ModelSubscriptionFundraisingCampaignFilterInput
  $creatorId: String
) {
  onUpdateFundraisingCampaign(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    featureImage
    type
    currentAmount
    goal
    goalDate
    currency
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    donations {
      items {
        id
        amount
        currency
        isAnonymous
        donorId
        fundraisingCampaignId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFundraisingCampaignSubscriptionVariables,
  APITypes.OnUpdateFundraisingCampaignSubscription
>;
export const onDeleteFundraisingCampaign = /* GraphQL */ `subscription OnDeleteFundraisingCampaign(
  $filter: ModelSubscriptionFundraisingCampaignFilterInput
  $creatorId: String
) {
  onDeleteFundraisingCampaign(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    featureImage
    type
    currentAmount
    goal
    goalDate
    currency
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    donations {
      items {
        id
        amount
        currency
        isAnonymous
        donorId
        fundraisingCampaignId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFundraisingCampaignSubscriptionVariables,
  APITypes.OnDeleteFundraisingCampaignSubscription
>;
export const onCreateLike = /* GraphQL */ `subscription OnCreateLike(
  $filter: ModelSubscriptionLikeFilterInput
  $creatorId: String
) {
  onCreateLike(filter: $filter, creatorId: $creatorId) {
    id
    announcementId
    announcement {
      id
      title
      body
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLikeSubscriptionVariables,
  APITypes.OnCreateLikeSubscription
>;
export const onUpdateLike = /* GraphQL */ `subscription OnUpdateLike(
  $filter: ModelSubscriptionLikeFilterInput
  $creatorId: String
) {
  onUpdateLike(filter: $filter, creatorId: $creatorId) {
    id
    announcementId
    announcement {
      id
      title
      body
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLikeSubscriptionVariables,
  APITypes.OnUpdateLikeSubscription
>;
export const onDeleteLike = /* GraphQL */ `subscription OnDeleteLike(
  $filter: ModelSubscriptionLikeFilterInput
  $creatorId: String
) {
  onDeleteLike(filter: $filter, creatorId: $creatorId) {
    id
    announcementId
    announcement {
      id
      title
      body
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
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLikeSubscriptionVariables,
  APITypes.OnDeleteLikeSubscription
>;
export const onCreateMonthlyPrayerSchedule = /* GraphQL */ `subscription OnCreateMonthlyPrayerSchedule(
  $filter: ModelSubscriptionMonthlyPrayerScheduleFilterInput
  $creatorId: String
) {
  onCreateMonthlyPrayerSchedule(filter: $filter, creatorId: $creatorId) {
    id
    year
    month
    prayerTimes {
      type
      athan
      iqamah
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMonthlyPrayerScheduleSubscriptionVariables,
  APITypes.OnCreateMonthlyPrayerScheduleSubscription
>;
export const onUpdateMonthlyPrayerSchedule = /* GraphQL */ `subscription OnUpdateMonthlyPrayerSchedule(
  $filter: ModelSubscriptionMonthlyPrayerScheduleFilterInput
  $creatorId: String
) {
  onUpdateMonthlyPrayerSchedule(filter: $filter, creatorId: $creatorId) {
    id
    year
    month
    prayerTimes {
      type
      athan
      iqamah
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMonthlyPrayerScheduleSubscriptionVariables,
  APITypes.OnUpdateMonthlyPrayerScheduleSubscription
>;
export const onDeleteMonthlyPrayerSchedule = /* GraphQL */ `subscription OnDeleteMonthlyPrayerSchedule(
  $filter: ModelSubscriptionMonthlyPrayerScheduleFilterInput
  $creatorId: String
) {
  onDeleteMonthlyPrayerSchedule(filter: $filter, creatorId: $creatorId) {
    id
    year
    month
    prayerTimes {
      type
      athan
      iqamah
      __typename
    }
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMonthlyPrayerScheduleSubscriptionVariables,
  APITypes.OnDeleteMonthlyPrayerScheduleSubscription
>;
export const onCreateMosque = /* GraphQL */ `subscription OnCreateMosque(
  $filter: ModelSubscriptionMosqueFilterInput
  $creatorId: String
) {
  onCreateMosque(filter: $filter, creatorId: $creatorId) {
    id
    name
    description
    images
    address {
      addressLine1
      addressLine2
      addressLine3
      city
      province
      postalCode
      country
      latitude
      longitude
      __typename
    }
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
    contactInfo {
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
      __typename
    }
    liveVideoUrl
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    announcements {
      items {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    classes {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    committees {
      items {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    gatherings {
      items {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    monthlyPrayerSchedules {
      items {
        id
        year
        month
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    resources {
      items {
        id
        title
        description
        type
        url
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        type
        description
        documents
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    subscriptions {
      items {
        id
        status
        startDate
        endDate
        stripeSubscriptionId
        purchaserId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    volunteerTasks {
      items {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMosqueSubscriptionVariables,
  APITypes.OnCreateMosqueSubscription
>;
export const onUpdateMosque = /* GraphQL */ `subscription OnUpdateMosque(
  $filter: ModelSubscriptionMosqueFilterInput
  $creatorId: String
) {
  onUpdateMosque(filter: $filter, creatorId: $creatorId) {
    id
    name
    description
    images
    address {
      addressLine1
      addressLine2
      addressLine3
      city
      province
      postalCode
      country
      latitude
      longitude
      __typename
    }
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
    contactInfo {
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
      __typename
    }
    liveVideoUrl
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    announcements {
      items {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    classes {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    committees {
      items {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    gatherings {
      items {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    monthlyPrayerSchedules {
      items {
        id
        year
        month
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    resources {
      items {
        id
        title
        description
        type
        url
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        type
        description
        documents
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    subscriptions {
      items {
        id
        status
        startDate
        endDate
        stripeSubscriptionId
        purchaserId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    volunteerTasks {
      items {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMosqueSubscriptionVariables,
  APITypes.OnUpdateMosqueSubscription
>;
export const onDeleteMosque = /* GraphQL */ `subscription OnDeleteMosque(
  $filter: ModelSubscriptionMosqueFilterInput
  $creatorId: String
) {
  onDeleteMosque(filter: $filter, creatorId: $creatorId) {
    id
    name
    description
    images
    address {
      addressLine1
      addressLine2
      addressLine3
      city
      province
      postalCode
      country
      latitude
      longitude
      __typename
    }
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
    contactInfo {
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
      __typename
    }
    liveVideoUrl
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    announcements {
      items {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    classes {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    committees {
      items {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    gatherings {
      items {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    monthlyPrayerSchedules {
      items {
        id
        year
        month
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    resources {
      items {
        id
        title
        description
        type
        url
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    services {
      items {
        id
        type
        description
        documents
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    subscriptions {
      items {
        id
        status
        startDate
        endDate
        stripeSubscriptionId
        purchaserId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    volunteerTasks {
      items {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMosqueSubscriptionVariables,
  APITypes.OnDeleteMosqueSubscription
>;
export const onCreateMosqueSubscription = /* GraphQL */ `subscription OnCreateMosqueSubscription(
  $filter: ModelSubscriptionMosqueSubscriptionFilterInput
  $purchaserId: String
) {
  onCreateMosqueSubscription(filter: $filter, purchaserId: $purchaserId) {
    id
    status
    startDate
    endDate
    stripeSubscriptionId
    purchaserId
    purchaser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMosqueSubscriptionSubscriptionVariables,
  APITypes.OnCreateMosqueSubscriptionSubscription
>;
export const onUpdateMosqueSubscription = /* GraphQL */ `subscription OnUpdateMosqueSubscription(
  $filter: ModelSubscriptionMosqueSubscriptionFilterInput
  $purchaserId: String
) {
  onUpdateMosqueSubscription(filter: $filter, purchaserId: $purchaserId) {
    id
    status
    startDate
    endDate
    stripeSubscriptionId
    purchaserId
    purchaser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMosqueSubscriptionSubscriptionVariables,
  APITypes.OnUpdateMosqueSubscriptionSubscription
>;
export const onDeleteMosqueSubscription = /* GraphQL */ `subscription OnDeleteMosqueSubscription(
  $filter: ModelSubscriptionMosqueSubscriptionFilterInput
  $purchaserId: String
) {
  onDeleteMosqueSubscription(filter: $filter, purchaserId: $purchaserId) {
    id
    status
    startDate
    endDate
    stripeSubscriptionId
    purchaserId
    purchaser {
      id
      selfie
      firstName
      lastName
      email
      phone
      type
      status
      stripeCustomerId
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMosqueSubscriptionSubscriptionVariables,
  APITypes.OnDeleteMosqueSubscriptionSubscription
>;
export const onCreateResource = /* GraphQL */ `subscription OnCreateResource(
  $filter: ModelSubscriptionResourceFilterInput
  $creatorId: String
) {
  onCreateResource(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    type
    url
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourceSubscriptionVariables,
  APITypes.OnCreateResourceSubscription
>;
export const onUpdateResource = /* GraphQL */ `subscription OnUpdateResource(
  $filter: ModelSubscriptionResourceFilterInput
  $creatorId: String
) {
  onUpdateResource(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    type
    url
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourceSubscriptionVariables,
  APITypes.OnUpdateResourceSubscription
>;
export const onDeleteResource = /* GraphQL */ `subscription OnDeleteResource(
  $filter: ModelSubscriptionResourceFilterInput
  $creatorId: String
) {
  onDeleteResource(filter: $filter, creatorId: $creatorId) {
    id
    title
    description
    type
    url
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourceSubscriptionVariables,
  APITypes.OnDeleteResourceSubscription
>;
export const onCreateService = /* GraphQL */ `subscription OnCreateService(
  $filter: ModelSubscriptionServiceFilterInput
  $creatorId: String
) {
  onCreateService(filter: $filter, creatorId: $creatorId) {
    id
    type
    description
    documents
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceSubscriptionVariables,
  APITypes.OnCreateServiceSubscription
>;
export const onUpdateService = /* GraphQL */ `subscription OnUpdateService(
  $filter: ModelSubscriptionServiceFilterInput
  $creatorId: String
) {
  onUpdateService(filter: $filter, creatorId: $creatorId) {
    id
    type
    description
    documents
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceSubscriptionVariables,
  APITypes.OnUpdateServiceSubscription
>;
export const onDeleteService = /* GraphQL */ `subscription OnDeleteService(
  $filter: ModelSubscriptionServiceFilterInput
  $creatorId: String
) {
  onDeleteService(filter: $filter, creatorId: $creatorId) {
    id
    type
    description
    documents
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceSubscriptionVariables,
  APITypes.OnDeleteServiceSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
    id
    selfie
    firstName
    lastName
    email
    phone
    type
    status
    stripeCustomerId
    createdAnnouncements {
      items {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdClasses {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdCommittees {
      items {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdGatherings {
      items {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdMonthlyPrayerSchedules {
      items {
        id
        year
        month
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdResources {
      items {
        id
        title
        description
        type
        url
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdServices {
      items {
        id
        type
        description
        documents
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdVolunteerTasks {
      items {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        donorId
        fundraisingCampaignId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    committees {
      items {
        id
        committeeId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    gatherings {
      items {
        id
        gatheringId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    instructingClasses {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
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
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    purchasedSubscriptions {
      items {
        id
        status
        startDate
        endDate
        stripeSubscriptionId
        purchaserId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    volunteerTasks {
      items {
        id
        userId
        volunteerTaskId
        createdAt
        updatedAt
        owner
        creatorId
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
    id
    selfie
    firstName
    lastName
    email
    phone
    type
    status
    stripeCustomerId
    createdAnnouncements {
      items {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdClasses {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdCommittees {
      items {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdGatherings {
      items {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdMonthlyPrayerSchedules {
      items {
        id
        year
        month
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdResources {
      items {
        id
        title
        description
        type
        url
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdServices {
      items {
        id
        type
        description
        documents
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdVolunteerTasks {
      items {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        donorId
        fundraisingCampaignId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    committees {
      items {
        id
        committeeId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    gatherings {
      items {
        id
        gatheringId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    instructingClasses {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
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
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    purchasedSubscriptions {
      items {
        id
        status
        startDate
        endDate
        stripeSubscriptionId
        purchaserId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    volunteerTasks {
      items {
        id
        userId
        volunteerTaskId
        createdAt
        updatedAt
        owner
        creatorId
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
    id
    selfie
    firstName
    lastName
    email
    phone
    type
    status
    stripeCustomerId
    createdAnnouncements {
      items {
        id
        title
        body
        images
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdClasses {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdCommittees {
      items {
        id
        title
        description
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdGatherings {
      items {
        id
        title
        description
        type
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdMonthlyPrayerSchedules {
      items {
        id
        year
        month
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdResources {
      items {
        id
        title
        description
        type
        url
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdServices {
      items {
        id
        type
        description
        documents
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdVolunteerTasks {
      items {
        id
        name
        description
        startDate
        endDate
        creatorId
        mosqueId
        createdAt
        updatedAt
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
        donorId
        fundraisingCampaignId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    committees {
      items {
        id
        committeeId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    gatherings {
      items {
        id
        gatheringId
        userId
        createdAt
        updatedAt
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    instructingClasses {
      items {
        id
        title
        description
        startDateTime
        endDateTime
        recurring
        daysOfWeek
        creatorId
        instructorId
        mosqueId
        createdAt
        updatedAt
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
        creatorId
        owner
        __typename
      }
      nextToken
      __typename
    }
    purchasedSubscriptions {
      items {
        id
        status
        startDate
        endDate
        stripeSubscriptionId
        purchaserId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    volunteerTasks {
      items {
        id
        userId
        volunteerTaskId
        createdAt
        updatedAt
        owner
        creatorId
        __typename
      }
      nextToken
      __typename
    }
    bookmarks {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        text
        parentCommentId
        announcementId
        creatorId
        mosqueId
        createdAt
        updatedAt
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateVolunteerTask = /* GraphQL */ `subscription OnCreateVolunteerTask(
  $filter: ModelSubscriptionVolunteerTaskFilterInput
  $creatorId: String
) {
  onCreateVolunteerTask(filter: $filter, creatorId: $creatorId) {
    id
    name
    description
    startDate
    endDate
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    volunteers {
      items {
        id
        userId
        volunteerTaskId
        createdAt
        updatedAt
        owner
        creatorId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVolunteerTaskSubscriptionVariables,
  APITypes.OnCreateVolunteerTaskSubscription
>;
export const onUpdateVolunteerTask = /* GraphQL */ `subscription OnUpdateVolunteerTask(
  $filter: ModelSubscriptionVolunteerTaskFilterInput
  $creatorId: String
) {
  onUpdateVolunteerTask(filter: $filter, creatorId: $creatorId) {
    id
    name
    description
    startDate
    endDate
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    volunteers {
      items {
        id
        userId
        volunteerTaskId
        createdAt
        updatedAt
        owner
        creatorId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVolunteerTaskSubscriptionVariables,
  APITypes.OnUpdateVolunteerTaskSubscription
>;
export const onDeleteVolunteerTask = /* GraphQL */ `subscription OnDeleteVolunteerTask(
  $filter: ModelSubscriptionVolunteerTaskFilterInput
  $creatorId: String
) {
  onDeleteVolunteerTask(filter: $filter, creatorId: $creatorId) {
    id
    name
    description
    startDate
    endDate
    creatorId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    mosqueId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      __typename
    }
    volunteers {
      items {
        id
        userId
        volunteerTaskId
        createdAt
        updatedAt
        owner
        creatorId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVolunteerTaskSubscriptionVariables,
  APITypes.OnDeleteVolunteerTaskSubscription
>;
export const onCreateCommitteeMembers = /* GraphQL */ `subscription OnCreateCommitteeMembers(
  $filter: ModelSubscriptionCommitteeMembersFilterInput
  $creatorId: String
  $owner: String
) {
  onCreateCommitteeMembers(
    filter: $filter
    creatorId: $creatorId
    owner: $owner
  ) {
    id
    committeeId
    userId
    committee {
      id
      title
      description
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      members {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommitteeMembersSubscriptionVariables,
  APITypes.OnCreateCommitteeMembersSubscription
>;
export const onUpdateCommitteeMembers = /* GraphQL */ `subscription OnUpdateCommitteeMembers(
  $filter: ModelSubscriptionCommitteeMembersFilterInput
  $creatorId: String
  $owner: String
) {
  onUpdateCommitteeMembers(
    filter: $filter
    creatorId: $creatorId
    owner: $owner
  ) {
    id
    committeeId
    userId
    committee {
      id
      title
      description
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      members {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommitteeMembersSubscriptionVariables,
  APITypes.OnUpdateCommitteeMembersSubscription
>;
export const onDeleteCommitteeMembers = /* GraphQL */ `subscription OnDeleteCommitteeMembers(
  $filter: ModelSubscriptionCommitteeMembersFilterInput
  $creatorId: String
  $owner: String
) {
  onDeleteCommitteeMembers(
    filter: $filter
    creatorId: $creatorId
    owner: $owner
  ) {
    id
    committeeId
    userId
    committee {
      id
      title
      description
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      members {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommitteeMembersSubscriptionVariables,
  APITypes.OnDeleteCommitteeMembersSubscription
>;
export const onCreateGatheringAttendees = /* GraphQL */ `subscription OnCreateGatheringAttendees(
  $filter: ModelSubscriptionGatheringAttendeesFilterInput
  $creatorId: String
  $owner: String
) {
  onCreateGatheringAttendees(
    filter: $filter
    creatorId: $creatorId
    owner: $owner
  ) {
    id
    gatheringId
    userId
    gathering {
      id
      title
      description
      type
      startDate
      endDate
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      attendees {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGatheringAttendeesSubscriptionVariables,
  APITypes.OnCreateGatheringAttendeesSubscription
>;
export const onUpdateGatheringAttendees = /* GraphQL */ `subscription OnUpdateGatheringAttendees(
  $filter: ModelSubscriptionGatheringAttendeesFilterInput
  $creatorId: String
  $owner: String
) {
  onUpdateGatheringAttendees(
    filter: $filter
    creatorId: $creatorId
    owner: $owner
  ) {
    id
    gatheringId
    userId
    gathering {
      id
      title
      description
      type
      startDate
      endDate
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      attendees {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGatheringAttendeesSubscriptionVariables,
  APITypes.OnUpdateGatheringAttendeesSubscription
>;
export const onDeleteGatheringAttendees = /* GraphQL */ `subscription OnDeleteGatheringAttendees(
  $filter: ModelSubscriptionGatheringAttendeesFilterInput
  $creatorId: String
  $owner: String
) {
  onDeleteGatheringAttendees(
    filter: $filter
    creatorId: $creatorId
    owner: $owner
  ) {
    id
    gatheringId
    userId
    gathering {
      id
      title
      description
      type
      startDate
      endDate
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      attendees {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGatheringAttendeesSubscriptionVariables,
  APITypes.OnDeleteGatheringAttendeesSubscription
>;
export const onCreateMosqueFollowers = /* GraphQL */ `subscription OnCreateMosqueFollowers(
  $filter: ModelSubscriptionMosqueFollowersFilterInput
  $creatorId: String
  $owner: String
) {
  onCreateMosqueFollowers(
    filter: $filter
    creatorId: $creatorId
    owner: $owner
  ) {
    id
    mosqueId
    userId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMosqueFollowersSubscriptionVariables,
  APITypes.OnCreateMosqueFollowersSubscription
>;
export const onUpdateMosqueFollowers = /* GraphQL */ `subscription OnUpdateMosqueFollowers(
  $filter: ModelSubscriptionMosqueFollowersFilterInput
  $creatorId: String
  $owner: String
) {
  onUpdateMosqueFollowers(
    filter: $filter
    creatorId: $creatorId
    owner: $owner
  ) {
    id
    mosqueId
    userId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMosqueFollowersSubscriptionVariables,
  APITypes.OnUpdateMosqueFollowersSubscription
>;
export const onDeleteMosqueFollowers = /* GraphQL */ `subscription OnDeleteMosqueFollowers(
  $filter: ModelSubscriptionMosqueFollowersFilterInput
  $creatorId: String
  $owner: String
) {
  onDeleteMosqueFollowers(
    filter: $filter
    creatorId: $creatorId
    owner: $owner
  ) {
    id
    mosqueId
    userId
    mosque {
      id
      name
      description
      images
      address {
        addressLine1
        addressLine2
        addressLine3
        city
        province
        postalCode
        country
        latitude
        longitude
        __typename
      }
      hours {
        __typename
      }
      contactInfo {
        phone
        email
        website
        __typename
      }
      liveVideoUrl
      creatorId
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
        createdAt
        updatedAt
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
      classes {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      fundraisingCampaigns {
        nextToken
        __typename
      }
      monthlyPrayerSchedules {
        nextToken
        __typename
      }
      resources {
        nextToken
        __typename
      }
      services {
        nextToken
        __typename
      }
      subscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    createdAt
    updatedAt
    creatorId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMosqueFollowersSubscriptionVariables,
  APITypes.OnDeleteMosqueFollowersSubscription
>;
export const onCreateVolunteerTaskUser = /* GraphQL */ `subscription OnCreateVolunteerTaskUser(
  $filter: ModelSubscriptionVolunteerTaskUserFilterInput
  $owner: String
  $creatorId: String
) {
  onCreateVolunteerTaskUser(
    filter: $filter
    owner: $owner
    creatorId: $creatorId
  ) {
    id
    userId
    volunteerTaskId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    volunteerTask {
      id
      name
      description
      startDate
      endDate
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      volunteers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    owner
    creatorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVolunteerTaskUserSubscriptionVariables,
  APITypes.OnCreateVolunteerTaskUserSubscription
>;
export const onUpdateVolunteerTaskUser = /* GraphQL */ `subscription OnUpdateVolunteerTaskUser(
  $filter: ModelSubscriptionVolunteerTaskUserFilterInput
  $owner: String
  $creatorId: String
) {
  onUpdateVolunteerTaskUser(
    filter: $filter
    owner: $owner
    creatorId: $creatorId
  ) {
    id
    userId
    volunteerTaskId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    volunteerTask {
      id
      name
      description
      startDate
      endDate
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      volunteers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    owner
    creatorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVolunteerTaskUserSubscriptionVariables,
  APITypes.OnUpdateVolunteerTaskUserSubscription
>;
export const onDeleteVolunteerTaskUser = /* GraphQL */ `subscription OnDeleteVolunteerTaskUser(
  $filter: ModelSubscriptionVolunteerTaskUserFilterInput
  $owner: String
  $creatorId: String
) {
  onDeleteVolunteerTaskUser(
    filter: $filter
    owner: $owner
    creatorId: $creatorId
  ) {
    id
    userId
    volunteerTaskId
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
      createdAnnouncements {
        nextToken
        __typename
      }
      createdClasses {
        nextToken
        __typename
      }
      createdCommittees {
        nextToken
        __typename
      }
      createdGatherings {
        nextToken
        __typename
      }
      createdFundraisingCampaigns {
        nextToken
        __typename
      }
      createdMonthlyPrayerSchedules {
        nextToken
        __typename
      }
      createdMosques {
        nextToken
        __typename
      }
      createdResources {
        nextToken
        __typename
      }
      createdServices {
        nextToken
        __typename
      }
      createdVolunteerTasks {
        nextToken
        __typename
      }
      donations {
        nextToken
        __typename
      }
      committees {
        nextToken
        __typename
      }
      gatherings {
        nextToken
        __typename
      }
      instructingClasses {
        nextToken
        __typename
      }
      mosques {
        nextToken
        __typename
      }
      purchasedSubscriptions {
        nextToken
        __typename
      }
      volunteerTasks {
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
      owner
      __typename
    }
    volunteerTask {
      id
      name
      description
      startDate
      endDate
      creatorId
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
        createdAt
        updatedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        liveVideoUrl
        creatorId
        createdAt
        updatedAt
        __typename
      }
      volunteers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    owner
    creatorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVolunteerTaskUserSubscriptionVariables,
  APITypes.OnDeleteVolunteerTaskUserSubscription
>;
