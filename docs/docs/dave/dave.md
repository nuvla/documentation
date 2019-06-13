---
layout: default-edit
title: Dave - Administrator
nav_order: 6
has_children: true
permalink: /dave
---

![Dave](/docs/assets/dave.png){:style="float: right; margin: 7px"}

# Dave - Administrators

This section of the documentation is for [Dave: the operator](/users#dave-the-operator).  Here you will find instructions on how to:
* install and configure Nuvla
* add exiting or provision new Container-as-a-Service (CaaS) infrastructures (running in public or private clouds) on which to deploy containers from Nuvla.

The latter one (CaaS) can optionally be used to run Nuvla itself.

The following diagram shows the main blocks of the Nuvla Architecture. 

![Nuvla Architecture](/docs/assets/architecture.png)

In terms of infrastructure, Nuvla is deployed on a CaaS, since it is composed of micro-services packaged as containers.

Further, Nuvla deploys user containers on a CaaS as well.  It can either use the same CaaS as the one it is deployed on, or more often it is configured to point to one or many other CaaS.  This makes Nuvla very flexible and is what makes it a powerful edge-to-cloud solution.

Furthermore, if the CaaS on which Nuvla deploys containers includes optional services, such as an S3 service (e.g. on public clouds or MinIO on private infrastructures), it offers a nice data management solution, delivering data directly in the container.
