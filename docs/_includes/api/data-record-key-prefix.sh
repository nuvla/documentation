curl -XPOST https://nuvla.io/api/data-record-key-prefix -H 'content-type:application/json' -b cookies -d '''
{
  "name": "camera frame rate",
  "description": "frame rate of the camera (in fps)",
  "prefix": "traffic",
  "camera_rate_fps": "integer",
  "uri": "https://sixsq.com/prefixes/edge/traffic"
}
'''
