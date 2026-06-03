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