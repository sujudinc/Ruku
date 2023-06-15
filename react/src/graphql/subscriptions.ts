/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
    $owner: String
  ) {
    onCreateAnnouncement(filter: $filter, owner: $owner) {
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
        owner
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
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
    $owner: String
  ) {
    onUpdateAnnouncement(filter: $filter, owner: $owner) {
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
        owner
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
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
    $owner: String
  ) {
    onDeleteAnnouncement(filter: $filter, owner: $owner) {
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
        owner
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass(
    $filter: ModelSubscriptionClassFilterInput
    $owner: String
  ) {
    onCreateClass(filter: $filter, owner: $owner) {
      id
      title
      description
      startDateTime
      endDateTime
      recurring
      daysOfWeek
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
        owner
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass(
    $filter: ModelSubscriptionClassFilterInput
    $owner: String
  ) {
    onUpdateClass(filter: $filter, owner: $owner) {
      id
      title
      description
      startDateTime
      endDateTime
      recurring
      daysOfWeek
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
        owner
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass(
    $filter: ModelSubscriptionClassFilterInput
    $owner: String
  ) {
    onDeleteClass(filter: $filter, owner: $owner) {
      id
      title
      description
      startDateTime
      endDateTime
      recurring
      daysOfWeek
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
        owner
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
export const onCreateCommittee = /* GraphQL */ `
  subscription OnCreateCommittee(
    $filter: ModelSubscriptionCommitteeFilterInput
    $owner: String
  ) {
    onCreateCommittee(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateCommittee = /* GraphQL */ `
  subscription OnUpdateCommittee(
    $filter: ModelSubscriptionCommitteeFilterInput
    $owner: String
  ) {
    onUpdateCommittee(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteCommittee = /* GraphQL */ `
  subscription OnDeleteCommittee(
    $filter: ModelSubscriptionCommitteeFilterInput
    $owner: String
  ) {
    onDeleteCommittee(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateGathering = /* GraphQL */ `
  subscription OnCreateGathering(
    $filter: ModelSubscriptionGatheringFilterInput
    $owner: String
  ) {
    onCreateGathering(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateGathering = /* GraphQL */ `
  subscription OnUpdateGathering(
    $filter: ModelSubscriptionGatheringFilterInput
    $owner: String
  ) {
    onUpdateGathering(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteGathering = /* GraphQL */ `
  subscription OnDeleteGathering(
    $filter: ModelSubscriptionGatheringFilterInput
    $owner: String
  ) {
    onDeleteGathering(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation(
    $filter: ModelSubscriptionDonationFilterInput
    $owner: String
  ) {
    onCreateDonation(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation(
    $filter: ModelSubscriptionDonationFilterInput
    $owner: String
  ) {
    onUpdateDonation(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation(
    $filter: ModelSubscriptionDonationFilterInput
    $owner: String
  ) {
    onDeleteDonation(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
export const onCreateFundraisingCampaign = /* GraphQL */ `
  subscription OnCreateFundraisingCampaign(
    $filter: ModelSubscriptionFundraisingCampaignFilterInput
    $owner: String
  ) {
    onCreateFundraisingCampaign(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateFundraisingCampaign = /* GraphQL */ `
  subscription OnUpdateFundraisingCampaign(
    $filter: ModelSubscriptionFundraisingCampaignFilterInput
    $owner: String
  ) {
    onUpdateFundraisingCampaign(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteFundraisingCampaign = /* GraphQL */ `
  subscription OnDeleteFundraisingCampaign(
    $filter: ModelSubscriptionFundraisingCampaignFilterInput
    $owner: String
  ) {
    onDeleteFundraisingCampaign(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateMosque = /* GraphQL */ `
  subscription OnCreateMosque(
    $filter: ModelSubscriptionMosqueFilterInput
    $owner: String
  ) {
    onCreateMosque(filter: $filter, owner: $owner) {
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
          owner
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
          instructorId
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateMosque = /* GraphQL */ `
  subscription OnUpdateMosque(
    $filter: ModelSubscriptionMosqueFilterInput
    $owner: String
  ) {
    onUpdateMosque(filter: $filter, owner: $owner) {
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
          owner
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
          instructorId
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteMosque = /* GraphQL */ `
  subscription OnDeleteMosque(
    $filter: ModelSubscriptionMosqueFilterInput
    $owner: String
  ) {
    onDeleteMosque(filter: $filter, owner: $owner) {
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
          owner
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
          instructorId
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
      owner
      __typename
    }
  }
`;
export const onCreateMonthlyPrayerSchedule = /* GraphQL */ `
  subscription OnCreateMonthlyPrayerSchedule(
    $filter: ModelSubscriptionMonthlyPrayerScheduleFilterInput
    $owner: String
  ) {
    onCreateMonthlyPrayerSchedule(filter: $filter, owner: $owner) {
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
        owner
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
export const onUpdateMonthlyPrayerSchedule = /* GraphQL */ `
  subscription OnUpdateMonthlyPrayerSchedule(
    $filter: ModelSubscriptionMonthlyPrayerScheduleFilterInput
    $owner: String
  ) {
    onUpdateMonthlyPrayerSchedule(filter: $filter, owner: $owner) {
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
        owner
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
export const onDeleteMonthlyPrayerSchedule = /* GraphQL */ `
  subscription OnDeleteMonthlyPrayerSchedule(
    $filter: ModelSubscriptionMonthlyPrayerScheduleFilterInput
    $owner: String
  ) {
    onDeleteMonthlyPrayerSchedule(filter: $filter, owner: $owner) {
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
        owner
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
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource(
    $filter: ModelSubscriptionResourceFilterInput
    $owner: String
  ) {
    onCreateResource(filter: $filter, owner: $owner) {
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
        owner
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
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource(
    $filter: ModelSubscriptionResourceFilterInput
    $owner: String
  ) {
    onUpdateResource(filter: $filter, owner: $owner) {
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
        owner
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
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource(
    $filter: ModelSubscriptionResourceFilterInput
    $owner: String
  ) {
    onDeleteResource(filter: $filter, owner: $owner) {
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
        owner
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
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService(
    $filter: ModelSubscriptionServiceFilterInput
    $owner: String
  ) {
    onCreateService(filter: $filter, owner: $owner) {
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
        owner
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService(
    $filter: ModelSubscriptionServiceFilterInput
    $owner: String
  ) {
    onUpdateService(filter: $filter, owner: $owner) {
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
        owner
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService(
    $filter: ModelSubscriptionServiceFilterInput
    $owner: String
  ) {
    onDeleteService(filter: $filter, owner: $owner) {
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
        owner
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
          owner
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
          instructorId
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          instructorId
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
          owner
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
          owner
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
          instructorId
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          instructorId
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
          owner
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
          owner
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
          instructorId
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          owner
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
          instructorId
          creatorId
          mosqueId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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
          owner
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
    $owner: String
  ) {
    onCreateVolunteerTask(filter: $filter, owner: $owner) {
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
        owner
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
export const onUpdateVolunteerTask = /* GraphQL */ `
  subscription OnUpdateVolunteerTask(
    $filter: ModelSubscriptionVolunteerTaskFilterInput
    $owner: String
  ) {
    onUpdateVolunteerTask(filter: $filter, owner: $owner) {
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
        owner
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
export const onDeleteVolunteerTask = /* GraphQL */ `
  subscription OnDeleteVolunteerTask(
    $filter: ModelSubscriptionVolunteerTaskFilterInput
    $owner: String
  ) {
    onDeleteVolunteerTask(filter: $filter, owner: $owner) {
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
        owner
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
export const onCreateCommitteeMembers = /* GraphQL */ `
  subscription OnCreateCommitteeMembers(
    $filter: ModelSubscriptionCommitteeMembersFilterInput
    $owner: String
  ) {
    onCreateCommitteeMembers(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateCommitteeMembers = /* GraphQL */ `
  subscription OnUpdateCommitteeMembers(
    $filter: ModelSubscriptionCommitteeMembersFilterInput
    $owner: String
  ) {
    onUpdateCommitteeMembers(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteCommitteeMembers = /* GraphQL */ `
  subscription OnDeleteCommitteeMembers(
    $filter: ModelSubscriptionCommitteeMembersFilterInput
    $owner: String
  ) {
    onDeleteCommitteeMembers(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateGatheringAttendees = /* GraphQL */ `
  subscription OnCreateGatheringAttendees(
    $filter: ModelSubscriptionGatheringAttendeesFilterInput
    $owner: String
  ) {
    onCreateGatheringAttendees(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateGatheringAttendees = /* GraphQL */ `
  subscription OnUpdateGatheringAttendees(
    $filter: ModelSubscriptionGatheringAttendeesFilterInput
    $owner: String
  ) {
    onUpdateGatheringAttendees(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteGatheringAttendees = /* GraphQL */ `
  subscription OnDeleteGatheringAttendees(
    $filter: ModelSubscriptionGatheringAttendeesFilterInput
    $owner: String
  ) {
    onDeleteGatheringAttendees(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateMosqueFollowers = /* GraphQL */ `
  subscription OnCreateMosqueFollowers(
    $filter: ModelSubscriptionMosqueFollowersFilterInput
    $owner: String
  ) {
    onCreateMosqueFollowers(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onUpdateMosqueFollowers = /* GraphQL */ `
  subscription OnUpdateMosqueFollowers(
    $filter: ModelSubscriptionMosqueFollowersFilterInput
    $owner: String
  ) {
    onUpdateMosqueFollowers(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onDeleteMosqueFollowers = /* GraphQL */ `
  subscription OnDeleteMosqueFollowers(
    $filter: ModelSubscriptionMosqueFollowersFilterInput
    $owner: String
  ) {
    onDeleteMosqueFollowers(filter: $filter, owner: $owner) {
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
        owner
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
      owner
      __typename
    }
  }
`;
export const onCreateVolunteerTaskUser = /* GraphQL */ `
  subscription OnCreateVolunteerTaskUser(
    $filter: ModelSubscriptionVolunteerTaskUserFilterInput
    $owner: String
  ) {
    onCreateVolunteerTaskUser(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
export const onUpdateVolunteerTaskUser = /* GraphQL */ `
  subscription OnUpdateVolunteerTaskUser(
    $filter: ModelSubscriptionVolunteerTaskUserFilterInput
    $owner: String
  ) {
    onUpdateVolunteerTaskUser(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
export const onDeleteVolunteerTaskUser = /* GraphQL */ `
  subscription OnDeleteVolunteerTaskUser(
    $filter: ModelSubscriptionVolunteerTaskUserFilterInput
    $owner: String
  ) {
    onDeleteVolunteerTaskUser(filter: $filter, owner: $owner) {
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
          owner
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
        owner
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
