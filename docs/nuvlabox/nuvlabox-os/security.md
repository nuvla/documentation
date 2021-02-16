---
layout: page
title: Security Configuration
nav_order: 3
parent: NuvlaBox OS
grand_parent: NuvlaBox
has_children: false
---

#	NuvlaBox security configuration

## BIOS/UEFI security

This section is based on the OnLogic ML450G. The configuration can be different on other hardware, but it should be similar.
To enter the BIOS/UEFI configuration menu, press the DEL/delete key when the machine boot. 

###	Disable boot from external devices/sources

Under the Boot menu:

* Please ensure that the parameter Boot mode select is set to UEFI.
* Set Boot Option #1 to Hard Disk.
* Set all others Boot Option to Disabled.

### Disable USB devices

You can disable BIOS/UEFI support for USB Mass Storage under:

_Advanced -> USB Configuration -> USB Mass Storage Driver Support = Disabled_

This will prevent to boot on USB drives.

> ⚠️ Please do not disable this before the NuvlaBox OS has been installed because it will prevent its installation.

### Disable Serial ports

You can disable some/all serial ports under:

_Advanced -> SIO Configuration -> Serial Port <x> Configuration - > Serial Port = Disabled_

### Disable UEFI Network stack

By disabling the UEFI Network stack you ensure that network cannot be accessed at the early boot stages. It also prevents network boot. You will find this parameter under:

_Advanced -> Network Stack Configuration -> Network Stack = Disabled_

### Ensure Secure Boot is enabled

You can find the Secure Boot parameters under:

_Security -> Secure Boot_

The parameter Attempt Secure Boot should be set to Enabled.	

The parameter Secure Boot Mode should be set to Standard.	

To ensure Secure Boot is in use the attribute Secure Boot should be Active.

It might not be Active after the first boot of the NuvlaBox OS. If it’s not Active, please reboot the OS.

### Set/update admin password

Setting an admin password prevent anyone without the password to access the BIOS/UEFI configuration menu.

You can do this under:

_Security -> Administrator Password_

### Set/update user password

Setting a user password require the user password to be entered for the machine to boot.

Accessing the BIOS/UEFI configuration menu require the admin password if it is set. If not, the user password is required.

You can do this under:

_Security -> User Password_

## OS security

The NuvlaBox OS is based on Debian.

> ⚠️ On Debian, non-root users don’t have system binaries in the path. 	

So please first switch to the root user with sudo su – before running commands.

> ⚠️ Before updating the initramfs (with update-initramfs command) it is advised to make a copy. You can do this with cp /boot/initrd.img-$(uname -r){,.backup}

### Disable USB devices

There are different options to disable USB devices at the OS level.

####	Disable the whole USB subsystem with a kernel command line option

This is the most secure one because the USB subsystem will never be enabled.
> ⚠️ With this method if the disk is encrypted you will not be able to enter the password with an USB keyboard nor being able to use a USB stick as a key to decrypt the disk.

To add the nousb options to the kernel command line, run the following commands:

    sed -i -r 's/(GRUB_CMDLINE_LINUX=".*)"/\1 usbcore.nousb "/' /etc/default/grub
    update-grub

#### Disable only USB storage devices

__Blacklist usb_storage and uas kernel modules__

    echo -e 'blacklist usb-storage\nblacklist usb_storage\nblacklist uas' >> /etc/modprobe.d/blacklist.conf

The module can be loaded by another module (as a dependency).

If the USB key is already plugged in when the OS start, the module will be loaded.

The latter can be fixed by updating the initramfs with:

    update-initramfs -k all -u

__Use fake install method__

This option works better than the blacklist because the module will not be loaded by a dependency.

    echo -e 'install usb-storage /bin/true\ninstall usb_storage /bin/true\ninstall uas /bin/true' >> /etc/modprobe.d/blacklist.conf
update-initramfs -k all -u

__Prevent access to the module file__

Another option is to change the filename of the usb_storage kernel module but this only apply to the current kernel:

    mv /lib/modules/`uname -r`/kernel/drivers/usb/storage/usb-storage.ko{,.blacklist}

####	Allow only access to USB keyboard

This can be achieved with an udev rule:

TBD

This can also be done by using [USBGuard](https://usbguard.github.io/ ).

###	Disable WiFi interface

####	Blacklist the corresponding kernel module

First find the kernel module with the following command:

    lspci -k | grep -Fi -A 3 'Wireless'

Then blacklist the module:

    echo 'blacklist ath9k' >> /etc/modprobe.d/blacklist.conf

And/or with the install method:

    echo 'install ath9k /bin/true' >> /etc/modprobe.d/blacklist.conf

Then update the initramfs

    update-initramfs -k all -u

####	Use a udev rule

TBD

###	Disable Bluetooth

Blacklist the module with the install method:

    echo 'install btusb /bin/true' >> /etc/modprobe.d/blacklist.conf
    echo 'install Bluetooth /bin/true' >> /etc/modprobe.d/blacklist.conf
    update-initramfs -k all -u

###	Change user password

To change the password of the current user, execute the following command:

    passwd

###	Add or change bootloader (GRUB) password

This configuration will make GRUB asking a username (admin) and a password to boot except for the main boot option. 

If you want to always ask the password, skip the sed command.

    echo 'Please enter the password twice: '; \
    pass=$(grub-mkpasswd-pbkdf2 | grep --line-buffered -Po '[^ ]+$')
    sed -i '/menuentry.*"$os"/ s/${CLASS}/--unrestricted ${CLASS}/' /etc/grub.d/10_linux
    cat <<EOT >> /etc/grub.d/01_users
    #!/bin/sh
    cat <<EOF
    set superusers="admin"
    password_pbkdf2 admin ${pass}
    EOF
    EOT
    chmod +x /etc/grub.d/01_users
    update-grub

> ⚠️ To prevent the password to be bypassed, please ensure that all other BIOS/UEFI boot options are disabled and that an admin password has been set in the BIOS/UEFI configuration menu.

###	Disk encryption

A special version of the NuvlaBox OS installer allow to install it with full disk encryption.

### Change disk password

    cryptsetup luksChangeKey /dev/sda3

###	Unlock the disk with a keyfile on a USB stick

> ⚠️ If USB devices are disabled at kernel level, this will not work.

Insert a USB key in the NuvlaBox and find it’s device path (eg: /dev/sdb), for example with the command blkid or with the command dmesg | grep usb. Once done execute the following commands. Update the first command with the device path of the USB key.

> ⚠️ Existing data on the USB key will be erased.

    USB_DEVICE=/dev/sdb
    fdisk ${USB_DEVICE} <<EOF
    o
    n
    p
    1
 
    +64M
    w
    EOF
    mkfs.ext4 -F ${USB_DEVICE}1
    mkdir /root/usbkey
    mount ${USB_DEVICE}1 /root/usbkey
    dd if=/dev/random of=/root/usbkey/secretkey bs=1 count=4096
    chmod 600 /root/usbkey/secretkey
    cryptsetup luksAddKey /dev/sda3 /root/usbkey/secretkey -S 6
    umount /root/usbkey
    rmdir /root/usbkey

    sed -i "s@^\(sda3_crypt .*\) none luks@\1 /dev/disk/by-uuid/$(blkid | grep ${USB_DEVICE}1 | cut -d'"' -f2):/secretkey luks,keyscript=/lib/cryptsetup/scripts/passdev@" /etc/crypttab

    update-initramfs -k all -u

> ⚠️ Please also be aware that enabling this method will prevent you to enter the password with keyboard and through SSH (if also enabled).

###	Unlock the disk through an SSH connection

It is possible to install an SSH server in the initramfs so that the disk passphrase can be entered through ssh. To enable this option, run the following commands:

    apt install -y dropbear-initramfs
    echo 'DROPBEAR_OPTIONS="-RFEsjk -c /bin/cryptroot-unlock"' > /etc/dropbear-initramfs/config
    cp ~/.ssh/authorized_keys /etc/dropbear-initramfs/authorized_keys
    sed -i 's/luks/luks,initramfs/' /etc/crypttab
    echo 'IP=::::${optional_fqdn}:${device}:dhcp' > /etc/initramfs-tools/conf.d/ip
    update-initramfs -k all -u

To control which SSH keys are authorized to connect, edit the file /etc/dropbear-initramfs/authorized_keys and rerun update-initramfs -k all -u.

###	Unlock the disk with a keyfile embedded into the initramfs

> ⚠️ Embedding the keyfile in the initramfs is not secure because it is stored on the /boot partition which is not encrypted. Encrypting the /boot partition is, in theory, possible with GRUB but it’s not covered in the present manual and it will anyway require a password to be entered manually at GRUB level (to decrypt /boot partition).

> ⚠️ Please also be aware that enabling this method will prevent you to enter the password with keyboard and through SSH (if also enabled).

To unlock disk with a keyfile embedded into the initramfs execute the following commands:

    dd if=/dev/random of=/root/secretkey bs=1 count=4096
    chmod 600 /root/secretkey
    cryptsetup luksAddKey /dev/sda3 /root/secretkey -S 7
    echo 'UMASK=0077' >> /etc/initramfs-tools/conf.d/safe_umask
    echo 'KEYFILE_PATTERN=/root/secretkey' >> /etc/cryptsetup-initramfs/conf-hook
    sed -i 's|none|/root/secretkey|' /etc/crypttab
    update-initramfs -u

###	Ensure Secure Boot is in use

From within the OS run the following command: 

    mokutil --sb-state

If it says SecureBoot enabled, Secure Boot is correctly setup and in use. 

If it’s not enabled, first try to simply reboot the machine and if then it is still not enabled, try to disable Secure Boot on the BIOS/UEFI configuration menu, save&reboot and then reenable it. 

###	Automatic security updates

To enable automatic security updates, run the following commands:

    sudo apt update
    sudo apt install -y unattended-upgrades apt-listchanges
    sudo dpkg-reconfigure -plow unattended-upgrades

With the default configuration, only security updates will be automatically installed every day.
