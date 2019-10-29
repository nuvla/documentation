```json
{
  "status": 201,
  "message": "deployment/38401e41-25ea-4f45-a3b1-456df8d71918 created",
  "resource-id": "deployment/38401e41-25ea-4f45-a3b1-456df8d71918"
}
```

```json
{
  "parent" : "credential/<uuid>",
  "updated" : "2019-10-29T12:35:33.308Z",
  "created" : "2019-10-29T12:30:53.296Z",
  "state" : "CREATED",
  "api-endpoint" : "https://nuvla.io",
  "module" : {
    "description" : "Example of the things you can do with Nuvla",
    "path" : "yourspace/random/things-you-can-do-with-nuvla",
    "content" : {
      "urls" : [ [ "My App", "http://192.168.43.192/" ] ],
      "updated" : "2019-10-17T09:53:53.414Z",
      "created" : "2019-10-17T09:53:53.414Z",
      "output-parameters" : [ ],
      "author" : "Bruce Wayne",
      "id" : "module-application/<uuid>",
      "commit" : "no commit message",
      "docker-compose" : "version: '3'\n\nservices:\n  blinkt:\n    image: hello-world\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    deploy:\n      placement:\n        constraints:\n          - node.role == manager"
    },
    "updated" : "2019-10-17T09:53:53.432Z",
    "name" : "THINGS YOU CAN DO WITH NUVLA",
    "created" : "2019-10-17T09:53:53.432Z",
    "parent-path" : "yourspace/random",
    "data-accept-content-types" : [ ],
    "id" : "module/<uuid>",
    "resource-type" : "module",
    "acl" : {
      "edit-data" : [ "group/nuvla-admin" ],
      "owners" : [ "user/<uuid>" ],
      "view-acl" : [ "group/nuvla-admin" ],
      "delete" : [ "group/nuvla-admin" ],
      "view-meta" : [ "group/nuvla-admin" ],
      "edit-acl" : [ "group/nuvla-admin" ],
      "view-data" : [ "group/nuvla-admin" ],
      "manage" : [ "group/nuvla-admin" ],
      "edit-meta" : [ "group/nuvla-admin" ]
    },
    "logo-url" : "https://cdn.pixabay.com/photo/2019/08/20/12/12/lego-4418625_960_720.png",
    "href" : "module/<uuid>",
    "subtype" : "application"
  },
  "id" : "deployment/38401e41-25ea-4f45-a3b1-456df8d71918",
  "api-credentials" : {
    "api-key" : "credential/<key_uuid>",
    "api-secret" : "secret"
  },
  "resource-type" : "deployment",
  "acl" : {
    "edit-data" : [ "group/nuvla-admin" ],
    "owners" : [ "user/<uuid>" ],
    "view-acl" : [ "group/nuvla-admin" ],
    "delete" : [ "group/nuvla-admin" ],
    "view-meta" : [ "group/nuvla-admin" ],
    "edit-acl" : [ "group/nuvla-admin" ],
    "view-data" : [ "group/nuvla-admin" ],
    "manage" : [ "group/nuvla-admin" ],
    "edit-meta" : [ "group/nuvla-admin" ]
  }
}
```


```json
{
  "status" : 202,
  "message" : "starting deployment/38401e41-25ea-4f45-a3b1-456df8d71918 with async job/2b0b6058-6f7e-4d59-8f09-8ae30cfbdce9",
  "resource-id" : "deployment/38401e41-25ea-4f45-a3b1-456df8d71918",
  "location" : "job/2b0b6058-6f7e-4d59-8f09-8ae30cfbdce9"
}
```