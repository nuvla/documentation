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
# MINIO_SERVICE_ID: id of Minio (S3) service
# MINIO_ACCESS_KEY: access key for Minio service
# MINIO_SECRET_KEY: secret key for Minio service
#

from nuvla.api import Api as nuvla_Api

nuvla_api = nuvla_Api(os.environ['NUVLA_ENDPOINT'], insecure=True)

nuvla_api.login_password(os.environ['NUVLA_USERNAME'], os.environ['NUVLA_PASSWORD'])

#
# Credential for Minio (S3)
#

minio_cred_tpl = {"name": "Minio S3 Credential",
                  "description": "Credentials for Minio S3",
                  "template": {"href": "credential-template/infrastructure-service-minio",
                               "infrastructure-services": [os.environ['MINIO_SERVICE_ID']],
                               "access-key": os.environ['MINIO_ACCESS_KEY'],
                               "secret-key": os.environ['MINIO_SECRET_KEY']}}

minio_cred_response = nuvla_api.add('credential', minio_cred_tpl)
minio_cred_id = minio_cred_response.data['resource-id']
print("Minio credential id: %s\n" % minio_cred_id)
