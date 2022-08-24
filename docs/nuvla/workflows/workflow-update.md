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

Since the edge is in constant evolution, updating application deployments running in NuvlaEdgees is a regular event. We distinguish two main reasons for an update to take place:

1. Docker Image update
2. Application definition update
3. Manual update

To better describe the update feature, we will use our personae, mainly [Alice](/alice) and [Clara](/clara). The idea is for Clara to integrate, test and eventually publish apps such that Alice can deploy them. The update feature is therefore there to ensure the appropriate communication between both Clara and Alice.

On the one hand, Clara wants to be able to modify its application definitions in Nuvla, without disrupting Alice's work. Meanwhile, Alice wants to ensure she gets notified when Clara publishes new versions of applications Alice has deployed, such that she can, if she wants, keep her fleet of edge devices and its running applications up-to-date.

It is with this important relationship in mind that we have created the update feature this workflow describes.

### Docker Image Update

Clara will regularly upload new Docker images to her preferred Docker registry.  While she can tag these images as she wants, we recommend versioning Docker images, following a semantic version standard, such as: v1.2.3-4.

For quick development turn around, it is convenient to use floating tags, such as `latest`. Once a new image is uploaded, Clara can simply deploy this image using Nuvla, or if she has already deployed this image, she can simply trigger a [Manual Update](#manual-update).

![nuvla-app-tag-latest-version.png](/assets/img/nuvla-app-tag-latest-version.png)

Once Clara has settled on an image version that she wants Alice to use, she then tags this image in her Docker registry and update the application definition with the corresponding image version 

![nuvla-app-tag-semantic-version.png](/assets/img/nuvla-app-tag-semantic-version.png)

Or the compose file if she is using a multi docker image application definition.

Once this is done and Clara is satisfied that this application definition is good to go, she publishes the application. This will tag this version of the application definition as published.  This will trigger an automatic update in Nuvla, such that all Alices having deployed a previous version of this application will be notified that this update is available. The notification will include a link to the application in Nuvla, from which Alice will be able to update her deployments.

### Application definition update

Similarly to the [Docker Image Update](#image-docker-update) workflow, Clara might also simply decide to change an application definition in Nuvla. For example, she might want to change the Docker compose file or Kubernetes manifest, or the default values of environment variables, or expose different URLs. The same process as the [Docker Image Update](#image-docker-update) workflow is recommended where Clara works on her own until she is satisfied that the application definition (aka module) is ready for production. At this time, she publishes the application definition, triggering the notification to Alices that a new version as available for application deployments she has running.

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
