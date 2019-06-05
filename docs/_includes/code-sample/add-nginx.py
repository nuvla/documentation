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
# Add component for nginx web server
#

gnss_comp = {"author": "nginx",
             "commit": "initial commit",
             "architecture": "x86",
             "image": {"image-name": "nginx",
                       "tag": "latest"},
             "ports": [{"protocol": "tcp",
                        "target-port": 80}],
             "urls": [["web server", "http://${hostname}:${tcp.80}"]],
             }

gnss_module = {"name": "Nginx Web Server",
               "description": "bare bones nginx web server",
               "logo-url": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
               "type": "COMPONENT",
               "path": "nginx",
               "parent-path": "",
               "data-accept-content-types": ["text/plain", "application/octet-stream"],
               "content": gnss_comp}

gnss_module_response = nuvla_api.add('module', gnss_module)
gnss_module_id = gnss_module_response.data['resource-id']
print("module id: %s\n" % gnss_module_id)
