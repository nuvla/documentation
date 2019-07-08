---
layout: default-edit
title: NuvlaBox - Edge Solution
parent: Dave - Administrator
nav_order: 7
---

NuvlaBox
===============

The NuvlaBox software allows Dave to transform most ARM and x86 hardware platform into a smart edge device, managed by a Nuvla service.

SixSq has certified a number of hardware platforms. Using such platforms ensures a smooth deployment.  For x86 based systems, these include machines from HPE, Dell and Logic Supply. For ARM based systems, these include Raspberry Pi.  For a complete list, please refer to [SixSq website](https://sixsq.com/products-and-services/nuvlabox/tech-spec).

**Coming soon!!**

<!--
## Registration

...

Raspbian download: https://www.raspberrypi.org/downloads/raspbian/
Raspbian installation: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
Raspbian enable SSH (Section 3.): https://www.raspberrypi.org/documentation/remote-access/ssh/ (modifié) 

Install Docker on Raspbian: https://docs.docker.com/install/linux/docker-ce/debian/#install-using-the-convenience-script:
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

(exit and re-login to adjust user)

sudo apt install git


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
