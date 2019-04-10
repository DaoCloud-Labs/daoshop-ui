FROM node:8 AS node-builder

COPY . /app/
RUN cd /app/ \
    && npm install --registry=https://registry.npm.taobao.org \
    && npm run build

FROM nginx:1.14
COPY --from=node-builder /app/ /app/
RUN mv /app/dist/* /usr/share/nginx/html/ \
    && mv /app/nginx.conf /etc/nginx/nginx.conf \
    && mv /app/run.sh /usr/share/ \
    && chmod +x /usr/share/run.sh  \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && rm -rf /app
EXPOSE 80
CMD /usr/share/run.sh && nginx -g 'daemon off;'

# FROM nginx:1.14
# COPY ./dist/ /usr/share/nginx/html/
# COPY ./nginx.conf /etc/nginx/nginx.conf
# COPY ./run.sh /usr/share/run.sh

# # set env default value.
# ENV BASE_URL="http://localhost" \
#     HELP_URL="https://daocloud-labs.github.io/DMP-Public-Docs/" \
#     INITIALIZER_URL="http://localhost"

# RUN chmod +x /usr/share/run.sh  \
#     && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
#     && echo "Asia/Shanghai" > /etc/timezone

# EXPOSE 80
# CMD /usr/share/run.sh && nginx -g 'daemon off;'