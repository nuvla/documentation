## SMTP Configuration

For the user registration and invitation features to work, the Nuvla server must have access to an SMTP server to send emails.  To provide this configuration, open the "api" section, select "configuration" resources, click on "search", and then you should see the "nuvla" configuration resource in the results.

![Configuration Resources](/assets/img/configuration-resources.png)

Click on the "nuvla" configuration resource, which will bring up the details page for the configuration.

![Configuration Resources](/assets/img/nuvla-configuration-details.png)

To provide the SMTP values, click on "raw" and edit the JSON source directly.

![Nuvla Configuration](/assets/img/nuvla-configuration-edit.png)

Some of the attributes will already be present in the document; don't provide duplicate attributes or saving the document will not succeed. Click on the "Save" button to the save the document.

If successful, you should see the new values on the refreshed details page.
