# ⚡ Lenguaje L - Sistema ECO-GRID

Un Lenguaje de Dominio Específico (DSL) diseñado como Interfaz Hombre-Máquina (HMI) para la gestión, monitorización y control de sistemas ciberfísicos críticos en microredes eléctricas inteligentes (ECO-GRID).

## 🎯 Propósito del Proyecto

Este lenguaje abstrae la complejidad del hardware subyacente (sensores, inversores, relés de alta potencia) permitiendo a los operadores de planta e ingenieros escribir rutinas de automatización, seguridad y eficiencia energética utilizando un vocabulario técnico en español, estructurado y sin ambigüedades. 

La arquitectura de **Lenguaje L** restringe intencionalmente el acceso al sistema operativo para evitar fugas de memoria o errores catastróficos que podrían ocurrir al utilizar lenguajes de propósito general en entornos industriales.

## ⚙️ Características Principales

* **Seguridad Intrínseca:** Sintaxis estricta que rechaza comandos no reconocidos antes de que interactúen con la planta física.
* **Abstracción de Hardware:** Comandos directos para leer sensores térmicos, flujos de carga en kilovatios (kW) y accionar sistemas de refrigeración o conmutadores.
* **Análisis Léxico y Sintáctico Robusto:** Construido sobre Python utilizando el algoritmo LALR(1) para garantizar una precedencia matemática rigurosa y un flujo lógico determinista.

---

## 🛠️ Requisitos del Sistema y Dependencias

El motor del intérprete está escrito en **Python 3**. La única dependencia externa necesaria para el análisis léxico y sintáctico es la librería **PLY (Python Lex-Yacc)**.

* Python 3.6 o superior.
* `pip` (Gestor de paquetes de Python).

### Instrucciones de Instalación

Ejecuta el siguiente comando en tu terminal para instalar el motor de análisis sintáctico:

```bash
pip install ply
```
(Nota: Si usas entornos virtuales, recuerda activarlo antes de instalar la dependencia).

## 🚀 Uso y Ejecución

El intérprete de este proyecto funciona a través de la línea de comandos. Toma como entrada archivos de texto plano que contienen tu código escrito en Lenguaje L (por convención, utilizamos la extensión `.l`).

Sigue estos pasos para ejecutar cualquier programa:

**Paso 1: Prepara tus archivos**
Asegúrate de que el motor del lenguaje (`lenguajeL.py`) y tu script (por ejemplo, `emergencia.l`) se encuentren en la misma carpeta. 

**Paso 2: Abre la terminal**
Abre tu consola de comandos (Símbolo del sistema, PowerShell, o Terminal en macOS/Linux) y navega hasta el directorio donde guardaste los archivos utilizando el comando `cd`.

**Paso 3: Ejecuta el intérprete**
Llama a Python, seguido del nombre del motor y finalmente el nombre de tu script. Escribe el siguiente comando y presiona *Enter*:

```bash
python lenguajeL.py emergencia.l
```
**Paso 4: Observa la simulación**
Si tu sintaxis es correcta, el intérprete analizará el código y comenzará a imprimir en la consola la telemetría simulada y las acciones de los actuadores en tiempo real. Verás una salida similar a esta:

```bash

[ECO-GRID] --- BUS DE DATOS INICIALIZADO ---
[SENSOR] Temp bateria_principal: 58.5°C
[ACTUADOR] Enfriamiento en bateria_principal -> ENCENDIDO
[ACTUADOR] Relé linea_solar -> AISLADO
[ALERTA HMI] 🚨 ¡CONDICIÓN CRÍTICA DETECTADA EN LA RED! 🚨
[SISTEMA] Pausa operativa (1s)...
```

## 📚 Referencia Rápida del Léxico
Primitivas del Sistema (Sensores y Actuadores)
init_grid: Inicializa el bus de datos de la microred.

* **leer_temperatura(ID):** Devuelve la temperatura de una celda en °C.

* **estado_carga(ID):** Devuelve el nivel de almacenamiento (SOC) en %.

* **leer_generacion(ID):** Mide la inyección de potencia (kW) de fuentes renovables.

* **leer_demanda(ID):** Mide el consumo eléctrico (kW) de un sector.

* **conmutar_linea(ID, estado):** Activa (verdadero) o aísla (falso) relés mecánicos.

* **activar_refrigeracion(ID, estado):** Controla el sistema de enfriamiento térmico.

* **emitir_alerta:** Activa alarmas visuales/sonoras en el sistema HMI.

* **esperar(segundos):** Pausa operativa para estabilización del hardware.

### Estructuras de Control de Flujo
* **Bifurcación:** si_verdadero ... entonces ... [sino ...] fin_si

* **Vigilancia Continua:** mientras ... ejecutar ... fin_mientras

* **Ciclo Fijo:** repetir ... veces ... fin_repetir

### Operadores
* **Lógicos:** y, o, no

* **Relacionales:** ==, !=, <, >, <=, >=

* **Aritméticos:** +, -, *, /