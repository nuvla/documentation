---
layout: nuvlabox
title: Your First NuvlaBox App
nav_order: 1
parent: Apps Deployment
grand_parent: v2
has_children: false
---

# Deploying your first NuvlaBox Application

Once you've installed either the NuvlaBox Engine or NuvlaBox OS, you'll find yourself with an Edge Computing capable device, that you can remotely manage from Nuvla.

If your NuvlaBox installation was successful, you should now see the following in Nuvla:

 - from the [Edge panel](https://nuvla.io/ui/edge), your NuvlaBox is <span style="color:green">online</span>
 - in the [Infrastructures panel](https://nuvla.io/ui/infrastructures) you'll now see a new Docker Swarm infrastructure, named after your NuvlaBox
   - in the [Credentials panel](https://nuvla.io/ui/credentials) you'll find the credentials for this infrastructure

---

So, **let's deploy a Nuvla App into your NuvlaBox**:

 1. login into [nuvla.io](https://nuvla.io) and go to the [App Store](https://nuvla.io/ui/apps)
 
    ![nuvla-app-store](/assets/img/app-store.png)

 2. find your desired application (let's say Nginx for example)
 3. after making sure that App is compatible with your NuvlaBox's architecture, click `launch`
  
    ![nuvla-launch-app](/assets/img/launch-app.png)
 
 4. select the right Credential for the NuvlaBox infrastructure you're deploying to
 5. if applicable, define any environment variables, configuration files and/or other runtime parameters that might be required by your app
 6. click `launch`, and you'll be redirected to your dashboard, where you can follow the state of your deployment 
