---
layout: default
title: Customize Applications
parent: Training
nav_order: 9
---

Customize Applications
======================

1. Presentation: Customizing containers for Nuvla (C)

   - Explain how containers are deployed from Nuvla to a Swarm
     cluster, including:

     1. Environmental variables that are passed to the container:
     deployment ID, endpoint, and API key/secret.

     1. Other information provided to the container at deployment
        time, in particular ports and mounts.

   - How the container can recover the full deployment information
     (data object and data record resource IDs) to customize the
     presentation of this data to users of the container
     (e.g. providing a dynamic hierarchy).

   - How the customized containers can be uploaded to an open
     repository and then used by Nuvla.

1. Demonstration: Customized containers for Nuvla (C)

   - Show the modifications for the nginx container to allow for
     richer view of the data.

   - Show the modifications to the Jupyter notebook container that
     allow a generated token to be used and then transmitted to the
     user.

   - Show the modifications to the Galaxy analysis platform that
     allows local data (mounted via the Nuvla data management) to be
     consumed.

   - Show with one of the images how generated data can be uploaded
     and integrated into the data management platform.

1. Hands on: Customized containers for Nuvla (C)

   - Exercise to duplicate the changes on the nginx, jupyter, or
     galaxy images as a private application and then to verify that it
     works correctly.

   - Understand how these customized containers can be uploaded to
     Docker Hub, and then used by Nuvla.
