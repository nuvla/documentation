---
layout: page
title: API
parent: User Guide
grand_parent: Nuvla
nav_order: 12
permalink: /nuvla/api
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
| `aggregate` | On top of the requested resources, it will also return on-the-fly aggregations based on the specified function. Available functions: `avg`, `max`, `min`, `sum`, `cardinality`, `terms`, `stats`, `extendedstats`, `percentiles`, `count`, `missing`  | `?aggregation=avg:people/age` | 
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

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET DELETE' endpoint='/api/session/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

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
