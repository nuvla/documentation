#!/bin/bash

#
# generate a random access password
#

password=`cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 15 | head -n 1`
echo "generated password: ${password}"
echo -n ${password} > /root/password.txt

#
# run Nuvla integration
#

python /usr/local/bin/nuvla-integration.py
rm -f /root/password.txt

#
# start rstudio
#

export PASSWORD=${password}
/init
