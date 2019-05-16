---
layout: default
title: Introduction
parent: Developer Training
grand_parent: Training
nav_order: 4
---

Introduction
============

Nuvla provides seamless management of container-based applications
across hybrid computing platforms that incorporate public clouds,
private clouds, and numerous edge devices.

Edge devices provide compute and storage resources near where sensor
(or other) data are generated to allow for local processing of those
data. The size of the edge devices ranges from Raspberry Pi machines
to large, rack-mounted servers, depending on the processing
requirements of the data.

SlipStream a previous incarnation of the Nuvla software focused on
deploying applications embedded in virtual machines on cloud
infrastructures. Nuvla instead embraces container-based applications
to take advantage of their fast development lifecycle, lightweight
resource requirements, and the need to support small platforms like
the Raspberry Pi at the edge.

Users of the Nuvla platform will benefit from its ability to:

 - Integrate multiple Docker Swarm clusters that provide the low-level
   compute and storage resources for data analysis.

 - Share access to the Docker Swarm clusters between users based on
   fine-grained access control lists.

 - Deploy and use unmodified containers, so that users can take
   advantage of the numerous, existing containers in the Docker
   ecosystem.

 - Customize container-based applications for better integration with
   the Nuvla browser interface and data management system.

 - Manage data uniformly across cloud/edge infrastructures and to
   access those data via S3 and/or POSIX.

The demonstrations and hands-on exercises within this training course
highlight these benefits.

The following diagram shows the main blocks of the Nuvla Architecture. 

![Nuvla Architecture]({{ site.url }}{{ site.baseurl }}/docs/training/developer/assets/architecture.png)

The Nuvla server consists of the Nuvla core, which exposes a REST API
over HTTP(S), and Elasticsearch and Zookeeper, which maintain the
persistent state of the service. The core interacts with Docker Swarm
infrastructures to manage users' applications.

Developers can access the REST API directly or via one of the
higher-level libraries (Python, Clojure, and ClojureScript). End-users
will primarily access the service via the browser interface.

This training course will demonstrate access to the Nuvla service via
the REST API, Python API, and/or the browser interface.
