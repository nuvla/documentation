curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '''
{
	"template": {
	    "parent": "infrastructure-service/<uuid of the Azure Infrastructure>",
        "method": "store-infrastructure-service-azure",
        "azure-client-id": "",
        "azure-client-secret": "",
        "azure-subscription-id": "",
        "href": "credential-template/store-infrastructure-service-azure"
    }
}
'''
