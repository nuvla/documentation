---
layout: page
title: Custom Peripheral Managers
nav_order: 1
parent: Contributing
has_children: false
grand_parent: NuvlaBox
---

Building your own NuvlaBox Peripheral Manager
========

There is a set of natively supported peripheral managers that you can opt to add to your NuvlaBox at installation time. Those are also open-source and can be found at [NuvlaBox@GitHub](https://github.com/nuvlabox?q=peripheral-manager-).

NuvlaBox Peripheral Managers are completely optional and should only be used if you'd like to have an automated mechanism to discover, register and manager peripheral devices that are attached to your NuvlaBox. Once registered, these peripheral devices can be visualized, managed and sometimes even directly controlled from Nuvla (like USB webcams).

Due to the wide variety of IoT sensors/actuators and generic peripheral devices, it would be an impossible task of us at SixSq, to develop all the NuvlaBox Peripheral Manager to support every single peripheral out there.

---

**This is where you come in**!!

---

Let's say you need a new NuvlaBox Peripheral Manager for a specific peripheral device. There are two ways you can go about it:

 1. email us at [Support](mailto:support@sixsq.com) with your request and we'll try our best to accommodate your needs
 
 2. develop your own NuvlaBox Peripheral Manager microservice
 
If you go option 2., you should host your code in your own public/private repository, and then deploy alongside the NuvlaBox Engine. 

We support community-built NuvlaBox Peripheral Managers, so you can let us know about it and we can work together to make it official and available off the shelf from Nuvla!  

---

Building a new NuvlaBox Peripheral Manager is quite simple. We have built a transparent and generic REST API within the NuvlaBox Engine core installation that allows to register and manage your peripheral devices in the Nuvla-NuvlaBox ecosystem without any in-depth knowledge nor code dependencies.

There are only **2 requirements** for having your microservice functioning correctly as a NuvlaBox Peripheral Manager:

 a. _Your microservice needs to be on the same Docker network as the [NuvlaBox Agent component](https://github.com/nuvlabox/agent). This is usually guaranteed when you deploy all components at once, as described in the [Installation Quickstart](http://localhost:4000/nuvlabox/nuvlabox-engine/quickstart.html)_
 
 b. _Your code must manage the NuvlaBox peripheral devices through the management interface provided by the NuvlaBox Agent on port 80. The specification for this API can be found at [https://github.com/nuvlabox/agent#manage-nuvlabox-peripherals](https://github.com/nuvlabox/agent#manage-nuvlabox-peripherals)_
 

Mocking a NuvlaBox Peripheral Manager
---------

Here's an example of a mock peripheral manager, that you can use as a starting point to build your own.


### Step 1 

Create a working environment (local folder, GitHub repository, etc.) where you can put your code. 


 
 
 


