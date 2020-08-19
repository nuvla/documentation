---
layout: page
title: Manual Installation
nav_order: 2
parent: NuvlaBox Engine
grand_parent: NuvlaBox
---

# Installation

Installing the NuvlaBox Engine is as simple as:

 1. login into [nuvla.io](https://nuvla.io)
 2. from the [edge panel](https://nuvla.io/ui/edge), add a new `nuvlabox`, and either
     1. download the compose files from Nuvla, or
     2. copy the NuvlaBox UUID, run `export NUVLABOX_UUID=<UUID you copied>` and download the compose files from [GitHub](https://github.com/nuvlabox/deployment/releases)
 5. install the NuvlaBox Engine
    ```bash
    $ docker-compose -p nuvlabox up -d
    ```
    **NOTE**: in the latest versions of the NuvlaBox, you can also install optional NuvlaBox components for peripheral management (IoT sensors and actuators). So you might have multiple compose files. In that case, simply run `docker-compose -p nuvlabox -f file1.yml -f file2.yml ... up -d`
 6. after a few seconds, you should see your new NuvlaBox edge device becoming <span style="color:green">green</span> in [Nuvla](https://nuvla.io/ui/edge), and if you run `docker ps` in your device, you should find (amongst others) something like:
    ```bash
    865403c5d7f2        nuvlabox/system-manager:0.4.0   "./app.py"          3 weeks ago         Up 6 hours (healthy)   127.0.0.1:3636->3636/tcp, 0.0.0.0:3637->3637/tcp   deployment-110_system-manager_1
    ```


# Environment Variables

When installing the NuvlaBox Engine, you can customize your NuvlaBox via environment variables:

 - **NUVLABOX_UUID**: the unique Nuvla ID given to your NuvlaBox. Nuvla will provide this UUID. Also, if you've downloaded the compose files from Nuvla, this environment variable will already be set for you;
 - **NUVLA_ENDPOINT**: endpoint for a Nuvla instance. By default it points to https://nuvla.io. But if you have your own Nuvla deployment, you can point your NuvlaBox to it by running `export NUVLA_ENDPOINT=<your_nuvla_endpoint>` before launching it;
 - **NUVLA_ENDPOINT_INSECURE**: indicated whether to allow insecure (ignore TLS verification) communication between the NuvlaBox and Nuvla. By default it is set to **_false_**. In cases where you might have your own Nuvla instance, running on self-signed certificates, make sure you run `export NUVLA_ENDPOINT_INSECURE=True` before launching the NuvlaBox;
 - **HOST**: your device's hostname. This is optional, and sometimes take by default from your `env`, if it exists. It is used to generate the self-signed NuvlaBox certificates;
 - **VPN_INTERFACE_NAME**: introduced in v1.3.0. the NuvlaBox will have its own VPN client. By default it will create a new network interface called **_vpn_**. If this conflicts with your existing network configuration, then please run `export VPN_INTERFACE_NAME=<your_new_vpn_interface_name>` before launching the NuvlaBox;
 - **NUVLABOX_SSH_PUB_KEY**: introduced in v1.9.0. If set, it add the provided string as a public SSH key into the host's `${HOME}/.ssh/authorized_keys` file;
 - **HOST_USER**: introduced in v1.9.0 and meant to be dynamically defined at installation time, to match the host's user who is installing the NuvlaBox Engine. This value is important for the SSH key management workflow and thus should only be manually fixed under very special circumstances, at the user's own risk;
 - **SKIP_MINIMUM_REQUIREMENTS**: introduced in v1.9.3, when set to "True", it forces the installation of the NuvlaBox Engine without checking the system and software requirements. **Note**: this is not recommended, as the NuvlaBox might not behave as expected if the system requirements do not fulfil the minimum expectations;
 - **NUVLABOX_ENGINE_VERSION**: introduced in v1.9.3. This is a variable which is set upstream and thus should not be changed by the user. Changing it manually can result in reporting and operational inconsistencies when managing and using the NuvlaBox.
 
 
# Halt the NuvlaBox

In an edge environment, halting your devices is sometimes necessary.

**When rebooting** your edge device, the NuvlaBox will resume by itself, alongside your device's Docker service, so you don't need to do anything.

**When manually halting** the NuvlaBox, you can simply find the original compose files in your edge device, re-export the original environment variables (if not exported already), and run `docker-compose -p nuvlabox down`. Then **to resume**, simply run `docker-compose -p nuvlabox up -d`.


# Upgrade/Downgrade the NuvlaBox

To upgrade or downgrade your existing NuvlaBox Engine installation, you will need to SSH into your edge device, and find the original project folder where you saved your Compose files.

If you've initially installed the NuvlaBox Engine according to the instructions above, then you should see all of its components by running:

```bash
$ docker-compose -p nuvlabox ps
```

You should get something like this:

```
         Name                        Command                  State                Ports          
--------------------------------------------------------------------------------------------------
datagateway               /entrypoint.sh --entrypoin ...   Up             80/tcp                  
nbmosquitto               /docker-entrypoint.sh /usr ...   Up (healthy)   1883/tcp                
sixsq_agent_1             ./app.py                         Up             5000/tcp                
sixsq_compute-api_1       ./api.sh                         Up             0.0.0.0:5000->5000/tcp  
sixsq_management-api_1    ./app.py                         Up (healthy)   0.0.0.0:5001->5001/tcp  
sixsq_network-manager_1   /opt/nuvlabox/network-mana ...   Up             1194/udp                
sixsq_system-manager_1    ./app.py                         Up (healthy)   127.0.0.1:3636->3636/tcp
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


# Uninstall the NuvlaBox

To completely and **permanently** uninstall the NuvlaBox from your edge device, simply find your original compose files in the edge device, and run `docker-compose -p nuvlabox down -v`.

To re-install a new NuvlaBox from scratch in the same edge device, you'll need to go through the installation steps from above.

