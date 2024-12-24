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
import { Address, AddressField } from './Address';
import type { UserInfoApi } from './UserInfoApi';

/**
 * This class represents the entity "UserInfoCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export class UserInfo<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserInfoType<T>
{
  /**
   * Technical entity name for UserInfo.
   */
  static override _entityName = 'UserInfoCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UserInfo entity.
   */
  static _keys = ['SAP__Origin', 'UniqueName'];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  declare sapOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Unique Name.
   */
  declare uniqueName: DeserializedType<T, 'Edm.String'>;
  /**
   * Address.
   * @nullable
   */
  declare address?: Address<T> | null;
  /**
   * Display Name.
   * @nullable
   */
  declare displayName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   * @nullable
   */
  declare department?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Phone.
   * @nullable
   */
  declare workPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Phone.
   * @nullable
   */
  declare mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Phone.
   * @nullable
   */
  declare homePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mime Type.
   * @nullable
   */
  declare mimeType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: UserInfoApi<T>) {
    super(_entityApi);
  }
}

export interface UserInfoType<T extends DeSerializers = DefaultDeSerializers> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  uniqueName: DeserializedType<T, 'Edm.String'>;
  address?: Address<T> | null;
  displayName?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  department?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  workPhone?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  homePhone?: DeserializedType<T, 'Edm.String'> | null;
  mimeType?: DeserializedType<T, 'Edm.String'> | null;
}
