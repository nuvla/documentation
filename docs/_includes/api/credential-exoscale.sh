curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '''
{
  "template": {
    "parent": "infrastructure-service/<uuid of the Exoscale Infrastructure>",
    "method": "store-infrastructure-service-exoscale",
    "exoscale-api-secret-key": "secretsecret",
    "exoscale-api-key": "keykey",
    "href": "credential-template/store-infrastructure-service-exoscale"
  }
}
'''
