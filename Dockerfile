FROM node:18.17.1-alpine3.18

ENV APP_WORKDIR=/usr/share/home-page

RUN mkdir -p ${APP_WORKDIR}
WORKDIR ${APP_WORKDIR}

COPY . ${APP_WORKDIR}

RUN apk update && apk add bash
SHELL ["/bin/bash", "-c"]

RUN set -x && \
  npm install

COPY start-server.sh ${APP_WORKDIR}
RUN chmod +x ${APP_WORKDIR}/start-server.sh

EXPOSE 3000

CMD ["/bin/bash", "-c", "${APP_WORKDIR}/start-server.sh"]