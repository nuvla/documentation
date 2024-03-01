---
layout: page
title: Manage Infrastructures
parent: User Guide
grand_parent: Nuvla
nav_order: 7
---

# Managed Infrastructures

Nuvla is not limited to the edge. Cloud services, such as Infrastructure as a Service and Docker Registries, can also be used by Nuvla to deploy containerised applications.

For example, if you already have a Kubernetes or Docker Swarm cluster, you can simply [register it with Nuvla](#add-caas-or-other-infrastructure-services), such that you can deploy containerised applications into it.

If you do not have a CaaS yet, simply follow [these instructions](#container-as-a-service-infrastructures).

{% include dave/nuvla-add-caas-existing.md %}

{% include dave/caas-deployment.md %}
