---
layout: default
title: Adding Applications
parent: Developer Training
grand_parent: Training
nav_order: 8
---

Adding Applications
===================

## Demonstration: Add new module to Nuvla (Clara)

Adding an application to Nuvla is straightforward; you simply must
reference an existing Docker image and provide some simple metadata
for the application.

For example, the Jupyter Notebook application was added with the
following Python script.

```python
{% include_relative code/add-jupyter-notebook.py %}
```

The first important field to point out is the image definition.  This
looks like the following:

```python
"image": {"repository": "sixsq",
          "image-name": "gssc-jupyter",
          "tag": "latest"},
```

The repository, image-name, and tag are exactly the values that you
would use to start the image with Docker. If the image is an
"official" image from Docker, then simply leave out the "repository"
field.  The "repository" can also contain the server address, if you
are not using the Docker Hub.

> **WARNING**: Only open repositories are supported at the moment. You
> cannot use repositories that require authentication.

The second important field is "output-parameters". These list the
values that will be set by the container itself.  A common use of
output parameters is to provide authentication tokens or passwords, as
is the case for the Jupyter Notebook.

The third important field is the "ports".  This field lists the ports
that are exposed by the container.  These ports will be mapped
automatically to ephemeral ports.  The actual port mappings can be
recovered from the output parameters.  For example, a port definition
like the following:

```python
"ports": [{"protocol": "tcp",
           "target-port": 8888}] 
```

will produce the output parameter "tcp.8888" which will contain the
actual port.

Fourth, the application developer can provide a list of URL patterns
that is used by the UI (or other clients) to construct URLs to the
application services.  For the Jupyter Notebook, the value is:

```python
"urls": [["jupyter", "http://${hostname}:${tcp.8888}/?token=${jupyter-token}"]],
```

Note the syntax for referencing the values of output parameters. The
use of output parameter values allows the developer to specify the
URLs independently of a particular deployment.

Last, the application developer can provide a list of accepted content
types for the application:

```python
"data-accept-content-types": ["text/plain", "application/octet-stream"]
```

This allows the UI (and other clients) to associate appropriate data
formats with a given application. 

## Hands on: Add new module to Nuvla (Clara)

Try to define your own application within Nuvla, using an existing
docker image.  For example, you might try a web server: 

```python
{% include_relative code/add-nginx.py %}
```

This will deploy nginx and should allow you to see the standard
welcome page. If you have an image that you use frequently, you might
try to define an application in Nuvla with that image.

Some questions you might ask about the application definitions:

 - What happens if you don't define the accepted data types?

 - Is the data you selected actually visible?

 - What limitations do you see when using an standard Docker image
   with Nuvla? 
