/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  CustomAttribute,
  CustomAttributeDefinition,
  SubstitutesRule,
  SubstitutionRule,
  Task,
  TaskDefinition,
  TaskDescription,
  UserInfo,
  WorkflowLog,
  DecisionOptionsParameters,
  ClaimParameters,
  ReleaseParameters,
  ForwardParameters,
  DeleteSubstitutionRuleParameters,
  EnableSubstitutionRuleParameters,
  DecisionOption,
  SubstitutionRuleReturn
} from './index';

/**
 * Batch builder for operations supported on the Spa Workflow Inbox.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadSpaWorkflowInboxRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadSpaWorkflowInboxRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadSpaWorkflowInboxRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadSpaWorkflowInboxRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadSpaWorkflowInboxRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultSpaWorkflowInboxPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Spa Workflow Inbox.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteSpaWorkflowInboxRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteSpaWorkflowInboxRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteSpaWorkflowInboxRequestBuilder<DeSerializersT>
    | Array<WriteSpaWorkflowInboxRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteSpaWorkflowInboxRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultSpaWorkflowInboxPath = '/';
export type ReadSpaWorkflowInboxRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<CustomAttribute<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      CustomAttributeDefinition<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<SubstitutesRule<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SubstitutionRule<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Task<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TaskDefinition<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TaskDescription<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserInfo<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WorkflowLog<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomAttribute<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CustomAttributeDefinition<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SubstitutesRule<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SubstitutionRule<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Task<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TaskDefinition<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TaskDescription<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserInfo<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WorkflowLog<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      DecisionOptionsParameters<DeSerializersT>,
      DecisionOption[]
    >;
export type WriteSpaWorkflowInboxRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<CustomAttribute<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomAttribute<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomAttribute<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      CustomAttributeDefinition<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CustomAttributeDefinition<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CustomAttributeDefinition<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<SubstitutesRule<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SubstitutesRule<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SubstitutesRule<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SubstitutionRule<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SubstitutionRule<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SubstitutionRule<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Task<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Task<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Task<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TaskDefinition<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TaskDefinition<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TaskDefinition<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TaskDescription<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TaskDescription<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TaskDescription<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserInfo<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserInfo<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserInfo<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WorkflowLog<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WorkflowLog<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WorkflowLog<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      ClaimParameters<DeSerializersT>,
      Task
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ReleaseParameters<DeSerializersT>,
      Task
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ForwardParameters<DeSerializersT>,
      Task
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeleteSubstitutionRuleParameters<DeSerializersT>,
      SubstitutionRuleReturn
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        EnableSubstitutionRuleParameters<DeSerializersT>,
        never
      >,
      'execute'
    >;
