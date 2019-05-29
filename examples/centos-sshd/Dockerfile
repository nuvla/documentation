FROM centos:7

RUN yum install -y openssh-server initscripts && yum clean all

ADD nuvla-init.sh /root/nuvla-init.sh
RUN chmod a+x /root/nuvla-init.sh

EXPOSE 22

CMD ["/root/nuvla-init.sh"]
