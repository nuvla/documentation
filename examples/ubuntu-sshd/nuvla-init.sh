#!/bin/sh

#
# verify that an SSH key is available
#

if [ -z "${AUTHORIZED_SSH_KEY}" ]; then
    echo "AUTHORIZED_SSH_KEY environment variable must be set"
    exit 1
fi

#
# configure root user with the key
#

mkdir -p /root/.ssh
chmod 0700 /root/.ssh
echo "${AUTHORIZED_SSH_KEY}" > /root/.ssh/authorized_keys
echo "\n" >> /root/.ssh/authorized_keys

#
# start SSH daemon in the foreground
#

rm -f /etc/ssh/ssh_host_*
dpkg-reconfigure openssh-server
/usr/sbin/sshd -D -e
