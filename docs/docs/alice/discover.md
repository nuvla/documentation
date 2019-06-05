---
layout: default-edit
title: Discover Nuvla
parent: Alice - Domain Specialist
nav_order: 3
---

Discover
=====

## Browser Interface Sections

On the welcome page and in the menu bar on the left side of the page,
you can see the main sections of the Nuvla browser interface.  These
sections provide specialized views of certain resources ("documents")
stored in the Nuvla server:

 - **dashboard**: deployed applications

 - **apps**: defined, containerized applications

 - **data**: defined data sets

 - **infrastructures**: accessible Docker Swarm clusters

 - **api**: "raw" view of all Nuvla api, composed of resources ("documents")

The contents of each page are defined by the Access Control List (ACL)
associated with the underlying resources. Users only see those
resources that the ACL allows them to view.

Alice will typically use the "apps" for simple contaner deployment and the "data" section to select data to analyse and applications able to process the selected data, and the "dashboard" to manage deployed applications. The
"api" section is typically only be used by experts, such as [Felix](/felix).
