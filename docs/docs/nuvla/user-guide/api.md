---
layout: page
title: API
parent: User Guide
grand_parent: Nuvla
nav_order: 11
permalink: /nuvla/api
---


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


## cloud-entry-point

The primary directory of resources is the Cloud Entry Point (CEP), which contains a list of named resource collections and their URLs (in the href field) relative to the baseURI value. The CEP also contains some other metadata.

The endpoint is accessible for all registered and anonymous Nuvla users:

{% include code_snippet.md file='api/cep.sh' language=shell %}

# Python API

(coming soon...)
