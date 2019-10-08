---
layout: page
title: NuvlaBox Engine
parent: NuvlaBox - Edge Solution
grand_parent: Dave - Administrator
nav_order: 1
---

## Prerequisites 

To install the NuvlaBox Engine, you'll need:
 - *Docker (version 18 or higher)*
 - *Docker Compose (version 1.21 or higher)*
 
The NuvlaBox Engine will, during bootstrap, checks those requirements, and you will be automatically prompted in case some of these are not met.

If you need help setting-up the base operating system, we have documented instructions for the following platforms:

 * [Raspberry Pi](/docs/dave/nuvlabox/rpi), building on the Raspbian operating system (based on Debian)
 * [x86 architecture](/docs/dave/nuvlabox/x86), building on Ubuntu

## Install and Configure OpenVPN

Nuvla requires to reach NuvlaBoxes over the network. To avoid having to configure a public IP for the NuvlaBox, Nuvla can use [OpenVPN](https://openvpn.net). This allows the NuvlaBox to securely initiate a connection to Nuvla, from which Nuvla will be able to connect back to the NuvlaBox.  While this is optional, in most Nuvla deployments, and certainly on [Nuvla.io](https://nuvla.io), we recommend using OpenVPN.

However, while this feature is being integrated in Nuvla (expected in Q3 2019), for the moment, if you require a VPN connection for testing NuvlaBox, please contact [SixSq Support](mailto:support@sixsq.com).

OpenVPN is an optional mechanism Nuvla can leverage to reach NuvlaBoxes for 

To install the VPN client, run the following command:

```
sudo apt install -y openvpn
```

Once you have received your OpenVPN client configuration file, save the file as: `/etc/openvpn/client/nuvlabox.conf`, or follow these instructions:

```
sudo nano /etc/openvpn/client/nuvlabox.conf
```

And paste the configuration file.

Finally enable the OpenVPN client service:

```
sudo systemctl enable openvpn-client@nuvlabox
sudo systemctl start openvpn-client@nuvlabox
``` 
This will ensure that OpenVPN will restart when you restart or boot the NuvlaBox. 

## Install NuvlaBox Engine

As mentioned above, the NuvlaBox Engine is composed of a set of micro-services. To start these services, you simply need a Docker compose file. If you are using the [NuvlaBox Raspbian OS](/docs/dave/nuvlabox/rpi), it comes with a `docker-compose.yml` file at the root of the pi account. Otherwise, either clone the GitHub [nuvlabox/deployment](https://github.com/nuvlabox/deployment) repository, or donwload and inflate the [release NuvlaBox Engine deployment](https://github.com/nuvlabox/deployment/releases).

Before you can deploy the NuvlaBox Engine, you need a *NuvlaBox UUID*, which is provided by Nuvla. This ensures that the NuvlaBox you are installing is unique and belongs to you. Unless you have your own Nuvla service, the simplest way to get a NuvlaBox UUID is to use [Nuvla.io](https://nuvla.io), SixSq's managed Nuvla service.  

> **Note:** To deploy your own Nuvla service, follow these [Nuvla on-premise deployment instructions](/docs/dave).

Assuming you are using Nuvla.io, to create a new NuvlaBox entry, following these steps:

 1. login into [Nuvla.io](https://nuvla.io)
 2. on the edge page, create a new `nuvlabox` (*+add* button top right of the page) and save the UUID.
 3. simply `export NUVLABOX_UUID=` UUID you saved, **or** paste that UUID in the `docker-compose.yml` file, under the NUVLABOX_UUID environment variable
    ```
    export NUVLABOX_UUID=_____CHANGE_ME______
    ```
Once this is done, follow these instructions to activate the Docker Swarm mode and bring up the NuvlaBox Engine micro-services: 
    
 1. finally, activate the swarm, by running this command:
    ```
    docker swarm init --advertise-addr ______CHANGE_ME_VPNIP______
    ```
    where the value of the `______CHANGE_ME_VPNIP______` is the IP of the NuvlaBox on your VPN, or any other IP you want Nuvla to use to contact the NuvlaBox.
 2. install the NuvlaBox Engine
    ```bash
    docker-compose up --abort-on-container-exit
    ```

> **Note:** don't forget to put the `docker-compose` command in the background or run it with `-d` instead to run it as demon. 

Once the deployment is complet, in the Nuvla edge page, you should see your new NuvlaBox *online* and *Commissioned*.

![nuvlabox-os-arch-detail](/docs/assets/nuvlabox-commissioned.png)

You're now good to go!

For example, go to the [Nuvla App Store](https://nuvla.io/ui/apps) and try deploying the *nginx* app.

<!--
>> add to docker group

docker swarm init --advertise-addr 192.168.3.3

export HOST='raspberrypi-demo-local'
export HOSTNAME="${HOST}"
export HOST_ADDRESSES='192.168.3.3'

export NUVLA_ENDPOINT=192.168.3.1
export NUVLABOX_UUID=_____CHANGE_ME______

sudo apt install git
git clone https://github.com/nuvlabox/deployment.git
cd deployment

docker stack deploy -c docker-compose.onpremise.yml nuvlabox










>>>>>>

docker swarm init --advertise-addr 192.168.3.3

export HOST='raspberrypi-demo-local'
export HOSTNAME="${HOST}"
export HOST_ADDRESSES='192.168.3.3'

export NUVLA_ENDPOINT=192.168.3.1
export NUVLABOX_UUID=7b717a6a-e26d-4e64-86e2-40adef93cce8
docker stack deploy -c docker-compose.onpremise.yml nuvlabox



docker swarm init --advertise-addr 10.0.128.98

export HOST='raspberrypi-demo-remote'
export HOSTNAME="${HOST}"
export HOST_ADDRESSES='10.0.128.98'

export NUVLA_ENDPOINT=nuvla.io
export NUVLABOX_UUID=fc1190b8-1db1-4bd0-99dd-d0c51ca96bb9

docker stack deploy -c docker-compose.onpremise.yml nuvlabox




docker swarm init --advertise-addr 10.0.128.99

export HOST='nuvlabox-alfred-werner-demo-remote'
export HOSTNAME="${HOST}"
export HOST_ADDRESSES='10.0.128.99'

export NUVLA_ENDPOINT=nuvla.io
export NUVLABOX_UUID=f8a62930-f287-4946-9e22-e4297a7b81cf

docker stack deploy -c docker-compose.onpremise.yml nuvlabox



>>>>


Set static ip:

in /etc/dhcpcd.conf

# LAN (RJ45)
profile static_eth0
static ip_address=192.168.3.3/24
#static routers=192.168.3.1
#static domain_name_servers=192.168.3.1 8.8.8.8 8.8.4.4

interface eth0
fallback static_eth0


# WLAN (WiFi)
profile static_wlan0
static ip_address=192.168.2.3/24
static routers=192.168.2.1
static domain_name_servers=192.168.2.1 8.8.8.8 8.8.4.4

interface wlan0
fallback static_wlan0

-->
