---
layout: page
title: Add New Applications
parent: User Guide
grand_parent: Nuvla
nav_order: 5
permalink: /nuvla/add-apps
---

Before we start, there are a few terms that you need to get familiar with:

 - **component**: a component is the simplest type application you can get in Nuvla - a container! Components are deployed into Docker Swarm infrastructure services, as a [service](https://docs.docker.com/engine/reference/commandline/service/), with a single replica;
 - **application**: applications are broader that components, in the sense that you can re-use and create your own container deployment recipes freely (like Compose files and Manifests). Applications have _2 subtypes_:
   - **Docker**, meant to be used for Docker Compose and Docker Swarm applications, and expecting a raw Compose file as the deployment recipe, and
   - **Kubernetes**, meant to be used for Kubernetes applications, and expecting a Manifest as the deployment recipe.

# Adding Applications via the UI

It all starts in the Apps page.

![app-store](/assets/img/nuvla-app-store.png)

**If you don't have any projects**, then you'll need to create one. 

 1. expand the "All projects" tab, and click "+add"
 
    ![add-project](/assets/img/add-new-project.png)

 2. click on "Project" and choose a Name and Description for it. Then save.
 
    ![create-project](/assets/img/create-project.png)

---
 
Once inside your project, you'll see the button "+add". 

 1. Navigate to your project and click on "+add"
 
    ![project-page](/assets/img/project-page.png)

    ![add-app](/assets/img/add-app.png)

## Components

From the previous "add app" modal, select "Component".

This will take you to the Component editing page, where you'll find all the configurable options you can set for you component. 

For most fields, you'll find help text to help you configure you Component appropriately. 

![component-ui](/assets/img/component-ui.png)

When you're finished editing, click save, add a commit message and you'll then find your new component in the App Store (Apps page).

Quick explanation of most relevant Component fields:
 - **docker image**: registry, name and tag of the Docker image to be used for your component
 - **architectures**: list of architectures compatible with your component and Docker image
 - **private registry**: in case your Docker image is located in a private registry, make sure you select it here
 - **Port Mappings**: very much like you'd [publish a Docker container port](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose), also here you can add port mappings to your container
 - **Environment Variables**: same as for setting [environment variables for a Docker container](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file), here you can define environment variable to be passed to your container. **In addition**, you can also define a default value and tell whether the variable is mandatory for launching the Component. When launching the Component, you'll also be able to edit this.
 - **Volumes**: let's you define [Docker volumes (of both types named and bind)](https://docs.docker.com/engine/reference/commandline/run/#add-bind-mounts-or-volumes-using-the---mount-flag)
 - **URLs**: URLs to help you access the Component after it has been launched, remotely. These URLs can contain variables that are dynamically substituted once your deployment has been started. Things like:
   - `${hostname}` for getting the endpoint where your Component has been started
   - `${portProtocol.containerPort}` for getting the published destination port corresponding to your port mapping
   - `${envVar}` for getting any environment you might have defined above
   - `${outputParameter}` to map to any of the available output parameters that are dynamically filled it after launching your Component
 - **Output Parameters**: allows you to add custom output parameters that your container can push back to Nuvla, and thus be used as any other deployment output parameter, like the ones used in your URL above 
  - **Data Binding**: to bind your Component to a Data set. See [Managing Data](/nuvla/advanced-usage/manage-data) for more info.

## Applications

From the previous "add app" modal, select "Application".

This will take you to the Application editing page.

For most fields, you'll find help text to help you configure you Application properly. 

![edit-app](/assets/img/edit-app.png)

By default, the **subtype** for new Applications is set to "Docker". If you want to create a Kubernetes application instead, this is the field you have to change.

Quick explanation of most relevant Component fields:
 - **URLs**, **Output Parameters** and **Data Binding**: exactly the same as for [Components](#components)
 - **Files**: you can create secrets and configuration files to be used by the containers in your application. This is where you defined those. Make sure the file name matches the one referenced from within the Compose file/Manifest
 - **Environment Variables**: exactly the same as for [Components](#components). However, these variables can also be used from within your Compose file/Manifest. Example: if you define a new env var called `myVar`, you can use it in you Compose file like this:
 
    ```yaml
    environment:
      - ENV_FROM_NUVLA=$myVar
    ```
 - **Manifest**: the raw [Kubernetes manifest](https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/) representing your application resources
 - **Docker compose**: the raw YAML [Compose file](https://docs.docker.com/compose/compose-file/) representing your Docker application resources
 
### Docker subtype compatibility: Docker Compose vs Swarm?

Nuvla allows you to launch Docker applications both as native Docker Compose projects or Docker Swarm stacks.

Depending on your Compose file, Nuvla will automatically infer whether any of your containers requires Docker Compose-specific options or not.

This is how it works...does your application:
 - have Swarm-specific options (like `deploy`)? Then it will be launched as a **Swarm stack**
 
    ![comp-swarm](/assets/img/comp-swarm.png)
 
 - have Docker Compose-specific options (like `devices`)? Then it will be launched as a **Docker Compose Project**
 
    ![comp-dc](/assets/img/comp-dc.png)
 
 - have **both** Docker Compose and Swarm-specific options? Then it will default to a **Swarm stack**, and the Docker Compose-specific options will ignored upon launch
 
    ![comp-both](/assets/img/comp-both.png)
 
 - *do not* have any Docker Compose or Swarm-specific option? Then it will be launched as a **Swarm stack**
 
    ![comp-dc](/assets/img/comp-none.png)
 
For more information about which options are Docker Compose and Swarm-specific, please consult the original [Compose reference documentation](https://docs.docker.com/compose/compose-file/#not-supported-for-docker-stack-deploy).

 
# Adding Applications with the Python Library

(coming soon...)

# Enabling fast & dedicated monitoring for Application Deployments

When you launch an application, Nuvla starts scheduling metric collection jobs for retrieving your deployment's state, parameters, etc.

These jobs are scheduled at a well defined and short intervals. 

However, if you need faster updates on your deployments (aka shorter response time), SixSq offers an additional sidekick container that you can adjoin to your application, which will push those deployment metrics to Nuvla much more regularly.

Here's an example on how to do it:

 1\. let's say you have a Docker Stack application...and this is your Compose file:
  
  ```yaml
  version: '3'

  services:
    someservice:
      image: someimage:tag
      deploy:
        replicas: 4
  ```
  
  2\. to enable this fast and dedicated deployment monitoring, please add the `sixsq-deployment-monitor` service to your Compose file:
  
  ```yaml
  version: '3'

  services:
    someservice:
      image: someimage:tag
      deploy:
        replicas: 4
        
    sixsq-deployment-monitor:
      image: nuvladev/job:multiarch
      entrypoint: /app/job_deployment_state_push.py
      deploy:
        placement:
          constraints:
            - node.role == manager
      environment:
        - NUVLA_DEPLOYMENT_ID=$NUVLA_DEPLOYMENT_ID
        - NUVLA_ENDPOINT=$NUVLA_ENDPOINT
        - NUVLA_API_KEY=$NUVLA_API_KEY
        - NUVLA_API_SECRET=$NUVLA_API_SECRET
  ```
  
**NOTE:** if your application is Docker Compose compatible, then simply remove the entire `deploy` section from the `sixsq-deployment-monitor` service
