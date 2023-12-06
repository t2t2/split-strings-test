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

//----------------------------------------------------------------------------------------------------------
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Constant values for SemanticAttributes
//----------------------------------------------------------------------------------------------------------
/**
 * The full invoked ARN as provided on the `Context` passed to the function (`Lambda-Runtime-Invoked-Function-Arn` header on the `/runtime/invocation/next` applicable).
 *
 * Note: This may be different from `faas.id` if an alias is involved.
 */
export var SEMATTRS_AWS_LAMBDA_INVOKED_ARN = ('awslambda.invoked_arn');
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var SEMATTRS_DB_SYSTEM = ('db.system');
/**
 * The connection string used to connect to the database. It is recommended to remove embedded credentials.
 */
export var SEMATTRS_DB_CONNECTION_STRING = ('db.connection_string');
/**
 * Username for accessing the database.
 */
export var SEMATTRS_DB_USER = ('db.user');
/**
 * The fully-qualified class name of the [Java Database Connectivity (JDBC)](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) driver used to connect.
 */
export var SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = ('db.jdbc.driver_classname');
/**
 * If no [tech-specific attribute](#call-level-attributes-for-specific-technologies) is defined, this attribute is used to report the name of the database being accessed. For commands that switch the database, this should be set to the target database (even if the command fails).
 *
 * Note: In some SQL databases, the database name to be used is called &#34;schema name&#34;.
 */
export var SEMATTRS_DB_NAME = ('db.name');
/**
 * The database statement being executed.
 *
 * Note: The value may be sanitized to exclude sensitive information.
 */
export var SEMATTRS_DB_STATEMENT = ('db.statement');
/**
 * The name of the operation being executed, e.g. the [MongoDB command name](https://docs.mongodb.com/manual/reference/command/#database-operations) such as `findAndModify`, or the SQL keyword.
 *
 * Note: When setting this to an SQL keyword, it is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if the operation name is provided by the library being instrumented. If the SQL statement has an ambiguous operation, or performs more than one operation, this value may be omitted.
 */
export var SEMATTRS_DB_OPERATION = ('db.operation');
/**
 * The Microsoft SQL Server [instance name](https://docs.microsoft.com/en-us/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver15) connecting to. This name is used to determine the port of a named instance.
 *
 * Note: If setting a `db.mssql.instance_name`, `net.peer.port` is no longer required (but still recommended if non-standard).
 */
export var SEMATTRS_DB_MSSQL_INSTANCE_NAME = ('db.mssql.instance_name');
/**
 * The name of the keyspace being accessed. To be used instead of the generic `db.name` attribute.
 */
export var SEMATTRS_DB_CASSANDRA_KEYSPACE = ('db.cassandra.keyspace');
/**
 * The fetch size used for paging, i.e. how many rows will be returned at once.
 */
export var SEMATTRS_DB_CASSANDRA_PAGE_SIZE = ('db.cassandra.page_size');
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = ('db.cassandra.consistency_level');
/**
 * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
 *
 * Note: This mirrors the db.sql.table attribute but references cassandra rather than sql. It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
 */
export var SEMATTRS_DB_CASSANDRA_TABLE = ('db.cassandra.table');
/**
 * Whether or not the query is idempotent.
 */
export var SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = ('db.cassandra.idempotence');
/**
 * The number of times a query was speculatively executed. Not set or `0` if the query was not executed speculatively.
 */
export var SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = ('db.cassandra.speculative_execution_count');
/**
 * The ID of the coordinating node for a query.
 */
export var SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = ('db.cassandra.coordinator.id');
/**
 * The data center of the coordinating node for a query.
 */
export var SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = ('db.cassandra.coordinator.dc');
/**
 * The [HBase namespace](https://hbase.apache.org/book.html#_namespace) being accessed. To be used instead of the generic `db.name` attribute.
 */
export var SEMATTRS_DB_HBASE_NAMESPACE = ('db.hbase.namespace');
/**
 * The index of the database being accessed as used in the [`SELECT` command](https://redis.io/commands/select), provided as an integer. To be used instead of the generic `db.name` attribute.
 */
export var SEMATTRS_DB_REDIS_DATABASE_INDEX = ('db.redis.database_index');
/**
 * The collection being accessed within the database stated in `db.name`.
 */
export var SEMATTRS_DB_MONGODB_COLLECTION = ('db.mongodb.collection');
/**
 * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
 *
 * Note: It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
 */
export var SEMATTRS_DB_SQL_TABLE = ('db.sql.table');
/**
 * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
 */
export var SEMATTRS_EXCEPTION_TYPE = ('exception.type');
/**
 * The exception message.
 */
export var SEMATTRS_EXCEPTION_MESSAGE = ('exception.message');
/**
 * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
 */
export var SEMATTRS_EXCEPTION_STACKTRACE = ('exception.stacktrace');
/**
* SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
*
* Note: An exception is considered to have escaped (or left) the scope of a span,
if that span is ended while the exception is still logically &#34;in flight&#34;.
This may be actually &#34;in flight&#34; in some languages (e.g. if the exception
is passed to a Context manager&#39;s `__exit__` method in Python) but will
usually be caught at the point of recording the exception in most languages.

It is usually not possible to determine at the point where an exception is thrown
whether it will escape the scope of a span.
However, it is trivial to know that an exception
will escape, if one checks for an active exception just before ending the span,
as done in the [example above](#exception-end-example).

It follows that an exception may still escape the scope of the span
even if the `exception.escaped` attribute was not set or set to false,
since the event might have been recorded at a time where it was not
clear whether the exception will escape.
*/
export var SEMATTRS_EXCEPTION_ESCAPED = ('exception.escaped');
/**
 * Type of the trigger on which the function is executed.
 */
export var SEMATTRS_FAAS_TRIGGER = ('faas.trigger');
/**
 * The execution ID of the current function execution.
 */
export var SEMATTRS_FAAS_EXECUTION = ('faas.execution');
/**
 * The name of the source on which the triggering operation was performed. For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
 */
export var SEMATTRS_FAAS_DOCUMENT_COLLECTION = ('faas.document.collection');
/**
 * Describes the type of the operation that was performed on the data.
 */
export var SEMATTRS_FAAS_DOCUMENT_OPERATION = ('faas.document.operation');
/**
 * A string containing the time when the data was accessed in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
 */
export var SEMATTRS_FAAS_DOCUMENT_TIME = ('faas.document.time');
/**
 * The document name/table subjected to the operation. For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
 */
export var SEMATTRS_FAAS_DOCUMENT_NAME = ('faas.document.name');
/**
 * A string containing the function invocation time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
 */
export var SEMATTRS_FAAS_TIME = ('faas.time');
/**
 * A string containing the schedule period as [Cron Expression](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm).
 */
export var SEMATTRS_FAAS_CRON = ('faas.cron');
/**
 * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
 */
export var SEMATTRS_FAAS_COLDSTART = ('faas.coldstart');
/**
 * The name of the invoked function.
 *
 * Note: SHOULD be equal to the `faas.name` resource attribute of the invoked function.
 */
export var SEMATTRS_FAAS_INVOKED_NAME = ('faas.invoked_name');
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 */
export var SEMATTRS_FAAS_INVOKED_PROVIDER = ('faas.invoked_provider');
/**
 * The cloud region of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.region` resource attribute of the invoked function.
 */
export var SEMATTRS_FAAS_INVOKED_REGION = ('faas.invoked_region');
/**
 * Transport protocol used. See note below.
 */
export var SEMATTRS_NET_TRANSPORT = ('net.transport');
/**
 * Remote address of the peer (dotted decimal for IPv4 or [RFC5952](https://tools.ietf.org/html/rfc5952) for IPv6).
 */
export var SEMATTRS_NET_PEER_IP = ('net.peer.ip');
/**
 * Remote port number.
 */
export var SEMATTRS_NET_PEER_PORT = ('net.peer.port');
/**
 * Remote hostname or similar, see note below.
 */
export var SEMATTRS_NET_PEER_NAME = ('net.peer.name');
/**
 * Like `net.peer.ip` but for the host IP. Useful in case of a multi-IP host.
 */
export var SEMATTRS_NET_HOST_IP = ('net.hostip');
/**
 * Like `net.peer.port` but for the host port.
 */
export var SEMATTRS_NET_HOST_PORT = ('net.hostport');
/**
 * Local hostname or similar, see note below.
 */
export var SEMATTRS_NET_HOST_NAME = ('net.hostname');
/**
 * The internet connection type currently being used by the host.
 */
export var SEMATTRS_NET_HOST_CONNECTION_TYPE = ('net.hostconnectiontype');
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = ('net.hostconnectionsubtype');
/**
 * The name of the mobile carrier.
 */
export var SEMATTRS_NET_HOST_CARRIER_NAME = ('net.hostcarrier.name');
/**
 * The mobile carrier country code.
 */
export var SEMATTRS_NET_HOST_CARRIER_MCC = ('net.hostcarrier.mcc');
/**
 * The mobile carrier network code.
 */
export var SEMATTRS_NET_HOST_CARRIER_MNC = ('net.hostcarrier.mnc');
/**
 * The ISO 3166-1 alpha-2 2-character country code associated with the mobile carrier network.
 */
export var SEMATTRS_NET_HOST_CARRIER_ICC = ('net.hostcarrier.icc');
/**
 * The [`service.name`](../../resource/semantic_conventions/README.md#service) of the remote service. SHOULD be equal to the actual `service.name` resource attribute of the remote service if any.
 */
export var SEMATTRS_PEER_SERVICE = ('peer.service');
/**
 * Username or client_id extracted from the access token or [Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) header in the inbound request from outside the system.
 */
export var SEMATTRS_ENDUSER_ID = ('enduser.id');
/**
 * Actual/assumed role the client is making the request under extracted from token or application security context.
 */
export var SEMATTRS_ENDUSER_ROLE = ('enduser.role');
/**
 * Scopes or granted authorities the client currently possesses extracted from token or application security context. The value would come from the scope associated with an [OAuth 2.0 Access Token](https://tools.ietf.org/html/rfc6749#section-3.3) or an attribute value in a [SAML 2.0 Assertion](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).
 */
export var SEMATTRS_ENDUSER_SCOPE = ('enduser.scope');
/**
 * Current &#34;managed&#34; thread ID (as opposed to OS thread ID).
 */
export var SEMATTRS_THREAD_ID = ('thread.id');
/**
 * Current thread name.
 */
export var SEMATTRS_THREAD_NAME = ('thread.name');
/**
 * The method or function name, or equivalent (usually rightmost part of the code unit&#39;s name).
 */
export var SEMATTRS_CODE_FUNCTION = ('code.function');
/**
 * The &#34;namespace&#34; within which `code.function` is defined. Usually the qualified class or module name, such that `code.namespace` + some separator + `code.function` form a unique identifier for the code unit.
 */
export var SEMATTRS_CODE_NAMESPACE = ('code.namespace');
/**
 * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
 */
export var SEMATTRS_CODE_FILEPATH = ('code.filepath');
/**
 * The line number in `code.filepath` best representing the operation. It SHOULD point within the code unit named in `code.function`.
 */
export var SEMATTRS_CODE_LINENO = ('code.lineno');
/**
 * HTTP request method.
 */
export var SEMATTRS_HTTP_METHOD = ('http.method');
/**
 * Full HTTP request URL in the form `scheme://host[:port]/path?query[#fragment]`. Usually the fragment is not transmitted over HTTP, but if it is known, it should be included nevertheless.
 *
 * Note: `http.url` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case the attribute&#39;s value should be `https://www.example.com/`.
 */
export var SEMATTRS_HTTP_URL = ('http.url');
/**
 * The full request target as passed in a HTTP request line or equivalent.
 */
export var SEMATTRS_HTTP_TARGET = ('http.target');
/**
 * The value of the [HTTP host header](https://tools.ietf.org/html/rfc7230#section-5.4). An empty Host header should also be reported, see note.
 *
 * Note: When the header is present but empty the attribute SHOULD be set to the empty string. Note that this is a valid situation that is expected in certain cases, according the aforementioned [section of RFC 7230](https://tools.ietf.org/html/rfc7230#section-5.4). When the header is not set the attribute MUST NOT be set.
 */
export var SEMATTRS_HTTP_HOST = ('http.host');
/**
 * The URI scheme identifying the used protocol.
 */
export var SEMATTRS_HTTP_SCHEME = ('http.scheme');
/**
 * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
 */
export var SEMATTRS_HTTP_STATUS_CODE = ('http.status_code');
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 */
export var SEMATTRS_HTTP_FLAVOR = ('http.flavor');
/**
 * Value of the [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) header sent by the client.
 */
export var SEMATTRS_HTTP_USER_AGENT = ('http.user_agent');
/**
 * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
 */
export var SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = ('http.request_content_length');
/**
 * The size of the uncompressed request payload body after transport decoding. Not set if transport encoding not used.
 */
export var SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = ('http.request_content_length_uncompressed');
/**
 * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
 */
export var SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = ('http.response_content_length');
/**
 * The size of the uncompressed response payload body after transport decoding. Not set if transport encoding not used.
 */
export var SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = ('http.response_content_length_uncompressed');
/**
 * The primary server name of the matched virtual host. This should be obtained via configuration. If no such configuration can be obtained, this attribute MUST NOT be set ( `net.host.name` should be used instead).
 *
 * Note: `http.url` is usually not readily available on the server side but would have to be assembled in a cumbersome and sometimes lossy process from other information (see e.g. open-telemetry/opentelemetry-python/pull/148). It is thus preferred to supply the raw data that is available.
 */
export var SEMATTRS_HTTP_SERVER_NAME = ('http.server_name');
/**
 * The matched route (path template).
 */
export var SEMATTRS_HTTP_ROUTE = ('http.route');
/**
* The IP address of the original client behind all proxies, if known (e.g. from [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)).
*
* Note: This is not necessarily the same as `net.peer.ip`, which would
identify the network-level peer, which may be a proxy.

This attribute should be set when a source of information different
from the one used for `net.peer.ip`, is available even if that other
source just confirms the same value as `net.peer.ip`.
Rationale: For `net.peer.ip`, one typically does not know if it
comes from a proxy, reverse proxy, or the actual client. Setting
`http.client_ip` when it&#39;s the same as `net.peer.ip` means that
one is at least somewhat confident that the address is not that of
the closest proxy.
*/
export var SEMATTRS_HTTP_CLIENT_IP = ('http.client_ip');
/**
 * The keys in the `RequestItems` object field.
 */
export var SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = ('awsdynamodb.table_names');
/**
 * The JSON-serialized value of each item in the `ConsumedCapacity` response field.
 */
export var SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = ('awsdynamodb.consumed_capacity');
/**
 * The JSON-serialized value of the `ItemCollectionMetrics` response field.
 */
export var SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = ('awsdynamodb.item_collection_metrics');
/**
 * The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = ('awsdynamodb.provisioned_read_capacity');
/**
 * The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = ('awsdynamodb.provisioned_write_capacity');
/**
 * The value of the `ConsistentRead` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = ('awsdynamodb.consistent_read');
/**
 * The value of the `ProjectionExpression` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_PROJECTION = ('awsdynamodb.projection');
/**
 * The value of the `Limit` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_LIMIT = ('awsdynamodb.limit');
/**
 * The value of the `AttributesToGet` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = ('awsdynamodb.attributes_to_get');
/**
 * The value of the `IndexName` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_INDEX_NAME = ('awsdynamodb.index_name');
/**
 * The value of the `Select` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_SELECT = ('awsdynamodb.select');
/**
 * The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.
 */
export var SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = ('awsdynamodb.global_secondary_indexes');
/**
 * The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
 */
export var SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = ('awsdynamodb.local_secondary_indexes');
/**
 * The value of the `ExclusiveStartTableName` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = ('awsdynamodb.exclusive_start_table');
/**
 * The the number of items in the `TableNames` response parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = ('awsdynamodb.table_count');
/**
 * The value of the `ScanIndexForward` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = ('awsdynamodb.scan_forward');
/**
 * The value of the `Segment` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_SEGMENT = ('awsdynamodb.segment');
/**
 * The value of the `TotalSegments` request parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = ('awsdynamodb.total_segments');
/**
 * The value of the `Count` response parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_COUNT = ('awsdynamodb.count');
/**
 * The value of the `ScannedCount` response parameter.
 */
export var SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = ('awsdynamodb.scanned_count');
/**
 * The JSON-serialized value of each item in the `AttributeDefinitions` request field.
 */
export var SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = ('awsdynamodb.attribute_definitions');
/**
 * The JSON-serialized value of each item in the the `GlobalSecondaryIndexUpdates` request field.
 */
export var SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = ('awsdynamodb.global_secondary_index_updates');
/**
 * A string identifying the messaging system.
 */
export var SEMATTRS_MESSAGING_SYSTEM = ('messaging.system');
/**
 * The message destination name. This might be equal to the span name but is required nevertheless.
 */
export var SEMATTRS_MESSAGING_DESTINATION = ('messaging.destination');
/**
 * The kind of message destination.
 */
export var SEMATTRS_MESSAGING_DESTINATION_KIND = ('messaging.destination_kind');
/**
 * A boolean that is true if the message destination is temporary.
 */
export var SEMATTRS_MESSAGING_TEMP_DESTINATION = ('messaging.temp_destination');
/**
 * The name of the transport protocol.
 */
export var SEMATTRS_MESSAGING_PROTOCOL = ('messaging.protocol');
/**
 * The version of the transport protocol.
 */
export var SEMATTRS_MESSAGING_PROTOCOL_VERSION = ('messaging.protocol_version');
/**
 * Connection string.
 */
export var SEMATTRS_MESSAGING_URL = ('messaging.url');
/**
 * A value used by the messaging system as an identifier for the message, represented as a string.
 */
export var SEMATTRS_MESSAGING_MESSAGE_ID = ('messaging.message_id');
/**
 * The [conversation ID](#conversations) identifying the conversation to which the message belongs, represented as a string. Sometimes called &#34;Correlation ID&#34;.
 */
export var SEMATTRS_MESSAGING_CONVERSATION_ID = ('messaging.conversation_id');
/**
 * The (uncompressed) size of the message payload in bytes. Also use this attribute if it is unknown whether the compressed or uncompressed payload size is reported.
 */
export var SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = ('messaging.message_payload_size_bytes');
/**
 * The compressed size of the message payload in bytes.
 */
export var SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = ('messaging.message_payload_compressed_size_bytes');
/**
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 */
export var SEMATTRS_MESSAGING_OPERATION = ('messaging.operation');
/**
 * The identifier for the consumer receiving a message. For Kafka, set it to `{messaging.kafka.consumer_group} - {messaging.kafka.client_id}`, if both are present, or only `messaging.kafka.consumer_group`. For brokers, such as RabbitMQ and Artemis, set it to the `client_id` of the client consuming the message.
 */
export var SEMATTRS_MESSAGING_CONSUMER_ID = ('messaging.consumer_id');
/**
 * RabbitMQ message routing key.
 */
export var SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = ('messaging.rabbitmq.routing_key');
/**
 * Message keys in Kafka are used for grouping alike messages to ensure they&#39;re processed on the same partition. They differ from `messaging.message_id` in that they&#39;re not unique. If the key is `null`, the attribute MUST NOT be set.
 *
 * Note: If the key type is not string, it&#39;s string representation has to be supplied for the attribute. If the key has no unambiguous, canonical string form, don&#39;t include its value.
 */
export var SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = ('messaging.kafka.message_key');
/**
 * Name of the Kafka Consumer Group that is handling the message. Only applies to consumers, not producers.
 */
export var SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = ('messaging.kafka.consumer_group');
/**
 * Client Id for the Consumer or Producer that is handling the message.
 */
export var SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = ('messaging.kafka.client_id');
/**
 * Partition the message is sent to.
 */
export var SEMATTRS_MESSAGING_KAFKA_PARTITION = ('messaging.kafka.partition');
/**
 * A boolean that is true if the message is a tombstone.
 */
export var SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = ('messaging.kafka.tombstone');
/**
 * A string identifying the remoting system.
 */
export var SEMATTRS_RPC_SYSTEM = ('rpc.system');
/**
 * The full (logical) name of the service being called, including its package name, if applicable.
 *
 * Note: This is the logical name of the service from the RPC interface perspective, which can be different from the name of any implementing class. The `code.namespace` attribute may be used to store the latter (despite the attribute name, it may include a class name; e.g., class with method actually executing the call on the server side, RPC client stub class on the client side).
 */
export var SEMATTRS_RPC_SERVICE = ('rpc.service');
/**
 * The name of the (logical) method being called, must be equal to the $method part in the span name.
 *
 * Note: This is the logical name of the method from the RPC interface perspective, which can be different from the name of any implementing method/function. The `code.function` attribute may be used to store the latter (e.g., method actually executing the call on the server side, RPC client stub method on the client side).
 */
export var SEMATTRS_RPC_METHOD = ('rpc.method');
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var SEMATTRS_RPC_GRPC_STATUS_CODE = ('rpc.grpc.status_code');
/**
 * Protocol version as in `jsonrpc` property of request/response. Since JSON-RPC 1.0 does not specify this, the value can be omitted.
 */
export var SEMATTRS_RPC_JSONRPC_VERSION = ('rpc.jsonrpc.version');
/**
 * `id` property of request or response. Since protocol allows id to be int, string, `null` or missing (for notifications), value is expected to be cast to string for simplicity. Use empty string in case of `null` value. Omit entirely if this is a notification.
 */
export var SEMATTRS_RPC_JSONRPC_REQUEST_ID = ('rpc.jsonrpc.request_id');
/**
 * `error.code` property of response if it is an error response.
 */
export var SEMATTRS_RPC_JSONRPC_ERROR_CODE = ('rpc.jsonrpc.error_code');
/**
 * `error.message` property of response if it is an error response.
 */
export var SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = ('rpc.jsonrpc.error_message');
/**
 * Whether this is a received or sent message.
 */
export var SEMATTRS_MESSAGE_TYPE = ('messagetype');
/**
 * MUST be calculated as two different counters starting from `1` one for sent messages and one for received message.
 *
 * Note: This way we guarantee that the values will be consistent between different implementations.
 */
export var SEMATTRS_MESSAGE_ID = ('messageid');
/**
 * Compressed size of the message in bytes.
 */
export var SEMATTRS_MESSAGE_COMPRESSED_SIZE = ('messagecompressed_size');
/**
 * Uncompressed size of the message in bytes.
 */
export var SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = ('messageuncompressed_size');
/**
 * Create exported Value Map for SemanticAttributes values
 * @deprecated Use the SEMATTRS_XXXXX constants rather than the SemanticAttributes.XXXXX for bundle minification
 */
export var SemanticAttributes = /*#__PURE__*/ createConstMap([
    SEMATTRS_AWS_LAMBDA_INVOKED_ARN,
    SEMATTRS_DB_SYSTEM,
    SEMATTRS_DB_CONNECTION_STRING,
    SEMATTRS_DB_USER,
    SEMATTRS_DB_JDBC_DRIVER_CLASSNAME,
    SEMATTRS_DB_NAME,
    SEMATTRS_DB_STATEMENT,
    SEMATTRS_DB_OPERATION,
    SEMATTRS_DB_MSSQL_INSTANCE_NAME,
    SEMATTRS_DB_CASSANDRA_KEYSPACE,
    SEMATTRS_DB_CASSANDRA_PAGE_SIZE,
    SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL,
    SEMATTRS_DB_CASSANDRA_TABLE,
    SEMATTRS_DB_CASSANDRA_IDEMPOTENCE,
    SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
    SEMATTRS_DB_CASSANDRA_COORDINATOR_ID,
    SEMATTRS_DB_CASSANDRA_COORDINATOR_DC,
    SEMATTRS_DB_HBASE_NAMESPACE,
    SEMATTRS_DB_REDIS_DATABASE_INDEX,
    SEMATTRS_DB_MONGODB_COLLECTION,
    SEMATTRS_DB_SQL_TABLE,
    SEMATTRS_EXCEPTION_TYPE,
    SEMATTRS_EXCEPTION_MESSAGE,
    SEMATTRS_EXCEPTION_STACKTRACE,
    SEMATTRS_EXCEPTION_ESCAPED,
    SEMATTRS_FAAS_TRIGGER,
    SEMATTRS_FAAS_EXECUTION,
    SEMATTRS_FAAS_DOCUMENT_COLLECTION,
    SEMATTRS_FAAS_DOCUMENT_OPERATION,
    SEMATTRS_FAAS_DOCUMENT_TIME,
    SEMATTRS_FAAS_DOCUMENT_NAME,
    SEMATTRS_FAAS_TIME,
    SEMATTRS_FAAS_CRON,
    SEMATTRS_FAAS_COLDSTART,
    SEMATTRS_FAAS_INVOKED_NAME,
    SEMATTRS_FAAS_INVOKED_PROVIDER,
    SEMATTRS_FAAS_INVOKED_REGION,
    SEMATTRS_NET_TRANSPORT,
    SEMATTRS_NET_PEER_IP,
    SEMATTRS_NET_PEER_PORT,
    SEMATTRS_NET_PEER_NAME,
    SEMATTRS_NET_HOST_IP,
    SEMATTRS_NET_HOST_PORT,
    SEMATTRS_NET_HOST_NAME,
    SEMATTRS_NET_HOST_CONNECTION_TYPE,
    SEMATTRS_NET_HOST_CONNECTION_SUBTYPE,
    SEMATTRS_NET_HOST_CARRIER_NAME,
    SEMATTRS_NET_HOST_CARRIER_MCC,
    SEMATTRS_NET_HOST_CARRIER_MNC,
    SEMATTRS_NET_HOST_CARRIER_ICC,
    SEMATTRS_PEER_SERVICE,
    SEMATTRS_ENDUSER_ID,
    SEMATTRS_ENDUSER_ROLE,
    SEMATTRS_ENDUSER_SCOPE,
    SEMATTRS_THREAD_ID,
    SEMATTRS_THREAD_NAME,
    SEMATTRS_CODE_FUNCTION,
    SEMATTRS_CODE_NAMESPACE,
    SEMATTRS_CODE_FILEPATH,
    SEMATTRS_CODE_LINENO,
    SEMATTRS_HTTP_METHOD,
    SEMATTRS_HTTP_URL,
    SEMATTRS_HTTP_TARGET,
    SEMATTRS_HTTP_HOST,
    SEMATTRS_HTTP_SCHEME,
    SEMATTRS_HTTP_STATUS_CODE,
    SEMATTRS_HTTP_FLAVOR,
    SEMATTRS_HTTP_USER_AGENT,
    SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH,
    SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
    SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH,
    SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
    SEMATTRS_HTTP_SERVER_NAME,
    SEMATTRS_HTTP_ROUTE,
    SEMATTRS_HTTP_CLIENT_IP,
    SEMATTRS_AWS_DYNAMODB_TABLE_NAMES,
    SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY,
    SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
    SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
    SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
    SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ,
    SEMATTRS_AWS_DYNAMODB_PROJECTION,
    SEMATTRS_AWS_DYNAMODB_LIMIT,
    SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
    SEMATTRS_AWS_DYNAMODB_INDEX_NAME,
    SEMATTRS_AWS_DYNAMODB_SELECT,
    SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
    SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
    SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
    SEMATTRS_AWS_DYNAMODB_TABLE_COUNT,
    SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD,
    SEMATTRS_AWS_DYNAMODB_SEGMENT,
    SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS,
    SEMATTRS_AWS_DYNAMODB_COUNT,
    SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT,
    SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
    SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
    SEMATTRS_MESSAGING_SYSTEM,
    SEMATTRS_MESSAGING_DESTINATION,
    SEMATTRS_MESSAGING_DESTINATION_KIND,
    SEMATTRS_MESSAGING_TEMP_DESTINATION,
    SEMATTRS_MESSAGING_PROTOCOL,
    SEMATTRS_MESSAGING_PROTOCOL_VERSION,
    SEMATTRS_MESSAGING_URL,
    SEMATTRS_MESSAGING_MESSAGE_ID,
    SEMATTRS_MESSAGING_CONVERSATION_ID,
    SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
    SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
    SEMATTRS_MESSAGING_OPERATION,
    SEMATTRS_MESSAGING_CONSUMER_ID,
    SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY,
    SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY,
    SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP,
    SEMATTRS_MESSAGING_KAFKA_CLIENT_ID,
    SEMATTRS_MESSAGING_KAFKA_PARTITION,
    SEMATTRS_MESSAGING_KAFKA_TOMBSTONE,
    SEMATTRS_RPC_SYSTEM,
    SEMATTRS_RPC_SERVICE,
    SEMATTRS_RPC_METHOD,
    SEMATTRS_RPC_GRPC_STATUS_CODE,
    SEMATTRS_RPC_JSONRPC_VERSION,
    SEMATTRS_RPC_JSONRPC_REQUEST_ID,
    SEMATTRS_RPC_JSONRPC_ERROR_CODE,
    SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE,
    SEMATTRS_MESSAGE_TYPE,
    SEMATTRS_MESSAGE_ID,
    SEMATTRS_MESSAGE_COMPRESSED_SIZE,
    SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE,
]);
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for DbSystemValues enum definition
 *
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_OTHER_SQL = 'other_sql';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_MSSQL = 'mssql';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_MYSQL = 'mysql';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_ORACLE = 'oracle';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_DB2 = 'db2';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_POSTGRESQL = 'postgresql';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_REDSHIFT = 'redshift';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_HIVE = 'hive';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_CLOUDSCAPE = 'cloudscape';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_HSQLDB = 'hsqldb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_PROGRESS = 'progress';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_MAXDB = 'maxdb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_HANADB = 'hanadb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_INGRES = 'ingres';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_FIRSTSQL = 'firstsql';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_EDB = 'edb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_CACHE = 'cache';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_ADABAS = 'adabas';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_FIREBIRD = 'firebird';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_DERBY = 'derby';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_FILEMAKER = 'filemaker';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_INFORMIX = 'informix';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_INSTANTDB = 'instantdb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_INTERBASE = 'interbase';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_MARIADB = 'mariadb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_NETEZZA = 'netezza';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_PERVASIVE = 'pervasive';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_POINTBASE = 'pointbase';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_SQLITE = 'sqlite';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_SYBASE = 'sybase';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_TERADATA = 'teradata';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_VERTICA = 'vertica';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_H2 = 'h2';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_COLDFUSION = 'coldfusion';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_CASSANDRA = 'cassandra';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_HBASE = 'hbase';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_MONGODB = 'mongodb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_REDIS = 'redis';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_COUCHBASE = 'couchbase';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_COUCHDB = 'couchdb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_COSMOSDB = 'cosmosdb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_DYNAMODB = 'dynamodb';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_NEO4J = 'neo4j';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_GEODE = 'geode';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_ELASTICSEARCH = 'elasticsearch';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_MEMCACHED = 'memcached';
/**
 * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
 */
export var DBSYSTEMVALUES_COCKROACHDB = 'cockroachdb';
/**
 * The constant map of values for DbSystemValues.
 * @deprecated Use the DBSYSTEMVALUES_XXXXX constants rather than the DbSystemValues.XXXXX for bundle minification.
 */
export var DbSystemValues = {
    OTHER_SQL: DBSYSTEMVALUES_OTHER_SQL,
    MSSQL: DBSYSTEMVALUES_MSSQL,
    MYSQL: DBSYSTEMVALUES_MYSQL,
    ORACLE: DBSYSTEMVALUES_ORACLE,
    DB2: DBSYSTEMVALUES_DB2,
    POSTGRESQL: DBSYSTEMVALUES_POSTGRESQL,
    REDSHIFT: DBSYSTEMVALUES_REDSHIFT,
    HIVE: DBSYSTEMVALUES_HIVE,
    CLOUDSCAPE: DBSYSTEMVALUES_CLOUDSCAPE,
    HSQLDB: DBSYSTEMVALUES_HSQLDB,
    PROGRESS: DBSYSTEMVALUES_PROGRESS,
    MAXDB: DBSYSTEMVALUES_MAXDB,
    HANADB: DBSYSTEMVALUES_HANADB,
    INGRES: DBSYSTEMVALUES_INGRES,
    FIRSTSQL: DBSYSTEMVALUES_FIRSTSQL,
    EDB: DBSYSTEMVALUES_EDB,
    CACHE: DBSYSTEMVALUES_CACHE,
    ADABAS: DBSYSTEMVALUES_ADABAS,
    FIREBIRD: DBSYSTEMVALUES_FIREBIRD,
    DERBY: DBSYSTEMVALUES_DERBY,
    FILEMAKER: DBSYSTEMVALUES_FILEMAKER,
    INFORMIX: DBSYSTEMVALUES_INFORMIX,
    INSTANTDB: DBSYSTEMVALUES_INSTANTDB,
    INTERBASE: DBSYSTEMVALUES_INTERBASE,
    MARIADB: DBSYSTEMVALUES_MARIADB,
    NETEZZA: DBSYSTEMVALUES_NETEZZA,
    PERVASIVE: DBSYSTEMVALUES_PERVASIVE,
    POINTBASE: DBSYSTEMVALUES_POINTBASE,
    SQLITE: DBSYSTEMVALUES_SQLITE,
    SYBASE: DBSYSTEMVALUES_SYBASE,
    TERADATA: DBSYSTEMVALUES_TERADATA,
    VERTICA: DBSYSTEMVALUES_VERTICA,
    H2: DBSYSTEMVALUES_H2,
    COLDFUSION: DBSYSTEMVALUES_COLDFUSION,
    CASSANDRA: DBSYSTEMVALUES_CASSANDRA,
    HBASE: DBSYSTEMVALUES_HBASE,
    MONGODB: DBSYSTEMVALUES_MONGODB,
    REDIS: DBSYSTEMVALUES_REDIS,
    COUCHBASE: DBSYSTEMVALUES_COUCHBASE,
    COUCHDB: DBSYSTEMVALUES_COUCHDB,
    COSMOSDB: DBSYSTEMVALUES_COSMOSDB,
    DYNAMODB: DBSYSTEMVALUES_DYNAMODB,
    NEO4J: DBSYSTEMVALUES_NEO4J,
    GEODE: DBSYSTEMVALUES_GEODE,
    ELASTICSEARCH: DBSYSTEMVALUES_ELASTICSEARCH,
    MEMCACHED: DBSYSTEMVALUES_MEMCACHED,
    COCKROACHDB: DBSYSTEMVALUES_COCKROACHDB,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for DbCassandraConsistencyLevelValues enum definition
 *
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_ALL = 'all';
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = 'each_quorum';
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = 'quorum';
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = ('local_quorum');
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_ONE = 'one';
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_TWO = 'two';
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_THREE = 'three';
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = ('local_one');
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_ANY = 'any';
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = 'serial';
/**
 * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
 */
export var DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = ('local_serial');
/**
 * The constant map of values for DbCassandraConsistencyLevelValues.
 * @deprecated Use the DBCASSANDRACONSISTENCYLEVELVALUES_XXXXX constants rather than the DbCassandraConsistencyLevelValues.XXXXX for bundle minification.
 */
export var DbCassandraConsistencyLevelValues = {
    ALL: DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
    EACH_QUORUM: DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
    QUORUM: DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
    LOCAL_QUORUM: DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
    ONE: DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
    TWO: DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
    THREE: DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
    LOCAL_ONE: DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
    ANY: DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
    SERIAL: DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
    LOCAL_SERIAL: DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasTriggerValues enum definition
 *
 * Type of the trigger on which the function is executed.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * Type of the trigger on which the function is executed.
 */
export var FAASTRIGGERVALUES_DATASOURCE = 'datasource';
/**
 * Type of the trigger on which the function is executed.
 */
export var FAASTRIGGERVALUES_HTTP = 'http';
/**
 * Type of the trigger on which the function is executed.
 */
export var FAASTRIGGERVALUES_PUBSUB = 'pubsub';
/**
 * Type of the trigger on which the function is executed.
 */
export var FAASTRIGGERVALUES_TIMER = 'timer';
/**
 * Type of the trigger on which the function is executed.
 */
export var FAASTRIGGERVALUES_OTHER = 'other';
/**
 * The constant map of values for FaasTriggerValues.
 * @deprecated Use the FAASTRIGGERVALUES_XXXXX constants rather than the FaasTriggerValues.XXXXX for bundle minification.
 */
export var FaasTriggerValues = {
    DATASOURCE: FAASTRIGGERVALUES_DATASOURCE,
    HTTP: FAASTRIGGERVALUES_HTTP,
    PUBSUB: FAASTRIGGERVALUES_PUBSUB,
    TIMER: FAASTRIGGERVALUES_TIMER,
    OTHER: FAASTRIGGERVALUES_OTHER,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasDocumentOperationValues enum definition
 *
 * Describes the type of the operation that was performed on the data.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * Describes the type of the operation that was performed on the data.
 */
export var FAASDOCUMENTOPERATIONVALUES_INSERT = 'insert';
/**
 * Describes the type of the operation that was performed on the data.
 */
export var FAASDOCUMENTOPERATIONVALUES_EDIT = 'edit';
/**
 * Describes the type of the operation that was performed on the data.
 */
export var FAASDOCUMENTOPERATIONVALUES_DELETE = 'delete';
/**
 * The constant map of values for FaasDocumentOperationValues.
 * @deprecated Use the FAASDOCUMENTOPERATIONVALUES_XXXXX constants rather than the FaasDocumentOperationValues.XXXXX for bundle minification.
 */
export var FaasDocumentOperationValues = {
    INSERT: FAASDOCUMENTOPERATIONVALUES_INSERT,
    EDIT: FAASDOCUMENTOPERATIONVALUES_EDIT,
    DELETE: FAASDOCUMENTOPERATIONVALUES_DELETE,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for FaasInvokedProviderValues enum definition
 *
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 */
export var FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = 'alibaba_cloud';
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 */
export var FAASINVOKEDPROVIDERVALUES_AWS = 'aws';
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 */
export var FAASINVOKEDPROVIDERVALUES_AZURE = 'azure';
/**
 * The cloud provider of the invoked function.
 *
 * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
 */
export var FAASINVOKEDPROVIDERVALUES_GCP = 'gcp';
/**
 * The constant map of values for FaasInvokedProviderValues.
 * @deprecated Use the FAASINVOKEDPROVIDERVALUES_XXXXX constants rather than the FaasInvokedProviderValues.XXXXX for bundle minification.
 */
export var FaasInvokedProviderValues = {
    ALIBABA_CLOUD: FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
    AWS: FAASINVOKEDPROVIDERVALUES_AWS,
    AZURE: FAASINVOKEDPROVIDERVALUES_AZURE,
    GCP: FAASINVOKEDPROVIDERVALUES_GCP,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetTransportValues enum definition
 *
 * Transport protocol used. See note below.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * Transport protocol used. See note below.
 */
export var NETTRANSPORTVALUES_IP_TCP = 'ip_tcp';
/**
 * Transport protocol used. See note below.
 */
export var NETTRANSPORTVALUES_IP_UDP = 'ip_udp';
/**
 * Transport protocol used. See note below.
 */
export var NETTRANSPORTVALUES_IP = 'ip';
/**
 * Transport protocol used. See note below.
 */
export var NETTRANSPORTVALUES_UNIX = ('unix');
/**
 * Transport protocol used. See note below.
 */
export var NETTRANSPORTVALUES_PIPE = 'pipe';
/**
 * Transport protocol used. See note below.
 */
export var NETTRANSPORTVALUES_INPROC = 'inproc';
/**
 * Transport protocol used. See note below.
 */
export var NETTRANSPORTVALUES_OTHER = 'other';
/**
 * The constant map of values for NetTransportValues.
 * @deprecated Use the NETTRANSPORTVALUES_XXXXX constants rather than the NetTransportValues.XXXXX for bundle minification.
 */
export var NetTransportValues = {
    IP_TCP: NETTRANSPORTVALUES_IP_TCP,
    IP_UDP: NETTRANSPORTVALUES_IP_UDP,
    IP: NETTRANSPORTVALUES_IP,
    UNIX: NETTRANSPORTVALUES_UNIX,
    PIPE: NETTRANSPORTVALUES_PIPE,
    INPROC: NETTRANSPORTVALUES_INPROC,
    OTHER: NETTRANSPORTVALUES_OTHER,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetHostConnectionTypeValues enum definition
 *
 * The internet connection type currently being used by the host.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The internet connection type currently being used by the host.
 */
export var NETHOSTCONNECTIONTYPEVALUES_WIFI = 'wifi';
/**
 * The internet connection type currently being used by the host.
 */
export var NETHOSTCONNECTIONTYPEVALUES_WIRED = 'wired';
/**
 * The internet connection type currently being used by the host.
 */
export var NETHOSTCONNECTIONTYPEVALUES_CELL = 'cell';
/**
 * The internet connection type currently being used by the host.
 */
export var NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = ('unavailable');
/**
 * The internet connection type currently being used by the host.
 */
export var NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = ('unknown');
/**
 * The constant map of values for NetHostConnectionTypeValues.
 * @deprecated Use the NETHOSTCONNECTIONTYPEVALUES_XXXXX constants rather than the NetHostConnectionTypeValues.XXXXX for bundle minification.
 */
export var NetHostConnectionTypeValues = {
    WIFI: NETHOSTCONNECTIONTYPEVALUES_WIFI,
    WIRED: NETHOSTCONNECTIONTYPEVALUES_WIRED,
    CELL: NETHOSTCONNECTIONTYPEVALUES_CELL,
    UNAVAILABLE: NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
    UNKNOWN: NETHOSTCONNECTIONTYPEVALUES_UNKNOWN,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for NetHostConnectionSubtypeValues enum definition
 *
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = 'gprs';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = 'edge';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = 'umts';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = 'cdma';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = 'evdo_0';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = 'evdo_a';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = 'cdma2000_1xrtt';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = 'hsdpa';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = 'hsupa';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = 'hspa';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = ('iden');
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = 'evdo_b';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_LTE = 'lte';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = 'ehrpd';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = 'hspap';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_GSM = 'gsm';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = 'td_scdma';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = 'iwlan';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_NR = 'nr';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = 'nrnsa';
/**
 * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
 */
export var NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = 'lte_ca';
/**
 * The constant map of values for NetHostConnectionSubtypeValues.
 * @deprecated Use the NETHOSTCONNECTIONSUBTYPEVALUES_XXXXX constants rather than the NetHostConnectionSubtypeValues.XXXXX for bundle minification.
 */
export var NetHostConnectionSubtypeValues = {
    GPRS: NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
    EDGE: NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
    UMTS: NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
    CDMA: NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
    EVDO_0: NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
    EVDO_A: NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
    CDMA2000_1XRTT: NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
    HSDPA: NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
    HSUPA: NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
    HSPA: NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
    IDEN: NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
    EVDO_B: NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
    LTE: NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
    EHRPD: NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
    HSPAP: NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
    GSM: NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
    TD_SCDMA: NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
    IWLAN: NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
    NR: NETHOSTCONNECTIONSUBTYPEVALUES_NR,
    NRNSA: NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
    LTE_CA: NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for HttpFlavorValues enum definition
 *
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 */
export var HTTPFLAVORVALUES_HTTP_1_0 = '1.0';
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 */
export var HTTPFLAVORVALUES_HTTP_1_1 = '1.1';
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 */
export var HTTPFLAVORVALUES_HTTP_2_0 = '2.0';
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 */
export var HTTPFLAVORVALUES_SPDY = 'SPDY';
/**
 * Kind of HTTP protocol used.
 *
 * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
 */
export var HTTPFLAVORVALUES_QUIC = 'QUIC';
/**
 * The constant map of values for HttpFlavorValues.
 * @deprecated Use the HTTPFLAVORVALUES_XXXXX constants rather than the HttpFlavorValues.XXXXX for bundle minification.
 */
export var HttpFlavorValues = {
    HTTP_1_0: HTTPFLAVORVALUES_HTTP_1_0,
    HTTP_1_1: HTTPFLAVORVALUES_HTTP_1_1,
    HTTP_2_0: HTTPFLAVORVALUES_HTTP_2_0,
    SPDY: HTTPFLAVORVALUES_SPDY,
    QUIC: HTTPFLAVORVALUES_QUIC,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessagingDestinationKindValues enum definition
 *
 * The kind of message destination.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The kind of message destination.
 */
export var MESSAGINGDESTINATIONKINDVALUES_QUEUE = 'queue';
/**
 * The kind of message destination.
 */
export var MESSAGINGDESTINATIONKINDVALUES_TOPIC = 'topic';
/**
 * The constant map of values for MessagingDestinationKindValues.
 * @deprecated Use the MESSAGINGDESTINATIONKINDVALUES_XXXXX constants rather than the MessagingDestinationKindValues.XXXXX for bundle minification.
 */
export var MessagingDestinationKindValues = {
    QUEUE: MESSAGINGDESTINATIONKINDVALUES_QUEUE,
    TOPIC: MESSAGINGDESTINATIONKINDVALUES_TOPIC,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessagingOperationValues enum definition
 *
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 */
export var MESSAGINGOPERATIONVALUES_RECEIVE = 'receive';
/**
 * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
 */
export var MESSAGINGOPERATIONVALUES_PROCESS = 'process';
/**
 * The constant map of values for MessagingOperationValues.
 * @deprecated Use the MESSAGINGOPERATIONVALUES_XXXXX constants rather than the MessagingOperationValues.XXXXX for bundle minification.
 */
export var MessagingOperationValues = {
    RECEIVE: MESSAGINGOPERATIONVALUES_RECEIVE,
    PROCESS: MESSAGINGOPERATIONVALUES_PROCESS,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for RpcGrpcStatusCodeValues enum definition
 *
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_OK = 0;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_CANCELLED = 1;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_UNKNOWN = 2;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = 3;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = 4;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_NOT_FOUND = 5;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = 6;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = 7;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = 8;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = 9;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_ABORTED = 10;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = 11;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = 12;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_INTERNAL = 13;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = 14;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_DATA_LOSS = 15;
/**
 * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
 */
export var RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = 16;
/**
 * The constant map of values for RpcGrpcStatusCodeValues.
 * @deprecated Use the RPCGRPCSTATUSCODEVALUES_XXXXX constants rather than the RpcGrpcStatusCodeValues.XXXXX for bundle minification.
 */
export var RpcGrpcStatusCodeValues = {
    OK: RPCGRPCSTATUSCODEVALUES_OK,
    CANCELLED: RPCGRPCSTATUSCODEVALUES_CANCELLED,
    UNKNOWN: RPCGRPCSTATUSCODEVALUES_UNKNOWN,
    INVALID_ARGUMENT: RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT,
    DEADLINE_EXCEEDED: RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED,
    NOT_FOUND: RPCGRPCSTATUSCODEVALUES_NOT_FOUND,
    ALREADY_EXISTS: RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS,
    PERMISSION_DENIED: RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED,
    RESOURCE_EXHAUSTED: RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED,
    FAILED_PRECONDITION: RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION,
    ABORTED: RPCGRPCSTATUSCODEVALUES_ABORTED,
    OUT_OF_RANGE: RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE,
    UNIMPLEMENTED: RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED,
    INTERNAL: RPCGRPCSTATUSCODEVALUES_INTERNAL,
    UNAVAILABLE: RPCGRPCSTATUSCODEVALUES_UNAVAILABLE,
    DATA_LOSS: RPCGRPCSTATUSCODEVALUES_DATA_LOSS,
    UNAUTHENTICATED: RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED,
};
/* ----------------------------------------------------------------------------------------------------------
 * Constant values for MessageTypeValues enum definition
 *
 * Whether this is a received or sent message.
 * ---------------------------------------------------------------------------------------------------------- */
/**
 * Whether this is a received or sent message.
 */
export var MESSAGETYPEVALUES_SENT = 'SENT';
/**
 * Whether this is a received or sent message.
 */
export var MESSAGETYPEVALUES_RECEIVED = 'RECEIVED';
/**
 * The constant map of values for MessageTypeValues.
 * @deprecated Use the MESSAGETYPEVALUES_XXXXX constants rather than the MessageTypeValues.XXXXX for bundle minification.
 */
export var MessageTypeValues = {
    SENT: MESSAGETYPEVALUES_SENT,
    RECEIVED: MESSAGETYPEVALUES_RECEIVED,
};
//# sourceMappingURL=SemanticAttributes.js.map