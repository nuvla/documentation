curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '
{
  "name": "S3 credential",
  "description": "S3 credential",
  "template": {
    "href": "credential-template/infrastructure-service-minio",
    "parent": "infrastructure-service/<UUID of the S3 Infrastructure in Nuvla>",
    "access-key": "",
    "secret-key": ""
  }
}
'
