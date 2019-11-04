curl -XPOST https://nuvla.io/api/evidence-record -H 'content-type:application/json' -b cookies -d '''
{
	"end-time": "2018-06-20T11:34:52.555Z",
	"class" : "de.who.class.type.checks.location.GeoIPResult",
	"start-time" : "2018-06-21T11:34:52.000Z",
	"plan-id" : "abcde",
 	"passed" : true
}
'''