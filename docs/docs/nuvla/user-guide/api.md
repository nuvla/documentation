---
layout: page
title: API
parent: User Guide
grand_parent: Nuvla
nav_order: 11
permalink: /nuvla/api
---

- [REST API](#rest-api)
  * [Understanding the Nuvla REST API output format](#understanding-the-nuvla-rest-api-output-format)
  * [API Syntax](#api-syntax)
  * [Resources](#resources)
    + [cloud-entry-point](#cloud-entry-point)
      + [Get the cloud entry point](#get-the-cloud-entry-point)
    + [credential](#credential)
      + [Generate an Amazon EC2 credential](#generate-an-amazon-ec2-credential)
      + [Generate an API key credential](#generate-an-api-key-credential)
      + [Generate an Azure credential](#generate-an-azure-credential)
      + [Generate a Docker Swarm HTTP API credential](#generate-a-docker-swarm-http-api-credential)
      + [Generate a Docker Swarm token credential](#generate-a-docker-swarm-token-credential)
      + [Generate an Exoscale credential](#generate-an-exoscale-credential)
      + [Generate a Google Compute Engine credential](#generate-a-google-compute-engine-credential)
      + [Generate a Minio credential](#generate-a-minio-credential)
    + [deployment](#deployment)
      + [Start/Stop an application](#start-stop-an-application)
    + [session](#session)
      + [Login with username and password](#login-with-username-and-password)
      + [Login with API keys](#login-with-api-keys)
    + [user](#user)
    
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
| `aggregate` | On top of the requested resources, it will also return on-the-fly aggregations based on the specified function. Available functions: `avg`, `max`, `min`, `sum`, `cardinality`, `terms`, `stats`, `extendedstats`, `percentiles`, `count`, `missing`  | `?aggregation=avg:people/age` | 
| `last` and `first` | Returns a range of resources by setting the first and last (1-based) query parameters | `?first=10&last=20` |
| `select` | Selects only certain attributes to be returned by the server. Avoiding sending information that will not be useful reduces the load on the network and the server | `?select=people/id` |


## Resources

Resources are managed individually, which means that the data schemas and available operations might defer from one to the other. These options are all explained and exemplified in the following sections.

### cloud-entry-point


The primary directory of resources is the Cloud Entry Point (CEP), which contains a list of named resource collections and their URLs (in the href field) relative to the baseURI value. The CEP also contains some other metadata.

The endpoint is accessible for all registered and anonymous Nuvla users.

---

_Examples_

##### Get the cloud entry point

{% include request_snippet.md file='api/cep.sh' actions='GET' endpoint='/api/cloud-entry-point' %}

{% include code_snippet.md file='api/cep.sh' language='shell' %}

{% include response_snippet.md file='api/cep-response.md' %}


### credential

The `credential` resource is used to save all the credentials necessary to manage your Nuvla resources. From API keys, to Cloud Provider credentials, Docker Swarm tokens, TLS certificates, etc.

---
_Examples_

##### Generate an Amazon EC2 credential

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-amazonec2.sh' language='shell' %}

{% include response_snippet.md file='api/credential-amazonec2-response.md' %}



##### Generate an API key credential

{% include request_snippet.md file='api/credential-apikey.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-apikey.sh' language='shell' %}

{% include response_snippet.md file='api/credential-apikey-response.md' %}


##### Generate an Azure credential

{% include request_snippet.md file='api/credential-azure.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-azure.sh' language='shell' %}

{% include response_snippet.md file='api/credential-azure-response.md' %}


##### Generate a Docker Swarm HTTP API credential

{% include request_snippet.md file='api/credential-swarm.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-swarm.sh' language='shell' %}

{% include response_snippet.md file='api/credential-swarm-response.md' %}


##### Generate a Docker Swarm token credential

{% include request_snippet.md file='api/credential-swarmtoken.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-swarmtoken.sh' language='shell' %}

{% include response_snippet.md file='api/credential-swarmtoken-response.md' %}


##### Generate an Exoscale credential

{% include request_snippet.md file='api/credential-exoscale.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-exoscale.sh' language='shell' %}

{% include response_snippet.md file='api/credential-exoscale-response.md' %}

##### Generate a Google Compute Engine credential

{% include request_snippet.md file='api/credential-gcloud.sh' actions='POST' endpoint='/api/cloud-entry-point' %}

{% include code_snippet.md file='api/credential-gcloud.sh' language='shell' %}

{% include response_snippet.md file='api/credential-gcloud-response.md' %}



##### Generate a Minio credential

{% include request_snippet.md file='api/credential-minio.sh' actions='POST' endpoint='/api/credential' %}

{% include code_snippet.md file='api/credential-minio.sh' language='shell' %}

{% include response_snippet.md file='api/credential-minio-response.md' %}



### deployment

The `deployment` resource allows you to deploy an instance of a `module`.

---
_Examples_

##### Start/Stop an application
 
{% include request_snippet.md file='api/deployment.sh' actions='POST PUT GET' endpoint='/api/deployment' %}

{% include code_snippet.md file='api/deployment.sh' language='shell' %}

{% include response_snippet.md file='api/deployment-response.md' %}



### session


The `session` resource allows you to use your credentials for authenticating with Nuvla.

**NOTE:** for later usage, we store the authenticated session in a file called _cookies_

---
_Examples_


##### Login with username and password 

{% include request_snippet.md file='api/session.sh' actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login.sh' language='shell' %}

{% include response_snippet.md file='api/login-response.md' %}


##### Login with API keys
 
{% include request_snippet.md file='api/session.sh' actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login_apikey.sh' language='shell' %}

{% include response_snippet.md file='api/login-response.md' %}

### user



# Python API

(coming soon...)
