# Jupyter Notebook

This example provides a minimal Jupyter Notebook that can be accessed
via a web browser.

To build the container:

```sh
docker build . --tag nuvla/jupyter
```

To run the container:

```sh
docker run -d -p :8888 nuvla/jupyter
```

You can then access the container using a URL of the form:

```
https://host:port/?token=...
```

where the host is given by the Swarm cluster, port is the mapping for
port 8888, and token is the value written to the container log (and as
a Nuvla output parameter). The container uses a self-signed
certificate.

Use the standard Docker commands to stop and remove the container.

