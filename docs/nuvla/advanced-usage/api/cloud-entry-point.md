---
layout: page
title: Cloud Entry Point
nav_order: 2
parent: API
has_children: false
---


# Cloud Entry Point

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='GET' endpoint='/api/cloud-entry-point' maincolor='none' prefix='allowed:' lettercolor='black' %}

The primary directory of resources is the Cloud Entry Point (CEP), which contains a list of named resource collections and their URLs (in the href field) relative to the baseURI value. The CEP also contains some other metadata.

The endpoint is accessible for all registered and anonymous Nuvla users.

---

_Examples_

## Get the cloud entry point

{% include request_snippet.md file='api/cep.sh' actions='GET' endpoint='/api/cloud-entry-point' %}

{% include code_snippet.md file='api/cep.sh' language='shell' %}

{% include response_snippet.md file='api/cep-response.md' %}

