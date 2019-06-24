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

## Registration

...

Raspbian download: https://www.raspberrypi.org/downloads/raspbian/
Raspbian installation: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
Raspbian enable SSH (Section 3.): https://www.raspberrypi.org/documentation/remote-access/ssh/ (modifié) 

Install Docker on Raspbian: https://docs.docker.com/install/linux/docker-ce/debian/#install-using-the-convenience-script (modifié) 



>> add to docker group

docker swarm init --advertise-addr 192.168.3.3

export HOST='raspberrypi-demo-local'
export HOSTNAME="${HOST}"
export HOST_ADDRESSES='192.168.3.3'

export NUVLA_ENDPOINT=192.168.3.1
export NUVLABOX_UUID=_____CHANGE_ME______

docker stack deploy -c docker-compose.onpremise.yml nuvlabox










>>>>>>

docker swarm init --advertise-addr 192.168.3.3

export HOST='raspberrypi-demo-local'
export HOSTNAME="${HOST}"
export HOST_ADDRESSES='192.168.3.3'

export NUVLA_ENDPOINT=192.168.3.1
export NUVLABOX_UUID=0a8757c6-8a45-457f-ae47-173451792535

docker stack deploy -c docker-compose.onpremise.yml nuvlabox
