---
layout: default
title: Introduction
parent: Developer Training
grand_parent: Training
nav_order: 4
---

Introduction
============

   1. Objective: Provide seamless management of container-based
      applications across hybrid computing platforms consisting of
      public clouds, private clouds, and numerous edge devices.

   1. Motivations for SlipStream to Nuvla evolution. Largely driven by
      focus on edge and NuvlaBox machines. The need for rapid,
      lightweight applications and the need to support small devices
      were the primary drivers for the move from virtual machines to
      containers.

   1. Overview of current features:

      1. Integration of resources (ability to define service groups,
         services, and associated credentials to give users access to
         computing and storage resources)

      1. Ability to deploy (with limitations) unmodified containers
         and simple, straight-forward modifications to integrate more
         fully with Nuvla (e.g. data management).

      1. Consistent WORM data model that gives users the ability to
         manage data across cloud/edge infrastructures uniformly. The
         implementation allows data access via S3 and/or POSIX. 
  
   1. Architecture

      1. Core services: REST API, Job Engine, UI.

      1. Database/Persistence: Elasticsearch, Zookeeper.

      1. Target resources (Swarm, Minio).

      1. Overview of which actors interact with which parts of the
         system, demonstrated with typical workflows.
