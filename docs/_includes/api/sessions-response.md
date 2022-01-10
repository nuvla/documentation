```json
{
  "count" : 1,
  "acl" : {
    "query" : [ "group/nuvla-anon" ],
    "add" : [ "group/nuvla-anon" ]
  },
  "resource-type" : "session-collection",
  "id" : "session",
  "resources" : [ {
    "client-ip" : "172.17.0.1",
    "expiry" : "2021-12-29T12:57:54.000Z",
    "method" : "password",
    "updated" : "2021-12-22T12:57:55.002Z",
    "roles" : "group/nuvla-anon group/nuvla-user user/d5c54236-94a3-49be-8013-128ead0b5836 session/8ed0f0cc-ea54-4e07-9e11-4ba68bb7113b",
    "created" : "2021-12-22T12:57:55.002Z",
    "template" : {
      "href" : "session-template/password"
    },
    "created-by" : "group/nuvla-anon",
    "id" : "session/8ed0f0cc-ea54-4e07-9e11-4ba68bb7113b",
    "resource-type" : "session",
    "identifier" : "toto@example.com",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "session/8ed0f0cc-ea54-4e07-9e11-4ba68bb7113b" ],
      "view-acl" : [ "group/nuvla-admin" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "operations" : [ {
      "rel" : "delete",
      "href" : "session/8ed0f0cc-ea54-4e07-9e11-4ba68bb7113b"
    }, {
      "rel" : "get-peers",
      "href" : "session/8ed0f0cc-ea54-4e07-9e11-4ba68bb7113b/get-peers"
    }, {
      "rel" : "switch-group",
      "href" : "session/8ed0f0cc-ea54-4e07-9e11-4ba68bb7113b/switch-group"
    } ],
    "groups" : "group/eo",
    "user" : "user/d5c54236-94a3-49be-8013-128ead0b5836"
  } ],
  "operations" : [ {
    "rel" : "add",
    "href" : "session"
  } ]
}
```