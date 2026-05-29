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


