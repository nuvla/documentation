---
layout: page
title: Manage Data via the API
nav_order: 2
parent: Tutorials
has_children: true
---

# Managing Data-Object Resources with the API

The following example shows how to create and populate a `data-object` resource and the associated S3 object. 

> **NOTE:** Not all imports are listed in the example and you must provide the correct endpoint and credentials. Also there are some variables set that correspond to external information that must be provided.

```python
import hashlib
import json
import random
import requests
import string

from os import listdir, environ
from os.path import isfile, join

from nuvla.api import Api as nuvla_Api

nuvla_api = nuvla_Api(environ['NUVLA_ENDPOINT'], insecure=True)

nuvla_api.login_internal('your-username', 'your-password')

bucket = 'new-bucket-for-tests'
object = 'new-object-for-tests'

#
# function to create a file with random contents
#

def random_file(size):
    chars = ''.join([random.choice(string.lowercase) for i in range(size)])
    filename = "%s.txt" % hashlib.sha1(chars).hexdigest()
    with open(filename, 'w') as f:
        f.write(chars)
    return filename

file_size = 1024
filename = random_file(file_size)

#
# create a data-object
#

data = {"name": "data-object-1",
        "description": "data object 1 with random data",
        "template": {
            "credential": s3_credential_id,
            "type": "generic",
            "resource-type": "data-object-template",
            "content-type": "text/plain",
            "object": object,
            "bucket": bucket,
            "href": "data-object-template/generic"
        }
}

response = nuvla_api.add('data-object', data)
data_object_id = response.data['resource-id']
print("data-object id: %s\n" % data_object_id)

#
# upload the file contents
#

print("UPLOAD ACTION")
data_object = nuvla_api.get(data_object_id)
response = nuvla_api.operation(data_object, "upload")
upload_url = response.data['uri']
print("upload_url: %s\n" % upload_url)

body = open(filename, 'rb').read()
headers = {"content-type": "text/plain"}
response = requests.put(upload_url, data=body, headers=headers)
print(response)

#
# mark the object as ready
#

print("READY ACTION")
data_object = nuvla_api.get(data_object_id)
response = nuvla_api.operation(data_object, "ready")
print(response)

#
# download the file
#

print("DOWNLOAD ACTION")
data_object = nuvla_api.get(data_object_id)
response = nuvla_api.operation(data_object, "download")
download_url = response.data['uri']
print("download_url: %s\n" % download_url)

response = requests.get(download_url, headers=headers)
from pprint import pprint
pprint(response)
print(response.text)
```


# Managing Data-Record Resources with the API

To create a `data-record` resource via the Python API, use code
similar to the following example. You must provide the correct
endpoint, username, and password for your Nuvla server.

> **NOTE:** Not all imports are listed in the example and you must
> provide the correct endpoint and credentials. Also there are some
> variables set that correspond to external information that must be
> provided. The contents of the `data-record` will depend on your use
> case.

```python
from nuvla.api import Api as nuvla_Api

nuvla_api = nuvla_Api(os.environ['NUVLA_ENDPOINT'], insecure=True)
nuvla_api.login_internal('your-username', 'your-password')

current_date = '%sZ' % datetime.utcnow().replace(microsecond=0).isoformat()

data = {
    "infrastructure-service": swarm_id,
    
    "name": "data-object-1",
    "description": "data-object-1 description",
    
    "resource:type": "DATA",
    "resource:protocol": "NFS",
    "resource:object": data_object_id,
    
    "data:bucket": bucket,
    "data:object": object,
    "data:contentType": "text/plain",
    "data:timestamp": current_date,

    "data:bytes": file_size,
    
    "data:nfsDevice": "/nfs-root",
    "data:nfsIP": environ['INFRA_IP'],
    
    "data:protocols": [
        "tcp+nfs"
    ],

    "gnss:mission": "random",
    
    "acl": {
        "owner": {
            "type": "ROLE",
            "principal": "ADMIN"
        },
        "rules": [
            {
                "right": "VIEW",
                "type": "ROLE",
                "principal": "USER"
            },
            {
                "type": "ROLE",
                "principal": "ADMIN",
                "right": "ALL"
            }
        ]
    }    
}

response = nuvla_api.add('data-record', data)
data_record_id = response.data['resource-id']
print("data-record id: %s\n" % data_record_id)
```



# Managing Data-Set Resources with the API

To create a `data-set` resource via the Python API, use code similar
to the following example. You must provide the correct endpoint,
username, and password for your Nuvla server.

> **NOTE:** Not all imports are listed in the example.

```python
from nuvla.api import Api as nuvla_Api

nuvla_api = nuvla_Api(os.environ['NUVLA_ENDPOINT'], insecure=True)
nuvla_api.login_internal('your-username', 'your-password')

data_set = {"name": "GREAT (CLK)",
            "description": "GREAT (CLK) data at ESA",
            "module-filter": "data-accept-content-types='application/x-clk'",
            "data-record-filter": "gnss:mission='great' and data:contentType='application/x-clk'"}

data_set_response = nuvla_api.add('data-set', data_set)
data_set_id = data_set_response.data['resource-id']
print("data-set id: %s\n" % data_set_id)
```

---

# Demonstration: Managing data as [Emma](/emma)

## Data Objects/Records

The full lifecycle of a data object consists of the following steps:

 - Create a new `data-object` resource in Nuvla,

 - Use the "upload" action to obtain an upload URL for the data,

 - Upload the data using the URL,

 - Mark the `data-object` as "ready" and read-only via the "ready"
   action,

 - Use the "download" action to obtain a download URL,

 - Download the data using the URL,

 - Delete the `data-object` to remove the Nuvla resource and the
   backing S3 object.

All these actions can be completed with either the Python API or
directly with the REST API, for example, with `curl`.

In parallel, optional `data-record` resources can also be
created. These resources associate enhanced, domain-specific metadata
with the data objects. POSIX access information can be provided via
`data-record` resources on infrastructures that expose data objects
via S3 and via POSIX.

The following script describes the full data object workflow via the
Nuvla Python API.

{% include code_snippet.md file='/code-sample/create-data.py' language=python %}

> **NOTE:** The process of creating an object will also create the S3
> bucket if it doesn't exist. Similarly, the S3 bucket will be removed
> if the last object is removed from it.

> **NOTE:** The visibility of the data objects and records is
> determined by the ACL. Change the ACL to share data with other
> users.

## Data Sets

Once you have more than a few data objects, working with them
individually becomes tedious. Instead you would usually group those
objects (and records) into data sets.

Nuvla has a `data-set` resource exactly for this purpose.  Via the
standard filtering syntax, you can create dynamic definitions of data
sets.

The following script shows how this can be accomplished.

{% include code_snippet.md file='/code-sample/add-data-sets.py' language=python %}

Once the data sets are created, they should be visible in the "data"
section of the Nuvla UI. Check that they are visible and that they
contain the objects that you expect. 

> **NOTE:** The visibility of the data sets is determined by the
> ACL. Change the ACL to share data with other users.

