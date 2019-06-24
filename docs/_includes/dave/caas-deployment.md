Container as a Service Infrastructures
============================

Container as a Service (CaaS) are used to host the Nuvla micro-services, but also receive user containers. We currently use Docker Swarm as our default CaaS.

Docker Swarm is also integrated in the NuvlaBox, SixSq's edge software solution.

Nuvla also supports an advanced data management feature. For this to work, the CaaS used When deploying containers must include an S3 service and a distributed file system.  The [optional infrastructure service](optional-services.html) page contains instructions on how to install these optional services. 

Before starting, review the entire installation procedure.  The [nuvla/deployment](https://github.com/nuvla/deployment) GitHub repository contains a [Swarm folder](https://github.com/nuvla/deployment/tree/master/swarm) with Swarm related files that will help you deploy and configure your Docker Swarm cluster.  You may need to customise the provided scripts, configurations, and Docker Compose files for your deployment.

## Docker Swarm Cluster

Docker Swarm clusters provide the computational platforms that Nuvla uses to deploy container-based applications, including Nuvla itself.

A number of methods can be used to deploy a Docker Swarm cluster.  See the [Docker Swarm documentation](https://docs.docker.com/engine/swarm/) for an overview of Docker Swarm and how to deploy it.

You may want to consider [Docker Machine](https://docs.docker.com/machine/) for installation; it automates the deployment of a Docker Swarm cluster on a cloud infrastructure.

The nuvla/deployment repository contains a script (`deploy-swarm-exoscale.sh`) to deploy a Swarm cluster with Docker Machine. Clone this repository:

    git clone https://github.com/nuvla/deployment.git

to a machine that will be convenient for managing your cluster.

This script uses Docker Machine to deploy a Swarm cluster on the [Exoscale](https://exoscale.ch) cloud. Customise this script to change the cloud driver or the sizes of machines deployed.

In your cloned repository, descend into the `swarm` subdirectory and copy `env-example.sh` to `env.sh`. 

    cd deployment/swarm
    cp env-example.sh env.sh

Edit this file, changing the values of the variables to customize your installation. The `SSH_KEY` and `EXOSCALE_*` variables are the most important for the Swarm deployment.

Docker Machine uses SSH to communicate with the virtual machines of the cluster. By default the key `${HOME}/.ssh/id_rsa` will be used (or created if it does not exist). If you want to use a different key, then set the environmental variable `SSH_KEY` in the `env.sh` file.

> **WARNING**: Use an SSH key **without** a password. If you use one with a password, you will be prompted for it, repeatedly. To generate a new SSH key without a password just set SSH_KEY to a file that does not exist.

After your changes, run:

    source env.sh

to set all of the environmental variables for the Swarm management script. 

The command to use to create the cluster is:

    ./swarm-deploy-exoscale.sh deploy 3

This creates a cluster with one master and two workers (three nodes in total). If you do not provide the second argument, it defaults to one.

The size and number of worker nodes to deploy depends entirely on the foreseen workload. The script uses "Large" instances that have 4 vCPUs, 8 GB RAM, and 50 GB disk.

You will want to note the IP addresses of the Docker Swarm master and workers (if any). You can recover these IP addresses by running the command `docker-machine ls` if necessary.

You can access your machines with:

    docker-machine ssh dockermachine-1556097484    

using the name of the machine provided in the machine listing. This may be a non-root account; to become root use the command `sudo su -`.

> **WARNING**: This procedure creates a `docker-machine` security group in [Exoscale](https://exoscale.ch) associated to the Docker virtual machines. However, this security group does not open the default ports used to map to deployed containers. These start from `30000`. Therefore, in order to reach from the Internet services running in containers deployed in the Swarm cluster at Exoscale, you have to update the security group to allow incoming connectivity on these ports (say 30000-32000).

To tear down the Swarm cluster use the command:

    ./swarm-deploy-exoscale.sh terminate

This will terminate all the machines in your Swarm cluster. Use with care.
