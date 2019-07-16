---
layout: default-edit
title: Managing Data
parent: Emma - Data Specialist
nav_order: 2
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

See the full [data management](/docs/reference/data-management.html) description
to understand the data model, the resources, and workflows for data
management.

## Demonstration: Managing data (Emma)

### Data Objects/Records

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

The following script describes the full data object workflow via the
Nuvla Python API.

{% include code_snippet.md file='/code-sample/create-data.py' language=python %}

> **NOTE**: The process of creating an object will also create the S3
> bucket if it doesn't exist. Similarly, the S3 bucket will be removed
> if the last object is removed from it.

> **NOTE**: The visibility of the data objects and records is
> determined by the ACL. Change the ACL to share data with other
> users.

### Data Sets

Once you have more than a few data objects, working with them
individually becomes tedious. Instead you would usually group those
objects (and records) into data sets.

Nuvla has a `data-set` resource exactly for this purpose.  Via the
standard filtering syntax, you can create dynamic definitions of data
sets.

The following script shows how this can be accomplished.

{% include code_snippet.md file='/docs/code-sample/add-data-sets.py' language=python %}

Once the data sets are created, they should be visible in the "data"
section of the Nuvla UI. Check that they are visible and that they
contain the objects that you expect. 

> **NOTE**: The visibility of the data sets is determined by the
> ACL. Change the ACL to share data with other users.

## Hands On Exercises

Repeat the data upload, ready, download, delete workflow for data
objects, verifying that the ACLs work as expected for different users
(e.g. share an object with your neighbor).  Provide a number of data
objects/records to play with.

Try various queries over the data object and data record resources to
understand the filter syntax and learn how to select the resources
that you want.

Create data sets that group the objects and records.  Verify that the
data sets are visible in the UI and that they contain the objects and
records that you expect.
