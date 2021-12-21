---
layout: page
title: User
nav_order: 2
parent: API
has_children: false
---


# user

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST GET PUT DELETE' endpoint='/api/user/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `user` resource allows you to create a new user account on Nuvla.

---
_Examples_


## Create a user with an email and a password 
 
{% include request_snippet.md file='api/user_email_password.sh' actions='POST' endpoint='/api/user' %}

{% include code_snippet.md file='api/user_email_password.sh' language='shell' %}

{% include response_snippet.md file='api/user-email-password-response.md' %}

Password must contain at least one uppercase character, one lowercase character,
one digit, one special character, and at least 8 characters in total.

The creation of a user with `email-password` template does not require a session.

The user will receive an email with a callback that he have to follow to activate his account. 
After following the link, the state attribute of user document will transit from NEW to ACTIVE.
