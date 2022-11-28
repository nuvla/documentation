---
layout: nuvlabox
title: Compose Files
nav_order: 2
parent: Installation
grand_parent: NuvlaEdge
has_children: false
---

TODO: check Nuvla links

# Install via Compose Files bundle

The simplest way to install the NuvlaEdge software on an edge device is to follow this installation method.  If you are looking for an automated and/or scalable method, please visit the [USB Stick page](/nuvlaedge/installation/install-with-usb-stick).

1. login into [Nuvla](https://nuvla.io)
2. from the [Edge panel](https://nuvla.io/ui/edges), add a new `nuvlaedge`, and either
    1. download the compose files from Nuvla, or
    2. copy the NuvlaEdge UUID, and on your device, run `export NUVLABOX_UUID=<UUID you copied>` and download the compose files from [here](https://github.com/nuvlaedge/deployment/releases)
3. copy the given `docker-compose -p nuvlabox ...` command from Nuvla, and on your device, in the same folder as the compose files from step 2., paste and run the command
4. after a few seconds, you should see your new NuvlaEdge device becoming <span style="color:green">green</span> in [Nuvla](https://nuvla.io/ui/edges), and if you run `docker ps` in your device, you should find (amongst others) something like:

   ```bash
   CONTAINER ID   IMAGE                                          COMMAND                  CREATED        STATUS                  PORTS                                       NAMES
   ca2e99365e74   nuvlaedge/agent:2.9.4                          "./agent_main.py"        1 hours ago    Up 1 hour (healthy)     127.0.0.1:5080->80/tcp                      nuvlaedge_agent_1
   57eec0498ee1   nuvla/job-lite:3.2.2                           "/app/pause.py"          1 hours ago    Up 1 hour (Paused)                                                  nuvlaedge-job-engine-lite
   45658f5996fd   eclipse-mosquitto:1.6.12                       "sh -c 'sleep 10 && …"   1 hours ago    Up 1 hour               1883/tcp                                    data-gateway.1.x9k0ap8usf0uvpbv4qqhef9fi
   897236624fc8   nuvlaedge/vpn-client:1.2.0                     "./openvpn-client.sh"    1 hours ago    Up 1 hour                                                           vpn-client
   d83eb7cd754e   nuvlaedge/security:2.2.0                       "./security-entrypoi…"   1 hours ago    Up 1 hour                                                           nuvlaedge_security_1
   402e7edf6e57   nuvlaedge/system-manager:2.5.0                 "./manager_main.py"      1 hours ago    Up 1 hour (healthy)     127.0.0.1:3636->3636/tcp                    nuvlaedge_system-manager_1
   029550de24e0   nuvlaedge/on-stop:1.2.0                        "./on_stop_main.py p…"   1 hours ago    Up 1 hour (Paused)                                                  nuvlaedge-on-stop
   cee1671055f0   nuvlaedge/compute-api:1.3.0                    "./api.sh"               1 hours ago    Up 1 hour (healthy)     0.0.0.0:5000->5000/tcp, :::5000->5000/tcp   compute-api
   7204699d1a6a   nuvlaedge/peripheral-manager-network:1.3.0     "python network_mana…"   1 hours ago    Up 1 hour                                                           nuvlaedge_peripheral-manager-network_1
   1f4a82e6d4d8   nuvlaedge/peripheral-manager-bluetooth:1.3.0   "python -u bluetooth…"   1 hours ago    Up 1 hour                                                           nuvlaedge_peripheral-manager-bluetooth_1
   1f0dc2873d34   nuvlaedge/peripheral-manager-usb:2.2.0         "peripheral-manager-…"   1 hours ago    Up 1 hour                                                           nuvlaedge_peripheral-manager-usb_1
   ```

If this is not the case, please consult the [Troubleshooting page](/nuvlaedge/latest/nuvlaedge/troubleshooting), or get in touch. TODO: How?

### Halt the NuvlaEdge

In an edge environment, halting your devices is sometimes necessary. Halting **does not mean** you will delete the NuvlaEdge nor its local data, but rather stop its services temporarily.

**When rebooting** your edge device, the NuvlaEdge will resume by itself, alongside your device's Docker service, so you don't need to do anything.

**When manually halting** the NuvlaEdge, you **must** find (or re-download) the original compose files in your edge device, and run `docker-compose -p nuvlaedge <compose files> down`. Then **to resume**, simply run `docker-compose -p nuvlabox <compose files> up -d`. Please note that `<compose files>` must correspond to the list of compose files you have used during the first installation. In our case, looking at the `docker ps` output from above, `<compose files>` should be replaced by `-f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml` (e.g. to halt the NuvlaEdge we'd then run `docker-compose -p nuvlaedge -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml down`)


### Upgrade/Downgrade NuvlaEdge

> **NOTE:** automated migrations are not currently supported accros major versions (e.g. v1 to v2). If you must upgrade from NuvlaEdge v1 to v2, or vice versa, please contact us.

#### From Nuvla

The NuvlaEdge can be updated directly from Nuvla. On the user interface, in each NuvlaEdge panel, you'll find an action called "Update NuvlaEdge" (as depicted below)

![ne-update-nuvla.png](/assets/img/ne-update-nuvla.png)

By clicking on it, you can specify which version of the NuvlaEdge you want to upgrade/downgrade to. Please note that this is an asynchronous action that can take a few minutes, depending on your edge device's network.

---

#### Manually

You can also SSH into your edge device, and find the original project folder where you saved your Compose files.

If you've initially installed the NuvlaEdge according to the instructions above, then you should see all of its components by running:

```bash
$ docker-compose -p nuvlaedge -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml ps
```

You should get something like this:

```
                 Name                            Command              State                        Ports                  
--------------------------------------------------------------------------------------------------------------------------
compute-api                               ./api.sh                 Up (healthy)   0.0.0.0:5000->5000/tcp,:::5000->5000/tcp
deployment_agent_1                        ./app.py                 Up (healthy)   127.0.0.1:5080->80/tcp                  
deployment_peripheral-manager-network_1   python manager.py        Up                                                     
deployment_peripheral-manager-usb_1       peripheral-manager-usb   Up                                                     
deployment_security_1                     ./app.py                 Up                                                     
deployment_system-manager_1               ./run.py                 Up (healthy)   127.0.0.1:3636->3636/tcp                
nuvlabox-job-engine-lite                  /app/pause.py            Paused                                                 
nuvlabox-on-stop                          ./run.py pause           Paused                                                 
vpn-client                                ./openvpn-client.sh      Up       
```

- **Cherry picking a NuvlaEdge component to be upgraded/downgraded:** let's say, as an example, that we want to upgrade the NuvlaEdge's Agent component. Then:
    1. open the `docker-compose.yml` file and find the `agent` service
    2. replace the corresponding Docker image tag (nuvlaedge/agent:X.Y.Z) with the target version number. Save the file
    4. execute `docker-compose -p nuvlaedge -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml up -d agent`

  This is valid for any NuvlaEdge component.

- **Upgrade/Downgrade the entire NuvlaEdge installation**: let's say we want to upgrade your existing NuvlaEdge installation to the latest release in [GitHub](https://github.com/nuvlaedge/deployment/releases). Then:
    1. halt the NuvlaEdge, as explained [above](#halt-the-nuvlaedge)
    2. backup the Compose files from the project folder you are in into a different folder (just in case you need to rollback)
    3. download the Compose files from the [target release in GitHub](https://github.com/nuvlaedge/deployment/releases)
    4. resume the NuvlaEdge installation by running `docker-compose -p nuvlaedge -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml up -d`
       1. if your goal is also to add a new peripheral manager to the existing NuvlaEdge, then simply add its compose file to this command. For example, to also start managing Bluetooth peripherals, run `docker-compose -p nuvlaedge -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml -f docker-compose.bluetooth.yml up -d`
       2. if your goal is also to remove an existing peripheral manager from the NuvlaEdge installation, then remove its compose file from this command, and add `--remove-orphans`. For example, to also stop managing Network peripherals, run `docker-compose -p nuvlaedge -f docker-compose.yml -f docker-compose.usb.yml up -d --remove-orphans`
       

### Uninstall the NuvlaEdge

> **NOTE:** this action is permanent, **unless** you kept a copy of the NuvlaEdge's API Key/Secret credential. This credential can be found at `/var/lib/docker/volumes/nuvlabox_nuvlabox-db/_data/.activated`. 

To completely and **permanently** uninstall the NuvlaEdge from your edge device, simply find your original compose files in the edge device, and run `docker-compose -p nuvlaedge down -v`. The `-v` will remove the NuvlaEdge local data volume, so all of its data will be lost.

### Detailed configuration

To re-install a new NuvlaEdge from scratch in the same edge device, you'll need to go through the installation from the start of this page. If you have the API Key/Secret from the NuvlaEdge you've just deleted, then you also have the choice to recover it, even from a different device, via the configuration variables `NUVLABOX_API_KEY` and `NUVLABOX_API_SECRET`. See the [NuvlaEdge configuration](/nuvlaedge/nuvlaedge-software/configuration/) for more details.
