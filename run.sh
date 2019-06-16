#!/bin/bash

set -x
set -e

absolute_path="/etc/nginx/nginx.conf"

mv ${absolute_path} ${absolute_path}.old
cat ${absolute_path}.old | sed s#BASE_URL#${BASE_URL}#g    >  ${absolute_path}

filename=`ls /usr/share/nginx/html/js/ | grep "index.*.js$"`
absolute_path2='/usr/share/nginx/html/js/'${filename}

mv ${absolute_path2} ${absolute_path2}.old
cat ${absolute_path2}.old |
  sed s#BASE_URL#${BASE_URL}#g             >  ${absolute_path2}

filename=`ls /usr/share/nginx/html/js/ | grep "common.*.js$"`
absolute_path3='/usr/share/nginx/html/js/'${filename}

mv ${absolute_path3} ${absolute_path3}.old
cat ${absolute_path3}.old |
sed s#BASE_URL#${BASE_URL}#g           >  ${absolute_path3}