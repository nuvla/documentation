---
layout: nuvlabox
title: Requirements
nav_order: 2
parent: v2
grand_parent: NuvlaBox Engine
redirect_from:
 - /nuvlabox/latest/nuvlabox-engine/requirements
---

# Requirements

To ensure a smooth and fully functional installation of the NuvlaBox Engine (**NBE**), please make sure you comply with the following system requirements.


## OS Requirements

The NuvlaBox Engine is compliant with any OS that officially and fully supports Docker. We recommend one of the following:
- Ubuntu
- CentOS
- Debian (and Debian variants like Raspbian and Raspberry Pi OS)

Other Docker-compliant Linux distributions should also work, but the NuvlaBox functionality will be subject to the level of Docker support the OS provides. 

Functionalities like the automatic discovery and categorization of peripherals are **not** guaranteed for macOS and Windows.


## Hardware Requirements

In order to install the NBE and ensure its smooth execution over time, your device should have at least:

- 1GB of RAM
- 2GB of free disk space


## Software Requirements

Before you can install the NBE, please make sure you have:

- [Docker Engine (version 18 or higher)](https://docs.docker.com/install/#supported-platforms), running in [Swarm mode](https://docs.docker.com/engine/swarm/swarm-tutorial/)
- [Docker Compose (version 1.27.4 or higher)](https://docs.docker.com/compose/install/)


## Network Requirements

You need **an internet connection**.

The NBE requires the following ports to be opened:

| Port 	| Reason 	|
|-:	|-	|
| 3636  | This port is used by the `system-manager` to publish the internal NB dashboard |
| 5000 	| Used by the `compute-api` as the relay endpoint for Docker. Ingress must be allowed |
| 5080  | This port is used by the `agent` to provide the internal REST API for other NB components to speak with, internally |
| 1194  | (optional) UDP connections must be allowed on this port in case you'd like to remotely establish a tunnel to the edge device, via the VPN Client | 
