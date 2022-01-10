---
layout: page
title: Applications with Data
parent: User Guide
grand_parent: Nuvla
nav_order: 10
permalink: /nuvla/data-app
---

# Running Applications with Data

## Prerequisites

- Nuvla account.
- Existing data sets.
- Existing data records. 
- Applications that support processing of your data records. 

## Data set

To run an application with data, go to [Nuvla data page](https://nuvla.io/ui/data).

### Select data

![Data Page](/assets/img/data-page.png)

You can search for data sets by using the search input field (1).
Select one or multiple data sets by clicking on a checkbox on cards (2).

Data records within data sets are filtered by a timestamp. You have a 
possibility to update the timestamp filter by using **From/To** fields (3)/(4).

Click process button (5).

### Select application and launch

By clicking the **process** button, Nuvla will open a **Select application**
modal.

![Select Application](/assets/img/data-select-app.png)

Depending on the application filter in the data set, this will bring existing
application(s) that are able to process the selected data.

Select your application by clicking on one application in the list (1).

Click **configure** button (2) or **launch** application directly (3) when you
know that the defaults suit your needs.

![Data Deployment Modal](/assets/img/data-deployment-modal.png)

In case you selected **configure**, a deployment modal appears with an extra
menu named **Data** (1). This menu shows how many data-records will be provided
to the selected application (2). Select the infrastructure service to start the
application on (3) and accept the application license (4). Then, click 
**launch** button (5).

You will be redirected to the application deployment management page.


## Data record

Sometimes you want to process data records without having a predefined data set
that filters them for you.

You will need an application that supports the `content-type` of your data
records. If you don't have an application that supports the `content-type`, you
can create a new one and select the supported data in the `Configuration`
tab, `Data Binding` accordion.

### Select data and launch

![Data Record Tab](/assets/img/data-record.png)

To select the data, go to the **Data** page and then navigate to **Data
records** tab (1). There is a number of ways to filter the data records (as
shown on the screenshot above)

* use the timestamp filter (2)/(3),
* apply more advanced filtering by using the filter input field (4), or
* use the map filter to select a region of interest (5).

![Data Record Tab Bottom](/assets/img/data-record-bottom.png)

Select data record(s) you want to process by clicking on the data record card's
checkbox (1).

If you are happy with the created filter, you always have the possibility to
create a data set out of it by clicking **Create data set** button (2) at the
bottom of the page. The data set will not include the timestamp filter, but all
other filters and selected data-records will be included.

To run an application with selected data, click **process** button (3).

You will be redirected to the application deployment management page.
