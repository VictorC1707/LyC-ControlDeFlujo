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
El intérprete toma como entrada archivos de texto con el código escrito en Lenguaje L (se recomienda la extensión .l por convención).

Para ejecutar una rutina, abre tu terminal en la carpeta donde tienes los archivos y utiliza el siguiente comando:

```bash
python lenguajeL.py ruta/al/script.l
```
Ejemplo Práctico: Prevención de Fuga Térmica
Puedes crear un archivo llamado emergencia.l con el siguiente código y ejecutarlo para ver la simulación en acción:

```bash
init_grid
temp_critica = 55.0

mientras verdadero == verdadero ejecutar
    temp_actual = leer_temperatura(bateria_principal)
    
    si_verdadero temp_actual >= temp_critica entonces
        activar_refrigeracion(bateria_principal, verdadero)
        conmutar_linea(linea_solar, falso)
        emitir_alerta
    sino
        activar_refrigeracion(bateria_principal, falso)
    fin_si
    
    esperar(1)
fin_mientras
```
## 📚 Referencia Rápida del Léxico
Primitivas del Sistema (Sensores y Actuadores)
init_grid: Inicializa el bus de datos de la microred.

leer_temperatura(ID): Devuelve la temperatura de una celda en °C.

estado_carga(ID): Devuelve el nivel de almacenamiento (SOC) en %.

leer_generacion(ID): Mide la inyección de potencia (kW) de fuentes renovables.

leer_demanda(ID): Mide el consumo eléctrico (kW) de un sector.

conmutar_linea(ID, estado): Activa (verdadero) o aísla (falso) relés mecánicos.

activar_refrigeracion(ID, estado): Controla el sistema de enfriamiento térmico.

emitir_alerta: Activa alarmas visuales/sonoras en el sistema HMI.

esperar(segundos): Pausa operativa para estabilización del hardware.

### Estructuras de Control de Flujo
Bifurcación: si_verdadero ... entonces ... [sino ...] fin_si

Vigilancia Continua: mientras ... ejecutar ... fin_mientras

Ciclo Fijo: repetir ... veces ... fin_repetir

### Operadores
Lógicos: y, o, no

Relacionales: ==, !=, <, >, <=, >=

Aritméticos: +, -, *, /