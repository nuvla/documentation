---
layout: default-edit
title: CaaS Infrastructure
parent: Production Nuvla Deployment
grand_parent: Dave - Administrator
nav_order: 2
---

# CaaS Infrastructures

Container as a Service (CaaS) are used to both host the Nuvla micro-services and host the user deployed containerised applications.  For this, we currently use Docker Swarm as our default CaaS.

If you already have a Docker Swarm cluster, you can simply use it to host the Nuvla micro-services and/or [register it to host user container applications](/docs/dave/quick/caas-infrastructures#add-caas).

If you do not have a CaaS yet, simply follow [these instructions](/docs/dave/prod/caas-infrastructures#caas-deployment).

{% include dave/nuvla-add-caas-existing.md %}

# CaaS Deployment

Container as a Service (CaaS) are used to both host the Nuvla micro-services and host the user deployed containerised applications.  For this, we currently use Docker Swarm as our default CaaS.

If you already have a Docker Swarm cluster, you can simply use it to host the Nuvla micro-services and/or register it to host user container applications.

If you do not have a CaaS yet, simply follow these instructions.

{% include dave/caas-deployment.md %}
