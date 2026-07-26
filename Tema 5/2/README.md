# Analizadores Sintácticos: LL (Descendente) y LR (Ascendente)

Esta carpeta contiene la implementación en JavaScript de dos analizadores sintácticos (parsers) fundamentales en el diseño de compiladores: un analizador Top-Down (LL) y un analizador Bottom-Up (LR). Ambos scripts evalúan y validan la sintaxis de expresiones matemáticas básicas.

## Requisitos

* **Node.js** (Versión 14 o superior)

## Instalación de Node.js

### Windows
1. Vaya a [https://nodejs.org/](https://nodejs.org/) y descargue el instalador **LTS** (versión recomendada).
2. Ejecute el instalador `.msi` y siga los pasos. Asegúrese de marcar la opción **"Agregar a PATH"** (o "Add to PATH").
3. Abra una nueva terminal (CMD, PowerShell o Git Bash) y verifique la instalación ejecutando:
   ```bash
   node --version
   ```
   Debe mostrar algo como `v18.x.x` o superior.

### macOS y Linux
* **macOS (con Homebrew):**
  ```bash
  brew install node
  ```
* **Linux (Debian/Ubuntu):**
  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```
* Verifique la instalación con:
  ```bash
  node -v
  ```

## Ejecución

Puedes ejecutar los analizadores sintácticos desde la terminal con los siguientes comandos:

* **Analizador LL (Descendente):**
  ```bash
  node "Analizador LL.js"
  ```

* **Analizador LR (Ascendente):**
  ```bash
  node "Analizador LR.js"
  ```
