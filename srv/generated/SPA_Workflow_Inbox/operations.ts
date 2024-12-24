/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  entityDeserializer,
  transformReturnValueForComplexTypeList,
  transformReturnValueForEntity,
  transformReturnValueForComplexType,
  throwErrorWhenReturnTypeIsUnionType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { spaWorkflowInbox } from './service';
import { DecisionOption } from './DecisionOption';
import { Task } from './Task';
import { TaskApi } from './TaskApi';
import { SubstitutionRuleReturn } from './SubstitutionRuleReturn';

/**
 * Type of the parameters to be passed to {@link decisionOptions}.
 */
export interface DecisionOptionsParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Instance Id.
   */
  instanceId?: string | null;
}

/**
 * Decision Options.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function decisionOptions<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DecisionOptionsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DecisionOptionsParameters<DeSerializersT>,
  DecisionOption[]
> {
  const params = {
    sapOrigin: new OperationParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    instanceId: new OperationParameter(
      'InstanceID',
      'Edm.String',
      parameters.instanceId
    )
  };

  return new OperationRequestBuilder(
    'get',
    '/',
    'DecisionOptions',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DecisionOption)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link claim}.
 */
export interface ClaimParameters<DeSerializersT extends DeSerializers> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Instance Id.
   */
  instanceId?: string | null;
  /**
   * Comments.
   */
  comments?: string | null;
}

/**
 * Claim.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function claim<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ClaimParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ClaimParameters<DeSerializersT>,
  Task
> {
  const params = {
    sapOrigin: new OperationParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    instanceId: new OperationParameter(
      'InstanceID',
      'Edm.String',
      parameters.instanceId
    ),
    comments: new OperationParameter(
      'Comments',
      'Edm.String',
      parameters.comments
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'Claim',
    data =>
      transformReturnValueForEntity(
        data,
        spaWorkflowInbox(deSerializers).taskApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link release}.
 */
export interface ReleaseParameters<DeSerializersT extends DeSerializers> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Instance Id.
   */
  instanceId?: string | null;
}

/**
 * Release.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function release<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReleaseParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ReleaseParameters<DeSerializersT>,
  Task
> {
  const params = {
    sapOrigin: new OperationParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    instanceId: new OperationParameter(
      'InstanceID',
      'Edm.String',
      parameters.instanceId
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'Release',
    data =>
      transformReturnValueForEntity(
        data,
        spaWorkflowInbox(deSerializers).taskApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link forward}.
 */
export interface ForwardParameters<DeSerializersT extends DeSerializers> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Instance Id.
   */
  instanceId?: string | null;
  /**
   * Forward To.
   */
  forwardTo: string;
}

/**
 * Forward.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function forward<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ForwardParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ForwardParameters<DeSerializersT>,
  Task
> {
  const params = {
    sapOrigin: new OperationParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    instanceId: new OperationParameter(
      'InstanceID',
      'Edm.String',
      parameters.instanceId
    ),
    forwardTo: new OperationParameter(
      'ForwardTo',
      'Edm.String',
      parameters.forwardTo
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'Forward',
    data =>
      transformReturnValueForEntity(
        data,
        spaWorkflowInbox(deSerializers).taskApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deleteSubstitutionRule}.
 */
export interface DeleteSubstitutionRuleParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Substitution Rule Id.
   */
  substitutionRuleId?: string | null;
}

/**
 * Delete Substitution Rule.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deleteSubstitutionRule<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteSubstitutionRuleParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeleteSubstitutionRuleParameters<DeSerializersT>,
  SubstitutionRuleReturn
> {
  const params = {
    sapOrigin: new OperationParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    substitutionRuleId: new OperationParameter(
      'SubstitutionRuleID',
      'Edm.String',
      parameters.substitutionRuleId
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'DeleteSubstitutionRule',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, SubstitutionRuleReturn)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link enableSubstitutionRule}.
 */
export interface EnableSubstitutionRuleParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Substitution Rule Id.
   */
  substitutionRuleId?: string | null;
  /**
   * Enabled.
   */
  enabled?: boolean | null;
}

/**
 * Enable Substitution Rule. The 'execute' method does not exist for this function import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function enableSubstitutionRule<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EnableSubstitutionRuleParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    EnableSubstitutionRuleParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {
    sapOrigin: new OperationParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    substitutionRuleId: new OperationParameter(
      'SubstitutionRuleID',
      'Edm.String',
      parameters.substitutionRuleId
    ),
    enabled: new OperationParameter(
      'Enabled',
      'Edm.Boolean',
      parameters.enabled
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'EnableSubstitutionRule',
    data => throwErrorWhenReturnTypeIsUnionType(data, 'EnableSubstitutionRule'),
    params,
    deSerializers
  );
}

export const operations = {
  decisionOptions,
  claim,
  release,
  forward,
  deleteSubstitutionRule,
  enableSubstitutionRule
};
