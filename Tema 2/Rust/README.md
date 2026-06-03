# 🦀 Benchmark Rust: Cálculo de Raíces Cuadráticas

Este programa en Rust forma parte de un estudio de benchmarking orientado a evaluar el rendimiento puro y la seguridad de memoria de lenguajes compilados. Su propósito es resolver iterativamente ecuaciones de segundo grado a partir de vectores generados aleatoriamente, destacando por su control de bajo nivel mediante la implementación de un asignador de memoria personalizado (Custom Allocator).

## 🎯 Propósito del Script

El código fue diseñado para asegurar la consistencia algorítmica frente a otros lenguajes (como Python, Zig o C++), ejecutando exactamente el mismo flujo lógico.

Implementa la resolución matemática de la fórmula cuadrática:
$ax^2 + bx + c = 0$

Evaluando el discriminante para determinar la naturaleza de las raíces:
$\Delta = b^2 - 4ac$

El programa acumula las partes reales e imaginarias resultantes y reporta métricas de rendimiento estrictas.

---

## ⚙️ Características Técnicas Avanzadas

* **Asignador de Memoria Global (`PeakAlloc`):** A diferencia de otros lenguajes que dependen de herramientas externas, este script intercepta directamente las llamadas al sistema (System Allocator) utilizando `AtomicUsize`. Esto permite perfilar el consumo pico de memoria RAM de forma nativa y sin sobrecarga externa (overhead).
* **Determinismo (PRNG Personalizado):** Implementa un Generador Congruencial Lineal (LCG) propio con una semilla estática (`1505171219`). Esto garantiza que los vectores se pueblen con los mismos valores en cada ejecución, sin depender de la librería `rand` (reduciendo dependencias).
* **Control Térmico (División por cero):** Incluye un bucle de mitigación que garantiza que ningún coeficiente del vector `a` sea cercano a **0.0**, evitando comportamientos indefinidos (NaN) al dividir por el denominador.
* **Cronometraje de Alta Precisión:** Utiliza `std::time::Instant` para medir el tiempo exacto de procesamiento del bucle matemático principal, expresado en milisegundos.

---

## 🛠️ Requisitos y Ejecución

Este programa fue diseñado como un archivo autónomo (standalone). No requiere un gestor de paquetes complejo ni dependencias en un archivo `Cargo.toml`. Utiliza exclusivamente la biblioteca estándar (std) de Rust.

### Requisitos
* Compilador de Rust instalado (`rustc`).

### Cómo compilar y ejecutar
Abre tu terminal, navega al directorio donde guardaste el archivo (por ejemplo, `main.rs`) y ejecuta los siguientes comandos:

1. Compilar el código con optimizaciones de rendimiento:
```bash
   rustc -O main.rs
```
2. Ejecutar el binario generado:

```bash
   main.exe
```

## 📊 Salida Esperada (Output)
Al finalizar la ejecución, el programa imprimirá en la consola los resultados con el siguiente formato:

```bash
Suma Real: [Valor Flotante]
Suma Imag: [Valor Flotante]
Tiempo Total: 0.0XXXX ms
Memoria Pico: 0.0XXXX MB
```
Sumas: Verifican la precisión del cálculo de coma flotante (f64) frente a las implementaciones en otros lenguajes.

Tiempo Total y Memoria Pico: Constituyen la métrica principal del benchmarking arquitectónico del compilador de Rust.