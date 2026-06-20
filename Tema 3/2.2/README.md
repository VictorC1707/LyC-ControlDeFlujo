# glc_dibujo.py

Programa en Python que implementa y visualiza una **Gramática Libre de Contexto (GLC)** para herramientas de dibujo, usando el alfabeto terminal Σ = {a, c, g, t}.

Hace dos cosas en secuencia:
1. Muestra en consola la derivación paso a paso de cada figura (igual que las tablas del informe).
2. Interpreta la cadena terminal resultante con un cursor tipo "tortuga" y dibuja las 5 figuras con matplotlib.

---

## Requisitos

- Python 3.8 o superior
- matplotlib
- numpy

Instalación de dependencias:

```bash
pip install matplotlib numpy
```

---

## Uso

```bash
python3 glc_dibujo.py
```

El programa:
- Imprime en consola las 5 derivaciones completas, una por una.
- Abre una ventana con las 5 figuras dibujadas en un grid.
- Guarda automáticamente la imagen combinada como `figuras_glc.png` en el directorio de trabajo.

---

## Alfabeto terminal (semántica fija)

| Símbolo | Acción | Ángulo |
|---|---|---|
| `a` | Avanzar una unidad en la dirección actual | — |
| `c` | Girar a la derecha | 60° |
| `g` | Girar a la derecha | 90° |
| `t` | Terminar el trazo actual | — |

La semántica de cada símbolo es **fija e idéntica en todas las producciones**. Ninguna regla redefine lo que significa un terminal.

---

## Gramática G = (V, Σ, P, S)

**No terminales:**
```
V = {S, F, Q, H, B, R, R1, D, D1, K}
```

**Producciones P:**

| NT | Producción | Figura |
|---|---|---|
| S | → F \| H \| C \| B \| K | Axioma |
| F | → a g F \| a t | Cuadrado (4 lados, giro 90°) |
| H | → a c H \| a t | Hexágono (6 lados, giro 60°) |
| Q | → a g Q \| a g | Cuadrado abierto (auxiliar, sin cierre, usado en C) |
| C | → Q a g Q a g Q a t | Cubo: 3 caras Q reposicionadas |
| B | → a R D \| a t | Árbol: tronco + bifurcación en R y D |
| R | → g a R1 | Rama A: fija dirección (1 giro de 90°) |
| R1 | → a R1 \| a t | Rama A: avanza recto |
| D | → g g a D1 | Rama B: fija dirección (2 giros = 180°) |
| D1 | → a D1 \| a t | Rama B: avanza recto |
| K | → a a g K \| a t | Espiral rectangular |

### Nota de diseño del árbol

R y D **no repiten el giro en cada nivel de recursión**. En vez de eso, cada una fija su dirección una sola vez (R gira 90°, D gira 180°) y delega en R1/D1 para avanzar en línea recta. Si el giro se aplicara en cada paso recursivo, dos aplicaciones de 180° se cancelarían entre sí y la rama D volvería a apuntar hacia el tronco.

---

## Cadenas terminales generadas

| Figura | Cadena | Longitud |
|---|---|---|
| Cuadrado | `a g a g a g a g a t` | 10 símbolos |
| Árbol | `a g a a a t g g a a a t` | 12 símbolos |
| Cubo | `(a g)×4 a g (a g)×4 a g (a g)×4 a t` | 30 símbolos |
| Hexágono | `a c a c a c a c a c a t` | 12 símbolos |
| Espiral | `a a g a a g a a g a t` | 11 símbolos |

---

## Intérprete gráfico (cursor tipo tortuga)

La función `interpretar_y_dibujar()` recorre la cadena símbolo por símbolo y actualiza la posición y dirección del cursor:

```
a  →  x += cos(ángulo),  y += sin(ángulo)
c  →  ángulo -= 60°
g  →  ángulo -= 90°
t  →  cierra el trazo actual
```

### Bifurcación (árbol)

La función acepta el parámetro `puntos_bifurcacion`, una lista de índices dentro de la cadena donde el intérprete debe **guardar el estado** (posición + ángulo) antes de seguir. Cuando encuentra un `t`, restaura el estado guardado para que la siguiente rama parta desde el mismo punto de bifurcación.

Esto simula la bifurcación real del árbol de derivación sin necesidad de usar corchetes `[ ]` en la gramática formal.

---

## Limitación conocida: el cubo

Con un alfabeto de solo giros de 60° y 90°, el cubo no logra una proyección isométrica geométricamente fiel. Cada cara cierra sobre sí misma en lugar de proyectarse en profundidad, así que visualmente se parece a un cuadrado simple. Esta es una consecuencia directa del poder expresivo acotado de Σ = {a, c, g, t}, no un error del programa.

Para una proyección isométrica real haría falta ampliar el alfabeto con un terminal de giro de 30° o 45°.

---

## Estructura del código

```
glc_dibujo.py
├── DERIVACIONES        # diccionario con cadenas y pasos de derivación de las 5 figuras
├── mostrar_derivacion()   # imprime la tabla de pasos en consola
├── interpretar_y_dibujar()  # cursor tipo tortuga + soporte de bifurcación
└── ejecutar_demo()     # corre las 5 derivaciones y genera el gráfico combinado
```
