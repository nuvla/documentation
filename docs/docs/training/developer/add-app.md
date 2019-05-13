---
layout: default
title: Adding Applications
parent: Developer Training
grand_parent: Training
nav_order: 7
---

Adding Applications
===================

## Demonstration: Add new module to Nuvla (C)

   - Show how an existing image can be referenced from Nuvla by
     supplying its location and some simple metadata. Probably the
     best example is a database (e.g. MongoDB) or a content management
     platform (e.g. Django).

   - Show how to provide the important metadata: ports, URL patterns,
     etc. through the UI so that the image is well integrated with the
     UI and can be used easily.

   - Show how the module definition can be done as well through the
     Python API.

   - Also use this as an opportunity to bring up why developers will
     probably want to make customized versions of images: specific
     configuration changes, persistence of data, integration with the
     Nuvla data management.

   - The same integration workflow applies to any image, customized or
     not.

## Hands on: Add new module to Nuvla (C)

   1. Choose a standard image from Docker Hub to add to Nuvla. Discuss
      the limitations in using a standard image. Suggestions could
      include nginx (duplicating the existing definition), Django (or
      other content management platform), or Galaxy (relevant for IFB,
      but quite large).

   1. Determine what metadata needs to be specified based on the
      description of the image on Docker Hub and if it is possible to
      provide data. 

   1. Add the image as a new module to Nuvla.

   1. Deploy the module (possibly with data) and ensure that the
      container's service is available (and properly configured).
