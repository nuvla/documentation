curl -XPOST https://nuvla.io/api/data-record-key-prefix -H 'content-type:application/json' -b cookies -d '''
{
  "name": "Road traffic.",
  "description": "Namespace for the road traffic telemetry resources.",
  "prefix": "traffic",
  "uri": "https://sixsq.com/prefixes/edge/traffic"
}
'''
