---
layout: default-edit
title: Operations and Maintenance
parent: Production Nuvla Deployment
grand_parent: Dave - Administrator
nav_order: 6
---

Nuvla Operations and Maintenance
================================

This section suggests best practices on how to operate and maintain the production version on Nuvla, with a special focus on [backups](#nuvla-backups) and [updates](#nuvla-updates) procedures.

## Nuvla Backups

Here is a suggestions on how to backup the stateful parts of the service.

### Configuration for Backups

To configure backups to S3 for the Elasticsearch container(s), provide a secrets configurations similar to the following in your `docker-compose.yml` file:

```
version: '3.3'

secrets:
  s3_access_key:
    file: ./secrets/s3_access_key
  s3_secret_key:
    file: ./secrets/s3_secret_key

services:
  es:
    image: nuvla/es
    environment:
      - cluster.name=elasticsearch
      - xpack.security.enabled=false
      - discovery.type=single-node
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ports:
      - "9200:9200"
    deploy:
      restart_policy:
        condition: on-failure
        delay: 5s
    secrets:
      - s3_access_key
      - s3_secret_key
    volumes:
      - esdata:/usr/share/elasticsearch/data

volumes:
  esdata:
    driver: local
```

When deploying, add your S3 access and secret keys to the referenced files in the `secrets` subdirectory.  The files will appear in the directory `/run/secrets/` inside the container and will be made available to the Elasticsearch S3 repository plugin.

You then must create a bucket on your S3 service to hold your Elasticsearch backups. This can be on any supported S3 service and can be named however you like. **The bucket must exist before you can add the necessary S3 configuration to Elasticsearch.**

After the Elasticsearch container has been deployed and you have created the S3 bucket, you must add a repository definition to the database. Do the following:

```sh
curl -X PUT "localhost:9200/_snapshot/s3_backup" \
     -H 'Content-Type: application/json' -d @repo.json
```

where the file contains:

```json
{
    "type" : "s3",
    "settings" : {
        "bucket" : "nuvla-es-backup",
        "endpoint" : "sos-ch-dk-2.exo.io"
    }
}

```

The "settings" map must contain the configuration parameters for your S3 service.  See the Elasticsearch S3 Repository Plugin [documentation](https://www.elastic.co/guide/en/elasticsearch/plugins/current/repository-s3.html) for valid options.

Verify the configuration by triggering a snapshot. Use the command:

```sh
curl -X PUT "localhost:9200/_snapshot/s3_backup/snapshot_1?wait_for_completion=true"
```

The result will tell you whether the snapshot succeeded or failed. The status of all snapshots can also be obtained directly from Elasticsearch:

```
curl "localhost:9200/_cat/_snapshots/s3_backup"
```

This will list all snapshots and information on the success/failure of each.

It is recommended to use names based on dates for the snapshot identifiers ("snapshot_1" in the example above).

Adding a cron entry to the Docker host machine is the easiest setup for periodic backups.  An example of such a script (`/usr/local/sbin/nuvla-backup.sh`) is:

```sh
#!/bin/bash

export LANG=en_US.utf8

set -e

CONFIG=/etc/nuvla/nuvla-es-backup.conf

source $CONFIG

BACKUP_TIMESTAMP=${BACKUP_TIMESTAMP:-"/var/log/nuvla-es-backup-timestamp"}

# Note that snapshot name must be lowercase (required by ES).
BACKUP_NAME=snapshot.$(date --utc "+%Y-%m-%dt%H%Mz")

ES="${ES_HOST-localhost}:${ES_PORT-9200}"
set +e
output=$(curl -sSf -XPUT http://$ES/_snapshot/s3_backup/$BACKUP_NAME?wait_for_completion=true 2>&1)
rc=$?
set -e
if [ "$rc" -eq "0" ]; then
    echo "Nuvla ES Backup Successful. $BACKUP_NAME. $output"
    touch ${BACKUP_TIMESTAMP}
else
    echo "FAILURE $BACKUP_NAME: $output"
fi
exit $rc
```

The corresponding cron entry would be similar to:

```
30 */1 * * * elasticsearch (date --utc; /usr/local/sbin/nuvla-backup.sh) >> /var/log/nuvla-backup-cron.log 2>&1
```

for hourly incremental backups. Adjust as necessary for your case and be sure to touch the output log file.

Generally, the `/etc/nuvla/nuvla-es-backup.conf` configuration file will not be needed, but can contain the following fields:

```sh
ES_HOST=localhost
ES_PORT=9200
BACKUP_TIMESTAMP=/var/log/nuvla/nuvla-backup-timestamp
```

The above script will produce an output log and a timestamp file. Both can be used to monitor the backup activity.

If you do not have access to the host running Elasticsearch, then you can create a container to trigger the snapshots via `curl`.  This can then be run as a service with a restart policy (e.g. any, delay=4h, max-attempts=0) for periodic snapshots.

### Restoring from Backups

To restore the state of the system after a catastrophic failure, you must recover the Elasticsearch and Zookeeper states from a backup.

**Restoring Elasticsearch**

To restore the Elasticsearch and Zookeeper services from a snapshot, do the following:

 1. Shutdown the Nuvla core service and the database services.
 1. Remove the volumes associated with the database services with Docker.
 1. Deploy with Docker a new set of database services, attaching them as before to the nuvla-backend network. 
 1. Once the database services are available, reconfigure Elasticsearch for the S3 backups.
 1. Verify that the backups are visible through the newly deployed
    services by listing the snapshots.
 1. Choose the snapshot to recover, and then trigger the restore with
    Elasticsearch. 

The command to restore from a backup is:

```
curl -X POST "localhost:9200/_snapshot/s3_backup/snapshot_1/_restore"
```

where "snapshot_1" is replaced with your snapshot identifier. 

### Restoring Zookeeper

Zookeeper is used as a locking queue and a distributed election for distributors. All asynchronous jobs in Nuvla are processed via Zookeeper. 

After restoring the Elasticsearch indexes, you must then use the Elasticsearch information to reconstitute the Zookeeper state.  To do so you need to run a side container connected on nuvla-backend network to re-create jobs entries.

> NOTE: The nuvla-backend must be created as an "attachable" network. If it isn't you won't be able to access the Elasticsearch and Zookeeper services from the side container.

To get some help with this command run:

```
docker run --network nuvla-backend \
           --entrypoint /app/job_restore.py \
           nuvladev/job:restore-zk-script -h
```

To then restore the data run this one,

```
docker run --network nuvla-backend \
           --entrypoint /app/job_restore.py \
           nuvladev/job:restore-zk-script
```

if you need to change endpoints do it with docker run arguments.

### Restarting Services

Once the database services have been recovered, you can then restart the core Nuvla services normally.


## Nuvla Updates

This section describes how to update the service.

TODO...
