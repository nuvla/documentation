---
layout: page
title: Installation
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
 - **HOSTNAME**: your device's hostname. This is optional, and sometimes take by default from your `env`, if it exists. It is used to generate the self-signed NuvlaBox certificates;
 - **VPN_INTERFACE_NAME**: the NuvlaBox will have its own VPN client. By default it will create a new network interface called **_vpn_**. If this conflicts with your existing network configuration, then please run `export VPN_INTERFACE_NAME=<your_new_vpn_interface_name>` before launching the NuvlaBox.
 
 
# Halt the NuvlaBox

In an edge environment, halting your devices is sometimes necessary.

**When rebooting** your edge device, the NuvlaBox will resume by itself, alongside your device's Docker service, so you don't need to do anything.

**When manually halting** the NuvlaBox, you can simply find the original compose files in your edge device, re-export the original environment variables (if not exported already), and run `docker-compose -p nuvlabox down`. Then **to resume**, simply run `docker-compose -p nuvlabox up -d`.


# Uninstall the NuvlaBox

To completely and **permanently** uninstall the NuvlaBox from your edge device, simply find your original compose files in the edge device, and run `docker-compose -p nuvlabox down -v`.

To re-install a new NuvlaBox from scratch in the same edge device, you'll need to go through the installation steps from above.

