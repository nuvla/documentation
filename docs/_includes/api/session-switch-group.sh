curl -XPOST https://nuvla.io/api/session/1c490310-402f-4968-9d66-b9d3838d2286/switch-group \
   -H 'content-type:application/json' \
   -c cookies -b cookies \
   -d '''
    {
      "claim": "group/acme"
    }
'''
