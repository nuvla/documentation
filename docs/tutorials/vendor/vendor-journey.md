---
layout: page
title: Vendor Journey
nav_order: 1
parent: Tutorials
has_children: false
---

# Vendor Journey
## Introduction

The purpose of this document is to provide a clear and concise guide for App Vendors to navigate the App publishing process, from account creation to App monetization.

### SixSq's Marketplace
The Marketplace provides a platform for vendors to publish their Edge Applications to a wide audience. With a wide range of categories and a diverse user base across multiple verticals, the Marketplace offers an opportunity for vendors to reach potential customers and generate revenue from their App.

## Create a Nuvla.io account
1. Access the [Nuvla.io](https://nuvla.io) website 
2. Click on the "Sign Up" button in the top right corner
3. Fill out the required information on the registration form:
    * Email address
    * Password
    * Full name
4. Click on the "Sign Up" button to submit the form
5. Verify your email address by following the instructions sent to your email
6. Log in to your Nuvla.io account using the email and password you provided during registration.

Note: For more detailed instructions, please refer to the official [ Nuvla.io User Guide ](https://docs.nuvla.io/nuvla/user-guide/sign-up-in/)

![nuvla-app-store](/assets/img/nuvla-sign-up.png)

## Create and Link your Stripe Express account
1. Click the profile icon at the top right corner
2. In the Vendor section click the “Connect with Stripe” Button
3. Follow the connection process

![nuvla-app-store](/assets/img/nuvla-stripe.png)

## Prepare your App for Publication

### Dockerize your Application

Note: If your application is already dockerized you can skip this step

1. Write a Dockerfile
    * Specify the base image
    * Copy application files into the image
    * Specify command to run the application
2. Build the Docker image
    * Run the docker build command
    * Tag the image for easy reference
3. Run the Docker container
    * Use the docker run command to start the container
    * Map any necessary ports
4. Publish the Docker image
    * Push the image to a Docker registry

Note: For more detailed instruction, please refer to the offical [ Docker website ](https://docs.docker.com/get-started/)



## Register your App on Nuvla.io
### Create your App on Nuvla.io
To add an app to Nuvla.io, follow the steps below:

1. Navigate to the "Apps" section in the dashboard
2. Click on the "Add App" button
3. Fill in the required information for your app, such as the app name, description, tags, and logo
4. Fill in the Docker Compose section, this is the deployement recipe
5. Save the app information by clicking on the "Save" button

Note: For more detailed instructions and information, please refer to the official documentation at https://docs.nuvla.io/nuvla/user-guide/add-apps/.

![nuvla-app-store](/assets/img/nuvla-new-app.png)

### Create a NuvlaEdge device to test your application

Please refer to the [ NuvlaEdge Installation Guide ](https://docs.nuvla.io/nuvlaedge/installation/install-with-compose-files/) in the official documentation to create your NuvlaEdge test device

![nuvla-app-store](/assets/img/nuvla-new-edge.png)

Now you can [ Launch your application](https://docs.nuvla.io/nuvla/user-guide/run-app/) on the NuvlaEdge test device you just created


### End-User License Agreement

In the EULA tab of the app you can pick an open source license for your app or point to your own license. 

Make sure that your terms and conditions clearly outline the rights and responsibilities of both you and your users. This will help to protect your interests and ensure that your users understand what is expected of them.

Some other important things to include in your terms and conditions are:
A description of the software and its features
Any limitations or restrictions on how the software can be used
Information about how the software can be accessed and downloaded
Any warranties or guarantees that you offer
A disclaimer of liability for any damages or losses that may result from the use of the software

![nuvla-app-store](/assets/img/nuvla-license.png)

### Define Price
Nuvla.io has a transparent pricing model for App vendors to monetizing their app. Our pay-per-deployment and pay-per-day model allows you to easily track the number of deployments and predict your App-based revenue.

You can enter your desired price on the pricing tab of your app, and you have the ability to change it at any time.

![nuvla-app-store](/assets/img/nuvla-pricing.png)

## Set App Visibility

The final step to make your App visible to all Nuvla users.
1. Go to the App's Share tab
2. Add the "View" permission to "Nuvla Authenticated Users"

![nuvla-app-store](/assets/img/nuvla-sharing.png)

## Checklist