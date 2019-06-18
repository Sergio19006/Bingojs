#!/bin/bash

COMMAND= "cd ${REMOTE_PATH} && git pull"

ssh -o StrictHostKeyChecking=no -i deploy -v ${REMOTE_USER}@${REMOTE_HOST} ${COMMAND}
