---
layout: page
title: Launch Applications
parent: User Guide
grand_parent: Nuvla
nav_order: 4
---

# Deploy an app or a bouquet of apps

Let's deploy apps. You can deploy apps from:

1. [Edges page](#starting-from-the-edges-page)
2. [Deployments page](#starting-from-the-deployments-page)
3. [Apps page](#starting-from-the-apps-page)

The workflow is the same, with one exception we'll see later on.

To deploy apps, Nuvla.io needs the following information:

 - which apps to deploy, and
 - where to deploy them (i.e. NuvlaEdges, Kubernetes or Docker Swarm)

So depending on which page you start from, you'll be asked to define these, but in a different order.

You always deploy an app on a NuvlaEdge or in the cloud.  We'll assume here that you want to deploy an app at the edge. For this, you need access to a NuvlaEdge.  If you don't have one available yet, you can [create a new NuvlaEdge here](/nuvlaedge/installation/). Make sure you have at least one online NuvlaEdge. You can check that on the [Edges page](https://nuvla.io/ui/edges) by looking for an <span style="color:green">online</span> NuvlaEdge.

---

## Starting from the Edges page

![nuvla-edges](/assets/img/edges.png)

From the Edges page, you can define a fleet of edge devices to deploy to.  This fleet can either be:

- [**Explicit**](#using-a-simple-fleet-of-edge-devices): an explicit list of edge devices, which can be updated manually over time
- [**Dynamic**](#using-a-dynamic-fleet-of-edge-devices): a dynamic list of edge devices defined by a filter, which automatically updates as the filter returns more or less edge devices.

Let's cover both cases, starting with the simplest _explicit_ case. 


### Using a simple fleet of edge devices (static fleet)

From the [edges page](https://nuvla.io/ui/edges), select the NuvlaEdges you want to deploy to. You will be able to update this list later.

![nuvla-edges-selection](/assets/img/edges-select-all-nuvlaedges.png)

Click on _Bulk Deploy App_ button.

![nuvla-edges-selection](/assets/img/edges-bulk-deploy-app.png)

Here you can now define a *deployment group*.

![nuvla-new-deployment-group](/assets/img/dg-static-from-edges.png)

First set the name and description of your new deployment group.

> **NOTE:** once you've entered a name or description, press enter to confirm the value.

![nuvla-new-deployment-group-set-name](/assets/img/dg-static-from-edges-set-name.png)

{% include deployment-group/dg-name-description.md prefix='dg-static-from-edges' %}

The *NuvlaEdges* section is already filled from the selection you made on the edges page before clicking the Bulk Deploy App. 

{% include deployment-group/dg-apps.md prefix='dg-static-from-edges' %}

You can now launch this deployment group by clicking on the *Start* button.  

![nuvla-new-deployment-group-highlight-save-button](/assets/img/dg-static-from-edges-highlight-start-button.png)

Depending on the app, you might have to accept the terms and conditions and price(s) of the app vendor(s).  Then confirm that you want to start the app and start it. 

![nuvla-new-deployment-group-start](/assets/img/dg-static-from-edges-start.png)

Voilà! You have started your deployment group. From here you will be able to manage this deployment group by changing both the fleet of edge device and the apps, including their version and input parameters.

![nuvla-new-deployment-group-started](/assets/img/dg-static-from-edges-started.png)


### Using a dynamic fleet of edge devices

The instructions above show how to create a _static_ fleet of edge devices.  You can also create a _dynamic_ fleet, which is defined by a filter, which can change over time.  For example, you can define a filter that says consider all NuvlaEdges that have a given tag.

Over time, NuvlaEdges with this tag can evolve, and you will be able to update your deployments based on this dynamic fleet.

Note that you cannot convert a _static_ fleet in deployment group into a _dynamic_ one, and vice versa. Therefore, you have to choose at creation time of your deployment group.

First define the filter you want to define your fleet.

![nuvla-edges-highlight-filter-button](/assets/img/dg-dynamic-highlight-filter-button.png)

In this example, we choose to select all edge devices that have the tag 'green'.

![nuvla-edges-filter-modal](/assets/img/dg-dynamic-filter-modal.png)

Once our filter is defined (and you will be able to change it later, even after having started your deployment), you can create your new deployment group by clicking on *Deploy App with Dynamic Edges* button.

![nuvla-edges-highlight-deploy-dynamic-button](/assets/img/edges-highlight-deploy-dynamic-button.png)

In your new deployment group, the NuvlaEdge widget shows that the fleet of edge devices is defined by a filter. Once you save the deployment group, you will be able to update the filter and get Nuvla.io to recalculate the fleet.

![nuvla-edges-dynamic-deploy-app](/assets/img/dg-dynamic-from-edges.png)

{% include deployment-group/dg-name-description.md prefix='dg-dynamic-from-edges' %}

The *NuvlaEdges* section is already filled from the selection you made on the edges page before clicking the Bulk Deploy App. 

{% include deployment-group/dg-apps.md prefix='dg-dynamic-from-edges' %}

You can now launch this deployment group by clicking on the *Start* button.  

![nuvla-new-deployment-group-highlight-save-button](/assets/img/dg-dynamic-from-edges-highlight-start-button.png)

Depending on the app, you might have to accept the terms and conditions and price(s) of the app vendor(s).  Then confirm that you want to start the app and start it. 

![nuvla-new-deployment-group-start](/assets/img/dg-dynamic-from-edges-start.png)

Voilà! You have started your deployment group. From here you will be able to manage this deployment group by clicking on *Recompute fleet*, as well as the apps, including changing versions and input parameters.

![nuvla-new-deployment-group-started](/assets/img/dg-dynamic-from-edges-highlight-recompute-fleet.png)

---

## Starting from the Deployments page

On the Deployments page, you can see 'single' deployments, as well as deployment 'groups'.

![nuvla-deployments-page](/assets/img/deployments-page.png)

To deploy an app from this page, click on the *Deployment groups* tab.

![nuvla-deployment-groups-page](/assets/img/deployments-highlight-groups.png)

Here, click on the *+ Add* button.

![nuvla-deployment-groups-highlight-add-button](/assets/img/deployment-groups-page.png)

This will create a new deployment group page. From here you will be able to add app(s) and edge devices.

{% include deployment-group/dg-name-description.md prefix='dg-dg' %}

{% include deployment-group/dg-apps.md prefix='dg-dg' %}

---

## Starting from the Apps page

There are two types of apps:
 - **Simple app**: a single app, which can be composed of several containers deployed together and described using a Docker Compose file, or Kubernetes Manifest (Helm charts are on their way)
 - **Bouquet of Apps**: a composition of simple apps, potentially provided by different providers, but deployed and managed together
 
 From the Apps page, depending on the type of app, the deployment process is a bit different. Up to know, on this documentation page, we have described the way to create a deployment group. In this section, we will describe the user interface for simple apps deployment. This will be deprecated in the future, replaced by the deployment group approach.
 

So, **let's deploy a Nuvla App into your NuvlaEdge**:

 1. login into [Nuvla](https://nuvla.io) and go to the [All Apps](https://nuvla.io/ui/apps?apps-store-tab=allapps) tab of the Apps page

    ![nuvla-app-store](/assets/img/nuvla-app-all.png)

 2. find your desired app (let's say Nginx for example). Then, click on the deploy button of the corresponding app

    ![nuvla-app-nginx](/assets/img/nuvla-app-nginx.png)

 3. select a NuvlaEdge to deploy this app to. Notice that Nuvla will automatically check the availability of the NuvlaEdge and that you have the right credentials
  
    ![nuvla-launch-app](/assets/img/nuvla-app-nginx-select-destination.png)
 
 4. If the app has an End-User License Agreement (EULA), read it and if you accept it, tick the accept box
  
    ![nuvla-launch-app](/assets/img/nuvla-app-nginx-accept-eula.png)
 
 5. if applicable, define any environment variables, configuration files and/or other runtime parameters that might be required by your app (this NGINX example application doesn't)
 
 6. and if the app is a paying app, you will also have to accept the fees (this Nginx example application doesn't)
 
 7. click *deploy*, and you'll be redirected to the page of the new deployment, where you can follow the state of your deployment, and interact with it. 
