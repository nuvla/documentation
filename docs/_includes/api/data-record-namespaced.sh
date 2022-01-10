curl -XPOST https://nuvla.io/api/data-record -H 'content-type:application/json' -b cookies -d '''
{
  "infrastructure-service": "infrastructure-service/5a061253-b9e4-414d-89fc-0a834a72c2a7",
  "name": "Speed Camera ABC-123",
  "description": "Speed Camera Location and Configuration",
  "bucket": "traffic-infra",
  "object": "speed-cameras/ABC-123.config",
  "md5sum": "4ebade9a86436b884020d3eb7ef8d431",
  "content-type": "plain/text",
  "geometry": {"type": "Point",
               "coordinates": [-4.193438, 55.881071, 0]},
  "traffic:attr1": "value1",
  "traffic:attr2": [1, 2, 3, 5, 8, 13],
  "traffic:attr2": {"property1": "operational", "property2": true}
}
'''
