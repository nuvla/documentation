curl -XPOST https://nuvla.io/api/data-set -H 'content-type:application/json' -b /Users/konstan/code/nuvla/tests/cookies -d '''
{
   "name": "Configurations of Speed Cameras in Switzerland",
   "description": "Configurations of Speed Cameras in Switzerland",
   "tags": ["traffic", "camera", "config"],
   "module-filter": "data-accept-content-types='plain/text'",
   "data-record-filter": "traffic:country='Switzerland' and traffic:object_kind='config'"
}
'''
