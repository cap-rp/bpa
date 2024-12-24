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
import type { TaskDefinitionApi } from './TaskDefinitionApi';
import {
  CustomAttributeDefinition,
  CustomAttributeDefinitionType
} from './CustomAttributeDefinition';

/**
 * This class represents the entity "TaskDefinitionCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export class TaskDefinition<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaskDefinitionType<T>
{
  /**
   * Technical entity name for TaskDefinition.
   */
  static override _entityName = 'TaskDefinitionCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaskDefinition entity.
   */
  static _keys = ['SAP__Origin', 'TaskDefinitionID'];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  declare sapOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Definition Id.
   */
  declare taskDefinitionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Name.
   * @nullable
   */
  declare taskName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CustomAttributeDefinition} entity.
   */
  declare customAttributeDefinitionData: CustomAttributeDefinition<T>[];

  constructor(_entityApi: TaskDefinitionApi<T>) {
    super(_entityApi);
  }
}

export interface TaskDefinitionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  taskDefinitionId: DeserializedType<T, 'Edm.String'>;
  taskName?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
  customAttributeDefinitionData: CustomAttributeDefinitionType<T>[];
}
