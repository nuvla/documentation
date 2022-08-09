---
layout: nuvlabox
title: Troubleshooting
nav_order: 6
parent: NuvlaEdge Engine
grand_parent: NuvlaEdge
redirect_from:
 - /nuvlabox/latest/nuvlabox-engine/troubleshooting
---

# Troubleshooting


<details><summary><b>Failed to downgrade my NuvlaEdge Engine to v1</b></summary>

<div markdown="1">
Automated migrations across major versions (e.g. v1 to v2) are not currently supported. So even if it looks like your NuvlaEdge
Engine downgrade finished successfully, you'll soon realize, from Nuvla, that your NuvlaEdge is not healthy. If you must downgrade from a NuvlaEdge Engine v2 to v1, please contact us.
</div>

</details>

---


<details><summary><b>ERROR: Get https://registry-1.docker.io/v2/: net/http: request canceled while waiting for connection</b></summary>

<div markdown="1">
If you are getting this error while installing the NuvlaEdge Engine:

```bash
ERROR: Get https://registry-1.docker.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
```

then you might be experiencing some networking issues with your setup. Try restarting your Docker Daemon (e.g. `systemctl restart docker` on Ubuntu), or ultimately, restart your device. If none of these solutions work, have a look at this [thread](https://forums.docker.com/t/docker-pull-results-in-request-canceled-while-waiting-for-connection-client-timeout-exceeded-while-awaiting-headers/73064/27)
</div>

</details>
