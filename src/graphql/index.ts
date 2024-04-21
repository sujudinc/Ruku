import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

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

export enum MosqueSubscriptionStatus {
  LIFETIME = "LIFETIME",
  TRIAL = "TRIAL",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export enum PrayerType {
  FAJR = "FAJR",
  THUHR = "THUHR",
  ASR = "ASR",
  MAGHRIB = "MAGHRIB",
  ISHA = "ISHA",
  JUMUAH = "JUMUAH",
  EID_AL_FITR = "EID_AL_FITR",
  EID_AL_ADHA = "EID_AL_ADHA",
  TAHAJJUD = "TAHAJJUD",
  TARAWEH = "TARAWEH"
}

export enum ResourceType {
  ARTICLE = "ARTICLE",
  AUDIO = "AUDIO",
  VIDEO = "VIDEO",
  BOOK = "BOOK",
  OTHER = "OTHER"
}

export enum ServiceType {
  ADVICE = "ADVICE",
  FIQH = "FIQH",
  MARRIAGE = "MARRIAGE",
  FUNERAL = "FUNERAL",
  COUNSELING = "COUNSELING",
  OTHER = "OTHER"
}

export enum UploadType {
  SELFIE = "SELFIE",
  MOSQUE = "MOSQUE",
  RESOURCE = "RESOURCE",
  GATHERING_PICTURE = "GATHERING_PICTURE",
  FUNDRAISING_CAMPAIGN_PICTURE = "FUNDRAISING_CAMPAIGN_PICTURE",
  MONTHLY_PRAYER_SCHEDULE_PICTURE = "MONTHLY_PRAYER_SCHEDULE_PICTURE",
  VOLUNTEER_TASK_PICTURE = "VOLUNTEER_TASK_PICTURE"
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

type EagerAnnouncementModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly images?: (string | null)[] | null;
  readonly bookmarks?: (BookmarkModel | null)[] | null;
  readonly likes?: (LikeModel | null)[] | null;
  readonly comments?: (CommentModel | null)[] | null;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnnouncementModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly images?: (string | null)[] | null;
  readonly bookmarks: AsyncCollection<BookmarkModel>;
  readonly likes: AsyncCollection<LikeModel>;
  readonly comments: AsyncCollection<CommentModel>;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AnnouncementModel = LazyLoading extends LazyLoadingDisabled ? EagerAnnouncementModel : LazyAnnouncementModel

export declare const AnnouncementModel: (new (init: ModelInit<AnnouncementModel>) => AnnouncementModel) & {
  copyOf(source: AnnouncementModel, mutator: (draft: MutableModel<AnnouncementModel>) => MutableModel<AnnouncementModel> | void): AnnouncementModel;
}

type EagerBookmarkModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bookmark, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly announcementId: string;
  readonly announcement: AnnouncementModel;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBookmarkModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bookmark, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly announcementId: string;
  readonly announcement: AsyncItem<AnnouncementModel>;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BookmarkModel = LazyLoading extends LazyLoadingDisabled ? EagerBookmarkModel : LazyBookmarkModel

export declare const BookmarkModel: (new (init: ModelInit<BookmarkModel>) => BookmarkModel) & {
  copyOf(source: BookmarkModel, mutator: (draft: MutableModel<BookmarkModel>) => MutableModel<BookmarkModel> | void): BookmarkModel;
}

type EagerClassModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly startDateTime: string;
  readonly endDateTime?: string | null;
  readonly recurring: boolean;
  readonly daysOfWeek?: DayType[] | Array<keyof typeof DayType> | null;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly instructorId: string;
  readonly instructor: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClassModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Class, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly startDateTime: string;
  readonly endDateTime?: string | null;
  readonly recurring: boolean;
  readonly daysOfWeek?: DayType[] | Array<keyof typeof DayType> | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly instructorId: string;
  readonly instructor: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ClassModel = LazyLoading extends LazyLoadingDisabled ? EagerClassModel : LazyClassModel

export declare const ClassModel: (new (init: ModelInit<ClassModel>) => ClassModel) & {
  copyOf(source: ClassModel, mutator: (draft: MutableModel<ClassModel>) => MutableModel<ClassModel> | void): ClassModel;
}

type EagerCommentModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly parentCommentId?: string | null;
  readonly parentComment?: CommentModel | null;
  readonly subComments?: (CommentModel | null)[] | null;
  readonly announcementId: string;
  readonly announcement: AnnouncementModel;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommentModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly parentCommentId?: string | null;
  readonly parentComment: AsyncItem<CommentModel | undefined>;
  readonly subComments: AsyncCollection<CommentModel>;
  readonly announcementId: string;
  readonly announcement: AsyncItem<AnnouncementModel>;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommentModel = LazyLoading extends LazyLoadingDisabled ? EagerCommentModel : LazyCommentModel

export declare const CommentModel: (new (init: ModelInit<CommentModel>) => CommentModel) & {
  copyOf(source: CommentModel, mutator: (draft: MutableModel<CommentModel>) => MutableModel<CommentModel> | void): CommentModel;
}

type EagerCommitteeModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Committee, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly members?: (CommitteeMembersModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommitteeModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Committee, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly members: AsyncCollection<CommitteeMembersModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommitteeModel = LazyLoading extends LazyLoadingDisabled ? EagerCommitteeModel : LazyCommitteeModel

export declare const CommitteeModel: (new (init: ModelInit<CommitteeModel>) => CommitteeModel) & {
  copyOf(source: CommitteeModel, mutator: (draft: MutableModel<CommitteeModel>) => MutableModel<CommitteeModel> | void): CommitteeModel;
}

type EagerGatheringModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gathering, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly type: GatheringType | keyof typeof GatheringType;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly attendees?: (GatheringAttendeesModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGatheringModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gathering, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly type: GatheringType | keyof typeof GatheringType;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly attendees: AsyncCollection<GatheringAttendeesModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GatheringModel = LazyLoading extends LazyLoadingDisabled ? EagerGatheringModel : LazyGatheringModel

export declare const GatheringModel: (new (init: ModelInit<GatheringModel>) => GatheringModel) & {
  copyOf(source: GatheringModel, mutator: (draft: MutableModel<GatheringModel>) => MutableModel<GatheringModel> | void): GatheringModel;
}

type EagerDonationModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
  };
  readonly id: string;
  readonly amount: number;
  readonly currency: string;
  readonly isAnonymous: boolean;
  readonly donorId: string;
  readonly donor: UserModel;
  readonly fundraisingCampaignId: string;
  readonly fundraisingCampaign?: FundraisingCampaignModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonationModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
  };
  readonly id: string;
  readonly amount: number;
  readonly currency: string;
  readonly isAnonymous: boolean;
  readonly donorId: string;
  readonly donor: AsyncItem<UserModel>;
  readonly fundraisingCampaignId: string;
  readonly fundraisingCampaign: AsyncItem<FundraisingCampaignModel | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DonationModel = LazyLoading extends LazyLoadingDisabled ? EagerDonationModel : LazyDonationModel

export declare const DonationModel: (new (init: ModelInit<DonationModel>) => DonationModel) & {
  copyOf(source: DonationModel, mutator: (draft: MutableModel<DonationModel>) => MutableModel<DonationModel> | void): DonationModel;
}

type EagerFundraisingCampaignModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FundraisingCampaign, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly featureImage?: string | null;
  readonly type: FundraisingCampaignType | keyof typeof FundraisingCampaignType;
  readonly currentAmount: number;
  readonly goal: number;
  readonly goalDate: string;
  readonly currency: string;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly donations?: (DonationModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFundraisingCampaignModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FundraisingCampaign, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly featureImage?: string | null;
  readonly type: FundraisingCampaignType | keyof typeof FundraisingCampaignType;
  readonly currentAmount: number;
  readonly goal: number;
  readonly goalDate: string;
  readonly currency: string;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly donations: AsyncCollection<DonationModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FundraisingCampaignModel = LazyLoading extends LazyLoadingDisabled ? EagerFundraisingCampaignModel : LazyFundraisingCampaignModel

export declare const FundraisingCampaignModel: (new (init: ModelInit<FundraisingCampaignModel>) => FundraisingCampaignModel) & {
  copyOf(source: FundraisingCampaignModel, mutator: (draft: MutableModel<FundraisingCampaignModel>) => MutableModel<FundraisingCampaignModel> | void): FundraisingCampaignModel;
}

type EagerLikeModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly announcementId: string;
  readonly announcement: AnnouncementModel;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLikeModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly announcementId: string;
  readonly announcement: AsyncItem<AnnouncementModel>;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LikeModel = LazyLoading extends LazyLoadingDisabled ? EagerLikeModel : LazyLikeModel

export declare const LikeModel: (new (init: ModelInit<LikeModel>) => LikeModel) & {
  copyOf(source: LikeModel, mutator: (draft: MutableModel<LikeModel>) => MutableModel<LikeModel> | void): LikeModel;
}

type EagerMonthlyPrayerScheduleModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MonthlyPrayerSchedule, 'id'>;
  };
  readonly id: string;
  readonly year: number;
  readonly month: number;
  readonly prayerTimes: PrayerTime[];
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMonthlyPrayerScheduleModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MonthlyPrayerSchedule, 'id'>;
  };
  readonly id: string;
  readonly year: number;
  readonly month: number;
  readonly prayerTimes: PrayerTime[];
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MonthlyPrayerScheduleModel = LazyLoading extends LazyLoadingDisabled ? EagerMonthlyPrayerScheduleModel : LazyMonthlyPrayerScheduleModel

export declare const MonthlyPrayerScheduleModel: (new (init: ModelInit<MonthlyPrayerScheduleModel>) => MonthlyPrayerScheduleModel) & {
  copyOf(source: MonthlyPrayerScheduleModel, mutator: (draft: MutableModel<MonthlyPrayerScheduleModel>) => MutableModel<MonthlyPrayerScheduleModel> | void): MonthlyPrayerScheduleModel;
}

type EagerMosqueModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mosque, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly images: string[];
  readonly address: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly hours?: Hours | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
  readonly socialMedia?: SocialMedia | null;
  readonly liveVideoUrl?: string | null;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly followers?: (MosqueFollowersModel | null)[] | null;
  readonly announcements?: (AnnouncementModel | null)[] | null;
  readonly classes?: (ClassModel | null)[] | null;
  readonly committees?: (CommitteeModel | null)[] | null;
  readonly gatherings?: (GatheringModel | null)[] | null;
  readonly fundraisingCampaigns?: (FundraisingCampaignModel | null)[] | null;
  readonly monthlyPrayerSchedules?: (MonthlyPrayerScheduleModel | null)[] | null;
  readonly resources?: (ResourceModel | null)[] | null;
  readonly services?: (ServiceModel | null)[] | null;
  readonly subscriptions?: (MosqueSubscriptionModel | null)[] | null;
  readonly volunteerTasks?: (VolunteerTaskModel | null)[] | null;
  readonly bookmarks?: (BookmarkModel | null)[] | null;
  readonly likes?: (LikeModel | null)[] | null;
  readonly comments?: (CommentModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMosqueModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mosque, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly images: string[];
  readonly address: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly hours?: Hours | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
  readonly socialMedia?: SocialMedia | null;
  readonly liveVideoUrl?: string | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly followers: AsyncCollection<MosqueFollowersModel>;
  readonly announcements: AsyncCollection<AnnouncementModel>;
  readonly classes: AsyncCollection<ClassModel>;
  readonly committees: AsyncCollection<CommitteeModel>;
  readonly gatherings: AsyncCollection<GatheringModel>;
  readonly fundraisingCampaigns: AsyncCollection<FundraisingCampaignModel>;
  readonly monthlyPrayerSchedules: AsyncCollection<MonthlyPrayerScheduleModel>;
  readonly resources: AsyncCollection<ResourceModel>;
  readonly services: AsyncCollection<ServiceModel>;
  readonly subscriptions: AsyncCollection<MosqueSubscriptionModel>;
  readonly volunteerTasks: AsyncCollection<VolunteerTaskModel>;
  readonly bookmarks: AsyncCollection<BookmarkModel>;
  readonly likes: AsyncCollection<LikeModel>;
  readonly comments: AsyncCollection<CommentModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MosqueModel = LazyLoading extends LazyLoadingDisabled ? EagerMosqueModel : LazyMosqueModel

export declare const MosqueModel: (new (init: ModelInit<MosqueModel>) => MosqueModel) & {
  copyOf(source: MosqueModel, mutator: (draft: MutableModel<MosqueModel>) => MutableModel<MosqueModel> | void): MosqueModel;
}

type EagerMosqueSubscriptionModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MosqueSubscription, 'id'>;
  };
  readonly id: string;
  readonly status: MosqueSubscriptionStatus | keyof typeof MosqueSubscriptionStatus;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly stripeSubscriptionId: string;
  readonly purchaserId: string;
  readonly purchaser: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMosqueSubscriptionModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MosqueSubscription, 'id'>;
  };
  readonly id: string;
  readonly status: MosqueSubscriptionStatus | keyof typeof MosqueSubscriptionStatus;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly stripeSubscriptionId: string;
  readonly purchaserId: string;
  readonly purchaser: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MosqueSubscriptionModel = LazyLoading extends LazyLoadingDisabled ? EagerMosqueSubscriptionModel : LazyMosqueSubscriptionModel

export declare const MosqueSubscriptionModel: (new (init: ModelInit<MosqueSubscriptionModel>) => MosqueSubscriptionModel) & {
  copyOf(source: MosqueSubscriptionModel, mutator: (draft: MutableModel<MosqueSubscriptionModel>) => MutableModel<MosqueSubscriptionModel> | void): MosqueSubscriptionModel;
}

type EagerResourceModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly type: ResourceType | keyof typeof ResourceType;
  readonly url: string;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResourceModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly type: ResourceType | keyof typeof ResourceType;
  readonly url: string;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ResourceModel = LazyLoading extends LazyLoadingDisabled ? EagerResourceModel : LazyResourceModel

export declare const ResourceModel: (new (init: ModelInit<ResourceModel>) => ResourceModel) & {
  copyOf(source: ResourceModel, mutator: (draft: MutableModel<ResourceModel>) => MutableModel<ResourceModel> | void): ResourceModel;
}

type EagerServiceModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
  };
  readonly id: string;
  readonly type: ServiceType | keyof typeof ServiceType;
  readonly description?: string | null;
  readonly documents?: (string | null)[] | null;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
  };
  readonly id: string;
  readonly type: ServiceType | keyof typeof ServiceType;
  readonly description?: string | null;
  readonly documents?: (string | null)[] | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceModel = LazyLoading extends LazyLoadingDisabled ? EagerServiceModel : LazyServiceModel

export declare const ServiceModel: (new (init: ModelInit<ServiceModel>) => ServiceModel) & {
  copyOf(source: ServiceModel, mutator: (draft: MutableModel<ServiceModel>) => MutableModel<ServiceModel> | void): ServiceModel;
}

type EagerUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly selfie?: string | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly type: UserType | keyof typeof UserType;
  readonly status: UserStatus | keyof typeof UserStatus;
  readonly stripeCustomerId?: string | null;
  readonly bookmarks?: (BookmarkModel | null)[] | null;
  readonly comments?: (CommentModel | null)[] | null;
  readonly createdAnnouncements?: (AnnouncementModel | null)[] | null;
  readonly createdClasses?: (ClassModel | null)[] | null;
  readonly createdCommittees?: (CommitteeModel | null)[] | null;
  readonly createdGatherings?: (GatheringModel | null)[] | null;
  readonly createdFundraisingCampaigns?: (FundraisingCampaignModel | null)[] | null;
  readonly createdMonthlyPrayerSchedules?: (MonthlyPrayerScheduleModel | null)[] | null;
  readonly createdMosques?: (MosqueModel | null)[] | null;
  readonly createdResources?: (ResourceModel | null)[] | null;
  readonly createdServices?: (ServiceModel | null)[] | null;
  readonly createdVolunteerTasks?: (VolunteerTaskModel | null)[] | null;
  readonly donations?: (DonationModel | null)[] | null;
  readonly committees?: (CommitteeMembersModel | null)[] | null;
  readonly gatherings?: (GatheringAttendeesModel | null)[] | null;
  readonly instructingClasses?: (ClassModel | null)[] | null;
  readonly mosques?: (MosqueFollowersModel | null)[] | null;
  readonly purchasedSubscriptions?: (MosqueSubscriptionModel | null)[] | null;
  readonly volunteerTasks?: (VolunteerTaskUserModel | null)[] | null;
  readonly likes?: (LikeModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly selfie?: string | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly type: UserType | keyof typeof UserType;
  readonly status: UserStatus | keyof typeof UserStatus;
  readonly stripeCustomerId?: string | null;
  readonly bookmarks: AsyncCollection<BookmarkModel>;
  readonly comments: AsyncCollection<CommentModel>;
  readonly createdAnnouncements: AsyncCollection<AnnouncementModel>;
  readonly createdClasses: AsyncCollection<ClassModel>;
  readonly createdCommittees: AsyncCollection<CommitteeModel>;
  readonly createdGatherings: AsyncCollection<GatheringModel>;
  readonly createdFundraisingCampaigns: AsyncCollection<FundraisingCampaignModel>;
  readonly createdMonthlyPrayerSchedules: AsyncCollection<MonthlyPrayerScheduleModel>;
  readonly createdMosques: AsyncCollection<MosqueModel>;
  readonly createdResources: AsyncCollection<ResourceModel>;
  readonly createdServices: AsyncCollection<ServiceModel>;
  readonly createdVolunteerTasks: AsyncCollection<VolunteerTaskModel>;
  readonly donations: AsyncCollection<DonationModel>;
  readonly committees: AsyncCollection<CommitteeMembersModel>;
  readonly gatherings: AsyncCollection<GatheringAttendeesModel>;
  readonly instructingClasses: AsyncCollection<ClassModel>;
  readonly mosques: AsyncCollection<MosqueFollowersModel>;
  readonly purchasedSubscriptions: AsyncCollection<MosqueSubscriptionModel>;
  readonly volunteerTasks: AsyncCollection<VolunteerTaskUserModel>;
  readonly likes: AsyncCollection<LikeModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel>) => UserModel) & {
  copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel>) => MutableModel<UserModel> | void): UserModel;
}

type EagerVolunteerTaskModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VolunteerTask, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly creatorId: string;
  readonly creator: UserModel;
  readonly mosqueId: string;
  readonly mosque: MosqueModel;
  readonly volunteers?: (VolunteerTaskUserModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVolunteerTaskModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VolunteerTask, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly startDate: string;
  readonly endDate?: string | null;
  readonly creatorId: string;
  readonly creator: AsyncItem<UserModel>;
  readonly mosqueId: string;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly volunteers: AsyncCollection<VolunteerTaskUserModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VolunteerTaskModel = LazyLoading extends LazyLoadingDisabled ? EagerVolunteerTaskModel : LazyVolunteerTaskModel

export declare const VolunteerTaskModel: (new (init: ModelInit<VolunteerTaskModel>) => VolunteerTaskModel) & {
  copyOf(source: VolunteerTaskModel, mutator: (draft: MutableModel<VolunteerTaskModel>) => MutableModel<VolunteerTaskModel> | void): VolunteerTaskModel;
}

type EagerCommitteeMembersModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommitteeMembers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly committeeId?: string | null;
  readonly userId?: string | null;
  readonly committee: CommitteeModel;
  readonly user: UserModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommitteeMembersModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommitteeMembers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly committeeId?: string | null;
  readonly userId?: string | null;
  readonly committee: AsyncItem<CommitteeModel>;
  readonly user: AsyncItem<UserModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommitteeMembersModel = LazyLoading extends LazyLoadingDisabled ? EagerCommitteeMembersModel : LazyCommitteeMembersModel

export declare const CommitteeMembersModel: (new (init: ModelInit<CommitteeMembersModel>) => CommitteeMembersModel) & {
  copyOf(source: CommitteeMembersModel, mutator: (draft: MutableModel<CommitteeMembersModel>) => MutableModel<CommitteeMembersModel> | void): CommitteeMembersModel;
}

type EagerGatheringAttendeesModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GatheringAttendees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gatheringId?: string | null;
  readonly userId?: string | null;
  readonly gathering: GatheringModel;
  readonly user: UserModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGatheringAttendeesModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GatheringAttendees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gatheringId?: string | null;
  readonly userId?: string | null;
  readonly gathering: AsyncItem<GatheringModel>;
  readonly user: AsyncItem<UserModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GatheringAttendeesModel = LazyLoading extends LazyLoadingDisabled ? EagerGatheringAttendeesModel : LazyGatheringAttendeesModel

export declare const GatheringAttendeesModel: (new (init: ModelInit<GatheringAttendeesModel>) => GatheringAttendeesModel) & {
  copyOf(source: GatheringAttendeesModel, mutator: (draft: MutableModel<GatheringAttendeesModel>) => MutableModel<GatheringAttendeesModel> | void): GatheringAttendeesModel;
}

type EagerMosqueFollowersModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MosqueFollowers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mosqueId?: string | null;
  readonly userId?: string | null;
  readonly mosque: MosqueModel;
  readonly user: UserModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMosqueFollowersModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MosqueFollowers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mosqueId?: string | null;
  readonly userId?: string | null;
  readonly mosque: AsyncItem<MosqueModel>;
  readonly user: AsyncItem<UserModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MosqueFollowersModel = LazyLoading extends LazyLoadingDisabled ? EagerMosqueFollowersModel : LazyMosqueFollowersModel

export declare const MosqueFollowersModel: (new (init: ModelInit<MosqueFollowersModel>) => MosqueFollowersModel) & {
  copyOf(source: MosqueFollowersModel, mutator: (draft: MutableModel<MosqueFollowersModel>) => MutableModel<MosqueFollowersModel> | void): MosqueFollowersModel;
}

type EagerVolunteerTaskUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VolunteerTaskUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly volunteerTaskId?: string | null;
  readonly user: UserModel;
  readonly volunteerTask: VolunteerTaskModel;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVolunteerTaskUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VolunteerTaskUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly volunteerTaskId?: string | null;
  readonly user: AsyncItem<UserModel>;
  readonly volunteerTask: AsyncItem<VolunteerTaskModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VolunteerTaskUserModel = LazyLoading extends LazyLoadingDisabled ? EagerVolunteerTaskUserModel : LazyVolunteerTaskUserModel

export declare const VolunteerTaskUserModel: (new (init: ModelInit<VolunteerTaskUserModel>) => VolunteerTaskUserModel) & {
  copyOf(source: VolunteerTaskUserModel, mutator: (draft: MutableModel<VolunteerTaskUserModel>) => MutableModel<VolunteerTaskUserModel> | void): VolunteerTaskUserModel;
}

type EagerDayModel = {
  readonly type: DayType | keyof typeof DayType;
  readonly operatingHours: OperatingHours[];
}

type LazyDayModel = {
  readonly type: DayType | keyof typeof DayType;
  readonly operatingHours: OperatingHours[];
}

export declare type DayModel = LazyLoading extends LazyLoadingDisabled ? EagerDayModel : LazyDayModel

export declare const DayModel: (new (init: ModelInit<DayModel>) => DayModel)

type EagerHoursModel = {
  readonly monday?: Day | null;
  readonly tuesday?: Day | null;
  readonly wednesday?: Day | null;
  readonly thursday?: Day | null;
  readonly friday?: Day | null;
  readonly saturday?: Day | null;
  readonly sunday?: Day | null;
}

type LazyHoursModel = {
  readonly monday?: Day | null;
  readonly tuesday?: Day | null;
  readonly wednesday?: Day | null;
  readonly thursday?: Day | null;
  readonly friday?: Day | null;
  readonly saturday?: Day | null;
  readonly sunday?: Day | null;
}

export declare type HoursModel = LazyLoading extends LazyLoadingDisabled ? EagerHoursModel : LazyHoursModel

export declare const HoursModel: (new (init: ModelInit<HoursModel>) => HoursModel)

type EagerOperatingHoursModel = {
  readonly open: string;
  readonly close: string;
}

type LazyOperatingHoursModel = {
  readonly open: string;
  readonly close: string;
}

export declare type OperatingHoursModel = LazyLoading extends LazyLoadingDisabled ? EagerOperatingHoursModel : LazyOperatingHoursModel

export declare const OperatingHoursModel: (new (init: ModelInit<OperatingHoursModel>) => OperatingHoursModel)

type EagerPrayerTimeModel = {
  readonly type: PrayerType | keyof typeof PrayerType;
  readonly athan: string;
  readonly iqamah: string;
}

type LazyPrayerTimeModel = {
  readonly type: PrayerType | keyof typeof PrayerType;
  readonly athan: string;
  readonly iqamah: string;
}

export declare type PrayerTimeModel = LazyLoading extends LazyLoadingDisabled ? EagerPrayerTimeModel : LazyPrayerTimeModel

export declare const PrayerTimeModel: (new (init: ModelInit<PrayerTimeModel>) => PrayerTimeModel)

type EagerSocialMediaModel = {
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly twitter?: string | null;
  readonly youtube?: string | null;
}

type LazySocialMediaModel = {
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly twitter?: string | null;
  readonly youtube?: string | null;
}

export declare type SocialMediaModel = LazyLoading extends LazyLoadingDisabled ? EagerSocialMediaModel : LazySocialMediaModel

export declare const SocialMediaModel: (new (init: ModelInit<SocialMediaModel>) => SocialMediaModel)

const { Announcement, Bookmark, Class, Comment, Committee, Gathering, Donation, FundraisingCampaign, Like, MonthlyPrayerSchedule, Mosque, MosqueSubscription, Resource, Service, User, VolunteerTask, CommitteeMembers, GatheringAttendees, MosqueFollowers, VolunteerTaskUser, Day, Hours, OperatingHours, PrayerTime, SocialMedia } = initSchema(schema) as {
  Announcement: PersistentModelConstructor<AnnouncementModel>;
  Bookmark: PersistentModelConstructor<BookmarkModel>;
  Class: PersistentModelConstructor<ClassModel>;
  Comment: PersistentModelConstructor<CommentModel>;
  Committee: PersistentModelConstructor<CommitteeModel>;
  Gathering: PersistentModelConstructor<GatheringModel>;
  Donation: PersistentModelConstructor<DonationModel>;
  FundraisingCampaign: PersistentModelConstructor<FundraisingCampaignModel>;
  Like: PersistentModelConstructor<LikeModel>;
  MonthlyPrayerSchedule: PersistentModelConstructor<MonthlyPrayerScheduleModel>;
  Mosque: PersistentModelConstructor<MosqueModel>;
  MosqueSubscription: PersistentModelConstructor<MosqueSubscriptionModel>;
  Resource: PersistentModelConstructor<ResourceModel>;
  Service: PersistentModelConstructor<ServiceModel>;
  User: PersistentModelConstructor<UserModel>;
  VolunteerTask: PersistentModelConstructor<VolunteerTaskModel>;
  CommitteeMembers: PersistentModelConstructor<CommitteeMembersModel>;
  GatheringAttendees: PersistentModelConstructor<GatheringAttendeesModel>;
  MosqueFollowers: PersistentModelConstructor<MosqueFollowersModel>;
  VolunteerTaskUser: PersistentModelConstructor<VolunteerTaskUserModel>;
  Day: PersistentModelConstructor<DayModel>;
  Hours: PersistentModelConstructor<HoursModel>;
  OperatingHours: PersistentModelConstructor<OperatingHoursModel>;
  PrayerTime: PersistentModelConstructor<PrayerTimeModel>;
  SocialMedia: PersistentModelConstructor<SocialMediaModel>;
};

export {
  Announcement,
  Bookmark,
  Class,
  Comment,
  Committee,
  Gathering,
  Donation,
  FundraisingCampaign,
  Like,
  MonthlyPrayerSchedule,
  Mosque,
  MosqueSubscription,
  Resource,
  Service,
  User,
  VolunteerTask,
  CommitteeMembers,
  GatheringAttendees,
  MosqueFollowers,
  VolunteerTaskUser
};