# 🧮 Benchmark Python: Cálculo de Raíces Cuadráticas

Este script en Python forma parte de un estudio de benchmarking y análisis de rendimiento para el procesamiento matemático intensivo[cite: 475, 483]. Su propósito fundamental es resolver iterativamente ecuaciones de segundo grado a partir de vectores generados aleatoriamente, midiendo con precisión el tiempo de cómputo y el impacto en la memoria del sistema.

## 🎯 Propósito del Script
El programa está diseñado para asegurar consistencia algorítmica y permitir una comparativa justa frente a otros lenguajes de programación (como C++, Rust o Zig)[cite: 476, 486, 490]. 

Implementa la resolución de la fórmula cuadrática estándar:
$ax^2 + bx + c = 0$

Evaluando el discriminante para procesar bifurcaciones lógicas:
$\Delta = b^2 - 4ac$

El programa clasifica automáticamente entre raíces reales e imaginarias conjugadas, acumulando las sumatorias de sus partes para verificar la exactitud del cálculo.

---

## ⚙️ Características Técnicas

* **Determinismo:** Utiliza una semilla estática (`1505171219`) para la generación de números seudoaleatorios. [cite_start]Esto garantiza que las variables $a, b, c$ de longitud $n=200$ sean exactamente iguales en cada ejecución, eliminando variaciones en la carga de trabajo[cite: 489].
* **Control Térmico (División por cero):** Incluye un bucle `while` de mitigación que garantiza que ningún coeficiente del vector `a` sea $0.0$ (evitando el colapso matemático al dividir por `2.0 * ai`).
* **Perfilado de Memoria:** Implementa la librería estándar `tracemalloc` para capturar el consumo pico de memoria RAM durante la asignación y cálculo de los vectores.
* **Cronometraje de Alta Precisión:** Utiliza `time.perf_counter()` para ignorar latencias del sistema operativo y capturar el tiempo real de procesamiento del procesador en milisegundos.

---

## 🛠️ Requisitos y Ejecución

El script no requiere la instalación de dependencias de terceros (como NumPy o Pandas), ya que fue construido deliberadamente utilizando exclusivamente la biblioteca estándar de Python para evaluar el rendimiento puro del intérprete (CPython).

### Requisitos
* Python 3.4 o superior (requerido para `tracemalloc` y F-Strings).

### Cómo ejecutarlo
Abre tu terminal, navega al directorio donde guardaste el archivo y ejecuta:

```bash
python vectores.py
```

### 📊 Salida Esperada (Output)
Al finalizar la ejecución, el script imprimirá un reporte en consola similar al siguiente formato:

```bash
Suma de partes reales:      [Valor Flotante]
Suma de partes imaginarias: [Valor Flotante]

Tiempo de cálculo: 0.0XXXXX ms
Memoria pico: 0.0XXXXX MB
Sumas: Confirman que la matemática y los bucles de control se ejecutaron correctamente.
```

Tiempo y Memoria: Son las métricas clave (Benchmark) utilizadas para la comparativa arquitectónica frente a otros lenguajes compilados o interpretados.