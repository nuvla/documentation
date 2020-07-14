---
layout: page
title: GPU Application Demo
nav_order: 1
parent: Tutorials
has_children: false
---

# Demo: AI accelaration using GPU

## Scenario

The goal of this demo is to demonstrate the GPU capabilities of Docker, and how to use these capbilities through Nuvla.

Since Docker 19, GPU usage when running a container can be achieved using --gpus all - this flag allows Docker to pass the GPU devices to the container.
This capability is only available to Nvidia GPUS. While the Docker client is able to use the GPU flag, Docker Compose hasn't caught up yet. This means we can't
use a docker-compose command to pass the GPU. 

We'll deploy a Docker container through Nuvla. To be able to use the GPU, we need to specify the devices and the libraries that are used by the GPU, and pass them through with Docker-Compose.

To know the correct devices and libraires, you can use the GPU discovery tool installed with NuvlaBox.

## DIY: Step by step guide 

For this demo we used a Nvidia Jetson Nano, but you might run this application on a computer with a Nvidia GPU, the correct drivers, and CUDA libraries that need to be installed, as well as Docker. 

Also, you'll need a camera connected through USB to the selected device.

To be able to deploy the application we also need a Nuvla account.

## Setup

Follow the NuvlaBox setup to connect your device to Nuvla. 

## Docker-Compose with GPU

As described above, Docker-Compose has no command to use de GPU directly. 
To use it we need to specify the run command in our Docker-Compose file. It looks like this:

```yaml
version: '3.0'
services:
    darknet:
        image: 'franciscomendonca/darknet:1.0',
        ports:
            - "5000:5000"
        devices:
            - /dev/nvidiactl
            - /dev/nvidia-uvm
            - /dev/nvidia0
        volumes:
            - /usr/bin/:/usr/bin/
```

As you can see, to be able to use the GPU of the device, through Docker-Compose we need to pass the device path - using the devices part - and
the folders where the drivers and libraries are located - using the volumes. In this case, we pass the full /usr/bin/ folder, but you can pass
only the folders you require.

## Deployment

In Nuvla.io, go to the App Store and find the app called **"GPU Demo”**. Click **“launch”**
A panel with appear - select your NuvlaBox credentials. 
As we don't have environmental variables or files, you can click **"Deploy"**

At start, the app will download and build Darknet - this will take a while.
Afterwards, it will launch the web server, so at this point you can access the web interface:
    
    http://{IP of your machine}:5000

You should see the output of the camera.

The application takes a frame every 5 seconds, so it might take a while to update. Afterwards,
a box should appear around objects in the frame.
