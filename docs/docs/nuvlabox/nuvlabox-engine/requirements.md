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
  - (any other Linux distribution...)

Functionalities like the automatic discovery and categorization of peripherals are **not** ensured for macOS and Windows.


## Software Requirements

Before you can install the NuvlaBox Engine, please make sure you have:

 - [Docker Engine (version 18 or higher)](https://docs.docker.com/install/#supported-platforms)
 - [Docker Compose (version 1.23.2 or higher)](https://docs.docker.com/compose/install/)
 
### Install and Configure OpenVPN

Nuvla needs to reach NuvlaBoxes over the network. To avoid having to configure a public IP for the NuvlaBox, Nuvla can use [OpenVPN](https://openvpn.net). This allows the NuvlaBox to securely initiate a connection to Nuvla, from which Nuvla will be able to connect back to the NuvlaBox.  While this is optional, in most Nuvla deployments, and certainly on [Nuvla.io](https://nuvla.io), we recommend using OpenVPN.

However, while this feature is being integrated in Nuvla (expected in Q3 2019), for the moment, if you require a VPN connection for testing NuvlaBox, **please contact** [SixSq Support](mailto:support@sixsq.com).

OpenVPN is an optional mechanism Nuvla can leverage to reach NuvlaBoxes for 

To install the VPN client, follow the instructions at [https://www.ovpn.com/en/guides](https://www.ovpn.com/en/guides), or simply:

```
sudo apt install -y openvpn
```

Once you have received your OpenVPN client configuration file, save the file as: `/etc/openvpn/client/nuvlabox.conf`.

Finally enable the OpenVPN client service:

```
sudo systemctl enable openvpn-client@nuvlabox
sudo systemctl start openvpn-client@nuvlabox
``` 
This will ensure that OpenVPN will restart when you restart or boot the NuvlaBox. 

Once the service is up and running, you'll find a new network interface and IP in you device. You can consult it via `ifconfif` or `ip addr`.

### Enable Swarm mode

The NuvlaBox can only be installed if your device is running in Swarm mode. 

To enable this, **please take the VPN IP** from the previous step and run:

```
docker swarm init --advertise-addr ______CHANGE_ME_VPNIP______
``` 


