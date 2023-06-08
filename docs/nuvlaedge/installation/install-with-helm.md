---
layout: nuvlaedge
title: Helm
nav_order: 2
parent: Installation
grand_parent: NuvlaEdge
has_children: false
---

# Install via Helm

The simplest way to install the NuvlaEdge software on an edge device running
Kubernetes distribution is to follow this installation method. 

1. Login into [Nuvla](https://nuvla.io).
2. From the [Edge panel](https://nuvla.io/ui/edges), use `+Add` to add new NuvlaEdge.
3. Select Kubernetes as installation method.
4. Copy `helm` commands. They must be run on the Kubernetes master node of the edge device.
5. SSH to the edge device, paste and run the `helm` commands.
6. Follow instructions printed out by the `helm install` command.
7. After a few seconds, you should see your new NuvlaEdge device
   becoming <span style="color:green">green</span>
   in [Nuvla](https://nuvla.io/ui/edges).

If this is not the case get in touch via [email](mailto:support@sixsq.com) or
using the built-in platform chat.

After following the above instructions, the NuvlaEdge components should be
running in `nuvlabox-<uuid_of_your_nuvlaedge>` namespace. To check that, run
`kubectl` command using `nuvlabox-<uuid_of_your_nuvlaedge>` as namespace:

```shell
$ kubectl -n nuvlabox-24930029-8684-4594-923f-8da49543027e get all
NAME                                            READY   STATUS      RESTARTS   AGE
pod/system-manager-deployment-b668bd6ff-zcxl5   1/1     Running     0          20m
pod/data-gateway-deployment-549b8c8646-jr7sp    1/1     Running     0          20m
pod/kubernetes-credentials-manager-7cm68        0/1     Completed   0          20m
pod/agent-deployment-646d969744-6hwfr           1/1     Running     0          6m15s

NAME                   TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
service/data-gateway   ClusterIP   10.43.74.6   <none>        1883/TCP   20m

NAME                                        READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/system-manager-deployment   1/1     1            1           20m
deployment.apps/data-gateway-deployment     1/1     1            1           20m
deployment.apps/agent-deployment            1/1     1            1           20m

NAME                                                  DESIRED   CURRENT   READY   AGE
replicaset.apps/system-manager-deployment-b668bd6ff   1         1         1       20m
replicaset.apps/data-gateway-deployment-549b8c8646    1         1         1       20m
replicaset.apps/agent-deployment-646d969744           1         1         1       6m15s
replicaset.apps/agent-deployment-567cf4bc88           0         0         0       20m

NAME                                       COMPLETIONS   DURATION   AGE
job.batch/kubernetes-credentials-manager   1/1           9s         20m
$
```

### Stopping/rebooting edge device

In an edge environment, stopping your devices is sometimes necessary. Stopping
the device **does not mean** you will delete the NuvlaEdge nor its local data,
but rather stop its services temporarily.

**When rebooting** your edge device, the NuvlaEdge will resume by itself,
alongside your device's Kubernetes service, so you don't need to do anything.

### Upgrade/Downgrade NuvlaEdge

> **NOTE:** automated migrations are not currently supported accross major 
> versions (e.g. v1 to v2). If you must upgrade from NuvlaEdge v1 to v2, or 
> vice versa, please contact us.

#### From Nuvla

The NuvlaEdge can be updated directly from Nuvla. On the user interface, in each
NuvlaEdge panel, you'll find an action called "Update NuvlaEdge" (as depicted
below)

![ne-update-nuvla.png](/assets/img/ne-update-nuvla.png)

By clicking on it, you can specify which version of the NuvlaEdge you want to
upgrade/downgrade to. Please note that this is an asynchronous action that can
take a few minutes, depending on your edge device's network.

---

#### Manually

You can SSH into your edge device, and run 

```bash
# Update NuvlaEdge Helm repo
$ helm repo update nuvlaedge
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "nuvlaedge" chart repository
Update Complete. ⎈Happy Helming!⎈
```
```shell
# Display the latest releases of NuvlaEdge Helm chart
$ helm search repo nuvlaedge
NAME                    CHART VERSION   APP VERSION     DESCRIPTION
nuvlaedge/nuvlaedge     2.8.3           2.8.3           NuvlaEdge Helm chart for Kubernetes
```

If you've initially installed the NuvlaEdge according to the instructions above,
then you should see the currently deployed release by running:

```bash
helm list
```

You should get something like this, which shows the currently deployed chart version.

```
NAME                                            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
nuvlabox-24930029-8684-4594-923f-8da49543027e   default         1               2023-06-08 06:51:43.932023581 +0000 UTC deployed        nuvlaedge-2.8.2 2.8.2
```

- **Upgrade/Downgrade the entire NuvlaEdge installation** 

To upgrade to the latest version run

```shell
helm upgrade nuvlabox-<uuid_of_your_nuvlaedge> nuvlaedge/nuvlaedge
```

To upgrade to a specific version run

```shell
helm upgrade nuvlabox-<uuid_of_your_nuvlaedge> nuvlaedge/nuvlaedge --version 2.8.3
```

- **Cherry picking a NuvlaEdge component to be upgraded/downgraded** 

Let's say, as an example, that we want to upgrade the NuvlaEdge's Agent
component to version `1.2.3`. Then, run the following command:
  
```shell
helm upgrade nuvlabox-<uuid_of_your_nuvlaedge> nuvlaedge/nuvlaedge \
    --version <current_version> --set NUVLAEDGE_UUID=<paste_NUVLAEDGE_UUID_from_nuvla> \
    --set kubernetesNode=<TARGET_KUBERNETES_NODE_NAME> \
    --set images.agent.tag=1.2.3
```
  This is valid for any NuvlaEdge component. 

### Uninstall the NuvlaEdge

To completely and **permanently** uninstall the NuvlaEdge from your edge device,
simply run the following `helm` command. **NB!** This will remove the NuvlaEdge
local data volume, so all of its data will be lost.

```shell
helm uninstall nuvlabox-<uuid_of_your_nuvlaedge>
```
