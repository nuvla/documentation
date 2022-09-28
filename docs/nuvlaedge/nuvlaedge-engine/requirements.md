---
layout: nuvlabox
title: Requirements
nav_order: 2
parent: NuvlaEdge Engine
grand_parent: NuvlaEdge
redirect_from:
 - /nuvlabox/latest/nuvlabox-engine/requirements
---

# Requirements

To ensure a smooth and fully functional installation of the NuvlaEdge Engine (**NEE**), please make sure you comply with the following system requirements.


## OS Requirements

The NuvlaEdge Engine is compliant with any OS that officially and fully supports Docker. We recommend one of the following:
- Ubuntu
- CentOS
- Debian (and Debian variants like Raspbian and Raspberry Pi OS)

Other Docker-compliant Linux distributions should also work, but the NuvlaEdge functionality will be subject to the level of Docker support the OS provides. 

Functionalities like the automatic discovery and categorization of peripherals are **not** guaranteed for macOS and Windows.


## Hardware Requirements

In order to install the NEE and ensure its smooth execution over time, your device should have at least:

- 1GB of RAM
- 2GB of free disk space

If you are looking at an application with constrained hardware, especially in terms of memory size, please get in touch. Some components in the [NuvlaEdge architecture](/nuvlaedge/nuvlaedge-engine/architecture/) are optional and can be removed to save memory.  Of course it's a tradeoff.

An remember that you should have enough memory to host the apps that will be running on the edge device. 

## Software Requirements

Before you can install the NEE, please make sure you have:

- [Docker Engine (version 18 or higher)](https://docs.docker.com/install/#supported-platforms), running in [Swarm mode](https://docs.docker.com/engine/swarm/swarm-tutorial/)
- [Docker Compose (version 1.27.4 or higher)](https://docs.docker.com/compose/install/)


## Network Requirements

You need **an internet connection**.

The NEE requires the following ports to be opened:

_Mandatory_:
- 443: **Outbound**: Default HTTPS port. Used by NEE to communicate with Nuvla via HTTPS (https://nuvla.io). 

_Optional_:
- 1194: **Outbound**: UDP connection to vpn.nuvlabox.com in case VPN is decided to be used for communication with the edge device managed by NEE.

Extended port usage [here](/nuvlaedge/nuvlaedge-engine/architecture/#network-port-binding). 
