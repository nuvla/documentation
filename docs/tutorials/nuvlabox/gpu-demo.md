---
layout: page
title: GPU App at the Edge
nav_order: 1
parent: Tutorials
has_children: false
---

# Demo: AI accelaration using GPU, on an NVIDIA Jetson Nano

## Scenario

The goal of this demo is to demonstrate the GPU capabilities of Docker, and how to use these capabilities through Nuvla.

Since Docker 19, GPU usage when running a container can be achieved using `--gpus all` - this flag allows Docker to pass the GPU devices to the container.
This capability is only available to NVIDIA GPUs. While the Docker client is able to use the GPU flag, Docker Compose hasn't caught up yet. This means we can't natively use a Compose file to make use of the `--gpus` property.

Let's say we have a Compose file-defined application to be deployed from Nuvla. Given the aforementioned Docker limitation, we need to manually select the GPU devices and libraries from the host, and pass them to the container via the Compose file.

To know the correct devices and libraries, we can use the GPU discovery tool installed with NuvlaBox.

![gpuDemoSchema](/assets/img/gpu-demo-scheme.png){: :center}

## DIY: Step by step guide 


### Setup

For this demo we used an NVIDIA Jetson Nano. 

We also need a camera connected through USB to the selected device.

Finally, need a Nuvla account.

### Install the NuvlaBox Engine on the NVIDIA Jetson Nano

Follow the [NuvlaBox setup documentation](https://docs.nuvla.io/nuvlabox/nuvlabox-engine/quickstart.html) to connect your NVIDIA Jetson Nano to Nuvla. 

### Build the Application that uses GPU 

To know which GPU to use, and its libraries, we make use of the NuvlaBox GPU Peripheral Manager, which can be deployed with NuvlaBox as an optional module. 
In Nuvla, the NuvlaBox overview is similar to this: 

![gpuDemo](/assets/img/peripheral-manager-gpu.png){: :center}

In the list of peripherals, we find the GPU to be used and extract its information to build the following compose file

To use the GPUs, we need to specify the devices and volumes needed to use the GPU, in our Docker Compose file. It looks like this:

```yaml
version: '3.0'
services:
  darknet:
    image: 'franciscomendonca/darknet:1.0'
    ports:
      - "8000:8000"
    volumes: 
      - '/usr/local/cuda-10.0/:/usr/local/cuda-10.0/'
      - '/usr/lib/aarch64-linux-gnu:/usr/lib/aarch64-linux-gnu' 
      - '/usr/local/cuda/lib64:/usr/local/cuda/lib64'
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


As you can see, since we can not use `--gpus` in a Compose file (yet), we need to define the different host `devices` to be mapped into the container, alongside a mount for the folders where the GPU drivers and libraries are located, on the host - in this case, we pass the full /usr/bin/ folder, but we can pass only the specific sub-folders we require. 

With this, you can create your own Nuvla app, by following [these steps](http://localhost:4000/nuvla/add-apps).
 
### Deploy the App into the NVIDIA Jetson Nano

In Nuvla.io, go to the App Store and find the app called **"GPU Demo”**. We've pre-created one for your with the instructions from above. 

Click **“launch”** and a deployment modal will appear - select your NuvlaBox credentials. 

As we don't have environmental variables or files for this application, we can simply click **"Deploy"**.

At start, the app will download and build Darknet - this will take a while.
Afterwards, it will launch a web server with the video feed, and the app's dynamic URL will be filled in Nuvla. So at this point we can access the web interface:
    
    http://{IP of your machine}:5000    

And the interface should look something like this:


![gpuDemo](/assets/img/gpu-demo-interface.png){: :center}

You should see the output of the camera.

The application takes a frame every 5 seconds, so it might take a while to update. Afterwards,
a box should appear around any object in the frame.
