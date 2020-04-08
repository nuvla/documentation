---
layout: page
title: Hands-on Exercise
nav_order: 1
grand_parent: Tutorials
parent: Add modules with Python
---

## Hands on: Add new module to Nuvla

Try to define your own application within Nuvla, using an existing
docker image.  For example, you might try a web server: 

{% include code_snippet.md file='/code-sample/add-nginx.py' language=python %}

This will deploy nginx and should allow you to see the standard
welcome page. If you have an image that you use frequently, you might
try to define an application in Nuvla with that image.

Some questions you might ask about the application definitions:

 - What happens if you don't define the accepted data types?

 - Is the data you selected actually visible?

 - What limitations do you see when using an standard Docker image
   with Nuvla? 
