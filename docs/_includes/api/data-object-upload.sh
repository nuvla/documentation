curl -XPUT \
    -H 'content-type: plain/text' \
   'https://sos-ch-gva-2.exo.io/traffic-infra/speed-cameras/ABC-123.config?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220104T102216Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=899&X-Amz-Credential=EXOXXX%2F20220104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08b7e645819622235d955a0629d9c4f40ea863033ad0deb81ca989538d268f61' \
   -d@ABC-123.config