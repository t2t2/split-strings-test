// All suitable imports gotten via get-exports.js
const importable = '{ AWSECSLAUNCHTYPEVALUES_EC2, AWSECSLAUNCHTYPEVALUES_FARGATE, CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS, CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC, CLOUDPLATFORMVALUES_AWS_EC2, CLOUDPLATFORMVALUES_AWS_ECS, CLOUDPLATFORMVALUES_AWS_EKS, CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK, CLOUDPLATFORMVALUES_AWS_LAMBDA, CLOUDPLATFORMVALUES_AZURE_AKS, CLOUDPLATFORMVALUES_AZURE_APP_SERVICE, CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES, CLOUDPLATFORMVALUES_AZURE_FUNCTIONS, CLOUDPLATFORMVALUES_AZURE_VM, CLOUDPLATFORMVALUES_GCP_APP_ENGINE, CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS, CLOUDPLATFORMVALUES_GCP_CLOUD_RUN, CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE, CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE, CLOUDPROVIDERVALUES_ALIBABA_CLOUD, CLOUDPROVIDERVALUES_AWS, CLOUDPROVIDERVALUES_AZURE, CLOUDPROVIDERVALUES_GCP, DBCASSANDRACONSISTENCYLEVELVALUES_ALL, DBCASSANDRACONSISTENCYLEVELVALUES_ANY, DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM, DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE, DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM, DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL, DBCASSANDRACONSISTENCYLEVELVALUES_ONE, DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM, DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL, DBCASSANDRACONSISTENCYLEVELVALUES_THREE, DBCASSANDRACONSISTENCYLEVELVALUES_TWO, DBSYSTEMVALUES_ADABAS, DBSYSTEMVALUES_CACHE, DBSYSTEMVALUES_CASSANDRA, DBSYSTEMVALUES_CLOUDSCAPE, DBSYSTEMVALUES_COCKROACHDB, DBSYSTEMVALUES_COLDFUSION, DBSYSTEMVALUES_COSMOSDB, DBSYSTEMVALUES_COUCHBASE, DBSYSTEMVALUES_COUCHDB, DBSYSTEMVALUES_DB2, DBSYSTEMVALUES_DERBY, DBSYSTEMVALUES_DYNAMODB, DBSYSTEMVALUES_EDB, DBSYSTEMVALUES_ELASTICSEARCH, DBSYSTEMVALUES_FILEMAKER, DBSYSTEMVALUES_FIREBIRD, DBSYSTEMVALUES_FIRSTSQL, DBSYSTEMVALUES_GEODE, DBSYSTEMVALUES_H2, DBSYSTEMVALUES_HANADB, DBSYSTEMVALUES_HBASE, DBSYSTEMVALUES_HIVE, DBSYSTEMVALUES_HSQLDB, DBSYSTEMVALUES_INFORMIX, DBSYSTEMVALUES_INGRES, DBSYSTEMVALUES_INSTANTDB, DBSYSTEMVALUES_INTERBASE, DBSYSTEMVALUES_MARIADB, DBSYSTEMVALUES_MAXDB, DBSYSTEMVALUES_MEMCACHED, DBSYSTEMVALUES_MONGODB, DBSYSTEMVALUES_MSSQL, DBSYSTEMVALUES_MYSQL, DBSYSTEMVALUES_NEO4J, DBSYSTEMVALUES_NETEZZA, DBSYSTEMVALUES_ORACLE, DBSYSTEMVALUES_OTHER_SQL, DBSYSTEMVALUES_PERVASIVE, DBSYSTEMVALUES_POINTBASE, DBSYSTEMVALUES_POSTGRESQL, DBSYSTEMVALUES_PROGRESS, DBSYSTEMVALUES_REDIS, DBSYSTEMVALUES_REDSHIFT, DBSYSTEMVALUES_SQLITE, DBSYSTEMVALUES_SYBASE, DBSYSTEMVALUES_TERADATA, DBSYSTEMVALUES_VERTICA, FAASDOCUMENTOPERATIONVALUES_DELETE, FAASDOCUMENTOPERATIONVALUES_EDIT, FAASDOCUMENTOPERATIONVALUES_INSERT, FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD, FAASINVOKEDPROVIDERVALUES_AWS, FAASINVOKEDPROVIDERVALUES_AZURE, FAASINVOKEDPROVIDERVALUES_GCP, FAASTRIGGERVALUES_DATASOURCE, FAASTRIGGERVALUES_HTTP, FAASTRIGGERVALUES_OTHER, FAASTRIGGERVALUES_PUBSUB, FAASTRIGGERVALUES_TIMER, HOSTARCHVALUES_AMD64, HOSTARCHVALUES_ARM32, HOSTARCHVALUES_ARM64, HOSTARCHVALUES_IA64, HOSTARCHVALUES_PPC32, HOSTARCHVALUES_PPC64, HOSTARCHVALUES_X86, HTTPFLAVORVALUES_HTTP_1_0, HTTPFLAVORVALUES_HTTP_1_1, HTTPFLAVORVALUES_HTTP_2_0, HTTPFLAVORVALUES_QUIC, HTTPFLAVORVALUES_SPDY, MESSAGETYPEVALUES_RECEIVED, MESSAGETYPEVALUES_SENT, MESSAGINGDESTINATIONKINDVALUES_QUEUE, MESSAGINGDESTINATIONKINDVALUES_TOPIC, MESSAGINGOPERATIONVALUES_PROCESS, MESSAGINGOPERATIONVALUES_RECEIVE, NETHOSTCONNECTIONSUBTYPEVALUES_CDMA, NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT, NETHOSTCONNECTIONSUBTYPEVALUES_EDGE, NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD, NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0, NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A, NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B, NETHOSTCONNECTIONSUBTYPEVALUES_GPRS, NETHOSTCONNECTIONSUBTYPEVALUES_GSM, NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA, NETHOSTCONNECTIONSUBTYPEVALUES_HSPA, NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP, NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA, NETHOSTCONNECTIONSUBTYPEVALUES_IDEN, NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN, NETHOSTCONNECTIONSUBTYPEVALUES_LTE, NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA, NETHOSTCONNECTIONSUBTYPEVALUES_NR, NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA, NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA, NETHOSTCONNECTIONSUBTYPEVALUES_UMTS, NETHOSTCONNECTIONTYPEVALUES_CELL, NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE, NETHOSTCONNECTIONTYPEVALUES_UNKNOWN, NETHOSTCONNECTIONTYPEVALUES_WIFI, NETHOSTCONNECTIONTYPEVALUES_WIRED, NETTRANSPORTVALUES_INPROC, NETTRANSPORTVALUES_IP, NETTRANSPORTVALUES_IP_TCP, NETTRANSPORTVALUES_IP_UDP, NETTRANSPORTVALUES_OTHER, NETTRANSPORTVALUES_PIPE, NETTRANSPORTVALUES_UNIX, OSTYPEVALUES_AIX, OSTYPEVALUES_DARWIN, OSTYPEVALUES_DRAGONFLYBSD, OSTYPEVALUES_FREEBSD, OSTYPEVALUES_HPUX, OSTYPEVALUES_LINUX, OSTYPEVALUES_NETBSD, OSTYPEVALUES_OPENBSD, OSTYPEVALUES_SOLARIS, OSTYPEVALUES_WINDOWS, OSTYPEVALUES_Z_OS, SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET, SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS, SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ, SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY, SEMATTRS_AWS_DYNAMODB_COUNT, SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE, SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES, SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES, SEMATTRS_AWS_DYNAMODB_INDEX_NAME, SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS, SEMATTRS_AWS_DYNAMODB_LIMIT, SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES, SEMATTRS_AWS_DYNAMODB_PROJECTION, SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY, SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY, SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT, SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD, SEMATTRS_AWS_DYNAMODB_SEGMENT, SEMATTRS_AWS_DYNAMODB_SELECT, SEMATTRS_AWS_DYNAMODB_TABLE_COUNT, SEMATTRS_AWS_DYNAMODB_TABLE_NAMES, SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS, SEMATTRS_AWS_LAMBDA_INVOKED_ARN, SEMATTRS_CODE_FILEPATH, SEMATTRS_CODE_FUNCTION, SEMATTRS_CODE_LINENO, SEMATTRS_CODE_NAMESPACE, SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL, SEMATTRS_DB_CASSANDRA_COORDINATOR_DC, SEMATTRS_DB_CASSANDRA_COORDINATOR_ID, SEMATTRS_DB_CASSANDRA_IDEMPOTENCE, SEMATTRS_DB_CASSANDRA_KEYSPACE, SEMATTRS_DB_CASSANDRA_PAGE_SIZE, SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT, SEMATTRS_DB_CASSANDRA_TABLE, SEMATTRS_DB_CONNECTION_STRING, SEMATTRS_DB_HBASE_NAMESPACE, SEMATTRS_DB_JDBC_DRIVER_CLASSNAME, SEMATTRS_DB_MONGODB_COLLECTION, SEMATTRS_DB_MSSQL_INSTANCE_NAME, SEMATTRS_DB_NAME, SEMATTRS_DB_OPERATION, SEMATTRS_DB_REDIS_DATABASE_INDEX, SEMATTRS_DB_SQL_TABLE, SEMATTRS_DB_STATEMENT, SEMATTRS_DB_SYSTEM, SEMATTRS_DB_USER, SEMATTRS_ENDUSER_ID, SEMATTRS_ENDUSER_ROLE, SEMATTRS_ENDUSER_SCOPE, SEMATTRS_EXCEPTION_ESCAPED, SEMATTRS_EXCEPTION_MESSAGE, SEMATTRS_EXCEPTION_STACKTRACE, SEMATTRS_EXCEPTION_TYPE, SEMATTRS_FAAS_COLDSTART, SEMATTRS_FAAS_CRON, SEMATTRS_FAAS_DOCUMENT_COLLECTION, SEMATTRS_FAAS_DOCUMENT_NAME, SEMATTRS_FAAS_DOCUMENT_OPERATION, SEMATTRS_FAAS_DOCUMENT_TIME, SEMATTRS_FAAS_EXECUTION, SEMATTRS_FAAS_INVOKED_NAME, SEMATTRS_FAAS_INVOKED_PROVIDER, SEMATTRS_FAAS_INVOKED_REGION, SEMATTRS_FAAS_TIME, SEMATTRS_FAAS_TRIGGER, SEMATTRS_HTTP_CLIENT_IP, SEMATTRS_HTTP_FLAVOR, SEMATTRS_HTTP_HOST, SEMATTRS_HTTP_METHOD, SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH, SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED, SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH, SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, SEMATTRS_HTTP_ROUTE, SEMATTRS_HTTP_SCHEME, SEMATTRS_HTTP_SERVER_NAME, SEMATTRS_HTTP_STATUS_CODE, SEMATTRS_HTTP_TARGET, SEMATTRS_HTTP_URL, SEMATTRS_HTTP_USER_AGENT, SEMATTRS_MESSAGE_COMPRESSED_SIZE, SEMATTRS_MESSAGE_ID, SEMATTRS_MESSAGE_TYPE, SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE, SEMATTRS_MESSAGING_CONSUMER_ID, SEMATTRS_MESSAGING_CONVERSATION_ID, SEMATTRS_MESSAGING_DESTINATION, SEMATTRS_MESSAGING_DESTINATION_KIND, SEMATTRS_MESSAGING_KAFKA_CLIENT_ID, SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP, SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY, SEMATTRS_MESSAGING_KAFKA_PARTITION, SEMATTRS_MESSAGING_KAFKA_TOMBSTONE, SEMATTRS_MESSAGING_MESSAGE_ID, SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES, SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES, SEMATTRS_MESSAGING_OPERATION, SEMATTRS_MESSAGING_PROTOCOL, SEMATTRS_MESSAGING_PROTOCOL_VERSION, SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY, SEMATTRS_MESSAGING_SYSTEM, SEMATTRS_MESSAGING_TEMP_DESTINATION, SEMATTRS_MESSAGING_URL, SEMATTRS_NET_HOST_CARRIER_ICC, SEMATTRS_NET_HOST_CARRIER_MCC, SEMATTRS_NET_HOST_CARRIER_MNC, SEMATTRS_NET_HOST_CARRIER_NAME, SEMATTRS_NET_HOST_CONNECTION_SUBTYPE, SEMATTRS_NET_HOST_CONNECTION_TYPE, SEMATTRS_NET_HOST_IP, SEMATTRS_NET_HOST_NAME, SEMATTRS_NET_HOST_PORT, SEMATTRS_NET_PEER_IP, SEMATTRS_NET_PEER_NAME, SEMATTRS_NET_PEER_PORT, SEMATTRS_NET_TRANSPORT, SEMATTRS_PEER_SERVICE, SEMATTRS_RPC_GRPC_STATUS_CODE, SEMATTRS_RPC_JSONRPC_ERROR_CODE, SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE, SEMATTRS_RPC_JSONRPC_REQUEST_ID, SEMATTRS_RPC_JSONRPC_VERSION, SEMATTRS_RPC_METHOD, SEMATTRS_RPC_SERVICE, SEMATTRS_RPC_SYSTEM, SEMATTRS_THREAD_ID, SEMATTRS_THREAD_NAME, SEMRESATTRS_AWS_ECS_CLUSTER_ARN, SEMRESATTRS_AWS_ECS_CONTAINER_ARN, SEMRESATTRS_AWS_ECS_LAUNCHTYPE, SEMRESATTRS_AWS_ECS_TASK_ARN, SEMRESATTRS_AWS_ECS_TASK_FAMILY, SEMRESATTRS_AWS_ECS_TASK_REVISION, SEMRESATTRS_AWS_EKS_CLUSTER_ARN, SEMRESATTRS_AWS_LOG_GROUP_ARNS, SEMRESATTRS_AWS_LOG_GROUP_NAMES, SEMRESATTRS_AWS_LOG_STREAM_ARNS, SEMRESATTRS_AWS_LOG_STREAM_NAMES, SEMRESATTRS_CLOUD_ACCOUNT_ID, SEMRESATTRS_CLOUD_AVAILABILITY_ZONE, SEMRESATTRS_CLOUD_PLATFORM, SEMRESATTRS_CLOUD_PROVIDER, SEMRESATTRS_CLOUD_REGION, SEMRESATTRS_CONTAINER_ID, SEMRESATTRS_CONTAINER_IMAGE_NAME, SEMRESATTRS_CONTAINER_IMAGE_TAG, SEMRESATTRS_CONTAINER_NAME, SEMRESATTRS_CONTAINER_RUNTIME, SEMRESATTRS_DEPLOYMENT_ENVIRONMENT, SEMRESATTRS_DEVICE_ID, SEMRESATTRS_DEVICE_MODEL_IDENTIFIER, SEMRESATTRS_DEVICE_MODEL_NAME, SEMRESATTRS_FAAS_ID, SEMRESATTRS_FAAS_INSTANCE, SEMRESATTRS_FAAS_MAX_MEMORY, SEMRESATTRS_FAAS_NAME, SEMRESATTRS_FAAS_VERSION, SEMRESATTRS_HOST_ARCH, SEMRESATTRS_HOST_ID, SEMRESATTRS_HOST_IMAGE_ID, SEMRESATTRS_HOST_IMAGE_NAME, SEMRESATTRS_HOST_IMAGE_VERSION, SEMRESATTRS_HOST_NAME, SEMRESATTRS_HOST_TYPE, SEMRESATTRS_K8S_CLUSTER_NAME, SEMRESATTRS_K8S_CONTAINER_NAME, SEMRESATTRS_K8S_CRONJOB_NAME, SEMRESATTRS_K8S_CRONJOB_UID, SEMRESATTRS_K8S_DAEMONSET_NAME, SEMRESATTRS_K8S_DAEMONSET_UID, SEMRESATTRS_K8S_DEPLOYMENT_NAME, SEMRESATTRS_K8S_DEPLOYMENT_UID, SEMRESATTRS_K8S_JOB_NAME, SEMRESATTRS_K8S_JOB_UID, SEMRESATTRS_K8S_NAMESPACE_NAME, SEMRESATTRS_K8S_NODE_NAME, SEMRESATTRS_K8S_NODE_UID, SEMRESATTRS_K8S_POD_NAME, SEMRESATTRS_K8S_POD_UID, SEMRESATTRS_K8S_REPLICASET_NAME, SEMRESATTRS_K8S_REPLICASET_UID, SEMRESATTRS_K8S_STATEFULSET_NAME, SEMRESATTRS_K8S_STATEFULSET_UID, SEMRESATTRS_OS_DESCRIPTION, SEMRESATTRS_OS_NAME, SEMRESATTRS_OS_TYPE, SEMRESATTRS_OS_VERSION, SEMRESATTRS_PROCESS_COMMAND, SEMRESATTRS_PROCESS_COMMAND_ARGS, SEMRESATTRS_PROCESS_COMMAND_LINE, SEMRESATTRS_PROCESS_EXECUTABLE_NAME, SEMRESATTRS_PROCESS_EXECUTABLE_PATH, SEMRESATTRS_PROCESS_OWNER, SEMRESATTRS_PROCESS_PID, SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION, SEMRESATTRS_PROCESS_RUNTIME_NAME, SEMRESATTRS_PROCESS_RUNTIME_VERSION, SEMRESATTRS_SERVICE_INSTANCE_ID, SEMRESATTRS_SERVICE_NAME, SEMRESATTRS_SERVICE_NAMESPACE, SEMRESATTRS_SERVICE_VERSION, SEMRESATTRS_TELEMETRY_AUTO_VERSION, SEMRESATTRS_TELEMETRY_SDK_LANGUAGE, SEMRESATTRS_TELEMETRY_SDK_NAME, SEMRESATTRS_TELEMETRY_SDK_VERSION, SEMRESATTRS_WEBENGINE_DESCRIPTION, SEMRESATTRS_WEBENGINE_NAME, SEMRESATTRS_WEBENGINE_VERSION, TELEMETRYSDKLANGUAGEVALUES_CPP, TELEMETRYSDKLANGUAGEVALUES_DOTNET, TELEMETRYSDKLANGUAGEVALUES_ERLANG, TELEMETRYSDKLANGUAGEVALUES_GO, TELEMETRYSDKLANGUAGEVALUES_JAVA, TELEMETRYSDKLANGUAGEVALUES_NODEJS, TELEMETRYSDKLANGUAGEVALUES_PHP, TELEMETRYSDKLANGUAGEVALUES_PYTHON, TELEMETRYSDKLANGUAGEVALUES_RUBY, TELEMETRYSDKLANGUAGEVALUES_WEBJS }';
const importOnlyHttp = '{ SEMATTRS_HTTP_CLIENT_IP, SEMATTRS_HTTP_FLAVOR, SEMATTRS_HTTP_HOST, SEMATTRS_HTTP_METHOD, SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH, SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED, SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH, SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, SEMATTRS_HTTP_ROUTE, SEMATTRS_HTTP_SCHEME, SEMATTRS_HTTP_SERVER_NAME, SEMATTRS_HTTP_STATUS_CODE, SEMATTRS_HTTP_TARGET, SEMATTRS_HTTP_URL, SEMATTRS_HTTP_USER_AGENT }';
const importOnlyNet = '{ SEMATTRS_NET_HOST_CARRIER_ICC, SEMATTRS_NET_HOST_CARRIER_MCC, SEMATTRS_NET_HOST_CARRIER_MNC, SEMATTRS_NET_HOST_CARRIER_NAME, SEMATTRS_NET_HOST_CONNECTION_SUBTYPE, SEMATTRS_NET_HOST_CONNECTION_TYPE, SEMATTRS_NET_HOST_IP, SEMATTRS_NET_HOST_NAME, SEMATTRS_NET_HOST_PORT, SEMATTRS_NET_PEER_IP, SEMATTRS_NET_PEER_NAME, SEMATTRS_NET_PEER_PORT, SEMATTRS_NET_TRANSPORT }';

const gzip = false;
const brotli = true;

module.exports = [
	{
		name: 'split strings',
		path: 'build-split/index.js',
		import: importable,
		gzip,
		brotli,
	},
	{
		name: 'merged strings',
		path: 'build-merged/index.js',
		import: importable,
		gzip,
		brotli,
	},
	{
		name: 'split strings - only http',
		path: 'build-split/index.js',
		import: importOnlyHttp,
		gzip,
		brotli,
	},
	{
		name: 'merged strings - only http',
		path: 'build-merged/index.js',
		import: importOnlyHttp,
		gzip,
		brotli,
	},
	{
		name: 'split strings - only net',
		path: 'build-split/index.js',
		import: importOnlyNet,
		gzip,
		brotli,
	},
	{
		name: 'merged strings - only net',
		path: 'build-merged/index.js',
		import: importOnlyNet,
		gzip,
		brotli,
	},
];
