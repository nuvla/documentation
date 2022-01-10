curl -XPOST https://nuvla.io/api/session -H 'content-type:application/json' -b cookies -d '''
    {
      "template": {
        "href": "session-template/api-key",
        "key": "credential/<apikey_uuid>",
        "secret": "<secret>"
      }
    }
'''
