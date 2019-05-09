---
layout: default
title: Add Swarm Cluster
parent: Training
nav_order: 8
---

Add Swarm Cluster
=================

1. Demonstration: Integrate Docker Swarm cluster with Nuvla (D)

   - Demonstrate how such a cluster can be easily deployed on the
     cloud (Exoscale). This should be easy to extend to OpenStack
     (appropriate for IFB) because of the use of Docker Machine.

   - Describe the characteristics of a "target" Docker Swarm cluster.
     That is, Swarm plus a Minio (or other S3) service. Also describe
     and show the optional monitoring of the cluster.

   - Show how to create an infrastructure service group and add Swarm
     and Minio to that group.  Do this through the API and if
     available, also show through the UI.

   - Show how to link credentials to those services and make them
     available to users.

   - Verify that everything works by deploying one of the
     previously-used containers to the new infrastructure.

1. Hands on: Integrate Docker Swarm cluster with Nuvla (D), OPTIONAL

   - Create an account (or use an existing one) on Exoscale and obtain
     the API key/secret.

   - Configure the environment for using Docker Machine and use it to
     deploy a Swarm cluster (minimum 1 master and 1 worker, medium or
     large flavors).

   - Add Prometheus for cluster monitoring and ensure that it is
     working.

   - Add NFS client/server software to all nodes in the cluster.

   - Install and configure Minio to provide S3 (HTTPS) and NFS (POSIX)
     access to data.

   - Verify that the container deployment works for new Docker Swarm
     cluster. 
