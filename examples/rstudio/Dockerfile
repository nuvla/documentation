FROM rocker/rstudio

RUN apt-get update && apt-get install -y python-pip && pip install nuvla-api

ADD nuvla-init.sh /usr/local/bin/nuvla-init.sh
ADD nuvla-integration.py /usr/local/bin/nuvla-integration.py

CMD ["/usr/local/bin/nuvla-init.sh"]
