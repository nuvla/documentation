---
layout: nuvlaedge
title: Requirements
nav_order: 1
parent: Installation
grand_parent: NuvlaEdge
redirect_from:
 - /nuvlabox/latest/nuvlabox-engine/requirements
 - /nuvlaedge/nuvlaedge-engine/requirements
---

# Requirements

To ensure a smooth and fully functional installation of the NuvlaEdge (**NE**)
software, please make sure you comply with the following system requirements.


## OS Requirements

The NuvlaEdge software is compliant with any OS that officially and fully
supports Docker or Kubernetes. We recommend one of the following:

- Ubuntu
- CentOS
- Debian (and Debian variants like Raspbian and Raspberry Pi OS)

Other Docker and Kubernetes compliant Linux distributions should also work, but
the NuvlaEdge functionality will be subject to the level of Docker and
Kubernetes support the OS provides.

Functionalities like the automatic discovery and categorization of peripherals
are **not** guaranteed for macOS and Windows.


## Hardware Requirements

In order to install the NuvlaEdge and ensure its smooth execution over time,
your device should have at least:

- 512MB of RAM
- 2GB of free disk space
- Supported CPU architectures: AArch32, AArch64 and x86_64

If you are looking at an application with constrained hardware, especially in
terms of memory size, please get in touch. Some components in
the [NuvlaEdge architecture](/nuvlaedge/architecture/) are optional and can be
removed to save memory. Of course, it's a tradeoff.

Please remember that you should leave enough memory to host the apps that will
be running on the edge device.

## Software Requirements

Before you can install NuvlaEdge, please make sure you have a Container
Orchestration Engine (COE) installed along with the COE specific application
deployment tools.

For Docker-based edge device use:
  - [Docker Engine (version 18 or higher)](https://docs.docker.com/engine/install/),
  - `docker` CLI with `compose` command. Typically, installed along with Docker Engine.

For Kubernetes-based edge device:
- one of the Kubernetes distributions (e.g. [k3s](https://k3s.io/),
  [k0s](https://k0sproject.io/), [k8s](https://kubernetes.io/docs/setup/production-environment/))
  and a Container Runtime Interface [CRI](https://kubernetes.io/docs/concepts/architecture/cri/) (e.g.
  ([containerd](https://containerd.io/), [CRI-O](https://cri-o.io/))
  recommended by the selected Kubernetes distribution.
- [Helm](https://helm.sh/docs/intro/install/)

### Prerequisites when running on k8s distribution

1. When the [k8s](https://kubernetes.io/docs/setup/production-environment/) 
   distribution of Kubernetes is used, please ensure NuvlaEdge runs on
   a control-plane node. Therefore, before the installation ensure the
   selected control-plane node is schedulable (i.e. it needs to be untainted).

2. To collect telemetry data of the containers running on the Kubernetes
   cluster, NuvlaEdge
   requires [kubernetes metrics server](https://github.com/kubernetes-sigs/metrics-server)
   up and running. While `k3s` or `k0s` distributions provide the _metrics
   server_ by default, this is not the case for `k8s`. Please install the _metrics
   server_ following the requirements and procedure provided
   [here](https://github.com/kubernetes-sigs/metrics-server). In case you do not
   want to use `--kubelet-insecure-tls` for communication from the _metrics
   server_ to _kubelet_, you can follow the steps below to provide a valid cert for
   _kubelet_.

```shell
# Provide the API server cert/key to the kubelet configuration so that the correct 
# CA and SANs are present in the server cert/key:

cd /var/lib/kubelet/
mv kubelet.crt kubelet.crt.bak
mv kubelet.key kubelet.key.bak
ln -s /etc/kubernetes/pki/apiserver.crt kubelet.crt
ln -s /etc/kubernetes/pki/apiserver.key kubelet.key
```

## Network Requirements

You need **an internet connection**.

The NuvlaEdge software requires the following ports to be opened on the host:

_Mandatory_:
- 443: **Outbound**: Default HTTPS port. Used by NuvlaEdge to communicate with 
  Nuvla via HTTPS (https://nuvla.io). 

_Optional_:
- 1194: **Outbound**: UDP connection to vpn.nuvlaedge.com in case VPN is decided 
  to be used for communication with the edge device managed by NuvlaEdge.

Extended port usage [here](/nuvlaedge/architecture/#network-port-binding).

## NuvlaEdge footprint

<style>
tr:nth-child(even) {
  color: #b00000!important;
}
</style>


| Version | Avg. Memory (MB) | Disk usage (MB) |    Release     |
|--------:|:----------------:|:---------------:|:--------------:|
|   2.5.0 |       200        |       350       |  Pre-release   |
|   2.1.1 |       260        |       980       | Latest release |
