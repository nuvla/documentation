---
layout: page
title: Deployment
nav_order: 6
parent: API
has_children: false
---

# deployment

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/deployment/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `deployment` resource allows you to deploy an instance of a `module`.

---
_Examples_

## Start/Stop an application
 
{% include request_snippet.md file='api/deployment.sh' actions='POST PUT GET' endpoint='/api/deployment' %}

{% include code_snippet.md file='api/deployment.sh' language='shell' %}

{% include response_snippet.md file='api/deployment-response.md' %}
