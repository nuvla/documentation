curl -XPOST https://nuvla.io/api/infrastructure-service -H 'content-type:application/json' -b cookies -d '
{
  "template": {
    "name": "Generic",
    "description": "Generic",
    "parent": "infrastructure-service-group/<UUID of your IS group>",
    "subtype": "generic",
    "href": "infrastructure-service-template/generic",
    "endpoint": "https://service.example.org:1234"
  }
}
'