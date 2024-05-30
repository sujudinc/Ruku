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


/** This is an auto generated class representing the OrganizationMember type in your schema. */
class OrganizationMember extends amplify_core.Model {
  static const classType = const _OrganizationMemberModelType();
  final String id;
  final MemberRole? _role;
  final Organization? _organization;
  final User? _member;
  final amplify_core.TemporalDateTime? _createdAt;
  final amplify_core.TemporalDateTime? _updatedAt;
  final List<String>? _owners;

  @override
  getInstanceType() => classType;
  
  @Deprecated('[getId] is being deprecated in favor of custom primary key feature. Use getter [modelIdentifier] to get model identifier.')
  @override
  String getId() => id;
  
  OrganizationMemberModelIdentifier get modelIdentifier {
      return OrganizationMemberModelIdentifier(
        id: id
      );
  }
  
  MemberRole get role {
    try {
      return _role!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  Organization get organization {
    try {
      return _organization!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  User get member {
    try {
      return _member!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
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
  
  List<String>? get owners {
    return _owners;
  }
  
  const OrganizationMember._internal({required this.id, required role, required organization, required member, required createdAt, required updatedAt, owners}): _role = role, _organization = organization, _member = member, _createdAt = createdAt, _updatedAt = updatedAt, _owners = owners;
  
  factory OrganizationMember({String? id, required MemberRole role, required Organization organization, required User member, required amplify_core.TemporalDateTime createdAt, required amplify_core.TemporalDateTime updatedAt, List<String>? owners}) {
    return OrganizationMember._internal(
      id: id == null ? amplify_core.UUID.getUUID() : id,
      role: role,
      organization: organization,
      member: member,
      createdAt: createdAt,
      updatedAt: updatedAt,
      owners: owners != null ? List<String>.unmodifiable(owners) : owners);
  }
  
  bool equals(Object other) {
    return this == other;
  }
  
  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is OrganizationMember &&
      id == other.id &&
      _role == other._role &&
      _organization == other._organization &&
      _member == other._member &&
      _createdAt == other._createdAt &&
      _updatedAt == other._updatedAt &&
      DeepCollectionEquality().equals(_owners, other._owners);
  }
  
  @override
  int get hashCode => toString().hashCode;
  
  @override
  String toString() {
    var buffer = new StringBuffer();
    
    buffer.write("OrganizationMember {");
    buffer.write("id=" + "$id" + ", ");
    buffer.write("role=" + (_role != null ? amplify_core.enumToString(_role)! : "null") + ", ");
    buffer.write("organization=" + (_organization != null ? _organization!.toString() : "null") + ", ");
    buffer.write("member=" + (_member != null ? _member!.toString() : "null") + ", ");
    buffer.write("createdAt=" + (_createdAt != null ? _createdAt!.format() : "null") + ", ");
    buffer.write("updatedAt=" + (_updatedAt != null ? _updatedAt!.format() : "null") + ", ");
    buffer.write("owners=" + (_owners != null ? _owners!.toString() : "null"));
    buffer.write("}");
    
    return buffer.toString();
  }
  
  OrganizationMember copyWith({MemberRole? role, Organization? organization, User? member, amplify_core.TemporalDateTime? createdAt, amplify_core.TemporalDateTime? updatedAt, List<String>? owners}) {
    return OrganizationMember._internal(
      id: id,
      role: role ?? this.role,
      organization: organization ?? this.organization,
      member: member ?? this.member,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      owners: owners ?? this.owners);
  }
  
  OrganizationMember copyWithModelFieldValues({
    ModelFieldValue<MemberRole>? role,
    ModelFieldValue<Organization>? organization,
    ModelFieldValue<User>? member,
    ModelFieldValue<amplify_core.TemporalDateTime>? createdAt,
    ModelFieldValue<amplify_core.TemporalDateTime>? updatedAt,
    ModelFieldValue<List<String>?>? owners
  }) {
    return OrganizationMember._internal(
      id: id,
      role: role == null ? this.role : role.value,
      organization: organization == null ? this.organization : organization.value,
      member: member == null ? this.member : member.value,
      createdAt: createdAt == null ? this.createdAt : createdAt.value,
      updatedAt: updatedAt == null ? this.updatedAt : updatedAt.value,
      owners: owners == null ? this.owners : owners.value
    );
  }
  
  OrganizationMember.fromJson(Map<String, dynamic> json)  
    : id = json['id'],
      _role = amplify_core.enumFromString<MemberRole>(json['role'], MemberRole.values),
      _organization = json['organization'] != null
        ? json['organization']['serializedData'] != null
          ? Organization.fromJson(new Map<String, dynamic>.from(json['organization']['serializedData']))
          : Organization.fromJson(new Map<String, dynamic>.from(json['organization']))
        : null,
      _member = json['member'] != null
        ? json['member']['serializedData'] != null
          ? User.fromJson(new Map<String, dynamic>.from(json['member']['serializedData']))
          : User.fromJson(new Map<String, dynamic>.from(json['member']))
        : null,
      _createdAt = json['createdAt'] != null ? amplify_core.TemporalDateTime.fromString(json['createdAt']) : null,
      _updatedAt = json['updatedAt'] != null ? amplify_core.TemporalDateTime.fromString(json['updatedAt']) : null,
      _owners = json['owners']?.cast<String>();
  
  Map<String, dynamic> toJson() => {
    'id': id, 'role': amplify_core.enumToString(_role), 'organization': _organization?.toJson(), 'member': _member?.toJson(), 'createdAt': _createdAt?.format(), 'updatedAt': _updatedAt?.format(), 'owners': _owners
  };
  
  Map<String, Object?> toMap() => {
    'id': id,
    'role': _role,
    'organization': _organization,
    'member': _member,
    'createdAt': _createdAt,
    'updatedAt': _updatedAt,
    'owners': _owners
  };

  static final amplify_core.QueryModelIdentifier<OrganizationMemberModelIdentifier> MODEL_IDENTIFIER = amplify_core.QueryModelIdentifier<OrganizationMemberModelIdentifier>();
  static final ID = amplify_core.QueryField(fieldName: "id");
  static final ROLE = amplify_core.QueryField(fieldName: "role");
  static final ORGANIZATION = amplify_core.QueryField(
    fieldName: "organization",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Organization'));
  static final MEMBER = amplify_core.QueryField(
    fieldName: "member",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'User'));
  static final CREATEDAT = amplify_core.QueryField(fieldName: "createdAt");
  static final UPDATEDAT = amplify_core.QueryField(fieldName: "updatedAt");
  static final OWNERS = amplify_core.QueryField(fieldName: "owners");
  static var schema = amplify_core.Model.defineSchema(define: (amplify_core.ModelSchemaDefinition modelSchemaDefinition) {
    modelSchemaDefinition.name = "OrganizationMember";
    modelSchemaDefinition.pluralName = "OrganizationMembers";
    
    modelSchemaDefinition.authRules = [
      amplify_core.AuthRule(
        authStrategy: amplify_core.AuthStrategy.OWNER,
        ownerField: "owners",
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
      amplify_core.ModelIndex(fields: const ["organizationID"], name: "byOrganization"),
      amplify_core.ModelIndex(fields: const ["memberID"], name: "byMember")
    ];
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.id());
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: OrganizationMember.ROLE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.enumeration)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.belongsTo(
      key: OrganizationMember.ORGANIZATION,
      isRequired: true,
      targetNames: ['organizationID'],
      ofModelName: 'Organization'
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.belongsTo(
      key: OrganizationMember.MEMBER,
      isRequired: true,
      targetNames: ['memberID'],
      ofModelName: 'User'
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: OrganizationMember.CREATEDAT,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: OrganizationMember.UPDATEDAT,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: OrganizationMember.OWNERS,
      isRequired: false,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.collection, ofModelName: amplify_core.ModelFieldTypeEnum.string.name)
    ));
  });
}

class _OrganizationMemberModelType extends amplify_core.ModelType<OrganizationMember> {
  const _OrganizationMemberModelType();
  
  @override
  OrganizationMember fromJson(Map<String, dynamic> jsonData) {
    return OrganizationMember.fromJson(jsonData);
  }
  
  @override
  String modelName() {
    return 'OrganizationMember';
  }
}

/**
 * This is an auto generated class representing the model identifier
 * of [OrganizationMember] in your schema.
 */
class OrganizationMemberModelIdentifier implements amplify_core.ModelIdentifier<OrganizationMember> {
  final String id;

  /** Create an instance of OrganizationMemberModelIdentifier using [id] the primary key. */
  const OrganizationMemberModelIdentifier({
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
  String toString() => 'OrganizationMemberModelIdentifier(id: $id)';
  
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    
    return other is OrganizationMemberModelIdentifier &&
      id == other.id;
  }
  
  @override
  int get hashCode =>
    id.hashCode;
}