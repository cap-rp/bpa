/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { CustomAttribute } from './CustomAttribute';

/**
 * Request builder class for operations supported on the {@link CustomAttribute} entity.
 */
export class CustomAttributeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomAttribute<T>, T> {
  /**
   * Returns a request builder for querying all `CustomAttribute` entities.
   * @returns A request builder for creating requests to retrieve all `CustomAttribute` entities.
   */
  getAll(): GetAllRequestBuilder<CustomAttribute<T>, T> {
    return new GetAllRequestBuilder<CustomAttribute<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomAttribute` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomAttribute`.
   */
  create(
    entity: CustomAttribute<T>
  ): CreateRequestBuilder<CustomAttribute<T>, T> {
    return new CreateRequestBuilder<CustomAttribute<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomAttribute` entity based on its keys.
   * @param sapOrigin Key property. See {@link CustomAttribute.sapOrigin}.
   * @param instanceId Key property. See {@link CustomAttribute.instanceId}.
   * @param name Key property. See {@link CustomAttribute.name}.
   * @returns A request builder for creating requests to retrieve one `CustomAttribute` entity based on its keys.
   */
  getByKey(
    sapOrigin: DeserializedType<T, 'Edm.String'>,
    instanceId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomAttribute<T>, T> {
    return new GetByKeyRequestBuilder<CustomAttribute<T>, T>(this.entityApi, {
      SAP__Origin: sapOrigin,
      InstanceID: instanceId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomAttribute`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomAttribute`.
   */
  update(
    entity: CustomAttribute<T>
  ): UpdateRequestBuilder<CustomAttribute<T>, T> {
    return new UpdateRequestBuilder<CustomAttribute<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomAttribute`.
   * @param sapOrigin Key property. See {@link CustomAttribute.sapOrigin}.
   * @param instanceId Key property. See {@link CustomAttribute.instanceId}.
   * @param name Key property. See {@link CustomAttribute.name}.
   * @returns A request builder for creating requests that delete an entity of type `CustomAttribute`.
   */
  delete(
    sapOrigin: string,
    instanceId: string,
    name: string
  ): DeleteRequestBuilder<CustomAttribute<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomAttribute`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomAttribute` by taking the entity as a parameter.
   */
  delete(
    entity: CustomAttribute<T>
  ): DeleteRequestBuilder<CustomAttribute<T>, T>;
  delete(
    sapOriginOrEntity: any,
    instanceId?: string,
    name?: string
  ): DeleteRequestBuilder<CustomAttribute<T>, T> {
    return new DeleteRequestBuilder<CustomAttribute<T>, T>(
      this.entityApi,
      sapOriginOrEntity instanceof CustomAttribute
        ? sapOriginOrEntity
        : {
            SAP__Origin: sapOriginOrEntity!,
            InstanceID: instanceId!,
            Name: name!
          }
    );
  }
}
