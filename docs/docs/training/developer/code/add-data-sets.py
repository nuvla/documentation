import os

#
# Creates the services and credenials needed for the ESA Swarm/Minio
# infrastructure for GNSS.
#
# The following environmenal variables can/must be defined:
#
# NUVLA_ENDPOINT: endpoint of Nuvla server, defaults to localhost
# NUVLA_USERNAME: username to access Nuvla
# NUVLA_PASSWORD: password to access Nuvla
#

from nuvla.api import Api as nuvla_Api

nuvla_api = nuvla_Api(os.environ['NUVLA_ENDPOINT'], insecure=True)

nuvla_api.login_password(os.environ['NUVLA_USERNAME'], os.environ['NUVLA_PASSWORD'])

#
# Add dataset definitions.
#

data_set = {"name": "Random Text",
            "description": "Collection of files containing random text",
            "module-filter": "data-accept-content-types='text/plain'",
            "data-record-filter": "gnss:mission='random' and content-type='text/plain'"}

data_set_response = nuvla_api.add('data-set', data_set)
data_set_id = data_set_response.data['resource-id']
print("data-set id: %s\n" % data_set_id)

data_set = {"name": "Random Binary",
            "description": "Collection of files containing random binary data",
            "module-filter": "data-accept-content-types='application/octet-stream'",
            "data-record-filter": "gnss:mission='random' and content-type='application/octet-stream'"}

data_set_response = nuvla_api.add('data-set', data_set)
data_set_id = data_set_response.data['resource-id']
print("data-set id: %s\n" % data_set_id)
