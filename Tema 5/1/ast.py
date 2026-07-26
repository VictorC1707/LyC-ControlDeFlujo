class Nodo:
    pass

class Numero(Nodo):
    def __init__(self, valor):
        self.valor = valor

class Suma(Nodo):
    def __init__(self, izquierda, derecha):
        self.izquierda = izquierda
        self.derecha = derecha

class Multiplicacion(Nodo):
    def __init__(self, izquierda, derecha):
        self.izquierda = izquierda
        self.derecha = derecha

class Asignacion(Nodo):
    def __init__(self, variable, expresion):
        self.variable = variable
        self.expresion = expresion


ast = Asignacion(
    variable="x",
    expresion=Suma(
        izquierda=Numero(2),
        derecha=Multiplicacion(
            izquierda=Numero(3),
            derecha=Numero(4)
        )
    )
)


def mostrar_ast(nodo, nivel=0):
    indent = "  " * nivel
    if isinstance(nodo, Numero):
        print(f"{indent}Numero({nodo.valor})")
    elif isinstance(nodo, Suma):
        print(f"{indent}Suma")
        mostrar_ast(nodo.izquierda, nivel+1)
        mostrar_ast(nodo.derecha, nivel+1)
    elif isinstance(nodo, Multiplicacion):
        print(f"{indent}Multiplicacion")
        mostrar_ast(nodo.izquierda, nivel+1)
        mostrar_ast(nodo.derecha, nivel+1)
    elif isinstance(nodo, Asignacion):
        print(f"{indent}Asignacion -> {nodo.variable}")
        mostrar_ast(nodo.expresion, nivel+1)

mostrar_ast(ast)