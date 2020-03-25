curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '
{
  "template": {
    "parent": "infrastructure-service/<UUID of your Docker Swarm Infrastructure in Nuvla>",
    "method": "swarm-token",
    "href": "credential-template/swarm-token",
    "scope": "WORKER | MANAGER",
    "token": "abcs1234token"
  }
}
'
