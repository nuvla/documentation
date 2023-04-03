---
layout: page
title: Overview
nav_order: 1
description: Nuvla.io B2B edge management platform as a service, that is&colon; future-proof, application-centric, cloud-neutral and hardware agnostic
permalink: /
---

# Nuvla: Leader in edge computing B2B platform as a service

Edge computing is becoming a standard companion to cloud computing when it comes to implementing successful IoT projects. The naive approach of sending all data to the cloud for processing is no longer viable or future-proof. Implementing an edge strategy means processing data close to its source, thereby reducing latency and cost, while improving data sovereignty and autonomy. It is not, however, a simple strategy to implement. Any edge-to-cloud architecture involves the coordination of a highly distributed infrastructure, multiple applications, and several skill sets, either in a single team or across organisations. It also raises a whole raft of questions relating to governance, security and data management.  We created [Nuvla](/nuvla) to address these concerns with a simple, yet secure and powerful B2B Platform as a Service (PaaS).

<center><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/MlaRI3lrhrM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></center>

The [Nuvla](/nuvla) B2B edge management platform as a service is application-centric, hardware-agnostic, cloud-neutral and future-proof.  The platform is able to interface with numerous hardware types, cloud providers and cloud solutions. It automates the full management lifecycle, including the deployment, testing, certification and optimisation of applications within edge and cloud infrastructures:

 - **Edge device**: Edge devices are single board computers, servers and/or virtual machines, running the [NuvlaEdge](/nuvlaedge) software. Edge devices are typically connected to a local network, with access to the wide area network, and often one or several IoT sensors and/or actuators. The NuvlaEdge software is hardware agnostic and certified on hardware platforms from [different vendors](https://sixsq.com/nuvlaedge#hardware), ranging from ARM based single board processors such as industrial grade Raspberry Pi, all the way to rack mounted, and high compute and storage density x86 based servers.
 - **Public clouds**: The public cloud industry is rich with many providers, including for example AWS, Microsoft Azure, Google Cloud and Exoscale.  Nuvla provides the ability to interface with all these major public clouds, and many more. Nuvla automates the deployment of Container-as–a-Service (e.g. Kubernetes, Docker Swarm), to host the user containerised applications. SixSq does not itself operate any cloud infrastructure. Instead our Nuvla service is cloud neutral.
 - **Private infrastructures**: Many organisations prefer to run their own infrastructure. In the same way as it operates with public clouds, Nuvla securely integrates with any private infrastructure running for example: VMware, Open Stack, Azure Stack and OpenShift. Nuvla can also connect directly to Container-as-a-Service (e.g. Kubernetes, Docker Swarm).

Nuvla provides the following main features:

 - **Governance**: control all aspects of application deployment, access and data management, including a clear audit trail and fine grain authentication and authorisation, as well as event notifications.
 - **Application control**: using published apps in the marketplace, or your own registered apps, you can securely configure, deploy, monitor and update these apps, including advanced features such as application placement policy.
 - **Data management**: data produced at the edge or in the cloud is managed, including data tagging, replication and transfer, as well as data search and access. This feature also works in semi-connected mode, such that in the case of a loss of connection, data transfer or replication resumes once the connection is re-established (this functionality requires dedicated SixSq libraries - get in touch for details).
 - **Security control**: enables end-to-end security controls from the edge to the cloud, and back, using VPN, identity and access management, as well as integrity enforcement. Nuvla also includes a pluggable SSO mechanism to integrate your organisation's SSO service (get in touch for details).
 - **Edge control**: manage edge devices, including secure registration, update, as well as monitoring and notifications. Optionally, management of the underlying operating system at the edge is possible.
 - **API**: interface easily with all of Nuvla's functionality via a RESTful API. This enables integration in third party systems, CI/CD and dedicated dashboards.
