# CentOS SSH

This example provides a minimal CentOS 7 container that can be
accessed via SSH.

To build the container:

```sh
docker build . --tag centos-sshd
```

To run the container:

```sh
docker run -d -p 2222:22 -e AUTHORIZED_SSH_KEY='your public key' centos-sshd
```

You can then access the container with the command:

```sh
ssh -p 2222 root@localhost
```

Use the standard Docker commands to stop and remove the container.

