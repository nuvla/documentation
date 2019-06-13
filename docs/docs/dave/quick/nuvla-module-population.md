---
layout: default-edit
title: Nuvla Module Population
parent: Start here - quick Nuvla Deployment
grand_parent: Dave - Administrator
nav_order: 2
---

# Populate Nuvla Installation

With your new Nuvla installation up and running, you can now populate it with useful container based applications. The Nuvla team maintains a few example applications on the [Nuvla GitHub](https://github.com/nuvla) organisation.

The docker images of these applications are configured to take advantage of Nuvla features, including for example SSH configuration or data management integration.

For example, we have:
1. [example-ubuntu](https://github.com/nuvla/example-ubuntu)
2. [example-centos](https://github.com/nuvla/example-centos)
3. [example-rstudio](https://github.com/nuvla/example-rstudio)
4. [example-jupyter](https://github.com/nuvla/example-jupyter)

These GitHub repos contain `add-module.py` script you can run to register the container in Nuvla. You simply have to set a few environment variables to point to your Nuvla installation.

To use these scripts, simply execute the steps below. 

```sh
pip install nuvla-api
git clone https://github.com/nuvla/example-ubuntu.git # for example for Ubuntu
cd example-ubuntu                                     # for example for Ubuntu
python add-module.py
```

You should now see the application in your Nuvla's App Store. Repeat the same steps for other example applications.