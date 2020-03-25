curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '
{
  "name": "Kubernetes",
  "description": "Kubernetes",
  "template": {
    "parent": "infrastructure-service/<UUID of the Kubernetes Infrastructure in Nuvla>",
    "href": "credential-template/infrastructure-service-swarm"
    "key": "client-private-certificate",
    "ca": "ca-public-certificate",
    "cert": "client-public-certificate",
  }
}
'
