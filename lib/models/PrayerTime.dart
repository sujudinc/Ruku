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


/** This is an auto generated class representing the PrayerTime type in your schema. */
class PrayerTime extends amplify_core.Model {
  static const classType = const _PrayerTimeModelType();
  final String id;
  final FardPrayer? _fajr;
  final FardPrayer? _dhuhr;
  final FardPrayer? _asr;
  final FardPrayer? _maghrib;
  final FardPrayer? _isha;
  final List<FardPrayer>? _jummah;
  final SunnahPrayer? _taraweeh;
  final List<FardPrayer>? _eid;
  final amplify_core.TemporalDateTime? _startDate;
  final String? _timeZone;
  final User? _createdByUser;
  final User? _updatedByUser;
  final Mosque? _mosque;
  final amplify_core.TemporalDateTime? _createdAt;
  final amplify_core.TemporalDateTime? _updatedAt;
  final List<String>? _owners;

  @override
  getInstanceType() => classType;
  
  @Deprecated('[getId] is being deprecated in favor of custom primary key feature. Use getter [modelIdentifier] to get model identifier.')
  @override
  String getId() => id;
  
  PrayerTimeModelIdentifier get modelIdentifier {
      return PrayerTimeModelIdentifier(
        id: id
      );
  }
  
  FardPrayer get fajr {
    try {
      return _fajr!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  FardPrayer get dhuhr {
    try {
      return _dhuhr!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  FardPrayer get asr {
    try {
      return _asr!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  FardPrayer get maghrib {
    try {
      return _maghrib!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  FardPrayer get isha {
    try {
      return _isha!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  List<FardPrayer> get jummah {
    try {
      return _jummah!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  SunnahPrayer? get taraweeh {
    return _taraweeh;
  }
  
  List<FardPrayer>? get eid {
    return _eid;
  }
  
  amplify_core.TemporalDateTime get startDate {
    try {
      return _startDate!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  String get timeZone {
    try {
      return _timeZone!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  User get createdByUser {
    try {
      return _createdByUser!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  User get updatedByUser {
    try {
      return _updatedByUser!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  Mosque get mosque {
    try {
      return _mosque!;
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
  
  const PrayerTime._internal({required this.id, required fajr, required dhuhr, required asr, required maghrib, required isha, required jummah, taraweeh, eid, required startDate, required timeZone, required createdByUser, required updatedByUser, required mosque, required createdAt, required updatedAt, owners}): _fajr = fajr, _dhuhr = dhuhr, _asr = asr, _maghrib = maghrib, _isha = isha, _jummah = jummah, _taraweeh = taraweeh, _eid = eid, _startDate = startDate, _timeZone = timeZone, _createdByUser = createdByUser, _updatedByUser = updatedByUser, _mosque = mosque, _createdAt = createdAt, _updatedAt = updatedAt, _owners = owners;
  
  factory PrayerTime({String? id, required FardPrayer fajr, required FardPrayer dhuhr, required FardPrayer asr, required FardPrayer maghrib, required FardPrayer isha, required List<FardPrayer> jummah, SunnahPrayer? taraweeh, List<FardPrayer>? eid, required amplify_core.TemporalDateTime startDate, required String timeZone, required User createdByUser, required User updatedByUser, required Mosque mosque, required amplify_core.TemporalDateTime createdAt, required amplify_core.TemporalDateTime updatedAt, List<String>? owners}) {
    return PrayerTime._internal(
      id: id == null ? amplify_core.UUID.getUUID() : id,
      fajr: fajr,
      dhuhr: dhuhr,
      asr: asr,
      maghrib: maghrib,
      isha: isha,
      jummah: jummah != null ? List<FardPrayer>.unmodifiable(jummah) : jummah,
      taraweeh: taraweeh,
      eid: eid != null ? List<FardPrayer>.unmodifiable(eid) : eid,
      startDate: startDate,
      timeZone: timeZone,
      createdByUser: createdByUser,
      updatedByUser: updatedByUser,
      mosque: mosque,
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
    return other is PrayerTime &&
      id == other.id &&
      _fajr == other._fajr &&
      _dhuhr == other._dhuhr &&
      _asr == other._asr &&
      _maghrib == other._maghrib &&
      _isha == other._isha &&
      DeepCollectionEquality().equals(_jummah, other._jummah) &&
      _taraweeh == other._taraweeh &&
      DeepCollectionEquality().equals(_eid, other._eid) &&
      _startDate == other._startDate &&
      _timeZone == other._timeZone &&
      _createdByUser == other._createdByUser &&
      _updatedByUser == other._updatedByUser &&
      _mosque == other._mosque &&
      _createdAt == other._createdAt &&
      _updatedAt == other._updatedAt &&
      DeepCollectionEquality().equals(_owners, other._owners);
  }
  
  @override
  int get hashCode => toString().hashCode;
  
  @override
  String toString() {
    var buffer = new StringBuffer();
    
    buffer.write("PrayerTime {");
    buffer.write("id=" + "$id" + ", ");
    buffer.write("fajr=" + (_fajr != null ? _fajr!.toString() : "null") + ", ");
    buffer.write("dhuhr=" + (_dhuhr != null ? _dhuhr!.toString() : "null") + ", ");
    buffer.write("asr=" + (_asr != null ? _asr!.toString() : "null") + ", ");
    buffer.write("maghrib=" + (_maghrib != null ? _maghrib!.toString() : "null") + ", ");
    buffer.write("isha=" + (_isha != null ? _isha!.toString() : "null") + ", ");
    buffer.write("jummah=" + (_jummah != null ? _jummah!.toString() : "null") + ", ");
    buffer.write("taraweeh=" + (_taraweeh != null ? _taraweeh!.toString() : "null") + ", ");
    buffer.write("eid=" + (_eid != null ? _eid!.toString() : "null") + ", ");
    buffer.write("startDate=" + (_startDate != null ? _startDate!.format() : "null") + ", ");
    buffer.write("timeZone=" + "$_timeZone" + ", ");
    buffer.write("createdByUser=" + (_createdByUser != null ? _createdByUser!.toString() : "null") + ", ");
    buffer.write("updatedByUser=" + (_updatedByUser != null ? _updatedByUser!.toString() : "null") + ", ");
    buffer.write("mosque=" + (_mosque != null ? _mosque!.toString() : "null") + ", ");
    buffer.write("createdAt=" + (_createdAt != null ? _createdAt!.format() : "null") + ", ");
    buffer.write("updatedAt=" + (_updatedAt != null ? _updatedAt!.format() : "null") + ", ");
    buffer.write("owners=" + (_owners != null ? _owners!.toString() : "null"));
    buffer.write("}");
    
    return buffer.toString();
  }
  
  PrayerTime copyWith({FardPrayer? fajr, FardPrayer? dhuhr, FardPrayer? asr, FardPrayer? maghrib, FardPrayer? isha, List<FardPrayer>? jummah, SunnahPrayer? taraweeh, List<FardPrayer>? eid, amplify_core.TemporalDateTime? startDate, String? timeZone, User? createdByUser, User? updatedByUser, Mosque? mosque, amplify_core.TemporalDateTime? createdAt, amplify_core.TemporalDateTime? updatedAt, List<String>? owners}) {
    return PrayerTime._internal(
      id: id,
      fajr: fajr ?? this.fajr,
      dhuhr: dhuhr ?? this.dhuhr,
      asr: asr ?? this.asr,
      maghrib: maghrib ?? this.maghrib,
      isha: isha ?? this.isha,
      jummah: jummah ?? this.jummah,
      taraweeh: taraweeh ?? this.taraweeh,
      eid: eid ?? this.eid,
      startDate: startDate ?? this.startDate,
      timeZone: timeZone ?? this.timeZone,
      createdByUser: createdByUser ?? this.createdByUser,
      updatedByUser: updatedByUser ?? this.updatedByUser,
      mosque: mosque ?? this.mosque,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      owners: owners ?? this.owners);
  }
  
  PrayerTime copyWithModelFieldValues({
    ModelFieldValue<FardPrayer>? fajr,
    ModelFieldValue<FardPrayer>? dhuhr,
    ModelFieldValue<FardPrayer>? asr,
    ModelFieldValue<FardPrayer>? maghrib,
    ModelFieldValue<FardPrayer>? isha,
    ModelFieldValue<List<FardPrayer>?>? jummah,
    ModelFieldValue<SunnahPrayer?>? taraweeh,
    ModelFieldValue<List<FardPrayer>?>? eid,
    ModelFieldValue<amplify_core.TemporalDateTime>? startDate,
    ModelFieldValue<String>? timeZone,
    ModelFieldValue<User>? createdByUser,
    ModelFieldValue<User>? updatedByUser,
    ModelFieldValue<Mosque>? mosque,
    ModelFieldValue<amplify_core.TemporalDateTime>? createdAt,
    ModelFieldValue<amplify_core.TemporalDateTime>? updatedAt,
    ModelFieldValue<List<String>?>? owners
  }) {
    return PrayerTime._internal(
      id: id,
      fajr: fajr == null ? this.fajr : fajr.value,
      dhuhr: dhuhr == null ? this.dhuhr : dhuhr.value,
      asr: asr == null ? this.asr : asr.value,
      maghrib: maghrib == null ? this.maghrib : maghrib.value,
      isha: isha == null ? this.isha : isha.value,
      jummah: jummah == null ? this.jummah : jummah.value,
      taraweeh: taraweeh == null ? this.taraweeh : taraweeh.value,
      eid: eid == null ? this.eid : eid.value,
      startDate: startDate == null ? this.startDate : startDate.value,
      timeZone: timeZone == null ? this.timeZone : timeZone.value,
      createdByUser: createdByUser == null ? this.createdByUser : createdByUser.value,
      updatedByUser: updatedByUser == null ? this.updatedByUser : updatedByUser.value,
      mosque: mosque == null ? this.mosque : mosque.value,
      createdAt: createdAt == null ? this.createdAt : createdAt.value,
      updatedAt: updatedAt == null ? this.updatedAt : updatedAt.value,
      owners: owners == null ? this.owners : owners.value
    );
  }
  
  PrayerTime.fromJson(Map<String, dynamic> json)  
    : id = json['id'],
      _fajr = json['fajr'] != null
        ? FardPrayer.fromJson(new Map<String, dynamic>.from(json['fajr']))
        : null,
      _dhuhr = json['dhuhr'] != null
        ? FardPrayer.fromJson(new Map<String, dynamic>.from(json['dhuhr']))
        : null,
      _asr = json['asr'] != null
        ? FardPrayer.fromJson(new Map<String, dynamic>.from(json['asr']))
        : null,
      _maghrib = json['maghrib'] != null
        ? FardPrayer.fromJson(new Map<String, dynamic>.from(json['maghrib']))
        : null,
      _isha = json['isha'] != null
        ? FardPrayer.fromJson(new Map<String, dynamic>.from(json['isha']))
        : null,
      _jummah = json['jummah'] is List
        ? (json['jummah'] as List)
          .where((e) => e != null)
          .map((e) => FardPrayer.fromJson(new Map<String, dynamic>.from(e)))
          .toList()
        : null,
      _taraweeh = json['taraweeh'] != null
        ? SunnahPrayer.fromJson(new Map<String, dynamic>.from(json['taraweeh']))
        : null,
      _eid = json['eid'] is List
        ? (json['eid'] as List)
          .where((e) => e != null)
          .map((e) => FardPrayer.fromJson(new Map<String, dynamic>.from(e)))
          .toList()
        : null,
      _startDate = json['startDate'] != null ? amplify_core.TemporalDateTime.fromString(json['startDate']) : null,
      _timeZone = json['timeZone'],
      _createdByUser = json['createdByUser'] != null
        ? json['createdByUser']['serializedData'] != null
          ? User.fromJson(new Map<String, dynamic>.from(json['createdByUser']['serializedData']))
          : User.fromJson(new Map<String, dynamic>.from(json['createdByUser']))
        : null,
      _updatedByUser = json['updatedByUser'] != null
        ? json['updatedByUser']['serializedData'] != null
          ? User.fromJson(new Map<String, dynamic>.from(json['updatedByUser']['serializedData']))
          : User.fromJson(new Map<String, dynamic>.from(json['updatedByUser']))
        : null,
      _mosque = json['mosque'] != null
        ? json['mosque']['serializedData'] != null
          ? Mosque.fromJson(new Map<String, dynamic>.from(json['mosque']['serializedData']))
          : Mosque.fromJson(new Map<String, dynamic>.from(json['mosque']))
        : null,
      _createdAt = json['createdAt'] != null ? amplify_core.TemporalDateTime.fromString(json['createdAt']) : null,
      _updatedAt = json['updatedAt'] != null ? amplify_core.TemporalDateTime.fromString(json['updatedAt']) : null,
      _owners = json['owners']?.cast<String>();
  
  Map<String, dynamic> toJson() => {
    'id': id, 'fajr': _fajr?.toJson(), 'dhuhr': _dhuhr?.toJson(), 'asr': _asr?.toJson(), 'maghrib': _maghrib?.toJson(), 'isha': _isha?.toJson(), 'jummah': _jummah?.map((FardPrayer? e) => e?.toJson()).toList(), 'taraweeh': _taraweeh?.toJson(), 'eid': _eid?.map((FardPrayer? e) => e?.toJson()).toList(), 'startDate': _startDate?.format(), 'timeZone': _timeZone, 'createdByUser': _createdByUser?.toJson(), 'updatedByUser': _updatedByUser?.toJson(), 'mosque': _mosque?.toJson(), 'createdAt': _createdAt?.format(), 'updatedAt': _updatedAt?.format(), 'owners': _owners
  };
  
  Map<String, Object?> toMap() => {
    'id': id,
    'fajr': _fajr,
    'dhuhr': _dhuhr,
    'asr': _asr,
    'maghrib': _maghrib,
    'isha': _isha,
    'jummah': _jummah,
    'taraweeh': _taraweeh,
    'eid': _eid,
    'startDate': _startDate,
    'timeZone': _timeZone,
    'createdByUser': _createdByUser,
    'updatedByUser': _updatedByUser,
    'mosque': _mosque,
    'createdAt': _createdAt,
    'updatedAt': _updatedAt,
    'owners': _owners
  };

  static final amplify_core.QueryModelIdentifier<PrayerTimeModelIdentifier> MODEL_IDENTIFIER = amplify_core.QueryModelIdentifier<PrayerTimeModelIdentifier>();
  static final ID = amplify_core.QueryField(fieldName: "id");
  static final FAJR = amplify_core.QueryField(fieldName: "fajr");
  static final DHUHR = amplify_core.QueryField(fieldName: "dhuhr");
  static final ASR = amplify_core.QueryField(fieldName: "asr");
  static final MAGHRIB = amplify_core.QueryField(fieldName: "maghrib");
  static final ISHA = amplify_core.QueryField(fieldName: "isha");
  static final JUMMAH = amplify_core.QueryField(fieldName: "jummah");
  static final TARAWEEH = amplify_core.QueryField(fieldName: "taraweeh");
  static final EID = amplify_core.QueryField(fieldName: "eid");
  static final STARTDATE = amplify_core.QueryField(fieldName: "startDate");
  static final TIMEZONE = amplify_core.QueryField(fieldName: "timeZone");
  static final CREATEDBYUSER = amplify_core.QueryField(
    fieldName: "createdByUser",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'User'));
  static final UPDATEDBYUSER = amplify_core.QueryField(
    fieldName: "updatedByUser",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'User'));
  static final MOSQUE = amplify_core.QueryField(
    fieldName: "mosque",
    fieldType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.model, ofModelName: 'Mosque'));
  static final CREATEDAT = amplify_core.QueryField(fieldName: "createdAt");
  static final UPDATEDAT = amplify_core.QueryField(fieldName: "updatedAt");
  static final OWNERS = amplify_core.QueryField(fieldName: "owners");
  static var schema = amplify_core.Model.defineSchema(define: (amplify_core.ModelSchemaDefinition modelSchemaDefinition) {
    modelSchemaDefinition.name = "PrayerTime";
    modelSchemaDefinition.pluralName = "PrayerTimes";
    
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
      amplify_core.ModelIndex(fields: const ["createdByUserID"], name: "byCreatedByUser"),
      amplify_core.ModelIndex(fields: const ["updatedByUserID"], name: "byUpdatedByUser"),
      amplify_core.ModelIndex(fields: const ["mosqueID"], name: "byMosque")
    ];
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.id());
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'fajr',
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'dhuhr',
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'asr',
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'maghrib',
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'isha',
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'jummah',
      isRequired: true,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embeddedCollection, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'taraweeh',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'SunnahPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'eid',
      isRequired: false,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embeddedCollection, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: PrayerTime.STARTDATE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: PrayerTime.TIMEZONE,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.belongsTo(
      key: PrayerTime.CREATEDBYUSER,
      isRequired: true,
      targetNames: ['createdByUserID'],
      ofModelName: 'User'
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.belongsTo(
      key: PrayerTime.UPDATEDBYUSER,
      isRequired: true,
      targetNames: ['updatedByUserID'],
      ofModelName: 'User'
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.belongsTo(
      key: PrayerTime.MOSQUE,
      isRequired: true,
      targetNames: ['mosqueID'],
      ofModelName: 'Mosque'
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: PrayerTime.CREATEDAT,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: PrayerTime.UPDATEDAT,
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.dateTime)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.field(
      key: PrayerTime.OWNERS,
      isRequired: false,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.collection, ofModelName: amplify_core.ModelFieldTypeEnum.string.name)
    ));
  });
}

class _PrayerTimeModelType extends amplify_core.ModelType<PrayerTime> {
  const _PrayerTimeModelType();
  
  @override
  PrayerTime fromJson(Map<String, dynamic> jsonData) {
    return PrayerTime.fromJson(jsonData);
  }
  
  @override
  String modelName() {
    return 'PrayerTime';
  }
}

/**
 * This is an auto generated class representing the model identifier
 * of [PrayerTime] in your schema.
 */
class PrayerTimeModelIdentifier implements amplify_core.ModelIdentifier<PrayerTime> {
  final String id;

  /** Create an instance of PrayerTimeModelIdentifier using [id] the primary key. */
  const PrayerTimeModelIdentifier({
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
  String toString() => 'PrayerTimeModelIdentifier(id: $id)';
  
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    
    return other is PrayerTimeModelIdentifier &&
      id == other.id;
  }
  
  @override
  int get hashCode =>
    id.hashCode;
}