// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DayType = {
  "MONDAY": "MONDAY",
  "TUESDAY": "TUESDAY",
  "WEDNESDAY": "WEDNESDAY",
  "THURSDAY": "THURSDAY",
  "FRIDAY": "FRIDAY",
  "SATURDAY": "SATURDAY",
  "SUNDAY": "SUNDAY"
};

const GatheringType = {
  "LECTURE": "LECTURE",
  "GATHERING": "GATHERING",
  "COMMUNITY_ACTIVITY": "COMMUNITY_ACTIVITY",
  "OTHER": "OTHER"
};

const FundraisingCampaignType = {
  "BILL": "BILL",
  "COMMUNITY": "COMMUNITY",
  "EDUCATION": "EDUCATION",
  "EMERGENCY_RELIEF": "EMERGENCY_RELIEF",
  "ENVIRONMENT": "ENVIRONMENT",
  "FUNERAL": "FUNERAL",
  "HEALTH": "HEALTH",
  "MOSQUE": "MOSQUE",
  "ORPHANS": "ORPHANS",
  "OTHER": "OTHER",
  "REFUGEES": "REFUGEES"
};

const PrayerType = {
  "FAJR": "FAJR",
  "THUHR": "THUHR",
  "ASR": "ASR",
  "MAGHRIB": "MAGHRIB",
  "ISHA": "ISHA",
  "JUMUAH": "JUMUAH",
  "EID_AL_FITR": "EID_AL_FITR",
  "EID_AL_ADHA": "EID_AL_ADHA"
};

const ResourceType = {
  "ARTICLE": "ARTICLE",
  "VIDEO": "VIDEO",
  "BOOK": "BOOK",
  "OTHER": "OTHER"
};

const ServiceType = {
  "MARRIAGE": "MARRIAGE",
  "FUNERAL": "FUNERAL",
  "COUNSELING": "COUNSELING",
  "OTHER": "OTHER"
};

const UploadType = {
  "SELFIE": "SELFIE",
  "MOSQUE": "MOSQUE",
  "RESOURCE": "RESOURCE",
  "GATHERING_PICTURE": "GATHERING_PICTURE",
  "FUNDRAISING_CAMPAIGN_PICTURE": "FUNDRAISING_CAMPAIGN_PICTURE",
  "MONTHLY_PRAYER_SCHEDULE_PICTURE": "MONTHLY_PRAYER_SCHEDULE_PICTURE",
  "VOLUNTEER_TASK_PICTURE": "VOLUNTEER_TASK_PICTURE"
};

const UserStatus = {
  "ACTIVE": "ACTIVE",
  "BLOCKED": "BLOCKED",
  "DEACTIVATED": "DEACTIVATED"
};

const UserType = {
  "ADMIN": "ADMIN",
  "SUPER_ADMIN": "SUPER_ADMIN",
  "USER": "USER",
  "USER_READ_ONLY": "USER_READ_ONLY"
};

const { Announcement, Class, Committee, Gathering, Donation, FundraisingCampaign, Mosque, MonthlyPrayerSchedule, Resource, Service, User, VolunteerTask, CommitteeMembers, GatheringAttendees, MosqueFollowers, VolunteerTaskUser, AbortMultipartUploadOutput, CompleteMultipartUploadOutput, InitiateMultipartUploadOutput, GenerateMultipartUploadUrlsOutput, GenerateMultipartUploadUrlOutput, ListCompletedMultipartUploadsOutput, UploadedPart, ListInProgressMultipartUploadsOutput, InProgressUpload, ContactInfo, PrayerTime, OperatingHours, Day, Hours, Location, SocialMedia } = initSchema(schema);

export {
  Announcement,
  Class,
  Committee,
  Gathering,
  Donation,
  FundraisingCampaign,
  Mosque,
  MonthlyPrayerSchedule,
  Resource,
  Service,
  User,
  VolunteerTask,
  CommitteeMembers,
  GatheringAttendees,
  MosqueFollowers,
  VolunteerTaskUser,
  DayType,
  GatheringType,
  FundraisingCampaignType,
  PrayerType,
  ResourceType,
  ServiceType,
  UploadType,
  UserStatus,
  UserType,
  AbortMultipartUploadOutput,
  CompleteMultipartUploadOutput,
  InitiateMultipartUploadOutput,
  GenerateMultipartUploadUrlsOutput,
  GenerateMultipartUploadUrlOutput,
  ListCompletedMultipartUploadsOutput,
  UploadedPart,
  ListInProgressMultipartUploadsOutput,
  InProgressUpload,
  ContactInfo,
  PrayerTime,
  OperatingHours,
  Day,
  Hours,
  Location,
  SocialMedia
};