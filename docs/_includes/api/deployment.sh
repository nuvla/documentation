# Initialize a deployment by creating an instance of module/<uuid>
ID=$(curl -X POST -s https://nuvla.io/api/deployment -H 'content-type: application/json' -b cookies -d '''
    {
        "module": {
            "href": "module/<uuid>"
        }
    }
''' | jq -r '."resource-id"')

# Retain the ID of the created instance
echo ${ID}

# Associate an infrastructure credential with that instance
curl -X PUT https://nuvla.io/api/${ID} -H 'content-type: application/json' -b cookies -d '''
    {
        "parent": "credential/<uuid>"
    }
'''

# Start the deployment
curl https://nuvla.io/api/${ID}/start -b cookies

# Stop the deployment
curl https://nuvla.io/api/${ID}/stop -b cookies