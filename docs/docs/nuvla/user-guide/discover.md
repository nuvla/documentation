---
layout: default-edit
title: Discover Nuvla
nav_order: 2
parent: User Guide
grand_parent: Nuvla
permalink: /nuvla/discover
---

# Discover Nuvla

On the welcome page and in the menu bar on the left side of the page, you can see the main sections of the Nuvla web user interface.  These pages present the main features of the application:

![Nuvla Welcome](/docs/assets/welcome.png)

 - **dashboard**: deployed applications
 - **apps**: defined, containerised applications
 - **data**: defined data sets and start apps to process selected data
 - **infrastructures**: accessible Docker Swarm clusters and S3 object storage services
 - **credentials**: view and manage all your credentials in one place
 - **edge**: your cockpit to manage your edge devices
 - **api**: "raw" view of all Nuvla api

Nuvla has a rich and advanced security model, including who has access to what and with which rights. This is captured using what we call an Access Control List (ACL) mechanism.  As a result, users can share, or not, the different Nuvla resources with other users and groups.

Alice will typically use the "apps" for simple deployments and the "data" section to select data to analyse and applications able to process the selected data. The "dashboard" is great to manage deployed applications. The
"api" section is typically only be used by experts, such as [Felix](/felix).
