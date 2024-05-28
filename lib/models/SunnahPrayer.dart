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


/** This is an auto generated class representing the SunnahPrayer type in your schema. */
class SunnahPrayer {
  final amplify_core.TemporalTime? _start;
  final amplify_core.TemporalTime? _end;

  amplify_core.TemporalTime get start {
    try {
      return _start!;
    } catch(e) {
      throw amplify_core.AmplifyCodeGenModelException(
          amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastExceptionMessage,
          recoverySuggestion:
            amplify_core.AmplifyExceptionMessages.codeGenRequiredFieldForceCastRecoverySuggestion,
          underlyingException: e.toString()
          );
    }
  }
  
  amplify_core.TemporalTime? get end {
    return _end;
  }
  
  const SunnahPrayer._internal({required start, end}): _start = start, _end = end;
  
  factory SunnahPrayer({required amplify_core.TemporalTime start, amplify_core.TemporalTime? end}) {
    return SunnahPrayer._internal(
      start: start,
      end: end);
  }
  
  bool equals(Object other) {
    return this == other;
  }
  
  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is SunnahPrayer &&
      _start == other._start &&
      _end == other._end;
  }
  
  @override
  int get hashCode => toString().hashCode;
  
  @override
  String toString() {
    var buffer = new StringBuffer();
    
    buffer.write("SunnahPrayer {");
    buffer.write("start=" + (_start != null ? _start!.format() : "null") + ", ");
    buffer.write("end=" + (_end != null ? _end!.format() : "null"));
    buffer.write("}");
    
    return buffer.toString();
  }
  
  SunnahPrayer copyWith({amplify_core.TemporalTime? start, amplify_core.TemporalTime? end}) {
    return SunnahPrayer._internal(
      start: start ?? this.start,
      end: end ?? this.end);
  }
  
  SunnahPrayer copyWithModelFieldValues({
    ModelFieldValue<amplify_core.TemporalTime>? start,
    ModelFieldValue<amplify_core.TemporalTime?>? end
  }) {
    return SunnahPrayer._internal(
      start: start == null ? this.start : start.value,
      end: end == null ? this.end : end.value
    );
  }
  
  SunnahPrayer.fromJson(Map<String, dynamic> json)  
    : _start = json['start'] != null ? amplify_core.TemporalTime.fromString(json['start']) : null,
      _end = json['end'] != null ? amplify_core.TemporalTime.fromString(json['end']) : null;
  
  Map<String, dynamic> toJson() => {
    'start': _start?.format(), 'end': _end?.format()
  };
  
  Map<String, Object?> toMap() => {
    'start': _start,
    'end': _end
  };

  static var schema = amplify_core.Model.defineSchema(define: (amplify_core.ModelSchemaDefinition modelSchemaDefinition) {
    modelSchemaDefinition.name = "SunnahPrayer";
    modelSchemaDefinition.pluralName = "SunnahPrayers";
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.customTypeField(
      fieldName: 'start',
      isRequired: true,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.time)
    ));
    
    modelSchemaDefinition.addField(amplify_core.ModelFieldDefinition.customTypeField(
      fieldName: 'end',
      isRequired: false,
      ofType: amplify_core.ModelFieldType(amplify_core.ModelFieldTypeEnum.time)
    ));
  });
}