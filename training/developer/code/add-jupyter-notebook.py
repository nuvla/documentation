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
# Add component for GNSS Python application
#

gnss_comp = {"author": "esa",
             "commit": "initial commit",
             "architecture": "x86",
             "image": {"repository": "sixsq",
                       "image-name": "gssc-jupyter",
                       "tag": "latest"},
             "output-parameters": [{"name": "jupyter-token", "description": "jupyter authentication token"}],
             "ports": [{"protocol": "tcp",
                        "target-port": 8888}],
             "urls": [["jupyter", "http://${hostname}:${tcp.8888}/?token=${jupyter-token}"]],
             }

gnss_module = {"name": "GNSS Jupyter Notebook",
               "description": "Jupyter notebook application integrated with Nuvla data management",
               "logo-url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/ESA_logo.svg/320px-ESA_logo.svg.png",
               "type": "COMPONENT",
               "path": "gssc-jupyter",
               "parent-path": "",
               "data-accept-content-types": ["text/plain", "application/octet-stream"],
               "content": gnss_comp}

gnss_module_response = nuvla_api.add('module', gnss_module)
gnss_module_id = gnss_module_response.data['resource-id']
print("module id: %s\n" % gnss_module_id)
