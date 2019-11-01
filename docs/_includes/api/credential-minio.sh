curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '''
{
    "template": {
        "parent": "infrastructure-service/<UUID of the Minio Infrastructure in Nuvla>",
        "method": "infrastructure-service-minio",
        "href": "credential-template/infrastructure-service-minio",
        "access-key": "",
        "secret-key": ""
    }
}
'''
