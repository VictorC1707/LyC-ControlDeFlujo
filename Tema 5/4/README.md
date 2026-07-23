# Analizador Sintáctico de Docker Compose (Tema 5 - Pregunta 4)

Este repositorio contiene la implementación de un analizador léxico y sintáctico (Lexer y Parser) desarrollado con ANTLR4 para procesar archivos `docker-compose.yml`. El objetivo principal es validar la jerarquía de las interfaces de red (`networks`, `driver`, `ipam`, `config`) y llevar a cabo un experimento de carga multilenguaje para la asignatura de Lenguaje y Compiladores (UNEG).

## 🛠️ Dependencias y Requisitos Previos

Para poder compilar la gramática y ejecutar los analizadores, el entorno debe contar con:

1. **Java Development Kit (JDK):** Versión 11, 17 o 21 (Requerido para ejecutar el metacompilador ANTLR4).
2. **Python 3.x:** Para ejecutar el script base de análisis.
3. **ANTLR 4 Complete JAR:** Descargado y ubicado en la carpeta del proyecto (ej. `antlr-4.13.2-complete.jar`).
4. **Runtime de ANTLR para Python:** 
Se debe instalar mediante pip ejecutando el siguiente comando en la terminal:
   ```bash
   pip install antlr4-python3-runtime
   ```

## 🚀 Instalación y Configuración 

1. **Compilar la Gramática** 

El archivo DockerCompose.g4 contiene las reglas formales de la Gramática Libre de Contexto. Para generar el código fuente del parser en Python, colócate en la carpeta del proyecto y ejecuta:
En Windows PowerShell:
```bash
java -jar ".\ANTLR\antlr-4.13.2-complete.jar" -Dlanguage=Python3 DockerCompose.g4
```
(Asegúrate de ajustar la ruta del .jar según la ubicación exacta en tu sistema).Esto generará los archivos DockerComposeLexer.py y DockerComposeParser.py.

2. **Uso del Analizador Base (Python)**
Para realizar el análisis sintáctico de un archivo Docker Compose, ejecuta el script principal pasándole el archivo .yml como argumento:
```bash
python analyze_compose.py prueba.yml}
```

3. **Salida de Registros (Logs)**
El script está configurado para cumplir estrictamente con los lineamientos de rendimiento. Tras cada ejecución, se actualizará o creará un archivo llamado analysis.log en el directorio activo. Este archivo contiene únicamente los datos de salud y los tiempos de ejecución en formato profesional, sin incluir texto redundante.

⚠️ SECCIÓN PENDIENTE: EXPERIMENTO DE CARGA (PARTE B)