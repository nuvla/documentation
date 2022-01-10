curl -XPOST https://nuvla.io/api/data-record-key -H 'content-type:application/json' -b cookies -d '''
{
  "name": "camera frame rate",
  "description": "frame rate of the camera (in fps)",
  "prefix": "traffic",
  "key": "camera_rate_fps",
  "subtype": "integer"
}
'''
