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
  * [Resources](#resources)
    + [cloud-entry-point](#cloud-entry-point)
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

All the Nuvla API calls will return a JSON output, like the one in the example below:


Certains attributes are server-side..*[]: 



## Resources

Resources are managed individually, which means that the data schemas and available operations might defer from one to the other. These options are all explained and exemplified in the following sections.

### cloud-entry-point

The primary directory of resources is the Cloud Entry Point (CEP), which contains a list of named resource collections and their URLs (in the href field) relative to the baseURI value. The CEP also contains some other metadata.

The endpoint is accessible for all registered and anonymous Nuvla users:

{% include code_snippet.md file='api/cep.sh' language=shell %}

# Python API

(coming soon...)
