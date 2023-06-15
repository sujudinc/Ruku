/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
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
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const syncAnnouncements = /* GraphQL */ `
  query SyncAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnnouncements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
export const announcementsByCreatorId = /* GraphQL */ `
  query AnnouncementsByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const announcementsByMosqueId = /* GraphQL */ `
  query AnnouncementsByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsByMosqueId(
      mosqueId: $mosqueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const syncClasses = /* GraphQL */ `
  query SyncClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
export const classesByInstructorId = /* GraphQL */ `
  query ClassesByInstructorId(
    $instructorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classesByInstructorId(
      instructorId: $instructorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const classesByCreatorId = /* GraphQL */ `
  query ClassesByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classesByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const classesByMosqueId = /* GraphQL */ `
  query ClassesByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classesByMosqueId(
      mosqueId: $mosqueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const getCommittee = /* GraphQL */ `
  query GetCommittee($id: ID!) {
    getCommittee(id: $id) {
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
export const listCommittees = /* GraphQL */ `
  query ListCommittees(
    $filter: ModelCommitteeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommittees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCommittees = /* GraphQL */ `
  query SyncCommittees(
    $filter: ModelCommitteeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommittees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const committeesByCreatorId = /* GraphQL */ `
  query CommitteesByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommitteeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    committeesByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const committeesByMosqueId = /* GraphQL */ `
  query CommitteesByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommitteeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    committeesByMosqueId(
      mosqueId: $mosqueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getGathering = /* GraphQL */ `
  query GetGathering($id: ID!) {
    getGathering(id: $id) {
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
export const listGatherings = /* GraphQL */ `
  query ListGatherings(
    $filter: ModelGatheringFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGatherings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncGatherings = /* GraphQL */ `
  query SyncGatherings(
    $filter: ModelGatheringFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGatherings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const gatheringsByCreatorId = /* GraphQL */ `
  query GatheringsByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGatheringFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gatheringsByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const gatheringsByMosqueId = /* GraphQL */ `
  query GatheringsByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGatheringFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gatheringsByMosqueId(
      mosqueId: $mosqueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
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
export const listDonations = /* GraphQL */ `
  query ListDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          mosqueId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDonations = /* GraphQL */ `
  query SyncDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          mosqueId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const donationsByDonorId = /* GraphQL */ `
  query DonationsByDonorId(
    $donorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationsByDonorId(
      donorId: $donorId
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
        donorId
        donor {
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
          mosqueId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const donationsByFundraisingCampaignId = /* GraphQL */ `
  query DonationsByFundraisingCampaignId(
    $fundraisingCampaignId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donationsByFundraisingCampaignId(
      fundraisingCampaignId: $fundraisingCampaignId
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
        donorId
        donor {
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
          mosqueId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getFundraisingCampaign = /* GraphQL */ `
  query GetFundraisingCampaign($id: ID!) {
    getFundraisingCampaign(id: $id) {
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
export const listFundraisingCampaigns = /* GraphQL */ `
  query ListFundraisingCampaigns(
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFundraisingCampaigns = /* GraphQL */ `
  query SyncFundraisingCampaigns(
    $filter: ModelFundraisingCampaignFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFundraisingCampaigns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const fundraisingCampaignsByCreatorId = /* GraphQL */ `
  query FundraisingCampaignsByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFundraisingCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fundraisingCampaignsByCreatorId(
      creatorId: $creatorId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const fundraisingCampaignsByMosqueId = /* GraphQL */ `
  query FundraisingCampaignsByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFundraisingCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fundraisingCampaignsByMosqueId(
      mosqueId: $mosqueId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMosque = /* GraphQL */ `
  query GetMosque($id: ID!) {
    getMosque(id: $id) {
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
export const listMosques = /* GraphQL */ `
  query ListMosques(
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMosques = /* GraphQL */ `
  query SyncMosques(
    $filter: ModelMosqueFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMosques(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const mosquesByCreatorId = /* GraphQL */ `
  query MosquesByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMosqueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mosquesByCreatorId(
      creatorId: $creatorId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMonthlyPrayerSchedule = /* GraphQL */ `
  query GetMonthlyPrayerSchedule($id: ID!) {
    getMonthlyPrayerSchedule(id: $id) {
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
export const listMonthlyPrayerSchedules = /* GraphQL */ `
  query ListMonthlyPrayerSchedules(
    $filter: ModelMonthlyPrayerScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMonthlyPrayerSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const syncMonthlyPrayerSchedules = /* GraphQL */ `
  query SyncMonthlyPrayerSchedules(
    $filter: ModelMonthlyPrayerScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMonthlyPrayerSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
export const monthlyPrayerSchedulesByCreatorId = /* GraphQL */ `
  query MonthlyPrayerSchedulesByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMonthlyPrayerScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    monthlyPrayerSchedulesByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const monthlyPrayerSchedulesByMosqueId = /* GraphQL */ `
  query MonthlyPrayerSchedulesByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMonthlyPrayerScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    monthlyPrayerSchedulesByMosqueId(
      mosqueId: $mosqueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
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
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const syncResources = /* GraphQL */ `
  query SyncResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResources(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
export const resourcesByCreatorId = /* GraphQL */ `
  query ResourcesByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    resourcesByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const resourcesByMosqueId = /* GraphQL */ `
  query ResourcesByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    resourcesByMosqueId(
      mosqueId: $mosqueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
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
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const syncServices = /* GraphQL */ `
  query SyncServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
export const servicesByCreatorId = /* GraphQL */ `
  query ServicesByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    servicesByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const servicesByMosqueId = /* GraphQL */ `
  query ServicesByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    servicesByMosqueId(
      mosqueId: $mosqueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getVolunteerTask = /* GraphQL */ `
  query GetVolunteerTask($id: ID!) {
    getVolunteerTask(id: $id) {
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
export const listVolunteerTasks = /* GraphQL */ `
  query ListVolunteerTasks(
    $filter: ModelVolunteerTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVolunteerTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVolunteerTasks = /* GraphQL */ `
  query SyncVolunteerTasks(
    $filter: ModelVolunteerTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVolunteerTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const volunteerTasksByCreatorId = /* GraphQL */ `
  query VolunteerTasksByCreatorId(
    $creatorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVolunteerTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    volunteerTasksByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const volunteerTasksByMosqueId = /* GraphQL */ `
  query VolunteerTasksByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVolunteerTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    volunteerTasksByMosqueId(
      mosqueId: $mosqueId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCommitteeMembers = /* GraphQL */ `
  query GetCommitteeMembers($id: ID!) {
    getCommitteeMembers(id: $id) {
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
export const listCommitteeMembers = /* GraphQL */ `
  query ListCommitteeMembers(
    $filter: ModelCommitteeMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommitteeMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        committeeId
        userId
        committee {
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
        user {
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
  }
`;
export const syncCommitteeMembers = /* GraphQL */ `
  query SyncCommitteeMembers(
    $filter: ModelCommitteeMembersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommitteeMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        committeeId
        userId
        committee {
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
        user {
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
  }
`;
export const committeeMembersByCommitteeId = /* GraphQL */ `
  query CommitteeMembersByCommitteeId(
    $committeeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommitteeMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    committeeMembersByCommitteeId(
      committeeId: $committeeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        committeeId
        userId
        committee {
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
        user {
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
  }
`;
export const committeeMembersByUserId = /* GraphQL */ `
  query CommitteeMembersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommitteeMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    committeeMembersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        committeeId
        userId
        committee {
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
        user {
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
  }
`;
export const getGatheringAttendees = /* GraphQL */ `
  query GetGatheringAttendees($id: ID!) {
    getGatheringAttendees(id: $id) {
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
export const listGatheringAttendees = /* GraphQL */ `
  query ListGatheringAttendees(
    $filter: ModelGatheringAttendeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGatheringAttendees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        user {
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
  }
`;
export const syncGatheringAttendees = /* GraphQL */ `
  query SyncGatheringAttendees(
    $filter: ModelGatheringAttendeesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGatheringAttendees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        user {
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
  }
`;
export const gatheringAttendeesByGatheringId = /* GraphQL */ `
  query GatheringAttendeesByGatheringId(
    $gatheringId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGatheringAttendeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gatheringAttendeesByGatheringId(
      gatheringId: $gatheringId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        user {
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
  }
`;
export const gatheringAttendeesByUserId = /* GraphQL */ `
  query GatheringAttendeesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGatheringAttendeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gatheringAttendeesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        user {
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
  }
`;
export const getMosqueFollowers = /* GraphQL */ `
  query GetMosqueFollowers($id: ID!) {
    getMosqueFollowers(id: $id) {
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
export const listMosqueFollowers = /* GraphQL */ `
  query ListMosqueFollowers(
    $filter: ModelMosqueFollowersFilterInput
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
        user {
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
  }
`;
export const syncMosqueFollowers = /* GraphQL */ `
  query SyncMosqueFollowers(
    $filter: ModelMosqueFollowersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMosqueFollowers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        user {
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
  }
`;
export const mosqueFollowersByMosqueId = /* GraphQL */ `
  query MosqueFollowersByMosqueId(
    $mosqueId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMosqueFollowersFilterInput
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
        user {
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
  }
`;
export const mosqueFollowersByUserId = /* GraphQL */ `
  query MosqueFollowersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMosqueFollowersFilterInput
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
        user {
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
  }
`;
export const getVolunteerTaskUser = /* GraphQL */ `
  query GetVolunteerTaskUser($id: ID!) {
    getVolunteerTaskUser(id: $id) {
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
export const listVolunteerTaskUsers = /* GraphQL */ `
  query ListVolunteerTaskUsers(
    $filter: ModelVolunteerTaskUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVolunteerTaskUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          mosqueId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVolunteerTaskUsers = /* GraphQL */ `
  query SyncVolunteerTaskUsers(
    $filter: ModelVolunteerTaskUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVolunteerTaskUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          mosqueId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const volunteerTaskUsersByUserId = /* GraphQL */ `
  query VolunteerTaskUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVolunteerTaskUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    volunteerTaskUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          mosqueId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const volunteerTaskUsersByVolunteerTaskId = /* GraphQL */ `
  query VolunteerTaskUsersByVolunteerTaskId(
    $volunteerTaskId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVolunteerTaskUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    volunteerTaskUsersByVolunteerTaskId(
      volunteerTaskId: $volunteerTaskId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          mosqueId
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
      nextToken
      startedAt
      __typename
    }
  }
`;
