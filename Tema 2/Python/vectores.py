import math
import random
import time

#Configuracion

n = 2000           
SEMILLA = 1505171219   
random.seed(SEMILLA)

#Vectores

a = [0.0] * n
b = [0.0] * n
c = [0.0] * n

for i in range(n):
    a_val = random.uniform(-100.0, 100.0)
    
    while -1e-12 < a_val < 1e-12:
        a_val = random.uniform(-100.0, 100.0)
    a[i] = a_val
    b[i] = random.uniform(-100.0, 100.0)
    c[i] = random.uniform(-100.0, 100.0)

suma_real = 0.0
suma_imag = 0.0

inicio = time.perf_counter()

for i in range(n):
    ai = a[i]
    bi = b[i]
    ci = c[i]

    discriminante = bi * bi - 4.0 * ai * ci

    if discriminante >= 0:
        raiz_disc = math.sqrt(discriminante)
        r1 = (-bi + raiz_disc) / (2.0 * ai)
        r2 = (-bi - raiz_disc) / (2.0 * ai)
        suma_real += r1 + r2
        
    else:
        parte_real = -bi / (2.0 * ai)
        parte_imag = math.sqrt(-discriminante) / (2.0 * ai)
        suma_real += parte_real * 2.0  
        suma_imag += parte_imag * 2.0

fin = time.perf_counter()

tiempo_ms = (fin- inicio) * 1000.0

print(f"Suma de partes reales:      {suma_real}")
print(f"Suma de partes imaginarias: {suma_imag}")
print(f"\nTiempo de cálculo: {tiempo_ms:.6f} ms")