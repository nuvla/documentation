curl -XPOST https://nuvla.io/api/data-record -H 'content-type:application/json' -b cookies -d '''
{
  "infrastructure-service": "infrastructure-service/9d5ab25e-7351-48a5-a149-8021c71bcadd",
  "name": "Antarctica Kemp Land",
  "bucket": "satellite-images",
  "object": "antarctica-kemp-land.png",
  "md5sum": "9d9121966c738889a7624a8e1954a9c7",
  "content-type": "image/png",
  "geometry": {"type": "Polygon",
               "coordinates": [[[51.19789400000002, -66.411528],
                                [74.04920700000002, -66.779189],
                                [74.55776200000003, -71.867558],
                                [50.275495999999976, -71.748152],
                                [51.19789400000002, -66.411528]]]}
}
'''
