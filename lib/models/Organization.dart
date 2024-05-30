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


/** This is an auto generated class representing the Organization type in your schema. */
class Organization extends amplify_core.Model {
  static const classType = const _OrganizationModelType();
  final String id;
  final String? _name;
  final String? _description;
  final String? _domain;
  final String? _logo;
  final String? _phone;
  final String? _email;
  final String? _website;
  final bool? _isVerified;
  final User? _creator;
  final List<OrganizationMember>? _members;
  final List<Mosque>? _mosques;
  final amplify_core.TemporalDateTime? _createdAt;
  final amplify_core.TemporalDateTime? _updatedAt;
  final List<String>? _owners;

  @override
  getInstanceType() => classType;
  
  @Deprecated('[getId] is being deprecated in favor of custom primary key feature. Use getter [modelIdentifier] to get model identifier.')
  @override
  String getId() => id;
  
  OrganizationModelIdentifier get modelIdentifier {
      return OrganizationModelIdentifier(
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
  
  String? get description {
    return _description;
  }
  
  String? get domain {
    return _domain;
  }
  
  String? get logo {
    return _logo;
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
  
  List<OrganizationMember>? get members {
    return _members;
  }
  
  List<Mosque>? get mosques {
    return _mosques;
  }
  
  amplify_core.TemporalDateTime? get createdAt {
    return _createdAt;
  }
  
  amplify_core.TemporalDateTime? get updatedAt {
    return _updatedAt;
  }
  
  List<String>? get owners {
    return _owners;
  }
  
  const Organization._internal({required this.id, required name, description, domain, logo, phone, email, website, required isVerified, required creator, members, mosques, createdAt, updatedAt, owners}): _name = name, _description = description, _domain = domain, _logo = logo, _phone = phone, _email = email, _website = website, _isVerified = isVerified, _creator = creator, _members = members, _mosques = mosques, _createdAt = createdAt, _updatedAt = updatedAt, _owners = owners;
  
  factory Organization({String? id, required String name, String? description, String? domain, String? logo, String? phone, String? email, String? website, required bool isVerified, required User creator, List<OrganizationMember>? members, List<Mosque>? mosques, amplify_core.TemporalDateTime? createdAt, amplify_core.TemporalDateTime? updatedAt, List<String>? owners}) {
    return Organization._internal(
      id: id == null ? amplify_core.UUID.getUUID() : id,
      name: name,
      description: description,
      domain: domain,
      logo: logo,
      phone: phone,
      email: email,
      website: website,
      isVerified: isVerified,
      creator: creator,
      members: members != null ? List<OrganizationMember>.unmodifiable(members) : members,
      mosques: mosques != null ? List<Mosque>.unmodifiable(mosques) : mosques,
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
    return other is Organization &&
      id == other.id &&
      _name == other._name &&
      _description == other._description &&
      _domain == other._domain &&
      _logo == other._logo &&
      _phone == other._phone &&
      _email == other._email &&
      _website == other._website &&
      _isVerified == other._isVerified &&
      _creator == other._creator &&
      DeepCollectionEquality().equals(_members, other._members) &&
      DeepCollectionEquality().equals(_mosques, other._mosques) &&
      _createdAt == other._createdAt &&
      _updatedAt == other._updatedAt &&
      DeepCollectionEquality().equals(_owners, other._owners);
  }
  
  @override
  int get hashCode => toString().hashCode;
  
  @override
  String toString() {
    var buffer = new StringBuffer();
    
    buffer.write("Organization {");
    buffer.write("id=" + "$id" + ", ");
    buffer.write("name=" + "$_name" + ", ");
    buffer.write("description=" + "$_description" + ", ");
    buffer.write("domain=" + "$_domain" + ", ");
    buffer.write("logo=" + "$_logo" + ", ");
    buffer.write("phone=" + "$_phone" + ", ");
    buffer.write("email=" + "$_email" + ", ");
    buffer.write("website=" + "$_website" + ", ");
    buffer.write("isVerified=" + (_isVerified != null ? _isVerified!.toString() : "null") + ", ");
    buffer.write("creator=" + (_creator != null ? _creator!.toString() : "null") + ", ");
    buffer.write("createdAt=" + (_createdAt != null ? _createdAt!.format() : "null") + ", ");
    buffer.write("updatedAt=" + (_updatedAt != null ? _updatedAt!.format() : "null") + ", ");
    buffer.write("owners=" + (_owners != null ? _owners!.toString() : "null"));
    buffer.write("}");
    
    return buffer.toString();
  }
  
  Organization copyWith({String? name, String? description, String? domain, String? logo, String? phone, String? email, String? website, bool? isVerified, User? creator, List<OrganizationMember>? members, List<Mosque>? mosques, amplify_core.TemporalDateTime? createdAt, amplify_core.TemporalDateTime? updatedAt, List<String>? owners}) {
    return Organization._internal(
      id: id,
      name: name ?? this.name,
      description: description ?? this.description,
      domain: domain ?? this.domain,
      logo: logo ?? this.logo,
      phone: phone ?? this.phone,
      email: email ?? this.email,
      website: website ?? this.website,
      isVerified: isVerified ?? this.isVerified,
      creator: creator ?? this.creator,
      members: members ?? this.members,
      mosques: mosques ?? this.mosques,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      owners: owners ?? this.owners);
  }
  
  Organization copyWithModelFieldValues({
    ModelFieldValue<String>? name,
    ModelFieldValue<String?>? description,
    ModelFieldValue<String?>? domain,
    ModelFieldValue<String?>? logo,
    ModelFieldValue<String?>? phone,
    ModelFieldValue<String?>? email,
    ModelFieldValue<String?>? website,
    ModelFieldValue<bool>? isVerified,
    ModelFieldValue<User>? creator,
    ModelFieldValue<List<OrganizationMember>?>? members,
    ModelFieldValue<List<Mosque>?>? mosques,
    ModelFieldValue<amplify_core.TemporalDateTime?>? createdAt,
    ModelFieldValue<amplify_core.TemporalDateTime?>? updatedAt,
    ModelFieldValue<List<String>?>? owners
  }) {
    return Organization._internal(
      id: id,
      name: name == null ? this.name : name.value,
      description: description == null ? this.description : description.value,
      domain: domain == null ? this.domain : domain.value,
      logo: logo == null ? this.logo : logo.value,
      phone: phone == null ? this.phone : phone.value,
      email: email == null ? this.email : email.value,
      website: website == null ? this.website : website.value,
      isVerified: isVerified == null ? this.isVerified : isVerified.value,
      creator: creator == null ? this.creator : creator.value,
      members: members == null ? this.members : members.value,
      mosques: mosques == null ? this.mosques : mosques.value,
      createdAt: createdAt == null ? this.createdAt : createdAt.value,
      updatedAt: updatedAt == null ? this.updatedAt : updatedAt.value,
      owners: owners == null ? this.owners : owners.value
    );
  }
  
  Organization.fromJson(Map<String, dynamic> json)  
    : id = json['id'],
      _name = json['name'],
      _description = json['description'],
      _domain = json['domain'],
      _logo = json['logo'],
      _phone = json['phone'],
      _email = json['email'],
      _website = json['website'],
      _isVerified = json['isVerified'],
      _creator = json['creator'] != null
        ? json['creator']['serializedData'] != null
          ? User.fromJson(new Map<String, dynamic>.from(json['creator']['serializedData']))
          : User.fromJson(new Map<String, dynamic>.from(json['creator']))
        : null,
      _members = json['members']  is Map
        ? (json['members']['items'] is List
          ? (json['members']['items'] as List)
              .where((e) => e != null)
              .map((e) => OrganizationMember.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['members'] is List
          ? (json['members'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => OrganizationMember.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _mosques = json['mosques']  is Map
        ? (json['mosques']['items'] is List
          ? (json['mosques']['items'] as List)
              .where((e) => e != null)
              .map((e) => Mosque.fromJson(new Map<String, dynamic>.from(e)))
              .toList()
          : null)
        : (json['mosques'] is List
          ? (json['mosques'] as List)
              .where((e) => e?['serializedData'] != null)
              .map((e) => Mosque.fromJson(new Map<String, dynamic>.from(e?['serializedData'])))
              .toList()
          : null),
      _createdAt = json['createdAt'] != null ? amplify_core.TemporalDateTime.fromString(json['createdAt']) : null,
      _updatedAt = json['updatedAt'] != null ? amplify_core.TemporalDateTime.fromString(json['updatedAt']) : null,
      _owners = json['owners']?.cast<String>();
  
  Map<String, dynamic> toJson() => {
    'id': id, 'name': _name, 'description': _description, 'domain': _domain, 'logo': _logo, 'phone': _phone, 'email': _email, 'website': _website, 'isVerified': _isVerified, 'creator': _creator?.toJson(), 'members': _members?.map((OrganizationMember? e) => e?.toJson()).toList(), 'mosques': _mosques?.map((Mosque? e) => e?.toJson()).toList(), 'createdAt': _createdAt?.format(), 'updatedAt': _updatedAt?.format(), 'owners': _owners
  };
  
  Map<String, Object?> toMap() => {
    'id': id,
    'name': _name,
    'description': _description,
    'domain': _domain,
    'logo': _logo,
    'phone': _phone,
    'email': _email,
    'website': _website,
    'isVerified': _isVerified,
    'creator': _creator,
    'members': _members,
    'mosques': _mosques,
    'createdAt': _createdAt,
    'updatedAt': _updatedAt,
    'owners': _owners
  };

  static final amplify_core.QueryModelIdentifier<OrganizationModelIdentifier> MODEL_IDENTIFIER = amplify_core.QueryModelIdentifier<OrganizationModelIdentifier>();
  static final ID = amplify_core.QueryField(fieldName: "id");
  static final NAME = amplify_core.QueryField(fieldName: "name");
  static final DESCRIPTION = amplify_core.QueryField(fieldName: "description");
  static final DOMAIN = amplify_core.QueryField(fieldName: "domain");
  static final LOGO = amplify_core.QueryField(fieldName: "logo");
  static final PHONE = amplify_core.QueryField(fieldName: "phone");
  static final EMAIL = amplify_core.QueryField(fieldName: "email");
  static final WEBSITE = amplify_core.QueryField(fieldName: "website");
  static final ISVERIFIED = amplify_core.QueryField(fieldName: "isVerified");
  static final CREATOR = amplify_core.QueryField(
    fieldName: "creator",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'User'));
  static final MEMBERS = amplify_core.QueryField(
    fieldName: "members",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'OrganizationMember'));
  static final MOSQUES = amplify_core.QueryField(
    fieldName: "mosques",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Mosque'));
  static final CREATEDAT = amplify_core.QueryField(fieldName: "createdAt");
  static final UPDATEDAT = amplify_core.QueryField(fieldName: "updatedAt");
  static final OWNERS = amplify_core.QueryField(fieldName: "owners");
  static var schema = amplify_core.Model.defineSchema(define: (amplify_core.ModelSchemaDefinition modelSchemaDefinition) {
    modelSchemaDefinition.name = "Organization";
    modelSchemaDefinition.pluralName = "Organizations";
    
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
      amplify_core.ModelIndex(fields: const ["creatorID"], name: "byCreator")
    ];
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.id());
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.NAME,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.DESCRIPTION,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.DOMAIN,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.LOGO,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.PHONE,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.EMAIL,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.WEBSITE,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.ISVERIFIED,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.bool)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.belongsTo(
      key: Organization.CREATOR,
      isRequired: true,
      targetNames: ['creatorID'],
      ofModelName: 'User'
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: Organization.MEMBERS,
      isRequired: false,
      ofModelName: 'OrganizationMember',
      associatedKey: OrganizationMember.ORGANIZATION
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.hasMany(
      key: Organization.MOSQUES,
      isRequired: false,
      ofModelName: 'Mosque',
      associatedKey: Mosque.ORGANIZATION
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.CREATEDAT,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.UPDATEDAT,
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: Organization.OWNERS,
      isRequired: false,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.collection, ofModelName: amplify_core.ModelFieldTypeEnum.string.name)
    ));
  });
}

class _OrganizationModelType extends amplify_core.ModelType<Organization> {
  const _OrganizationModelType();
  
  @override
  Organization fromJson(Map<String, dynamic> jsonData) {
    return Organization.fromJson(jsonData);
  }
  
  @override
  String modelName() {
    return 'Organization';
  }
}

/**
 * This is an auto generated class representing the model identifier
 * of [Organization] in your schema.
 */
class OrganizationModelIdentifier implements amplify_core.ModelIdentifier<Organization> {
  final String id;

  /** Create an instance of OrganizationModelIdentifier using [id] the primary key. */
  const OrganizationModelIdentifier({
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
  String toString() => 'OrganizationModelIdentifier(id: $id)';
  
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    
    return other is OrganizationModelIdentifier &&
      id == other.id;
  }
  
  @override
  int get hashCode =>
    id.hashCode;
}