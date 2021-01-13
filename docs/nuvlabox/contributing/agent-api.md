---
layout: page
title: Before Starting
nav_order: 1
parent: Contributing
has_children: false
grand_parent: NuvlaBox
---

Before you start contributing to the NuvlaBox software stack, you must be acquainted not only with the NB and NBE architectures and features, but also with the internal functionalities offered specifically for allowing the interaction between NBE micro-services.

# The NBE Agent API


As mentioned in the [NBE Architecture](https://docs.nuvla.io/nuvlabox/nuvlabox-engine/architecture.html), the NBE Agent is one of the most critical components of the NB. 

All outgoing communication to Nuvla pass through the `agent`. For that, it provides an internal REST API for other NBE micro-services to speak with when they need to reach out to Nuvla. 

This ensures that whatever new micro-services are added to the NB, they won't need to manipulate Nuvla credentials in order to reach out to Nuvla. Instead, the `agent` will validate and broker their requests, sanitizing whatever information is being passed.

So in short, if you are building a new component that will run alongside the NBE as a micro-service, and you need to interact with Nuvla, you need to use the NBE Agent API as follows:

## REST API

The NBE Agent API can only be reached from inside the NuvlaBox!

 - If your micro-service is **running on the same local Docker network** as the `agent` (typically this network is called `nuvlabox_default`, otherwise you can double check its name by running `docker network ls`), then you can reach the API at `http://agent/api`

 or,
 
 - if your micro-service is **running in host mode** (same network scope as any other process on the host device), then you can reach the API at `http://127.0.0.1:5080`
 
---


### Get agent healthcheck

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='GET' endpoint='/api/healthcheck' maincolor='none' prefix='allowed:' lettercolor='black' %}

Returns something if the agent and respective API are already up and running. This call is meant to be used as a healthcheck for other components that are waiting for the agent to be ready.

**_Examples:_**

{% include request_snippet.md file='api/agent-api-healthcheck.sh' actions='GET' endpoint='/api/healthcheck' %}

{% include code_snippet.md file='api/agent-api-healthcheck.sh' language='shell' %}

{% include response_snippet.md file='api/agent-api-healthcheck-response.md' %}

---

### Re-commission the NuvlaBox

{% include request_snippet.md file='api/credential-amazonec2.sh' actions='POST' endpoint='/api/commission' maincolor='none' prefix='allowed:' lettercolor='black' %}

It might happen that due to a change in the NuvlaBox or a need to refresh certain credentials and/or system configurations, the NuvlaBox needs to be re-commissioned so that Nuvla can propagate the new changes. This call will trigger a NuvlaBox re-commissioning, according to the request payload.

This call is tailored to be used by specific NuvlaBox components like the Network Manager.

However, **if you must use it**, you'll need to POST a JSON payload compliant with the NuvlaBox `commission` schema described [here](https://github.com/nuvla/api-server/blob/master/code/src/sixsq/nuvla/server/resources/nuvlabox/workflow_utils.clj).

**_Examples:_**

{% include request_snippet.md file='api/agent-api-commission.sh' actions='POST' endpoint='/api/commission' %}

{% include code_snippet.md file='api/agent-api-commission.sh' language='shell' %}

{% include response_snippet.md file='api/agent-api-commission-response.md' %}

---

### Manage a peripheral


{% include request_snippet.md file='api/credential-amazonec2.sh' actions='GET POST PUT DELETE' endpoint='/api/peripheral/' maincolor='none' prefix='allowed:' lettercolor='black' %}

Provides reading and editing capabilities for peripherals.

**_Examples:_**

#### Get a list of all peripheral identifiers already registered:

{% include request_snippet.md file='api/agent-api-peripheral-get.sh' actions='GET' endpoint='/api/peripheral' %}

{% include code_snippet.md file='api/agent-api-peripheral-get.sh' language='shell' %}

{% include response_snippet.md file='api/agent-api-peripheral-get-response.md' %}

<br>


#### Get the description of a specific peripheral, by identifier:

{% include request_snippet.md file='api/agent-api-peripheral-get-specific.sh' actions='GET' endpoint='/api/peripheral/`identifier`' %}

{% include code_snippet.md file='api/agent-api-peripheral-get-specific.sh' language='shell' %}

{% include response_snippet.md file='api/agent-api-peripheral-get-specific-response.md' %}
 
<br>

#### Add a new peripheral:
 
{% include request_snippet.md file='api/agent-api-peripheral-post.sh' actions='POST' endpoint='/api/peripheral' %}

{% include code_snippet.md file='api/agent-api-peripheral-post.sh' language='shell' %}

{% include response_snippet.md file='api/agent-api-peripheral-post-response.md' %}

<br>

#### Search for a peripheral by attribute:

{% include request_snippet.md file='api/agent-api-peripheral-search.sh' actions='GET' endpoint='/api/peripheral?' %}

{% include code_snippet.md file='api/agent-api-peripheral-search.sh' language='shell' %}

{% include response_snippet.md file='api/agent-api-peripheral-search-response.md' %}

<br>


#### Search for a peripheral by identifier regex:

{% include request_snippet.md file='api/agent-api-peripheral-search-regex.sh' actions='GET' endpoint='/api/peripheral?' %}

{% include code_snippet.md file='api/agent-api-peripheral-search-regex.sh' language='shell' %}

{% include response_snippet.md file='api/agent-api-peripheral-search-regex-response.md' %}

<br>

#### Edit an existing peripheral
 
{% include request_snippet.md file='api/agent-api-peripheral-put.sh' actions='PUT' endpoint='/api/peripheral/`identifier`' %}

{% include code_snippet.md file='api/agent-api-peripheral-put.sh' language='shell' %}

{% include response_snippet.md file='api/agent-api-peripheral-put-response.md' %}

<br>


#### Delete an existing peripheral
 
{% include request_snippet.md file='api/agent-api-peripheral-delete.sh' actions='DELETE' endpoint='/api/peripheral/`identifier`' %}

{% include code_snippet.md file='api/agent-api-peripheral-delete.sh' language='shell' %}

{% include response_snippet.md file='api/agent-api-peripheral-delete-response.md' %}