# Dockerfile con errores léxicos intencionales
FROM ubuntu:22.04

RUN apt-get update && apt-get install -y curl

# Error: caracteres no válidos en contexto Docker
ENV MI_VAR = "valor con carácter raro €"

WORKDIR /app

COPY archivo¤.txt /destino/

RUN echo "Línea con tilde y ñ está bien en strings pero..."
RUN cálculo_total    

EXPOSE 80

CMD ["./start.sh"]
