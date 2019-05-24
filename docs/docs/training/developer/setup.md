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
email address and a valid password.  **The password must have at least
8 characters, including 1 uppercase letter, 1 lowercase letter, a
digit, and a special character.**

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

## Browser Interface Sections

On the welcome page and in the menu bar on the left side of the page,
you can see the main sections of the Nuvla browser interface.  These
sections provide specialized views of certain resources ("documents")
stored in the Nuvla server:

 - **dashboard**: deployed applications

 - **apps**: defined, containerized applications

 - **data**: defined data sets

 - **infrastructures**: accessible Docker Swarm clusters

 - **api**: "raw" view of all Nuvla resources ("documents")

The contents of each page are defined by the Access Control List (ACL)
associated with the underlying resources. Users only see those
resources that the ACL allows them to view.

The typical end-user's workflow will typically use the "data" section
to select data to analyze, the "apps" section to see available
applications, and the "dashboard" to manage deployed applications. The
"api" section will typically only be used by experts.

## Credentials

Deploying an application requires access to a "target" Docker Swarm
cluster with an S3 (Minio) service.

### Shared Credentials

The manager of an organization (or the instructor for the course) will
likely have created credentials that are available to you.

![Credential List]({{ site.url }}{{ site.baseurl }}/docs/training/developer/assets/api-creds.png)

You can check if you have the appropriate credentials through the
browser interface by selecting the "api" section, choosing
"credential" for the resource, and clicking "search".  You can add the
"type" column by clicking on the "columns" button.  If you have
credentials of types "infrastructure-service-swarm" and
"infrastructure-service-minio", you're good to go.

## Add Credentials

If you need to create credentials for these services in Nuvla, first
extract the service identifiers that you'll need.

![Service List]({{ site.url }}{{ site.baseurl }}/docs/training/developer/assets/api-services.png)

Select the "api" section, choose "infrastructure-service" for the
resource, and click "search".  You can add the "type" column by
clicking on the "columns" button.  Note the values in the "id" column
for the Swarm and Minio services.

You can then add the credentials through the Python API. First,
install the API on your local machine with:

```sh
pip install nuvla-api
```

You must have Python installed on your machine.

You can then add the Swarm credential with the following python
script and the command:

{% include code_snippet.md file='code/add-swarm-cred.py' language=python %}

```sh
python add-swarm-cred.py
```

**Note that you'll need to define the listed environmental
variables.** The credential identifier will be printed on success.
Modify the script as necessary.

Similarly for Minio, use the script:

{% include code_snippet.md file='code/add-minio-cred.py' language=python %}

Again, the credential identifier will be printed on success.


