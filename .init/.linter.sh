#!/bin/bash
cd /home/kavia/workspace/code-generation/whatsapp-web-clone-ui-215193-215206/whatsapp_web_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

