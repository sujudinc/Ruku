/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement(
    $input: CreateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    createAnnouncement(input: $input, condition: $condition) {
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
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement(
    $input: UpdateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    updateAnnouncement(input: $input, condition: $condition) {
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
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement(
    $input: DeleteAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    deleteAnnouncement(input: $input, condition: $condition) {
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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
export const createCommittee = /* GraphQL */ `
  mutation CreateCommittee(
    $input: CreateCommitteeInput!
    $condition: ModelCommitteeConditionInput
  ) {
    createCommittee(input: $input, condition: $condition) {
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
export const updateCommittee = /* GraphQL */ `
  mutation UpdateCommittee(
    $input: UpdateCommitteeInput!
    $condition: ModelCommitteeConditionInput
  ) {
    updateCommittee(input: $input, condition: $condition) {
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
export const deleteCommittee = /* GraphQL */ `
  mutation DeleteCommittee(
    $input: DeleteCommitteeInput!
    $condition: ModelCommitteeConditionInput
  ) {
    deleteCommittee(input: $input, condition: $condition) {
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
export const createGathering = /* GraphQL */ `
  mutation CreateGathering(
    $input: CreateGatheringInput!
    $condition: ModelGatheringConditionInput
  ) {
    createGathering(input: $input, condition: $condition) {
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
export const updateGathering = /* GraphQL */ `
  mutation UpdateGathering(
    $input: UpdateGatheringInput!
    $condition: ModelGatheringConditionInput
  ) {
    updateGathering(input: $input, condition: $condition) {
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
export const deleteGathering = /* GraphQL */ `
  mutation DeleteGathering(
    $input: DeleteGatheringInput!
    $condition: ModelGatheringConditionInput
  ) {
    deleteGathering(input: $input, condition: $condition) {
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
export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
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
export const updateDonation = /* GraphQL */ `
  mutation UpdateDonation(
    $input: UpdateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    updateDonation(input: $input, condition: $condition) {
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
export const deleteDonation = /* GraphQL */ `
  mutation DeleteDonation(
    $input: DeleteDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    deleteDonation(input: $input, condition: $condition) {
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
export const createFundraisingCampaign = /* GraphQL */ `
  mutation CreateFundraisingCampaign(
    $input: CreateFundraisingCampaignInput!
    $condition: ModelFundraisingCampaignConditionInput
  ) {
    createFundraisingCampaign(input: $input, condition: $condition) {
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
export const updateFundraisingCampaign = /* GraphQL */ `
  mutation UpdateFundraisingCampaign(
    $input: UpdateFundraisingCampaignInput!
    $condition: ModelFundraisingCampaignConditionInput
  ) {
    updateFundraisingCampaign(input: $input, condition: $condition) {
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
export const deleteFundraisingCampaign = /* GraphQL */ `
  mutation DeleteFundraisingCampaign(
    $input: DeleteFundraisingCampaignInput!
    $condition: ModelFundraisingCampaignConditionInput
  ) {
    deleteFundraisingCampaign(input: $input, condition: $condition) {
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
export const createMosque = /* GraphQL */ `
  mutation CreateMosque(
    $input: CreateMosqueInput!
    $condition: ModelMosqueConditionInput
  ) {
    createMosque(input: $input, condition: $condition) {
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
export const updateMosque = /* GraphQL */ `
  mutation UpdateMosque(
    $input: UpdateMosqueInput!
    $condition: ModelMosqueConditionInput
  ) {
    updateMosque(input: $input, condition: $condition) {
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
export const deleteMosque = /* GraphQL */ `
  mutation DeleteMosque(
    $input: DeleteMosqueInput!
    $condition: ModelMosqueConditionInput
  ) {
    deleteMosque(input: $input, condition: $condition) {
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
export const createMonthlyPrayerSchedule = /* GraphQL */ `
  mutation CreateMonthlyPrayerSchedule(
    $input: CreateMonthlyPrayerScheduleInput!
    $condition: ModelMonthlyPrayerScheduleConditionInput
  ) {
    createMonthlyPrayerSchedule(input: $input, condition: $condition) {
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
export const updateMonthlyPrayerSchedule = /* GraphQL */ `
  mutation UpdateMonthlyPrayerSchedule(
    $input: UpdateMonthlyPrayerScheduleInput!
    $condition: ModelMonthlyPrayerScheduleConditionInput
  ) {
    updateMonthlyPrayerSchedule(input: $input, condition: $condition) {
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
export const deleteMonthlyPrayerSchedule = /* GraphQL */ `
  mutation DeleteMonthlyPrayerSchedule(
    $input: DeleteMonthlyPrayerScheduleInput!
    $condition: ModelMonthlyPrayerScheduleConditionInput
  ) {
    deleteMonthlyPrayerSchedule(input: $input, condition: $condition) {
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
export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
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
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
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
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createVolunteerTask = /* GraphQL */ `
  mutation CreateVolunteerTask(
    $input: CreateVolunteerTaskInput!
    $condition: ModelVolunteerTaskConditionInput
  ) {
    createVolunteerTask(input: $input, condition: $condition) {
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
export const updateVolunteerTask = /* GraphQL */ `
  mutation UpdateVolunteerTask(
    $input: UpdateVolunteerTaskInput!
    $condition: ModelVolunteerTaskConditionInput
  ) {
    updateVolunteerTask(input: $input, condition: $condition) {
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
export const deleteVolunteerTask = /* GraphQL */ `
  mutation DeleteVolunteerTask(
    $input: DeleteVolunteerTaskInput!
    $condition: ModelVolunteerTaskConditionInput
  ) {
    deleteVolunteerTask(input: $input, condition: $condition) {
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
export const createCommitteeMembers = /* GraphQL */ `
  mutation CreateCommitteeMembers(
    $input: CreateCommitteeMembersInput!
    $condition: ModelCommitteeMembersConditionInput
  ) {
    createCommitteeMembers(input: $input, condition: $condition) {
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
export const updateCommitteeMembers = /* GraphQL */ `
  mutation UpdateCommitteeMembers(
    $input: UpdateCommitteeMembersInput!
    $condition: ModelCommitteeMembersConditionInput
  ) {
    updateCommitteeMembers(input: $input, condition: $condition) {
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
export const deleteCommitteeMembers = /* GraphQL */ `
  mutation DeleteCommitteeMembers(
    $input: DeleteCommitteeMembersInput!
    $condition: ModelCommitteeMembersConditionInput
  ) {
    deleteCommitteeMembers(input: $input, condition: $condition) {
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
export const createGatheringAttendees = /* GraphQL */ `
  mutation CreateGatheringAttendees(
    $input: CreateGatheringAttendeesInput!
    $condition: ModelGatheringAttendeesConditionInput
  ) {
    createGatheringAttendees(input: $input, condition: $condition) {
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
export const updateGatheringAttendees = /* GraphQL */ `
  mutation UpdateGatheringAttendees(
    $input: UpdateGatheringAttendeesInput!
    $condition: ModelGatheringAttendeesConditionInput
  ) {
    updateGatheringAttendees(input: $input, condition: $condition) {
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
export const deleteGatheringAttendees = /* GraphQL */ `
  mutation DeleteGatheringAttendees(
    $input: DeleteGatheringAttendeesInput!
    $condition: ModelGatheringAttendeesConditionInput
  ) {
    deleteGatheringAttendees(input: $input, condition: $condition) {
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
export const createMosqueFollowers = /* GraphQL */ `
  mutation CreateMosqueFollowers(
    $input: CreateMosqueFollowersInput!
    $condition: ModelMosqueFollowersConditionInput
  ) {
    createMosqueFollowers(input: $input, condition: $condition) {
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
export const updateMosqueFollowers = /* GraphQL */ `
  mutation UpdateMosqueFollowers(
    $input: UpdateMosqueFollowersInput!
    $condition: ModelMosqueFollowersConditionInput
  ) {
    updateMosqueFollowers(input: $input, condition: $condition) {
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
export const deleteMosqueFollowers = /* GraphQL */ `
  mutation DeleteMosqueFollowers(
    $input: DeleteMosqueFollowersInput!
    $condition: ModelMosqueFollowersConditionInput
  ) {
    deleteMosqueFollowers(input: $input, condition: $condition) {
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
export const createVolunteerTaskUser = /* GraphQL */ `
  mutation CreateVolunteerTaskUser(
    $input: CreateVolunteerTaskUserInput!
    $condition: ModelVolunteerTaskUserConditionInput
  ) {
    createVolunteerTaskUser(input: $input, condition: $condition) {
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
export const updateVolunteerTaskUser = /* GraphQL */ `
  mutation UpdateVolunteerTaskUser(
    $input: UpdateVolunteerTaskUserInput!
    $condition: ModelVolunteerTaskUserConditionInput
  ) {
    updateVolunteerTaskUser(input: $input, condition: $condition) {
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
export const deleteVolunteerTaskUser = /* GraphQL */ `
  mutation DeleteVolunteerTaskUser(
    $input: DeleteVolunteerTaskUserInput!
    $condition: ModelVolunteerTaskUserConditionInput
  ) {
    deleteVolunteerTaskUser(input: $input, condition: $condition) {
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
