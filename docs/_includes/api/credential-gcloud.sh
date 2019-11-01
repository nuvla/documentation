curl -XPOST https://nuvla.io/api/credential -H 'content-type:application/json' -b cookies -d '''
{
	"template": {
		"parent": "<UUID of the respective Infrastructure service>",
		"client-id": "98115",
		"method": "store-infrastructure-service-google",
		"private-key-id": "abcde1234",
		"client-email": "1234-compute@developer.gserviceaccount.com",
		"project-id": "my-project-id",
		"private-key": "-----BEGIN PRIVATE KEY-----\\nMIIaA0n\\n-----END PRIVATE KEY-----\\n",
		"href": "credential-template/store-infrastructure-service-google"
	}
}
'''
