---
layout: default
title: Managing Data
parent: Developer Training
grand_parent: Training
nav_order: 8
---

Managing Data
=============

## Demonstration: Managing data (E)

   - Demonstrate the standard workflow for uploading a data "object"
     and providing metadata for it.  Do this through the API and if
     available, also show through the UI.  Note that the system uses
     "pre-signed" URLs for access via S3 (HTTPS), so access control is
     done via Nuvla authentication and ACLs.

   - Show how to create a data set, explaining the various filters
     that can be provided (and what they do!). Point out that these
     are dynamic and depend entirely on the "objects" that are
     currently registered with the system.

   - For POSIX access, show what information is needed from the owner
     of the Swarm cluster and how this is added to the data record
     resources. 

   - Demonstrate how data and metadata can be removed from the system.

## Hands on: Managing data (E)

   - Repeat the data upload, ready, download, delete workflow for data
     objects, verifying that the ACLs work as expected for different
     users (e.g. share an object with your neighbor).  Provide a
     number of data objects to play with. 

   - Create some data objects and then create associated data record
     resources to provide additional metadata.  Provide metadata for
     all the data object resources that you've created and vary this
     metadata to make queries more interesting.

   - Try various queries over the data object and data record
     resources to understand the filter syntax and learn how to select
     the resources that you want.

