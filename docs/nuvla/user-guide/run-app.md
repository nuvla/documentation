---
layout: page
title: Launch Applications
parent: User Guide
grand_parent: Nuvla
nav_order: 4
---

# Deploy an app

Let's deploy a simple app. You always deploy an app on a NuvlaEdge or in the cloud.  We'll assume here that you want to deploy an app at the edge.

For this, you need access to a NuvlaEdge.  If you don't have one available yet, you can [create a new NuvlaEdge here](/nuvlaedge/installation/).

Make sure you have at least one online NuvlaEdge. You can do that on the [Edges page](https://nuvla.io/ui/edges) by looking for an <span style="color:green">online</span> NuvlaEdge.  

---

So, **let's deploy a Nuvla App into your NuvlaEdge**:

 1. login into [Nuvla](https://nuvla.io) and go to the [All Apps](https://nuvla.io/ui/apps?apps-store-tab=allapps) tab of the Apps page

    ![nuvla-app-store](/assets/img/nuvla-app-all.png)

 2. find your desired application (let's say Nginx for example)

    ![nuvla-app-nginx](/assets/img/nuvla-app-nginx.png)

 3. select a NuvlaEdge to deploy this app to. Notice that Nuvla will automatically check the availability of the NuvlaEdge and that you have the right credentials
  
    ![nuvla-launch-app](/assets/img/nuvla-app-nginx-select-destination.png)
 
 4. If the app has an End-User License Agreement (EULA), read it and if you accept it, tick the accept box
  
    ![nuvla-launch-app](/assets/img/nuvla-app-nginx-accept-eula.png)
 
 5. if applicable, define any environment variables, configuration files and/or other runtime parameters that might be required by your app (this NGINX example application doesn't)
 
 6. and if the app is a paying app, you will also have to accept the fees (this Nginx example application doesn't)
 
 7. click `deploy`, and you'll be redirected to your dashboard, where you can follow the state of your deployment 
