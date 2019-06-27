FROM sixsq/gssc-sepp:latest

RUN apt-get update && apt-get install -y python python-pip

RUN pip install nuvla-api

ADD link-data.py /root/link-data.py
RUN chmod a+x /root/link-data.py

ADD start-service.sh /root/start-service.sh
RUN chmod a+x /root/start-service.sh

ENTRYPOINT ["/root/start-service.sh"]
