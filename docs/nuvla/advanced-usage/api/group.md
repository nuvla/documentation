---
layout: page
title: Group
nav_order: 4
parent: API
has_children: false
---


# Group

{% include request_snippet.md actions='POST GET DELETE' endpoint='/api/group/uuid' maincolor='none' prefix='allowed:' lettercolor='black' %}

The `group` resource allows you to:

 - create new groups
 - invite users to join a group

Group is a resource that allow users to have a common account/view on Nuvla on created resources (see `session` switch-group operation) or shared ones (via ACL).

## Attributes

**NOTE:** only common attributes for this resource

---

## Examples

**NOTE:** for later usage, we store the authenticated session in a file called _cookies_

Group is a templated resource. To create/add a new group, you have to refer to a
group-template resource.

{% include request_snippet.md actions='GET' endpoint='/api/group-template' %}

## Create a group

{% include request_snippet.md actions='POST' endpoint='/api/group' %}

{% include code_snippet.md file='api/group.sh' language='shell' %}

{% include response_snippet.md file='api/group-response.md' %}

## Invite operation

You can invite a user to join a group by email doing as follow.

{% include request_snippet.md actions='POST' endpoint='/api/group/dev/invite' %}

{% include code_snippet.md file='api/invite.sh' language='shell' %}

{% include response_snippet.md file='api/invite-response.md' %}
