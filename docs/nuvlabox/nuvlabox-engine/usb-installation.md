---
layout: page
title: USB Installation
nav_order: 3
parent: NuvlaBox Engine
grand_parent: NuvlaBox
---

# Installation via USB flash drive

If your are looking to streamline the installation of the NuvlaBox Engine in your edge devices, then this is the best choice for you.

The advantages of this installation method are:
 - **NO** need for an external display
 - **NO** need for SSH access to the device
 - The same USB stick can be used **as many times** as needed
 - **NO** technical expertise required

## Additional requirements

This installation method requires a specific NuvlaBox plugin to be installed in your Operating System, which will trigger the USB-based installation whenever you plug the flash drive.

 - if your devices **are running** a [NuvlaBox OS](https://docs.nuvla.io/nuvlabox/nuvlabox-os.html), then you're good! You can jump straight to the [installation procedure below](#procedure)
 
 - if your devices **are NOT running** a [NuvlaBox OS](https://docs.nuvla.io/nuvlabox/nuvlabox-os.html), then you **must** first prepare your operating system as follows:
 
    1. make sure you are running a Linux distribution with `systemd` installed (we recommend using Debian or Ubuntu)
    2. get the latest version of the NuvlaBox USB Auto-installer plugin from GitHub:
   
        ```bash
        git clone https://github.com/nuvlabox/nuvlabox.git /tmp/nuvlabox
        ```
    3. navigate to the folder where the plugin scripts are
   
        ```bash
        cd /tmp/nuvlabox/scripts/auto-installer
        ```
    4. there are a few dependencies that need to be installed first
    
        ```bash
        sudo sh install-requirements.sh
        ```
        
        **NOTE:** make sure you also have the base [NuvlaBox Engine requirements](https://docs.nuvla.io/nuvlabox/nuvlabox-engine/requirements.html) setup
      
    5. copy the plugin script to your binaries folder, and make it executable
    
        ```bash
        # make sure /usr/local/bin is in PATH
        echo $PATH
        
        sudo cp nuvlabox-auto-installer-usb /usr/local/bin/

        sudo chmod +x /usr/local/bin/nuvlabox-auto-installer-usb
        ```
     
    6. install a machine-specific binary, to provide visual feedbacks on the progress of the USB installation. Currently, the supported MACHINE types are:
        - raspberrypi
        
        ```bash
        # again, make sure /usr/local/bin is in PATH 

        # replace ${MACHINE} by one of the supported types above
        sudo cp feedback/${MACHINE}/nuvlabox-auto-installer-feedback /usr/local/bin
        
        sudo chmod +x /usr/local/bin/nuvlabox-auto-installer-feedback
        ```
        
    7. enable the plugin script to run as a systemd service
    
        ```bash
        sudo cp systemd/nuvlabox-auto-installer-usb.service /etc/systemd/system/nuvlabox-auto-installer-usb.service

        sudo chmod 644 /etc/systemd/system/nuvlabox-auto-installer-usb.service
        
        sudo systemctl daemon-reload
        sudo systemctl start nuvlabox-auto-installer-usb
        sudo systemctl enable nuvlabox-auto-installer-usb
        
        # double check that the service is up and running
        sudo systemctl status nuvlabox-auto-installer-usb
        ```

You can now automate the installation of the NuvlaBox Engine into your fleet of edge devices.

# Procedure

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
 

# Environment Variables

**NUVLABOX_UUID**, **NUVLA_ENDPOINT** and **NUVLA_ENDPOINT_INSECURE** are automatically defined for you during the installation process.

It is _not_ possible to define **HOSTNAME** and **VPN_INTERFACE_NAME** with this installation method.


# Upgrade the NuvlaBox Engine

It is also possible to use the USB stick method to upgrade your NuvlaBox Engine installation.

The procedure is the same as described [above](#procedure). If in Nuvla, you select a different NuvlaBox Engine version than the one you have already installed in your devices, then, when you plug the USB stick into the device, the NuvlaBox Auto-installer will upgrade all the outdated NuvlaBox Engine components, according to your desired version.


# Overwrite an existing installation

It is also possible to use the USB stick method to completely delete and re-install your NuvlaBox Engine installation. However, in order to avoid damaging an existing installation, this process can only happen if the following conditions are met:

 - your previous NuvlaBox Engine installation is misconfigured, or
 - your NuvlaBox resource is DECOMMISSIONED or in ERROR in [Nuvla](https://nuvla.io/ui/edge), or
 - your NuvlaBox resource does not exist anymore in [Nuvla](https://nuvla.io/ui/edge),
 
then the NuvlaBox Auto-installer will completely remove the existing NuvlaBox Engine installation from your device, and install a fresh new one.
