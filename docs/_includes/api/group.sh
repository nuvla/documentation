curl -XPOST https://nuvla.io/api/group -H 'content-type:application/json' -b cookies -d '''
    {
      "template": {
        "href": "group-template/generic",
        "group-identifier": "dev",
        "name": "Dev",
        "description": "Development group"
      }
    }
'''
