---
layout: nuvlabox
title: USB Stick
nav_order: 3
parent: Installation
grand_parent: NuvlaEdge
---

# Install via USB stick

If you are looking to streamline the installation of the NuvlaEdge in your edge devices, then this is probably the best choice for you.

The advantages of this installation method are:
- **NO** need for an external display
- **NO** need for SSH access to the device
- The same USB stick can be used **as many times** as needed
- **NO** technical expertise required

Unlike the Compose file bundle, the USB stick installation method does not require manual user intervention, and thus does not support manual configuration of the NuvlaEdge environment variable. **NUVLABOX_UUID**, **NUVLA_ENDPOINT** and **NUVLA_ENDPOINT_INSECURE** are automatically defined for you by Nuvla, during the installation process.

It is _not_ yet possible to define variables like **HOSTNAME** and **VPN_INTERFACE_NAME** with this installation method. All possible NuvlaEdge configurations for this installation method are set from Nuvla, at the time of creation of the USB stick file.

### Additional requirements

This installation method requires a specific NuvlaEdge plugin to be installed in your Operating System, which will trigger the USB-based installation whenever you plug the flash drive.

- if your devices **are running** a NuvlaEdge OS, then you're good! You can jump straight to the [installation procedure below](#procedure)

- if your devices **are NOT running** a NuvlaEdge OS, then you **must** first prepare your operating system as follows:

    1. make sure you are running a Linux distribution with `systemd` installed (we recommend using Debian or Ubuntu)
    2. get the latest version of the NuvlaEdge USB Auto-installer plugin from GitHub:

        ```bash
        git clone https://github.com/nuvlabox/nuvlabox-os.git /tmp/nuvlabox-os

        cd /tmp/nuvlabox-os
        ```

    3. you'll find different NuvlaEdge OS distributions here. These are enclosed within folders like `raspberrypi` (for a Raspbian-like NuvlaEdge OS) or `generic` (for generic amd64 Debian-like NuvlaEdge OS). Navigate to the folder that it closer to your own distribution

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

You can now automate the installation of the NuvlaEdge into your fleet of edge devices.

### Procedure

If the OS of your edge device meets the [requirements](#additional-requirements), then all you have to do is to prepare your USB flash drive.

Just follow these steps:

1. go to [Nuvla](https://nuvla.io) and login
2. on the NuvlaEdge tab, click `+add` and select the **USB stick** installation method

   ![nuvlabox-install-usb](/assets/img/nuvlabox-add-usb.png)

   With this method, a new API key credential is generated for you, and embedded into your USB stick. You can choose for how long this credential should be valid for. By default, this value is set for 30 days. After that, the credential expires and the corresponding USB stick becomes invalid.

3. click `create` and wait. A new API key credential will be created and you'll be given a "trigger" file to download

   ![nuvlabox-add-usb-trigger](/assets/img/nuvlabox-add-usb-trigger.png)

4. download the Trigger file, and copy it into your USB stick. You can place it anywhere within.

   **IMPORTANT:** make your USB stick's filesystem is formatted as one of the following: _vfat, ext2, ext3, ext4, hfsplus_ or _ntfs_.

5. plug your USB stick into your edge device.

6. the NuvlaEdge Auto-installer plugin that is installed in your device's OS will automatically be triggered by the USB stick, and kickstart the installation of the NuvlaEdge. At this stage, all you need to do is wait...

   It shouldn't take more than a few seconds for the process to start. Depending on your hardware, you might be able to get some external feedback on the progress of the installation. This feedback signal works for the following machine types:
    - `raspberrypi`:
        - **CONSTANT GREEN LED** for 10 sec. This means the NuvlaEdge installation process has **started** and you can safely remove your USB stick

          ![rpi-nb-start](/assets/img/rpi-nb-start.gif)

        - **HEARTBEAT GREEN LED** for 10 sec. This means the NuvlaEdge installation process has **finished successfully**

          ![rpi-nb-success](/assets/img/rpi-nb-success.gif)

        - **PULSING GREEN LED** for 10 sec. This means the NuvlaEdge installation process has **failed**

          ![rpi-nb-error](/assets/img/rpi-nb-error.gif)

7. go back to the NuvlaEdge tab in [Nuvla](https://nuvla.io) and your new NuvlaEdge resource will appear.


### Upgrade the NuvlaEdge

It is also possible to use the USB stick method to upgrade your NuvlaEdge installation.

The procedure is the same as described [above](#procedure). If in Nuvla, you select a different NuvlaEdge version than the one you have already installed in your devices, then, when you plug the USB stick into the device, the NuvlaEdge Auto-installer will upgrade all the outdated NuvlaEdge components, according to your desired version.

Note that you can also upgrade NuvlaEdgees directly from Nuvla.


### Overwrite an existing installation

It is also possible to use the USB stick method to completely delete and re-install your NuvlaEdge installation. However, in order to avoid damaging an existing installation, this process can only happen if the following conditions are met:

- your previous NuvlaEdge installation is misconfigured, or
- your NuvlaEdge resource is DECOMMISSIONED or in ERROR in [Nuvla](https://nuvla.io/ui/edge), or
- your NuvlaEdge resource does not exist anymore in [Nuvla](https://nuvla.io/ui/edge),

then the NuvlaEdge Auto-installer will completely remove the existing NuvlaEdge installation from your device, and install a fresh new one.
