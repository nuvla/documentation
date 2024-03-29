---
layout: page
title: Docker Compose options in Swarm
nav_order: 3
parent: Advanced Usage
grand_parent: Nuvla
has_children: false
---

# Using Docker Compose options in Swarm

Certain Docker Compose options, like `devices`, `cap_add` etc., cannot be used
when deploying applications on Docker Swarm clusters. Below we describe this on
the example of `devices` option, and provide workarounds to this and other
associated issues.

# Single node Docker endpoint

In Nuvla, the application definition page for apps to be deployed on
Docker infrastructures supports `devices` option, as in
[Docker compose](https://docs.docker.com/compose/compose-file/05-services/#devices). Use
this option to add a host device to the container

```
services:
    myIoTservice:
        image: your_repo/your_image
        devices:
            - "/dev/ttyUSB0"
```

Please note that by doing this, you'll be deploying your app as a native Docker 
Compose application, and thus all of your containers will be executed within 
the host that is exposing your infrastructure endpoint.

# Multi-node Docker swarm cluster

In the case of multi-node Docker cluster running in Docker swarm mode, the
addition of the host devices to the containers is not natively supported by
Docker. However, it is still possible to make this functionality work, following
a `docker-in-docker` approach.

## Docker-in-docker with sidecar container

Docker Swarm does not support devices, capabilities nor privileged mode. 
**However**, you can work around this limitation by adapting your
compose file as shown below:

```
services:
    myIoTservice:
        image: your_repo/your_image
        devices:
            - "/dev/ttyUSB0"
```

**becomes**

```
services:
    myIoTserviceWrapper:
        image: docker
        volumes: 
            - /var/run/docker.sock:/var/run/docker.sock
        command: >
          sh -c '
          # Obtains the name of the base container.
          export PARENT=$$(basename "$$(head /proc/1/cgroup)");
          # Defines the name of the conatiner with your app for sidecar to follow.
          export CONT_NAME=myapp_$$(date +%s);
          docker run --rm -d -v /var/run/docker.sock:/var/run/docker.sock -e PARENT -e CHILD=$${CONT_NAME} sixsq/wrapper-cleaner:master 
          && docker run --rm --device /dev/ttyUSB0 --name $${CONT_NAME} your_repo/your_image'
```

This uses a sidecar container from `sixsq/wrapper-cleaner` image provided by
SixSq that will make sure the container running your application is properly
terminated after the deployment gets terminated.

Depending on the type of the device and access rights, you might need to provide
extra capabilities to your container:

```
&& docker run --cap-add=SYS_ADMIN --device /dev/fuse --rm --name $${CONT_NAME} your_repo/your_image
``` 

In some cases, if [apparmor](https://en.wikipedia.org/wiki/AppArmor) on the host
node is configured too strictly, you might need to use `--privileged` flag:

```
&& docker run --privileged --device /dev/fuse --rm --name $${CONT_NAME} your_repo/your_image
```

## Application publishing ports

If your application is a service needing to publish ports, use the following
example.

The example is based on Jupyter Notebook needing to add host's `/dev/fuse`
device to remotely mount S3 buckets. Jupyter Notebook runs web UI (TCP:8888)
that is published on the host.

```
version: "3.7"

# Environment variables provided by Nuvla.
# They have to be used in publication of hostname deployment parameter.
x-nuvla_env: &nuvla_env
  NUVLA_DEPLOYMENT_ID: $NUVLA_DEPLOYMENT_ID
  NUVLA_ENDPOINT: $NUVLA_ENDPOINT
  NUVLA_API_KEY: $NUVLA_API_KEY
  NUVLA_API_SECRET: $NUVLA_API_SECRET

services:
  jupyter:
    image: docker
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      <<: *nuvla_env
    command: >
      sh -c 'set -x;
      export PARENT=$$(basename "$$(head /proc/1/cgroup)");
      export CONT_NAME=myapp_$$(date +%s);
      # Get IP address of the cluster node where the container is running.
      export NODE_IP=$$(docker node inspect self -f "{ { .Status.Addr } }");
      docker run -d -v /var/run/docker.sock:/var/run/docker.sock -e PARENT -e CHILD=$${CONT_NAME} nuvladev/docker-cleaner:linux
      && docker run -v /var/run/docker.sock:/var/run/docker.sock --cap-add=SYS_ADMIN --device /dev/fuse --rm -P --name $${CONT_NAME} -e NODE_IP -e CONT_NAME -e NUVLA_DEPLOYMENT_ID -e NUVLA_ENDPOINT -e NUVLA_API_KEY -e NUVLA_API_SECRET myrepo/myimage:tag'
```

In the `command` option above, we've added the discovery of the node's IP
(`NODE_IP`) where your container is running, and from which it publishes its
ports (`-P` parameter is used). You need to wrap your image's entrypoint into a
script that would first publish the `hostname` deployment parameter and then
start your application. The full example of how this must be done can be found
[here](https://github.com/nuvla/example-jupyter/blob/master/s3-mount). Here is
the link to the [entrypoint
script](https://github.com/nuvla/example-jupyter/blob/master/s3-mount/nuvla-init.sh),
and this is the ["Nuvla integration"
script](https://github.com/nuvla/example-jupyter/blob/master/s3-mount/nuvla-integration.py)
that publishes the required deployment parameters to Nuvla.
