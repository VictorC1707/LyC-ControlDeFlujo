# Etapa de compilación
ARG BASE_VERSION=3.11
FROM python:${BASE_VERSION}-slim AS builder

ENV APP_HOME=/opt/app
WORKDIR ${APP_HOME}

COPY --chown=1000:1000 requirements.txt .
RUN pip install --no-cache-dir \
    -r requirements.txt

# Etapa de producción
FROM python:${BASE_VERSION}-slim

LABEL maintainer="victor@uneg.edu.ve" \
      version="1.0"

COPY --from=builder /opt/app /opt/app

USER 1000
EXPOSE 8080/tcp

HEALTHCHECK --interval=30s CMD curl -f http://localhost:8080/ || exit 1

ENTRYPOINT ["python"]
CMD ["app.py"]
