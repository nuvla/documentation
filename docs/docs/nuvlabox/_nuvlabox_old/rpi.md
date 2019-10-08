---
layout: default-edit
title: NuvlaBox Raspbian OS
parent: NuvlaBox - Edge Solution
grand_parent: Dave - Administrator
nav_order: 2
---

NuvlaBox Raspbian OS
========

For NuvlaBox running on the Raspberry Pi, we recommend using the Raspbian operating system. The following instructions are based on this assumption.

## Raspberry Pi

The Raspberry Pi is a nice ARM based single board computer. It's a good place to start if you are looking at small footprint edge devices.

To facilitate the creation of an SC card ready to host the NuvlaBox Engine, we have created NuvlaBox Raspbian OS images.

Simply download and inflate the [NuvlaBox Raspbian OS pre-release](https://github.com/nuvlabox/nuvlabox/releases/tag/v0.1.0) on your laptop/desktop.  Then use an imaging tool, such as [Etcher](https://www.balena.io/etcher/), to flash your SD Card.  

> **Note:** this is a pre-release and should not be used in production.

Once the card is imaged (or flashed), you can now [instal the NuvlaBox Engine](/docs/dave/nuvlabox/nuvlabox-engine)

<!--
### Raspbian Installation

[Install Raspbian](https://www.raspberrypi.org/downloads/raspbian/) on your SD card. The following documentation assumes you are using the **Raspbian Buster Lite** distribution is sufficient. Raspbian is the default operating system for Raspberry Pi and is based on Debian.

> **Note:** *Etcher* is a nice tool that facilitates Raspbian installation on an SD card. 

> **Note:** Don't eject your SD card just yet.

### Install and Configure Dependencies for NuvlaBox

Before we can deploy the NuvlaBox Engine, we need to install Docker and configure the Raspbian environment.

**Enable SSH**

To complete the installation of the NuvlaBox Engine software, you will need to enable ssh in the RPi.  There are a [few ways of doing this](https://www.raspberrypi.org/documentation/remote-access/ssh/). Since we are baking a new SD card, the easiest way is to create an empty file at the root of the SD card called *ssh*:

```
touch ssh
```

With this file present, when the RPi boots, it will enable ssh.  However, it will have the default username (*pi*) and password (*raspbian*), so you will want to change this before you put this device on the network, or setup a public ssh key and disable password authentication.

**Install OpenVPN**

The security infrastructure of Nuvla and the NuvlaBox leverages [OpenVPN](https://openvpn.net). To install the client, run the follong command:

```
sudo apt install -y openvpn
```

**Install Docker**

The NuvlaBox Engine is a set of micro-services packaged as Docker containers.  We will need to install Docker and Docker Compose. To [install Docker on the RPi](https://docs.docker.com/install/linux/docker-ce/debian/#install-using-the-convenience-script), run the following commands:

Put the newly backed SD card into your RPi and connect it to the network (providing DHCP) or directly to your laptop (make sure you don't have a firewall blocking the RPi). You can then power up the RPi.

SSH into it and run the following commands:

```
sudo apt update -y
curl -sL get.docker.com | sed 's/9)/10)/' | sh
sudo apt install -y python-pip
sudo apt install libffi-dev
sudo pip install docker-compose
sudo usermod -aG docker $USER
```

Then, **don't forget the logout and log back in**.  This will update your group configuration.

**Install Git**

Git is used to retrieve the Docker Compose file describing the NuvlaBox Engine micro-services.

```
sudo apt install -y git
```

**Configure OpenVPN Client**

In order to establish a secured connection into the NuvlaBox, Nuvla uses OpenVPN. In order for this communication to work, the NuvlaBox must initiate the connection. This in turn requires a configuration, specific to each NuvlaBox.

While this step will soon be fully automated, currently you will require to get an OpenVPN configuration. For Nuvla.io, please contact the [support service](mailto:support@sixsq.com) to receive the configuration file. Then save the file as:

```
mkdir -p /etc/openvpn/client
sudo nano /etc/openvpn/client/nuvlabox.conf
```

And paste the configuration file.

Finally enable the OpenVPN client service:

```
sudo systemctl enable openvpn-client@nuvlabox
sudo systemctl start openvpn-client@nuvlabox
``` 


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
