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
                  "image-name": "rstudio",
                  "tag": "latest"},
        "cpus": 0.75,
        "memory": 1024,
        "output-parameters": [{"name": "password", "description": "generated password for 'rstudio' user"}],
        "ports": [{"protocol": "tcp",
                   "target-port": 8787}],
        "urls": [["rstudio", "http://${hostname}:${tcp.8787}"],
                 ["password", "${password}"]],
        "restart-policy": {"condition": "any"}
       }

module = {"name": "RStudio",
          "description": "RStudio deployment with generated password",
          "logo-url": "https://nuv.la/images/modules-logos/rstudio.png",
          "subtype": "component",
          "path": "examples/rstudio",
          "parent-path": "examples",
          "data-accept-content-types": ["application/octet-stream"],
          "content": comp}

module_response = nuvla_api.add('module', module)
module_id = module_response.data['resource-id']
print("module id: %s\n" % module_id)
