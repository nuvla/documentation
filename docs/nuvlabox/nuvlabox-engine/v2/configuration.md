---
layout: nuvlabox
title: Configuration
nav_order: 3
parent: v2
grand_parent: NuvlaBox Engine
redirect_from:
 - /nuvlabox/latest/nuvlabox-engine/configuration
---

When installing the NBE, there are a number of environment variable which can be set in order to customize the NuvlaBox. 
Once installed, the NBE's configuration can only be changed through an update on full re-installation of the NBE.


## Environment Variables

When installing the NBE, you can customize your NB via environment variables:

- **NUVLABOX_UUID**: the unique Nuvla ID given to your NuvlaBox. Nuvla will provide this UUID. Also, if you've downloaded the compose files from Nuvla, this environment variable will already be set for you, otherwise, **you must set it** via `export NUVLABOX_UUID=<your_nuvlabox_uuid>`. Please note that the value of the variable can be given both in the form of `nuvlabox/<uuid>` or simply `<uuid>`;
- **NUVLABOX_DATA_GATEWAY_IMAGE**: name of the container image to be used for the MQTT Broker behind the NuvlaBox Data Gateway. You should only change this variable if you are sure the resulting Data Gateway functionality is not affected. To define a new MQTT broker image, simply run `export NUVLABOX_DATA_GATEWAY_IMAGE=<container_image>` before the installation;
- **NUVLABOX_API_KEY**: when the NuvlaBox Engine is successfully installed, Nuvla will issue a unique API Key/Secret credential for that NuvlaBox to be able to securily communicate with Nuvla. This credential's key and secret are stored locally within the NuvlaBox Engine's data volume, which means that if for some reason, the volume is lost, so is the NuvlaBox, and you'll have to create a new one. With this variable, if your NuvlaBox local data is completely lost and but you know what its API Key and Secret were, you can still recover it by running `export NUVLABOX_API_KEY=credential/<api-key-uuid>` and re-doing the NuvlaBox Engine installation steps. **NOTE**: this variable also needs NUVLABOX_API_SECRET to be set;
- **NUVLABOX_API_SECRET**: the secret corresponding to the NUVLABOX_API_KEY mentioned above. Please note that API secrets are not stored in Nuvla, so you can only get this value from your NuvlaBox's local data volume;
- **NUVLA_ENDPOINT**: endpoint for a Nuvla instance. By default it points to https://nuvla.io. But if you have your own Nuvla instance, you can point your NuvlaBox to it by running `export NUVLA_ENDPOINT=<your_nuvla_endpoint>` before launching it;
- **NUVLA_ENDPOINT_INSECURE**: indicates whether to allow insecure (ignore TLS verification) communication between the NuvlaBox and Nuvla. By default it is set to **_false_**. In cases where you might have your own Nuvla instance, running on self-signed certificates, make sure you run `export NUVLA_ENDPOINT_INSECURE=True` before launching the NuvlaBox;
- **NUVLABOX_SSH_PUB_KEY**: it adds the provided string as a public SSH key into the host's `${HOME}/.ssh/authorized_keys` file. Please **note** that once set, this variable is no longer taken into consideration (e.g. during NuvlaBox Engine updates). This SSH key is immutable;
- **HOME**: defaults to your system user's HOME path. It is used for SSH key management. You should not edit this variable;
- **HOSTNAME**: used to generate the compute API credentials used by Nuvla to manage applications on the NuvlaBox. You should not edit this variable;
- **VPN_INTERFACE_NAME**: the NuvlaBox will have its own VPN client. By default, it will create a new network interface called **_vpn_**. If this conflicts with your existing network configuration, then please run `export VPN_INTERFACE_NAME=<your_new_vpn_interface_name>` before launching the NuvlaBox;
- **SKIP_MINIMUM_REQUIREMENTS**: when set to "True", it forces the installation of the NuvlaBox Engine without checking the system and software requirements. **Note**: this is not recommended, as the NuvlaBox might not behave as expected if the system requirements do not fulfill the minimum expectations;
- **EXTERNAL_CVE_VULNERABILITY_DB**: it consists of a link to an external CVE database, in CSV format and compressed, to be used as the reference database for the vulnerability scans. By default it points to an [aggregated CVE databased compiled by SixSq](https://github.com/nuvla/vuln-db/blob/main/databases/all.aggregated.csv.gz), from multiple trusted sources. If you want to use your own CVE database, then simply `export EXTERNAL_CSV_VULNERABILITY_DB=<your_csv_cve_compressed_db_url>`;
- **EXTERNAL_CVE_VULNERABILITY_DB_UPDATE_INTERVAL**: the NBE Security component will periodically check for updates on the external CVE database defined in `EXTERNAL_CVE_VULNERABILITY_DB`. You can control how frequently these check for updates and synchronizations are performed. By default this interval is set to 86400 seconds (1 day). If you'd like to change it (please consider the consequences of the network load caused by such an update, in case your DB is large), please run `export EXTERNAL_CVE_VULNERABILITY_DB_UPDATE_INTERVAL=<time_in_seconds>`. Please also **note** that this check for updates also relies on Nuvla, meaning that whatever `EXTERNAL_CVE_VULNERABILITY_DB` is chosen, it shall also be recognized by Nuvla. If it is not, please contact us;
- **SECURITY_SCAN_INTERVAL**: defines how regular the security scans are. By default, the scans are performed every 1800 seconds (30 min). If you'd like to change this, simply `export SECURITY_SCAN_INTERVAL=<time_in_seconds>`. Bare in mind that depending on the `EXTERNAL_CSV_VULNERABILITY_DB`'s size, a security scan can take some time (order of minutes) and consume quite a bit of CPU, so take caution when increasing the frequency of the scans;

_NOTE_: you can set these environment variables by either replacing them directly in the NuvlaBox Engine's Compose Files, or by running `export <var_name>=<value>` directly on your terminal prior to the installation