---
layout: page
title: Image Authorization Plugin
nav_order: 1
parent: More tools
has_children: false
---

# Image Authorization Plugin for Docker


**The problem to be solved**: you want to make sure that your container infrastructure (in the cloud or at the edge), only accepts signed Docker images from a specific Docker registry.

SixSq's Image Authorization Plugin is a Docker Plugin which makes sure  all Docker Registry-related requests are limited to trusted Docker images only, from a user-specified Docker Registry endpoint.

Docker and Notary tools are used to enforce and verify the Docker Registry and Image verification workflows.

![img-authz-plugin](/assets/img/img-authz-plugin.png){: .center-image }

## Installation

The plugin needs the configuration variables: `REGISTRY`, `NOTARY` and `NOTARY_ROOT_CA`. If you leave those empty, the plugin defaults to `docker.io` and `notary.docker.io`.

 - `REGISTRY`: is the _host:port_ of the registry to be authorized
 - `NOTARY`: is the _https://fqdn:port_ of the Notary server used for signing the images
 - `NOTARY_ROOT_CA`: is the raw public Certificate Authority certificate used for the Notary server TLS certificates 
 
You can either install the plugin from source, or from Docker Hub.

**NOTE:** please note that the plugin is **architecture specific**. Therefore, from hereon, <YOUR_CPU_ARCH> is the target device's CPU architecture.


### From source

To install the plugin from [the repo](https://github.com/SixSq/img-authz-plugin):

`make local_install REGISTRY=<registry> NOTARY=<notary-server> NOTARY_ROOT_CA='''<raw-ca-cert>'''`

(if you've already run `make build` and `make create`, then you can simply run
`make enable REGISTRY=<registry> ...`).

Add the following JSON key value to `/etc/docker/daemon.json`:

```json
"authorization-plugins": ["sixsq/img-authz-plugin:<YOUR_CPU_ARCH>"]
```

and run `kill -SIGHUP $(pidof dockerd)`


### From a Docker registry

**Only available for x86_64 and aarch64 CPU architectures**!

To get and install the plugin, simply run:

`docker plugin install sixsq/img-authz-plugin:<YOUR_CPU_ARCH> REGISTRY=<registry> NOTARY=<notary-server> NOTARY_ROOT_CA='''<raw-ca-cert>'''`

NOTE: you'll be prompted with some special access requests for the plugin (like access to the host network). Please reply `y` otherwise the plugin will not function correctly. If you'd like to avoid being prompted, you can run the command from above with `--grant-all-permissions`.


Add the following JSON key value to `/etc/docker/daemon.json`:

```json
"authorization-plugins": ["sixsq/img-authz-plugin:<YOUR_CPU_ARCH>"]
```

and run `kill -SIGHUP $(pidof dockerd)`


## Update the registries in a running plugin

First disable the plugin:

`docker plugin disable sixsq/img-authz-plugin:<YOUR_CPU_ARCH>`

Then set the new registries value:

`docker plugin set sixsq/img-authz-plugin:<YOUR_CPU_ARCH> REGISTRY=<registry> NOTARY=<notary-server> NOTARY_ROOT_CA='''<raw-ca-cert>'''`

Re-enable the plugin, and reload the Docker daemon:

`docker plugin enable sixsq/img-authz-plugin:<YOUR_CPU_ARCH> && kill -SIGHUP $(pidof dockerd)`


## Using a self-signed private registry

If you're using a private Docker registry with self-signed TLS certificates, **please remember** to add the client certificates to your Docker trust directory. 

To do this, please follow the steps at: https://docs.docker.com/registry/insecure/#use-self-signed-certificates

**NOTE:** using insecure Docker registries (without TLS) is not recommended and thus not covered by this plugin. Use it at your own risk.

## Plugin logs

The plugin logs are appended to the Docker daemon logs, and thus you can find them in your respective Docker logs' directory (for example, for Ubuntu you can do `journal -u docker`)


## Stop and uninstall the plugin

_(assuming the plugin name is sixsq/img-authz-plugin:<YOUR_CPU_ARCH>)_

Stop the plugin:
 1. `docker plugin disable sixsq/img-authz-plugin:<YOUR_CPU_ARCH>`
 2. Remove the `authorization-plugins` attribute from /etc/docker/daemon.json
 3. `kill -SIGHUP $(pidof dockerd)`
 
Uninstall the plugin:
 1. `docker plugin rm -f sixsq/img-authz-plugin:<YOUR_CPU_ARCH>`
 


## Developing, building and testing the plugin

Additional information for building and testing the plugin by yourself, can be found in the plugin's GitHub repository at [https://github.com/SixSq/img-authz-plugin](https://github.com/SixSq/img-authz-plugin).


---

Credits: this plugin is an adaptation of the work done in [https://github.com/crosslibs/img-authz-plugin](https://github.com/crosslibs/img-authz-plugin)





