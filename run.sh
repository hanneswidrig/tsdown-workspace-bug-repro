#!/bin/bash

docker build -t workspace-bug-repro .
docker run -it --rm workspace-bug-repro
