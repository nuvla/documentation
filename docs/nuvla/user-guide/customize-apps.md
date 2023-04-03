---
layout: page
title: Customise Applications
parent: User Guide
grand_parent: Nuvla
nav_order: 6
---

# Customise Applications

Although standard, unmodified containers can be deployed through
Nuvla, you have seen that this is rather limiting because input
parameters cannot be provided and information generated within the
container (such as passwords) cannot be recovered.

Because of these limitations, most containers used from Nuvla have
been customised. The good news is that customising images is easy,
especially as Docker allows you to build directly from existing
containers.

## Contextualisation

Nuvla provides contextualisation information to deployed containers in
two ways: through environmental variables and via the standard Docker
API.

### Information Passed Into Container

A minimal set of environmental variables are passed to all deployed
containers. These are:

 - **NUVLA_ENDPOINT**: The endpoint of the Nuvla service that deployed
   the container.
 
 - **NUVLA_DEPLOYMENT_ID**: The deployment identifier of the
   deployment, taking the form of "deployment/uuid" where the "uuid"
   is a the full UUID of the deployment.
 
 - **NUVLA_API_KEY**: The API key of the API key/secret pair.
 
 - **NUVLA_API_SECRET**: The API secret of the API key/secret pair.

These environment variables allow the running container to access the
server to update the deployment state (e.g. to provide output
parameter values) and to access information contained in the
deployment (e.g. detailed information about requested data objects).

> **NOTE:** The API key/secret pair is a unique credential generated for
> each deployment. This allows the deployment to access the Nuvla
> service with the rights of the user. This credential is independent
> of the user's other credentials and can be revoked at any time. The
> credential is always deleted when the deployment terminates.

### Docker API

Nuvla extracts certain information from the deployment and passes this
information to Docker via its API when starting the container.

An important class of parameters extracted from the Nuvla application
definition is the set of ports exposed by the container. These ports
are mapped dynamically by Docker to ephemeral ports. The actual port
used can be discovered using the output parameters. For example,
if the tcp port 80 is exposed by the container, the actual port used
will be in the "tcp.80" output parameter. These parameters are useful
when defining the URL of the deployed service.

The second class of information extracted from the Nuvla application
definition relates to mounted volumes. When mount points are found in
selected `data-record` resources, they are extracted and passed to
Docker when starting the container.  The associated data should appear
automatically within the container after it has started.

## Information Passed Out of Container

Very frequently a running container must pass some information back
to the user. A container generating a random password or token for
accessing services within a container is a typical example. 

To do this, you can provide a list of output parameters when you define an application. Values for these output parameters can then be set by the container when it runs. Setting the values of output parameters can be done most easily via the Nuvla Python client API. See below for details.

## Uploading Containers

Nuvla can use any image that has been uploaded to any Docker repository. By default, Nuvla expects Docker Hub.  If you have an account on Docker Hub, you can create an organisation to hold your "repositories", each of which holds multiple tagged versions of an image.

The process is straightforward:

 1. Use the `docker login` command to log into the Docker Hub.
 1. Build your image with `docker build`.
 1. Tag for image with `docker tag`, providing a tag name.
 1. Upload the image with `docker push`.

At this point, the image will be visible in the Docker Hub and can then be used from Nuvla.  

If your Docker image is protected by a username/password, just create a Docker Registry credential and reference these credentials in the app. Nuvla will then use these credentials on behalf of the user when deploying the protected Docker images.

To use this API you must ensure that your customised image contains Python (2.7+ or 3.x). You can then install the Nuvla Python API with
the command `pip install nuvla-api`.

## Customised Jupyter Notebook

The Jupyter notebook demo contains the following
customisations:

 1. Installation of Python, `pip`, and the Nuvla Python API.
 
 1. Accessing of the deployment resource to recover detailed
    information about referenced `data-record` resources.
    
 1. Generating a token to protect the deployed notebook and passing
    this information back to the user through an output parameter.

We will show how each of these customisations are accomplished in the
`Dockerfile` and in a Python script added to the container.

The `Dockerfile` used to generate the customised Jupyter Notebook
is duplicated below:

{% include code_snippet.md file='code-sample/dockerfile-jupyter' language=docker %}

This `Dockerfile` is short and straightforward. It:

 - Installs Python, `pip`, and the Nuvla Python API,

 - Adds a Python script (`link-data.py`) that organises the referenced
   data objects, and

 - Adds a script (`start-service.sh`) that replaces the entry point of
   the parent image.

All the detailed changes are encapsulated in the two included scripts.

The simpler of the two scripts is `start-service.sh`.  The contents are shown below:

{% include code_snippet.md file='code-sample/start-service.sh' language=sh %}

This script calls the `link-data.py` script, recovers the generated
token to access the notebook, and then starts Jupyter Notebook using
this token.

The slightly more complicated script `link-data.py` is duplicated
below:

{% include code_snippet.md file='code-sample/link-data.py' language=python %}

The first part of the script simply includes the Nuvla Python API and
a few other dependencies, ensures that the expected environmental
variables are set, and then initialises the Nuvla Python client. This
is standard boilerplate code that can be duplicated for any customised
image.

The second section reads the data object metadata and provides links
to the directory where the Jupyter Notebook expects to find files for
analysis. Additionally, the code organises the links into a hierarchy
based on the metadata; this organisation is a more logical
organisation of these files for users in this scientific domain.
Other domains will have their own metadata and will want to organise
their files differently.

The last section generates a random access token, saves this in a file
for the `start-service.sh` script, and then writes this value to the
`jupyter-token` output parameter.  This pattern can be repeated for
any output parameters that you define for your containers.

## Hands On Exercises

Choose an image to customise via output parameters and/or access to
data managed through Nuvla. Use the Jupyter Notebook example as a
guideline for performing this customisation.

You might consider using one of the following images:

 1. **nginx**: Mount data selected through Nuvla into the web server's
     root directory.

 1. **rocker/rstudio-stable**: Generate a random password for the
    image and publish it via an output parameter.

In all cases, you'll need to perform the following tasks:

 1. Create a `Dockerfile` to incorporate your changes into a new
    image.

 1. Build the container and test the image locally.

 1. Upload the image to a public repository.

 1. Create an app within Nuvla that references your modified
    container, adding output parameter definitions when appropriate.

 1. Launch the application through Nuvla and verify that the service
    behaves as expected.

If the container doesn't start as you expect, you may need to access
the logs from Docker Swarm directly to help with the debugging. 
