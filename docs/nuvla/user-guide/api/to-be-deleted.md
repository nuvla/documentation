---
layout: page
title: To Be deleted
nav_order: 100
parent: API
has_children: false
---


## evidence-record

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/evidence-record/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `evidence-record` resource allows you to create and manage audit evidence records that can afterwards help you keep track of your infrastructures' compliance to certain standards and certification schemas.

---
_Examples_

### Create an evidence record
 
{% include request_snippet.md file='api/evidence-record.sh' actions='POST' endpoint='/api/evidencerecord' %}

{% include code_snippet.md file='api/evidencerecord.sh' language='shell' %}

{% include response_snippet.md file='api/evidencerecord-response.md' %}

 

## voucher

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/voucher/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `voucher` resource let's you create and manage digital vouchers, associated with any digital service provider, for better tracking and accounting of voucher consumption.


---
_Examples_


### Create a new voucher

{% include request_snippet.md file='api/voucher.sh' actions='POST' endpoint='/api/voucher' %}

{% include code_snippet.md file='api/voucher.sh' language='shell' %}

{% include response_snippet.md file='api/voucher-response.md' %}
