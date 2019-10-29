curl -XPOST https://nuvla.io/api/session -H 'content-type:application/json' -c cookies -d '''
    {
      "template": {
        "href": "session-template/password",
        "username": "your_username",
        "password": "your_password"
      }
    }
'''
