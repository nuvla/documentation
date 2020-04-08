curl -XPOST https://nuvla.io/api/infrastructure-service -H 'content-type:application/json' -b cookies -d '''
{
  "template": {
    "name": "S3",
    "description": "S3",
    "parent": "infrastructure-service-group/<UUID of your IS group>",
    "subtype": "s3",
    "href": "infrastructure-service-template/generic",
    "endpoint": "https://service.example.org:1234"
  }
}
'