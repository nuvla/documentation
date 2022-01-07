---
layout: page
title: Applications with Data
parent: User Guide
grand_parent: Nuvla
nav_order: 10
permalink: /nuvla/data-app
---

# Running Applications with Data

## Prerequisite

- Nuvla account
- Existing data sets
- Existing data records 
- Application that support processing of your data records 

## Data set

To run an application with data, go to [Nuvla data page](https://nuvla.io/ui/data).

### Select data

![Data Page](/assets/img/data-page.png)

You can search for data sets by using the search input field (1).
Select one or multiple data sets by clicking on checkbox on cards (2).
Data records within data sets are filtered by timestamp. You have the
possibility to update that timestamp filter by using from/to fields (3) (4).

Click process button (5)

### Select application and launch

By clicking on process button, Nuvla will open a select application modal.

![Select Application](/assets/img/data-select-app.png)

Depending on Data set application filter, this will bring existing application that are able to process data.

Select your application by clicking on one application in the list (1)

Click configure button (2) or launch application directly (3) when you know that default fits your need.

![Data Deployment Modal](/assets/img/data-deployment-modal.png)

When you click configure, a deployment modal will appear with an extra menu named `data` (1). This menu show you how many data-records your application is going to process (2). Select the infrastructure service to start application on (3) and accept the application license (4). Click launch button (5).

You will be redirected to application page.


## Data record

Sometimes you want to explore data records without having a predefined data set that filter them for you.

You will need an application that support the `content-type` of your data records. If you don't have an application
that support the `content-type`, you can create a new one and select the supported data in the `Configuration` tab, `Data Binding` accordion.

### Select data and launch

![Data Record Tab](/assets/img/data-record.png)

You can then go to the data page and then navigate to data record tab (1). 
Filter data records by using the timestamp filter (2)(3), or more advanced filtering by using the filter input field (4), or the map filter to select a region of interest (5).

![Data Record Tab Bottom](/assets/img/data-record-bottom.png)

Select data record you would like to process by clicking on data-record card checkbox (1).

If you are happy with the created filter and, you always have the possibility to create a data set out of it by clicking `Create data set` button (2) at the bottom of the page. The data-set will not include the timestamp filter, but all other filters and selected data-records.

To run an application with selected data, click process button (3).

You will be redirected to application page.

