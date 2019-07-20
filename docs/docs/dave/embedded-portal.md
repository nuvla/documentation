---
layout: default-edit
title: Embedded Portal
parent: Dave - Administrator
nav_order: 7
---

Embedded Portal
===============

You may want to embed the Nuvla user interface into another portal. The easiest way to do this is simply to include the Nuvla browser interface into the portal via an `iframe` element. 

To embed the Nuvla browser-based interface, add this content:

```html
<iframe src="https://nuvla.io"
        style="width:100%; height:100ex; v-scroll:auto; padding: 1ex !important; margin: 0 !important">
    <p>Your browser does not support iframes.</p>
</iframe>
```

to the `main` element of a page on the portal.

> **Note:** if you are using your own Nuvla deployment, simply adjust the `src="https://nuvla.io"` value.

Embedding the interface in this way avoids issues with cross-site scripting restrictions, conflicts with Javascript libraries, etc.
