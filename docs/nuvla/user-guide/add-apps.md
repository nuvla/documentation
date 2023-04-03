---
layout: page
title: Add New Applications
parent: User Guide
grand_parent: Nuvla
nav_order: 5
---

# Adding Applications

Before we start, there are a couple of terms that you need to get familiar with:

 - **Docker application**, meant to be used for Docker Compose and Docker Swarm applications, and expecting a Compose file as the deployment recipe, and
 - **Kubernetes application**, meant to be used for Kubernetes applications, and expecting a Manifest as the deployment recipe.

It all starts in the Apps page.

![app-store](/assets/img/nuvla-app-store.png)

First navigate to the "Navigation" tab [TODO].

## Projects

**If you don't have any projects**, then you'll need to create one. Projects are used to contain and organise apps.

 1. expand the "All projects" tab, and click "+add"
 
    ![add-project](/assets/img/add-new-project.png)

 2. click on "Project" and choose a Name and Description for it.  The description can be defined using [markdown]()[TODO], which provides you with a great way to document your projects and apps using text, images, etc. Then save.
 
    ![create-project](/assets/img/create-project.png)
 
Once inside your project, you'll see the button "+add". 

 1. Navigate to your project and click on "+add"
 
    ![project-page](/assets/img/project-page.png)

    ![add-app](/assets/img/add-app.png)

## Applications

From the previous "add app" modal, select "Application".

This will take you to the Application editing page.

For most fields, you'll find help text to help you configure you Application properly. 

![edit-app](/assets/img/edit-app.png)

Quick explanation of most relevant Component fields:
 - **URLs**, **Output Parameters** and **Data Binding**: exactly the same as for [Components](#components)
 - **Files**: you can create secrets and configuration files to be used by the containers in your application. This is where you defined those. Make sure the file name matches the one referenced from within the Compose file/Manifest
 - **Environment Variables**: exactly the same as for [Components](#components). However, these variables can also be used from within your Compose file/Manifest. Example: if you define a new env var called `myVar`, you can use it in you Compose file like this:
 
    ```yaml
    environment:
      - ENV_FROM_NUVLA=$myVar
    ```
 - **Kubernetes manifest**: the raw [Kubernetes manifest](https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/) representing your application resources
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

 
[TODO]: add license and pricing instructions (optional) 
