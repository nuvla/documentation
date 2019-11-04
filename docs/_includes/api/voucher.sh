curl -XPOST https://nuvla.io/api/voucher -H 'content-type:application/json' -b cookies -d '''
{
    "owner": "user/ef5cddf8-5d70-4c29-19ff-079ef7f90976",
    "supplier": "providerS",
    "target-audience": "researchers@institute.org",
    "amount": 50.0,
    "currency": "EUR",
    "code": "UnIqUeXYZ",
    "state": "NEW",
    "name": "My voucher",
    "description": "Description of my voucher",
    "service-info-url": "https://providerA/redeem-here",
    "wave": "wave 1",
    "batch": "batch_id_1234"
}
'''