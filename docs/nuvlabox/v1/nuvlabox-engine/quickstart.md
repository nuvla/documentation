---
layout: nuvlabox
title: Installation
nav_order: 4
parent: NuvlaBox Engine
grand_parent: v1
old_version: true
---

The NBE installation starts from Nuvla's [edge panel](https://nuvla.io/ui/edge). From there you can opt for one of two available installation methods: Compose file bundle, or USB stick.

# Install via Compose file bundle

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

**When manually halting** the NuvlaBox, you can simply find the original compose files in your edge device, re-export the original environment variables (if not exported already), and run `docker-compose -p nuvlabox down`. Then **to resume**, simply run `docker-compose -p nuvlabox up -d`.


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

To completely and **permanently** uninstall the NuvlaBox from your edge device, simply find your original compose files in the edge device, and run `docker-compose -p nuvlabox down -v`.

To re-install a new NuvlaBox from scratch in the same edge device, you'll need to go through the installation steps from above.



# Install via USB stick

If your are looking to streamline the installation of the NuvlaBox Engine in your edge devices, then this is the best choice for you.

The advantages of this installation method are:
 - **NO** need for an external display
 - **NO** need for SSH access to the device
 - The same USB stick can be used **as many times** as needed
 - **NO** technical expertise required
 
Unlike the Compose file bundle, the USB stick installation method does not require manual user intervention, and thus does not support manual configuration of the NBE environment variable. **NUVLABOX_UUID**, **NUVLA_ENDPOINT** and **NUVLA_ENDPOINT_INSECURE** are automatically defined for you by Nuvla, during the installation process.

It is _not_ yet possible to define variables like **HOSTNAME** and **VPN_INTERFACE_NAME** with this installation method. All possible NBE configurations for this installation method are set from Nuvla, at the time of creation of the USB stick file.

### Additional requirements

This installation method requires a specific NuvlaBox plugin to be installed in your Operating System, which will trigger the USB-based installation whenever you plug the flash drive.

 - if your devices **are running** a [NuvlaBox OS](/nuvlabox/v1/nuvlabox-os), then you're good! You can jump straight to the [installation procedure below](#procedure)
 
 - if your devices **are NOT running** a [NuvlaBox OS](/nuvlabox/v1/nuvlabox-os), then you **must** first prepare your operating system as follows:
 
    1. make sure you are running a Linux distribution with `systemd` installed (we recommend using Debian or Ubuntu)
    2. get the latest version of the NuvlaBox USB Auto-installer plugin from GitHub:
   
        ```bash
        git clone https://github.com/nuvlabox/nuvlabox-os.git /tmp/nuvlabox-os

        cd /tmp/nuvlabox-os
        ```
        
    3. you'll find different NuvlaBox OS distributions here. These are enclosed within folders like `raspberrypi` (for a Raspbian-like NuvlaBox OS) or `generic` (for generic amd64 Debian-like NuvlaBox OS). Navigate to the folder that it closer to your own distribution
   
        ```bash
        cd /tmp/nuvlabox-os/<your-distro>
        ```
        
    4. inside you'll find a `99_usb-auto-installer` folder
        
        ```bash
        ls 99_usb-auto-installer
        ```
        
    5. for all distros, inside the `99_usb-auto-installer` folder, you'll find an `.howToInstall` file. Run it
    
        ```bash
        sudo sh .howToInstall
        ```

You can now automate the installation of the NuvlaBox Engine into your fleet of edge devices. 

### Procedure

If the OS of your edge device meets the [requirements](#additional-requirements), then all you have to do is to prepare your USB flash drive. 

Just follow these steps:

 1. go to [Nuvla](https://nuvla.io) and login
 2. on the NuvlaBox tab, click `+add` and select the **USB stick** installation method
 
    ![nuvlabox-install-usb](/assets/img/nuvlabox-add-usb.png)

    With this method, a new API key credential is generated for you, and embedded into your USB stick. You can choose for how long this credentials should be valid. By default, this value is set for 30 days. After that, the credential expires and the corresponding USB stick becomes invalid.
   
 3. click `create` and wait. A new API key credential will be created and you'll be given a "trigger" file to download
 
    ![nuvlabox-add-usb-trigger](/assets/img/nuvlabox-add-usb-trigger.png)

 4. download the Trigger file, and copy it into your USB stick. You can place it anywhere within.
 
    **IMPORTANT:** make your your USB stick's filesystem is formatted as one of the following: _vfat, ext2, ext3, ext4, hfsplus_ or _ntfs_.
        
 5. plug your USB stick into your edge device. 
 
 6. the NuvlaBox Auto-installer plugin that is installed in your device's OS will automatically be triggered by the USB stick, and kickstart the installation of the NuvlaBox Engine. At this stage, all you need to do is wait...
 
     It shouldn't take more than a few seconds for the process to start. Depending on your hardware, you might be able to get some external feedback on the progress of the installation. This feedback signal works for the following machine types:
      - `raspberrypi`:
        - **CONSTANT GREEN LED** for 10 sec. This means the NuvlaBox Engine installation process has **started** and you can safely remove your USB stick
        
            ![rpi-nb-start](/assets/img/rpi-nb-start.gif)
            
        - **HEARTBEAT GREEN LED** for 10 sec. This means the NuvlaBox Engine installation process has **finished** successfully
        
            ![rpi-nb-success](/assets/img/rpi-nb-success.gif)
            
        - **PULSING GREEN LED** for 10 sec. This means the NuvlaBox Engine installation process has **failed**
        
            ![rpi-nb-error](/assets/img/rpi-nb-error.gif)
        
 7. go back to the NuvlaBox tab in [Nuvla](https://nuvla.io) and your new NuvlaBox resource will appear.
 

### Upgrade the NuvlaBox Engine

It is also possible to use the USB stick method to upgrade your NuvlaBox Engine installation.

The procedure is the same as described [above](#procedure). If in Nuvla, you select a different NuvlaBox Engine version than the one you have already installed in your devices, then, when you plug the USB stick into the device, the NuvlaBox Auto-installer will upgrade all the outdated NuvlaBox Engine components, according to your desired version.


### Overwrite an existing installation

It is also possible to use the USB stick method to completely delete and re-install your NuvlaBox Engine installation. However, in order to avoid damaging an existing installation, this process can only happen if the following conditions are met:

 - your previous NuvlaBox Engine installation is misconfigured, or
 - your NuvlaBox resource is DECOMMISSIONED or in ERROR in [Nuvla](https://nuvla.io/ui/edge), or
 - your NuvlaBox resource does not exist anymore in [Nuvla](https://nuvla.io/ui/edge),
 
then the NuvlaBox Auto-installer will completely remove the existing NuvlaBox Engine installation from your device, and install a fresh new one.
