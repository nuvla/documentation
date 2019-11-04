curl -XPOST https://nuvla.io/api/infrastructure-service -H 'content-type:application/json' -b cookies -d '''
{
    "template": {
        "parent": "infrastructure-service-group/<UUID of your IS group>",
        "method": "kubernetes",
        "service-credential": {
            "href": "credential/<UUID of your credential>"
        },
        "href": "infrastructure-service-template/kubernetes"
    }
}
'''