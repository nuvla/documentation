---
layout: default-edit
title: CaaS Infrastructures
parent: Quick Demo Nuvla Deployment
grand_parent: Dave - Administrator
nav_order: 2
---

# CaaS Infrastructures

Container as a Service (CaaS) are used to both host the Nuvla micro-services and host the user deployed containerised applications.  For this, we currently use Docker Swarm as our default CaaS.

If you already have a Docker Swarm cluster, you can simply use it to host the Nuvla micro-services and/or [register it to host user container applications](#add-caas-or-other-infrastructure-services).

If you do not have a CaaS yet, simply follow [these instructions](#container-as-a-service-infrastructures).

{% include dave/nuvla-add-caas-existing.md %}

{% include dave/caas-deployment.md %}
