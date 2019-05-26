#!/bin/bash

#
# generate a random access token
#

token=`cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 15 | head -n 1`
echo "generated access token: ${token}"
echo -n ${token} > /home/jovyan/token.txt

#
# run Nuvla integration
#

python /usr/local/bin/nuvla-integration.py
rm -f /home/jovyan/token.txt

#
# force use of SSL with generated certificate
#

export GEN_CERT=yes

#
# start notebook
#

/usr/local/bin/start-notebook.sh --NotebookApp.token=${token}
