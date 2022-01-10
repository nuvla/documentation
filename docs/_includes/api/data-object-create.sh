curl -XPOST https://nuvla.io/api/data-object -H 'content-type:application/json' -b cookies -d '''
{
    "name": "Speed Camera ABC-123",
    "description": "Speed Camera ABC-123 Configuration",
    "template": {
        "bucket": "traffic-infra",
        "object": "speed-cameras/ABC-123.config",
        "content-type": "plain/text",
        "credential": "credential/ec203c16-c39e-4949-9980-e52c945eed5f",
        "subtype": "generic"
    }
}'''
