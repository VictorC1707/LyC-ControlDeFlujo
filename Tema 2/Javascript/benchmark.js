const N = 200;
const SEMILLA = 12345;
const WARMUP = 10;
const ITERACIONES = 100;

function crearRNG(semilla) {
  let s = semilla;
  return function next() {
    s = (s * 16807) % 2147483647;
    return (s / 2147483647) * 200 - 100;
  };
}

function generarVectores(n, rng) {
  const a = [];
  const b = [];
  const c = [];

  for (let i = 0; i < n; i++) {
    b.push(rng());
    c.push(rng());
    let val = rng();
    while (val === 0) {
      val = rng();
    }
    a.push(val);
  }

  return { a, b, c };
}

function ejecutarAlgoritmo(a, b, c) {
  let suma_real = 0;
  let suma_imag = 0;

  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b[i];
    const ci = c[i];

    const discriminante = Math.pow(bi, 2) - 4 * ai * ci;

    if (discriminante >= 0) {
      const raiz_disc = Math.sqrt(discriminante);
      const r1 = (-bi + raiz_disc) / (2 * ai);
      const r2 = (-bi - raiz_disc) / (2 * ai);
      suma_real += r1 + r2;
    } else {
      const parte_real = -bi / (2 * ai);
      const parte_imag = Math.sqrt(-discriminante) / (2 * ai);
      suma_real += 2 * parte_real;
      suma_imag += parte_imag + (-parte_imag);
    }
  }

  return { suma_real, suma_imag };
}

function ejecutarBenchmark() {
  const rng = crearRNG(SEMILLA);
  const { a, b, c } = generarVectores(N, rng);

  const memInicial = process.memoryUsage().heapUsed;

  for (let i = 0; i < WARMUP; i++) {
    ejecutarAlgoritmo(a, b, c);
  }

  const tiempos = [];
  let memoriaPico = 0;

  for (let i = 0; i < ITERACIONES; i++) {
    const memAntes = process.memoryUsage().heapUsed;

    const tInicio = process.hrtime.bigint();
    const resultado = ejecutarAlgoritmo(a, b, c);
    const tFin = process.hrtime.bigint();

    const memDespues = process.memoryUsage().heapUsed;
    const memIteracion = Math.max(memAntes, memDespues);
    if (memIteracion > memoriaPico) {
      memoriaPico = memIteracion;
    }

    const tiempoMs = Number(tFin - tInicio) / 1e6;
    tiempos.push(tiempoMs);

    if (i === ITERACIONES - 1) {
      console.log(`suma_real: ${resultado.suma_real}`);
      console.log(`suma_imag: ${resultado.suma_imag}`);
    }
  }

  const memFinal = process.memoryUsage().heapUsed;
  const memoriaPicoMb = (memoriaPico - memInicial) / (1024 * 1024);

  const sumaTiempos = tiempos.reduce((acc, t) => acc + t, 0);
  const tiempoPromedio = sumaTiempos / tiempos.length;

  console.log(`tiempo_ejecucion_ms: ${tiempoPromedio.toFixed(4)}`);
  console.log(`memoria_pico_mb: ${Math.max(0, memoriaPicoMb).toFixed(4)}`);
}

ejecutarBenchmark();
