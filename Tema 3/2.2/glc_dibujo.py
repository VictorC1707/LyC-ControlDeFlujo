"""
================================================================================
 GRAMATICA LIBRE DE CONTEXTO PARA HERRAMIENTAS DE DIBUJO
 Alfabeto terminal: Sigma = {a, c, g, t}
   a = avanzar 1 unidad
   c = girar a la derecha 60 grados
   g = girar a la derecha 90 grados
   t = terminar / cerrar el trazo actual

 Este programa hace dos cosas, en este orden, para cada figura:
   1) Muestra la derivacion paso a paso (igual que las tablas del informe).
   2) Interpreta la cadena terminal resultante con un cursor tipo "tortuga"
      y dibuja la figura con matplotlib.
"""

import matplotlib.pyplot as plt
import numpy as np
import time

# ------------------------------------------------------------------------
# 1. DEFINICION DE LAS PRODUCCIONES (como diccionario de reglas)
# ------------------------------------------------------------------------
# Cada entrada: nombre -> lista de derivaciones (paso, forma_sentencial, regla)
# Se definen "a mano" para que coincidan EXACTAMENTE con las tablas del informe.

DERIVACIONES = {
    "Cuadrado": {
        "cadena": "agagagagat",
        "pasos": [
            (0, "S",                 "Axioma"),
            (1, "F",                 "S -> F"),
            (2, "agF",                "F -> a g F  (lado 1)"),
            (3, "agagF",              "F -> a g F  (lado 2)"),
            (4, "agagagF",            "F -> a g F  (lado 3)"),
            (5, "agagagagat",         "F -> a t    (lado 4, paro)"),
        ]
    },
    "Arbol": {
        "cadena": "agaaatggaaat",
        "pasos": [
            (0, "S",                          "Axioma"),
            (1, "B",                          "S -> B"),
            (2, "aRD",                        "B -> a R D   (tronco; bifurca en R y D)"),
            (3, "agaR1D",                     "R -> g a R1  (fija direccion: gira 90 y avanza)"),
            (4, "agaaR1D",                    "R1 -> a R1   (rama R continua recto)"),
            (5, "agaaatD",                    "R1 -> a t    (rama R cierra en hoja)"),
            (6, "agaaatggaD1",                "D -> g g a D1 (fija direccion: gira 180 y avanza)"),
            (7, "agaaatggaaD1",               "D1 -> a D1   (rama D continua recto)"),
            (8, "agaaatggaaat",               "D1 -> a t    (rama D cierra en hoja)"),
        ]
    },
    "Cubo": {
        "cadena": "agagagagagagagagagagagagagagat",
        "pasos": [
            (0,  "S",                                   "Axioma"),
            (1,  "C",                                   "S -> C"),
            (2,  "QagQagQat",                            "C -> Q a g Q a g Q a t"),
            (3,  "agQagQagQat",                          "Q(cara1) -> a g Q  (lado 1)"),
            (4,  "agagQagQagQat",                        "Q(cara1) -> a g Q  (lado 2)"),
            (5,  "agagagQagQagQat",                      "Q(cara1) -> a g Q  (lado 3)"),
            (6,  "agagagagagQagQat",                     "Q(cara1) -> a g    (lado 4, cierre cara 1)"),
            (7,  "agagagagag agQagQat".replace(" ", ""), "Q(cara2) -> a g Q  (lado 1)"),
            (8,  "agagagagag agagQagQat".replace(" ", ""), "Q(cara2) -> a g Q  (lado 2)"),
            (9,  "agagagagag agagagQagQat".replace(" ", ""), "Q(cara2) -> a g Q  (lado 3)"),
            (10, "agagagagag agagagagagQat".replace(" ", ""), "Q(cara2) -> a g   (lado 4, cierre cara 2)"),
            (11, "agagagagagagagagagag agQat".replace(" ", ""), "Q(cara3) -> a g Q  (lado 1)"),
            (12, "agagagagagagagagagag agagQat".replace(" ", ""), "Q(cara3) -> a g Q  (lado 2)"),
            (13, "agagagagagagagagagag agagagQat".replace(" ", ""), "Q(cara3) -> a g Q  (lado 3)"),
            (14, "agagagagagagagagagagagagagagagat", "Q(cara3) -> a g  (cierre cara 3) + a t final"),
        ]
    },
    "Hexagono": {
        "cadena": "acacacacacat",
        "pasos": [
            (0, "S",                  "Axioma"),
            (1, "H",                  "S -> H"),
            (2, "acH",                "H -> a c H  (lado 1)"),
            (3, "acacH",              "H -> a c H  (lado 2)"),
            (4, "acacacH",            "H -> a c H  (lado 3)"),
            (5, "acacacacH",          "H -> a c H  (lado 4)"),
            (6, "acacacacacH",        "H -> a c H  (lado 5)"),
            (7, "acacacacacat",       "H -> a t    (lado 6, paro)"),
        ]
    },
    "Espiral": {
        "cadena": "aagaagaagat",
        "pasos": [
            (0, "S",                "Axioma"),
            (1, "K",                "S -> K"),
            (2, "aagK",              "K -> a a g K  (tramo 1)"),
            (3, "aagaagK",           "K -> a a g K  (tramo 2)"),
            (4, "aagaagaagK",        "K -> a a g K  (tramo 3)"),
            (5, "aagaagaagat",       "K -> a t      (tramo final, paro)"),
        ]
    },
}

# Angulos de giro fijados en el alfabeto terminal (NO se redefinen nunca)
ANGULO_C = 60   # grados
ANGULO_G = 90   # grados


# ------------------------------------------------------------------------
# 2. MOSTRAR LA DERIVACION PASO A PASO EN CONSOLA
# ------------------------------------------------------------------------
def mostrar_derivacion(nombre, datos, pausa=0.0):
    print("\n" + "=" * 70)
    print(f" DERIVACION: {nombre}")
    print("=" * 70)
    print(f"{'Paso':<6}{'Forma sentencial':<35}{'Regla aplicada'}")
    print("-" * 70)
    for paso, forma, regla in datos["pasos"]:
        print(f"{paso:<6}{forma:<35}{regla}")
        if pausa:
            time.sleep(pausa)
    print("-" * 70)
    print(f"Cadena terminal final: {datos['cadena']}")
    print("=" * 70)


# ------------------------------------------------------------------------
# 3. INTERPRETE GRAFICO ("TORTUGA") DE LA CADENA TERMINAL
# ------------------------------------------------------------------------
def interpretar_y_dibujar(nombre, cadena, ax, paso_unidad=1.0, puntos_bifurcacion=None):
    """
    Recorre la cadena terminal simbolo por simbolo y construye las
    coordenadas del trazo, respetando la semantica fija de Sigma:
        a -> avanzar 'paso_unidad' en la direccion actual
        c -> girar 60 grados (sentido horario)
        g -> girar 90 grados (sentido horario)
        t -> terminar el trazo actual (no mueve el cursor)

    'puntos_bifurcacion' es una lista opcional de INDICES (posiciones
    dentro de la cadena) en los que el interprete debe GUARDAR el
    estado actual (posicion + angulo) y, en la siguiente terminacion
    de trazo (t) despues de ese indice, RESTAURAR ese estado guardado
    antes de seguir leyendo. Esto simula la bifurcacion real de un
    arbol de derivacion en el que dos no terminales (p. ej. R y D)
    parten del mismo punto, aunque la gramatica en si no use corchetes.
    """
    x, y = 0.0, 0.0
    angulo = 90.0  # empieza mirando "hacia arriba"
    xs, ys = [x], [y]
    trazos = []  # lista de (xs, ys) para poder dibujar varias ramas separadas

    pila_estados = []
    if puntos_bifurcacion:
        # ordenamos para procesarlos en el orden en que aparecen
        puntos_bifurcacion = sorted(puntos_bifurcacion)

    idx_bifurcacion = 0

    for i, simbolo in enumerate(cadena):
        # ¿Este indice es un punto de bifurcacion? Si es asi, guardamos
        # el estado ANTES de seguir, para poder volver aqui despues.
        if puntos_bifurcacion and idx_bifurcacion < len(puntos_bifurcacion) and i == puntos_bifurcacion[idx_bifurcacion]:
            pila_estados.append((x, y, angulo))
            idx_bifurcacion += 1

        if simbolo == "a":
            rad = np.radians(angulo)
            x += paso_unidad * np.cos(rad)
            y += paso_unidad * np.sin(rad)
            xs.append(x)
            ys.append(y)
        elif simbolo == "c":
            angulo -= ANGULO_C
        elif simbolo == "g":
            angulo -= ANGULO_G
        elif simbolo == "t":
            # cierre de una rama: guardamos el trazo actual como
            # segmento independiente y, si hay un estado pendiente
            # en la pila, retomamos desde ahi para la siguiente rama
            trazos.append((xs[:], ys[:]))
            if pila_estados:
                x, y, angulo = pila_estados.pop()
                xs, ys = [x], [y]
        else:
            raise ValueError(f"Simbolo fuera del alfabeto Sigma: {simbolo}")

    # si quedo algun trazo abierto sin 't' final, lo agregamos tambien
    if len(xs) > 1 and (not trazos or xs != trazos[-1][0]):
        trazos.append((xs, ys))

    todos_x = [v for tx, _ in trazos for v in tx]
    todos_y = [v for _, ty in trazos for v in ty]

    for tx, ty in trazos:
        ax.plot(tx, ty, marker="o", markersize=3, linewidth=2, color="#1F3864")

    ax.scatter([todos_x[0]], [todos_y[0]], color="green", s=60, zorder=5, label="Inicio")
    ax.set_title(nombre, fontsize=13, fontweight="bold", color="#1F3864")
    ax.set_aspect("equal")
    ax.axis("off")
    ax.legend(loc="upper right", fontsize=7)


# ------------------------------------------------------------------------
# 4. EJECUCION: derivacion en consola + grafico para cada figura
# ------------------------------------------------------------------------
def ejecutar_demo(pausa_consola=0.0):
    nombres = list(DERIVACIONES.keys())

    # Paso 1: mostrar las 5 derivaciones en consola, una por una
    for nombre in nombres:
        mostrar_derivacion(nombre, DERIVACIONES[nombre], pausa=pausa_consola)

    # Paso 2: dibujar las 5 figuras juntas en una sola ventana (grid 2x3)
    fig, axes = plt.subplots(2, 3, figsize=(14, 9))
    fig.suptitle("Figuras generadas por la GLC  (Sigma = {a, c, g, t})",
                 fontsize=15, fontweight="bold", color="#1F3864")
    axes_flat = axes.flatten()

    for i, nombre in enumerate(nombres):
        if nombre == "Arbol":
            # La cadena es: a (tronco) + R...t + D...t
            # El tronco es el simbolo en indice 0; el punto de bifurcacion
            # (donde hay que "volver" antes de dibujar D) es justo
            # despues de ese tronco, es decir, en el indice 1.
            interpretar_y_dibujar(nombre, DERIVACIONES[nombre]["cadena"], axes_flat[i],
                                puntos_bifurcacion=[1])
        else:
            interpretar_y_dibujar(nombre, DERIVACIONES[nombre]["cadena"], axes_flat[i])

    axes_flat[-1].axis("off")  # sexta celda vacia (solo 5 figuras)

    plt.tight_layout()
    from pathlib import Path; output_path = Path(__file__).parent / "figuras_glc.png"; plt.savefig(output_path, dpi=150, bbox_inches="tight")
    print(f"\nImagen combinada guardada en: {output_path}")
    plt.show()


if __name__ == "__main__":
    ejecutar_demo(pausa_consola=0.0)