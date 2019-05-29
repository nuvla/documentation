FROM ubuntu:18.04

RUN apt-get update && apt-get install -y openssh-server && apt-get clean
RUN mkdir /run/sshd

ADD nuvla-init.sh /root/nuvla-init.sh
RUN chmod a+x /root/nuvla-init.sh

EXPOSE 22
CMD ["/root/nuvla-init.sh"]
