#!/usr/bin/env python

import sys
import os
import random
import string
import uuid
from nuvla.api import Api

deployment_params_filter="deployment/href='{}' and name='{}'"

#
# Read the configuration from the environment.
#

endpoint = os.getenv('NUVLA_ENDPOINT')
api_key = os.getenv('NUVLA_API_KEY')
api_secret = os.getenv('NUVLA_API_SECRET')
deployment_id = os.getenv('NUVLA_DEPLOYMENT_ID')

#
# Ensure complete environment or bail out.
#

if (endpoint is None or
    api_key is None or
    api_secret is None or
    deployment_id is None):
  print("missing required configuration information; skipping data link configuration...")
  sys.exit()

#
# Setup the Nuvla API.
#

api = Api(endpoint=endpoint, insecure=True)
api.login_apikey(api_key, api_secret)

# Recover deployment information. 

deployment = api.get(deployment_id)

try:
  data_records = deployment.data['data-records']
except KeyError:
  data_records = {}
  
#
# setup directories for object links
#

buckets_base_path = '/mnt/'
if not os.path.exists(buckets_base_path):
  os.makedirs(buckets_base_path)

data_path='/gssc/data/nuvla/'
if not os.path.exists(data_path):
  os.makedirs(data_path)

#
# mount the buckets containing the requested objects
#

for dr in data_records.keys():
  dr_doc = api.get(dr)
  dr_bucket = dr_doc.data['data:bucket']
  dr_object = dr_doc.data['data:object']

  dr_mission = dr_doc.data['gnss:mission']

  bucket_mount_point = buckets_base_path + dr_bucket
  
  if not os.path.exists(bucket_mount_point):
    os.makedirs(bucket_mount_point)

  data_directory = data_path + dr_mission
  
  if not os.path.exists(data_directory):
    os.makedirs(data_directory)

  os.system('ln -s {0}/{1} {4}{3}/{2}__{1}'.format(bucket_mount_point, dr_object, dr_bucket, dr_mission, data_path))

#
# generate token for jupyter
#

token=''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(24))

token_file = open('/root/token.txt', 'w')
token_file.write(token)
token_file.close()

def from_data_uuid(text):
    class NullNameSpace:
        bytes = b''

    return str(uuid.uuid3(NullNameSpace, text))

def deployment_param_href(deployment_id, node_id, param_name):
        param_id = ':'.join(item or '' for item in [deployment_id, node_id, param_name])
        return 'deployment-parameter/' + from_data_uuid(param_id)

param_id = deployment_param_href(deployment_id, deployment_id.split('/')[1], 'jupyter-token')

api.edit(param_id, {'value': token})

