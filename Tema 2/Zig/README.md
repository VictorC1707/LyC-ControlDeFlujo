# Benchmark de Procesamiento Intensivo - Entorno Zig (0.16.0-dev)

Este directorio aloja la solución técnica para el cálculo vectorizado de ecuaciones de segundo grado, desarrollada de forma nativa sobre la infraestructura lingüística de Zig.

## 🛠️ Especificaciones de Hardware del Entorno de Pruebas
* **CPU:** 
* **RAM:** 
* **Sistema Operativo:** Windows 10/11 (x86_64)

## 🔧 Restricciones de Arquitectura e Implementación
* **Cero Librerías Externas:** El control temporal se gestiona por medio del contador de rendimiento de alta precisión de Windows (`RtlQueryPerformanceCounter`). La aleatoriedad se resuelve a través de un Generador Lineal Congruencial (LCG) parametrizado de 64 bits de forma puramente manual.
* **Aislamiento de Métricas:** El ciclo de inicialización y asignación espacial de los vectores en el Heap se excluye por completo de la ventana del temporizador, garantizando un registro temporal limpio del cómputo matemático.
* **Medición de Memoria:** Se audita la presión espacial por medio del asignador nativo de diagnóstico `std.heap.DebugAllocator`.

## 🚀 Instrucciones de Compilación y Ejecución
Para reproducir las pruebas empíricas aplicando las optimizaciones agresivas del compilador (eliminación de comprobaciones de seguridad e inyección en línea de funciones), ejecute el siguiente comando en la terminal:

```bash
zig run main.zig -O ReleaseFast