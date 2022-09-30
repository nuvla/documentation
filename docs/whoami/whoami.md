---
layout: page
title: Who Am I?
nav_order: 4
has_children: true
permalink: /whoami
---

# Who am I?

The Nuvla platform not only delivers efficiencies to the organisation and project, but also to each team member that interacts with Nuvla. [Figure 1](#nuvla-collaboration-framework) shows the typical team members involved in making the edge-to-cloud project a success. The diagram illustrates the main relationships between different team members and how Nuvla facilitates and organises these exchanges. Working together, they establish the initial steps required to get the project off the ground.

<a name="nuvla-collaboration-framework"></a>![Personae overview](/assets/img/personae.png){:style="float: centre}

Figure 1: Nuvla® collaboration framework
{: style="color:gray; text-align: center;"}

## Alice: the domain specialist

![Alice](/assets/img/alice.png){:style="float: left;margin-right: 7px;margin-top: 7px;"}

Alice is a scientist who knows the application domain and the algorithms that best suit the type of data she wants to analyse. She is an expert in AI or other algorithms used by her community. Alice’s challenge is to select the right algorithm for the problem to be solved. 

Alice primarily interacts with the Nuvla Marketplace, a library of private and public applications, and with the Nuvla Data Store, a selection of curated datasets available across all registered clouds and edges for processing. Applications are packaged such that they can be easily deployed, often with a single click.

Thousands of applications are literally at Alice’s fingertips in Nuvla, thanks to its full support of containers and access to container registries, such as Docker Hub. The fact that SixSq supports containers is extremely valuable for Alice. Indeed, this technology is very popular within the software community for packaging and distributing applications, meaning that most popular software solutions are now publicly available in this format. Should Alice not be able to find what she needs in the Nuvla Marketplace, she can ask [Clara](#clara-the -it-specialist) (we will introduce her in a moment), the IT specialist, for help (step 1 in [Figure 1](#nuvla-collaboration-framework)).

Alice will also need the support from [Dave](#dave-the-operator) in order to have an infrastructure to deploy to (e.g. NuvlaEdge for edge deployments or public/private cloud/infrastructure(s)).

Alice can deploy any of the applications in the Nuvla library herself (step 4 and 5 in [Figure 1](#nuvla-collaboration-framework)), onto the edge-to-cloud architecture at any time and as often as needed. She can then process the data and carefully analyse the results, which is her key expertise. 

Once datasets are registered with Nuvla, courtesy of [Emma](#emma-the-data-expert), she can use the platform to select datasets she wants to analyse and process, and Nuvla will propose compatible applications and infrastructure in which to deploy them.

Importantly, Alice doesn’t need any advanced IT skills for performing her job, thanks to Nuvla, [Clara](#clara-the -it-specialist) and [Emma](#emma-the-data-expert). 

To get started as Alice, [go here](alice).

## Bob: the project manager

![Bob](/assets/img/bob.png){:style="float: left;margin-right: 7px;margin-top: 7px;"}

Bob: the project manager
Bob manages the team. He is concerned about budget, resource consumption and delivering his project on time, which is challenging when assets are spread across locations. He also wants to give his team the best tools for the job.
Nuvla is key to Bob. It provides a clear overview of how many resources users are consuming on each infrastructure. He can see which applications are being deployed, and where, and when resource limits are being reached. Nuvla provides Bob with all the information he needs to keep his project on track.
Bob can create groups and invite users (see thick blue line in [Figure 1](#nuvla-collaboration-framework)).  Once authorised by [Dave](#dave-the-operator), Bob can invite [Alice](#alice-the-domain-specialist), [Clara](#clara-the -it-specialist) and [Emma](#emma-the-data-expert) to the Nuvla platform. This gives him the ability to ensure the right people have the right access, and that the right people can collaborate, with risking to lose control.

To get started as Bob, [go here](bob).

## Clara: the IT expert

![Clara](/assets/img/clara.png){:style="float: left;margin-right: 7px;margin-top: 7px;"}

Now that [Alice](#alice-the-domain-specialist) and [Emma](#emma-the-data-expert) have agreed on how the data is to be managed and processed (step 1 in [Figure 1](#nuvla-collaboration-framework)), Clara can put together an IoT architecture that supports the overall data flow defined by [Emma](#emma-the-data-expert) and the processing needs of the applications selected by [Alice](#alice-the-domain-specialist). This requires special skills of IT specialists like Clara. 

Using basic knowledge in scripting and container configuration, Clara can easily create components and stacks for [Alice](#alice-the-domain-specialist) within Nuvla (step 3 in [Figure 1](#nuvla-collaboration-framework)). Further, Clara can configure application deployment policies, so that Nuvla can match the right data with the right application.

Nuvla works will virtually all public and private cloud solutions. Clara can therefore create a Container-as-a-Service environment in any public or private cloud, as well as at the edge on NuvlaEdgees, enabling the collection of data for near data processing, including machine learning models
Nuvla deploys an end-to-end security strategy for all of its services, including the edge. Clara leverages this to provide [Alice](#alice-the-domain-specialist) and [Emma](#emma-the-data-expert) a secure environment minimising any security risk associated with handling data in an edge-to-cloud architecture.

To get started as Clara, [go here](clara).

## Dave: the administrator

![Dave](/assets/img/dave.png){:style="float: left;margin-right: 7px;margin-top: 7px;"}

Dave is a system administrator. His role is to operate the edge-to-cloud architecture so that it is always up to date and properly running.

[Clara](#clara-the -it-specialist) puts together the IoT architecture using Nuvla and NuvlaEdgees for Dave to operate (see dotted blue line in [Figure 1](#nuvla-collaboration-framework)). Since the entire edge-to-cloud architecture is captured in Nuvla, the handover is simple and clear, ensuring straightforward monitoring and maintenance. 

Thanks to the management tools that are part of Nuvla, Dave can properly operate the system with minimum effort. Using the monitoring tools of Nuvla, Dave can set up alerts that will notify him, his monitoring system or any colleagues in case of issues. With the application update feature of Nuvla, Dave can maintain and update the applications selected by [Alice](#alice-the-domain-specialist) to perform her work. This way, she is always sure to have the proper version in place. Using the security management features of Nuvla, Dave can also manage the certificates used, thus ensuring the security of the edge-to-cloud infrastructure.

Once the infrastructure is in place, Dave hands over to [Bob](#bob-the-project-manager), who will then be able to invite all the other team members to get their work done.

To get started as Dave, [go here](dave).

## Emma: the data expert

![Emma](/assets/img/emma.png){:style="float: left;margin-right: 7px;margin-top: 7px;"}

Big data applications require careful management of the data. In agreement with [Alice](#alice-the-domain-specialist) (step 1 in [Figure 1](#nuvla-collaboration-framework)), Emma’s responsibility is to ensure the right data is at the right place, at the right time and in the right format. Emma knows the benefits of near data processing for a big data project, and recognises that transforming raw data into information at the edge optimises network usage. She can also ensure no sensitive data travels from the edge to the cloud unnecessarily so that data handling complies with privacy regulations, such as GDPR. 

Nuvla helps by providing a data ledger service (i.e. a metadata catalogue) that Emma uses use to register valuable datasets (step 3 in [Figure 1](#nuvla-collaboration-framework)). This allows her teammate [Alice](#alice-the-domain-specialist) to know what data is available where, for her to deploy the right analysis application near the correct data. The data ledger service provides to Emma simple to use tools (e.g. Python and Clojure libraries), which can be used to feed live data, or manual data ingestions.

As a result, using Nuvla, Emma can manage metadata according to [Alice](#alice-the-domain-specialist)’s business needs. In return, [Alice](#alice-the-domain-specialist) can focus on what data she wants to process with which application, and let Nuvla do the heavy lifting, automatically and securely (step 4 and 5 in [Figure 1](#nuvla-collaboration-framework)). 

To get started as Emma, [go here](emma).

## Felix

![Felix](/assets/img/felix.png){:style="float: left;margin-right: 7px;margin-top: 7px;"}

Felix is a software developer and in the Nuvla context, he is contributing to the Nuvla code base. Since Nuvla is primarily built using Clojure, Clojurescript and Python, he is fluent in these languages and their eco-systems.

To contribute, Felix follows the [Best Practices](https://github.com/nuvla/nuvla/wiki/GitHub-Best-Practices) we have put in place using [GitHub](https://github.com/nuvla/nuvla).

To get started as Felix, [go here](felix).
