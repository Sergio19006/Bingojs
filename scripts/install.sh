
#!/bin/bash

echo "Importing SSH key"

echo "REMOTE_PORT = ${REMOTE_PORT}"
echo "REMOTE_USER = ${REMOTE_USER}"
echo "REMOTE_HOST = ${REMOTE_HOST}"

openssl aes-256-cbc -K $encrypted_83183f8e0998_key -iv $encrypted_83183f8e0998_iv
  -in deploy.enc -out ~\/claves/deploy -d

eval `$(ssh-agent -s)`

chmod 630 deploy

ssh-add deploy
