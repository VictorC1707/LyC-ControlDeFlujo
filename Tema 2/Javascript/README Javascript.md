# cálculo de ecuación de segundo grado para vectores a,b,c con cantidad de elemento n para n=200.

## Descripción

Benchmark de rendimiento para el algoritmo de resolución de ecuaciones de segundo grado `a[i]x^2 + b[i]x + c[i] = 0` usando 3 vectores de 200 elementos. Calcula el tiempo de ejecución promedio y el consumo de memoria.

## Requisitos

- [Node.js](https://nodejs.org/) versión 14 o superior

## Instalación de Node.js

### Windows

1. Ir a [https://nodejs.org/](https://nodejs.org/) y descargar el instalador **LTS** (versión recomendada).
2. Ejecutar el `.msi` y seguir los pasos. Asegurarse de marcar la opción **"Add to PATH"**.
3. Abrir una terminal (CMD o PowerShell) y verificar:
   ```bash
   node --version
   ```
   Debe mostrar algo como `v18.x.x` o superior.

### macOS

**instalador oficial:**
1. Descargar el `.pkg` desde [https://nodejs.org/](https://nodejs.org/).
2. Ejecutarlo y seguir los pasos.


### Linux (Ubuntu/Debian)

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Verificar instalación

```bash
node --version
```

## Ejecución

```bash
node benchmark.js
```

## Interpretación de resultados 

El script imprime 4 valores en consola:

| Salida | Descripción |
|---|---|
| `suma_real` | Suma acumulada de las partes reales de todas las raíces. Valor determinista gracias a la semilla fija. |
| `suma_imag` | Suma de las partes imaginarias. Siempre 0 porque las raíces complejas son conjugadas y se cancelan. |
| `tiempo_ejecucion_ms` | Tiempo promedio por ejecución del algoritmo tras 100 iteraciones (con 10 iteraciones de warmup previas). Medido con `process.hrtime.bigint()`. |
| `memoria_pico_mb` | Memoria adicional utilizada durante la ejecución en megabytes. |

### Ejemplo de salida

```
suma_real: -35.923981242485766
suma_imag: 0
tiempo_ejecucion_ms: 0.0512
memoria_pico_mb: 0.0123
```

### Reproducibilidad y personalización

El algoritmo usa una semilla fija (`SEMILLA = 12345`) en el generador pseudoaleatorio, por lo que los valores de `suma_real` y `suma_imag` serán idénticos en cualquier máquina y ejecución.

Para **obtener resultados diferentes**, modifica las siguientes constantes al inicio de `benchmark.js`:

| Constante | Valor por defecto | Cómo afecta |
|---|---|---|
| `SEMILLA` | `12345` | Cambiarla genera vectores distintos y por lo tanto raíces y sumas diferentes |
| `N` | `200` | Aumentarlo procesa más ecuaciones y da más tiempo de ejecución |
| `WARMUP` | `10` | Más iteraciones estabilizan mejor el JIT antes de medir |
| `ITERACIONES` | `100` | Más iteraciones dan un promedio más preciso

## Archivos del proyecto

| Archivo | Descripción |
|---|---|
| `benchmark.js` | Código fuente del benchmark |
| `README.md` | Este archivo de instrucciones |
