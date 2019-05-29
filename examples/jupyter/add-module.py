import os

#
# Add module to Nuvla server.
#
# The following environmental variables can/must be defined:
#
# NUVLA_ENDPOINT: endpoint of Nuvla server, defaults to localhost
# NUVLA_USERNAME: username to access Nuvla
# NUVLA_PASSWORD: password to access Nuvla
#

from nuvla.api import Api as nuvla_Api

nuvla_api = nuvla_Api(os.environ['NUVLA_ENDPOINT'], insecure=True)

nuvla_api.login_password(os.environ['NUVLA_USERNAME'], os.environ['NUVLA_PASSWORD'])

comp = {"author": "sixsq",
        "commit": "initial commit",
        "architecture": "x86",
        "image": {"repository": "nuvla",
                  "image-name": "jupyter",
                  "tag": "latest"},
        "cpus": 0.5,
        "memory": 1024,
        "output-parameters": [{"name": "access-token", "description": "generated Jupyter access token"}],
        "ports": [{"protocol": "tcp",
                   "target-port": 8888}],
        "urls": [["jupyter", "https://${hostname}:${tcp.8888}/?token=${access-token}"]],
        "restart-policy": {"condition": "any"}
       }

module = {"name": "Jupyter Notebook",
          "description": "Jupyter Notebook deployment with generated access token",
          "logo-url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
          "subtype": "component",
          "path": "examples/jupyter",
          "parent-path": "examples",
          "data-accept-content-types": ["application/octet-stream"],
          "content": comp}

module_response = nuvla_api.add('module', module)
module_id = module_response.data['resource-id']
print("module id: %s\n" % module_id)
