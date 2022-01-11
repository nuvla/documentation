---
layout: nuvlabox
title: Host Management
nav_order: 6
description: "Manage the NuvlaBox Edge Device separately from the NuvlaBox Engine"
parent: v1
has_children: false
old_version: true
---

# NuvlaBox Edge Device Host Management


Despite being the heart of the NuvlaBox, the NuvlaBox Engine has some limitations when it comes to having full privileges and management power over the underlying edge device. This is because this software is being provided to you as a set of containers, and is thus functioning under the umbrella of an existing container orchestration engine like Docker or Kubernetes. 

Since these container orchestration engines are critical dependencies for the execution of the NuvlaBox Engine, you should be able to tightly monitor and manage them remotely. But how can you perform a disruptive maintenance action (like an update or service restart) on them without jeopardizing an existing installation of the NuvlaBox Engine? What about being able to recover your NuvlaBox Engine in the unlikely event of a disaster where you've completely lost visibility and/or access to your NuvlaBox?

Enters the NuvlaBox Host-level Management feature - a new optional feature of the NuvlaBox, which can be enabled at any time, for any NuvlaBox, offering device management redundancy through an additional management channel for your NuvlaBox Edge Device, which exists and sits outside the working environment of the NuvlaBox Engine.


## Enabling host-level management

**IMPORTANT**: to enable this feature, you must be logged into your edge device!

Host-level management is optional, and is disabled by default. If you wish to enable it, you can do it at any time during the lifecycle of your NuvlaBox (including at creation time), and you only need to do it once.

After enabling it, you'll be given a single-line instruction that you must copy and paste into your edge device's crontab. Here's an example on how to set it up:

1. enable host-level management and obtain the single-line instruction from [Nuvla.io](https://nuvla.io), either during or after the NuvlaBox creation (see the details down below) 
2. copy the given instruction
3. log into your edge device, either as `root` or as the user used for installing the NuvlaBox Engine
4. type `crontab -e` and press enter (you might be asked to choose an editor - in this example, we use `vim`)
5. scroll to the end of the window, press `a` (if using `vim` mode) and in a new line, paste the copied instruction. You'll end up with something similar to this:
    
    ```shell
    # Edit this file to introduce tasks to be run by cron.
    # 
    # Each task to run has to be defined through a single line
    # indicating with different fields when the task will be run
    # and what command to run for the task
    # 
    # To define the time you can provide concrete values for
    # minute (m), hour (h), day of month (dom), month (mon),
    # and day of week (dow) or use '*' in these fields (for 'any').#
    # Notice that tasks will be started based on the cron's system
    # daemon's notion of time and timezones.
    # 
    # Output of the crontab jobs (including errors) is sent through
    # email to the user the crontab file belongs to (unless redirected).
    # 
    # For example, you can run a backup of all your user accounts
    # at 5 a.m every week with:
    # 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
    # 
    # For more information see the manual pages of crontab(5) and cron(8)
    # 
    # m h  dom mon dow   command
    * 0 * * * export NUVLABOX_API_KEY=credential/9a460aeb2-67bc-4f36-bd71-dfef18bfc1a6 NUVLABOX_API_SECRET=52UdVXf.5EsMeH.gM3Wzv.32eqJ2p.pVKYNe NUVLA_ENDPOINT=https://nuvla.io && curl -X POST ${NUVLA_ENDPOINT:-https://nuvla.io}/api/session -H content-type:application/json -c /tmp/nuvla-cookie -d "{\"template\": {\"href\": \"session-template/api-key\",\"key\": \"$NUVLABOX_API_KEY\", \"secret\": \"$NUVLABOX_API_SECRET\"}}" && curl -X POST ${NUVLA_ENDPOINT:-https://nuvla.io}/api/nuvlabox/0ab3124f-30b4-4660-a2e4-d9e4fa63b3fe/assemble-playbooks -b /tmp/nuvla-cookie | sh -
    ```
6. exit the crontab editing window by pressing (if using `vim`) `esc`, followed by `:`, `x` and `enter`. Your terminal window should print the following message: `crontab: installing new crontab`

And you're done. Once you're NuvlaBox Engine has been installed and your NuvlaBox is activated in [Nuvla.io](https://nuvla.io), your instruction will start successfully running periodically (every hour by default), executing whatever NuvlaBox Playbooks are associated with your NuvlaBox, and reporting the results back to [Nuvla.io](https://nuvla.io) and onto your NuvlaBox page.

**NOTE:** please note that the single-line instruction you are given contains an API key with management access to your NuvlaBox, so please make sure you don't share this instruction with untrusted entities.

### At NuvlaBox creation time 

From [Nuvla.io](https://nuvla.io), proceed to create a new NuvlaBox as usual.

![enable-host-level-mgmt-nb-creation-time](/assets/img/nb-creation-enable-hlm.png)

When selecting the Compose file installation method, you'll be given a new option where you can opt-in to have the host-level management feature enabled. If you create the NuvlaBox with this option enabled, you'll see this:

![enable-host-level-mgmt-nb-creation-time-cronjob](/assets/img/nb-creation-modal-hlm.png)

From here, use the "Copy to clipboard" icon to copy your single-line instruction to be pasted in your Edge Device's crontab (as explained above).


### After the NuvlaBox has been created

From [Nuvla.io](https://nuvla.io), navigate to your NuvlaBox page, and in the menu bar you'll find a new action called "Enable host level management":

![enable-host-level-mgmt-nb](/assets/img/nb-enable-hlm.png)

Click on this actions and once you've enabled it, you'll see a new notification on the top right corner. Open it, and you'll find the single-line instruction that you need to copy and paste in your Edge Device's crontab (as explained above).

![enable-host-level-mgmt-notification](/assets/img/nb-enable-hlm-notification.png)

![enable-host-level-mgmt-cronjob](/assets/img/nb-enable-hlm-cronjob.png)