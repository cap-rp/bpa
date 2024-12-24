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
import type { WorkflowLogApi } from './WorkflowLogApi';
import { UserInfo, UserInfoType } from './UserInfo';

/**
 * This class represents the entity "WorkflowLogCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export class WorkflowLog<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkflowLogType<T>
{
  /**
   * Technical entity name for WorkflowLog.
   */
  static override _entityName = 'WorkflowLogCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkflowLog entity.
   */
  static _keys = ['SAP__Origin', 'InstanceID', 'EventOrder'];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  declare sapOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Instance Id.
   */
  declare instanceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Event Order.
   */
  declare eventOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reference Instance Id.
   */
  declare referenceInstanceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Performed By.
   * @nullable
   */
  declare performedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Performed By Name.
   * @nullable
   */
  declare performedByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   */
  declare status: DeserializedType<T, 'Edm.String'>;
  /**
   * Timestamp.
   * @nullable
   */
  declare timestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supports Navigation.
   * @nullable
   */
  declare supportsNavigation?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Result.
   * @nullable
   */
  declare result?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Result Type.
   * @nullable
   */
  declare resultType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Timestamp.
   * @nullable
   */
  declare creationTimestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Timestamp.
   * @nullable
   */
  declare endTimestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link UserInfo} entity.
   */
  declare performedByDetails?: UserInfo<T> | null;

  constructor(_entityApi: WorkflowLogApi<T>) {
    super(_entityApi);
  }
}

export interface WorkflowLogType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  instanceId: DeserializedType<T, 'Edm.String'>;
  eventOrder: DeserializedType<T, 'Edm.Int32'>;
  referenceInstanceId: DeserializedType<T, 'Edm.String'>;
  performedBy?: DeserializedType<T, 'Edm.String'> | null;
  performedByName?: DeserializedType<T, 'Edm.String'> | null;
  status: DeserializedType<T, 'Edm.String'>;
  timestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  supportsNavigation?: DeserializedType<T, 'Edm.Boolean'> | null;
  result?: DeserializedType<T, 'Edm.String'> | null;
  resultType?: DeserializedType<T, 'Edm.String'> | null;
  creationTimestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  endTimestamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  performedByDetails?: UserInfoType<T> | null;
}
