curl -XPOST https://nuvla.io/api/data-record-key -H 'content-type:application/json' -b cookies -d '''
{
  "prefix": "traffic",
  "uri": "https://sixsq.com/prefixes/edge/traffic"
}
'''
