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
import { TaskSupports, TaskSupportsField } from './TaskSupports';
import type { TaskApi } from './TaskApi';
import { TaskDescription, TaskDescriptionType } from './TaskDescription';
import { TaskDefinition, TaskDefinitionType } from './TaskDefinition';
import { CustomAttribute, CustomAttributeType } from './CustomAttribute';
import { WorkflowLog, WorkflowLogType } from './WorkflowLog';

/**
 * This class represents the entity "TaskCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export class Task<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaskType<T>
{
  /**
   * Technical entity name for Task.
   */
  static override _entityName = 'TaskCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Task entity.
   */
  static _keys = ['SAP__Origin', 'InstanceID'];
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
   * Task Definition Id.
   * @nullable
   */
  declare taskDefinitionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Definition Name.
   * @nullable
   */
  declare taskDefinitionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Title.
   * @nullable
   */
  declare taskTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Has Comments.
   * @nullable
   */
  declare hasComments?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Has Attachments.
   * @nullable
   */
  declare hasAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Has Potential Owners.
   * @nullable
   */
  declare hasPotentialOwners?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Claim.
   * @nullable
   */
  declare supportsClaim?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Release.
   * @nullable
   */
  declare supportsRelease?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Forward.
   * @nullable
   */
  declare supportsForward?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Comments.
   * @nullable
   */
  declare supportsComments?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supports Attachments.
   * @nullable
   */
  declare supportsAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Created On.
   * @nullable
   */
  declare createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Created By.
   * @nullable
   */
  declare createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created By Name.
   * @nullable
   */
  declare createdByName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processor.
   * @nullable
   */
  declare processor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Completion Dead Line.
   * @nullable
   */
  declare completionDeadLine?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Substituted User Name.
   * @nullable
   */
  declare substitutedUserName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   * @nullable
   */
  declare priority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority Number.
   * @nullable
   */
  declare priorityNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Task Supports.
   * @nullable
   */
  declare taskSupports?: TaskSupports<T> | null;
  /**
   * Gui Link.
   * @nullable
   */
  declare guiLink?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confidence Level.
   * @nullable
   */
  declare confidenceLevel?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * One-to-one navigation property to the {@link TaskDescription} entity.
   */
  declare description?: TaskDescription<T> | null;
  /**
   * One-to-one navigation property to the {@link TaskDefinition} entity.
   */
  declare taskDefinitionData?: TaskDefinition<T> | null;
  /**
   * One-to-many navigation property to the {@link CustomAttribute} entity.
   */
  declare customAttributeData: CustomAttribute<T>[];
  /**
   * One-to-many navigation property to the {@link WorkflowLog} entity.
   */
  declare workflowLogs: WorkflowLog<T>[];

  constructor(_entityApi: TaskApi<T>) {
    super(_entityApi);
  }
}

export interface TaskType<T extends DeSerializers = DefaultDeSerializers> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  instanceId: DeserializedType<T, 'Edm.String'>;
  taskDefinitionId?: DeserializedType<T, 'Edm.String'> | null;
  taskDefinitionName?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  taskTitle?: DeserializedType<T, 'Edm.String'> | null;
  hasComments?: DeserializedType<T, 'Edm.Boolean'> | null;
  hasAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
  hasPotentialOwners?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsClaim?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsRelease?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsForward?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsComments?: DeserializedType<T, 'Edm.Boolean'> | null;
  supportsAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
  createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdByName?: DeserializedType<T, 'Edm.String'> | null;
  processor?: DeserializedType<T, 'Edm.String'> | null;
  completionDeadLine?: DeserializedType<T, 'Edm.DateTime'> | null;
  substitutedUserName?: DeserializedType<T, 'Edm.String'> | null;
  priority?: DeserializedType<T, 'Edm.String'> | null;
  priorityNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  taskSupports?: TaskSupports<T> | null;
  guiLink?: DeserializedType<T, 'Edm.String'> | null;
  confidenceLevel?: DeserializedType<T, 'Edm.Decimal'> | null;
  description?: TaskDescriptionType<T> | null;
  taskDefinitionData?: TaskDefinitionType<T> | null;
  customAttributeData: CustomAttributeType<T>[];
  workflowLogs: WorkflowLogType<T>[];
}
