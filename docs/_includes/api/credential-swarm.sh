curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '''
{
    "name": "Docker Swarm",
    "description": "Docker Swarm",
    "template": {
        "href": "credential-template/infrastructure-service-swarm"
        "parent": "infrastructure-service/<UUID of the Docker Swarm Infrastructure in Nuvla>",
        "key": "client-private-certificate",
        "ca": "ca-public-certificate",
        "cert": "client-public-certificate",
    }
}
'''
