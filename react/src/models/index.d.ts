import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum DayType {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export enum GatheringType {
  LECTURE = "LECTURE",
  GATHERING = "GATHERING",
  COMMUNITY_ACTIVITY = "COMMUNITY_ACTIVITY",
  OTHER = "OTHER"
}

export enum FundraisingCampaignType {
  BILL = "BILL",
  COMMUNITY = "COMMUNITY",
  EDUCATION = "EDUCATION",
  EMERGENCY_RELIEF = "EMERGENCY_RELIEF",
  ENVIRONMENT = "ENVIRONMENT",
  FUNERAL = "FUNERAL",
  HEALTH = "HEALTH",
  MOSQUE = "MOSQUE",
  ORPHANS = "ORPHANS",
  OTHER = "OTHER",
  REFUGEES = "REFUGEES"
}

export enum PrayerType {
  FAJR = "FAJR",
  THUHR = "THUHR",
  ASR = "ASR",
  MAGHRIB = "MAGHRIB",
  ISHA = "ISHA",
  JUMUAH = "JUMUAH",
  EID_AL_FITR = "EID_AL_FITR",
  EID_AL_ADHA = "EID_AL_ADHA"
}

export enum ResourceType {
  ARTICLE = "ARTICLE",
  VIDEO = "VIDEO",
  BOOK = "BOOK",
  OTHER = "OTHER"
}

export enum ServiceType {
  MARRIAGE = "MARRIAGE",
  FUNERAL = "FUNERAL",
  COUNSELING = "COUNSELING",
  OTHER = "OTHER"
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",
  DEACTIVATED = "DEACTIVATED"
}

export enum UserType {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
  USER = "USER",
  USER_READ_ONLY = "USER_READ_ONLY"
}

type EagerContactInfo = {
  readonly phoneNumber?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
  readonly socialMedia?: SocialMedia | null;
}

type LazyContactInfo = {
  readonly phoneNumber?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
  readonly socialMedia?: SocialMedia | null;
}

export declare type ContactInfo = LazyLoading extends LazyLoadingDisabled ? EagerContactInfo : LazyContactInfo

export declare const ContactInfo: (new (init: ModelInit<ContactInfo>) => ContactInfo)

type EagerPrayerTime = {
  readonly type: PrayerType | keyof typeof PrayerType;
  readonly athan: string;
  readonly iqamah: string;
}

type LazyPrayerTime = {
  readonly type: PrayerType | keyof typeof PrayerType;
  readonly athan: string;
  readonly iqamah: string;
}

export declare type PrayerTime = LazyLoading extends LazyLoadingDisabled ? EagerPrayerTime : LazyPrayerTime

export declare const PrayerTime: (new (init: ModelInit<PrayerTime>) => PrayerTime)

type EagerOperatingHours = {
  readonly open: string;
  readonly close: string;
}

type LazyOperatingHours = {
  readonly open: string;
  readonly close: string;
}

export declare type OperatingHours = LazyLoading extends LazyLoadingDisabled ? EagerOperatingHours : LazyOperatingHours

export declare const OperatingHours: (new (init: ModelInit<OperatingHours>) => OperatingHours)

type EagerDay = {
  readonly type: DayType | keyof typeof DayType;
  readonly operatingHours?: OperatingHours[] | null;
}

type LazyDay = {
  readonly type: DayType | keyof typeof DayType;
  readonly operatingHours?: OperatingHours[] | null;
}

export declare type Day = LazyLoading extends LazyLoadingDisabled ? EagerDay : LazyDay

export declare const Day: (new (init: ModelInit<Day>) => Day)

type EagerHours = {
  readonly monday?: Day | null;
  readonly tuesday?: Day | null;
  readonly wednesday?: Day | null;
  readonly thursday?: Day | null;
  readonly friday?: Day | null;
  readonly saturday?: Day | null;
  readonly sunday?: Day | null;
}

type LazyHours = {
  readonly monday?: Day | null;
  readonly tuesday?: Day | null;
  readonly wednesday?: Day | null;
  readonly thursday?: Day | null;
  readonly friday?: Day | null;
  readonly saturday?: Day | null;
  readonly sunday?: Day | null;
}

export declare type Hours = LazyLoading extends LazyLoadingDisabled ? EagerHours : LazyHours

export declare const Hours: (new (init: ModelInit<Hours>) => Hours)

type EagerLocation = {
  readonly addressLine1: string;
  readonly addressLine2?: string | null;
  readonly city: string;
  readonly province: string;
  readonly postalCode: string;
  readonly country: string;
  readonly latitude: number;
  readonly longitude: number;
}

type LazyLocation = {
  readonly addressLine1: string;
  readonly addressLine2?: string | null;
  readonly city: string;
  readonly province: string;
  readonly postalCode: string;
  readonly country: string;
  readonly latitude: number;
  readonly longitude: number;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerSocialMedia = {
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
}

type LazySocialMedia = {
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
}

export declare type SocialMedia = LazyLoading extends LazyLoadingDisabled ? EagerSocialMedia : LazySocialMedia

export declare const SocialMedia: (new (init: ModelInit<SocialMedia>) => SocialMedia)

type EagerAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly mosqueId: string;
  readonly mosque?: Mosque | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<Mosque | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Announcement = LazyLoading extends LazyLoadingDisabled ? EagerAnnouncement : LazyAnnouncement

export declare const Announcement: (new (init: ModelInit<Announcement>) => Announcement) & {
  copyOf(source: Announcement, mutator: (draft: MutableModel<Announcement>) => MutableModel<Announcement> | void): Announcement;
}

type EagerClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly startDateTime: string;
  readonly endDateTime?: string | null;
  readonly recurring: boolean;
  readonly daysOfWeek?: DayType[] | keyof typeof DayType | null;
  readonly instructorId: string;
  readonly instructor?: User | null;
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly mosqueId: string;
  readonly mosque?: Mosque | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly startDateTime: string;
  readonly endDateTime?: string | null;
  readonly recurring: boolean;
  readonly daysOfWeek?: DayType[] | keyof typeof DayType | null;
  readonly instructorId: string;
  readonly instructor: AsyncItem<User | undefined>;
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<Mosque | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Class = LazyLoading extends LazyLoadingDisabled ? EagerClass : LazyClass

export declare const Class: (new (init: ModelInit<Class>) => Class) & {
  copyOf(source: Class, mutator: (draft: MutableModel<Class>) => MutableModel<Class> | void): Class;
}

type EagerCommittee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Committee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly mosqueId: string;
  readonly mosque?: Mosque | null;
  readonly members?: (CommitteeMembers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommittee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Committee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<Mosque | undefined>;
  readonly members: AsyncCollection<CommitteeMembers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Committee = LazyLoading extends LazyLoadingDisabled ? EagerCommittee : LazyCommittee

export declare const Committee: (new (init: ModelInit<Committee>) => Committee) & {
  copyOf(source: Committee, mutator: (draft: MutableModel<Committee>) => MutableModel<Committee> | void): Committee;
}

type EagerGathering = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gathering, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly gatheringType: GatheringType | keyof typeof GatheringType;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly location: Location;
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly mosqueId: string;
  readonly mosque?: Mosque | null;
  readonly attendees?: (GatheringAttendees | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGathering = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gathering, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly gatheringType: GatheringType | keyof typeof GatheringType;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly location: Location;
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<Mosque | undefined>;
  readonly attendees: AsyncCollection<GatheringAttendees>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Gathering = LazyLoading extends LazyLoadingDisabled ? EagerGathering : LazyGathering

export declare const Gathering: (new (init: ModelInit<Gathering>) => Gathering) & {
  copyOf(source: Gathering, mutator: (draft: MutableModel<Gathering>) => MutableModel<Gathering> | void): Gathering;
}

type EagerDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly currency: string;
  readonly isAnonymous: boolean;
  readonly donorId: string;
  readonly donor?: User | null;
  readonly fundraisingCampaignId: string;
  readonly fundraisingCampaign?: FundraisingCampaign | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly currency: string;
  readonly isAnonymous: boolean;
  readonly donorId: string;
  readonly donor: AsyncItem<User | undefined>;
  readonly fundraisingCampaignId: string;
  readonly fundraisingCampaign: AsyncItem<FundraisingCampaign | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donation = LazyLoading extends LazyLoadingDisabled ? EagerDonation : LazyDonation

export declare const Donation: (new (init: ModelInit<Donation>) => Donation) & {
  copyOf(source: Donation, mutator: (draft: MutableModel<Donation>) => MutableModel<Donation> | void): Donation;
}

type EagerFundraisingCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FundraisingCampaign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly featureImage?: string | null;
  readonly type: FundraisingCampaignType | keyof typeof FundraisingCampaignType;
  readonly goal: number;
  readonly goalDate: string;
  readonly currentAmount: number;
  readonly currency: string;
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly mosqueId: string;
  readonly mosque?: Mosque | null;
  readonly donations?: (Donation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFundraisingCampaign = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FundraisingCampaign, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly featureImage?: string | null;
  readonly type: FundraisingCampaignType | keyof typeof FundraisingCampaignType;
  readonly goal: number;
  readonly goalDate: string;
  readonly currentAmount: number;
  readonly currency: string;
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<Mosque | undefined>;
  readonly donations: AsyncCollection<Donation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FundraisingCampaign = LazyLoading extends LazyLoadingDisabled ? EagerFundraisingCampaign : LazyFundraisingCampaign

export declare const FundraisingCampaign: (new (init: ModelInit<FundraisingCampaign>) => FundraisingCampaign) & {
  copyOf(source: FundraisingCampaign, mutator: (draft: MutableModel<FundraisingCampaign>) => MutableModel<FundraisingCampaign> | void): FundraisingCampaign;
}

type EagerMosque = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mosque, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly location: Location;
  readonly hours: Hours;
  readonly contactInfo?: ContactInfo | null;
  readonly liveVideoUrl?: string | null;
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly followers?: (MosqueFollowers | null)[] | null;
  readonly announcements?: (Announcement | null)[] | null;
  readonly classes?: (Class | null)[] | null;
  readonly committees?: (Committee | null)[] | null;
  readonly gatherings?: (Gathering | null)[] | null;
  readonly fundraisingCampaigns?: (FundraisingCampaign | null)[] | null;
  readonly monthlyPrayerSchedules?: (MonthlyPrayerSchedule | null)[] | null;
  readonly resources?: (Resource | null)[] | null;
  readonly services?: (Service | null)[] | null;
  readonly volunteerTasks?: (VolunteerTask | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMosque = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mosque, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly location: Location;
  readonly hours: Hours;
  readonly contactInfo?: ContactInfo | null;
  readonly liveVideoUrl?: string | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly followers: AsyncCollection<MosqueFollowers>;
  readonly announcements: AsyncCollection<Announcement>;
  readonly classes: AsyncCollection<Class>;
  readonly committees: AsyncCollection<Committee>;
  readonly gatherings: AsyncCollection<Gathering>;
  readonly fundraisingCampaigns: AsyncCollection<FundraisingCampaign>;
  readonly monthlyPrayerSchedules: AsyncCollection<MonthlyPrayerSchedule>;
  readonly resources: AsyncCollection<Resource>;
  readonly services: AsyncCollection<Service>;
  readonly volunteerTasks: AsyncCollection<VolunteerTask>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mosque = LazyLoading extends LazyLoadingDisabled ? EagerMosque : LazyMosque

export declare const Mosque: (new (init: ModelInit<Mosque>) => Mosque) & {
  copyOf(source: Mosque, mutator: (draft: MutableModel<Mosque>) => MutableModel<Mosque> | void): Mosque;
}

type EagerMonthlyPrayerSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MonthlyPrayerSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly year: number;
  readonly month: number;
  readonly prayerTimes: PrayerTime[];
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly mosqueId: string;
  readonly mosque?: Mosque | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMonthlyPrayerSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MonthlyPrayerSchedule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly year: number;
  readonly month: number;
  readonly prayerTimes: PrayerTime[];
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<Mosque | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MonthlyPrayerSchedule = LazyLoading extends LazyLoadingDisabled ? EagerMonthlyPrayerSchedule : LazyMonthlyPrayerSchedule

export declare const MonthlyPrayerSchedule: (new (init: ModelInit<MonthlyPrayerSchedule>) => MonthlyPrayerSchedule) & {
  copyOf(source: MonthlyPrayerSchedule, mutator: (draft: MutableModel<MonthlyPrayerSchedule>) => MutableModel<MonthlyPrayerSchedule> | void): MonthlyPrayerSchedule;
}

type EagerResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly type: ResourceType | keyof typeof ResourceType;
  readonly url: string;
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly mosqueId: string;
  readonly mosque?: Mosque | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly type: ResourceType | keyof typeof ResourceType;
  readonly url: string;
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<Mosque | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resource = LazyLoading extends LazyLoadingDisabled ? EagerResource : LazyResource

export declare const Resource: (new (init: ModelInit<Resource>) => Resource) & {
  copyOf(source: Resource, mutator: (draft: MutableModel<Resource>) => MutableModel<Resource> | void): Resource;
}

type EagerService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: ServiceType | keyof typeof ServiceType;
  readonly description?: string | null;
  readonly documents?: (string | null)[] | null;
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly mosqueId: string;
  readonly mosque?: Mosque | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: ServiceType | keyof typeof ServiceType;
  readonly description?: string | null;
  readonly documents?: (string | null)[] | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<Mosque | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Service = LazyLoading extends LazyLoadingDisabled ? EagerService : LazyService

export declare const Service: (new (init: ModelInit<Service>) => Service) & {
  copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly selfie?: string | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly type: UserType | keyof typeof UserType;
  readonly status: UserStatus | keyof typeof UserStatus;
  readonly createdAnnouncements?: (Announcement | null)[] | null;
  readonly createdClasses?: (Class | null)[] | null;
  readonly createdCommittees?: (Committee | null)[] | null;
  readonly createdGatherings?: (Gathering | null)[] | null;
  readonly createdFundraisingCampaigns?: (FundraisingCampaign | null)[] | null;
  readonly createdMonthlyPrayerSchedules?: (MonthlyPrayerSchedule | null)[] | null;
  readonly createdMosques?: (Mosque | null)[] | null;
  readonly createdResources?: (Resource | null)[] | null;
  readonly createdServices?: (Service | null)[] | null;
  readonly createdVolunteerTasks?: (VolunteerTask | null)[] | null;
  readonly instructingClasses?: (Class | null)[] | null;
  readonly donations?: (Donation | null)[] | null;
  readonly committees?: (CommitteeMembers | null)[] | null;
  readonly gatherings?: (GatheringAttendees | null)[] | null;
  readonly mosques?: (MosqueFollowers | null)[] | null;
  readonly volunteerTasks?: (VolunteerTaskUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly selfie?: string | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly type: UserType | keyof typeof UserType;
  readonly status: UserStatus | keyof typeof UserStatus;
  readonly createdAnnouncements: AsyncCollection<Announcement>;
  readonly createdClasses: AsyncCollection<Class>;
  readonly createdCommittees: AsyncCollection<Committee>;
  readonly createdGatherings: AsyncCollection<Gathering>;
  readonly createdFundraisingCampaigns: AsyncCollection<FundraisingCampaign>;
  readonly createdMonthlyPrayerSchedules: AsyncCollection<MonthlyPrayerSchedule>;
  readonly createdMosques: AsyncCollection<Mosque>;
  readonly createdResources: AsyncCollection<Resource>;
  readonly createdServices: AsyncCollection<Service>;
  readonly createdVolunteerTasks: AsyncCollection<VolunteerTask>;
  readonly instructingClasses: AsyncCollection<Class>;
  readonly donations: AsyncCollection<Donation>;
  readonly committees: AsyncCollection<CommitteeMembers>;
  readonly gatherings: AsyncCollection<GatheringAttendees>;
  readonly mosques: AsyncCollection<MosqueFollowers>;
  readonly volunteerTasks: AsyncCollection<VolunteerTaskUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerVolunteerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VolunteerTask, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly creatorId: string;
  readonly creator?: User | null;
  readonly mosqueId: string;
  readonly mosque?: Mosque | null;
  readonly volunteers?: (VolunteerTaskUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVolunteerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VolunteerTask, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<User | undefined>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<Mosque | undefined>;
  readonly volunteers: AsyncCollection<VolunteerTaskUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VolunteerTask = LazyLoading extends LazyLoadingDisabled ? EagerVolunteerTask : LazyVolunteerTask

export declare const VolunteerTask: (new (init: ModelInit<VolunteerTask>) => VolunteerTask) & {
  copyOf(source: VolunteerTask, mutator: (draft: MutableModel<VolunteerTask>) => MutableModel<VolunteerTask> | void): VolunteerTask;
}

type EagerCommitteeMembers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommitteeMembers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly committeeId?: string | null;
  readonly userId?: string | null;
  readonly committee: Committee;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommitteeMembers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommitteeMembers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly committeeId?: string | null;
  readonly userId?: string | null;
  readonly committee: AsyncItem<Committee>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommitteeMembers = LazyLoading extends LazyLoadingDisabled ? EagerCommitteeMembers : LazyCommitteeMembers

export declare const CommitteeMembers: (new (init: ModelInit<CommitteeMembers>) => CommitteeMembers) & {
  copyOf(source: CommitteeMembers, mutator: (draft: MutableModel<CommitteeMembers>) => MutableModel<CommitteeMembers> | void): CommitteeMembers;
}

type EagerGatheringAttendees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GatheringAttendees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gatheringId?: string | null;
  readonly userId?: string | null;
  readonly gathering: Gathering;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGatheringAttendees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GatheringAttendees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gatheringId?: string | null;
  readonly userId?: string | null;
  readonly gathering: AsyncItem<Gathering>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GatheringAttendees = LazyLoading extends LazyLoadingDisabled ? EagerGatheringAttendees : LazyGatheringAttendees

export declare const GatheringAttendees: (new (init: ModelInit<GatheringAttendees>) => GatheringAttendees) & {
  copyOf(source: GatheringAttendees, mutator: (draft: MutableModel<GatheringAttendees>) => MutableModel<GatheringAttendees> | void): GatheringAttendees;
}

type EagerMosqueFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MosqueFollowers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mosqueId?: string | null;
  readonly userId?: string | null;
  readonly mosque: Mosque;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMosqueFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MosqueFollowers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mosqueId?: string | null;
  readonly userId?: string | null;
  readonly mosque: AsyncItem<Mosque>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MosqueFollowers = LazyLoading extends LazyLoadingDisabled ? EagerMosqueFollowers : LazyMosqueFollowers

export declare const MosqueFollowers: (new (init: ModelInit<MosqueFollowers>) => MosqueFollowers) & {
  copyOf(source: MosqueFollowers, mutator: (draft: MutableModel<MosqueFollowers>) => MutableModel<MosqueFollowers> | void): MosqueFollowers;
}

type EagerVolunteerTaskUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VolunteerTaskUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly volunteerTaskId?: string | null;
  readonly user: User;
  readonly volunteerTask: VolunteerTask;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVolunteerTaskUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VolunteerTaskUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly volunteerTaskId?: string | null;
  readonly user: AsyncItem<User>;
  readonly volunteerTask: AsyncItem<VolunteerTask>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VolunteerTaskUser = LazyLoading extends LazyLoadingDisabled ? EagerVolunteerTaskUser : LazyVolunteerTaskUser

export declare const VolunteerTaskUser: (new (init: ModelInit<VolunteerTaskUser>) => VolunteerTaskUser) & {
  copyOf(source: VolunteerTaskUser, mutator: (draft: MutableModel<VolunteerTaskUser>) => MutableModel<VolunteerTaskUser> | void): VolunteerTaskUser;
}