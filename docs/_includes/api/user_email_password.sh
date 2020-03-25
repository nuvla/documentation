curl -XPOST https://nuvla.io/api/user -H 'content-type:application/json' -c cookies -d '
{
  "template": {
    "href": "user-template/email-password",
    "email": "your_email",
    "password": "your_password"
  }
}
'
