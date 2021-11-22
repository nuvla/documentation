---
layout: nuvlabox
title: Custom Peripheral Managers
nav_order: 2
parent: Contributing
has_children: false
grand_parent: v2
---

Building your own NuvlaBox Peripheral Manager
========

There is a set of natively supported peripheral managers that you can opt to add to your NuvlaBox at installation time. Those are also open-source and can be found on GitHub [here](https://github.com/nuvlabox?q=peripheral-manager-).

NuvlaBox Peripheral Managers are completely optional and should only be used if you'd like to have an automated mechanism to discover, register and manage peripheral devices that are attached to your NuvlaBox. Once registered, these peripheral devices can be visualized, managed and sometimes even directly controlled from Nuvla (like USB webcams).

Due to the wide variety of IoT sensors/actuators and generic peripheral devices, it would be an impossible task for us at SixSq to develop all the NuvlaBox Peripheral Managers to support every single peripheral out there.

## **This is where you come in!!**
{:style="text-align: center;"}

Let's say you need a new NuvlaBox Peripheral Manager for a specific peripheral device. There are two ways you can go about it:

 1. email us at [Support](mailto:support@sixsq.com) with your request and we'll try our best to accommodate your needs
 
 2. develop your own NuvlaBox Peripheral Manager microservice
 
If you go option 2., you should host your code in your own public/private repository, and then deploy alongside the NuvlaBox Engine. 

We support community-built NuvlaBox Peripheral Managers, so you can let us know about it and we can work together to make it official and available off the shelf from Nuvla!  

---

Building a new NuvlaBox Peripheral Manager is quite simple. We have built a transparent and generic REST API within the NuvlaBox Engine core installation that allows you to register and manage your peripheral devices in the Nuvla-NuvlaBox ecosystem without any in-depth knowledge nor code dependencies.

There are only **2 requirements** for having your microservice functioning correctly as a NuvlaBox Peripheral Manager:

 a. _Your microservice needs to be on the same Docker network as the [NuvlaBox Agent component](https://github.com/nuvlabox/agent). This is usually guaranteed when you deploy all components at once, as described in the [Installation Quickstart](/nuvlabox/nuvlabox-engine/quickstart.html)_
 
 b. _Your code must manage the NuvlaBox peripheral devices through the management interface provided by the NuvlaBox Agent on port 80. The specification for this API can be found [here](https://github.com/nuvlabox/agent#manage-nuvlabox-peripherals)_
 

Mocking a NuvlaBox Peripheral Manager
---------

Here's an example of a mock peripheral manager, that you can use as a starting point to build your own.


### Step 1 

Create a working environment (local folder, GitHub repository, etc.) where you can put your code. 

We have created a [peripheral manager mock](https://github.com/nuvlabox/peripheral-manager-mock) for this exercise.


### Step 2

In that working environment, create your custom peripheral manager script. In our case, we're using a simple Shell script, so let's name our main manager script `peripheral-manager-mock.sh`.

_peripheral-manager-mock.sh:_
{% include code_snippet.md file='/nuvlabox-peripherals/peripheral-manager-mock_1.sh' language=shell %}

#### Step 2.1 

**Since this is an example**, we make certain assumptions. One of those is that we assume we know in advance the unique local identifier of our mock peripheral device.

_peripheral-manager-mock.sh:_
{% include code_snippet.md file='/nuvlabox-peripherals/peripheral-manager-mock_2.sh' language=shell %}

**IMPORTANT**: unless you have a very special case, you should try to infer the peripheral identifier dynamically.


### Step 3

Our script needs to interact with the NuvlaBox Agent API for managing the mock peripheral, so let's build a couple of functions to help us to that.

**NOTE**: these two functions are generic, so in most cases you can literally copy and paste them into your own scripts.

_peripheral-manager-mock.sh:_
{% include code_snippet.md file='/nuvlabox-peripherals/peripheral-manager-mock_3.sh' language=shell %}


### Step 4

Now to the actual peripheral discovery part of our script. According to our assumptions, our mock peripheral can be discovered via the existence of a certain file in the filesystem - _/dev/video0_. 

So it's quite a simple use case - all we need to do is to continuously watch that file, and trigger one of the functions from [Step 3](#step-3) above whenever the file is created or deleted.

The `inotify-tools` package gives us a very useful tool for this purpose: `inotifywait` 
 
So our main code block would look something like this:
```shell
inotifywait -m -e create -e delete /dev |
while read -r directory event file
do
  # We assume we only care about /dev/video0
  if [[ "${file}" = "video0" ]]
  then
    # If the mock peripheral was plugged in, then we want to register the new NuvlaBox peripheral
    # otherwise, we want to remove it
    if [[ "${event}" = "CREATE" ]]
    then
      #...do something
    fi

    if [[ "${event}" = "DELETE" ]]
    then
      #...do something
    fi
  fi
done
```

Whenever the mock peripheral device is plugged, the CREATE event will be triggered and we'll need to:
 1. build the nuvlabox-resource JSON payload for that peripheral, according to the schema represented in [Nuvla API schema for NuvlaBox peripherals](https://nuvla.io/ui/documentation/nuvlabox-peripheral-1-1)
 2. send a POST request to the NuvlaBox Agent API, to register the new peripheral
 
And, whenever the mock peripheral is unplugged, the DELETE event will be triggered, so we need to:
 1. send a DELETE request to the NuvlaBox Agent API with the corresponding peripheral identifier
 
**Here's our final _peripheral-manager-mock.sh_ script!**

_peripheral-manager-mock.sh:_
{% include code_snippet.md file='/nuvlabox-peripherals/peripheral-manager-mock_4.sh' language=shell %}


### Step 5

Now that we've built our custom NuvlaBox Peripheral Manager for Mock peripherals (congrats), it's time to package our code.

Let's build a Docker image that can be installed with the rest of the NuvlaBox Engine component.

We want it to be **small**. So let's use Alpine, install our dependencies(`jq` and `curl` for the NuvlaBox Agent API functions, plus `inotify-tools` for watching the mock peripheral file), and copy our script into it.

Build the following Dockerfile.

_Dockerfile:_
{% include code_snippet.md file='/nuvlabox-peripherals/Dockerfile' language=makefile %}

### Step 6

We are now ready to build our Docker image.

#### Simple build

Just run `docker build . -t <your_image_name>`. And the push the Docker image: `docker push <your_image_name>`.

#### Multi-platform build

Make sure you have `docker buildx`. If not, have a look at: https://docs.docker.com/buildx/working-with-buildx/

```shell
# Create the build context:
docker buildx create --name multiplatformbuilder --use

# Bootstrap the context and make sure you're targeted platforms are supported by it
docker buildx inspect --bootstrap

# Build and push the Docker image
# Feel free to replace the platforms below by the ones you're targeting
docker buildx build --platform linux/arm/v6,linux/arm/v7,linux/amd64,linux/arm64 -t <your_image_name> . --push
```

### Step 7


We need a compose file to go alongside the other NuvlaBox Engine compose files. Remember to use **your Docker image** from [Step 6](#step-6), and to bind mount (read-only) the host's _/dev_ directory.

_docker-compose.mock.yml:_
{% include code_snippet.md file='/nuvlabox-peripherals/docker-compose.mock.yml' language=yaml %}


### Step 8

Finally, we can launch the custom NuvlaBox Peripheral Manager for Mock peripherals.

Just add `-f docker-compose.mock.yml` to your NuvlaBox Engine installation command (as described in [NuvlaBox Installation](/nuvlabox/nuvlabox-engine/quickstart.html) and that's it!

**NOTE**: if you want to deploy your custom NuvlaBox Peripheral Manager after the NuvlaBox Engine has been installed, then please make sure that your container runs within the same Docker network as the NuvlaBox Agent. To do so, check in which Docker network your NuvlaBox Agent is running, via `docker network ls` and `docker inspect <agent_container_id>`, and add that network to your peripheral manager container, via the Compose property `networks` (see [Docker Compose docs](https://docs.docker.com/compose/compose-file/#networks)).

