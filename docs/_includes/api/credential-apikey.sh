curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '
{
  "template": {
    "method": "generate-api-key",
    "ttl": 0,
    "href": "credential-template/generate-api-key"
  }
}
'
