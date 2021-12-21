---
layout: page
title: Session
nav_order: 1
parent: API
has_children: false
---


# session

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET DELETE' endpoint='/api/session/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `session` resource allows you to use your credentials for authenticating with Nuvla.

**NOTE:** for later usage, we store the authenticated session in a file called _cookies_

---
_Examples_


## Login with username and password 

{% include request_snippet.md file='api/session.sh' actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login.sh' language='shell' %}

{% include response_snippet.md file='api/login-response.md' %}


## Login with API keys
 
{% include request_snippet.md file='api/session.sh' actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login_apikey.sh' language='shell' %}

{% include response_snippet.md file='api/login-response.md' %}
