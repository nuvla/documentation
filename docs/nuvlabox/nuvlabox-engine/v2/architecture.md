---
layout: nuvlabox
title: Architecture
nav_order: 1
parent: v2
grand_parent: NuvlaBox Engine
redirect_from:
 - /nuvlabox/latest/nuvlabox-engine/architecture
---

Architecture
========

![nuvlabox-os-arch-detail](/assets/img/nuvlabox-engine-arch-v2.png)

| NBE Component 	| Description 	|
|-:	|-	|
| AGENT 	| The `agent` is the beating heart of the NBE. It is responsible for the NB activation, commissioning and monitoring procedures. All outgoing communication towards Nuvla shall pass by the `agent`, via its internal REST API	|
| SYSTEM MANAGER 	| The `system-manager` is the NBE's watchdog. It runs independently of all the other components. During the NBE bootstrap, it double checks that the device has the minimum requirements to support a NB, and if so, it starts scanning the whole NB on a periodic basis, searching for faulty NBE containers and trying to fix them automatically. It also provides an internal dashboard on the host's `127.0.0.1:3636` endpoint, with the overall status of the NB |
| COMPUTE CREDENTIALS MANAGER | Also referred to as the "COMPUTE API", this component makes sure all synchronous communications between Nuvla and the NuvlaBox, for application management, are secured | 
| VPN CLIENT 	| The standalone `vpn-client` component is solely responsible for picking up an OpenVPN configuration set by the `agent` and establishing a secure VPN tunnel with SixSq's VPN server (or any other desired VPN server), ensuring that the NB is always remotely accessible |
| SECURITY 	| The `security` component is an autonomous self-assessment entity which scans the edge device on a configurable periodic basis, looking for vulnerabilities. Each potential vulnerability is compared with public reference databases (like the CVE) for a full categorization of the problem. These databases are also kept up to date via an internal synchronization procedure which is also scheduled with a configurable frequency. The most critical vulnerabilities are sent to Nuvla (via the `agent`) |
| DATA GATEWAY 	| The NBE `data-gateway` is an abstraction layer between user applications and IoT sensors/actuators. This component consists of an MQTT Broker (i.e. Mosquitto) which sits behind an internal shared network (the `nuvlabox-shared-network`). Depending on whether the NuvlaBox is operating in cluster mode or not, this component can either take the form of a standalone container behind a bridge network, or a load balanced service behind an overlay network. This configuration switch is handled automatically by the System Manager. Additionaly, and **optionally**, the NBE can also be deployed with the Data Gateway's FIWARE Processor, which is a sidekick micro-service that validates the schema of MQTT data, against FIWARE's data models, and upon successful validation, forwards data to a configurable outgoing endpoint |
| JOB ENGINE LITE | The Job Engine Lite is a lightweight version of the job processing engine behind Nuvla. Its introduction to the NuvlaBox Engine architecture allows users to remotely schedule operations to be executed inside the NuvlaBox, even if the edge device happens to be unreachable at the time of the command |
| PERIPHERAL MANAGER 	| The NBE has the concept of Peripheral Managers. These are **optional** micro-services which perform automatic detection and categorization of peripherals that *are* or *can be* connected to the edge device. Such peripheral information can then be used to activate sensor data acquisition throught the Data Gateway. Examples of existing peripheral managers are: `peripheral-manager-usb`, `peripheral-manager-bluetooth`, `peripheral-manager-modbus`, `peripheral-manager-gpu`, `peripheral-manager-network`, and others |


Deprecated Components
========

The following components have been deprecated with respect to the previous version of the NuvlaBox Engine, v1:

 - **Network Manager**: this component's functionality has been distributed over multiple components, including the System Manager, Agent and VPN Client;
 - **Management API**: the NuvlaBox Engine v2 no longer exposes a dedicated API endpoint for remote management. Instead, with the introduction of the Job Engine Lite, all remote management operations are now done asynchronously, in the form of jobs that are scheduled from Nuvla and then pulled by the Agent for local execution within the NuvlaBox;