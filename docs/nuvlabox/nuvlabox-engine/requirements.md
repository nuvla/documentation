---
layout: page
title: Requirements
nav_order: 1
parent: NuvlaBox Engine
grand_parent: NuvlaBox
---

# Requirements

To ensure a smooth and fully functional installation of the NuvlaBox Engine, please make sure you comply with the following system requirements.


## OS Requirements


Ideally, you should be running one of the following:
  - Ubuntu
  - CentOS
  - Debian
  - Raspbian
  
Other Linux distributions should also work, but will require testing.

Functionalities like the automatic discovery and categorization of peripherals are **not** ensured for macOS and Windows.

You also need **an internet connection**.

## Software Requirements

Before you can install the NuvlaBox Engine, please make sure you have:

 - [Docker Engine (version 18 or higher)](https://docs.docker.com/install/#supported-platforms)
 - [Docker Compose (version 1.23.2 or higher)](https://docs.docker.com/compose/install/)
 
## Enable Docker  mode

The NuvlaBox requires the Docker environment to run in Swarm mode.  While the NuvlaBox engine runs directly as Docker micro-services, Nuvla will normally run user applications in Docker Swarm. This makes possible clustering, facilitates placement policies and all that good stuff from Swarm.

To enable Docker Swarm run the following:

```
docker swarm init
``` 

> **Note:** this assumes you only have one network interface.
