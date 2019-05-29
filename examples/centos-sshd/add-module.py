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
                  "image-name": "centos",
                  "tag": "latest"},
        "cpus": 0.75,
        "memory": 1024,
        "environmental-variables" : [
            {"name": "AUTHORIZED_SSH_KEY",
             "description": "public SSH key for accessing root account",
             "required": True}
        ],
        "ports": [{"protocol": "tcp",
                   "target-port": 22}],
        "urls": [["ssh", "ssh://root@${hostname}:${tcp.22}"]],
        "restart-policy": {"condition": "any"}
       }

module = {"name": "CentOS SSHD",
          "description": "example CentOS 7 image allowing access via SSH public/private key pair",
          "logo-url": "https://nuv.la/images/modules-logos/centos.svg",
          "subtype": "component",
          "path": "examples/centos",
          "parent-path": "examples",
          "data-accept-content-types": ["application/octet-stream"],
          "content": comp}

module_response = nuvla_api.add('module', module)
module_id = module_response.data['resource-id']
print("module id: %s\n" % module_id)
