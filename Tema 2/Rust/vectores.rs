use std::alloc::{GlobalAlloc, Layout, System};
use std::sync::atomic::{AtomicUsize, Ordering};
use std::time::Instant;

// ---------- Allocator personalizado para medir memoria pico ----------
struct PeakAlloc<A: GlobalAlloc> {
    inner: A,
    current: AtomicUsize, // bytes actualmente asignados
    peak: AtomicUsize,    // pico máximo observado
}

impl<A: GlobalAlloc> PeakAlloc<A> {
    const fn new(inner: A) -> Self {
        PeakAlloc {
            inner,
            current: AtomicUsize::new(0),
            peak: AtomicUsize::new(0),
        }
    }
}

unsafe impl<A: GlobalAlloc> GlobalAlloc for PeakAlloc<A> {
    unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
        let ptr = self.inner.alloc(layout);
        if !ptr.is_null() {
            let size = layout.size();
            let prev = self.current.fetch_add(size, Ordering::SeqCst);
            let total = prev + size;
            // Actualizar el pico si el nuevo total es mayor
            let mut peak = self.peak.load(Ordering::SeqCst);
            while total > peak {
                match self.peak.compare_exchange(peak, total, Ordering::SeqCst, Ordering::SeqCst) {
                    Ok(_) => break,
                    Err(actual) => peak = actual,
                }
            }
        }
        ptr
    }

    unsafe fn dealloc(&self, ptr: *mut u8, layout: Layout) {
        self.inner.dealloc(ptr, layout);
        let size = layout.size();
        self.current.fetch_sub(size, Ordering::SeqCst);
    }
}

// Instalar el allocator personalizado como global
#[global_allocator]
static PEAK_ALLOC: PeakAlloc<System> = PeakAlloc::new(System);

// ---------- Generador de números aleatorios simple (LCG) ----------
struct SimpleRng {
    state: u64,
}

impl SimpleRng {
    fn new(seed: u64) -> Self {
        SimpleRng { state: seed }
    }

    fn next_u64(&mut self) -> u64 {
        self.state = self.state.wrapping_mul(6364136223846793005).wrapping_add(1442695040888963407);
        self.state
    }

    fn gen_range(&mut self, min: f64, max: f64) -> f64 {
        let range = max - min;
        let bits = self.next_u64();
        let val = (bits as f64) / (u64::MAX as f64);
        min + (val * range)
    }
}

fn main() {
    // ---- CONFIGURACIÓN ----
    let n: usize = 200;
    let semilla: u64 = 1505171219;

    // Inicializar el generador con la semilla fija
    let mut rng = SimpleRng::new(semilla);

    // ---- GENERACIÓN DE VECTORES ----
    let mut a: Vec<f64> = vec![0.0; n];
    let mut b: Vec<f64> = vec![0.0; n];
    let mut c: Vec<f64> = vec![0.0; n];

    for i in 0..n {
        let mut a_val: f64 = rng.gen_range(-100.0, 100.0);

        // Garantizar que a[i] no sea cero
        while a_val.abs() < 1e-12 {
            a_val = rng.gen_range(-100.0, 100.0);
        }

        a[i] = a_val;
        b[i] = rng.gen_range(-100.0, 100.0);
        c[i] = rng.gen_range(-100.0, 100.0);
    }

    // ---- INICIALIZAR ACUMULADORES ----
    let mut suma_real: f64 = 0.0;
    let mut suma_imag: f64 = 0.0;

    // ---- REGISTRAR TIEMPO INICIO ----
    let tiempo_inicio = Instant::now();

    // ---- PROCESAMIENTO PRINCIPAL ----
    for i in 0..n {
        let ai = a[i];
        let bi = b[i];
        let ci = c[i];

        let discriminante = bi.powi(2) - 4.0 * ai * ci;

        if discriminante >= 0.0 {
            let raiz_disc = discriminante.sqrt();
            let r1 = (-bi + raiz_disc) / (2.0 * ai);
            let r2 = (-bi - raiz_disc) / (2.0 * ai);
            suma_real += r1 + r2;
        } else {
            let parte_real = -bi / (2.0 * ai);
            let parte_imag = (-discriminante).sqrt() / (2.0 * ai);
            suma_real += 2.0 * parte_real;
            suma_imag += 2.0 * parte_imag;
        }
    }

    // ---- REGISTRAR TIEMPO FIN Y CALCULAR TOTAL ----
    let tiempo_total = tiempo_inicio.elapsed();

    // ---- OBTENER MEMORIA PICO ----
    let peak_bytes = PEAK_ALLOC.peak.load(Ordering::SeqCst);
    let peak_mb = peak_bytes as f64 / (1024.0 * 1024.0);

    // ---- MOSTRAR RESULTADOS ----
    println!("Suma Real: {}", suma_real);
    println!("Suma Imag: {}", suma_imag);
    println!("Tiempo Total: {:.4} ms", tiempo_total.as_secs_f64() * 1000.0);
    println!("Memoria Pico: {:.4} MB", peak_mb);
}