#!/bin/bash

COMMAND="cd ${REMOTE_PATH} && git pull &&  git checkout deployDO && cp build/* /var/www/html/"

ssh -o StrictHostKeyChecking=no -i deploy -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}
