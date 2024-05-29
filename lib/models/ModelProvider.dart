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

import 'package:amplify_core/amplify_core.dart' as amplify_core;
import 'Announcement.dart';
import 'Bookmark.dart';
import 'Comment.dart';
import 'Donation.dart';
import 'FundraisingCampaign.dart';
import 'Like.dart';
import 'Mosque.dart';
import 'MosqueFollower.dart';
import 'Organization.dart';
import 'OrganizationMember.dart';
import 'PrayerTime.dart';
import 'User.dart';
import 'Day.dart';
import 'FardPrayer.dart';
import 'Hours.dart';
import 'OperatingHours.dart';
import 'SocialMedia.dart';
import 'SunnahPrayer.dart';

export 'Announcement.dart';
export 'AnnouncementType.dart';
export 'Bookmark.dart';
export 'Comment.dart';
export 'Day.dart';
export 'DayType.dart';
export 'Donation.dart';
export 'FardPrayer.dart';
export 'FundraisingCampaign.dart';
export 'FundraisingCampaignType.dart';
export 'Hours.dart';
export 'Like.dart';
export 'Mosque.dart';
export 'MosqueFollower.dart';
export 'OperatingHours.dart';
export 'Organization.dart';
export 'OrganizationMember.dart';
export 'PrayerTime.dart';
export 'SocialMedia.dart';
export 'SunnahPrayer.dart';
export 'User.dart';
export 'UserStatus.dart';
export 'UserType.dart';

class ModelProvider implements amplify_core.ModelProviderInterface {
  @override
  String version = "5577b1a5b4913acbe8e10430eb297dc0";
  @override
  List<amplify_core.ModelSchema> modelSchemas = [Announcement.schema, Bookmark.schema, Comment.schema, Donation.schema, FundraisingCampaign.schema, Like.schema, Mosque.schema, MosqueFollower.schema, Organization.schema, OrganizationMember.schema, PrayerTime.schema, User.schema];
  @override
  List<amplify_core.ModelSchema> customTypeSchemas = [Day.schema, FardPrayer.schema, Hours.schema, OperatingHours.schema, SocialMedia.schema, SunnahPrayer.schema];
  static final ModelProvider _instance = ModelProvider();

  static ModelProvider get instance => _instance;
  
  amplify_core.ModelType getModelTypeByModelName(String modelName) {
    switch(modelName) {
      case "Announcement":
        return Announcement.classType;
      case "Bookmark":
        return Bookmark.classType;
      case "Comment":
        return Comment.classType;
      case "Donation":
        return Donation.classType;
      case "FundraisingCampaign":
        return FundraisingCampaign.classType;
      case "Like":
        return Like.classType;
      case "Mosque":
        return Mosque.classType;
      case "MosqueFollower":
        return MosqueFollower.classType;
      case "Organization":
        return Organization.classType;
      case "OrganizationMember":
        return OrganizationMember.classType;
      case "PrayerTime":
        return PrayerTime.classType;
      case "User":
        return User.classType;
      default:
        throw Exception("Failed to find model in model provider for model name: " + modelName);
    }
  }
}


class ModelFieldValue<T> {
  const ModelFieldValue.value(this.value);

  final T value;
}
