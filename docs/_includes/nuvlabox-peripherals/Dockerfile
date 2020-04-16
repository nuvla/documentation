FROM alpine:3.9

RUN apk add --no-cache inotify-tools jq curl

WORKDIR /opt/nuvlabox-mock-peripheral-manager

COPY peripheral-manager-mock.sh .

CMD ["/bin/sh", "peripheral-manager-mock.sh"]