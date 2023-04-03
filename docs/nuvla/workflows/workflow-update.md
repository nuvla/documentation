---
layout: page
title: Workflows for Applications on NuvlaEdge
nav_order: 3
parent: Main Workflows
grand_parent: Nuvla
has_children: false
---

# Workflows for Applications on NuvlaEdge

The **Workflows for Applications on NuvlaEdge** include the following workflows:

1. Application deployment
2. Application update
3. Telemetry

The first two are triggered by the user, while the **Telemetry** workflow is automatic (although the refresh rate can be configured).

## Application Deployment

The current deployment strategy is using a push mechanism. This means Nuvla issues remote commands on the NuvlaEdge, using the appropriate container orchestration tools.

![nuvlabox-app-deployment.png](/assets/img/nuvlabox-app-deployment.png)
{: style="width: 50%;" class="center-image" :}

**1. Launch action**

Using Nuvla, the user selects an application to launch. The launch modal walks the user through several steps to ensure all required parameters are provided, as well as the target(s) NuvlaEdge(es).

**2. Job scheduling**

Once the launch action is completed, a new deployment resources is created and a new job is scheduled on the Nuvla job engine.

**3. Job execution**

An available job executor then picks up the job and executes the deployment. Depending on whether the application is a simple Docker image, a Docker Compose or a Docker Swarm, the appropriate actions are taken to execute the deployment on the target NuvlaEdge.

**4. Deployment execution**

**4a. Docker image(s) download(s)**

On the NuvlaEdge, the Docker software first downloads the required Docker images (unless they are already cached) from the appropriate Docker Registries, and caches them locally.

**4b. Container(s) creation**

The Docker container(s) is/are then created and configured by the appropriate Container Orchestration Engine, from the configuration provided by Nuvla.

**4c. Containers monitoring**

From this point on, Nuvla pulls on a regular basis each NuvlaEdge to retrieve its containers status. This is then stored in the corresponding deployment for users to view and manage the deployments.

Users can also request Nuvla to pull Docker logs for any deployment, which are then streamed 200 lines at a time, to limit bandwidth.

Once all containers have been deployed, the deployment state is set by Nuvla to *started*. The application is then fully deployed.

If the user has configured an Open VPN access to the NuvlaEdge, services exposing a local port mapped to the NuvlaEdge will be running on the VPN IP range and reachable from customer's Open VPN client.

## Application Update

Since the edge is in constant evolution, updating application deployments running in NuvlaEdges is a regular event. We distinguish two main reasons for an update to take place:

1. Docker Image update
2. Application definition update
3. Manual update

To better describe the update feature, we will distinguish between a standard user of Nuvla and an app vendor or developer. The idea is for app vendor or developer to integrate, test and eventually publish apps such that users can deploy them. The update feature is therefore there to ensure the appropriate communication between both app vendor or developer and users.

On the one hand, app vendor or developer want to be able to modify its application definitions in Nuvla, without disrupting users's work. Meanwhile, users wants to ensure she gets notified when app vendor or developer publishes new versions of applications users have deployed, such that they can, if they want, keep their fleet of edge devices and its running applications up-to-date.

It is with this important relationship in mind that we have created the update feature this workflow describes.

### Docker Image Update

App vendor or developer will regularly upload new Docker images to her preferred Docker registry.  While they can tag these images as they want, we recommend versioning Docker images, following a semantic version standard, such as: v1.2.3-4.

For quick development turn around, it is convenient to use floating tags, such as `latest`. Once a new image is uploaded, users can simply deploy the image using Nuvla, or if they have already deployed the image, they can simply trigger a [Manual Update](#manual-update).

![nuvla-app-tag-latest-version.png](/assets/img/nuvla-app-tag-latest-version.png)

Once app vendor or developer have settled on an image version that they wants users to use, they then tag the image in their Docker registry and update the app definition with the corresponding image version 

![nuvla-app-tag-semantic-version.png](/assets/img/nuvla-app-tag-semantic-version.png)

Or the compose file if they are using a multi docker image application definition.

Once this is done and app vendor or developer are satisfied that the application definition is good to go, they publish the application. This will tag the version of the application definition as published.  This will trigger an automatic update in Nuvla, such that all users having deployed a previous version of this application will be notified that this update is available. The notification will include a link to the application in Nuvla, from which users will be able to update their deployments. (soon)

### Application definition update

Similarly to the [Docker Image Update](#docker-image-update) workflow, app vendor or developer might also simply decide to change an application definition in Nuvla. For example, they might want to change the Docker compose file or Kubernetes manifest, or the default values of environment variables, or expose different URLs. The same process as the [Docker Image Update](#docker-image-update) workflow is recommended where app vendor or developer work on their own until they are satisfied that the application definition is ready for production. At this time, they publishes the application definition, triggering the notification to users that a new version as available for application deployments they have running. (soon)

### Manual Update

During development, it is often convenient to instruct a NuvlaEdge to simply update a deployment by simply downloading Docker images if they have changed regardless of image versions. This can be done by simply forcing a update on a deployment.

![nuvlabox-app-manual-update](/assets/img/nuvlabox-app-manual-update.png)
{: style="width: 50%;" class="center-image" :}

For a manual deployment, the following steps are executed:

**1. Manual update action**

In Nuvla, the user updates a deployment, forcing the update if Nuvla has not detected a need for update.

**2. Job scheduling**

Once the update action is confirmed, an update job is scheduled on the Nuvla job engine.

**3. Job execution**

An available job executor then picks up the job and executes the update. Depending on whether the application is a simple Docker image, a Docker Compose, a Docker Swarm or Kubernetes, the appropriate actions are taken to execute the update on the target NuvlaEdge.

**4. Manual update execution**

**4a. Docker image(s) download(s)**

On the NuvlaEdge, the Docker software first looks for updated Docker images from the appropriate Docker Registries, and caches them locally.

**4b. Container(s) restart**

If a new Docker image was downloaded, the corresponding containers are restarted.

From this point on, the application deployment and telemetry reporting continues to work as normal.
