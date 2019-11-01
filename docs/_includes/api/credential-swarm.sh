curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '''
{
    "template": {
        "parent": "infrastructure-service/<UUID of the Docker Swarm Infrastructure in Nuvla>",
        "key": "client-private-certificate",
        "method": "infrastructure-service-swarm",
        "ca": "ca-public-certificate",
        "cert": "client-public-certificate",
        "href": "credential-template/infrastructure-service-swarm"
    }
}
'''
