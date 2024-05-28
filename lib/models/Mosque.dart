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


/** This is an auto generated class representing the Mosque type in your schema. */
class Mosque extends amplify_core.Model {
  static const classType = const _MosqueModelType();
  final String id;
  final String? _name;
  final String? _description;
  final List<String>? _images;
  final String? _address;
  final double? _latitude;
  final double? _longitude;
  final Hours? _hours;
  final String? _phone;
  final String? _email;
  final String? _website;
  final SocialMedia? _socialMedia;
  final String? _liveVideoUrl;
  final bool? _isVerified;
  final User? _creator;
  final Organization? _organization;
  final List<MosqueFollower>? _followers;
  final List<Announcement>? _announcements;
  final List<FundraisingCampaign>? _fundraisingCampaigns;
  final List<PrayerTime>? _prayerTimes;
  final List<Bookmark>? _bookmarks;
  final List<Like>? _likes;
  final List<Comment>? _comments;
  final amplify_core.TemporalDateTime? _createdAt;
  final amplify_core.TemporalDateTime? _updatedAt;

  @override
  getInstanceType() => classType;
  
  @Deprecated('[getId] is being deprecated in favor of custom primary key feature. Use getter [modelIdentifier] to get model identifier.')
  @override
  String getId() => id;
  
  MosqueModelIdentifier get modelIdentifier {
      return MosqueModelIdentifier(
        id: id
      );
  }
  
  String get name {
    try {
      return _name!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get description {
    try {
      return _description!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  List<String> get images {
    try {
      return _images!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get address {
    try {
      return _address!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  double get latitude {
    try {
      return _latitude!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  double get longitude {
    try {
      return _longitude!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  Hours? get hours {
    return _hours;
  }
  
  String? get phone {
    return _phone;
  }
  
  String? get email {
    return _email;
  }
  
  String? get website {
    return _website;
  }
  
  SocialMedia? get socialMedia {
    return _socialMedia;
  }
  
  String? get liveVideoUrl {
    return _liveVideoUrl;
  }
  
  bool get isVerified {
    try {
      return _isVerified!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  User get creator {
    try {
      return _creator!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  Organization? get organization {
    return _organization;
  }
  
  List<MosqueFollower>? get followers {
    return _followers;
  }
  
  List<Announcement>? get announcements {
    return _announcements;
  }
  
  List<FundraisingCampaign>? get fundraisingCampaigns {
    return _fundraisingCampaigns;
  }
  
  List<PrayerTime>? get prayerTimes {
    return _prayerTimes;
  }
  
  List<Bookmark>? get bookmarks {
    return _bookmarks;
  }
  
  List<Like>? get likes {
    return _likes;
  }
  
  List<Comment>? get comments {
    return _comments;
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
  
  const Mosque._internal({required this.id, required name, required description, required images, required address, required latitude, required longitude, hours, phone, email, website, socialMedia, liveVideoUrl, required isVerified, required creator, organization, followers, announcements, fundraisingCampaigns, prayerTimes, bookmarks, likes, comments, required createdAt, required updatedAt}): _name = name, _description = description, _images = images, _address = address, _latitude = latitude, _longitude = longitude, _hours = hours, _phone = phone, _email = email, _website = website, _socialMedia = socialMedia, _liveVideoUrl = liveVideoUrl, _isVerified = isVerified, _creator = creator, _organization = organization, _followers = followers, _announcements = announcements, _fundraisingCampaigns = fundraisingCampaigns, _prayerTimes = prayerTimes, _bookmarks = bookmarks, _likes = likes, _comments = comments, _createdAt = createdAt, _updatedAt = updatedAt;
  
  factory Mosque({String? id, required String name, required String description, required List<String> images, required String address, required double latitude, required double longitude, Hours? hours, String? phone, String? email, String? website, SocialMedia? socialMedia, String? liveVideoUrl, required bool isVerified, required User creator, Organization? organization, List<MosqueFollower>? followers, List<Announcement>? announcements, List<FundraisingCampaign>? fundraisingCampaigns, List<PrayerTime>? prayerTimes, List<Bookmark>? bookmarks, List<Like>? likes, List<Comment>? comments, required amplify_core.TemporalDateTime createdAt, required amplify_core.TemporalDateTime updatedAt}) {
    return Mosque._internal(
      id: id == null ? amplify_core.UUID.getUUID() : id,
      name: name,
      description: description,
      images: images != null ? List<String>.unmodifiable(images) : images,
      address: address,
      latitude: latitude,
      longitude: longitude,
      hours: hours,
      phone: phone,
      email: email,
      website: website,
      socialMedia: socialMedia,
      liveVideoUrl: liveVideoUrl,
      isVerified: isVerified,
      creator: creator,
      organization: organization,
      followers: followers != null ? List<MosqueFollower>.unmodifiable(followers) : followers,
      announcements: announcements != null ? List<Announcement>.unmodifiable(announcements) : announcements,
      fundraisingCampaigns: fundraisingCampaigns != null ? List<FundraisingCampaign>.unmodifiable(fundraisingCampaigns) : fundraisingCampaigns,
      prayerTimes: prayerTimes != null ? List<PrayerTime>.unmodifiable(prayerTimes) : prayerTimes,
      bookmarks: bookmarks != null ? List<Bookmark>.unmodifiable(bookmarks) : bookmarks,
      likes: likes != null ? List<Like>.unmodifiable(likes) : likes,
      comments: comments != null ? List<Comment>.unmodifiable(comments) : comments,
      createdAt: createdAt,
      updatedAt: updatedAt);
  }
  
  bool equals(Object other) {
    return this == other;
  }
  
  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Mosque &&
      id == other.id &&
      _name == other._name &&
      _description == other._description &&
      DeepCollectionEquality().equals(_images, other._images) &&
      _address == other._address &&
      _latitude == other._latitude &&
      _longitude == other._longitude &&
      _hours == other._hours &&
      _phone == other._phone &&
      _email == other._email &&
      _website == other._website &&
      _socialMedia == other._socialMedia &&
      _liveVideoUrl == other._liveVideoUrl &&
      _isVerified == other._isVerified &&
      _creator == other._creator &&
      _organization == other._organization &&
      DeepCollectionEquality().equals(_followers, other._followers) &&
      DeepCollectionEquality().equals(_announcements, other._announcements) &&
      DeepCollectionEquality().equals(_fundraisingCampaigns, other._fundraisingCampaigns) &&
      DeepCollectionEquality().equals(_prayerTimes, other._prayerTimes) &&
      DeepCollectionEquality().equals(_bookmarks, other._bookmarks) &&
      DeepCollectionEquality().equals(_likes, other._likes) &&
      DeepCollectionEquality().equals(_comments, other._comments) &&
      _createdAt == other._createdAt &&
      _updatedAt == other._updatedAt;
  }
  
  @override
  int get hashCode => toString().hashCode;
  
  @override
  String toString() {
    var buffer = new StringBuffer();
    
    buffer.write("Mosque {");
    buffer.write("id=" + "$id" + ", ");
    buffer.write("name=" + "$_name" + ", ");
    buffer.write("description=" + "$_description" + ", ");
    buffer.write("images=" + (_images != null ? _images!.toString() : "null") + ", ");
    buffer.write("address=" + "$_address" + ", ");
    buffer.write("latitude=" + (_latitude != null ? _latitude!.toString() : "null") + ", ");
    buffer.write("longitude=" + (_longitude != null ? _longitude!.toString() : "null") + ", ");
    buffer.write("hours=" + (_hours != null ? _hours!.toString() : "null") + ", ");
    buffer.write("phone=" + "$_phone" + ", ");
    buffer.write("email=" + "$_email" + ", ");
    buffer.write("website=" + "$_website" + ", ");
    buffer.write("socialMedia=" + (_socialMedia != null ? _socialMedia!.toString() : "null") + ", ");
    buffer.write("liveVideoUrl=" + "$_liveVideoUrl" + ", ");
    buffer.write("isVerified=" + (_isVerified != null ? _isVerified!.toString() : "null") + ", ");
    buffer.write("creator=" + (_creator != null ? _creator!.toString() : "null") + ", ");
    buffer.write("organization=" + (_organization != null ? _organization!.toString() : "null") + ", ");
    buffer.write("createdAt=" + (_createdAt != null ? _createdAt!.format() : "null") + ", ");
    buffer.write("updatedAt=" + (_updatedAt != null ? _updatedAt!.format() : "null"));
    buffer.write("}");
    
    return buffer.toString();
  }
  
  Mosque copyWith({String? name, String? description, List<String>? images, String? address, double? latitude, double? longitude, Hours? hours, String? phone, String? email, String? website, SocialMedia? socialMedia, String? liveVideoUrl, bool? isVerified, User? creator, Organization? organization, List<MosqueFollower>? followers, List<Announcement>? announcements, List<FundraisingCampaign>? fundraisingCampaigns, List<PrayerTime>? prayerTimes, List<Bookmark>? bookmarks, List<Like>? likes, List<Comment>? comments, amplify_core.TemporalDateTime? createdAt, amplify_core.TemporalDateTime? updatedAt}) {
    return Mosque._internal(
      id: id,
      name: name ?? this.name,
      description: description ?? this.description,
      images: images ?? this.images,
      address: address ?? this.address,
      latitude: latitude ?? this.latitude,
      longitude: longitude ?? this.longitude,
      hours: hours ?? this.hours,
      phone: phone ?? this.phone,
      email: email ?? this.email,
      website: website ?? this.website,
      socialMedia: socialMedia ?? this.socialMedia,
      liveVideoUrl: liveVideoUrl ?? this.liveVideoUrl,
      isVerified: isVerified ?? this.isVerified,
      creator: creator ?? this.creator,
      organization: organization ?? this.organization,
      followers: followers ?? this.followers,
      announcements: announcements ?? this.announcements,
      fundraisingCampaigns: fundraisingCampaigns ?? this.fundraisingCampaigns,
      prayerTimes: prayerTimes ?? this.prayerTimes,
      bookmarks: bookmarks ?? this.bookmarks,
      likes: likes ?? this.likes,
      comments: comments ?? this.comments,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt);
  }
  
  Mosque copyWithModelFieldValues({
    ModelFieldValue<String>? name,
    ModelFieldValue<String>? description,
    ModelFieldValue<List<String>>? images,
    ModelFieldValue<String>? address,
    ModelFieldValue<double>? latitude,
    ModelFieldValue<double>? longitude,
    ModelFieldValue<Hours?>? hours,
    ModelFieldValue<String?>? phone,
    ModelFieldValue<String?>? email,
    ModelFieldValue<String?>? website,
    ModelFieldValue<SocialMedia?>? socialMedia,
    ModelFieldValue<String?>? liveVideoUrl,
    ModelFieldValue<bool>? isVerified,
    ModelFieldValue<User>? creator,
    ModelFieldValue<Organization?>? organization,
    ModelFieldValue<List<MosqueFollower>?>? followers,
    ModelFieldValue<List<Announcement>?>? announcements,
    ModelFieldValue<List<FundraisingCampaign>?>? fundraisingCampaigns,
    ModelFieldValue<List<PrayerTime>?>? prayerTimes,
    ModelFieldValue<List<Bookmark>?>? bookmarks,
    ModelFieldValue<List<Like>?>? likes,
    ModelFieldValue<List<Comment>?>? comments,
    ModelFieldValue<amplify_core.TemporalDateTime>? createdAt,
    ModelFieldValue<amplify_core.TemporalDateTime>? updatedAt
  }) {
    return Mosque._internal(
      id: id,
      name: name == null ? this.name : name.value,
      description: description == null ? this.description : description.value,
      images: images == null ? this.images : images.value,
      address: address == null ? this.address : address.value,
      latitude: latitude == null ? this.latitude : latitude.value,
      longitude: longitude == null ? this.longitude : longitude.value,
      hours: hours == null ? this.hours : hours.value,
      phone: phone == null ? this.phone : phone.value,
      email: email == null ? this.email : email.value,
      website: website == null ? this.website : website.value,
      socialMedia: socialMedia == null ? this.socialMedia : socialMedia.value,
      liveVideoUrl: liveVideoUrl == null ? this.liveVideoUrl : liveVideoUrl.value,
      isVerified: isVerified == null ? this.isVerified : isVerified.value,
      creator: creator == null ? this.creator : creator.value,
      organization: organization == null ? this.organization : organization.value,
      followers: followers == null ? this.followers : followers.value,
      announcements: announcements == null ? this.announcements : announcements.value,
      fundraisingCampaigns: fundraisingCampaigns == null ? this.fundraisingCampaigns : fundraisingCampaigns.value,
      prayerTimes: prayerTimes == null ? this.prayerTimes : prayerTimes.value,
      bookmarks: bookmarks == null ? this.bookmarks : bookmarks.value,
      likes: likes == null ? this.likes : likes.value,
      comments: comments == null ? this.comments : comments.value,
      createdAt: createdAt == null ? this.createdAt : createdAt.value,
      updatedAt: updatedAt == null ? this.updatedAt : updatedAt.value
    );
  }
  
  Mosque.fromJson(Map<String, dynamic> json)  
    : id = json['id'],
      _name = json['name'],
      _description = json['description'],
      _images = json['images']?.cast<String>(),
      _address = json['address'],
      _latitude = (json['latitude'] as num?)?.toDouble(),
      _longitude = (json['longitude'] as num?)?.toDouble(),
      _hours = json['hours'] != null
        ? Hours.fromJson(new Map<String, dynamic>.from(json['hours']))
        : null,
      _phone = json['phone'],
      _email = json['email'],
      _website = json['website'],
      _socialMedia = json['socialMedia'] != null
        ? SocialMedia.fromJson(new Map<String, dynamic>.from(json['socialMedia']))
        : null,
      _liveVideoUrl = json['liveVideoUrl'],
      _isVerified = json['isVerified'],
      _creator = json['creator'] != null
        ? json['creator']['serializedData'] != null
          ? User.fromJson(new Map<String, dynamic>.from(json['creator']['serializedData']))
          : User.fromJson(new Map<String, dynamic>.from(json['creator']))
        : null,
      _organization = json['organization'] != null
        ? json['organization']['serializedData'] != null
          ? Organization.fromJson(new Map<String, dynamic>.from(json['organization']['serializedData']))
          : Organization.fromJson(new Map<String, dynamic>.from(json['organization']))
        : null,
      _followers = json['followers']  is Map
        ? (json['followers']['items'] is List
          ? (json['followers']['items'] as List)
              .where((e) => e != null)
              .map((e) => MosqueFollower.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['followers'] is List
          ? (json['followers'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => MosqueFollower.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _announcements = json['announcements']  is Map
        ? (json['announcements']['items'] is List
          ? (json['announcements']['items'] as List)
              .where((e) => e != null)
              .map((e) => Announcement.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['announcements'] is List
          ? (json['announcements'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => Announcement.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _fundraisingCampaigns = json['fundraisingCampaigns']  is Map
        ? (json['fundraisingCampaigns']['items'] is List
          ? (json['fundraisingCampaigns']['items'] as List)
              .where((e) => e != null)
              .map((e) => FundraisingCampaign.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['fundraisingCampaigns'] is List
          ? (json['fundraisingCampaigns'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => FundraisingCampaign.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _prayerTimes = json['prayerTimes']  is Map
        ? (json['prayerTimes']['items'] is List
          ? (json['prayerTimes']['items'] as List)
              .where((e) => e != null)
              .map((e) => PrayerTime.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['prayerTimes'] is List
          ? (json['prayerTimes'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => PrayerTime.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
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
      _createdAt = json['createdAt'] != null ? amplify_core.TemporalDateTime.fromString(json['createdAt']) : null,
      _updatedAt = json['updatedAt'] != null ? amplify_core.TemporalDateTime.fromString(json['updatedAt']) : null;
  
  Map<String, dynamic> toJson() => {
    'id': id, 'name': _name, 'description': _description, 'images': _images, 'address': _address, 'latitude': _latitude, 'longitude': _longitude, 'hours': _hours?.toJson(), 'phone': _phone, 'email': _email, 'website': _website, 'socialMedia': _socialMedia?.toJson(), 'liveVideoUrl': _liveVideoUrl, 'isVerified': _isVerified, 'creator': _creator?.toJson(), 'organization': _organization?.toJson(), 'followers': _followers?.map((MosqueFollower? e) => e?.toJson()).toList(), 'announcements': _announcements?.map((Announcement? e) => e?.toJson()).toList(), 'fundraisingCampaigns': _fundraisingCampaigns?.map((FundraisingCampaign? e) => e?.toJson()).toList(), 'prayerTimes': _prayerTimes?.map((PrayerTime? e) => e?.toJson()).toList(), 'bookmarks': _bookmarks?.map((Bookmark? e) => e?.toJson()).toList(), 'likes': _likes?.map((Like? e) => e?.toJson()).toList(), 'comments': _comments?.map((Comment? e) => e?.toJson()).toList(), 'createdAt': _createdAt?.format(), 'updatedAt': _updatedAt?.format()
  };
  
  Map<String, Object?> toMap() => {
    'id': id,
    'name': _name,
    'description': _description,
    'images': _images,
    'address': _address,
    'latitude': _latitude,
    'longitude': _longitude,
    'hours': _hours,
    'phone': _phone,
    'email': _email,
    'website': _website,
    'socialMedia': _socialMedia,
    'liveVideoUrl': _liveVideoUrl,
    'isVerified': _isVerified,
    'creator': _creator,
    'organization': _organization,
    'followers': _followers,
    'announcements': _announcements,
    'fundraisingCampaigns': _fundraisingCampaigns,
    'prayerTimes': _prayerTimes,
    'bookmarks': _bookmarks,
    'likes': _likes,
    'comments': _comments,
    'createdAt': _createdAt,
    'updatedAt': _updatedAt
  };

  static final amplify_core.QueryModelIdentifier<MosqueModelIdentifier> MODEL_IDENTIFIER = amplify_core.QueryModelIdentifier<MosqueModelIdentifier>();
  static final ID = amplify_core.QueryField(fieldName: "id");
  static final NAME = amplify_core.QueryField(fieldName: "name");
  static final DESCRIPTION = amplify_core.QueryField(fieldName: "description");
  static final IMAGES = amplify_core.QueryField(fieldName: "images");
  static final ADDRESS = amplify_core.QueryField(fieldName: "address");
  static final LATITUDE = amplify_core.QueryField(fieldName: "latitude");
  static final LONGITUDE = amplify_core.QueryField(fieldName: "longitude");
  static final HOURS = amplify_core.QueryField(fieldName: "hours");
  static final PHONE = amplify_core.QueryField(fieldName: "phone");
  static final EMAIL = amplify_core.QueryField(fieldName: "email");
  static final WEBSITE = amplify_core.QueryField(fieldName: "website");
  static final SOCIALMEDIA = amplify_core.QueryField(fieldName: "socialMedia");
  static final LIVEVIDEOURL = amplify_core.QueryField(fieldName: "liveVideoUrl");
  static final ISVERIFIED = amplify_core.QueryField(fieldName: "isVerified");
  static final CREATOR = amplify_core.QueryField(
    fieldName: "creator",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'User'));
  static final ORGANIZATION = amplify_core.QueryField(
    fieldName: "organization",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Organization'));
  static final FOLLOWERS = amplify_core.QueryField(
    fieldName: "followers",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'MosqueFollower'));
  static final ANNOUNCEMENTS = amplify_core.QueryField(
    fieldName: "announcements",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Announcement'));
  static final FUNDRAISINGCAMPAIGNS = amplify_core.QueryField(
    fieldName: "fundraisingCampaigns",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'FundraisingCampaign'));
  static final PRAYERTIMES = amplify_core.QueryField(
    fieldName: "prayerTimes",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'PrayerTime'));
  static final BOOKMARKS = amplify_core.QueryField(
    fieldName: "bookmarks",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Bookmark'));
  static final LIKES = amplify_core.QueryField(
    fieldName: "likes",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Like'));
  static final COMMENTS = amplify_core.QueryField(
    fieldName: "comments",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Comment'));
  static final CREATEDAT = amplify_core.QueryField(fieldName: "createdAt");
  static final UPDATEDAT = amplify_core.QueryField(fieldName: "updatedAt");
  static var schema = amplify_core.Model.defineSchema(define: (amplify_core.ModelSchemaDefinition modelSchemaDefinition) {
    modelSchemaDefinition.name = "Mosque";
    modelSchemaDefinition.pluralName = "Mosques";
    
    modelSchemaDefinition.authRules = [
      amplify_core.AuthRule(
        authStrategy: amplify_core.AuthStrategy.OWNER,
        ownerField: "creatorId",
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
    
    modelSchemaDefinition.indexes = [
      amplify_core.ModelIndex(fields: const ["creatorId"], name: "byCreatorId"),
      amplify_core.ModelIndex(fields: const ["organizationId"], name: "byOrganizationId")
    ];
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.id());
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.NAME,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.DESCRIPTION,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.IMAGES,
      isRequired: true,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.collection, ofModelName: amplify_core.ModelFieldTypeEnum.string.name)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.ADDRESS,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.LATITUDE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.double)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.LONGITUDE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.double)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'hours',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'Hours')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.PHONE,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.EMAIL,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.WEBSITE,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'socialMedia',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'SocialMedia')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.LIVEVIDEOURL,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.ISVERIFIED,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.bool)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.belongsTo(
      key: Mosque.CREATOR,
      isRequired: true,
      targetNames: ['creatorId'],
      ofModelName: 'User'
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.belongsTo(
      key: Mosque.ORGANIZATION,
      isRequired: false,
      targetNames: ['organizationId'],
      ofModelName: 'Organization'
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: Mosque.FOLLOWERS,
      isRequired: false,
      ofModelName: 'MosqueFollower',
      associatedKey: MosqueFollower.MOSQUE
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: Mosque.ANNOUNCEMENTS,
      isRequired: false,
      ofModelName: 'Announcement',
      associatedKey: Announcement.MOSQUE
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: Mosque.FUNDRAISINGCAMPAIGNS,
      isRequired: false,
      ofModelName: 'FundraisingCampaign',
      associatedKey: FundraisingCampaign.MOSQUE
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: Mosque.PRAYERTIMES,
      isRequired: false,
      ofModelName: 'PrayerTime',
      associatedKey: PrayerTime.MOSQUE
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: Mosque.BOOKMARKS,
      isRequired: false,
      ofModelName: 'Bookmark',
      associatedKey: Bookmark.MOSQUE
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: Mosque.LIKES,
      isRequired: false,
      ofModelName: 'Like',
      associatedKey: Like.MOSQUE
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: Mosque.COMMENTS,
      isRequired: false,
      ofModelName: 'Comment',
      associatedKey: Comment.MOSQUE
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.CREATEDAT,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Mosque.UPDATEDAT,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
  });
}

class _MosqueModelType extends amplify_core.ModelType<Mosque> {
  const _MosqueModelType();
  
  @override
  Mosque fromJson(Map<String, dynamic> jsonData) {
    return Mosque.fromJson(jsonData);
  }
  
  @override
  String modelName() {
    return 'Mosque';
  }
}

/**
 * This is an auto generated class representing the model identifier
 * of [Mosque] in your schema.
 */
class MosqueModelIdentifier implements amplify_core.ModelIdentifier<Mosque> {
  final String id;

  /** Create an instance of MosqueModelIdentifier using [id] the primary key. */
  const MosqueModelIdentifier({
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
  String toString() => 'MosqueModelIdentifier(id: $id)';
  
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    
    return other is MosqueModelIdentifier &&
      id == other.id;
  }
  
  @override
  int get hashCode =>
    id.hashCode;
}