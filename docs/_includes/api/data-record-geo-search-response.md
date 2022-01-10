```json
{
  "count" : 92,
  "acl" : {
    "query" : [ "group/nuvla-user" ],
    "add" : [ "group/nuvla-user" ],
    "bulk-delete" : [ "group/nuvla-user" ]
  },
  "resource-type" : "data-record-collection",
  "id" : "data-record",
  "resources" : [ {
    "description" : "S1B_IW_SLC__1SDV_20211222T060624_20211222T060651_030134_039922_8E84.SAFE",
    "tags" : [ "eo" ],
    "eo:swath" : "IW1 IW2 IW3",
    "eo:resolution" : 2.3,
    ...
    "object" : "/Sentinel-1/SAR/RAW/2021/12/10/S1B_IW_RAW__0SDV_20211210T060557_20211210T060629_029959_039396_D1EA.SAFE",
    "eo:cloudCover" : -1,
    "bucket" : "eodata",
    "platform" : "S3"
  } ],
  "operations" : [ {
    "rel" : "add",
    "href" : "data-record"
  }, {
    "rel" : "bulk-delete",
    "href" : "data-record"
  } ]
}
```
