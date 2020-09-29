---
layout: page
title: NuvlaBox Remote Control
parent: User Guide
grand_parent: Nuvla
nav_order: 8
permalink: /nuvla/nuvlabox-remote-control
---

# Controlling a NuvlaBox remotely

Apart from behaving like any other Nuvla Infrastructure Service, the NuvlaBox also offers some additional capabilities for remote management, which are incorporated in Nuvla.

When you deploy a new NuvlaBox, a new Nuvla `api/nuvlabox/<uuid>` resource is automatically created for you.

By navigating to this resource's API page, you'll be given a number of custom actions that can be issued directly from Nuvla, and sent to the NuvlaBox.

![nuvlabox-resource-api](/assets/img/nuvlabox-resource-api.png)

## Reboot the NuvlaBox

To ask the NuvlaBox to reboot, simply click the `reboot` button on the UI or send a _POST_ request to `api/nuvlabox/<uuid>/reboot`.

![nuvlabox-reboot](/assets/img/nb-reboot.png)

![nb-reboot-confirm](/assets/img/nb-reboot-confirm.png)

After that, simply wait for a Nuvla notification stating whether the operation has successfully completed or not.

## Checking if the NuvlaBox API is reachable

There's a simple action that verifies if the NuvlaBox control API can be reached from Nuvla. This operation helps evaluating whether the other control actions can be issued or not.

## Add an SSH key to the NuvlaBox

Sometimes it can be useful for a user to connect to the NuvlaBox via SSH. For this, one of the available control operations is to remotely and on-demand add new SSH keys to the NuvlaBox.

There are multiple workflows available for this operation:

 1. **use an existing Nuvla SSH credential**: this workflow is ideal if you want to share the same public SSH key amongst multiple NuvlaBoxes:
    - navigate to the credentials' page in Nuvla
    - if you don't have an SSH credential yet, create one by clicking the `+add` button, and selecting the credential type `SSH`
    
        ![add-ssh-cred](/assets/img/add-ssh-cred.png)
    
    - there are 3 ways you can create a new SSH credential:
        1. don't pass any public nor private SSH keys, and Nuvla will automatically generate one for you. **Please note** that upon creation, Nuvla will give you back the public and private parts of the SSH keys, and whilst the public part will be kept in Nuvla, the **private part won't**! So please make sure you save it somewhere secure.
        2. just pass the public part of an existing SSH keypair you might already have in your computer. No need to share the private key as that is not needed by Nuvla or NuvlaBox in order to establish an SSH connection from your side.
        3. pass both the public and private parts of your existing SSH keypair. You should only to this if you want Nuvla to store your private SSH key. Even though such action is possible, it is **not recommended** to store private and sensitive information in Nuvla.
        
    - once your SSH credential has been created, you can navigate to the NuvlaBox page
        1. if you're creating a new NuvlaBox, in the creation modal you'll be given an option to include an SSH key as part of your NuvlaBox installation
            
            ![nb-new-ssh](/assets/img/nb-new-ssh.png)
            
           Also in this case you'll be given the option to either let Nuvla generate a new SSH credential for you, or to select one from the existing SSH credentials you have in Nuvla
           
        2. if you're adding an SSH key to an existing NuvlaBox, you can navigate to the respective NuvlaBox resource API page at `ui/api/nuvlabox/<uuid>` and click `add-ssh-key`. In this case, since no payload was provided to the request, Nuvla will again take the liberty and automatically generate a new SSH credential for you, and push the public part to the NuvlaBox. 
        
            ![nb-add-ssh-key](/assets/img/nb-add-ssh-key.png)

            If you'd like to add an existing SSH credential from Nuvla, then you need to issue a POST request to the API with the corresponding SSH credential ID:
          
            ```bash
            # remember to authenticate with Nuvla first to create session cookie
            curl -XPOST -b <session_cookies> https://nuvla.io/api/nuvlabox/<uuid>/add-ssh-key -H content-type:application/json -d '{"credential": "credential/<uuid_ssh_cred>"}'
            ```  
            
            
Once this operation is completed, you will be able to login directly to your NuvlaBox by doing:

```bash
ssh -i <your_private_ssh_key> <user>@<nuvlabox_endpoint>

# where:
# user - is the local username under which you've installed the NuvlaBox Engine
# nuvlabox_endpoint - is the endpoint IP you can find in the corresponding NuvlaBox page in Nuvla 
```

## Revoke an SSH key from the NuvlaBox

If one of your previously added NuvlaBox SSH keys has been compromised, or you simply no longer need it, you can also revoke it from Nuvla.

**You can only revoke SSH keys that exist in Nuvla as SSH credentials!**

To trigger this action, you need to specify which Nuvla SSH credential is to be revoked on the NuvlaBox.

To do so, use the following command;

```bash
# remember to authenticate with Nuvla first to create session cookie
curl -XPOST -b <session_cookies> https://nuvla.io/api/nuvlabox/<uuid>/revoke-ssh-key -H content-type:application/json -d '{"credential": "credential/<uuid_ssh_cred>"}'
```

Once this operation is completed, you'll no longer be able to login directly into that NuvlaBox using the aforementioned SSH keypair. 