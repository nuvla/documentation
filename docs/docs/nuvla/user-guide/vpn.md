---
layout: page
title: Virtual Private Network (VPN)
nav_order: 9
parent: User Guide
grand_parent: Nuvla
permalink: /nuvla/vpn
---

# Virtual Private Network (VPN)

A key challenge in edge computing is external connectivity. This is required for Nuvla to manage the NuvlaBoxes and for users wanting to reach applications running on the NuvlaBoxes, or the NuvlaBox itself.

For this, we use OpenVPN, an open source Virtual Private Network (VPN) solution.

Nuvla.io allows users to create their own VPN client account.  The same feature is used when registering new NuvlaBoxes.

Since Nuvla will not keep any client secret, the OpenVPN configuration file generated during the creation of the client account must be saved on creation.  Since Nuvla does not keep this information, once this step is completed, the configuration file cannot be recreated.

This page provides instructions on how to configure an OpenVPN client on Windows and MacOS.  For other platforms, please refer to online documentation.

## Windows configuration

To connect to the NuvlaBox VPN from Windows, please download and install [OpenVPN](https://swupdate.openvpn.org/community/releases/openvpn-install-2.4.6-I602.exe) for Windows.

Then, save the OpenVPN configuration file (.conf) provided by Nuvla in the OpenVPN/config folder of your user directory (%USERPROFILE%/OpenVPN/config).

Once done you can start the “OpenVPN GUI”, which will show up in the notification area of the taskbar.

Do a right click on the icon in the notification area to connect to the VPN.

You should be set.

##	MacOS configuration

On MacOS you can install [Tunnelblick](https://tunnelblick.net), an OpenVPN client for MacOS.

Once installed, open Tunnelblick. Then drag & drop the OpenVPN configuration file (.conf) provided by Nuvla on the Tunnelblick icon in the menu bar.

Then you can click on that icon to establish the VPN connection.

You should be set.
