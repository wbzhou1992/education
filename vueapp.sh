docker run \
-p 3000:80 \
-d --name edu \
--mount type=bind,source=$HOME/education/nginx,target=/etc/nginx/conf.d \
--mount type=bind,source=$HOME/education/dist,target=/usr/share/nginx/html \
nginx
