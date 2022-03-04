---
layout: nuvlabox
title: Compose Files
nav_order: 1
parent: Installation
grand_parent: v1
old_version: true
---

# Install via Compose Files bundle

1. login into [nuvla.io](https://nuvla.io)
2. from the [edge panel](https://nuvla.io/ui/edge), add a new `nuvlabox`, and either
    1. download the compose files from Nuvla, or
    2. copy the NuvlaBox UUID, and on your device, run `export NUVLABOX_UUID=<UUID you copied>` and download the compose files from [GitHub](https://github.com/nuvlabox/deployment/releases)
3. copy the given `docker-compose -p nuvlabox ...` command from Nuvla, and on your device, alongside the compose files retrieved in step 2. above, paste and run the command
4. after a few seconds, you should see your new NuvlaBox edge device becoming <span style="color:green">green</span> in [Nuvla](https://nuvla.io/ui/edge), and if you run `docker ps` in your device, you should find (amongst others) something like:
   ```bash
   865403c5d7f2        nuvlabox/system-manager:0.4.0   "./app.py"          3 weeks ago         Up 6 hours (healthy)   127.0.0.1:3636->3636/tcp, 0.0.0.0:3637->3637/tcp   nuvlabox_system-manager_1
   ```

### Halt the NuvlaBox

In an edge environment, halting your devices is sometimes necessary.

**When rebooting** your edge device, the NuvlaBox will resume by itself, alongside your device's Docker service, so you don't need to do anything.

**When manually halting** the NuvlaBox, you can simply find the original compose files in your edge device, re-export the original environment variables (if not exported already), and run `docker-compose -p nuvlabox down`. Then **to resume**, simply run `docker-compose -p nuvlabox up -d`. Remember to specific the compose files in this command, whenever peripheral managers are also to be halted.


### Upgrade/Downgrade the NuvlaBox

#### From Nuvla

The NBE can be updated directly from Nuvla. On the user interface, in each NuvlaBox page, you'll find an action called "Update NuvlaBox" (as depicted below)

![nb-update-nuvla.png](/assets/img/nb-update-nuvla.png)

By clicking on it, you can specify which version of the NuvlaBox Engine is the target for the release. Please note that this is an asynchronous action that can take a few minutes, depending on your edge device's network.

**Troubleshooting**: Please note that the update capability was only introduced in [NuvlaBox Engine v1.14.0](https://github.com/nuvlabox/deployment/releases/tag/1.14.0). You can still update your NuvlaBox to/from an older NuvlaBox Engine version, **however**, since the persistency of NB installation parameters was only introduced in v1.14.0, we can not guarantee that the final update will result in a similarly configured NBE! If you're updating to/from a NBE version <1.14.0, we recommend taking note of all the environment variables and Docker Compose arguments used during the installation, just in case a manual intervention is needed after an unsuccessful update.

---

#### Manually

You can also SSH into your edge device, and find the original project folder where you saved your Compose files.

If you've initially installed the NuvlaBox Engine according to the instructions above, then you should see all of its components by running:

```bash
# if there are also peripheral managers installed, remember to add "-f docker-compose.<type>.yml" to this command
# where "<type>" is the type of peripheral manager you've installed above
$ docker-compose -p nuvlabox ps
```

You should get something like this:

```
         Name                        Command                  State                Ports          
--------------------------------------------------------------------------------------------------
datagateway               /entrypoint.sh --entrypoin ...   Up             80/tcp                  
nbmosquitto               /docker-entrypoint.sh /usr ...   Up (healthy)   1883/tcp                
nuvlabox_agent_1             ./app.py                         Up             5000/tcp                
nuvlabox_compute-api_1       ./api.sh                         Up             0.0.0.0:5000->5000/tcp  
nuvlabox_management-api_1    ./app.py                         Up (healthy)   0.0.0.0:5001->5001/tcp  
nuvlabox_network-manager_1   /opt/nuvlabox/network-mana ...   Up             1194/udp                
nuvlabox_system-manager_1    ./app.py                         Up (healthy)   127.0.0.1:3636->3636/tcp
vpn-client                ./openvpn-client.sh              Up      
```

- **Cherry picking a NuvlaBox Engine component to be upgraded/downgraded:** let's say, as an example, that we want to upgrade the NuvlaBox Engine's Agent component. Then:
    1. open the `docker-compose.yml` file and find the `agent` service
    2. replace the corresponding Docker image tag (nuvlabox/agent:X.Y.Z)with the target version number. Save the file
    3. re-import all the necessary environment variables for the component being upgraded. In this case, make sure that at least NUVLABOX_UUID is set (if you're using [Nuvla.io](https://nuvla.io)
    4. execute `docker-compose -p nuvlabox up -d agent`

  This is valid for any NuvlaBox Engine component

- **Upgrade/Downgrade the entire NuvlaBox Engine installation**: let's say we want to upgrade our existing NuvlaBox Engine installation to the latest release in [GitHub](https://github.com/nuvlabox/deployment/releases). Then:
    1. halt the NuvlaBox with `docker-compose -p nuvlabox down`, as explained [above](#halt-the-nuvlabox)
    2. move (or delete) the Compose files from the project folder you are in
    3. download the Compose files from the [target release in GitHub](https://github.com/nuvlabox/deployment/releases)
    4. resume the NuvlaBox Engine installation by running `docker-compose -p nuvlabox up -d`


### Uninstall the NuvlaBox

To completely and **permanently** uninstall the NuvlaBox from your edge device, simply find your original compose files in the edge device, and run `docker-compose -p nuvlabox down -v --remove-orphans`.

To re-install a new NuvlaBox from scratch in the same edge device, you'll need to go through the installation steps from above.

