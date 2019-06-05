---
layout: default-edit
title: Setup
parent: Alice - Domain Specialist
nav_order: 3
---

Setup
=====

First thing first, you need a Nuvla account.  You'll then need access to credentials for the infrastructures you will be deploying your containerised applications to.

> Note: In this documentation, we assume you will be using SixSq's managed Nuvla service running on [nuvla.io](https://test.nuvla.io). If you are using an on premise installation of Nuvla, or any other installation, just adjust these instructions.

## Register

To deploy applications through Nuvla, you need to sign-up. The standard registration process requires a valid email address and a valid password.

To create an account, visit the [home page](https://nuvla.io/) of the Nuvla service with your browser. Click the "sign up" button on the top right of the page.

![Sign Up Menu Item](/docs/assets/sign-up-button.png)

This should bring up the "sign up" dialog, where you can enter your email address and a valid password.

![Sign Up Dialog](/docs/assets/sign-up-dialog.png)

Fill in the fields and then click the "sign up" button.  This will send a confirmation message to the email address you provided.

![Sign Up Confirmation](/docs/assets/sign-up-message.png)

![Sign Up Message](/docs/assets/sign-up-email.png)

Visit the link given in that email to finish the registration process. This will send you back to the Nuvla welcome page, so that you can log in with your new account.

> Note: the link provided by email can only be used once. If you use it again, you will receive an error message.

## Login

Once you've registered with the Nuvla, you can then log into the server.  From the welcome page, click the "login" button in the upper, righthand corner to bring up the login dialog.

![Log In Dialog](/docs/assets/log-in-dialog.png)

Fill in the form and click the "login" button.  This should take you back to the welcome page. Your email address should now be shown in the upper, righthand corner, indicating that you've logged into the server.

![Successful Log In](/docs/assets/log-in-success.png)

## Credentials

Deploying an application requires access to a "target" Docker Swarm cluster.  Further, if you deploy applications that use Nuvla's data management features, your target Swarm will also require an S3 (Minio) service.

### Shared Credentials

[Bob](/bob), the manager of your organisation in Nuvla will likely have created credentials that are available to you.

![Credential List](/docs/assets/api-creds.png)

To check which credentials you have access to, simply click on the "Credentials" button on the left bar menu.If you have credentials of types "infrastructure-service-swarm" and "infrastructure-service-minio", you're good to go.

### Add Credentials

If you do not have access to shared credentials, get in touch with the "Bob" of your organisation or create your own if you have deployed your own Docker Swarm cluster and optionally your MinIO service. To do that, simple click on the "add" button the the "Credentials" page.

You can also get in touch with [SixSq's helpdesk](mailto:support@sixsq.com) to help you move forward if you get stuck.
