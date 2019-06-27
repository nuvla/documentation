#!/bin/bash -xe

# create links for requested data objects
/root/link-data.py

token=$(cat /root/token.txt)

# start service in the foreground with logging to console
cd /gssc
jupyter lab --ip=0.0.0.0 --allow-root --no-browser --NotebookApp.token=$token
