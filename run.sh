#!/bin/bash

set -x
set -e

absolute_path="/etc/nginx/nginx.conf"

mv ${absolute_path} ${absolute_path}.old
cat ${absolute_path}.old | sed s#BASE_URL#${BASE_URL}#g    >  ${absolute_path}
