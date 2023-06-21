/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
    $creatorId: String
  ) {
    onCreateAnnouncement(filter: $filter, creatorId: $creatorId) {
      id
      title
      content
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
    $creatorId: String
  ) {
    onUpdateAnnouncement(filter: $filter, creatorId: $creatorId) {
      id
      title
      content
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
    $creatorId: String
  ) {
    onDeleteAnnouncement(filter: $filter, creatorId: $creatorId) {
      id
      title
      content
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCommittee = /* GraphQL */ `
  subscription OnCreateCommittee(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      members {
        items {
          id
          committeeId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCommittee = /* GraphQL */ `
  subscription OnUpdateCommittee(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      members {
        items {
          id
          committeeId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCommittee = /* GraphQL */ `
  subscription OnDeleteCommittee(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      members {
        items {
          id
          committeeId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateGathering = /* GraphQL */ `
  subscription OnCreateGathering(
    $filter: ModelSubscriptionGatheringFilterInput
    $creatorId: String
  ) {
    onCreateGathering(filter: $filter, creatorId: $creatorId) {
      id
      title
      description
      gatheringType
      startDate
      endDate
      location {
        addressLine1
        addressLine2
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      attendees {
        items {
          id
          gatheringId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateGathering = /* GraphQL */ `
  subscription OnUpdateGathering(
    $filter: ModelSubscriptionGatheringFilterInput
    $creatorId: String
  ) {
    onUpdateGathering(filter: $filter, creatorId: $creatorId) {
      id
      title
      description
      gatheringType
      startDate
      endDate
      location {
        addressLine1
        addressLine2
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      attendees {
        items {
          id
          gatheringId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteGathering = /* GraphQL */ `
  subscription OnDeleteGathering(
    $filter: ModelSubscriptionGatheringFilterInput
    $creatorId: String
  ) {
    onDeleteGathering(filter: $filter, creatorId: $creatorId) {
      id
      title
      description
      gatheringType
      startDate
      endDate
      location {
        addressLine1
        addressLine2
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      attendees {
        items {
          id
          gatheringId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        goal
        goalDate
        currentAmount
        currency
        creatorId
        creator {
          id
          selfie
          firstName
          lastName
          email
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        goal
        goalDate
        currentAmount
        currency
        creatorId
        creator {
          id
          selfie
          firstName
          lastName
          email
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        goal
        goalDate
        currentAmount
        currency
        creatorId
        creator {
          id
          selfie
          firstName
          lastName
          email
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateFundraisingCampaign = /* GraphQL */ `
  subscription OnCreateFundraisingCampaign(
    $filter: ModelSubscriptionFundraisingCampaignFilterInput
    $creatorId: String
  ) {
    onCreateFundraisingCampaign(filter: $filter, creatorId: $creatorId) {
      id
      title
      description
      featureImage
      type
      goal
      goalDate
      currentAmount
      currency
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateFundraisingCampaign = /* GraphQL */ `
  subscription OnUpdateFundraisingCampaign(
    $filter: ModelSubscriptionFundraisingCampaignFilterInput
    $creatorId: String
  ) {
    onUpdateFundraisingCampaign(filter: $filter, creatorId: $creatorId) {
      id
      title
      description
      featureImage
      type
      goal
      goalDate
      currentAmount
      currency
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteFundraisingCampaign = /* GraphQL */ `
  subscription OnDeleteFundraisingCampaign(
    $filter: ModelSubscriptionFundraisingCampaignFilterInput
    $creatorId: String
  ) {
    onDeleteFundraisingCampaign(filter: $filter, creatorId: $creatorId) {
      id
      title
      description
      featureImage
      type
      goal
      goalDate
      currentAmount
      currency
      creatorId
      creator {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateMosque = /* GraphQL */ `
  subscription OnCreateMosque(
    $filter: ModelSubscriptionMosqueFilterInput
    $creatorId: String
  ) {
    onCreateMosque(filter: $filter, creatorId: $creatorId) {
      id
      name
      description
      images
      location {
        addressLine1
        addressLine2
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
        phoneNumber
        email
        website
        socialMedia {
          facebook
          twitter
          instagram
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      announcements {
        items {
          id
          title
          content
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      gatherings {
        items {
          id
          title
          description
          gatheringType
          startDate
          endDate
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fundraisingCampaigns {
        items {
          id
          title
          description
          featureImage
          type
          goal
          goalDate
          currentAmount
          currency
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateMosque = /* GraphQL */ `
  subscription OnUpdateMosque(
    $filter: ModelSubscriptionMosqueFilterInput
    $creatorId: String
  ) {
    onUpdateMosque(filter: $filter, creatorId: $creatorId) {
      id
      name
      description
      images
      location {
        addressLine1
        addressLine2
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
        phoneNumber
        email
        website
        socialMedia {
          facebook
          twitter
          instagram
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      announcements {
        items {
          id
          title
          content
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      gatherings {
        items {
          id
          title
          description
          gatheringType
          startDate
          endDate
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fundraisingCampaigns {
        items {
          id
          title
          description
          featureImage
          type
          goal
          goalDate
          currentAmount
          currency
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteMosque = /* GraphQL */ `
  subscription OnDeleteMosque(
    $filter: ModelSubscriptionMosqueFilterInput
    $creatorId: String
  ) {
    onDeleteMosque(filter: $filter, creatorId: $creatorId) {
      id
      name
      description
      images
      location {
        addressLine1
        addressLine2
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
        phoneNumber
        email
        website
        socialMedia {
          facebook
          twitter
          instagram
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      announcements {
        items {
          id
          title
          content
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      gatherings {
        items {
          id
          title
          description
          gatheringType
          startDate
          endDate
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      fundraisingCampaigns {
        items {
          id
          title
          description
          featureImage
          type
          goal
          goalDate
          currentAmount
          currency
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateMonthlyPrayerSchedule = /* GraphQL */ `
  subscription OnCreateMonthlyPrayerSchedule(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateMonthlyPrayerSchedule = /* GraphQL */ `
  subscription OnUpdateMonthlyPrayerSchedule(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteMonthlyPrayerSchedule = /* GraphQL */ `
  subscription OnDeleteMonthlyPrayerSchedule(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      selfie
      firstName
      lastName
      email
      type
      status
      createdAnnouncements {
        items {
          id
          title
          content
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdGatherings {
        items {
          id
          title
          description
          gatheringType
          startDate
          endDate
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdFundraisingCampaigns {
        items {
          id
          title
          description
          featureImage
          type
          goal
          goalDate
          currentAmount
          currency
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      committees {
        items {
          id
          committeeId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      gatherings {
        items {
          id
          gatheringId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      mosques {
        items {
          id
          mosqueId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      volunteerTasks {
        items {
          id
          userId
          volunteerTaskId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          creatorId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      selfie
      firstName
      lastName
      email
      type
      status
      createdAnnouncements {
        items {
          id
          title
          content
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdGatherings {
        items {
          id
          title
          description
          gatheringType
          startDate
          endDate
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdFundraisingCampaigns {
        items {
          id
          title
          description
          featureImage
          type
          goal
          goalDate
          currentAmount
          currency
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      committees {
        items {
          id
          committeeId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      gatherings {
        items {
          id
          gatheringId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      mosques {
        items {
          id
          mosqueId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      volunteerTasks {
        items {
          id
          userId
          volunteerTaskId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          creatorId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      selfie
      firstName
      lastName
      email
      type
      status
      createdAnnouncements {
        items {
          id
          title
          content
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdGatherings {
        items {
          id
          title
          description
          gatheringType
          startDate
          endDate
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdFundraisingCampaigns {
        items {
          id
          title
          description
          featureImage
          type
          goal
          goalDate
          currentAmount
          currency
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      committees {
        items {
          id
          committeeId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      gatherings {
        items {
          id
          gatheringId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      mosques {
        items {
          id
          mosqueId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          creatorId
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      volunteerTasks {
        items {
          id
          userId
          volunteerTaskId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          creatorId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateVolunteerTask = /* GraphQL */ `
  subscription OnCreateVolunteerTask(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      volunteers {
        items {
          id
          userId
          volunteerTaskId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          creatorId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateVolunteerTask = /* GraphQL */ `
  subscription OnUpdateVolunteerTask(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      volunteers {
        items {
          id
          userId
          volunteerTaskId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          creatorId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteVolunteerTask = /* GraphQL */ `
  subscription OnDeleteVolunteerTask(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      mosqueId
      mosque {
        id
        name
        description
        images
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      volunteers {
        items {
          id
          userId
          volunteerTaskId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          creatorId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCommitteeMembers = /* GraphQL */ `
  subscription OnCreateCommitteeMembers(
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        members {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      creatorId
      owner
      __typename
    }
  }
`;
export const onUpdateCommitteeMembers = /* GraphQL */ `
  subscription OnUpdateCommitteeMembers(
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        members {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      creatorId
      owner
      __typename
    }
  }
`;
export const onDeleteCommitteeMembers = /* GraphQL */ `
  subscription OnDeleteCommitteeMembers(
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        members {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      creatorId
      owner
      __typename
    }
  }
`;
export const onCreateGatheringAttendees = /* GraphQL */ `
  subscription OnCreateGatheringAttendees(
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
        gatheringType
        startDate
        endDate
        location {
          addressLine1
          addressLine2
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        attendees {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      creatorId
      owner
      __typename
    }
  }
`;
export const onUpdateGatheringAttendees = /* GraphQL */ `
  subscription OnUpdateGatheringAttendees(
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
        gatheringType
        startDate
        endDate
        location {
          addressLine1
          addressLine2
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        attendees {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      creatorId
      owner
      __typename
    }
  }
`;
export const onDeleteGatheringAttendees = /* GraphQL */ `
  subscription OnDeleteGatheringAttendees(
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
        gatheringType
        startDate
        endDate
        location {
          addressLine1
          addressLine2
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        attendees {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      creatorId
      owner
      __typename
    }
  }
`;
export const onCreateMosqueFollowers = /* GraphQL */ `
  subscription OnCreateMosqueFollowers(
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
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      creatorId
      owner
      __typename
    }
  }
`;
export const onUpdateMosqueFollowers = /* GraphQL */ `
  subscription OnUpdateMosqueFollowers(
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
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      creatorId
      owner
      __typename
    }
  }
`;
export const onDeleteMosqueFollowers = /* GraphQL */ `
  subscription OnDeleteMosqueFollowers(
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
        location {
          addressLine1
          addressLine2
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
          phoneNumber
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        followers {
          nextToken
          startedAt
          __typename
        }
        announcements {
          nextToken
          startedAt
          __typename
        }
        classes {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        fundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        monthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        resources {
          nextToken
          startedAt
          __typename
        }
        services {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      user {
        id
        selfie
        firstName
        lastName
        email
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      creatorId
      owner
      __typename
    }
  }
`;
export const onCreateVolunteerTaskUser = /* GraphQL */ `
  subscription OnCreateVolunteerTaskUser(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      creatorId
      __typename
    }
  }
`;
export const onUpdateVolunteerTaskUser = /* GraphQL */ `
  subscription OnUpdateVolunteerTaskUser(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      creatorId
      __typename
    }
  }
`;
export const onDeleteVolunteerTaskUser = /* GraphQL */ `
  subscription OnDeleteVolunteerTaskUser(
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
        type
        status
        createdAnnouncements {
          nextToken
          startedAt
          __typename
        }
        createdClasses {
          nextToken
          startedAt
          __typename
        }
        createdCommittees {
          nextToken
          startedAt
          __typename
        }
        createdGatherings {
          nextToken
          startedAt
          __typename
        }
        createdFundraisingCampaigns {
          nextToken
          startedAt
          __typename
        }
        createdMonthlyPrayerSchedules {
          nextToken
          startedAt
          __typename
        }
        createdMosques {
          nextToken
          startedAt
          __typename
        }
        createdResources {
          nextToken
          startedAt
          __typename
        }
        createdServices {
          nextToken
          startedAt
          __typename
        }
        createdVolunteerTasks {
          nextToken
          startedAt
          __typename
        }
        instructingClasses {
          nextToken
          startedAt
          __typename
        }
        donations {
          nextToken
          startedAt
          __typename
        }
        committees {
          nextToken
          startedAt
          __typename
        }
        gatherings {
          nextToken
          startedAt
          __typename
        }
        mosques {
          nextToken
          startedAt
          __typename
        }
        volunteerTasks {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          type
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      creatorId
      __typename
    }
  }
`;
