---
layout: default
title: Running Applications
parent: Developer Training
grand_parent: Training
nav_order: 6
---

Running Applications with Data
==============================

## Demonstration: End-user deployment with data access (Alice)

   - Essentially show the GNSS (ESA) workflow where the user selects a
     data set to analyze, selects an application from a filtered list,
     and deploys it.  Accessing the application, then shows that the
     requested data is available.

   - The emphasis is on the simplicity of the process, so this is done
     entirely through the UI and none of the "details" of the modules,
     deployments, etc. should be shown.

## Hands-on: End-user deployment with data access (Alice)

### Run Web Server with Data
   
   1. Select data set, select nginx application (standard one from
      Docker Hub), deploy, and access to verify that the selected
      data is visible.

### Terminate Web Server

   1. Terminate the deployment and ensure that the nginx service is
      no longer accessible. 
