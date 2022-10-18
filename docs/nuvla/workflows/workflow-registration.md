---
layout: page
title: Registration and Commissioning Workflow
nav_order: 3
parent: Main Workflows
grand_parent: Nuvla
has_children: false
---

# Registration and Commissioning Workflow

This section describes the [NuvlaEdge](/nuvlaedge) registration and commissioning workflow.

![nuvlabox-registration.png](/assets/img/nuvlabox-registration.png)

> **NOTE:** All HTTPS requests during this workflow are performed by the NuvlaEdge, where all the information required by the NuvlaEdge is returned to the NuvlaEdge by Nuvla as responses to its requests. In other words, no incoming connection is required.

**1. Installation of the Nuvlabox Engine software** 

Depending on your end goal, several options are available for the installation of the NuvlaEdge Engine software. Both mechanism are similar in the sense that they follow the same registration + commissioning workflow. Only the trigger of the workflow is different.

**1a. Manual installation**: good for small scale infrastructures

Installation of the NuvlaEdge Engine is performed by hand, from a dedicated bundle generated from Nuvla. See details [here](/nuvlaedge/installation).

**1b. Automated installation**: good for industrialisation 

A trigger installation script is embedded in the operating system of the edge device, in order to leverage a USB (or similar media) build from Nuvla. See details [here](/nuvlaedge/installation/install-with-usb-stick/)

---

**2. Activation of the NuvlaEdge**

Depending on the installation process selected, either a NuvlaEdge record is created in Nuvla by the user (see step 1a above), or it is created automatically, via its API, using the automated method (see step 1b above).

> **NOTE:** Additional users or groups can be added to the NuvlaEdge access control, such that they can access to the corresponding NuvlaEdgees.

**2a. Manual activation**

After registering a new NuvlaEdge in Nuvla, the unique identifier of the newly created NuvlaEdge (UUID) is embedded in the main compose file bundled and delivered to the user. This allows a single unauthenticated action to be performed, to activate the NuvlaEdge. A unique identification token is created by Nuvla and returned to the NuvlaEdge. From this point on, all communication between the NuvlaEdge and Nuvla is authenticated and encrypted (TLS). The NuvlaEdge then provides Nuvla with configuration information, such as the Docker REST API parameters.

**2b. Automated activation**

A trigger installation script is embedded in the operating system of the edge device, in order to leverage a USB (or similar media) build from Nuvla (see step 1b above).

An authenticated token is embedded in the USB key, allowing the script to create a new NuvlaEdge resource in Nuvla.  With the unique identifier returned to the NuvlaEdge, the script performs the same steps as 2a above.

The state of the NuvlaEdge at this stage is “activated”.

---

**3. Commissioning of the NuvlaEdge**

Once the NuvlaEdge is in Activated state, Nuvla will automatically generate all the information necessary to enable transparent management of the NuvlaEdge device from Nuvla. For each NuvlaEdge and respective owner, a VPN client configuration is created (based on the NuvlaEdge owner’s organisation), which is then used to establish a secure communication route between the NuvlaEdge and its owner and users.

Finally, resources are created to host the NuvlaEdge status and telemetry, such that the NuvlaEdge can report this information on a regular basis.

At this stage, the NuvlaEdge state is set to “commissioned”.  This means the NuvlaEdge is fully operational, and telemetry is sent on a regular basis from the NuvlaEdge to Nuvla.
