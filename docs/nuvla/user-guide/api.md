---
layout: page
title: API
parent: User Guide
grand_parent: Nuvla
nav_order: 12
redirect_from:
 - /nuvla/api
---

- [REST API](#rest-api)
  * [Understanding the Nuvla REST API output format](#understanding-the-nuvla-rest-api-output-format)
  * [API Syntax](#api-syntax)
  * [Resources](#resources)
    + [cloud-entry-point](#cloud-entry-point)
      + [Get the cloud entry point](#get-the-cloud-entry-point)
    + [credential](#credential)
      + [API key credential](#generate-an-api-key-credential)
      + [Docker Swarm token credential](#docker-swarm-token-credential)
      + [Infrastructure Service S3 credential](#infrastructure-service-s3-credential)
      + [Infrastructure Service Docker Swarm HTTP API credential](#infrastructure-service-docker-swarm-http-api-credential)
      + [Infrastructure Service Kubernetes HTTP API credential](#infrastructure-service-kubernetes-http-api-credential)
    + [deployment](#deployment)
      + [Start/Stop an application](#startstop-an-application)
    + [data-record](#data-record)
      + [Create minimal data record](#create-minimal-data-record)
      + [Create with basic metadata](#create-with-basic-metadata)
      + [Create namespaced data record](#create-namespaced-data-record)
      + [Search data records by POLYGON](#search-data-records-by-polygon)
    + [data-record-key-prefix](#data-record-key-prefix)
      + [Create data record key prefix](#create-data-record-key-prefix)
    + [data-record-key](#data-record-key)
      + [Create data record key](#create-data-record-key)
    + [data-object](#data-object)
      + [Creating](#creating)
        + [Create data object](#create-data-object)
        + [Request pre-signed upload URL](#request-pre-signed-upload-url)
        + [Upload data object to S3](#upload-data-object-to-s3)
        + [Mark object as READY](#mark-object-as-ready)
      + [Downloading](#downloading)
        + [Request pre-signed download URL](#request-pre-signed-download-url)
        + [Download data object from S3](#download-data-object-from-s3)
      + [Deleting](#deleting)
        + [Delete data object](#delete-data-object)
    + [data-set](#data-set)
      + [Create data set](#create-data-set)
    + [evidence-record](#evidence-record)
      + [Create an evidence record](#create-an-evidence-record)
    + [infrastructure-service](#infrastructure-service)
      + [Create Docker Swarm infrastructure service](#create-docker-swarm-infrastructure-service)
      + [Create Kubernetes infrastructure service](#create-kubernetes-infrastructure-service)
      + [Create S3 infrastructure service](#create-s3-infrastructure-service)
      + [Create generic infrastructure service](#create-generic-infrastructure-service)
    + [infrastructure-service-group](#infrastructure-service-group)
      + [Create an infrastructure-service-group](#create-an-infrastructure-service-group)
    + [session](#session)
      + [Login with username and password](#login-with-username-and-password)
      + [Login with API keys](#login-with-api-keys)
      + [Switch group](#switch-group)
    + [user](#user)
      + [Create a user with an email and a password](#create-a-user-with-an-email-and-a-password)
    + [voucher](#voucher)
      + [Create a new voucher](#create-a-new-voucher)
- [Python API](#python-api)


# REST API

Nuvla provides a uniform and extensible HTTP-based RESTful API, for the management of Nuvla resources. A Nuvla resource can be anything you can perform an action on, through Nuvla, like your own user profile, a Nuvla application, credentials, etc.

Users have at their disposal all the usual CRUD (Create, Read, Update, Delete) operations, plus Searching and Querying.


| Action        | HTTP Method | Target              |
| --- | --- | --- |
| Search        | GET or PUT  | resource collection |
| Add (create)  | POST        | resource collection |
| Read          | GET         | resource            |
| Edit (update) | PUT         | resource            |
| Delete        | DELETE      | resource            |

Finally, due to its versatility, Nuvla's API also provide custom operations for certain resources. These will be covered individually in the subsections below.

Here are a few examples on how to construct the different HTTP requests:

 - **GET** all the resources of a specific type:
    
    `GET /api/<resource-name>`
    
 - **GET** a specific resource:
 
    `GET /api/<resource-name>/<resource-uuid>`
    
 - **CREATE** a new resource:
 
    ```
POST       /api/<resource-name>
  HEADERS  Content-type:application/json
  DATA     <JSON resource>
    ```
    
 - **EDIT** an existing resource:
 
    ```
PUT        /api/<resource-name>/<resource-uuid>
  HEADERS  Content-type:application/json
  DATA     <JSON with the attribute name and value to be changed>
    ```

 - **DELETE** a resource:
 
    `DELETE /api/<resource-name>/<resource-uuid>`
         
 

## Understanding the Nuvla REST API output format

All the Nuvla API calls will return a JSON output, and you'll notice that all of these outputs contain a set of common attributes:

 - _**id**_: unique resource identifier, defined by the API server
 - _**acl**_: fine-grained access-control list, used for managing authorization process for each resource and its collections of resources. If not defined by the user, the API server will default it based on the requesting user credentials.
 - _**created**_: timestamp of creation, defined by the API server
 - _**updated**_: timestamp of the last update, defined by the API server
 - _**resource-type**_: type of resource, defined by the API server
 - _**operations**_: set of available operations for that resource, defined by the API server
 - _**name**_: optional user-friendly name for a specific resource, defined by the user or defaulted to `None` if undefined
 - _**description**_: optional verbose description for a specific resource, defined by the user or defaulted to `None` if undefined      
      

## API Syntax

The Nuvla REST API endpoints are constructed with the following pattern:

`/api/<resource-name>/<resource-uuid>/<action>/`

where

 - `<resource-name>` is the Kebab Case name of the resource collection you're accessing,
 - `<resource-uuid>` is the unique identifier for the specific resource you're managing,
 - `<action>` is a custom additional operation that might be allowed for that resource.

On top of that, Nuvla's REST API also offers searching and querying through a parameter-based set of keywords:

`/api/<resource-name>?param=value&param=value...`

where

|  Parameter  |  Description |  Examples |
| --- | --- | --- |
| `filter` | Used to return only the set of resources that have an `attribute` matching a certain `value` | `?filter=name="my-resource"` <br><br> `?filter=people/gender!="male" and people/age>=21` <br><br> `?filter=application-name^="my-app-"` |
| `orderby` | To order the returned resources by the specified attribute | `?orderby=created:desc` <br><br> `?orderby=people/surname:asc` |
| `aggregation` | On top of the requested resources, it will also return on-the-fly aggregations based on the specified function. Available functions: `avg`, `max`, `min`, `sum`, `cardinality`, `terms`, `stats`, `extendedstats`, `percentiles`, `value_count`, `missing`  | `?aggregation=avg:people/age` | 
| `last` and `first` | Returns a range of resources by setting the first and last (1-based) query parameters | `?first=10&last=20` |
| `select` | Selects only certain attributes to be returned by the server. Avoiding sending information that will not be useful reduces the load on the network and the server | `?select=people/id` |


## Resources

Resources are managed individually, which means that the data schemas and available operations might defer from one to the other. These options are all explained and exemplified in the following sections.


### cloud-entry-point

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='GET' endpoint='/api/cloud-entry-point' maincolor='none' prefix='allowed:' lettercolor='black' %}

The primary directory of resources is the Cloud Entry Point (CEP), which contains a list of named resource collections and their URLs (in the href field) relative to the baseURI value. The CEP also contains some other metadata.

The endpoint is accessible for all registered and anonymous Nuvla users.

---

_Examples_

##### Get the cloud entry point

{% include request_snippet.md file='api/cep.sh' actions='GET' endpoint='/api/cloud-entry-point' %}

{% include code_snippet.md file='api/cep.sh' language='shell' %}

{% include response_snippet.md file='api/cep-response.md' %}


### credential

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/credential/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `credential` resource is used to save all the credentials necessary to
manage your Nuvla resources. From API keys, to Container Orchestration Engine
credentials, TLS certificates, etc. Most of the credentials are expected to be
provided by the user, some are generated by Nuvla (e.g. API key).

---
_Examples_

##### Generate an API key credential

{% include request_snippet.md file='api/credential-apikey.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-apikey.sh' language='shell' %}

{% include response_snippet.md file='api/credential-apikey-response.md' %}

<!--
##### Amazon EC2 credential

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-amazonec2.sh' language='shell' %}

{% include response_snippet.md file='api/credential-amazonec2-response.md' %}


##### Azure credential

{% include request_snippet.md file='api/credential-azure.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-azure.sh' language='shell' %}

{% include response_snippet.md file='api/credential-azure-response.md' %}


##### Exoscale credential

{% include request_snippet.md file='api/credential-exoscale.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-exoscale.sh' language='shell' %}

{% include response_snippet.md file='api/credential-exoscale-response.md' %}

##### Google Compute Engine credential

{% include request_snippet.md file='api/credential-gcloud.sh' actions='POST' endpoint='/api/cloud-entry-point' %}

{% include code_snippet.md file='api/credential-gcloud.sh' language='shell' %}

{% include response_snippet.md file='api/credential-gcloud-response.md' %}
-->

##### Docker Swarm token credential

{% include request_snippet.md file='api/credential-swarmtoken.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-swarmtoken.sh' language='shell' %}

{% include response_snippet.md file='api/credential-swarmtoken-response.md' %}


##### Infrastructure Service S3 credential

{% include request_snippet.md file='api/credential-s3.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-s3.sh' language='shell' %}

{% include response_snippet.md file='api/credential-s3-response.md' %}


##### Infrastructure Service Docker Swarm HTTP API credential

{% include request_snippet.md file='api/credential-swarm.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-swarm.sh' language='shell' %}

{% include response_snippet.md file='api/credential-swarm-response.md' %}


##### Infrastructure Service Kubernetes HTTP API credential

{% include request_snippet.md file='api/credential-kubernetes.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-kubernetes.sh' language='shell' %}

{% include response_snippet.md file='api/credential-kubernetes-response.md' %}


### data-record

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST GET PUT DELETE' endpoint='/api/data-record/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `data-record` resource lets user to provide user-specified metadata for
describing any types of data located on any storage. This allows rich,
domain-specific metadata to be attached to any of the user data and
consequently, precise searching for the relevant data. In essence, the
collection of the data records constitutes a metadata catalogue. The
immediate usage of the data records is with `data-object`.

`infrastructure-service` is the only required attribute.

* _**infrastructure-service**_: reference to [infrastructure-service](#infrastructure-service) resource

The optional attributes are

* _**bucket**_: S3 bucket name
* _**object**_: object path
* _**bytes**_: number of bytes in the data
* _**md5sum**_: MD5 checksum of the data
* _**content-type**_: format (mimetype) of the data
* _**geometry**_: Point or area(s) associated with data. Defined as map
  with `type` and `coordinates` attributes. The value of `type` is one
  of: `Polygon`, `MultiPolygon`, or `Point` as defined for GeoJSON in
  [https://datatracker.ietf.org/doc/html/rfc7946#section-3.1](https://datatracker.ietf.org/doc/html/rfc7946#section-3.1)
  The `coordinates` is a list of closed polygons
  as `[[[longitude, latitude[, altitude]], ...], ...]` when `type` is `Polygon`
  or `MultiPolygon`, and `[longitude, latitude[, altitude]]` when `type`
  is `Point`.
* _**location**_: **Deprecated**, instead use _**geometry**_
  with `{ "type": "Point",
  "coordinates": [longitude, latitude[, altitude]]}`.
  Location `[longitude, latitude[, altitude]]` associated with the data.
* _**mount**_: options to mount data on container

Apart from the above-listed pre-defined required and optional attributes, users
can define their own namespaced attributes. Although the schema is open, all the
key prefixes must be defined as
`data-record-key-prefix` resources. Having prefixed attributes avoids collisions
between domains. For details
see [Create namespaced data record](#create-namespaced-data-record) sub-section
under the _Examples_ below
and [`data-record-key-prefix`](#data-record-key-prefix)
section. In turn, the [`data-record-key`](#data-record-key) resource is there to
provide human-readable description (documentation) of the key prefixes to help
to enforce the correct semantics on the data provided in the attributes.

---
_Examples_


##### Create minimal data record

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST' endpoint='/api/data-record' %}

{% include code_snippet.md file='api/data-record-minimal.sh' language='shell' %}

{% include response_snippet.md file='api/data-record-minimal-response.md' %}

##### Create with basic metadata

{% include request_snippet.md file='api/data-record-basic.sh' actions='POST' endpoint='/api/data-record' %}

{% include code_snippet.md file='api/data-record-basic.sh' language='shell' %}

{% include response_snippet.md file='api/data-record-basic-response.md' %}

The example above registers an S3
object `/satellite-images/antarctica-kemp-land.png`
stored on `infrastructure-service/9d5ab25e-7351-48a5-a149-8021c71bcadd`.
Providing `content-type` allows for dynamic selection of applications that can be
used to open this object. The `geometry/Polygon` and `geometry/coordinates` allow 
geographically based filtering to discover the object. 

#### Create namespaced data record

Prerequisite: in the example below `traffic` prefix key of
type `data-record-key-prefix` must exist.
See [`data-record-key-prefix`](#data-record-key-prefix) section for details on
how to create unique key prefixes.

{% include request_snippet.md file='api/data-record-basic.sh' actions='POST' endpoint='/api/data-record' %}

{% include code_snippet.md file='api/data-record-namespaced.sh' language='shell' %}

{% include response_snippet.md file='api/data-record-namespaced-response.md' %}

This example showcases the openness of the data record schema giving users an
ability to define custom attributes of any type for their data records.

**NOTE:** once a value of a certain type for an attribute was provided, it will
not be possible to change the type of the value. E.g.: after the integer value
was used `{"life:meaning": 42}` it will not be possible to provide any other
type (like string, boolean etc.). The workaround is to create a differently named
attribute and use the value of the new required type.
E.g.: `{"life:meaning_monty_python": "Well, it's nothing very special."}`

##### Search data records by POLYGON

When data records contain `geometry` attribute, it's possible to search the
records
using [Well-Known Text (WKT)](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)
geometry query.

For example, to find all the data records (defined as Polygon, MultiPolygon or
Point in `geometry` attribute) which are either inside or are touching a certain
geographical area the following `geometry intersects 'POLYGON ((...))'` query
can be used

`geometry intersects 'POLYGON ((-0.4672 51.7731, 0.4489 51.8135, 0.3508 51.3666, -0.4593 51.3325, -0.4672 51.7731))'`

{% include request_snippet.md file='api/data-record-basic.sh' actions='PUT' endpoint='/api/data-record' %}

{% include code_snippet.md file='api/data-record-geo-search.sh' language='shell' %}

{% include response_snippet.md file='api/data-record-geo-search-response.md' %}

**NOTE:** The POLYGON in the query must be closed (i.e., its last point must be
equal to the first one). The POLYGON must contain minimum three points. 

Coordinates for geometry points can be 2D (x, y) or 3D (x, y, z), which
translates into the geographical points `[longitude, latitude[, altitude]]`.

The `longitude` must be in the range -180:180, and `latitude` -90:90.

The following query operations are defined:

- _intersects_: return data records whose geometry attribute (point or polygon)
  intersects the query geometry.
- _disjoint_: return data records whose geometry attribute (point or polygon)
  nothing in common with the query geometry.
- _within_: return data records whose geometry attribute (point or polygon) is
  within the query geometry.
- _contains_: return data records whose geometry attribute (point or polygon)
  contains the query geometry.

### data-record-key-prefix

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST GET PUT DELETE' endpoint='/api/data-record-key-prefix/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

Required attributes

* _**prefix**_: unique namespace prefix for collections of data record keys
* _**uri**_: globally-unique URI associated with prefix

**WARNING:** Only the Nuvla administrator can define the prefixes. Please make a
request to _support [ at ] sixsq.com_.

See [`data-record-key`](#data-record-key) resource that allows to define and
describe the corresponding attributes that are expected to be provided under the
user-defined namespace (key prefix).

---
_Examples_

##### Create data record key prefix

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST' endpoint='/api/data-record-key-prefix' %}

{% include code_snippet.md file='api/data-record-key-prefix.sh' language='shell' %}

{% include response_snippet.md file='api/data-record-key-prefix-response.md' %}


### data-record-key

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST GET PUT DELETE' endpoint='/api/data-record-key/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

Required attributes

* _**name**_: short, human-readable name for resource
* _**description**_: human-readable description of resource
* _**prefix**_: namespace prefix for data record attribute
* _**key**_: a unique name of attribute within prefix namespace
* _**subtype**_: subtype of resource (keyword consisting of lowercased words separated by dashes)

**NOTE:** It is strongly recommended providing a `data-record-key` resource for
each domain-specific (namespaced) attribute of the `data-record`.
The `data-record-key` resources provide semantic information about the attributes
to help humans provide the right information.

---
_Example_

##### Create data record key

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST' endpoint='/api/data-record-key' %}

{% include code_snippet.md file='api/data-record-key.sh' language='shell' %}

{% include response_snippet.md file='api/data-record-key-response.md' %}


### data-object

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST GET PUT DELETE' endpoint='/api/data-object/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

This resource is a proxy for data stored in a bucket/object within S3 from a
given provider. This resource manages the lifecycle of an S3 object, allowing
easy upload and download of the data.

Prerequisites: existing [credential of type S3](#infrastructure-service-s3-credential).

To upload/register/download/delete an S3 object with the help of Nuvla API see
the workflow steps in the _Examples_ below.

---
_Examples_

#### Creating

The full workflow consists of the following steps:

1. Create data-object resource by providing bucket, object, and S3 credential.
2. Request pre-signed upload URL via “upload” action.
3. Use pre-signed upload URL to upload object contents to S3.
4. Mark object as “ready” (and read-only) via the “ready” action.

##### Create data object

`data-object` is a templated resource with two possible subtypes (`generic`
or `public`). The required attributes under the `template` key are

* _**bucket**_: name of the S3 bucket
* _**object**_: name of the S3 object
* _**credential**_: [credential of type S3](#infrastructure-service-s3-credential) that provides access to the S3 object
* _**subtype**_: subtype of the `data-object` (`generic` or `public`)

Optional attributes under `template` key:

* _**name**_: object name
* _**description**_: object extended description
* _**tags**_: list of tags associated with the object
* _**md5sum**_: MD5 checksum of the data

This request creates and returns the ID of the `data-object` resource. 
The returned data object ID must be used in all the successive operations.

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST' endpoint='/api/data-object' %}

{% include code_snippet.md file='api/data-object-create.sh' language='shell' %}

{% include response_snippet.md file='api/data-object-create-response.md' %}

##### Request pre-signed upload URL

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST' endpoint='/api/data-object/uuid/upload' %}

{% include code_snippet.md file='api/data-object-presigned-upload-url.sh' language='shell' %}

{% include response_snippet.md file='api/data-object-presigned-upload-url-response.md' %}

`https://sos-ch-gva-2.exo.io` in the `url` of the above example response corresponds to
the URL of the S3 `infrastructure-service` behind the provided S3 `credential`.

##### Upload data object to S3

Provided the user file is named `ABC-123.config` and contains text data, the
uploading of the file using the S3 one-time pre-signed upload URL will look as follows.
Note: this is the direct upload of the file to the S3 using the one-time
pre-signed URL obtained in the previous step.

{% include code_snippet.md file='api/data-object-upload.sh' language='shell' %}

{% include response_snippet.md file='api/data-object-upload-response.md' %}

##### Mark object as READY

After the successful uploading of the file to S3, the
corresponding `data-object` must be marked as `READY`. After that the object is
ready to be used.

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST' endpoint='/api/data-object/uuid/ready' %}

{% include code_snippet.md file='api/data-object-ready.sh' language='shell' %}

{% include response_snippet.md file='api/data-object-ready-response.md' %}

#### Downloading

Downloading of object is a two-step workflow.

1. Request pre-signed download URL via the “download” action.
2. Use pre-signed download URL to download object contents from S3.

##### Request pre-signed download URL

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST' endpoint='/api/data-object/uuid/download' %}

{% include code_snippet.md file='api/data-object-presigned-download-url.sh' language='shell' %}

{% include response_snippet.md file='api/data-object-presigned-download-url-response.md' %}

`https://sos-ch-gva-2.exo.io` in the `url` of the above example response
corresponds to the URL of the S3 `infrastructure-service` behind the provided
S3 `credential`.

##### Download data object from S3

Provided desired local file name is `ABC-123.config`, downloading of the
file using the S3 one-time pre-signed download URL will look as follows.

{% include code_snippet.md file='api/data-object-download.sh' language='shell' %}

{% include response_snippet.md file='api/data-object-download-response.md' %}

Note: this is the direct download of the file from the S3 using the one-time
pre-signed URL obtained in the previous step.

#### Deleting

##### Delete data object

{% include request_snippet.md file='api/data-record-minimal.sh' actions='DELETE' endpoint='/api/data-object/uuid' %}

{% include code_snippet.md file='api/data-object-delete.sh' language='shell' %}

{% include response_snippet.md file='api/data-object-delete-response.md' %}

As the result of the call:

1. Server verifies access and deletes the object from S3.
2. Server also deletes the bucket if it is empty.

### data-set

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST GET PUT DELETE' endpoint='/api/data-set/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

This resource defines dynamic collections of `data-object` and/or `data-record`
resources via filters. 

The resource doesn't have required attributes. The optional attributes are:

* _**data-object-filter**_: filter for data-object resources associated with this data set
* _**data-record-filter**_: filter for data-record resources associated with this data set
* _**module-filter**_: filter for applications associated with this data set

---
_Examples_

##### Create data set

{% include request_snippet.md file='api/data-record-minimal.sh' actions='POST' endpoint='/api/data-set' %}

{% include code_snippet.md file='api/data-set-create.sh' language='shell' %}

{% include response_snippet.md file='api/data-set-create-response.md' %}


### deployment

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/deployment/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `deployment` resource allows you to deploy an instance of a `module`.

---
_Examples_

##### Start/Stop an application
 
{% include request_snippet.md file='api/deployment.sh' actions='POST PUT GET' endpoint='/api/deployment' %}

{% include code_snippet.md file='api/deployment.sh' language='shell' %}

{% include response_snippet.md file='api/deployment-response.md' %}




### evidence-record

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/evidence-record/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `evidence-record` resource allows you to create and manage audit evidence records that can afterwards help you keep track of your infrastructures' compliance to certain standards and certification schemas.

---
_Examples_

##### Create an evidence record
 
{% include request_snippet.md file='api/evidence-record.sh' actions='POST' endpoint='/api/evidencerecord' %}

{% include code_snippet.md file='api/evidencerecord.sh' language='shell' %}

{% include response_snippet.md file='api/evidencerecord-response.md' %}

 


### infrastructure-service

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/infrastructure-service/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `infrastructure-service` resource represents any manageable service with a working endpoint. This resource is templated, which means, like `session` and `credential`, you can also create infrastructure-services of different types.

---
_Examples_


##### Create Docker Swarm infrastructure service
 
{% include request_snippet.md file='api/infrastructure-service.sh' actions='POST' endpoint='/api/infrastructure-service-swarm' %}

{% include code_snippet.md file='api/infrastructure-service-swarm.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-swarm-response.md' %}


##### Create Kubernetes infrastructure service
 
{% include request_snippet.md file='api/infrastructure-service-k8s.sh' actions='POST' endpoint='/api/infrastructure-service' %}

{% include code_snippet.md file='api/infrastructure-service-k8s.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-k8s-response.md' %}


##### Create S3 infrastructure service
 
{% include request_snippet.md file='api/infrastructure-service-s3.sh' actions='POST' endpoint='/api/infrastructure-service' %}

{% include code_snippet.md file='api/infrastructure-service-s3.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-s3-response.md' %}


##### Create generic infrastructure service
 
{% include request_snippet.md file='api/infrastructure-service.sh' actions='POST' endpoint='/api/infrastructure-service' %}

{% include code_snippet.md file='api/infrastructure-service.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-response.md' %}


### infrastructure-service-group

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET DELETE' endpoint='/api/infrastructure-service-group/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `infrastructure-service-group` resource is a logical container for your infrastructure-service and respective credential and data resources.


---
_Examples_


##### Create an infrastructure-service-group

{% include request_snippet.md file='api/infrastructure-service-group.sh' actions='POST' endpoint='/api/infrastructure-service-group' %}

{% include code_snippet.md file='api/infrastructure-service-group.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-group-response.md' %}




### session

{% include request_snippet.md actions='POST GET DELETE' endpoint='/api/session/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `session` resource allows you to use your credentials for authenticating with Nuvla.

**NOTE:** for later usage, we store the authenticated session in a file called _cookies_

---
_Examples_


##### Login with username and password 

{% include request_snippet.md actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login-username.sh' language='shell' %}

{% include response_snippet.md file='api/login-username-response.md' %}


##### Login with API keys
 
{% include request_snippet.md actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login-apikey.sh' language='shell' %}

{% include response_snippet.md file='api/login-apikey-response.md' %}


##### Switch group

Groups in Nuvla is the way of simplifying management of
the [Access Control](https://docs.nuvla.io/nuvla/advanced-usage/access-control)
to the resources.

When users authenticate with Nuvla, their session contains a list of associated
principals; this list is sometimes referred to as the user’s “claims”. There is
always an "active claim" that is used to validate user's access rights to the
resources and operations on them.

The active claim can be a group in the form `group/<group name>`.

To act on a resource on behalf of a group user is part of, user needs to
explicitly set the group as the "active claim" using the following call 
(provided current session ID is `session/1c490310-402f-4968-9d66-b9d3838d2286`
and the group name is `acme`).

{% include request_snippet.md actions='POST' endpoint='/api/session/uuid/switch-group' %}

{% include code_snippet.md file='api/session-switch-group.sh' language='shell' %}

{% include response_snippet.md file='api/session-switch-group-response.md' %}

**NOTE:** `-b cookies` contains the current session token and `-c cookies` is
the resulting updated session token containing `group/acme` as the active claim.


### user

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/user/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `user` resource allows you to create a new user account on Nuvla.

---
_Examples_


##### Create a user with an email and a password 
 
{% include request_snippet.md file='api/user_email_password.sh' actions='POST' endpoint='/api/user' %}

{% include code_snippet.md file='api/user_email_password.sh' language='shell' %}

{% include response_snippet.md file='api/user-email-password-response.md' %}

Password must contain at least one uppercase character, one lowercase character,
one digit, one special character, and at least 8 characters in total.

The creation of a user with `email-password` template does not require a session.

The user will receive an email with a callback that he have to follow to activate his account. 
After following the link, the state attribute of user document will transit from NEW to ACTIVE.


### voucher

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/voucher/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `voucher` resource let's you create and manage digital vouchers, associated with any digital service provider, for better tracking and accounting of voucher consumption.


---
_Examples_


##### Create a new voucher

{% include request_snippet.md file='api/voucher.sh' actions='POST' endpoint='/api/voucher' %}

{% include code_snippet.md file='api/voucher.sh' language='shell' %}

{% include response_snippet.md file='api/voucher-response.md' %}


# Python API

(coming soon...)
