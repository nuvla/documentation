---
layout: nuvlaedge
title: Docker resource limits (Linux)
nav_order: 6
description: "Limit resource usage from docker daemon configuration"
parent: Advanced Tutorials
has_children: false
---

# Dockerd resource usage limitations

In Docker environments, the most reliable way of limiting resource usage is by encapsulating 
the Docker daemon and assigning all the containers to a pre-defined resource slice

Requirements:

- Linux based OS
- Package: `cgroup-toolsV2`

### 1. Create Slice file
Create a `.slice` file, for example:
```shell
touch /etc/systemd/system/<slice_name>.slice
```

```ini
[Unit]
Description=Slice that limits docker resources
Before=slices.target

[Slice]
CPUAccounting=true
CPUQuota=200%
#Memory Management
MemoryAccounting=true
MemoryLimit=500M
```


### 2. Load the slice into systemctl

```shell
sudo systemctl start <slice_name>.slice
```


### 3.1 Dockerd Slice
Assign slice as default for all containers.

Edit docker daemon config file:
```shell
sudo vim /etc/docker/daemon.json
```

Add the following configuration:
```json
{
  "cgroup-parent": "<slice_name>.slice"
}
```


### 3.2. Container slice
It is also possible to assign specific slices to containers by using the `cgroup-parent` attribute
when running the container:
```shell
docker run --rm --cgroup-parent=<slice_name>.slice hello_world
```


### 4. Restart dockerd
```shell
sudo systemctl restart docker
```


### Special Case (RaspberryPi)
Cgroups for RaspberryPi OS have default limitations due to resource constraints. Memory management
is disabled by default. To enable it:

Edit the file `/boot/cmdline.txt` and add:

```shell
cgroup_memory=1 cgroup_enable=memory
```

Then, reboot the device and memory management will be enabled. 

