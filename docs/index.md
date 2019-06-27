---
layout: default-edit
title: Overview
nav_order: 1
description: "Nuvla: secured edge-to-cloud (and back) management platform that enables near-data AI for a connected world"
permalink: /
---

# Nuvla

Nuvla is a secured edge-to-cloud (and back) management platform that enables near-data AI for a connected world.

The container native platform supports all forms of infrastructure: public cloud, private cloud and bare metal infrastructures, as well as edge (with our NuvlaBox).

This documentation is intended for the users of a Nuvla platform.

## Overview

Edge computing is becoming a standard companion to cloud computing when it comes to implementing successful IoT projects. The naïve approach of sending all data back to the cloud for processing is no longer viable or future-proof. Implementing an edge strategy means processing data close to its source, thereby reducing latency and cost. It is not, however, a simple strategy to implement. Any edge-to-cloud architecture involves the coordination of a highly distributed infrastructure, multiple applications, and several skill sets, either in a single team or across organisations. It also raises a whole raft of questions relating to governance, security and data management.

![Overview](/docs/assets/overview.png)

Figure 1: Overview
{: style="color:gray; text-align: center;"}

The open and secure Nuvla® service by SixSq is a secure edge-to-cloud management platform which facilitates the implementation of operational edge-to-cloud solutions. The solution leverages near data processing, edge and cloud computing, as well as smart data management. It optimises the different skills required to realise real-life solutions, ensuring the project is put on a path towards success.

The value proposition of Nuvla is explained through the eyes of 5 team members: Alice, Bob, Clara, Dave and Emma. Of course every organisation is unique, but these roles exist in one form or another in most organisations. Nuvla simply provides a collaboration framework to facilitate work between the area of concern represented by these personae. In reality, one person will often be able to perform several of these roles in an organisation, and Nuvla will work the same.

Illustrated in Figure 1, Nuvla is a multi-cloud, hybrid-cloud and edge management platform able to interface with numerous cloud providers and cloud solutions. It automates the full management lifecycle, including the deployment, testing, certification and optimisation of applications within cloud and edge infrastructures. Nuvla can be interfaced with a wide range of infrastructures, which can be grouped as follows:

 - **Edge device**: Edge devices are typically connected to one or several IoT sensors and/or actuators. The intelligent edge device NuvlaBox® is a SixSq product. The NuvlaBox software is certified on hardware platforms from different vendors, ranging from ARM based single board processors such as the Raspberry Pi, all the way to rack mounted and high storage density x86 based machines.
 - **Public clouds**: The public cloud industry is rich with many providers, including for example AWS, Microsoft Azure, Google Compute, Exoscale and Digital Ocean.  Nuvla provides the ability to interface with all these major public clouds, and many more. Nuvla automates the deployment of container-as–a-service services (e.g. Kubernetes, Docker Swarm), to host the user containerised applications. SixSq does not itself operate any cloud infrastructure. Instead our service is cloud neutral and multi cloud.
 - **Private infrastructures**: Many organisations prefer to run their own infrastructure. In the same way as it operates with public clouds, Nuvla securely integrates with any private infrastructure running for example: VMware, Open Stack, Azure Stack. Nuvla can also connect directly to Container-as-a-Service (CaaS), such as Kubernetes and Docker Swarm.

Independently of the infrastructures Nuvla is connected to, organisations using Nuvla benefit from the following features:

 - **Governance**: control all aspects of application deployment, access and data management, including a clear audit trail and fine grain authentication and authorisation, as well as event notifications.
 - **Application control**: from any private or public container repository, securely configure, deploy, monitor and update applications, including advanced features such as benchmarking and application placement policy.
 - **Data management**: data produced at the edge or in the cloud is managed, including data tagging, replication and transfer, as well as data search and access. This feature also works in semi-connected mode, such that in the case of a loss of connection, data transfer or replication resumes once the connection is re-established;
 - **Security control**: enables end-to-end security controls from the edge to the cloud, and back, using VPN, identity and access management, as well as integrity enforcement.
 - **Edge control**: manage edge devices, including secure registration, update, as well as monitoring and notifications. This works for both the edge operating system and its management functionality, as well as the user applications. Users are automatically notified when an update is available, so that they can instruct Nuvla to safely and automatically deploy the updates.

