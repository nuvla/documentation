---
layout: page
title: Add modules with Python
nav_order: 1
parent: Tutorials
has_children: true
---

# Adding Applications with the Python Library ([Clara](/clara))

## Adding new module

Adding an application to Nuvla is straightforward; you simply must
reference an existing Docker image and provide some simple metadata
for the application.

For example, the Jupyter Notebook application was added with the
following Python script.

{% include code_snippet.md file='/code-sample/add-jupyter-notebook.py' language=python %}

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



