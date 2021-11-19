---
layout: nuvlabox
title: Requirements
nav_order: 1
parent: NuvlaBox Engine v1
grand_parent: NuvlaBox v1
old_version: true
---

# Requirements

To ensure a smooth and fully functional installation of the NuvlaBox Engine (**NBE**), please make sure you comply with the following system requirements.


## OS Requirements


Ideally, you should be running one of the following:
  - Ubuntu
  - CentOS
  - Debian (and Debian variants like Raspbian and Raspberry Pi OS)
  
Other Linux distributions should also work, but will require testing.

Functionalities like the automatic discovery and categorization of peripherals are **not** ensured for macOS and Windows.


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
| 3636  | Used by the `system-manager` to publish the internal NB dashboard |
| 5000 	| Used by the `compute-api` as the relay endpoint for Docker |
| 5001 | Used by the `management-api` for the NB remote management REST API |

