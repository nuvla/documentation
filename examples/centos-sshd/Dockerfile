FROM centos:7

RUN yum install -y openssh-server initscripts

ADD init.sh /root/init.sh
RUN chmod a+x /root/init.sh

EXPOSE 22

CMD ["/root/init.sh"]
