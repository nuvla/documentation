---
layout: page
title: Deployment with Data Access
nav_order: 3
parent: Tutorials
has_children: true
---

# End-user deployment with data access ([Alice](/alice))

A common use case is to select some data objects/records and then to
launch an application to analyze those data. An example application
launches a Jupyter Notebook and shows that the selected data is
visible in the Notebook.

Visit the "data" section, adjust the time window, and then select a
dataset that has some objects associated with it.

![Select Data Set](/docs/assets/select-data-set.png)

Click on the "process" button at the top to start an application to
analyze these data.

![Select Application Dialog](/docs/assets/select-app-dialog.png)

Select the application in the dialog and then click launch.  This will
take you to the "dashboard" section, which shows you the state of your
application deployments. The application you launched will be in the
"STARTING" state initially.  Eventually, it will be in the "STARTED"
state and show a URL for accessing the deployed notebook.

![Running Application](/docs/assets/running-app.png)

Click on the URL button to visit the Jupyter Notebook.  You should be
logged in automatically.  You can browse the available data in the
panel on the left.

![Running Application](/docs/assets/jupyter-notebook.png)

You should be able to open one of the data files you've selected in
the Notebook and verify its contents.

To terminate the application, just click on the cross in the upper,
left-hand corner of the application card. You can completely remove
the deployment by disabling the "active only?" toggle and then
clicking on the trash icon in the upper, left-hand corner of the
application card. 


