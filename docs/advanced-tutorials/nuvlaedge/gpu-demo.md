---
layout: page
title: GPU App at the Edge
nav_order: 3
parent: Advanced Tutorials
has_children: false
---

# Demo: AI acceleration using GPU, on an NVIDIA Jetson Nano

## Scenario

The goal of this demo is to demonstrate the GPU capabilities of Docker, and how to use these capabilities through Nuvla.

Since Docker 19, GPU usage when running a container can be achieved using `--gpus all` - this flag allows Docker to pass the GPU devices to the container.
This capability is only available to NVIDIA GPUs. While the Docker client is able to use the GPU flag, Docker Compose hasn't caught up yet. This means we can't natively use a Compose file to make use of the `--gpus` property.

Let's say we have a Compose file-defined application to be deployed from Nuvla. Given the aforementioned Docker limitation, we need to manually select the GPU devices and libraries from the host, and pass them to the container via the Compose file.

To know the correct devices and libraries, we can use the [GPU discovery tool](https://github.com/nuvlaedge/peripheral-manager-gpu) installed with NuvlaEdge.

![gpuDemoSchema](/assets/img/gpu-demo-scheme.png){: :center}

## DIY: Step by step guide 


### Setup

For this demo we used an NVIDIA Jetson Nano. 

We also need a camera connected through USB to the selected device.

Finally, need a Nuvla account.

### Install the NuvlaEdge Engine on the NVIDIA Jetson Nano

Follow the [NuvlaEdge setup documentation](/nuvlaedge/installation) to connect your NVIDIA Jetson Nano to Nuvla. 

### Build the Application that uses GPU 

To know which GPU to use, and its libraries, we make use of the NuvlaEdge GPU Peripheral Manager, which can be deployed with NuvlaEdge as an optional module. 
In Nuvla, the NuvlaEdge overview is similar to this: 

![gpuDemo](/assets/img/peripheral-manager-gpu.png){: :center}

In the list of peripherals, we find the GPU to be used and extract its information to build the following compose file

To use the GPUs, we need to specify the devices and volumes needed to use the GPU, in our Docker Compose file. It looks like this:

```yaml
version: '3.0'
services:
  darknet:
    image: 'sixsq/darknet-object-detection:1.0'
    ports:
      - "8090:8090"
      - "8070:8070"
    devices:
      - '/dev/nvhost-gpu:/dev/nvhost-gpu'
      - '/dev/nvhost-as-gpu:/dev/nvhost-as-gpu'
      - '/dev/nvhost-ctrl:/dev/nvhost-ctrl'
      - '/dev/nvhost-ctrl-gpu:/dev/nvhost-ctrl-gpu'
      - '/dev/nvhost-prof-gpu:/dev/nvhost-prof-gpu'
      - '/dev/nvmap:/dev/nvmap'
      - '/dev/video0:/dev/video0'
    environment:
      - LD_LIBRARY_PATH=:/usr/lib/aarch64-linux-gnu:/usr/lib/aarch64-linux-gnu/tegra:/usr/local/cuda/lib64:/usr/local/cuda/lib64:/root/opencv-3.4.1/build/lib
```


As you can see, since we can not use `--gpus` in a Compose file (yet), we need to define the different host `devices` to be mapped into the container, alongside a mount for the folders where the GPU drivers and libraries are located, on the host - for this
tutorial we don't need to pass any libraries, as the container itself has the libraries we need, already compiled for this device. 

With this, you can create your own Nuvla app, by following [these steps](/nuvla/user-guide/add-apps).

### Deploy the App into the NVIDIA Jetson Nano

In Nuvla.io, go to the Marketplace and find the app called **"GPU Demo”**. We've pre-created one for your with the instructions from above. 

Click **“launch”** and a deployment modal will appear - select your NuvlaEdge credentials. 

As we don't have environmental variables or files for this application, we can simply click **"Deploy"**.

At start, the app will load the model. Afterwards, it will launch a web server with the video feed, and the app's dynamic URL will be filled in Nuvla. So at this point we can access the web interface:
    
![gpuDemo](/assets/img/deployment-ready-gpu-demo.png){: :center}

  
And the interface should look something like this:


![gpuDemo](/assets/img/output-gpu-demo.png){: :center}

You should see the output of the camera.

A box should appear around objects that the model was able to detect, with a label and a percentage of certainty.


