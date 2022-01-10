---
layout: nuvlabox
title: Configuration
nav_order: 3
parent: v1
grand_parent: NuvlaBox Engine
old_version: true
---

When installing the NBE, there are a number of environment variable which can be set in order to customize the NuvlaBox.
Once installed, the NBE's configuration can only be changed through an update on full re-installation of the NBE.


## Environment Variables

When installing the NBE, you can customize your NB via environment variables:

 - **NUVLABOX_UUID**: the unique Nuvla ID given to your NuvlaBox. Nuvla will provide this UUID. Also, if you've downloaded the compose files from Nuvla, this environment variable will already be set for you, otherwise, **you must set it** via `export NUVLABOX_UUID=<your_nuvlabox_uuid>`;
 - **NUVLA_ENDPOINT**: endpoint for a Nuvla instance. By default it points to https://nuvla.io. But if you have your own Nuvla instance, you can point your NuvlaBox to it by running `export NUVLA_ENDPOINT=<your_nuvla_endpoint>` before launching it;
 - **NUVLA_ENDPOINT_INSECURE**: indicated whether to allow insecure (ignore TLS verification) communication between the NuvlaBox and Nuvla. By default it is set to **_false_**. In cases where you might have your own Nuvla instance, running on self-signed certificates, make sure you run `export NUVLA_ENDPOINT_INSECURE=True` before launching the NuvlaBox;
 - **HOST**: your device's hostname. This is optional, and sometimes take by default from your `env`, if the variable `$HOSTNAME` exists. It is used to generate the self-signed NuvlaBox certificates;
 - **VPN_INTERFACE_NAME**: introduced in v1.3.0. The NuvlaBox will have its own VPN client. By default it will create a new network interface called **_vpn_**. If this conflicts with your existing network configuration, then please run `export VPN_INTERFACE_NAME=<your_new_vpn_interface_name>` before launching the NuvlaBox (use `export NUVLABOX_VPN_IFACE=<your_new_vpn_interface_name>` for versions <1.16.1);
 - **NUVLABOX_SSH_PUB_KEY**: introduced in v1.9.0. If set, it add the provided string as a public SSH key into the host's `${HOME}/.ssh/authorized_keys` file;
 - **HOST_USER**: introduced in v1.9.0 and meant to be dynamically defined at installation time, to match the host's user who is installing the NuvlaBox Engine. This value is important for the SSH key management workflow and thus should only be manually fixed under very special circumstances, at the user's own risk. **Deprecated** in v1.16.1;
 - **HOST_HOME**: introduced in v1.16.1, as a replacement for the deprecated `$HOST_USER`. This variable is taken automatically from the underlying host environment. It is used as part of the SSH key management mechanism;
 - **SKIP_MINIMUM_REQUIREMENTS**: introduced in v1.10.0, when set to "True", it forces the installation of the NuvlaBox Engine without checking the system and software requirements. **Note**: this is not recommended, as the NuvlaBox might not behave as expected if the system requirements do not fulfil the minimum expectations;
 - **NUVLABOX_ENGINE_VERSION**: introduced in v1.10.0. This is a variable which is set upstream and thus should not be changed by the user. Changing it manually can result in reporting and operational inconsistencies when managing and using the NuvlaBox;
 - **EXTERNAL_CVE_VULNERABILITY_DB**: introduced in v1.11.0. It consists of a link to an external CVE database, in CSV format and compressed, to be used as the reference database for the vulnerability scans. By default it points to an [aggregated CVE databased compiled by SixSq](https://github.com/nuvla/vuln-db/blob/main/databases/all.aggregated.csv.gz), from multiple trusted sources. If you want to use your own CVE database, then simply `export EXTERNAL_CSV_VULNERABILITY_DB=<your_csv_cve_compressed_db_url>`;
 - **EXTERNAL_CVE_VULNERABILITY_DB_UPDATE_INTERVAL**: introduced in v1.11.0. The NBE Security component will periodically check for updates on the external CVE database defined in `EXTERNAL_CVE_VULNERABILITY_DB`. You can control for frequently these check for updates and synchronization are performed. By default this interval is set to 86400 seconds (1 day). If you'd like to change it (please consider the consequences of the network load caused by such an update, in case your DB is large), please run `export EXTERNAL_CVE_VULNERABILITY_DB_UPDATE_INTERVAL=<time_in_seconds>`. Please also **note** that this check for updates also relies on Nuvla, meaning that whatever `EXTERNAL_CVE_VULNERABILITY_DB` is chosen, it shall also be recognized by Nuvla. If it is not, please contact us;
 - **SECURITY_SCAN_INTERVAL**: introduced in v1.11.0. Defines how regular the security scans are. By default, the scans are performed every 1800 seconds (30 min). If you'd like to change this, simply `export SECURITY_SCAN_INTERVAL=<time_in_seconds>`. Bare in mind that depending on the `EXTERNAL_CSV_VULNERABILITY_DB`'s size, a security scan can take some time (order of minutes) and consume quite a bit of CPU, so take caution when increasing the frequency of the scans;