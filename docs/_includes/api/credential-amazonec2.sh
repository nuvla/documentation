curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '''
{
	"template": {
	    "parent": "infrastructure-service/<uuid of the Amazon EC2 Infrastructure>",
        "amazonec2-secret-key": "",
        "method": "store-infrastructure-service-amazonec2",
        "amazonec2-access-key": "",
        "href": "credential-template/store-infrastructure-service-amazonec2"
    }
}
'''
