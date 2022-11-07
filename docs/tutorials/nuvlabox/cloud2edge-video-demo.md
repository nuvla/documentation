---
layout: page
title: Edge2Cloud Video AI
nav_order: 1
parent: Tutorials
has_children: false
---

# Demo: person detection system at the edge, with notifications to the cloud ([Clara](/clara) and [Dave](/dave))

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/yYJ6laT_6M4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

## Scenario

Let's setup a scenario for an edge device (NuvlaEdge) with a USB camera attached, and a VM running in the cloud.

We'll deploy, from Nuvla:
 - a message broker application to the cloud VM, and
 - a video analysis app to the NuvlaEdge, that publishes notifications to the message broker running in the cloud.
 
Finally, we can even install an app in our phone, to subscribe to the message broker running in the cloud, so that we receive the notifications from the NuvlaEdge, no matter where we are.

This scenario is pictured in the image below.

![edge2cloudDemo](/assets/img/videoAIDemo.png){: :center}


## DIY: Step by step guide

You can run this demo by yourself. Simply go through the following steps:

### 1: You'll need

 - one or more Linux VMs, with a public IP, running Docker in Swarm mode
 - an [edge device](/nuvlabox/latest/nuvlabox-engine/requirements) (RaspberryPi, Laptop, etc.) with Docker and Docker Compose installed, and Swarm mode enabled
 - an internet connection
 - a [Nuvla.io](https://nuvla.io) account
 - one USB webcam
 

### 2: Setup your Cloud infrastructure

 1. SSH into a master node (VM) from your Docker Swarm cluster. Take note of the **IP** of that node
 2. To secure the connection with Nuvla, we need to set/get some TLS credentials for your Docker socket in that cluster. Check `systemctl status docker` and see if there are any `--tls*` arguments in the `dockerd` process 
    1. **IF YOU HAVE THOSE**, then please make note of **CERT** (as *--tlscert*), **KEY** (as *--tlskey*) and **CA** (as *--tlscacert*). Also make a note of the TCP **PORT** being used (by default it should be 2376)
    2. **IF YOU DON'T HAVE TLS SETUP**, then please:
        1. run `docker run -d --rm -p 5000:5000 -v /var/run/docker.sock:/var/run/docker.sock -e HOST=${HOSTNAME} --name nb-compute-api nuvlabox/compute-api:0.2.5`
        2. Wait about 60sec, or until the command `docker logs nb-compute-api` shows:
        > *mode of '/opt/nuvlabox/cert.pem' changed to 0444 (r--r--r--)*
        3. take note of:
        > **CERT**  - from `docker exec nb-compute-api cat /srv/nuvlabox/shared/cert.pem` <br>
        > **KEY** - from `docker exec nb-compute-api cat /srv/nuvlabox/shared/key.pem` <br> 
        > **CA** - from `docker exec nb-compute-api cat /srv/nuvlabox/shared/ca.pem`
        4. also take note of **PORT**=5000
 3. go to [Nuvla.io](https://nuvla.io), login, and select *Infrastructures*, on the left sidebar
 4. click "*+add*" (top left), and select Swarm
 5. fill in the form and click "*create*" (replace the **IP** and **PORT** with the values from steps 1. and 2. above)
 
    ![new-infra](/assets/img/new-infra-modal.png)
 6. now that you see your infrastructure listed, go to *Credentials* on the left sidebar
 7. we need to tell Nuvla how to authenticate with your cluster, so click "*+add*" and select Swarm/Kubernetes
 8. fill in the form and click "*create*" (replace the **CA**, **CERT**, and **KEY** with the saved values from step 2. above)
 
    ![new-cred](/assets/img/new-credential-modal.png)

### 3: Launching your Message Broker

 1. go to the Nuvla Marketplace (*Apps* on the left sidebar)
 2. let's deploy an MQTT broker to your Swarm cluster...find the app "RabbitMQ"
 3. click "*launch*"
 4. select the credential you've created before, and click "*launch*"
 5. you'll be redirected to your dashboard...wait until the app has "STARTED" and you can see a green button on the app card (this can take a few minutes the 1st time you do it, cause your Docker Swarm cluster will have to download this Docker image)
    
    ![new-dep](/assets/img/new-deployment-card.png){:style="margin: auto; width: 18em;"}
 6. click on the card, and you'll see a detailed page with information about your deployment. Make note of the **URL** called "mqtt"
 
### 4: Get the NuvlaEdge into your edge device

 1. in [Nuvla.io](https://nuvla.io), go the *Edge* panel (left sidebar)
 2. let's create a NuvlaEdge. Click "*+add*"
 3. fill in the form and click "*create*"
     
     ![new-nb](/assets/img/new-nb-modal.png)
 4. you'll be given a **NuvlaEdgeID**, please take note
 5. SSH into your edge device
    1. make sure you're logged in with a user that can [manage Docker](https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user) - test it by running `docker ps`
 6. setup the environment by running `export NUVLABOX_UUID=NuvlaEdgeID` where `NuvlaEdgeID` is the **NuvlaEdgeID** from step 4.
 7. download the [NuvlaEdge Engine software installer](https://github.com/nuvlabox/deployment/releases). Run `wget https://github.com/nuvlabox/deployment/releases/download/1.3.1/docker-compose.yml`
 8. now just execute `docker-compose up -d`
    1. it will just take a few seconds for you to see your NuvlaEdge become green (online) in [Nuvla.io](https://nuvla.io). You can follow the installation and lifecycle process by running `docker-compose logs`
    2. after a couple of minutes, you'll also see a new infrastructure (of the type NuvlaEdge) and credential appear in [Nuvla.io](https://nuvla.io)
 9. if not yet plugged in, plug your USB camera into the NuvlaEdge (edge device)
    1. in [Nuvla.io](https://nuvla.io), if you go to *Edge* and select your NuvlaEdge, you'll see the USB camera automatically listed as a peripheral
    
### 5: Deploy the AI app to the edge

 1. in [Nuvla.io](https://nuvla.io), go to the *Marketplace* and find the app called "Motion Detector to MQTT". Click "*launch*"
 2. a panel with appear - select your NuvlaEdge credential from there
 3. click on the environment tab and paste the "mqtt" **URL** that you saved above
 
     ![env-var](/assets/img/env-modal.png)
 4. click "*launch*" and wait
 5. once the deployment is ready, you'll the the green button with the link to your Motion Detector endpoint - click on it
 6. you'll be redirected to a new tab on your browser, pointing to your NuvlaEdge via a SixSq VPN IP that has been assigned automatically to your NuvlaEdge
    1. PLEASE note that you'll only be able to access your NuvlaEdge via this IP if you have a SixSq VPN client configuration running on your computer. If you don't have one, please drop us an email at [Support](mailto:support@sixsq.com)
    2. if you don't want to use SixSq's VPN service, you can also access the Motion Detector endpoint directly via the NuvlaEdge's IP (check `ifconfig` in your NuvlaEdge to get the IP)
 7. you are now be able to see the video feed, coming from your webcam. If you move, you'll see some video processing happening
 8. connect to the MQTT broker running in your Docker Swarm cluster in the cloud, you'll get a notification every time there's movement! You can use whatever MQTT client you prefer (*mosquitto_sub* or even an Android/iPhone app)
    1. for example, if using *mosquitto_sub*, you can simply execute `mosquitto_sub -h URL.IP -p URL.PORT -t video_analysis/message`, where **URL.IP** and **URL.PORT** are the URL and port number taken from your "mqtt" **URL** in step 3. above
