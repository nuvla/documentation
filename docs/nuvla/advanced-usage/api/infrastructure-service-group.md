---
layout: page
title: Infrastructure Service Group
nav_order: 5
parent: API
has_children: false
---

# infrastructure-service-group

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET DELETE' endpoint='/api/infrastructure-service-group/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `infrastructure-service-group` resource is a logical container for your infrastructure-service and respective credential and data resources.


---
_Examples_


## Create an infrastructure-service-group

{% include request_snippet.md file='api/infrastructure-service-group.sh' actions='POST' endpoint='/api/infrastructure-service-group' %}

{% include code_snippet.md file='api/infrastructure-service-group.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-group-response.md' %}


