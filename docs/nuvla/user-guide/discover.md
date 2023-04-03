---
layout: page
title: Discover Nuvla
nav_order: 3
parent: User Guide
grand_parent: Nuvla
---

# Discover Nuvla

On the welcome page and in the menu bar on the left side of the page, you can see the main sections of the Nuvla web user interface.  These pages present the main features of the application:

![Nuvla Welcome](/assets/img/home.png)

 - **Dashboard**: overview of your edge devices and deployments (aka running apps).
 - **Apps**: registered, containerised applications. You can also register your own apps here. 
 - **Deployments**: running apps (aka instance of an app running at the edge or in the cloud).
 - **Edges**: your cockpit to manage your edge devices (aka simgle board computers, servers and virtual machines running the NuvlaEdge software).
 - **Credentials**: view and manage all your credentials in one place.
 - **Notifications**: let Nuvla notify you of significant events. Here you can set this up.
 - **Data**: view data produced by your apps, defined data sets and start apps to process selected data.
 - **Clouds**: cloud services registered with your account, including Kubernetes, Docker Swarm clusters and S3 object storage services.
 - **Api**: "raw" view of all Nuvla API. A great discovery tool. 

Nuvla has a rich and advanced security model, including who has access to what and with which rights. This is captured using what we call an Access Control List (ACL) mechanism.  As a result, users can share, or not, the different Nuvla resources with other users and groups.

Users will typically use the "apps" for simple deployments and the "data" section to select data to analyse and applications able to process the selected data. The "dashboard" is great to manage deployed applications. The
"api" section is typically only be used by developers. App vendors and developers will spend time registering and editing "apps" for users to deploy.
