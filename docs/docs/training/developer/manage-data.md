---
layout: default
title: Managing Data
parent: Developer Training
grand_parent: Training
nav_order: 8
---

Managing Data
=============

The data management facilities in Nuvla revolve around three
resources:

 - `data-object` representing a data object stored in S3,

 - `data-record`, providing additional, domain-specific metadata for
   objects, and

 - `data-set`, dynamic grouping of the other resources based on
   filters.

See the full [data management](/docs/users/data-management.html) description
to understand the data model, the resources, and workflows for data
management.

## Demonstration: Managing data (Emma)

The full lifecycle of a data object consists of the following steps:

 - Create a new `data-object` resource in Nuvla,

 - Use the "upload" action to obtain an upload URL for the data,

 - Upload the data using the URL,

 - Mark the `data-object` as "ready" and read-only via the "ready"
   action,

 - Use the "download" action to obtain a download URL,

 - Download the data using the URL,

 - Delete the `data-object` to remove the Nuvla resource and the
   backing S3 object.

All these actions can be completed with either the Python API or
directly with the REST API, for example, with `curl`.

In parallel, optional `data-record` resources can also be
created. These resources associate enhanced, domain-specific metadata
with the data objects. POSIX access information can be provided via
`data-record` resources on infrastructures that expose data objects
via S3 and via POSIX.

The following text describes the full data object workflow via the
Nuvla Python API.

### Create Object

### Upload Data

### Mark Object as Ready

### Download Data

### Provide Metadata

### Create Dataset

### Remove Resources

## Hands On Exercises

Repeat the data upload, ready, download, delete workflow for data
objects, verifying that the ACLs work as expected for different users
(e.g. share an object with your neighbor).  Provide a number of data
objects to play with.

Create some data objects and then create associated data record
resources to provide additional metadata.  Provide metadata for all
the data object resources that you've created and vary this metadata
to make queries more interesting.

Try various queries over the data object and data record resources to
understand the filter syntax and learn how to select the resources
that you want.

