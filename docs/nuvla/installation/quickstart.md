---
layout: page
title: Quickstart
nav_order: 1
parent: Installation
grand_parent: Nuvla
---

Here's a simple guide to quickly install Nuvla for evaluation purposes. So if you're looking for quickly trying out Nuvla, you're at the right place. However, if you're looking for a robust production level installation, you probably want to look at [the production deployment page](/nuvla/installation/production).

The Nuvla services and their dependent services are all containerised and can be deployed easily into a Docker Swarm CaaS cluster. **For this quick deployment, we will deploy all services together on a single node**.


Quick Nuvla Deployment
================

The Nuvla services and their dependent services are all containerised and can be deployed easily into a Docker Swarm cluster.

This installation assumes that you will only use the `super` user. 

## Prerequisites

We recommend deploying Nuvla on a Docker Swarm cluster (CaaS). 

If running Docker locally, you'll need to initialise your deployment to run in swarm mode. Just run the command:

    docker swarm init

The `docker stack` commands below should then work.

## Clone GitHub Repository

Clone the [nuvla/deployment](https://github.com/nuvla/deployment) GitHub
repository:

    git clone https://github.com/nuvla/deployment

This repo contains all the the Docker compose files you need to setup Nuvla.

## Deploy

The `deployment` repository contains a `demo` folder that includes a compose file. This file contains all the instructions to start the different containers composing the Nuvla micro-service architecture. This compose file will use all latest released version of the Nuvla software.

    cd deployment/demo
    docker stack deploy -c docker-compose.yml nuvla

This will create a set of Docker service, prefixed with the last argument provided above (in our example: `nuvla`).

Now verify that all of the services start by listing them with Docker:

    docker stack ls
    docker service ls

You should also verify that the API server has fully started by inspecting the logs:

    docker service logs -f nuvla_api

After the configuration messages, the log should indicate that a server has been started on port 8200. Once this is the case, you can visit https://`<master-ip>`/api/cloud-entry-point, which should return a directory of the available resources in JSON format.

![Cloud Entry Point](/assets/img/cloud-entry-point-json.png)

Similarly, you can verify that the web browser interface is available by visiting https://`<master-ip>`/. You should see the Nuvla UI with a login button in the upper-right corner.

![Nuvla Welcome Page](/assets/img/welcome.png)

