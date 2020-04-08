---
layout: page
title: Edge2Cloud Video AI
nav_order: 1
parent: Tutorials
has_children: false
---

# Demo: person detection system at the edge, with notifications to the cloud ([Clara](/clara) and [Dave](/dave))

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/yYJ6laT_6M4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

## Scenario

Let's setup a scenario for an edge device (NuvlaBox) with a USB camera attached, and a VM running in the cloud.

We'll deploy, from Nuvla:
 - a message broker application to the cloud VM, and
 - a video analysis app to the NuvlaBox, that publishes notifications to the message broker running in the cloud.
 
Finally, we can even install an app in our phone, to subscribe to the message broker running in the cloud, so that we receive the notifications from the NuvlaBox, no matter where we are.

This scenario is pictured in the image below.

![edge2cloudDemo](/assets/img/videoAIDemo.png){: :center}


## Step by step


