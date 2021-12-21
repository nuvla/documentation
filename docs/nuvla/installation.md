---
layout: page
title: Installation
nav_order: 12
parent: Nuvla
has_children: true
permalink: /nuvla/installation
---

The following diagram shows the main blocks of the Nuvla Architecture. 

![Nuvla Architecture](/assets/img/architecture.png)

In terms of infrastructure, Nuvla is deployed on a CaaS, since it is composed of micro-services packaged as containers.

Further, Nuvla deploys user containers on a CaaS as well.  It can either use the same CaaS as the one it is deployed on, or more often it is configured to point to one or many other CaaSs.  This makes Nuvla very flexible and is what makes it a powerful edge-to-cloud solution.

Furthermore, if the CaaS on which Nuvla deploys containers includes optional services, such as an S3 service (e.g. on public clouds, or MinIO or Ceph on private infrastructures), it offers a nice data management solution, delivering data directly in containers.

