class Nodo:
    """Clase base para todos los nodos del árbol."""
    pass

class NodoAsignacion(Nodo):
    def __init__(self, identificador, expresion):
        self.identificador = identificador
        self.expresion = expresion

    def __repr__(self):
        return f"Asignacion(variable='{self.identificador}', valor={self.expresion})"

class NodoIf(Nodo):
    def __init__(self, condicion, cuerpo_verdadero, cuerpo_falso=None):
        self.condicion = condicion
        self.cuerpo_verdadero = cuerpo_verdadero
        self.cuerpo_falso = cuerpo_falso

    def __repr__(self):
        return f"If(condicion={self.condicion}, then={self.cuerpo_verdadero}, else={self.cuerpo_falso})"

class NodoLlamada(Nodo):
    def __init__(self, nombre_funcion, argumentos):
        self.nombre_funcion = nombre_funcion
        self.argumentos = argumentos

    def __repr__(self):
        return f"LlamadaFuncion(nombre='{self.nombre_funcion}', args={self.argumentos})"