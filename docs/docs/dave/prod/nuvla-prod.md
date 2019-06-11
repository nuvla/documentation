---
layout: default-edit
title: Production - more robust Nuvla Deployment
parent: Dave - Administrator
has_children: true
nav_order: 2
---

For Production - a more robust Nuvla Deployment
================

If you are looking for quick instructions on how to deploy Nuvla or to simply give it a try for evaluation, we suggest you have a look at the [quick guide](/docs/dave/quick/nuvla-deployment-try-it). 

The Nuvla services and their dependent services are all containerised and can be deployed easily into a CaaS (e.g. Docker Swarm cluster).

For production, we recommend to split the stateful and stateless services. It's a little more complex, but will provide a much more resilient service.

> **Warning**: do not use these instructions to run a commercial service based on these instructions. In this case, we strongly recommend you get in touch with the [SixSq team](mailto:support@sixsq.com).
