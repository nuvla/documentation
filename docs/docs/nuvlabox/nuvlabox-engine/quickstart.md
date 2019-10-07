---
layout: default-edit
title: Quickstart
nav_order: 2
parent: NuvlaBox Engine
grand_parent: NuvlaBox
---

# Quickstart

 0. [download](https://github.com/nuvlabox/deployment/releases) the desired NuvlaBox release  
 1. login into [nuvla.io](https://nuvla.io)
 2. from the [edge panel](https://nuvla.io/ui/edge), add a new `nuvlabox` and copy the UUID
 3. on your device, simply `export NUVLABOX_UUID=<UUID you copied>`
 5. still on your device, find the file `docker-compose.yml` from the folder you've downloaded in step 1. and install the NuvlaBox Engine
    ```bash
    $ docker-compose up -d
    ```
 6. after a few seconds, you should see your new NuvlaBox edge device becoming <span style="color:green">green</span> in [Nuvla](https://nuvla.io/ui/edge), and if you run `docker ps` in your device, you should find (amongst others) something like:
    ```bash
    865403c5d7f2        nuvlabox/system-manager:0.4.0   "./app.py"          3 weeks ago         Up 6 hours (healthy)   127.0.0.1:3636->3636/tcp, 0.0.0.0:3637->3637/tcp   deployment-110_system-manager_1
    ```



