/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createConstMap } from '../internal/utils.js';
import { DOT, UNDERSCORE, ACCOUNT_DOT, CLOUD_DOT, CONTAINER_DOT, CLUSTER_DOT, DEPLOYMENT_DOT, DEVICE_DOT, ECS_DOT, EKS_DOT, EXECUTABLE_DOT, FAAS_DOT, GROUP_DOT, K8S_DOT, LOG_DOT, IMAGE_DOT, MODEL_DOT, NODE_DOT, OS_DOT, PROCESS_DOT, RUNTIME_DOT, SDK_DOT, SERVICE_DOT, SET_DOT, STREAM_DOT, TASK_DOT, TELEMETRY_DOT, WEBENGINE_DOT, ARN, AWS, AZURE, COMMAND, CRON, DAEMON, DESCRIPTION, HOST, ID, INSTANCE, JOB, NAME, REPLICA, SPACE, STATEFUL, TYPE, UID, VERSION, } from '../internal/constants.js';
//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Constant values for SemanticResourceAttributes
//----------------------------------------------------------------------------------------------------------
/**
 * Name of the cloud provider.
 */
export var SEMRESATTRS_CLOUD_PROVIDER = (CLOUD_DOT +
    'provider');
/**
 * The cloud account ID the resource is assigned to.
 */
export var SEMRESATTRS_CLOUD_ACCOUNT_ID = (CLOUD_DOT +
    ACCOUNT_DOT +
    ID);
/**
 * The geographical region the resource is running. Refer to your provider&#39;s docs to see the available regions, for example [Alibaba Cloud regions](https://www.alibabacloud.com/help/doc-detail/40654.htm), [AWS regions](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/), [Azure regions](https://azure.microsoft.com/en-us/global-infrastructure/geographies/), or [Google Cloud regions](https://cloud.google.com/about/locations).
 */
export var SEMRESATTRS_CLOUD_REGION = (CLOUD_DOT +
    'region');
/**
 * Cloud regions often have multiple, isolated locations known as zones to increase availability. Availability zone represents the zone where the resource is running.
 *
 * Note: Availability zones are called &#34;zones&#34; on Alibaba Cloud and Google Cloud.
 */
export var SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = (CLOUD_DOT +
    'availability_zone');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var SEMRESATTRS_CLOUD_PLATFORM = (CLOUD_DOT +
    'platform');
/**
 * The Amazon Resource Name (ARN) of an [ECS container instance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html).
 */
export var SEMRESATTRS_AWS_ECS_CONTAINER_ARN = (AWS +
    DOT +
    ECS_DOT +
    CONTAINER_DOT +
    ARN);
/**
 * The ARN of an [ECS cluster](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html).
 */
export var SEMRESATTRS_AWS_ECS_CLUSTER_ARN = (AWS +
    DOT +
    ECS_DOT +
    CLUSTER_DOT +
    ARN);
/**
 * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
 */
export var SEMRESATTRS_AWS_ECS_LAUNCHTYPE = (AWS +
    DOT +
    ECS_DOT +
    'launchtype');
/**
 * The ARN of an [ECS task definition](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html).
 */
export var SEMRESATTRS_AWS_ECS_TASK_ARN = (AWS +
    DOT +
    ECS_DOT +
    TASK_DOT +
    ARN);
/**
 * The task definition family this task definition is a member of.
 */
export var SEMRESATTRS_AWS_ECS_TASK_FAMILY = (AWS +
    DOT +
    ECS_DOT +
    TASK_DOT +
    'family');
/**
 * The revision for this task definition.
 */
export var SEMRESATTRS_AWS_ECS_TASK_REVISION = (AWS +
    DOT +
    ECS_DOT +
    TASK_DOT +
    'revision');
/**
 * The ARN of an EKS cluster.
 */
export var SEMRESATTRS_AWS_EKS_CLUSTER_ARN = (AWS +
    DOT +
    EKS_DOT +
    CLUSTER_DOT +
    ARN);
/**
 * The name(s) of the AWS log group(s) an application is writing to.
 *
 * Note: Multiple log groups must be supported for cases like multi-container applications, where a single application has sidecar containers, and each write to their own log group.
 */
export var SEMRESATTRS_AWS_LOG_GROUP_NAMES = (AWS +
    DOT +
    LOG_DOT +
    GROUP_DOT +
    NAME +
    's');
/**
 * The Amazon Resource Name(s) (ARN) of the AWS log group(s).
 *
 * Note: See the [log group ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format).
 */
export var SEMRESATTRS_AWS_LOG_GROUP_ARNS = (AWS +
    DOT +
    LOG_DOT +
    GROUP_DOT +
    ARN +
    's');
/**
 * The name(s) of the AWS log stream(s) an application is writing to.
 */
export var SEMRESATTRS_AWS_LOG_STREAM_NAMES = (AWS +
    DOT +
    LOG_DOT +
    STREAM_DOT +
    NAME +
    's');
/**
 * The ARN(s) of the AWS log stream(s).
 *
 * Note: See the [log stream ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format). One log group can contain several log streams, so these ARNs necessarily identify both a log group and a log stream.
 */
export var SEMRESATTRS_AWS_LOG_STREAM_ARNS = (AWS +
    DOT +
    LOG_DOT +
    STREAM_DOT +
    ARN +
    's');
/**
 * Container name.
 */
export var SEMRESATTRS_CONTAINER_NAME = (CONTAINER_DOT +
    NAME);
/**
 * Container ID. Usually a UUID, as for example used to [identify Docker containers](https://docs.docker.com/engine/reference/run/#container-identification). The UUID might be abbreviated.
 */
export var SEMRESATTRS_CONTAINER_ID = (CONTAINER_DOT + ID);
/**
 * The container runtime managing this container.
 */
export var SEMRESATTRS_CONTAINER_RUNTIME = (CONTAINER_DOT +
    'runtime');
/**
 * Name of the image the container was built on.
 */
export var SEMRESATTRS_CONTAINER_IMAGE_NAME = (CONTAINER_DOT +
    IMAGE_DOT +
    NAME);
/**
 * Container image tag.
 */
export var SEMRESATTRS_CONTAINER_IMAGE_TAG = (CONTAINER_DOT +
    IMAGE_DOT +
    'tag');
/**
 * Name of the [deployment environment](https://en.wikipedia.org/wiki/Deployment_environment) (aka deployment tier).
 */
export var SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = (DEPLOYMENT_DOT +
    'environment');
/**
 * A unique identifier representing the device.
 *
 * Note: The device identifier MUST only be defined using the values outlined below. This value is not an advertising identifier and MUST NOT be used as such. On iOS (Swift or Objective-C), this value MUST be equal to the [vendor identifier](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor). On Android (Java or Kotlin), this value MUST be equal to the Firebase Installation ID or a globally unique UUID which is persisted across sessions in your application. More information can be found [here](https://developer.android.com/training/articles/user-data-ids) on best practices and exact implementation details. Caution should be taken when storing personal data or anything which can identify a user. GDPR and data protection laws may apply, ensure you do your own due diligence.
 */
export var SEMRESATTRS_DEVICE_ID = (DEVICE_DOT + ID);
/**
 * The model identifier for the device.
 *
 * Note: It&#39;s recommended this value represents a machine readable version of the model identifier rather than the market or consumer-friendly name of the device.
 */
export var SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = (DEVICE_DOT +
    MODEL_DOT +
    ID +
    'entifier');
/**
 * The marketing name for the device model.
 *
 * Note: It&#39;s recommended this value represents a human readable version of the device model rather than a machine readable alternative.
 */
export var SEMRESATTRS_DEVICE_MODEL_NAME = (DEVICE_DOT +
    MODEL_DOT +
    NAME);
/**
 * The name of the single function that this runtime instance executes.
 *
 * Note: This is the name of the function as configured/deployed on the FaaS platform and is usually different from the name of the callback function (which may be stored in the [`code.namespace`/`code.function`](../../trace/semantic_conventions/span-general.md#source-code-attributes) span attributes).
 */
export var SEMRESATTRS_FAAS_NAME = (FAAS_DOT + NAME);
/**
* The unique ID of the single function that this runtime instance executes.
*
* Note: Depending on the cloud provider, use:

* **AWS Lambda:** The function [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
Take care not to use the &#34;invoked ARN&#34; directly but replace any
[alias suffix](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html) with the resolved function version, as the same runtime instance may be invokable with multiple
different aliases.
* **GCP:** The [URI of the resource](https://cloud.google.com/iam/docs/full-resource-names)
* **Azure:** The [Fully Qualified Resource ID](https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id).

On some providers, it may not be possible to determine the full ID at startup,
which is why this field cannot be made required. For example, on AWS the account ID
part of the ARN is not available without calling another AWS API
which may be deemed too slow for a short-running lambda function.
As an alternative, consider setting `faas.id` as a span attribute instead.
*/
export var SEMRESATTRS_FAAS_ID = (FAAS_DOT + ID);
/**
* The immutable version of the function being executed.
*
* Note: Depending on the cloud provider and platform, use:

* **AWS Lambda:** The [function version](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html)
  (an integer represented as a decimal string).
* **Google Cloud Run:** The [revision](https://cloud.google.com/run/docs/managing/revisions)
  (i.e., the function name plus the revision suffix).
* **Google Cloud Functions:** The value of the
  [`K_REVISION` environment variable](https://cloud.google.com/functions/docs/env-var#runtime_environment_variables_set_automatically).
* **Azure Functions:** Not applicable. Do not set this attribute.
*/
export var SEMRESATTRS_FAAS_VERSION = (FAAS_DOT + VERSION);
/**
 * The execution environment ID as a string, that will be potentially reused for other invocations to the same function/function version.
 *
 * Note: * **AWS Lambda:** Use the (full) log stream name.
 */
export var SEMRESATTRS_FAAS_INSTANCE = (FAAS_DOT +
    INSTANCE);
/**
 * The amount of memory available to the serverless function in MiB.
 *
 * Note: It&#39;s recommended to set this attribute since e.g. too little memory can easily stop a Java AWS Lambda function from working correctly. On AWS Lambda, the environment variable `AWS_LAMBDA_FUNCTION_MEMORY_SIZE` provides this information.
 */
export var SEMRESATTRS_FAAS_MAX_MEMORY = (FAAS_DOT +
    'max_memory');
/**
 * Unique host ID. For Cloud, this must be the instance_id assigned by the cloud provider.
 */
export var SEMRESATTRS_HOST_ID = (HOST + DOT + ID);
/**
 * Name of the host. On Unix systems, it may contain what the hostname command returns, or the fully qualified hostname, or another name specified by the user.
 */
export var SEMRESATTRS_HOST_NAME = (HOST + DOT + NAME);
/**
 * Type of host. For Cloud, this must be the machine type.
 */
export var SEMRESATTRS_HOST_TYPE = (HOST + DOT + TYPE);
/**
 * The CPU architecture the host system is running on.
 */
export var SEMRESATTRS_HOST_ARCH = (HOST + DOT + 'arch');
/**
 * Name of the VM image or OS install the host was instantiated from.
 */
export var SEMRESATTRS_HOST_IMAGE_NAME = (HOST +
    DOT +
    IMAGE_DOT +
    NAME);
/**
 * VM image ID. For Cloud, this value is from the provider.
 */
export var SEMRESATTRS_HOST_IMAGE_ID = (HOST +
    DOT +
    IMAGE_DOT +
    ID);
/**
 * The version string of the VM image as defined in [Version Attributes](README.md#version-attributes).
 */
export var SEMRESATTRS_HOST_IMAGE_VERSION = (HOST +
    DOT +
    IMAGE_DOT +
    VERSION);
/**
 * The name of the cluster.
 */
export var SEMRESATTRS_K8S_CLUSTER_NAME = (K8S_DOT +
    CLUSTER_DOT +
    NAME);
/**
 * The name of the Node.
 */
export var SEMRESATTRS_K8S_NODE_NAME = (K8S_DOT +
    NODE_DOT +
    NAME);
/**
 * The UID of the Node.
 */
export var SEMRESATTRS_K8S_NODE_UID = (K8S_DOT +
    NODE_DOT +
    UID);
/**
 * The name of the namespace that the pod is running in.
 */
export var SEMRESATTRS_K8S_NAMESPACE_NAME = (K8S_DOT +
    NAME +
    SPACE +
    DOT +
    NAME);
/**
 * The UID of the Pod.
 */
export var SEMRESATTRS_K8S_POD_UID = (K8S_DOT + 'pod.uid');
/**
 * The name of the Pod.
 */
export var SEMRESATTRS_K8S_POD_NAME = (K8S_DOT +
    'pod.name');
/**
 * The name of the Container in a Pod template.
 */
export var SEMRESATTRS_K8S_CONTAINER_NAME = (K8S_DOT +
    CONTAINER_DOT +
    NAME);
/**
 * The UID of the ReplicaSet.
 */
export var SEMRESATTRS_K8S_REPLICASET_UID = (K8S_DOT +
    REPLICA +
    SET_DOT +
    UID);
/**
 * The name of the ReplicaSet.
 */
export var SEMRESATTRS_K8S_REPLICASET_NAME = (K8S_DOT +
    REPLICA +
    SET_DOT +
    NAME);
/**
 * The UID of the Deployment.
 */
export var SEMRESATTRS_K8S_DEPLOYMENT_UID = (K8S_DOT +
    DEPLOYMENT_DOT +
    UID);
/**
 * The name of the Deployment.
 */
export var SEMRESATTRS_K8S_DEPLOYMENT_NAME = (K8S_DOT +
    DEPLOYMENT_DOT +
    NAME);
/**
 * The UID of the StatefulSet.
 */
export var SEMRESATTRS_K8S_STATEFULSET_UID = (K8S_DOT +
    STATEFUL +
    SET_DOT +
    UID);
/**
 * The name of the StatefulSet.
 */
export var SEMRESATTRS_K8S_STATEFULSET_NAME = (K8S_DOT +
    STATEFUL +
    SET_DOT +
    NAME);
/**
 * The UID of the DaemonSet.
 */
export var SEMRESATTRS_K8S_DAEMONSET_UID = (K8S_DOT +
    DAEMON +
    SET_DOT +
    UID);
/**
 * The name of the DaemonSet.
 */
export var SEMRESATTRS_K8S_DAEMONSET_NAME = (K8S_DOT +
    DAEMON +
    SET_DOT +
    NAME);
/**
 * The UID of the Job.
 */
export var SEMRESATTRS_K8S_JOB_UID = (K8S_DOT +
    JOB +
    DOT +
    UID);
/**
 * The name of the Job.
 */
export var SEMRESATTRS_K8S_JOB_NAME = (K8S_DOT +
    JOB +
    DOT +
    NAME);
/**
 * The UID of the CronJob.
 */
export var SEMRESATTRS_K8S_CRONJOB_UID = (K8S_DOT +
    CRON +
    JOB +
    DOT +
    UID);
/**
 * The name of the CronJob.
 */
export var SEMRESATTRS_K8S_CRONJOB_NAME = (K8S_DOT +
    CRON +
    JOB +
    DOT +
    NAME);
/**
 * The operating system type.
 */
export var SEMRESATTRS_OS_TYPE = (OS_DOT + TYPE);
/**
 * Human readable (not intended to be parsed) OS version information, like e.g. reported by `ver` or `lsb_release -a` commands.
 */
export var SEMRESATTRS_OS_DESCRIPTION = (OS_DOT +
    DESCRIPTION);
/**
 * Human readable operating system name.
 */
export var SEMRESATTRS_OS_NAME = (OS_DOT + NAME);
/**
 * The version string of the operating system as defined in [Version Attributes](../../resource/semantic_conventions/README.md#version-attributes).
 */
export var SEMRESATTRS_OS_VERSION = (OS_DOT + VERSION);
/**
 * Process identifier (PID).
 */
export var SEMRESATTRS_PROCESS_PID = (PROCESS_DOT + 'pid');
/**
 * The name of the process executable. On Linux based systems, can be set to the `Name` in `proc/[pid]/status`. On Windows, can be set to the base name of `GetProcessImageFileNameW`.
 */
export var SEMRESATTRS_PROCESS_EXECUTABLE_NAME = (PROCESS_DOT +
    EXECUTABLE_DOT +
    NAME);
/**
 * The full path to the process executable. On Linux based systems, can be set to the target of `proc/[pid]/exe`. On Windows, can be set to the result of `GetProcessImageFileNameW`.
 */
export var SEMRESATTRS_PROCESS_EXECUTABLE_PATH = (PROCESS_DOT +
    EXECUTABLE_DOT +
    'path');
/**
 * The command used to launch the process (i.e. the command name). On Linux based systems, can be set to the zeroth string in `proc/[pid]/cmdline`. On Windows, can be set to the first parameter extracted from `GetCommandLineW`.
 */
export var SEMRESATTRS_PROCESS_COMMAND = (PROCESS_DOT +
    COMMAND);
/**
 * The full command used to launch the process as a single string representing the full command. On Windows, can be set to the result of `GetCommandLineW`. Do not set this if you have to assemble it just for monitoring; use `process.command_args` instead.
 */
export var SEMRESATTRS_PROCESS_COMMAND_LINE = (PROCESS_DOT +
    COMMAND +
    UNDERSCORE +
    'line');
/**
 * All the command arguments (including the command/executable itself) as received by the process. On Linux-based systems (and some other Unixoid systems supporting procfs), can be set according to the list of null-delimited strings extracted from `proc/[pid]/cmdline`. For libc-based executables, this would be the full argv vector passed to `main`.
 */
export var SEMRESATTRS_PROCESS_COMMAND_ARGS = (PROCESS_DOT +
    COMMAND +
    UNDERSCORE +
    'args');
/**
 * The username of the user that owns the process.
 */
export var SEMRESATTRS_PROCESS_OWNER = (PROCESS_DOT +
    'owner');
/**
 * The name of the runtime of this process. For compiled native binaries, this SHOULD be the name of the compiler.
 */
export var SEMRESATTRS_PROCESS_RUNTIME_NAME = (PROCESS_DOT +
    RUNTIME_DOT +
    NAME);
/**
 * The version of the runtime of this process, as returned by the runtime without modification.
 */
export var SEMRESATTRS_PROCESS_RUNTIME_VERSION = (PROCESS_DOT +
    RUNTIME_DOT +
    VERSION);
/**
 * An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment.
 */
export var SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = (PROCESS_DOT +
    RUNTIME_DOT +
    DESCRIPTION);
/**
 * Logical name of the service.
 *
 * Note: MUST be the same for all instances of horizontally scaled services. If the value was not specified, SDKs MUST fallback to `unknown_service:` concatenated with [`process.executable.name`](process.md#process), e.g. `unknown_service:bash`. If `process.executable.name` is not available, the value MUST be set to `unknown_service`.
 */
export var SEMRESATTRS_SERVICE_NAME = (SERVICE_DOT + NAME);
/**
 * A namespace for `service.name`.
 *
 * Note: A string value having a meaning that helps to distinguish a group of services, for example the team name that owns a group of services. `service.name` is expected to be unique within the same namespace. If `service.namespace` is not specified in the Resource then `service.name` is expected to be unique for all services that have no explicit namespace defined (so the empty/unspecified namespace is simply one more valid namespace). Zero-length namespace string is assumed equal to unspecified namespace.
 */
export var SEMRESATTRS_SERVICE_NAMESPACE = (SERVICE_DOT +
    NAME +
    SPACE);
/**
 * The string ID of the service instance.
 *
 * Note: MUST be unique for each instance of the same `service.namespace,service.name` pair (in other words `service.namespace,service.name,service.instance.id` triplet MUST be globally unique). The ID helps to distinguish instances of the same service that exist at the same time (e.g. instances of a horizontally scaled service). It is preferable for the ID to be persistent and stay the same for the lifetime of the service instance, however it is acceptable that the ID is ephemeral and changes during important lifetime events for the service (e.g. service restarts). If the service has no inherent unique ID that can be used as the value of this attribute it is recommended to generate a random Version 1 or Version 4 RFC 4122 UUID (services aiming for reproducible UUIDs may also use Version 5, see RFC 4122 for more recommendations).
 */
export var SEMRESATTRS_SERVICE_INSTANCE_ID = (SERVICE_DOT +
    INSTANCE +
    DOT +
    ID);
/**
 * The version string of the service API or implementation.
 */
export var SEMRESATTRS_SERVICE_VERSION = (SERVICE_DOT +
    VERSION);
/**
 * The name of the telemetry SDK as defined above.
 */
export var SEMRESATTRS_TELEMETRY_SDK_NAME = (TELEMETRY_DOT +
    SDK_DOT +
    NAME);
/**
 * The language of the telemetry SDK.
 */
export var SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = (TELEMETRY_DOT +
    SDK_DOT +
    'language');
/**
 * The version string of the telemetry SDK.
 */
export var SEMRESATTRS_TELEMETRY_SDK_VERSION = (TELEMETRY_DOT +
    SDK_DOT +
    VERSION);
/**
 * The version string of the auto instrumentation agent, if used.
 */
export var SEMRESATTRS_TELEMETRY_AUTO_VERSION = (TELEMETRY_DOT +
    'auto.version');
/**
 * The name of the web engine.
 */
export var SEMRESATTRS_WEBENGINE_NAME = (WEBENGINE_DOT +
    NAME);
/**
 * The version of the web engine.
 */
export var SEMRESATTRS_WEBENGINE_VERSION = (WEBENGINE_DOT +
    VERSION);
/**
 * Additional description of the web engine (e.g. detailed version and edition information).
 */
export var SEMRESATTRS_WEBENGINE_DESCRIPTION = (WEBENGINE_DOT +
    DESCRIPTION);
/**
 * Create exported Value Map for SemanticResourceAttributes values
 * @deprecated Use the SEMRESATTRS_XXXXX constants rather than the SemanticResourceAttributes.XXXXX for bundle minification
 */
export var SemanticResourceAttributes = /*#__PURE__*/ createConstMap([
    SEMRESATTRS_CLOUD_PROVIDER,
    SEMRESATTRS_CLOUD_ACCOUNT_ID,
    SEMRESATTRS_CLOUD_REGION,
    SEMRESATTRS_CLOUD_AVAILABILITY_ZONE,
    SEMRESATTRS_CLOUD_PLATFORM,
    SEMRESATTRS_AWS_ECS_CONTAINER_ARN,
    SEMRESATTRS_AWS_ECS_CLUSTER_ARN,
    SEMRESATTRS_AWS_ECS_LAUNCHTYPE,
    SEMRESATTRS_AWS_ECS_TASK_ARN,
    SEMRESATTRS_AWS_ECS_TASK_FAMILY,
    SEMRESATTRS_AWS_ECS_TASK_REVISION,
    SEMRESATTRS_AWS_EKS_CLUSTER_ARN,
    SEMRESATTRS_AWS_LOG_GROUP_NAMES,
    SEMRESATTRS_AWS_LOG_GROUP_ARNS,
    SEMRESATTRS_AWS_LOG_STREAM_NAMES,
    SEMRESATTRS_AWS_LOG_STREAM_ARNS,
    SEMRESATTRS_CONTAINER_NAME,
    SEMRESATTRS_CONTAINER_ID,
    SEMRESATTRS_CONTAINER_RUNTIME,
    SEMRESATTRS_CONTAINER_IMAGE_NAME,
    SEMRESATTRS_CONTAINER_IMAGE_TAG,
    SEMRESATTRS_DEPLOYMENT_ENVIRONMENT,
    SEMRESATTRS_DEVICE_ID,
    SEMRESATTRS_DEVICE_MODEL_IDENTIFIER,
    SEMRESATTRS_DEVICE_MODEL_NAME,
    SEMRESATTRS_FAAS_NAME,
    SEMRESATTRS_FAAS_ID,
    SEMRESATTRS_FAAS_VERSION,
    SEMRESATTRS_FAAS_INSTANCE,
    SEMRESATTRS_FAAS_MAX_MEMORY,
    SEMRESATTRS_HOST_ID,
    SEMRESATTRS_HOST_NAME,
    SEMRESATTRS_HOST_TYPE,
    SEMRESATTRS_HOST_ARCH,
    SEMRESATTRS_HOST_IMAGE_NAME,
    SEMRESATTRS_HOST_IMAGE_ID,
    SEMRESATTRS_HOST_IMAGE_VERSION,
    SEMRESATTRS_K8S_CLUSTER_NAME,
    SEMRESATTRS_K8S_NODE_NAME,
    SEMRESATTRS_K8S_NODE_UID,
    SEMRESATTRS_K8S_NAMESPACE_NAME,
    SEMRESATTRS_K8S_POD_UID,
    SEMRESATTRS_K8S_POD_NAME,
    SEMRESATTRS_K8S_CONTAINER_NAME,
    SEMRESATTRS_K8S_REPLICASET_UID,
    SEMRESATTRS_K8S_REPLICASET_NAME,
    SEMRESATTRS_K8S_DEPLOYMENT_UID,
    SEMRESATTRS_K8S_DEPLOYMENT_NAME,
    SEMRESATTRS_K8S_STATEFULSET_UID,
    SEMRESATTRS_K8S_STATEFULSET_NAME,
    SEMRESATTRS_K8S_DAEMONSET_UID,
    SEMRESATTRS_K8S_DAEMONSET_NAME,
    SEMRESATTRS_K8S_JOB_UID,
    SEMRESATTRS_K8S_JOB_NAME,
    SEMRESATTRS_K8S_CRONJOB_UID,
    SEMRESATTRS_K8S_CRONJOB_NAME,
    SEMRESATTRS_OS_TYPE,
    SEMRESATTRS_OS_DESCRIPTION,
    SEMRESATTRS_OS_NAME,
    SEMRESATTRS_OS_VERSION,
    SEMRESATTRS_PROCESS_PID,
    SEMRESATTRS_PROCESS_EXECUTABLE_NAME,
    SEMRESATTRS_PROCESS_EXECUTABLE_PATH,
    SEMRESATTRS_PROCESS_COMMAND,
    SEMRESATTRS_PROCESS_COMMAND_LINE,
    SEMRESATTRS_PROCESS_COMMAND_ARGS,
    SEMRESATTRS_PROCESS_OWNER,
    SEMRESATTRS_PROCESS_RUNTIME_NAME,
    SEMRESATTRS_PROCESS_RUNTIME_VERSION,
    SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION,
    SEMRESATTRS_SERVICE_NAME,
    SEMRESATTRS_SERVICE_NAMESPACE,
    SEMRESATTRS_SERVICE_INSTANCE_ID,
    SEMRESATTRS_SERVICE_VERSION,
    SEMRESATTRS_TELEMETRY_SDK_NAME,
    SEMRESATTRS_TELEMETRY_SDK_LANGUAGE,
    SEMRESATTRS_TELEMETRY_SDK_VERSION,
    SEMRESATTRS_TELEMETRY_AUTO_VERSION,
    SEMRESATTRS_WEBENGINE_NAME,
    SEMRESATTRS_WEBENGINE_VERSION,
    SEMRESATTRS_WEBENGINE_DESCRIPTION,
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudProviderValues enum definition
 *
 * Name of the cloud provider.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * Name of the cloud provider.
 */
export var CLOUDPROVIDERVALUES_ALIBABA_CLOUD = 'alibaba_cloud';
/**
 * Name of the cloud provider.
 */
export var CLOUDPROVIDERVALUES_AWS = AWS;
/**
 * Name of the cloud provider.
 */
export var CLOUDPROVIDERVALUES_AZURE = AZURE;
/**
 * Name of the cloud provider.
 */
export var CLOUDPROVIDERVALUES_GCP = 'gcp';
/**
 * The constant map of values for CloudProviderValues.
 * @deprecated Use the CLOUDPROVIDERVALUES_XXXXX constants rather than the CloudProviderValues.XXXXX for bundle minification.
 */
export var CloudProviderValues = {
    ALIBABA_CLOUD: CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
    AWS: CLOUDPROVIDERVALUES_AWS,
    AZURE: CLOUDPROVIDERVALUES_AZURE,
    GCP: CLOUDPROVIDERVALUES_GCP,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for CloudPlatformValues enum definition
 *
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = 'alibaba_cloud_ecs';
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = 'alibaba_cloud_fc';
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AWS_EC2 = (AWS +
    UNDERSCORE +
    'ec2');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AWS_ECS = (AWS +
    UNDERSCORE +
    'ecs');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AWS_EKS = (AWS +
    UNDERSCORE +
    'eks');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AWS_LAMBDA = (AWS +
    UNDERSCORE +
    'lambda');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = (AWS +
    UNDERSCORE +
    'elastic_beanstalk');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AZURE_VM = (AZURE +
    UNDERSCORE +
    'vm');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = (AZURE +
    UNDERSCORE +
    'container_instances');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AZURE_AKS = (AZURE +
    UNDERSCORE +
    'aks');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = (AZURE +
    UNDERSCORE +
    'functions');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = (AZURE +
    UNDERSCORE +
    'app_service');
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = 'gcp_compute_engine';
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = 'gcp_cloud_run';
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = 'gcp_kubernetes_engine';
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = 'gcp_cloud_functions';
/**
 * The cloud platform in use.
 *
 * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
 */
export var CLOUDPLATFORMVALUES_GCP_APP_ENGINE = 'gcp_app_engine';
/**
 * The constant map of values for CloudPlatformValues.
 * @deprecated Use the CLOUDPLATFORMVALUES_XXXXX constants rather than the CloudPlatformValues.XXXXX for bundle minification.
 */
export var CloudPlatformValues = {
    ALIBABA_CLOUD_ECS: CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
    ALIBABA_CLOUD_FC: CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
    AWS_EC2: CLOUDPLATFORMVALUES_AWS_EC2,
    AWS_ECS: CLOUDPLATFORMVALUES_AWS_ECS,
    AWS_EKS: CLOUDPLATFORMVALUES_AWS_EKS,
    AWS_LAMBDA: CLOUDPLATFORMVALUES_AWS_LAMBDA,
    AWS_ELASTIC_BEANSTALK: CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
    AZURE_VM: CLOUDPLATFORMVALUES_AZURE_VM,
    AZURE_CONTAINER_INSTANCES: CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
    AZURE_AKS: CLOUDPLATFORMVALUES_AZURE_AKS,
    AZURE_FUNCTIONS: CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
    AZURE_APP_SERVICE: CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
    GCP_COMPUTE_ENGINE: CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
    GCP_CLOUD_RUN: CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
    GCP_KUBERNETES_ENGINE: CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
    GCP_CLOUD_FUNCTIONS: CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
    GCP_APP_ENGINE: CLOUDPLATFORMVALUES_GCP_APP_ENGINE,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for AwsEcsLaunchtypeValues enum definition
 *
 * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
 */
export var AWSECSLAUNCHTYPEVALUES_EC2 = 'ec2';
/**
 * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
 */
export var AWSECSLAUNCHTYPEVALUES_FARGATE = 'fargate';
/**
 * The constant map of values for AwsEcsLaunchtypeValues.
 * @deprecated Use the AWSECSLAUNCHTYPEVALUES_XXXXX constants rather than the AwsEcsLaunchtypeValues.XXXXX for bundle minification.
 */
export var AwsEcsLaunchtypeValues = {
    EC2: AWSECSLAUNCHTYPEVALUES_EC2,
    FARGATE: AWSECSLAUNCHTYPEVALUES_FARGATE,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for HostArchValues enum definition
 *
 * The CPU architecture the host system is running on.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The CPU architecture the host system is running on.
 */
export var HOSTARCHVALUES_AMD64 = 'amd64';
/**
 * The CPU architecture the host system is running on.
 */
export var HOSTARCHVALUES_ARM32 = 'arm32';
/**
 * The CPU architecture the host system is running on.
 */
export var HOSTARCHVALUES_ARM64 = 'arm64';
/**
 * The CPU architecture the host system is running on.
 */
export var HOSTARCHVALUES_IA64 = 'ia64';
/**
 * The CPU architecture the host system is running on.
 */
export var HOSTARCHVALUES_PPC32 = 'ppc32';
/**
 * The CPU architecture the host system is running on.
 */
export var HOSTARCHVALUES_PPC64 = 'ppc64';
/**
 * The CPU architecture the host system is running on.
 */
export var HOSTARCHVALUES_X86 = 'x86';
/**
 * The constant map of values for HostArchValues.
 * @deprecated Use the HOSTARCHVALUES_XXXXX constants rather than the HostArchValues.XXXXX for bundle minification.
 */
export var HostArchValues = {
    AMD64: HOSTARCHVALUES_AMD64,
    ARM32: HOSTARCHVALUES_ARM32,
    ARM64: HOSTARCHVALUES_ARM64,
    IA64: HOSTARCHVALUES_IA64,
    PPC32: HOSTARCHVALUES_PPC32,
    PPC64: HOSTARCHVALUES_PPC64,
    X86: HOSTARCHVALUES_X86,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for OsTypeValues enum definition
 *
 * The operating system type.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The operating system type.
 */
export var OSTYPEVALUES_WINDOWS = 'windows';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_LINUX = 'linux';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_DARWIN = 'darwin';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_FREEBSD = 'freebsd';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_NETBSD = 'netbsd';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_OPENBSD = 'openbsd';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_DRAGONFLYBSD = 'dragonflybsd';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_HPUX = 'hpux';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_AIX = 'aix';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_SOLARIS = 'solaris';
/**
 * The operating system type.
 */
export var OSTYPEVALUES_Z_OS = 'z_os';
/**
 * The constant map of values for OsTypeValues.
 * @deprecated Use the OSTYPEVALUES_XXXXX constants rather than the OsTypeValues.XXXXX for bundle minification.
 */
export var OsTypeValues = {
    WINDOWS: OSTYPEVALUES_WINDOWS,
    LINUX: OSTYPEVALUES_LINUX,
    DARWIN: OSTYPEVALUES_DARWIN,
    FREEBSD: OSTYPEVALUES_FREEBSD,
    NETBSD: OSTYPEVALUES_NETBSD,
    OPENBSD: OSTYPEVALUES_OPENBSD,
    DRAGONFLYBSD: OSTYPEVALUES_DRAGONFLYBSD,
    HPUX: OSTYPEVALUES_HPUX,
    AIX: OSTYPEVALUES_AIX,
    SOLARIS: OSTYPEVALUES_SOLARIS,
    Z_OS: OSTYPEVALUES_Z_OS,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for TelemetrySdkLanguageValues enum definition
 *
 * The language of the telemetry SDK.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_CPP = 'cpp';
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_DOTNET = 'dotnet';
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_ERLANG = 'erlang';
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_GO = 'go';
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_JAVA = 'java';
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_NODEJS = 'nodejs';
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_PHP = 'php';
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_PYTHON = 'python';
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_RUBY = 'ruby';
/**
 * The language of the telemetry SDK.
 */
export var TELEMETRYSDKLANGUAGEVALUES_WEBJS = 'webjs';
/**
 * The constant map of values for TelemetrySdkLanguageValues.
 * @deprecated Use the TELEMETRYSDKLANGUAGEVALUES_XXXXX constants rather than the TelemetrySdkLanguageValues.XXXXX for bundle minification.
 */
export var TelemetrySdkLanguageValues = {
    CPP: TELEMETRYSDKLANGUAGEVALUES_CPP,
    DOTNET: TELEMETRYSDKLANGUAGEVALUES_DOTNET,
    ERLANG: TELEMETRYSDKLANGUAGEVALUES_ERLANG,
    GO: TELEMETRYSDKLANGUAGEVALUES_GO,
    JAVA: TELEMETRYSDKLANGUAGEVALUES_JAVA,
    NODEJS: TELEMETRYSDKLANGUAGEVALUES_NODEJS,
    PHP: TELEMETRYSDKLANGUAGEVALUES_PHP,
    PYTHON: TELEMETRYSDKLANGUAGEVALUES_PYTHON,
    RUBY: TELEMETRYSDKLANGUAGEVALUES_RUBY,
    WEBJS: TELEMETRYSDKLANGUAGEVALUES_WEBJS,
};
//# sourceMappingURL=SemanticResourceAttributes.js.map