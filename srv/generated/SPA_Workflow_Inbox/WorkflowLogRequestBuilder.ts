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
import { WorkflowLog } from './WorkflowLog';

/**
 * Request builder class for operations supported on the {@link WorkflowLog} entity.
 */
export class WorkflowLogRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkflowLog<T>, T> {
  /**
   * Returns a request builder for querying all `WorkflowLog` entities.
   * @returns A request builder for creating requests to retrieve all `WorkflowLog` entities.
   */
  getAll(): GetAllRequestBuilder<WorkflowLog<T>, T> {
    return new GetAllRequestBuilder<WorkflowLog<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkflowLog` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkflowLog`.
   */
  create(entity: WorkflowLog<T>): CreateRequestBuilder<WorkflowLog<T>, T> {
    return new CreateRequestBuilder<WorkflowLog<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WorkflowLog` entity based on its keys.
   * @param sapOrigin Key property. See {@link WorkflowLog.sapOrigin}.
   * @param instanceId Key property. See {@link WorkflowLog.instanceId}.
   * @param eventOrder Key property. See {@link WorkflowLog.eventOrder}.
   * @returns A request builder for creating requests to retrieve one `WorkflowLog` entity based on its keys.
   */
  getByKey(
    sapOrigin: DeserializedType<T, 'Edm.String'>,
    instanceId: DeserializedType<T, 'Edm.String'>,
    eventOrder: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<WorkflowLog<T>, T> {
    return new GetByKeyRequestBuilder<WorkflowLog<T>, T>(this.entityApi, {
      SAP__Origin: sapOrigin,
      InstanceID: instanceId,
      EventOrder: eventOrder
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkflowLog`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkflowLog`.
   */
  update(entity: WorkflowLog<T>): UpdateRequestBuilder<WorkflowLog<T>, T> {
    return new UpdateRequestBuilder<WorkflowLog<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkflowLog`.
   * @param sapOrigin Key property. See {@link WorkflowLog.sapOrigin}.
   * @param instanceId Key property. See {@link WorkflowLog.instanceId}.
   * @param eventOrder Key property. See {@link WorkflowLog.eventOrder}.
   * @returns A request builder for creating requests that delete an entity of type `WorkflowLog`.
   */
  delete(
    sapOrigin: string,
    instanceId: string,
    eventOrder: number
  ): DeleteRequestBuilder<WorkflowLog<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkflowLog`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkflowLog` by taking the entity as a parameter.
   */
  delete(entity: WorkflowLog<T>): DeleteRequestBuilder<WorkflowLog<T>, T>;
  delete(
    sapOriginOrEntity: any,
    instanceId?: string,
    eventOrder?: number
  ): DeleteRequestBuilder<WorkflowLog<T>, T> {
    return new DeleteRequestBuilder<WorkflowLog<T>, T>(
      this.entityApi,
      sapOriginOrEntity instanceof WorkflowLog
        ? sapOriginOrEntity
        : {
            SAP__Origin: sapOriginOrEntity!,
            InstanceID: instanceId!,
            EventOrder: eventOrder!
          }
    );
  }
}
