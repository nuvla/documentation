---
layout: nuvlabox
title: Troubleshooting
nav_order: 6
parent: v1
grand_parent: NuvlaBox Engine
old_version: true
---

# Troubleshooting

<details><summary><b>Failed to upgrade/downgrade my NuvlaBox Engine from/to v1.14.0 or lower</b></summary>

<div markdown="1">
Please note that the update capability was only introduced in [NuvlaBox Engine v1.14.0](https://github.com/nuvlabox/deployment/releases/tag/1.14.0). You can still update your NuvlaBox to/from an older NuvlaBox Engine version, **however**, since the persistency of NB installation parameters was only introduced in v1.14.0, we can not guarantee that the final update will result in a similarly configured NBE! If you're updating to/from a NBE version <1.14.0, we recommend taking note of all the environment variables and Docker Compose arguments used during the installation, just in case a manual intervention is needed after an unsuccessful update.

</div>
</details>

---


<details><summary><b>ERROR: Get https://registry-1.docker.io/v2/: net/http: request canceled while waiting for connection</b></summary>

<div markdown="1">
If you are getting this error while installing the NuvlaBox Engine:

```bash
ERROR: Get https://registry-1.docker.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
```

then you might be experiencing some networking issues with your setup. Try restarting your Docker Daemon (e.g. `systemctl restart docker` on Ubuntu), or ultimately, restart your device. If none of these solutions work, have a look at this [thread](https://forums.docker.com/t/docker-pull-results-in-request-canceled-while-waiting-for-connection-client-timeout-exceeded-while-awaiting-headers/73064/27) 
</div>

</details>