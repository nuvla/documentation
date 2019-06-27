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
# SWARM_SERVICE_ID: id of the Swarm service resource
# SWARM_CERT: certificate for Swarm
# SWARM_KEY: key for Swarm
#

from nuvla.api import Api as nuvla_Api

nuvla_api = nuvla_Api(os.environ['NUVLA_ENDPOINT'], insecure=True)

nuvla_api.login_password(os.environ['NUVLA_USERNAME'], os.environ['NUVLA_PASSWORD'])

#
# Swarm credential
#

swarm_cred_tpl = {"name": "Docker Swarm Credential",
                  "description": "Certificate, Key, and CA for test Docker Swarm cluster",
                  "template": {"href": "credential-template/infrastructure-service-swarm",
                               "infrastructure-services": [os.environ['SWARM_SERVICE_ID']],
                               "ca": "my-ca",
                               "cert": os.environ['SWARM_CERT'],
                               "key": os.environ['SWARM_KEY']}}

swarm_cred_response = nuvla_api.add('credential', swarm_cred_tpl)
swarm_cred_id = swarm_cred_response.data['resource-id']
print("Swarm credential id: %s\n" % swarm_cred_id)

