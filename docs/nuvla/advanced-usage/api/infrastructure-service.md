---
layout: page
title: Infrastructure Service
nav_order: 4
parent: API
has_children: false
---

# infrastructure-service

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/infrastructure-service/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `infrastructure-service` resource represents any manageable service with a working endpoint. This resource is templated, which means, like `session` and `credential`, you can also create infrastructure-services of different types.

---
_Examples_


## Create Docker Swarm infrastructure service
 
{% include request_snippet.md file='api/infrastructure-service.sh' actions='POST' endpoint='/api/infrastructure-service-swarm' %}

{% include code_snippet.md file='api/infrastructure-service-swarm.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-swarm-response.md' %}


## Create Kubernetes infrastructure service
 
{% include request_snippet.md file='api/infrastructure-service-k8s.sh' actions='POST' endpoint='/api/infrastructure-service' %}

{% include code_snippet.md file='api/infrastructure-service-k8s.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-k8s-response.md' %}


## Create S3 infrastructure service
 
{% include request_snippet.md file='api/infrastructure-service-s3.sh' actions='POST' endpoint='/api/infrastructure-service' %}

{% include code_snippet.md file='api/infrastructure-service-s3.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-s3-response.md' %}


## Create generic infrastructure service
 
{% include request_snippet.md file='api/infrastructure-service.sh' actions='POST' endpoint='/api/infrastructure-service' %}

{% include code_snippet.md file='api/infrastructure-service.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-response.md' %}


# infrastructure-service-group

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET DELETE' endpoint='/api/infrastructure-service-group/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `infrastructure-service-group` resource is a logical container for your infrastructure-service and respective credential and data resources.


---
_Examples_


## Create an infrastructure-service-group

{% include request_snippet.md file='api/infrastructure-service-group.sh' actions='POST' endpoint='/api/infrastructure-service-group' %}

{% include code_snippet.md file='api/infrastructure-service-group.sh' language='shell' %}

{% include response_snippet.md file='api/infrastructure-service-group-response.md' %}


