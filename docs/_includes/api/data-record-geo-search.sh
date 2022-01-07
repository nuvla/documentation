curl -k -X PUT https://nuvla.io/api/data-record -b cookies \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "filter=geometry intersects 'POLYGON ((-0.4672 51.7731, 0.4489 51.8135, 0.3508 51.3666, -0.4593 51.3325, -0.4672 51.7731))'"
