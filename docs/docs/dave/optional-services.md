---
layout: default-edit
title: Additional Infrastructure Services
parent: Dave - Administrator
nav_order: 5
---

Additional Infrastructure Services
================

Once you have deployed a basic Docker Swarm cluster, you might want to add a few optional services to improve the service and provide additional functionality, such as:

 - [Public Network](#public-network)
 - [Traefik](#traefik)
 - [Monitoring](#monitoring)
 - [NFS](#nfs)
 - [MinIO](#minio)
 - [VPN](#vpn)
 
But before we get to these services, let's review some firewall rules we need to enable these optional services.

## Cluster Firewall Rules

**Target infrastructure for user containers**: A Docker Swarm infrastructure on which Nuvla will **deploy** containers. This is a basic deployment of Swarm with Minio/NFS for data access and Prometheus for monitoring. Nuvla can be configured to deploy to any number of target Docker Swarm infrastructures.

### Target infrastructure for user containers Firewall Rules

For **Target infrastructure for user containers** infrastructures, the Nuvla service **must** be able to access the services on the cluster. The site's firewall rules must be setup to allow **inbound access** to the Docker Swarm API and to the HTTP(S) ports for other services, e.g. Minio S3.  The nodes in the cluster must also be able to communicate between themselves.

In addition, you will want to allow users to access applications that they've deployed on the infrastructure. To do this, make sure that **inbound access** is possible for all ephemeral ports from anywhere (or at least from all IPs addresses of your users). The range of ephemeral ports can be configured via the kernel parameter `/proc/sys/net/ipv4/ip_local_port_range`.

The following table shows the ports to open for **target** infrastructures:

| port | service | inbound addresses |
| --- | --- | --- |
| 22 (TCP) | ssh |  management nodes |
| 8080 (TCP) | traefik |  management nodes | 
| 4789 (UDP), 7946 (UDP, TCP) | docker |  cluster nodes |
| 111 (UDP, TCP), 2049 (UDP, TCP), 33333 (UDP, TCP) | nfs |  cluster nodes |
| 2376-2377 (TCP) | docker |  Nuvla |
| 80 (TCP), 443 (TCP) | http(s) |  Nuvla, users |
| 32768-60999 (TCP) | ephemeral ports |  users |

## Nuvla micro-service host Firewall Rules

A **Nuvla micro-service host** infrastructure has fewer ports that need to be opened, as Nuvla is generally the only publicly accessible service on the system.

The following table shows the ports to open for **host** infrastructures:

| port | service | inbound addresses |
| --- | --- | --- |
| 22 (TCP) | ssh |  management nodes |
| 8080 (TCP) | traefik |  management nodes | 
| 4789 (UDP), 7946 (UDP, TCP) | docker |  cluster nodes |
| 2376-2377 (TCP) | docker |  management nodes |
| 80 (TCP), 443 (TCP) | http(s) |  management nodes, users |

> **NOTE**: If you used Docker Machine to deploy your cluster on a cloud, the driver will likely have created a security group.  You can modify this security group, if necessary to expose non-Docker ports, e.g. the ephemeral ports for applications.

## Public Network

The various components (both Nuvla components and other required components) will use an "external" network when making services available outside of the Docker Swarm cluster. 

Create a public overlay network by running the following command on the master node of the Swarm cluster:

    docker network create --driver=overlay traefik-public

The name "traefik-public" is hardcoded in many of the docker-compose files. If you want to use a different name, you'll need to search for the "traefik-public" references and update those files.

> **NOTE**: For debugging purposes, you may want to add the `--attachable` option when creating the network.  This allows you to start containers on the network and directly access the services there. Generally, you should not use this option in production.

## Traefik

[Traefik](https://traefik.io) is a general router and load balancer.  Clone the nuvla/deployment repository to the master node of your Docker Swarm cluster.

There are two versions of the traefik deployment: traefik and traefik-prod. Here we will use the first, suitable for test or demonstration deployments, using a self-signed certificate for connections to the HTTPS (443) port.  Feel free to explore the second one on your own.

### Self-Signed Certificates

To deploy an infrastructure for test or demonstration purposes, use the traefik configuration that uses self-signed certificates. You can find this in the `swarm/traefik` subdirectory of the repository. 

To deploy traefik do the following on the master node of the cluster:

    cd traefik
    ./generate-certificates.sh
    docker stack deploy -c docker-compose.yml traefik

This will generate temporary, self-signed certificates and bring up traefik.  You can view the current configuration of traefik at the URL http://master-ip:8080; this is updated dynamically as services are added and removed.

## Monitoring

Having an overview of the activity on the Docker Swarm cluster is very helpful in understanding the overall load and for diagnosing any problems that arise. We recommend using Prometheus to monitor the cluster.

To deploy Prometheus with the standard configuration (from a cloned version of the [nuvla/deployment](https://github.com/nuvla/deployment) repository), run the command on the
Swarm master:

    cd swarm/monitoring
    docker stack deploy -c docker-compose.yml prometheus

The service will be available at the URL `https://master-ip/prometheus`.
The following services will appear:

| service | URL |
| --- | --- |
| grafana | https://master-ip/grafana | monitoring dashboard |
| prometheus | https://master-ip/prometheus/ | Prometheus administration |

Normally, you will only be interested in the Grafana dashboard, which
provides a visual overview of the Swarm cluster operation.

## NFS

To allow for user data "objects" to be accessed via POSIX from within containers (see [Emma - Data Specialist](/emma) on how to use this feature), the nodes of the Docker Swarm cluster hosting user container must have NFS installed.  This is optional, but strongly recommended.

This can be done, for example on Ubuntu, by accessing the nodes as
`root` via SSH and running the command:

     apt-get update
     apt-get install nfs-kernel-server

(Note: this actually installs the server as well; easier than just installing the client alone.)

If you use one of the Swarm nodes (e.g. the master) as the NFS server, be sure that the NFS daemon is installed there.

On the NFS server, create the directory that will be shared with all nodes of the Swarm cluster.  The commands to do this on Ubuntu are:

    NFS_SHARE='/nfs-root'
    mkdir ${NFS_SHARE}
    chown nobody:nogroup ${NFS_SHARE}
    chmod 777 ${NFS_SHARE}
    echo -e "${NFS_SHARE} *(ro,sync,no_subtree_check)" >> /etc/exports
    exportfs -a
    systemctl enable nfs-kernel-server
    systemctl restart nfs-kernel-server

Note that this configuration allows any node within the cluster to mount the volumes.  If the network is open to nodes outside the cluster, you may want to provide an explicit list of allowed hosts.

## Minio (S3)

The Nuvla data management services (see [Emma - Data Specialist](/emma) on how to use this feature) rely on the availability of an S3-compatible service on the Docker Swarm Nuvla uses to host the user containers.

Minio is a container-based implementation that can expose NFS volumes via the S3 protocol. To deploy Minio, run the following commands (from a cloned version of the [nuvla/deployment](https://github.com/nuvla/deployment) repository):

     cd swarm/minio
     docker stack deploy -c docker-compose.yml minio

The service will be available at the URL `https://master-ip/minio/`. (Be patient, minio takes a minute or so to
start and then traefik must adjust its configuration.) The default username/password will be admin/admin, if you've not changed them in the configuration.

## VPN

...
