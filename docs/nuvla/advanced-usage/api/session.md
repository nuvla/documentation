---
layout: page
title: Session
nav_order: 3
parent: API
has_children: false
---


# Session

{% include request_snippet.md actions='POST GET DELETE' endpoint='/api/session/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `session` resource allows you to use your credentials for authenticating with Nuvla.
Extra operations allows you to get the claims of a group and to get a list of your peers (users that share some groups with you).


## Attributes

 - _**active-claim**_: group or user id that you are claiming
 - _**client-ip**_: your client ip as seen from nuvla server
 - _**expiry**_: expiry date of your session
 - _**method**_: method used to sign-in
 - _**roles**_: string space separated of current roles applied to retrieve resources based on ACL
 - _**identifier**_: username used to sign-in
 - _**groups**_: string space separated groups 

---

## Examples

**NOTE:** for later usage, we store the authenticated session in a file called _cookies_


## Login with username and password 

{% include request_snippet.md file='api/session.sh' actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login.sh' language='shell' %}

{% include response_snippet.md file='api/login-response.md' %}


## Login with API keys
 
{% include request_snippet.md file='api/session.sh' actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login-apikey.sh' language='shell' %}

{% include response_snippet.md file='api/login-response.md' %}


## Search session

Retrieve of session collection will return always zero or one resource back. A user can only have
one active session at a time.


{% include request_snippet.md actions='GET' endpoint='/api/session' %}

{% include response_snippet.md file='api/sessions-response.md' %}


## Switch group operation

When a user is in a group, he can ask to change his session to claim the group access.


{% include request_snippet.md actions='POST' endpoint='/api/session/689df57a-b217-43eb-bf94-85a0ab638e2c/switch-group' %}

{% include code_snippet.md file='api/switch-group.sh' language='shell' %}

{% include response_snippet.md file='api/session-switch-group-response.md' %}


## Get peers operation

Get users that share some groups with you.


{% include request_snippet.md actions='POST' endpoint='/api/session/689df57a-b217-43eb-bf94-85a0ab638e2c/get-peers' %}

{% include response_snippet.md file='api/session-get-peers-response.md' %}

