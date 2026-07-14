# Analizador Léxico para Dockerfiles (L-Docker)

Este proyecto contiene un analizador léxico desarrollado en Python utilizando únicamente la librería estándar `re`, diseñado para verificar y tokenizar archivos `Dockerfile`. Permite la identificación precisa de directivas, flags, variables de entorno, delimitadores e identificadores, así como la captura robusta y reporte de errores léxicos línea a línea.

## 📂 Estructura del Directorio de Entrega

El entregable final está estructurado de la siguiente forma:

- **`src/`**: Carpeta con el código fuente en Python.
  - `tokens.py`: Tabla ordenada de tokens y expresiones regulares.
  - `lexer.py`: Motor del analizador léxico (control de estados, cálculo de líneas y columnas).
  - `main.py`: Punto de entrada CLI para leer archivos y ejecutar el lexer.
- **`ejemplos/`**: Casos de prueba utilizados para demostrar el funcionamiento.
  - `ejemplo1_simple.Dockerfile`: Un Dockerfile simple sin errores.
  - `ejemplo2_intermedio.Dockerfile`: Multi-stage build con variables y flags de copia.
  - `ejemplo3_errores.Dockerfile`: Caso intencional con caracteres extraños (`¤` y tildes fuera de cadenas) para comprobar el manejo de errores léxicos.
- **`dist/`**: Contiene el ejecutable compilado.
  - `analizador_docker.exe`: Binario standalone compilado con PyInstaller para Windows.
- **`informe/`**: Carpeta del reporte formal.
  - `Informe_Actividad_2.docx`: Documento de informe detallado en Microsoft Word (.docx).
- **`README.md`**: Este archivo explicativo.

---

## 🚀 Instrucciones de Ejecución

### 1. Con el ejecutable compilado

Dado que se requiere entregar el ejecutable en el comprimido, se puede ejecutar directamente el binario generado en la carpeta `dist/` pasándole como argumento el archivo a analizar:

```bash
# Windows CMD / PowerShell
dist\analizador_docker.exe ejemplos\ejemplo1_simple.Dockerfile
dist\analizador_docker.exe ejemplos\ejemplo2_intermedio.Dockerfile
dist\analizador_docker.exe ejemplos\ejemplo3_errores.Dockerfile
```

### 2. Con el código fuente de Python

Si desea ejecutar el lexer directamente interpretando los archivos fuentes:

```bash
# Windows
python src/main.py ejemplos/ejemplo1_simple.Dockerfile
```

---

## 🛠️ Instrucciones de Recompilación (PyInstaller)

Para volver a generar el ejecutable autocontenido `analizador_docker.exe` a partir del código fuente en `src/`, sigue estos pasos:

1. Asegúrate de tener instalado PyInstaller en tu entorno:
   ```bash
   pip install pyinstaller
   ```
2. Ejecuta el empaquetado desde la raíz de este directorio:
   ```bash
   pyinstaller --onefile --name analizador_docker src/main.py
   ```
   *Esto generará un archivo `analizador_docker.spec`, una carpeta temporal `build/` (que puedes eliminar) y el binario final en `dist/analizador_docker.exe`.*
