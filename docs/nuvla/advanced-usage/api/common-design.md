---
layout: page
title: Common Design
nav_order: 1
parent: API
has_children: true
---

# Common Design


| Action        | HTTP Method | Target              |
| --- | --- | --- |
| Search        | GET or PUT  | resource collection |
| Add (create)  | POST        | resource collection |
| Bulk_delete   | DELETE      | resource collection |
| Bulk_action   | PATCH       | resource collection |
| Read          | GET         | resource            |
| Edit (update) | PUT         | resource            |
| Delete        | DELETE      | resource            |

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

Nuvla's API also provide custom operations for certain resources. These will be covered individually in the subsections below.

Here are a few examples on how to construct the different HTTP requests:

 - **GET** all the resources of a specific type:
    
    `GET /api/<resource-name>`
    
 - **GET** a specific resource:
 
    `GET /api/<resource-name>/<resource-uuid>`
    
 - **CREATE** a new resource:
 
    ```
  POST     /api/<resource-name>
  HEADERS  content-type:application/json
  DATA     <JSON resource>
    ```
    
 - **EDIT** an existing resource:
 
    ```
  PUT      /api/<resource-name>/<resource-uuid>
  HEADERS  content-type:application/json
  DATA     <JSON with the attribute name and value to be changed>
    ```

 - **DELETE** a resource:
 
    `DELETE /api/<resource-name>/<resource-uuid>`

 - **SEARCH** on resources:
 
    `GET /api/<resource-name>?param=value&param=value`

    *or*

    ```
  PUT      /api/<resource-name>
  HEADERS  content-type:application/x-www-form-urlencoded
  DATA     <Form data with parameters (e.g. filter,last)>
    ```

 - **BULK_DELETE** of resources:
 
    `DELETE /api/<resource-name>?param=value&param=value`

   *or*

    ```
  DELETE   /api/<resource-name>
  HEADERS  content-type:application/x-www-form-urlencoded, bulk:true
  DATA     <Form data with parameters (e.g. filter,last)>
    ```


 - **BULK_ACTION** of resources:
 
    `PATCH /api/<resource-name>/<action>?param=value&param=value`

   *or*

    ```
  PATCH    /api/<resource-name>
  HEADERS  content-type:application/x-www-form-urlencoded, bulk:true
  DATA     <Form data with parameters (e.g. filter,last)>
    ```


## Resources

All the Nuvla API calls to retrieve resources will return a JSON output, and you'll notice that all of these outputs contain a set of common attributes:

 - _**id**_: unique resource identifier, defined by the API server
 - _**acl**_: fine-grained access-control list, used for managing authorization process for each resource and its collections of resources. If not defined by the user, the API server will default it based on the requesting user credentials.
 - _**created**_: timestamp of creation, defined by the API server
 - _**created-by**_: user id who created the resource (useful to trace user action when he has switched to a group)
 - _**updated**_: timestamp of the last update, defined by the API server
 - _**updated-by**_: user id who updated the resource (useful to trace user action when he has switched to a group)
 - _**resource-type**_: type of resource, defined by the API server
 - _**parent**_: reference to parent resource
 - _**operations**_: set of available operations for that resource, defined by the API server
 - _**name**_: optional user-friendly name for a specific resource, defined by the user or defaulted to `None` if undefined
 - _**description**_: optional verbose description for a specific resource, defined by the user or defaulted to `None` if undefined      

Resources are managed individually, which means that the data schemas and available operations might defer from one to the other. These options are all explained and exemplified in the following sections.



## Filter syntax

Filter parameter is used to search, to run bulk delete and to run bulk operations on existing resources.

It could be a simple query e.g.

- `name='hello'`

- `acl/delete = 'group/demo'`

- `created<'2021-11-24T19:59:18Z'`

- `version < 2`

- `location intersects 'POINT(13.86 60.84)'`

- `online!=true`

- `description=null`

- `tags='eo'`

- `fulltext == 'Demo*'`

or a complex one with parenthesis and combination of logical [`or`, `and`] expression.

- `(created<'2021-11-24T19:59:18Z' or name^='hello') and location intersects 'POINT(13.86 60.84)'` 

### Supported Values in filter

| Name | Description | Example |
|---|---|
| Text | Single or double quoted text | `"foobar"` `'foobar'` |
| Date | Single or double quoted UTC timestamp or `now` expression | `'2021-11-24T19:59:18Z'` `'now<30m'` `'now>30d'` |
| Numeric | Integer or Float numbers | `3.14159` `3`|
| Boolean |  | `true` `false` |
| Geo-point | Single or double quoted [WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) string | `'POLYGON((-49.2 19.6,65.7 19.6,65.7 67.4,-49.2 67.4,-49.2 19.6))'` |
| Geo-shape | Single or double quoted [WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)  string | `'POLYGON((-49.2 19.6,65.7 19.6,65.7 67.4,-49.2 67.4,-49.2 19.6))'` |
| Null |  | `null` |

Arrays are a special case and searches are executed on their content as if they was a simple value.
E.g. tags field is defined as an array of string. In case we would like to search if tags contains "eo", the filter would be `tags='eo'`.

### Operations

| Name | Symbol | Supported values | Details |
|---|---|---|---|
| Equal | = | Numeric, Date, Text, Boolean, null |  |
| Not Equal | != | Numeric, Date, Text, Boolean, null |  |
| Less than | < | Numeric, Date, Text |  |
| Less than or Equal | <= | Numeric, Date, Text |  |
| Greater than | > | Numeric, Date, Text |  |
| Greater than or Equal | >= | Numeric, Date, Text |  |
| Start with | ^= | Text |  |
| Full-text search | == | Text | Works only on field  `name` ,  `description`  or  `fulltext`  which is a virtual field that regroup more or less the full resource words. |
| Intersects | intersects | Geo-Point, Geo-shape | Return all documents whose geo_shape or geo_point field intersects the query geometry. |
| Disjoint | disjoint | Geo-shape | Return all documents whose geo_shape or geo_point field has nothing in common with the query geometry. |
| Within | within | Geo-shape | Return all documents whose geo_shape or geo_point field is within the query geometry. Line geometries are not supported. |
| Contains | contains | Geo-shape | Return all documents whose geo_shape or geo_point field contains the query geometry. |
