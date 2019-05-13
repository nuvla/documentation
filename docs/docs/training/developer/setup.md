---
layout: default
title: Setup
parent: Developer Training
grand_parent: Training
nav_order: 5
---

Setup
=====

Although anonymous (unauthenticated) users can access a few Nuvla
features, you will want to register and authenticate with the server
to take full advantage of Nuvla's benefits.

## Register

To deploy applications through Nuvla, a user must be registered
(i.e. have an account) on the Nuvla server. The standard registration
process requires a valid email address and a valid password.

To create an account, visit the [home page](https://demo.nuvla.io/) of
the Nuvla service with your browser. If you're using a different
server, change the host name in the URL (here and below)
appropriately. Click the arrow on the right of the "login" button and
choose the "sign up" menu item.

![Sign Up Menu Item]({{ site.url }}{{ site.baseurl }}/docs/training/developer/assets/sign-up-menu-item.png)

This should bring up the "sign up" dialog, where you can enter your
email address and a valid password.  The password must have at least 8
characters, including 1 uppercase letter, 1 lowercase letter, a digit,
and a special character.

![Sign Up Dialog]({{ site.url }}{{ site.baseurl }}/docs/training/developer/assets/sign-up-dialog.png)

Fill in the fields and then click the "sign up" button.  This will
send a confirmation message to the email address you provided.

![Sign Up Confirmation]({{ site.url }}{{ site.baseurl }}/docs/training/developer/assets/sign-up-message.png)

![Sign Up Message]({{ site.url }}{{ site.baseurl }}/docs/training/developer/assets/sign-up-email.png)

Visit the link given in that email to finish the registration process.
This will send you back to the Nuvla welcome page, so that you can log
in with your new account.

## Login

Once you've registered with the Nuvla, you can then log into the
server.  From the welcome page, click the "login" button in the upper,
righthand corner to bring up the login dialog.

![Log In Dialog]({{ site.url }}{{ site.baseurl }}/docs/training/developer/assets/log-in-dialog.png)

Fill in the form and click the "login" button.  This should take you
back to the welcome page. Your email address should now be shown
in the upper, righthand corner, indicating that you've logged into the
server.

![Successful Log In]({{ site.url }}{{ site.baseurl }}/docs/training/developer/assets/log-in-success.png)

## Nuvla Layout

On the welcome page and in the menu bar on the left side of the page,
you can see the main sections of the Nuvla browser interface.  These
sections provide specialized views of certain resources ("documents")
stored in the Nuvla server:

 - dashboard: deployed applications

 - apps: defined, containerized applications

 - data: defined data sets

 - infrastructures: accessible Docker Swarm clusters

 - api: "raw" view of all Nuvla resources ("documents")

The contents of each page are defined by the Access Control List (ACL)
associated with the underlying resources. Users only see those
resources that the ACL allows them to view.

The typical end-user's workflow will typically use the "data" section
to select data to analyze, the "apps" section to see available
applications, and the "dashboard" to manage deployed applications. The
"api" section will typically only be used by experts.

## Add Swarm Credentials

Deploying an application requires access to a "target" Docker Swarm
cluster. The manager of an organization will likely have created
Docker Swarm credentials that are available to end-users.

If you are a manager, the process for adding credentials to an
**existing** service involves the following steps:

 1. From the "api" section, choose the "infrastructure-service"
    resource and click "search".

 1. Look at the available services and choose the one for which you
    will be adding a credential.

 1. Note its identifier: the value of the `id` attribute.

 1. From the "api" section, choose the "credential" resource and click
    "search".

 1. Click "add" to bring up a dialog.

 1. Choose the "credential-template/infrastructure-service-swarm"
    option.

 1. Update the document with the correct values for the credential; in
    particular, the `key`, `cert`, and `infrastructure-services`
    attributes.

 1. Click "create" to create the credential.

 1. View the credential to ensure that all values are correct. Change
    them if necessary.

You can adjust who can access the credential by changing the ACL.  If
you are adding individual users, you will need to know their user
identifier, a string starting with "user/" and followed by a UUID.
