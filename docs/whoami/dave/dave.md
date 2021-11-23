---
layout: page
title: Dave
nav_order: 4
parent: Who Am I?
permalink: /dave
---


# Dave: the Administrator

{% include /code-sample/skills.html %} {% include /code-sample/skills-sysadmin.html %} {% include /code-sample/skills-om.html %} 

![Dave](/assets/img/dave.png){:style="margin: auto; display: block; width: 7em"}


This section of the documentation is for [Dave](/whoami#dave-the-administrator).  Here you will find instructions on how to setup your own Nuvla instance, manage Container-as-a-Service (CaaS) infrastructures and even install NuvlaBox devices at the edge.

[Dave](/whoami#dave-the-administrator) is quite an hands-on guy and might even be administrating multiple services and infrastructures. 


# Dave can...

#### [Install his own Nuvla instance](/nuvla/installation)
#### [Create and Manage Infrastructures](/nuvla/infrastructures)
#### [Populate Nuvla with Example Applications](/nuvla/installation/example-apps)
#### [Fine tune a Swarm Cluster to host a production Nuvla Instance](/nuvla/installation/production#deploy-additional-caas-services)
#### [Operate and maintain his own Nuvla instance](/nuvla/installation/operation-maintenance)
#### [Deploy a NuvlaBox](/nuvlabox/latest)
---
#### Embed the Nuvla UI into another web application 

The easiest way to do this is simply to include the Nuvla browser interface into the web application via an `iframe` element:

```html
<iframe src="https://nuvla.io"
        style="width:100%; height:100ex; v-scroll:auto; padding: 1ex !important; margin: 0 !important">
    <p>Your browser does not support iframes.</p>
</iframe>
```


> **Note:** if you are using your own Nuvla deployment, simply adjust the `src="https://nuvla.io"` value.

Embedding the interface in this way avoids issues with cross-site scripting restrictions, conflicts with Javascript libraries, etc.


