FROM ubuntu:18.04

RUN apt-get update && apt-get install -y openssh-server
RUN mkdir /run/sshd

ADD init.sh /root/init.sh
RUN chmod a+x /root/init.sh

EXPOSE 22
CMD ["/root/init.sh"]
