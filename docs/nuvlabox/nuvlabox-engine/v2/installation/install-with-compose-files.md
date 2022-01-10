---
layout: nuvlabox
title: Compose Files
nav_order: 1
parent: Installation
grand_parent: v2
---

# Install via Compose Files bundle

1. login into [nuvla.io](https://nuvla.io)
2. from the [edge panel](https://nuvla.io/ui/edge), add a new `nuvlabox`, and either
    1. download the compose files from Nuvla, or
    2. copy the NuvlaBox UUID, and on your device, run `export NUVLABOX_UUID=<UUID you copied>` and download the compose files from [here](https://github.com/nuvlabox/deployment/releases)
3. copy the given `docker-compose -p nuvlabox ...` command from Nuvla, and on your device, in the same folder as the compose files from step 2., paste and run the command
4. after a few seconds, you should see your new NuvlaBox edge device becoming <span style="color:green">green</span> in [Nuvla](https://nuvla.io/ui/edge), and if you run `docker ps` in your device, you should find (amongst others) something like:
   ```bash
    9ca2441396d0   eclipse-mosquitto:1.6.12                    "sh -c 'sleep 10 && …"   3 days ago    Up 3 days             1883/tcp                                    data-gateway.1.pgukfkffcn6ahooafaovzn6eq
    072743d2229a   nuvladev/agent:master                       "./app.py"               3 weeks ago   Up 3 days (healthy)   127.0.0.1:5080->80/tcp                      nuvlabox_agent_1
    478817a492f2   nuvladev/compute-api:master                 "./api.sh"               3 weeks ago   Up 3 days (healthy)   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp   compute-api
    7d71e78eaf2b   nuvlabox/vpn-client:1.0.0                   "./openvpn-client.sh"    3 weeks ago   Up 3 days                                                         vpn-client
    c2ef3b427eae   nuvlabox/system-manager:2.1.5               "./run.py"               3 weeks ago   Up 3 days (healthy)   127.0.0.1:3636->3636/tcp                    nuvlabox_system-manager_1
    d561b3bbdc7f   nuvla/job-lite:2.18.0                       "/app/pause.py"          3 weeks ago   Up 3 days (Paused)                                                nuvlabox-job-engine-lite
    f92b151430e3   nuvlabox/security:1.2.0                     "./app.py"               3 weeks ago   Up 3 days                                                         nuvlabox_security_1
    24226c6f802c   nuvlabox/peripheral-manager-network:1.1.4   "python manager.py"      3 weeks ago   Up 3 days                                                         nuvlabox_peripheral-manager-network_1
    abd12f371adb   nuvlabox/peripheral-manager-usb:2.0.4       "peripheral-manager-…"   3 weeks ago   Up 3 days                                                         nuvlabox_peripheral-manager-usb_1
    3b9114d398cd   nuvlabox/on-stop:1.0.1                      "./run.py pause"         3 weeks ago   Up 3 days (Paused)                                                nuvlabox-on-stop
   ```

If this is not the case, please consult the [Troubleshooting page](/nuvlabox/latest/nuvlabox-engine/troubleshooting).

### Halt the NuvlaBox

In an edge environment, halting your devices is sometimes necessary. Halting **does not mean** you will delete the NuvlaBox nor its local data, but rather stop its services temporarily.

**When rebooting** your edge device, the NuvlaBox will resume by itself, alongside your device's Docker service, so you don't need to do anything.

**When manually halting** the NuvlaBox, you **must** find (or re-download) the original compose files in your edge device, and run `docker-compose -p nuvlabox <compose files> down`. Then **to resume**, simply run `docker-compose -p nuvlabox <compose files> up -d`. Please note that `<compose files>` must correspond to the list of compose files you have used during the first installation. In our case, looking at the `docker ps` output from above, `<compose files>` should be replaced by `-f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml` (e.g., to halt the NuvlaBox we'd then run `docker-compose -p nuvlabox -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml down`)


### Upgrade/Downgrade the NuvlaBox

**NOTE**: automated migrations are not currently supported. If you must upgrade from a NuvlaBox Engine v1 to v2, or vice versa, please contact us.

#### From Nuvla

The NBE can be updated directly from Nuvla. On the user interface, in each NuvlaBox page, you'll find an action called "Update NuvlaBox" (as depicted below)

![nb-update-nuvla.png](/assets/img/nb-update-nuvla.png)

By clicking on it, you can specify which version of the NuvlaBox Engine is the target for the release. Please note that this is an asynchronous action that can take a few minutes, depending on your edge device's network.

---

#### Manually

You can also SSH into your edge device, and find the original project folder where you saved your Compose files.

If you've initially installed the NuvlaBox Engine according to the instructions above, then you should see all of its components by running:

```bash
$ docker-compose -p nuvlabox -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml ps
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

- **Cherry picking a NuvlaBox Engine component to be upgraded/downgraded:** let's say, as an example, that we want to upgrade the NuvlaBox Engine's Agent component. Then:
    1. open the `docker-compose.yml` file and find the `agent` service
    2. replace the corresponding Docker image tag (nuvlabox/agent:X.Y.Z) with the target version number. Save the file
    4. execute `docker-compose -p nuvlabox -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml up -d agent`

  This is valid for any NuvlaBox Engine component

- **Upgrade/Downgrade the entire NuvlaBox Engine installation**: let's say we want to upgrade our existing NuvlaBox Engine installation to the latest release in [GitHub](https://github.com/nuvlabox/deployment/releases). Then:
    1. halt the NuvlaBox, as explained [above](#halt-the-nuvlabox)
    2. backup the Compose files from the project folder you are in into a different folder (just in case you need to rollback)
    3. download the Compose files from the [target release in GitHub](https://github.com/nuvlabox/deployment/releases)
    4. resume the NuvlaBox Engine installation by running `docker-compose -p nuvlabox -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml up -d`
       1. if your goal is also to add a new peripheral manager to the existing NuvlaBox, then simply add its compose file to this command. For example, to also start managing Bluetooth peripherals, run `docker-compose -p nuvlabox -f docker-compose.yml -f docker-compose.usb.yml -f docker-compose.network.yml -f docker-compose.bluetooth.yml up -d`
       2. if your goal is also to remove an existing peripheral manager from the NuvlaBox installation, then remove its compose file from this command, and add `--remove-orphans`. For example, to also stop managing Network peripherals, run `docker-compose -p nuvlabox -f docker-compose.yml -f docker-compose.usb.yml up -d --remove-orphans`
       

### Uninstall the NuvlaBox

**NOTE**: this action is permanent, **unless** you keep a copy of the NuvlaBox's API Key/Secret credential. This credential can be found at `/var/lib/docker/volumes/nuvlabox_nuvlabox-db/_data/.activated`. 

To completely and **permanently** uninstall the NuvlaBox from your edge device, simply find your original compose files in the edge device, and run `docker-compose -p nuvlabox down -v`. The `-v` will remove the NuvlaBox local data volume, so all of its data will be lost. 

To re-install a new NuvlaBox from scratch in the same edge device, you'll need to go through the installation steps from above. If you have the API Key/Secret from the NuvlaBox you've just deleted, then you also have the choice to recover it, even from a different device, via the configuration variables `NUVLABOX_API_KEY` and `NUVLABOX_API_SECRET`. See the [NuvlaBox Engine configuration](/nuvlabox/nuvlabox-engine/v2/configuration/) for more details.
