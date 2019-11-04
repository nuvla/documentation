curl -XPOST https://nuvla.io/api/infrastructure-service -H 'content-type:application/json' -b cookies -d '''
{
    "template": {
        "parent": "infrastructure-service-group/<UUID of your IS group>",
        "method": "generic",
        "state": "STARTED",
        "endpoint": "https://service.example.org:1234",
        "href": "infrastructure-service-template/generic"
    }
}
'''