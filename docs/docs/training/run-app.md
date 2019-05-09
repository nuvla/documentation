---
layout: default
title: Running Applications
parent: Training
nav_order: 5
---

Running Applications with Data
==============================

## Demonstration: End-user deployment with data access (A)

   - Essentially show the GNSS (ESA) workflow where the user selects a
     data set to analyze, selects an application from a filtered list,
     and deploys it.  Accessing the application, then shows that the
     requested data is available.

   - The emphasis is on the simplicity of the process, so this is done
     entirely through the UI and none of the "details" of the modules,
     deployments, etc. should be shown.

## Hands-on: End-user deployment with data access (A)

   1. Register with Nuvla to create an account. (Possibly could be
      done before the training starts, if the infrastructures are
      prepared far enough in advance.)
   
   1. Login to Nuvla with that account.
   
   1. Browse the UI and understand the layout and features
   
   1. Add credentials for a Swarm cluster (or simply share
      credentials with all users for the training). 
   
   1. Select data set, select nginx application (standard one from
      Docker Hub), deploy, and access to verify that the selected
      data is visible.

   1. Terminate the deployment and ensure that the nginx service is
      no longer accessible. 
