# Analizador de Docker Compose (ANTLR4)

Este proyecto implementa un analizador sintáctico para archivos YAML de Docker Compose utilizando **ANTLR4** en tres lenguajes diferentes: **Java**, **Python** y **JavaScript (Node.js)**. El objetivo es validar la sintaxis de los archivos de configuración y evaluar el rendimiento de cada lenguaje.

## Componentes del Proyecto

* **`DockerCompose.g4`**: Es el archivo más importante de todo el repositorio. Contiene las reglas formales de tu Gramática Libre de Contexto. Es el molde original; sin él, los analizadores no existen.
* **Los scripts principales (`Main.java`, `analyze_compose.py`, `analyze_compose.js`)**: Son los motores. El código que genera ANTLR por sí solo no hace nada; necesita estos scripts creados para decirle: *"Abre este archivo .yml, pásale el texto al Lexer, luego al Parser, atrapa los errores de sintaxis, mide cuánto tardaste y guárdalo en un log"*.
* **`run_tests.ps1`**: Es tu controlador de automatización. Se encarga de leer la carpeta de pruebas, invoca a Java, a Python y a Node.js uno por uno, y orquesta todo el experimento de carga sin que tengas que teclear nada manualmente.
* **`package.json` y `package-lock.json`**: Son las instrucciones para Node.js. Le dicen a la computadora: *"Para que el código de JavaScript funcione, necesitas descargar e instalar la librería exacta de ANTLR4"*.
* **`Lote_pruebas` (La Materia Prima)**: Son los casos de uso. Contienen los archivos correctos e incorrectos que ponen a prueba si tu gramática (.g4) realmente funciona.
* **`antlr-4.13.2-complete.jar`**: Es el programa de ANTLR que actúa como "traductor". Su único trabajo es leer el archivo .g4 y escupir todo el código en Java, Python o JS.
* **Los archivos autogenerados (`DockerComposeLexer`, `DockerComposeParser`, `DockerComposeListener`, `.tokens`, `.interp`)**: Garantizan que el proyecto les corra a la primera, evitando problemas si no saben usar bien la consola o no tienen la versión correcta de Java instalada para compilar.