---
layout: nuvlaedge
title: Architecture
nav_order: 2
parent: NuvlaEdge
redirect_from:
 - /nuvlaedge/latest/nuvlaedge-engine/architecture
 - /nuvlaedge/nuvlaedge-engine/architecture
---

Architecture
========

![nuvlabox-os-arch-detail](/assets/img/nuvlaedge-engine-arch-v1.png)

## Base components

| NuvlaEdge Component 	| Description 	|
|-:	|-	|
| AGENT 	| The `agent` is the beating heart of the NuvlaEdge. It is responsible for the NuvlaEdge activation, commissioning and monitoring procedures. All outgoing communication towards Nuvla pass through the `agent`, via its internal REST API.	|
| SYSTEM MANAGER 	| The `system-manager` is the NuvlaEdge's watchdog. It runs independently of all the other components. During the NuvlaEdge bootstrap, it double checks that the device has the minimum requirements to support a NuvlaEdge, and if so, it starts scanning the whole NuvlaEdge on a periodic basis, searching for faulty NuvlaEdge containers and trying to fix them automatically. It also provides an internal dashboard on the host's `127.0.0.1:3636` endpoint, with the overall status of the NuvlaEdge. |
| COMPUTE CREDENTIALS MANAGER | Also referred to as the "COMPUTE API", this component makes sure all synchronous communications between Nuvla and the NuvlaEdge, for application management, are secured. | 
| VPN CLIENT 	| The standalone `vpn-client` component is solely responsible for picking up an OpenVPN configuration set by the `agent` and establishing a secure VPN tunnel with SixSq's VPN server (or any other desired VPN server), ensuring that the NuvlaEdge is always remotely accessible. |
| DATA GATEWAY 	| The NuvlaEdge `data-gateway` is an abstraction layer between user applications and IoT sensors/actuators. This component consists of an MQTT Broker (i.e. Mosquitto) which sits behind an internal shared network (the `nuvlaedge-shared-network`). Depending on whether the NuvlaEdge is operating in cluster mode or not, this component can either take the form of a standalone container behind a bridge network, or a load balanced service behind an overlay network. This configuration switch is handled automatically by the System Manager. Additionaly, and **optionally**, the NuvlaEdge can also be deployed with the Data Gateway's FIWARE Processor, which is a sidekick micro-service that validates the schema of MQTT data, against FIWARE's data models, and upon successful validation, forwards data to a configurable outgoing endpoint. |
| JOB ENGINE LITE | The Job Engine Lite is a lightweight version of the job processing engine behind Nuvla. Its introduction to the NuvlaEdge architecture allows users to remotely schedule operations to be executed inside the NuvlaEdge, even if the edge device happens to be unreachable at the time of the operation was issued. |


## Additional components
The NuvlaEdge has the concept of Peripheral Managers. These are **optional** micro-services which perform automatic detection and categorization of peripherals that *are* or *can be* connected to the edge device. Such peripheral information can then be used to activate sensor data acquisition throught the Data Gateway.

| NuvlaEdge Peripheral 	| Description 	|
|-:	|-	|
| SECURITY  | The `security` component is an autonomous self-assessment entity which scans the edge device on a configurable periodic basis, looking for vulnerabilities. Each potential vulnerability is compared with public reference databases (like the CVE) for a full categorization of the problem. These databases are also kept up to date via an internal synchronization procedure which is also scheduled with a configurable frequency. The most critical vulnerabilities are sent to Nuvla (via the `agent`). |
| USB       | The `peripheral-usb` component scans the UBS ports in the device. It allows the deployed apps to quickly find USB devices |
| BLUETOOTH | The `peripheral-bluetooth` component scans the surrounding for open bluetooth devices and reports them to Nuvla so apps can access which devices are available |
| MODBUS | Serial port discovery tool for PLC `modbus` connections |
| NETWORK | Scans for devices connected to the same network (In the default gateway) of the device. The `network` peripheral is responsible for the discovery, categorization and management of all NuvlaEdge network peripherals. |
| GPU | Allows applications to access the GPUs available in the device. |


## Network Port Binding

|     Port |    Usage    | Protocol | Description                                                                                                                        |
|---------:|:-----------:|:--------:|------------------------------------------------------------------------------------------------------------------------------------|
|  **443** |  Outbound   |   TCP    | Used by NuvlaEdge to communicate with Nuvla via HTTPS (https://nuvla.io)                                                           | 
| **1194** |  Outbound   |   UDP    | UDP connection to vpn.nuvlaedge.com in case VPN is decided to be used for communication with the edge device managed by NuvlaEdge. |
| **3636** |  Internal   |    -     | This port is used by the `system-manager` to publish the internal NB dashboard                                                     |
| **5000** | VPN/Inbound |    -     | Used by the `compute-api` as the relay endpoint for Docker. Ingress must be allowed                                                |
| **5080** |  Internal   |    -     | This port is used by the `agent` to provide the internal REST API for other NB components to speak with, internally                |
