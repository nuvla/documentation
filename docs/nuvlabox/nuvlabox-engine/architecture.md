---
layout: page
title: Architecture
nav_order: 1
parent: NuvlaBox Engine
grand_parent: NuvlaBox
---

NuvlaBox Engine Architecture
========

The NuvlaBox Engine (**NBE**) runs as a set of loosely coupled containers. Under the hood, containers form the NBE components described in the following image:

![nuvlabox-os-arch-detail](/assets/img/nuvlabox-os-arch-detail.png)

| NBE Component 	| Description 	|
|-:	|-	|
| AGENT 	| The `agent` is the beating heart of the NBE. It is responsible for the NB activation, commissioning and monitoring procedures. All outgoing communication towards Nuvla shall pass by the `agent`, via its internal REST API	|
| SYSTEM MANAGER 	| The `system-manager` is the NBE's watchdog. It runs independently of all the other components. During the NBE bootstrap, it double checks that the device has the minimum requirements to support a NB, and if so, it starts scanning the whole NB on a periodic basis, searching for faulty NBE containers and trying to fix them automatically. It also provides an internal dashboard on the host's `127.0.0.1:3636` endpoint, with the overall status of the NB |
| API 	| There are 2 externally accessible APIs managed by the NBE: the `compute-api` provides a TLS-encrypted relay point to Docker (for app & container management) on the host's `<ip>:5000` endpoint; and the `management-api` provides a TLS-encrypted and NB-specific management API for remote control of the NB, on the host's `<ip>:5001` endpoint |
| NETWORK MANAGER 	| The `network-manager` is responsible for ensuring a correct configuration of the host's network stack, in such a way that it supports the NBE's connectivity needs (such as the establishment of a VPN connection) |
| VPN CLIENT 	| The standalone `vpn-client` component is solely responsible for picking up an OpenVPN configuration set by the `network-manager` and establishing a secure VPN tunnel with SixSq's VPN server (or any other desired VPN server), ensuring that the NB is always remotely accessible |
| SECURITY 	| The `security` component is an autonomous self-assessment agent which scans the edge device on a configurable periodic basis, looking for vulnerabilities. Each potential vulnerability is compared with public reference databases (like the CVE) for a full categorization of the problem. These databases are also kept up to date due to internal synchronization procedure which are also scheduled with a configurable frequency. The most critical vulnerabilities are sent to Nuvla (via the `agent`) |
| DATA GATEWAY 	| The NBE `data-gateway` is a combination of micro-services which provides an abstraction layer between user applications and IoT sensors/actuators. Is is equipped with communication layer mechanisms (like an MQTT broker and a Reverse Proxy) which can, on demand, serve raw sensor data to any existing user applications, thus preventing users from having to embed complex sensor-specific data acquisition interfaces into their applications. Additionaly, and **optionally**, the NBE can also be deployed with the Data Gateway's FIWARE Processor, which is a sidekick micro-service that validates the schema of MQTT data, against FIWARE's data models, and upon successful validation, forwards data to a configurable outgoing endpoint. Learn how to make use of the Data Gateway in [this video](https://youtu.be/x7RKQWVq1Mc) |
| * PERIPHERAL MANAGER 	| The NBE has the concept of Peripheral Managers. These are **optional** micro-services which perform automatic detection and categorization of peripherals that *are* or *can be* connected to the edge device. Such peripheral information can then be used to activate sensor data acquisition throught the Data Gateway. Examples of existing peripheral managers are: `peripheral-manager-usb`, `peripheral-manager-bluetooth`, `peripheral-manager-modbus`, `peripheral-manager-gpu`, `peripheral-manager-network`, and others |