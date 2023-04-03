---
layout: page
title: Launch Applications
parent: User Guide
grand_parent: Nuvla
nav_order: 4
---

# Deploy an app

To deploy an app, you need to have a NuvlaEdge or a cloud endpoint.

If your NuvlaEdge installation was successful, you should now see the following in Nuvla:

 - from the [Edge panel](https://nuvla.io/ui/edge), your NuvlaEdge is <span style="color:green">online</span>
 - in the [Infrastructures panel](https://nuvla.io/ui/infrastructures) you'll now see a new Docker Swarm infrastructure, named after your NuvlaEdge
   - in the [Credentials panel](https://nuvla.io/ui/credentials) you'll find the credentials for this infrastructure

---

So, **let's deploy a Nuvla App into your NuvlaEdge**:

 1. login into [nuvla.io](https://nuvla.io) and go to the [Marketplace](https://nuvla.io/ui/apps)

    ![nuvla-app-store](/assets/img/app-store.png)

 2. find your desired application (let's say Nginx for example)
 3. after making sure that App is compatible with your NuvlaEdge's architecture, click `launch`
  
    ![nuvla-launch-app](/assets/img/launch-app.png)
 
 4. select the right Credential for the NuvlaEdge infrastructure you're deploying to
 5. if applicable, define any environment variables, configuration files and/or other runtime parameters that might be required by your app
 6. click `launch`, and you'll be redirected to your dashboard, where you can follow the state of your deployment 
