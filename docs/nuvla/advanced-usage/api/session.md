---
layout: page
title: Session
nav_order: 3
parent: API
has_children: false
---


# Session

{% include request_snippet.md actions='POST GET DELETE' endpoint='/api/session/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `session` resource allows you to:

 - use your credentials for authenticating with Nuvla
 - Delete session (logout)
 - switch group (act for a group)
 - get your peers (users that share some groups with you)

Users (clients) authenticate with the Nuvla server by referencing a `session-template` resource (to
identify the authentication method), providing values for the associated parameters, and then
creating a `session` resource via the templated 'add' pattern.

A successful authentication attempt will return a token (as an HTTP cookie) that must be used in
subsequent interactions with the Nuvla server.

The detailed process consists of the following steps:

1. Browse the `session-template` resources to find the authentication method
   that you want to use. Unless you have a browser-based client, you will
   probably want to use either 'password' (username and password) or 'api-key'
   (API key and secret). **Use of API keys and secrets is preferred over the
   username and password for programmatic access.**

2. Prepare a 'create' JSON document that references the `session-template` you
   have chosen and provides the corresponding parameters (e.g. username and
   password for 'password').

3. Post the 'create' document to the `session` collection URL.

4. On a successful authentication request, a token will be returned allowing
   access to the Nuvla resources as the authenticated user. **For convenience,
   this token is returned as an HTTP cookie.**

The authentication token (cookie) must be used in all subsequent requests to
the Nuvla server. The token (cookie) has a **limited lifetime** and you
must re-authenticate with the server when the token expires.

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

Session is a templated resource. To create/add a new session, you have to refer to a
session-template resource.

{% include request_snippet.md actions='GET' endpoint='/api/session-template' %}

## Login with username and password 

{% include request_snippet.md file='api/session.sh' actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login.sh' language='shell' %}

{% include response_snippet.md file='api/login-response.md' %}


## Login with API keys
 
{% include request_snippet.md file='api/session.sh' actions='POST' endpoint='/api/session' %}

{% include code_snippet.md file='api/login-apikey.sh' language='shell' %}

{% include response_snippet.md file='api/login-response.md' %}


## Search session

The search feature of `session` resources will only return the
`session` resource associated with your current session (or none at all if your
are not authenticated). This can be used to determine if you have an active
session and your associated identity and rights (e.g. groups).


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



## Logout

{% include request_snippet.md actions='DELETE' endpoint='/api/session/689df57a-b217-43eb-bf94-85a0ab638e2c' %}

{% include response_snippet.md file='api/logout-response.md' %}
