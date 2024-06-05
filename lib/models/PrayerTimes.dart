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


/** This is an auto generated class representing the PrayerTimes type in your schema. */
class PrayerTimes {
  final String? _timeZone;
  final FardPrayer? _fajr;
  final FardPrayer? _dhuhr;
  final FardPrayer? _asr;
  final FardPrayer? _maghrib;
  final FardPrayer? _isha;
  final List<FardPrayer>? _jummah;
  final SunnahPrayer? _tahajjud;
  final SunnahPrayer? _taraweeh;
  final List<SunnahPrayer>? _eidAlAdha;
  final List<SunnahPrayer>? _eidAlFitr;

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
  
  FardPrayer? get fajr {
    return _fajr;
  }
  
  FardPrayer? get dhuhr {
    return _dhuhr;
  }
  
  FardPrayer? get asr {
    return _asr;
  }
  
  FardPrayer? get maghrib {
    return _maghrib;
  }
  
  FardPrayer? get isha {
    return _isha;
  }
  
  List<FardPrayer>? get jummah {
    return _jummah;
  }
  
  SunnahPrayer? get tahajjud {
    return _tahajjud;
  }
  
  SunnahPrayer? get taraweeh {
    return _taraweeh;
  }
  
  List<SunnahPrayer>? get eidAlAdha {
    return _eidAlAdha;
  }
  
  List<SunnahPrayer>? get eidAlFitr {
    return _eidAlFitr;
  }
  
  const PrayerTimes._internal({required timeZone, fajr, dhuhr, asr, maghrib, isha, jummah, tahajjud, taraweeh, eidAlAdha, eidAlFitr}): _timeZone = timeZone, _fajr = fajr, _dhuhr = dhuhr, _asr = asr, _maghrib = maghrib, _isha = isha, _jummah = jummah, _tahajjud = tahajjud, _taraweeh = taraweeh, _eidAlAdha = eidAlAdha, _eidAlFitr = eidAlFitr;
  
  factory PrayerTimes({required String timeZone, FardPrayer? fajr, FardPrayer? dhuhr, FardPrayer? asr, FardPrayer? maghrib, FardPrayer? isha, List<FardPrayer>? jummah, SunnahPrayer? tahajjud, SunnahPrayer? taraweeh, List<SunnahPrayer>? eidAlAdha, List<SunnahPrayer>? eidAlFitr}) {
    return PrayerTimes._internal(
      timeZone: timeZone,
      fajr: fajr,
      dhuhr: dhuhr,
      asr: asr,
      maghrib: maghrib,
      isha: isha,
      jummah: jummah != null ? List<FardPrayer>.unmodifiable(jummah) : jummah,
      tahajjud: tahajjud,
      taraweeh: taraweeh,
      eidAlAdha: eidAlAdha != null ? List<SunnahPrayer>.unmodifiable(eidAlAdha) : eidAlAdha,
      eidAlFitr: eidAlFitr != null ? List<SunnahPrayer>.unmodifiable(eidAlFitr) : eidAlFitr);
  }
  
  bool equals(Object other) {
    return this == other;
  }
  
  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is PrayerTimes &&
      _timeZone == other._timeZone &&
      _fajr == other._fajr &&
      _dhuhr == other._dhuhr &&
      _asr == other._asr &&
      _maghrib == other._maghrib &&
      _isha == other._isha &&
      DeepCollectionEquality().equals(_jummah, other._jummah) &&
      _tahajjud == other._tahajjud &&
      _taraweeh == other._taraweeh &&
      DeepCollectionEquality().equals(_eidAlAdha, other._eidAlAdha) &&
      DeepCollectionEquality().equals(_eidAlFitr, other._eidAlFitr);
  }
  
  @override
  int get hashCode => toString().hashCode;
  
  @override
  String toString() {
    var buffer = new StringBuffer();
    
    buffer.write("PrayerTimes {");
    buffer.write("timeZone=" + "$_timeZone" + ", ");
    buffer.write("fajr=" + (_fajr != null ? _fajr!.toString() : "null") + ", ");
    buffer.write("dhuhr=" + (_dhuhr != null ? _dhuhr!.toString() : "null") + ", ");
    buffer.write("asr=" + (_asr != null ? _asr!.toString() : "null") + ", ");
    buffer.write("maghrib=" + (_maghrib != null ? _maghrib!.toString() : "null") + ", ");
    buffer.write("isha=" + (_isha != null ? _isha!.toString() : "null") + ", ");
    buffer.write("jummah=" + (_jummah != null ? _jummah!.toString() : "null") + ", ");
    buffer.write("tahajjud=" + (_tahajjud != null ? _tahajjud!.toString() : "null") + ", ");
    buffer.write("taraweeh=" + (_taraweeh != null ? _taraweeh!.toString() : "null") + ", ");
    buffer.write("eidAlAdha=" + (_eidAlAdha != null ? _eidAlAdha!.toString() : "null") + ", ");
    buffer.write("eidAlFitr=" + (_eidAlFitr != null ? _eidAlFitr!.toString() : "null"));
    buffer.write("}");
    
    return buffer.toString();
  }
  
  PrayerTimes copyWith({String? timeZone, FardPrayer? fajr, FardPrayer? dhuhr, FardPrayer? asr, FardPrayer? maghrib, FardPrayer? isha, List<FardPrayer>? jummah, SunnahPrayer? tahajjud, SunnahPrayer? taraweeh, List<SunnahPrayer>? eidAlAdha, List<SunnahPrayer>? eidAlFitr}) {
    return PrayerTimes._internal(
      timeZone: timeZone ?? this.timeZone,
      fajr: fajr ?? this.fajr,
      dhuhr: dhuhr ?? this.dhuhr,
      asr: asr ?? this.asr,
      maghrib: maghrib ?? this.maghrib,
      isha: isha ?? this.isha,
      jummah: jummah ?? this.jummah,
      tahajjud: tahajjud ?? this.tahajjud,
      taraweeh: taraweeh ?? this.taraweeh,
      eidAlAdha: eidAlAdha ?? this.eidAlAdha,
      eidAlFitr: eidAlFitr ?? this.eidAlFitr);
  }
  
  PrayerTimes copyWithModelFieldValues({
    ModelFieldValue<String>? timeZone,
    ModelFieldValue<FardPrayer?>? fajr,
    ModelFieldValue<FardPrayer?>? dhuhr,
    ModelFieldValue<FardPrayer?>? asr,
    ModelFieldValue<FardPrayer?>? maghrib,
    ModelFieldValue<FardPrayer?>? isha,
    ModelFieldValue<List<FardPrayer>>? jummah,
    ModelFieldValue<SunnahPrayer?>? tahajjud,
    ModelFieldValue<SunnahPrayer?>? taraweeh,
    ModelFieldValue<List<SunnahPrayer>>? eidAlAdha,
    ModelFieldValue<List<SunnahPrayer>>? eidAlFitr
  }) {
    return PrayerTimes._internal(
      timeZone: timeZone == null ? this.timeZone : timeZone.value,
      fajr: fajr == null ? this.fajr : fajr.value,
      dhuhr: dhuhr == null ? this.dhuhr : dhuhr.value,
      asr: asr == null ? this.asr : asr.value,
      maghrib: maghrib == null ? this.maghrib : maghrib.value,
      isha: isha == null ? this.isha : isha.value,
      jummah: jummah == null ? this.jummah : jummah.value,
      tahajjud: tahajjud == null ? this.tahajjud : tahajjud.value,
      taraweeh: taraweeh == null ? this.taraweeh : taraweeh.value,
      eidAlAdha: eidAlAdha == null ? this.eidAlAdha : eidAlAdha.value,
      eidAlFitr: eidAlFitr == null ? this.eidAlFitr : eidAlFitr.value
    );
  }
  
  PrayerTimes.fromJson(Map<String, dynamic> json)  
    : _timeZone = json['timeZone'],
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
      _tahajjud = json['tahajjud'] != null
        ? SunnahPrayer.fromJson(new Map<String, dynamic>.from(json['tahajjud']))
        : null,
      _taraweeh = json['taraweeh'] != null
        ? SunnahPrayer.fromJson(new Map<String, dynamic>.from(json['taraweeh']))
        : null,
      _eidAlAdha = json['eidAlAdha'] is List
        ? (json['eidAlAdha'] as List)
          .where((e) => e != null)
          .map((e) => SunnahPrayer.fromJson(new Map<String, dynamic>.from(e)))
          .toList()
        : null,
      _eidAlFitr = json['eidAlFitr'] is List
        ? (json['eidAlFitr'] as List)
          .where((e) => e != null)
          .map((e) => SunnahPrayer.fromJson(new Map<String, dynamic>.from(e)))
          .toList()
        : null;
  
  Map<String, dynamic> toJson() => {
    'timeZone': _timeZone, 'fajr': _fajr?.toJson(), 'dhuhr': _dhuhr?.toJson(), 'asr': _asr?.toJson(), 'maghrib': _maghrib?.toJson(), 'isha': _isha?.toJson(), 'jummah': _jummah?.map((FardPrayer? e) => e?.toJson()).toList(), 'tahajjud': _tahajjud?.toJson(), 'taraweeh': _taraweeh?.toJson(), 'eidAlAdha': _eidAlAdha?.map((SunnahPrayer? e) => e?.toJson()).toList(), 'eidAlFitr': _eidAlFitr?.map((SunnahPrayer? e) => e?.toJson()).toList()
  };
  
  Map<String, Object?> toMap() => {
    'timeZone': _timeZone,
    'fajr': _fajr,
    'dhuhr': _dhuhr,
    'asr': _asr,
    'maghrib': _maghrib,
    'isha': _isha,
    'jummah': _jummah,
    'tahajjud': _tahajjud,
    'taraweeh': _taraweeh,
    'eidAlAdha': _eidAlAdha,
    'eidAlFitr': _eidAlFitr
  };

  static var schema = amplify_core.Model.defineSchema(define: (amplify_core.ModelSchemaDefinition modelSchemaDefinition) {
    modelSchemaDefinition.name = "PrayerTimes";
    modelSchemaDefinition.pluralName = "PrayerTimes";
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.customTypeField(
      fieldName: 'timeZone',
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.string)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'fajr',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'dhuhr',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'asr',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'maghrib',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'isha',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'jummah',
      isRequired: false,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embeddedCollection, ofCustomTypeName: 'FardPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'tahajjud',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'SunnahPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'taraweeh',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embedded, ofCustomTypeName: 'SunnahPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'eidAlAdha',
      isRequired: false,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embeddedCollection, ofCustomTypeName: 'SunnahPrayer')
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.embedded(
      fieldName: 'eidAlFitr',
      isRequired: false,
      isArray: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.embeddedCollection, ofCustomTypeName: 'SunnahPrayer')
    ));
  });
}