/*
* Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License").
* You may not use this file except in compliance with the License.
* A copy of the License is located at
*
*  http://aws.amazon.com/apache2.0
*
* or in the "license" file accompanying this file. This file is distributed
* on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
* express or implied. See the License for the specific language governing
* permissions and limitations under the License.
*/

// NOTE: This file is generated and may not follow lint rules defined in your app
// Generated files can be excluded from analysis in analysis_options.yaml
// For more info, see: https://dart.dev/guides/language/analysis-options#excluding-code-from-analysis

// ignore_for_file: public_member_api_docs, annotate_overrides, dead_code, dead_codepublic_member_api_docs, depend_on_referenced_packages, file_names, library_private_types_in_public_api, no_leading_underscores_for_library_prefixes, no_leading_underscores_for_local_identifiers, non_constant_identifier_names, null_check_on_nullable_type_parameter, override_on_non_overriding_member, prefer_adjacent_string_concatenation, prefer_const_constructors, prefer_if_null_operators, prefer_interpolation_to_compose_strings, slash_for_doc_comments, sort_child_properties_last, unnecessary_const, unnecessary_constructor_name, unnecessary_late, unnecessary_new, unnecessary_null_aware_assignments, unnecessary_nullable_for_final_variable_declarations, unnecessary_string_interpolations, use_build_context_synchronously

import 'ModelProvider.dart';
import 'package:amplify_core/amplify_core.dart' as amplify_core;
import 'package:collection/collection.dart';


/** This is an auto generated class representing the User type in your schema. */
class User extends amplify_core.Model {
  static const classType = const _UserModelType();
  final String id;
  final String? _selfie;
  final String? _firstName;
  final String? _lastName;
  final String? _email;
  final String? _phone;
  final UserType? _type;
  final UserStatus? _status;
  final String? _stripeCustomerId;
  final bool? _isOnline;
  final List<Bookmark>? _bookmarks;
  final List<Comment>? _comments;
  final List<Announcement>? _createdAnnouncements;
  final List<FundraisingCampaign>? _createdFundraisingCampaigns;
  final List<PrayerTime>? _createdPrayerTimes;
  final List<Organization>? _createdOrganizations;
  final List<Mosque>? _createdMosques;
  final List<Donation>? _donations;
  final List<MosqueFollower>? _mosques;
  final List<OrganizationMember>? _organizations;
  final List<Like>? _likes;
  final List<PrayerTime>? _updatedPrayerTimes;
  final amplify_core.TemporalDateTime? _createdAt;
  final amplify_core.TemporalDateTime? _updatedAt;
  final String? _owner;

  @override
  getInstanceType() => classType;
  
  @Deprecated('[getId] is being deprecated in favor of custom primary key feature. Use getter [modelIdentifier] to get model identifier.')
  @override
  String getId() => id;
  
  UserModelIdentifier get modelIdentifier {
      return UserModelIdentifier(
        id: id
      );
  }
  
  String? get selfie {
    return _selfie;
  }
  
  String get firstName {
    try {
      return _firstName!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get lastName {
    try {
      return _lastName!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get email {
    try {
      return _email!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String? get phone {
    return _phone;
  }
  
  UserType get type {
    try {
      return _type!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  UserStatus get status {
    try {
      return _status!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String? get stripeCustomerId {
    return _stripeCustomerId;
  }
  
  bool? get isOnline {
    return _isOnline;
  }
  
  List<Bookmark>? get bookmarks {
    return _bookmarks;
  }
  
  List<Comment>? get comments {
    return _comments;
  }
  
  List<Announcement>? get createdAnnouncements {
    return _createdAnnouncements;
  }
  
  List<FundraisingCampaign>? get createdFundraisingCampaigns {
    return _createdFundraisingCampaigns;
  }
  
  List<PrayerTime>? get createdPrayerTimes {
    return _createdPrayerTimes;
  }
  
  List<Organization>? get createdOrganizations {
    return _createdOrganizations;
  }
  
  List<Mosque>? get createdMosques {
    return _createdMosques;
  }
  
  List<Donation>? get donations {
    return _donations;
  }
  
  List<MosqueFollower>? get mosques {
    return _mosques;
  }
  
  List<OrganizationMember>? get organizations {
    return _organizations;
  }
  
  List<Like>? get likes {
    return _likes;
  }
  
  List<PrayerTime>? get updatedPrayerTimes {
    return _updatedPrayerTimes;
  }
  
  amplify_core.TemporalDateTime get createdAt {
    try {
      return _createdAt!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  amplify_core.TemporalDateTime get updatedAt {
    try {
      return _updatedAt!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String? get owner {
    return _owner;
  }
  
  const User._internal({required this.id, selfie, required firstName, required lastName, required email, phone, required type, required status, stripeCustomerId, isOnline, bookmarks, comments, createdAnnouncements, createdFundraisingCampaigns, createdPrayerTimes, createdOrganizations, createdMosques, donations, mosques, organizations, likes, updatedPrayerTimes, required createdAt, required updatedAt, owner}): _selfie = selfie, _firstName = firstName, _lastName = lastName, _email = email, _phone = phone, _type = type, _status = status, _stripeCustomerId = stripeCustomerId, _isOnline = isOnline, _bookmarks = bookmarks, _comments = comments, _createdAnnouncements = createdAnnouncements, _createdFundraisingCampaigns = createdFundraisingCampaigns, _createdPrayerTimes = createdPrayerTimes, _createdOrganizations = createdOrganizations, _createdMosques = createdMosques, _donations = donations, _mosques = mosques, _organizations = organizations, _likes = likes, _updatedPrayerTimes = updatedPrayerTimes, _createdAt = createdAt, _updatedAt = updatedAt, _owner = owner;
  
  factory User({String? id, String? selfie, required String firstName, required String lastName, required String email, String? phone, required UserType type, required UserStatus status, String? stripeCustomerId, bool? isOnline, List<Bookmark>? bookmarks, List<Comment>? comments, List<Announcement>? createdAnnouncements, List<FundraisingCampaign>? createdFundraisingCampaigns, List<PrayerTime>? createdPrayerTimes, List<Organization>? createdOrganizations, List<Mosque>? createdMosques, List<Donation>? donations, List<MosqueFollower>? mosques, List<OrganizationMember>? organizations, List<Like>? likes, List<PrayerTime>? updatedPrayerTimes, required amplify_core.TemporalDateTime createdAt, required amplify_core.TemporalDateTime updatedAt, String? owner}) {
    return User._internal(
      id: id == null ? amplify_core.UUID.getUUID() : id,
      selfie: selfie,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      type: type,
      status: status,
      stripeCustomerId: stripeCustomerId,
      isOnline: isOnline,
      bookmarks: bookmarks != null ? List<Bookmark>.unmodifiable(bookmarks) : bookmarks,
      comments: comments != null ? List<Comment>.unmodifiable(comments) : comments,
      createdAnnouncements: createdAnnouncements != null ? List<Announcement>.unmodifiable(createdAnnouncements) : createdAnnouncements,
      createdFundraisingCampaigns: createdFundraisingCampaigns != null ? List<FundraisingCampaign>.unmodifiable(createdFundraisingCampaigns) : createdFundraisingCampaigns,
      createdPrayerTimes: createdPrayerTimes != null ? List<PrayerTime>.unmodifiable(createdPrayerTimes) : createdPrayerTimes,
      createdOrganizations: createdOrganizations != null ? List<Organization>.unmodifiable(createdOrganizations) : createdOrganizations,
      createdMosques: createdMosques != null ? List<Mosque>.unmodifiable(createdMosques) : createdMosques,
      donations: donations != null ? List<Donation>.unmodifiable(donations) : donations,
      mosques: mosques != null ? List<MosqueFollower>.unmodifiable(mosques) : mosques,
      organizations: organizations != null ? List<OrganizationMember>.unmodifiable(organizations) : organizations,
      likes: likes != null ? List<Like>.unmodifiable(likes) : likes,
      updatedPrayerTimes: updatedPrayerTimes != null ? List<PrayerTime>.unmodifiable(updatedPrayerTimes) : updatedPrayerTimes,
      createdAt: createdAt,
      updatedAt: updatedAt,
      owner: owner);
  }
  
  bool equals(Object other) {
    return this == other;
  }
  
  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is User &&
      id == other.id &&
      _selfie == other._selfie &&
      _firstName == other._firstName &&
      _lastName == other._lastName &&
      _email == other._email &&
      _phone == other._phone &&
      _type == other._type &&
      _status == other._status &&
      _stripeCustomerId == other._stripeCustomerId &&
      _isOnline == other._isOnline &&
      DeepCollectionEquality().equals(_bookmarks, other._bookmarks) &&
      DeepCollectionEquality().equals(_comments, other._comments) &&
      DeepCollectionEquality().equals(_createdAnnouncements, other._createdAnnouncements) &&
      DeepCollectionEquality().equals(_createdFundraisingCampaigns, other._createdFundraisingCampaigns) &&
      DeepCollectionEquality().equals(_createdPrayerTimes, other._createdPrayerTimes) &&
      DeepCollectionEquality().equals(_createdOrganizations, other._createdOrganizations) &&
      DeepCollectionEquality().equals(_createdMosques, other._createdMosques) &&
      DeepCollectionEquality().equals(_donations, other._donations) &&
      DeepCollectionEquality().equals(_mosques, other._mosques) &&
      DeepCollectionEquality().equals(_organizations, other._organizations) &&
      DeepCollectionEquality().equals(_likes, other._likes) &&
      DeepCollectionEquality().equals(_updatedPrayerTimes, other._updatedPrayerTimes) &&
      _createdAt == other._createdAt &&
      _updatedAt == other._updatedAt &&
      _owner == other._owner;
  }
  
  @override
  int get hashCode => toString().hashCode;
  
  @override
  String toString() {
    var buffer = new StringBuffer();
    
    buffer.write("User {");
    buffer.write("id=" + "$id" + ", ");
    buffer.write("selfie=" + "$_selfie" + ", ");
    buffer.write("firstName=" + "$_firstName" + ", ");
    buffer.write("lastName=" + "$_lastName" + ", ");
    buffer.write("email=" + "$_email" + ", ");
    buffer.write("phone=" + "$_phone" + ", ");
    buffer.write("type=" + (_type != null ? amplify_core.enumToString(_type)! : "null") + ", ");
    buffer.write("status=" + (_status != null ? amplify_core.enumToString(_status)! : "null") + ", ");
    buffer.write("stripeCustomerId=" + "$_stripeCustomerId" + ", ");
    buffer.write("isOnline=" + (_isOnline != null ? _isOnline!.toString() : "null") + ", ");
    buffer.write("createdAt=" + (_createdAt != null ? _createdAt!.format() : "null") + ", ");
    buffer.write("updatedAt=" + (_updatedAt != null ? _updatedAt!.format() : "null") + ", ");
    buffer.write("owner=" + "$_owner");
    buffer.write("}");
    
    return buffer.toString();
  }
  
  User copyWith({String? selfie, String? firstName, String? lastName, String? email, String? phone, UserType? type, UserStatus? status, String? stripeCustomerId, bool? isOnline, List<Bookmark>? bookmarks, List<Comment>? comments, List<Announcement>? createdAnnouncements, List<FundraisingCampaign>? createdFundraisingCampaigns, List<PrayerTime>? createdPrayerTimes, List<Organization>? createdOrganizations, List<Mosque>? createdMosques, List<Donation>? donations, List<MosqueFollower>? mosques, List<OrganizationMember>? organizations, List<Like>? likes, List<PrayerTime>? updatedPrayerTimes, amplify_core.TemporalDateTime? createdAt, amplify_core.TemporalDateTime? updatedAt, String? owner}) {
    return User._internal(
      id: id,
      selfie: selfie ?? this.selfie,
      firstName: firstName ?? this.firstName,
      lastName: lastName ?? this.lastName,
      email: email ?? this.email,
      phone: phone ?? this.phone,
      type: type ?? this.type,
      status: status ?? this.status,
      stripeCustomerId: stripeCustomerId ?? this.stripeCustomerId,
      isOnline: isOnline ?? this.isOnline,
      bookmarks: bookmarks ?? this.bookmarks,
      comments: comments ?? this.comments,
      createdAnnouncements: createdAnnouncements ?? this.createdAnnouncements,
      createdFundraisingCampaigns: createdFundraisingCampaigns ?? this.createdFundraisingCampaigns,
      createdPrayerTimes: createdPrayerTimes ?? this.createdPrayerTimes,
      createdOrganizations: createdOrganizations ?? this.createdOrganizations,
      createdMosques: createdMosques ?? this.createdMosques,
      donations: donations ?? this.donations,
      mosques: mosques ?? this.mosques,
      organizations: organizations ?? this.organizations,
      likes: likes ?? this.likes,
      updatedPrayerTimes: updatedPrayerTimes ?? this.updatedPrayerTimes,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      owner: owner ?? this.owner);
  }
  
  User copyWithModelFieldValues({
    ModelFieldValue<String?>? selfie,
    ModelFieldValue<String>? firstName,
    ModelFieldValue<String>? lastName,
    ModelFieldValue<String>? email,
    ModelFieldValue<String?>? phone,
    ModelFieldValue<UserType>? type,
    ModelFieldValue<UserStatus>? status,
    ModelFieldValue<String?>? stripeCustomerId,
    ModelFieldValue<bool?>? isOnline,
    ModelFieldValue<List<Bookmark>?>? bookmarks,
    ModelFieldValue<List<Comment>?>? comments,
    ModelFieldValue<List<Announcement>?>? createdAnnouncements,
    ModelFieldValue<List<FundraisingCampaign>?>? createdFundraisingCampaigns,
    ModelFieldValue<List<PrayerTime>?>? createdPrayerTimes,
    ModelFieldValue<List<Organization>?>? createdOrganizations,
    ModelFieldValue<List<Mosque>?>? createdMosques,
    ModelFieldValue<List<Donation>?>? donations,
    ModelFieldValue<List<MosqueFollower>?>? mosques,
    ModelFieldValue<List<OrganizationMember>?>? organizations,
    ModelFieldValue<List<Like>?>? likes,
    ModelFieldValue<List<PrayerTime>?>? updatedPrayerTimes,
    ModelFieldValue<amplify_core.TemporalDateTime>? createdAt,
    ModelFieldValue<amplify_core.TemporalDateTime>? updatedAt,
    ModelFieldValue<String?>? owner
  }) {
    return User._internal(
      id: id,
      selfie: selfie == null ? this.selfie : selfie.value,
      firstName: firstName == null ? this.firstName : firstName.value,
      lastName: lastName == null ? this.lastName : lastName.value,
      email: email == null ? this.email : email.value,
      phone: phone == null ? this.phone : phone.value,
      type: type == null ? this.type : type.value,
      status: status == null ? this.status : status.value,
      stripeCustomerId: stripeCustomerId == null ? this.stripeCustomerId : stripeCustomerId.value,
      isOnline: isOnline == null ? this.isOnline : isOnline.value,
      bookmarks: bookmarks == null ? this.bookmarks : bookmarks.value,
      comments: comments == null ? this.comments : comments.value,
      createdAnnouncements: createdAnnouncements == null ? this.createdAnnouncements : createdAnnouncements.value,
      createdFundraisingCampaigns: createdFundraisingCampaigns == null ? this.createdFundraisingCampaigns : createdFundraisingCampaigns.value,
      createdPrayerTimes: createdPrayerTimes == null ? this.createdPrayerTimes : createdPrayerTimes.value,
      createdOrganizations: createdOrganizations == null ? this.createdOrganizations : createdOrganizations.value,
      createdMosques: createdMosques == null ? this.createdMosques : createdMosques.value,
      donations: donations == null ? this.donations : donations.value,
      mosques: mosques == null ? this.mosques : mosques.value,
      organizations: organizations == null ? this.organizations : organizations.value,
      likes: likes == null ? this.likes : likes.value,
      updatedPrayerTimes: updatedPrayerTimes == null ? this.updatedPrayerTimes : updatedPrayerTimes.value,
      createdAt: createdAt == null ? this.createdAt : createdAt.value,
      updatedAt: updatedAt == null ? this.updatedAt : updatedAt.value,
      owner: owner == null ? this.owner : owner.value
    );
  }
  
  User.fromJson(Map<String, dynamic> json)  
    : id = json['id'],
      _selfie = json['selfie'],
      _firstName = json['firstName'],
      _lastName = json['lastName'],
      _email = json['email'],
      _phone = json['phone'],
      _type = amplify_core.enumFromString<UserType>(json['type'], UserType.values),
      _status = amplify_core.enumFromString<UserStatus>(json['status'], UserStatus.values),
      _stripeCustomerId = json['stripeCustomerId'],
      _isOnline = json['isOnline'],
      _bookmarks = json['bookmarks']  is Map
        ? (json['bookmarks']['items'] is List
          ? (json['bookmarks']['items'] as List)
              .where((e) => e != null)
              .map((e) => Bookmark.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['bookmarks'] is List
          ? (json['bookmarks'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => Bookmark.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _comments = json['comments']  is Map
        ? (json['comments']['items'] is List
          ? (json['comments']['items'] as List)
              .where((e) => e != null)
              .map((e) => Comment.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['comments'] is List
          ? (json['comments'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => Comment.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _createdAnnouncements = json['createdAnnouncements']  is Map
        ? (json['createdAnnouncements']['items'] is List
          ? (json['createdAnnouncements']['items'] as List)
              .where((e) => e != null)
              .map((e) => Announcement.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['createdAnnouncements'] is List
          ? (json['createdAnnouncements'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => Announcement.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _createdFundraisingCampaigns = json['createdFundraisingCampaigns']  is Map
        ? (json['createdFundraisingCampaigns']['items'] is List
          ? (json['createdFundraisingCampaigns']['items'] as List)
              .where((e) => e != null)
              .map((e) => FundraisingCampaign.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['createdFundraisingCampaigns'] is List
          ? (json['createdFundraisingCampaigns'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => FundraisingCampaign.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _createdPrayerTimes = json['createdPrayerTimes']  is Map
        ? (json['createdPrayerTimes']['items'] is List
          ? (json['createdPrayerTimes']['items'] as List)
              .where((e) => e != null)
              .map((e) => PrayerTime.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['createdPrayerTimes'] is List
          ? (json['createdPrayerTimes'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => PrayerTime.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _createdOrganizations = json['createdOrganizations']  is Map
        ? (json['createdOrganizations']['items'] is List
          ? (json['createdOrganizations']['items'] as List)
              .where((e) => e != null)
              .map((e) => Organization.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['createdOrganizations'] is List
          ? (json['createdOrganizations'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => Organization.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _createdMosques = json['createdMosques']  is Map
        ? (json['createdMosques']['items'] is List
          ? (json['createdMosques']['items'] as List)
              .where((e) => e != null)
              .map((e) => Mosque.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['createdMosques'] is List
          ? (json['createdMosques'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => Mosque.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _donations = json['donations']  is Map
        ? (json['donations']['items'] is List
          ? (json['donations']['items'] as List)
              .where((e) => e != null)
              .map((e) => Donation.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['donations'] is List
          ? (json['donations'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => Donation.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _mosques = json['mosques']  is Map
        ? (json['mosques']['items'] is List
          ? (json['mosques']['items'] as List)
              .where((e) => e != null)
              .map((e) => MosqueFollower.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['mosques'] is List
          ? (json['mosques'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => MosqueFollower.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _organizations = json['organizations']  is Map
        ? (json['organizations']['items'] is List
          ? (json['organizations']['items'] as List)
              .where((e) => e != null)
              .map((e) => OrganizationMember.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['organizations'] is List
          ? (json['organizations'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => OrganizationMember.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _likes = json['likes']  is Map
        ? (json['likes']['items'] is List
          ? (json['likes']['items'] as List)
              .where((e) => e != null)
              .map((e) => Like.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['likes'] is List
          ? (json['likes'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => Like.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _updatedPrayerTimes = json['updatedPrayerTimes']  is Map
        ? (json['updatedPrayerTimes']['items'] is List
          ? (json['updatedPrayerTimes']['items'] as List)
              .where((e) => e != null)
              .map((e) => PrayerTime.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['updatedPrayerTimes'] is List
          ? (json['updatedPrayerTimes'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => PrayerTime.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _createdAt = json['createdAt'] != null ? amplify_core.TemporalDateTime.fromString(json['createdAt']) : null,
      _updatedAt = json['updatedAt'] != null ? amplify_core.TemporalDateTime.fromString(json['updatedAt']) : null,
      _owner = json['owner'];
  
  Map<String, dynamic> toJson() => {
    'id': id, 'selfie': _selfie, 'firstName': _firstName, 'lastName': _lastName, 'email': _email, 'phone': _phone, 'type': amplify_core.enumToString(_type), 'status': amplify_core.enumToString(_status), 'stripeCustomerId': _stripeCustomerId, 'isOnline': _isOnline, 'bookmarks': _bookmarks?.map((Bookmark? e) => e?.toJson()).toList(), 'comments': _comments?.map((Comment? e) => e?.toJson()).toList(), 'createdAnnouncements': _createdAnnouncements?.map((Announcement? e) => e?.toJson()).toList(), 'createdFundraisingCampaigns': _createdFundraisingCampaigns?.map((FundraisingCampaign? e) => e?.toJson()).toList(), 'createdPrayerTimes': _createdPrayerTimes?.map((PrayerTime? e) => e?.toJson()).toList(), 'createdOrganizations': _createdOrganizations?.map((Organization? e) => e?.toJson()).toList(), 'createdMosques': _createdMosques?.map((Mosque? e) => e?.toJson()).toList(), 'donations': _donations?.map((Donation? e) => e?.toJson()).toList(), 'mosques': _mosques?.map((MosqueFollower? e) => e?.toJson()).toList(), 'organizations': _organizations?.map((OrganizationMember? e) => e?.toJson()).toList(), 'likes': _likes?.map((Like? e) => e?.toJson()).toList(), 'updatedPrayerTimes': _updatedPrayerTimes?.map((PrayerTime? e) => e?.toJson()).toList(), 'createdAt': _createdAt?.format(), 'updatedAt': _updatedAt?.format(), 'owner': _owner
  };
  
  Map<String, Object?> toMap() => {
    'id': id,
    'selfie': _selfie,
    'firstName': _firstName,
    'lastName': _lastName,
    'email': _email,
    'phone': _phone,
    'type': _type,
    'status': _status,
    'stripeCustomerId': _stripeCustomerId,
    'isOnline': _isOnline,
    'bookmarks': _bookmarks,
    'comments': _comments,
    'createdAnnouncements': _createdAnnouncements,
    'createdFundraisingCampaigns': _createdFundraisingCampaigns,
    'createdPrayerTimes': _createdPrayerTimes,
    'createdOrganizations': _createdOrganizations,
    'createdMosques': _createdMosques,
    'donations': _donations,
    'mosques': _mosques,
    'organizations': _organizations,
    'likes': _likes,
    'updatedPrayerTimes': _updatedPrayerTimes,
    'createdAt': _createdAt,
    'updatedAt': _updatedAt,
    'owner': _owner
  };

  static final amplify_core.QueryModelIdentifier<UserModelIdentifier> MODEL_IDENTIFIER = amplify_core.QueryModelIdentifier<UserModelIdentifier>();
  static final ID = amplify_core.QueryField(fieldName: "id");
  static final SELFIE = amplify_core.QueryField(fieldName: "selfie");
  static final FIRSTNAME = amplify_core.QueryField(fieldName: "firstName");
  static final LASTNAME = amplify_core.QueryField(fieldName: "lastName");
  static final EMAIL = amplify_core.QueryField(fieldName: "email");
  static final PHONE = amplify_core.QueryField(fieldName: "phone");
  static final TYPE = amplify_core.QueryField(fieldName: "type");
  static final STATUS = amplify_core.QueryField(fieldName: "status");
  static final STRIPECUSTOMERID = amplify_core.QueryField(fieldName: "stripeCustomerId");
  static final ISONLINE = amplify_core.QueryField(fieldName: "isOnline");
  static final BOOKMARKS = amplify_core.QueryField(
    fieldName: "bookmarks",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Bookmark'));
  static final COMMENTS = amplify_core.QueryField(
    fieldName: "comments",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Comment'));
  static final CREATEDANNOUNCEMENTS = amplify_core.QueryField(
    fieldName: "createdAnnouncements",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Announcement'));
  static final CREATEDFUNDRAISINGCAMPAIGNS = amplify_core.QueryField(
    fieldName: "createdFundraisingCampaigns",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'FundraisingCampaign'));
  static final CREATEDPRAYERTIMES = amplify_core.QueryField(
    fieldName: "createdPrayerTimes",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'PrayerTime'));
  static final CREATEDORGANIZATIONS = amplify_core.QueryField(
    fieldName: "createdOrganizations",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Organization'));
  static final CREATEDMOSQUES = amplify_core.QueryField(
    fieldName: "createdMosques",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Mosque'));
  static final DONATIONS = amplify_core.QueryField(
    fieldName: "donations",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Donation'));
  static final MOSQUES = amplify_core.QueryField(
    fieldName: "mosques",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'MosqueFollower'));
  static final ORGANIZATIONS = amplify_core.QueryField(
    fieldName: "organizations",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'OrganizationMember'));
  static final LIKES = amplify_core.QueryField(
    fieldName: "likes",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Like'));
  static final UPDATEDPRAYERTIMES = amplify_core.QueryField(
    fieldName: "updatedPrayerTimes",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'PrayerTime'));
  static final CREATEDAT = amplify_core.QueryField(fieldName: "createdAt");
  static final UPDATEDAT = amplify_core.QueryField(fieldName: "updatedAt");
  static final OWNER = amplify_core.QueryField(fieldName: "owner");
  static var schema = amplify_core.Model.defineSchema(define: (amplify_core.ModelSchemaDefinition modelSchemaDefinition) {
    modelSchemaDefinition.name = "User";
    modelSchemaDefinition.pluralName = "Users";
    
    modelSchemaDefinition.authRules = [
      amplify_core.AuthRule(
        authStrategy: amplify_core.AuthStrategy.OWNER,
        ownerField: "owner",
        identityClaim: "cognito:username",
        provider: amplify_core.AuthRuleProvider.USERPOOLS,
        operations: const [
          amplify_core.ModelOperation.CREATE,
          amplify_core.ModelOperation.UPDATE,
          amplify_core.ModelOperation.DELETE,
          amplify_core.ModelOperation.READ
        ]),
      amplify_core.AuthRule(
        authStrategy: amplify_core.AuthStrategy.PRIVATE,
        operations: const [
          amplify_core.ModelOperation.READ
        ]),
      amplify_core.AuthRule(
        authStrategy: amplify_core.AuthStrategy.PUBLIC,
        operations: const [
          amplify_core.ModelOperation.READ
        ])
    ];
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.id());
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.SELFIE,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.FIRSTNAME,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.LASTNAME,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.EMAIL,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.PHONE,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.TYPE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.enumeration)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.STATUS,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.enumeration)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.STRIPECUSTOMERID,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.ISONLINE,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.bool)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.BOOKMARKS,
      isRequired: false,
      ofModelName: 'Bookmark',
      associatedKey: Bookmark.CREATOR
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.COMMENTS,
      isRequired: false,
      ofModelName: 'Comment',
      associatedKey: Comment.CREATOR
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.CREATEDANNOUNCEMENTS,
      isRequired: false,
      ofModelName: 'Announcement',
      associatedKey: Announcement.CREATOR
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.CREATEDFUNDRAISINGCAMPAIGNS,
      isRequired: false,
      ofModelName: 'FundraisingCampaign',
      associatedKey: FundraisingCampaign.CREATOR
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.CREATEDPRAYERTIMES,
      isRequired: false,
      ofModelName: 'PrayerTime',
      associatedKey: PrayerTime.CREATEDBYUSER
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.CREATEDORGANIZATIONS,
      isRequired: false,
      ofModelName: 'Organization',
      associatedKey: Organization.CREATOR
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.CREATEDMOSQUES,
      isRequired: false,
      ofModelName: 'Mosque',
      associatedKey: Mosque.CREATOR
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.DONATIONS,
      isRequired: false,
      ofModelName: 'Donation',
      associatedKey: Donation.DONOR
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.MOSQUES,
      isRequired: false,
      ofModelName: 'MosqueFollower',
      associatedKey: MosqueFollower.USER
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.ORGANIZATIONS,
      isRequired: false,
      ofModelName: 'OrganizationMember',
      associatedKey: OrganizationMember.USER
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.LIKES,
      isRequired: false,
      ofModelName: 'Like',
      associatedKey: Like.CREATOR
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: User.UPDATEDPRAYERTIMES,
      isRequired: false,
      ofModelName: 'PrayerTime',
      associatedKey: PrayerTime.UPDATEDBYUSER
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.CREATEDAT,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.UPDATEDAT,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: User.OWNER,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
  });
}

class _UserModelType extends amplify_core.ModelType<User> {
  const _UserModelType();
  
  @override
  User fromJson(Map<String, dynamic> jsonData) {
    return User.fromJson(jsonData);
  }
  
  @override
  String modelName() {
    return 'User';
  }
}

/**
 * This is an auto generated class representing the model identifier
 * of [User] in your schema.
 */
class UserModelIdentifier implements amplify_core.ModelIdentifier<User> {
  final String id;

  /** Create an instance of UserModelIdentifier using [id] the primary key. */
  const UserModelIdentifier({
    required this.id});
  
  @override
  Map<String, dynamic> serializeAsMap() => (<String, dynamic>{
    'id': id
  });
  
  @override
  List<Map<String, dynamic>> serializeAsList() => serializeAsMap()
    .entries
    .map((entry) => (<String, dynamic>{ entry.key: entry.value }))
    .toList();
  
  @override
  String serializeAsString() => serializeAsMap().values.join('#');
  
  @override
  String toString() => 'UserModelIdentifier(id: $id)';
  
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    
    return other is UserModelIdentifier &&
      id == other.id;
  }
  
  @override
  int get hashCode =>
    id.hashCode;
}