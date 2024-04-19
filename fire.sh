#!/bin/bash

ls -a

echo $SHELL

git add .
git commit -m $1
git push origin main
