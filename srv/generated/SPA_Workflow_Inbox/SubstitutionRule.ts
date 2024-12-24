/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SubstitutionRuleApi } from './SubstitutionRuleApi';

/**
 * This class represents the entity "SubstitutionRuleCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export class SubstitutionRule<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SubstitutionRuleType<T>
{
  /**
   * Technical entity name for SubstitutionRule.
   */
  static override _entityName = 'SubstitutionRuleCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubstitutionRule entity.
   */
  static _keys = ['SAP__Origin', 'SubstitutionRuleID'];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  declare sapOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Substitution Rule Id.
   * Maximum length: 64.
   */
  declare substitutionRuleId: DeserializedType<T, 'Edm.String'>;
  /**
   * User.
   * Maximum length: 255.
   */
  declare user: DeserializedType<T, 'Edm.String'>;
  /**
   * Full Name.
   * Maximum length: 255.
   */
  declare fullName: DeserializedType<T, 'Edm.String'>;
  /**
   * Begin Date.
   */
  declare beginDate: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * End Date.
   * @nullable
   */
  declare endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Is Enabled.
   */
  declare isEnabled: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Mode.
   * Maximum length: 64.
   */
  declare mode: DeserializedType<T, 'Edm.String'>;
  /**
   * Supports Delete Substitution Rule.
   * @nullable
   */
  declare supportsDeleteSubstitutionRule?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Supports Enable Substitution Rule.
   * @nullable
   */
  declare supportsEnableSubstitutionRule?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;

  constructor(_entityApi: SubstitutionRuleApi<T>) {
    super(_entityApi);
  }
}

export interface SubstitutionRuleType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  substitutionRuleId: DeserializedType<T, 'Edm.String'>;
  user: DeserializedType<T, 'Edm.String'>;
  fullName: DeserializedType<T, 'Edm.String'>;
  beginDate: DeserializedType<T, 'Edm.DateTime'>;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  isEnabled: DeserializedType<T, 'Edm.Boolean'>;
  mode: DeserializedType<T, 'Edm.String'>;
  supportsDeleteSubstitutionRule?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsEnableSubstitutionRule?: DeserializedType<T, 'Edm.Boolean'> | null;
}
