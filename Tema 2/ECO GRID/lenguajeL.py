import sys
import time
import ply.lex as lex
import ply.yacc as yacc

# ---------- 1. Simulación del hardware ECO-GRID ----------
class Microred:
    """Modelo simulado de la microred eléctrica."""
    def __init__(self):
        # Estado inicial simulado de las baterías
        self.baterias = {
            'banco_litio': {'carga': 95.0, 'temperatura': 38.0},
            'bateria_principal': {'carga': 42.0, 'temperatura': 58.5},
        }
        # Estado inicial de los relés (contactores)
        self.lineas = {
            'linea_solar': True,
            'sector_industrial': True,
            'red_publica': False,
            'sector_esencial': True,
            'sector_no_esencial': True
        }

    # Sensores originales
    def leer_temperatura(self, id_bateria):
        return self.baterias.get(id_bateria, {}).get('temperatura', 0.0)

    def estado_carga(self, id_bateria):
        return self.baterias.get(id_bateria, {}).get('carga', 0.0)

    # NUEVO: Sensores de flujo de energía (kW)
    def leer_generacion(self, id_fuente):
        # Simulamos una generación solar alta para que se active la venta
        return 150.0 

    def leer_demanda(self, id_sector):
        # Simulamos un consumo interno menor a la generación
        return 100.0 

    # Actuadores
    def conmutar_linea(self, sector, estado):
        self.lineas[sector] = estado

    def activar_refrigeracion(self, id_bateria, estado):
        if estado and id_bateria in self.baterias:
            self.baterias[id_bateria]['temperatura'] -= 2.0 

    def emitir_alerta(self):
        pass # La lógica visual/sonora se maneja en el intérprete

# Instancia global
red = Microred()

# ---------- 2. Analizador Léxico (Lexer) ----------
palabras_reservadas = {
    'init_grid': 'INIT_GRID',
    'leer_temperatura': 'LEER_TEMP',
    'estado_carga': 'ESTADO_CARGA',
    'leer_generacion': 'LEER_GEN',          # NUEVO
    'leer_demanda': 'LEER_DEM',             # NUEVO
    'conmutar_linea': 'CONMUTAR',
    'activar_refrigeracion': 'REFRIGERACION', 
    'emitir_alerta': 'ALERTA',               
    'esperar': 'ESPERAR',                    
    'si_verdadero': 'SI',
    'entonces': 'ENTONCES',
    'fin_si': 'FIN_SI',
    'sino': 'SINO',
    'mientras': 'MIENTRAS',
    'ejecutar': 'EJECUTAR',
    'fin_mientras': 'FIN_MIENTRAS',
    'repetir': 'REPETIR',
    'veces': 'VECES',
    'fin_repetir': 'FIN_REPETIR',
    'verdadero': 'VERDADERO',
    'falso': 'FALSO',
    'y': 'Y',
    'o': 'O',
    'no': 'NO',
}

tokens = [
    'ID', 'ENTERO', 'FLOTANTE',
    'MAS', 'MENOS', 'POR', 'ENTRE',
    'IGUAL', 'DISTINTO', 'MENOR', 'MAYOR', 'MENOR_IGUAL', 'MAYOR_IGUAL',
    'ASIGNACION', 'PAREN_IZQ', 'PAREN_DER', 'COMA', 'NUEVA_LINEA',
] + list(palabras_reservadas.values())

t_MAS = r'\+'
t_MENOS = r'-'
t_POR = r'\*'
t_ENTRE = r'/'
t_IGUAL = r'=='
t_DISTINTO = r'!='
t_MENOR = r'<'
t_MAYOR = r'>'
t_MENOR_IGUAL = r'<='
t_MAYOR_IGUAL = r'>='
t_ASIGNACION = r'='
t_PAREN_IZQ = r'\('
t_PAREN_DER = r'\)'
t_COMA = r','
t_ignore = ' \t'

def t_ID(tok):
    r'[a-zA-Z_][a-zA-Z0-9_]*'
    tok.type = palabras_reservadas.get(tok.value, 'ID')
    return tok

def t_FLOTANTE(tok):
    r'\d+\.\d+'
    tok.value = float(tok.value)
    return tok

def t_ENTERO(tok):
    r'\d+'
    tok.value = int(tok.value)
    return tok

def t_NUEVA_LINEA(tok):
    r'\n+'
    tok.lexer.lineno += len(tok.value)
    return tok

def t_comentario(tok):
    r'//[^\n]*'
    pass

def t_error(tok):
    print(f"Carácter ilegal: '{tok.value[0]}' en línea {tok.lineno}")
    tok.lexer.skip(1)

lexer = lex.lex()

# ---------- 3. Analizador Sintáctico (Parser) ----------
precedencia = (
    ('left', 'Y', 'O'),
    ('left', 'IGUAL', 'DISTINTO', 'MENOR', 'MAYOR', 'MENOR_IGUAL', 'MAYOR_IGUAL'),
    ('left', 'MAS', 'MENOS'),
    ('left', 'POR', 'ENTRE'),
    ('right', 'NO'),
)

def p_programa(p):
    """programa : lista_sentencias"""
    p[0] = p[1]

def p_lista_sentencias(p):
    """lista_sentencias : sentencia
                        | lista_sentencias sentencia"""
    if len(p) == 2:
        p[0] = [p[1]] if p[1] is not None else []
    else:
        p[0] = p[1] + ([p[2]] if p[2] is not None else [])

def p_sentencia(p):
    """sentencia : comando NUEVA_LINEA
                 | asignacion NUEVA_LINEA
                 | declaracion_si
                 | declaracion_mientras
                 | declaracion_repetir
                 | NUEVA_LINEA"""
    if len(p) == 3: p[0] = p[1]
    elif isinstance(p[1], str) and '\n' in p[1]: p[0] = None 
    else: p[0] = p[1]

def p_comando(p):
    """comando : INIT_GRID
               | CONMUTAR PAREN_IZQ ID COMA expresion PAREN_DER
               | REFRIGERACION PAREN_IZQ ID COMA expresion PAREN_DER
               | ALERTA
               | ESPERAR PAREN_IZQ expresion PAREN_DER"""
    if p[1] == 'init_grid': p[0] = ('init_grid',)
    elif p[1] == 'conmutar_linea': p[0] = ('conmutar_linea', p[3], p[5])
    elif p[1] == 'activar_refrigeracion': p[0] = ('refrigeracion', p[3], p[5]) 
    elif p[1] == 'emitir_alerta': p[0] = ('alerta',)                           
    elif p[1] == 'esperar': p[0] = ('esperar', p[3])                           

def p_asignacion(p):
    """asignacion : ID ASIGNACION expresion"""
    p[0] = ('asignar', p[1], p[3])

def p_declaracion_si(p):
    """declaracion_si : SI expresion ENTONCES NUEVA_LINEA lista_sentencias FIN_SI
                      | SI expresion ENTONCES NUEVA_LINEA lista_sentencias SINO NUEVA_LINEA lista_sentencias FIN_SI"""
    if len(p) == 7: p[0] = ('si', p[2], p[5], None)
    else: p[0] = ('si', p[2], p[5], p[8])

def p_declaracion_mientras(p):
    """declaracion_mientras : MIENTRAS expresion EJECUTAR NUEVA_LINEA lista_sentencias FIN_MIENTRAS"""
    p[0] = ('mientras', p[2], p[5])

def p_declaracion_repetir(p):
    """declaracion_repetir : REPETIR expresion VECES NUEVA_LINEA lista_sentencias FIN_REPETIR"""
    p[0] = ('repetir', p[2], p[5])

def p_expresion(p):
    """expresion : expresion_logica"""
    p[0] = p[1]

def p_expresion_logica(p):
    """expresion_logica : expresion_relacional
                        | expresion_logica Y expresion_relacional
                        | expresion_logica O expresion_relacional"""
    if len(p) == 2: p[0] = p[1]
    else: p[0] = (p[2], p[1], p[3])

def p_expresion_relacional(p):
    """expresion_relacional : expresion_aritmetica
                            | expresion_aritmetica IGUAL expresion_aritmetica
                            | expresion_aritmetica DISTINTO expresion_aritmetica
                            | expresion_aritmetica MENOR expresion_aritmetica
                            | expresion_aritmetica MAYOR expresion_aritmetica
                            | expresion_aritmetica MENOR_IGUAL expresion_aritmetica
                            | expresion_aritmetica MAYOR_IGUAL expresion_aritmetica"""
    if len(p) == 2: p[0] = p[1]
    else: p[0] = (p[2], p[1], p[3])

def p_expresion_aritmetica(p):
    """expresion_aritmetica : termino
                            | expresion_aritmetica MAS termino
                            | expresion_aritmetica MENOS termino"""
    if len(p) == 2: p[0] = p[1]
    else: p[0] = (p[2], p[1], p[3])

def p_termino(p):
    """termino : factor
               | termino POR factor
               | termino ENTRE factor"""
    if len(p) == 2: p[0] = p[1]
    else: p[0] = (p[2], p[1], p[3])

def p_factor_literal(p):
    """factor : ENTERO
              | FLOTANTE
              | VERDADERO
              | FALSO"""
    if p[1] == 'verdadero': p[0] = True
    elif p[1] == 'falso': p[0] = False
    else: p[0] = p[1]

def p_factor_id(p):
    """factor : ID"""
    p[0] = ('var', p[1])

def p_factor_comando(p):
    """factor : LEER_TEMP PAREN_IZQ ID PAREN_DER
              | ESTADO_CARGA PAREN_IZQ ID PAREN_DER
              | LEER_GEN PAREN_IZQ ID PAREN_DER
              | LEER_DEM PAREN_IZQ ID PAREN_DER"""
    if p[1] == 'leer_temperatura': p[0] = ('leer_temperatura', p[3])
    elif p[1] == 'estado_carga': p[0] = ('estado_carga', p[3])
    elif p[1] == 'leer_generacion': p[0] = ('leer_generacion', p[3])
    else: p[0] = ('leer_demanda', p[3])

def p_factor_parentesis(p):
    """factor : PAREN_IZQ expresion PAREN_DER"""
    p[0] = p[2]

def p_factor_no(p):
    """factor : NO factor"""
    p[0] = ('no', p[2])

def p_error(p):
    if p: print(f"Error sintáctico en token '{p.value}' (línea {p.lineno})")
    else: print("Error sintáctico: fin de archivo inesperado")

parser = yacc.yacc()

# ---------- 4. Intérprete y Ejecución del AST ----------
class Entorno:
    def __init__(self):
        self.variables = {}

    def obtener(self, nombre):
        return self.variables.get(nombre, 0.0)

    def asignar(self, nombre, valor):
        self.variables[nombre] = valor

def interpretar(arbol, entorno):
    if arbol is None: return
    if isinstance(arbol, list):
        for sentencia in arbol:
            if sentencia is not None: interpretar(sentencia, entorno)
        return

    tipo = arbol[0]

    if tipo == 'init_grid':
        print("\n[ECO-GRID] --- BUS DE DATOS INICIALIZADO ---")
        global red
        red = Microred()
        
    elif tipo == 'conmutar_linea':
        sector, estado = arbol[1], evaluar(arbol[2], entorno)
        red.conmutar_linea(sector, estado)
        print(f"[ACTUADOR] Relé {sector} -> {'CONECTADO' if estado else 'AISLADO'}")
        
    elif tipo == 'refrigeracion':
        bateria, estado = arbol[1], evaluar(arbol[2], entorno)
        red.activar_refrigeracion(bateria, estado)
        print(f"[ACTUADOR] Enfriamiento en {bateria} -> {'ENCENDIDO' if estado else 'APAGADO'}")
        
    elif tipo == 'alerta':
        red.emitir_alerta()
        print("[ALERTA HMI] 🚨 ¡CONDICIÓN CRÍTICA DETECTADA EN LA RED! 🚨")
        
    elif tipo == 'esperar':
        segundos = evaluar(arbol[1], entorno)
        print(f"[SISTEMA] Pausa operativa ({segundos}s)...")
        time.sleep(segundos) 
        
    elif tipo == 'asignar':
        entorno.asignar(arbol[1], evaluar(arbol[2], entorno))
        
    elif tipo == 'si':
        if evaluar(arbol[1], entorno): interpretar(arbol[2], entorno)
        elif arbol[3] is not None: interpretar(arbol[3], entorno)
        
    elif tipo == 'mientras':
        # Limitamos el bucle infinito a 20 iteraciones para la prueba en terminal
        seguro = 0
        while evaluar(arbol[1], entorno) and seguro < 20:
            interpretar(arbol[2], entorno)
            seguro += 1
            if seguro == 20: print("[SISTEMA] Límite de simulación alcanzado. Abortando bucle infinito.")
            
    elif tipo == 'repetir':
        for _ in range(int(evaluar(arbol[1], entorno))): interpretar(arbol[2], entorno)

def evaluar(expresion, entorno):
    if isinstance(expresion, (int, float, bool)): return expresion
    if isinstance(expresion, tuple):
        op = expresion[0]
        if op == 'var': return entorno.obtener(expresion[1])
        if op == '+': return evaluar(expresion[1], entorno) + evaluar(expresion[2], entorno)
        if op == '-': return evaluar(expresion[1], entorno) - evaluar(expresion[2], entorno)
        if op == '*': return evaluar(expresion[1], entorno) * evaluar(expresion[2], entorno)
        if op == '/': return evaluar(expresion[1], entorno) / evaluar(expresion[2], entorno)
        if op == '<': return evaluar(expresion[1], entorno) < evaluar(expresion[2], entorno)
        if op == '>': return evaluar(expresion[1], entorno) > evaluar(expresion[2], entorno)
        if op == '<=': return evaluar(expresion[1], entorno) <= evaluar(expresion[2], entorno)
        if op == '>=': return evaluar(expresion[1], entorno) >= evaluar(expresion[2], entorno)
        if op == '==': return evaluar(expresion[1], entorno) == evaluar(expresion[2], entorno)
        if op == '!=': return evaluar(expresion[1], entorno) != evaluar(expresion[2], entorno)
        if op == 'y': return evaluar(expresion[1], entorno) and evaluar(expresion[2], entorno)
        if op == 'o': return evaluar(expresion[1], entorno) or evaluar(expresion[2], entorno)
        if op == 'no': return not evaluar(expresion[1], entorno)
        
        # Mapeo de llamadas a sensores físicos (Factores)
        if op == 'leer_temperatura': 
            val = red.leer_temperatura(expresion[1])
            print(f"[SENSOR] Temp {expresion[1]}: {val:.1f}°C")
            return val
        if op == 'estado_carga': 
            val = red.estado_carga(expresion[1])
            print(f"[SENSOR] SOC {expresion[1]}: {val:.1f}%")
            return val
        if op == 'leer_generacion':
            val = red.leer_generacion(expresion[1])
            print(f"[SENSOR] Generación {expresion[1]}: {val:.1f} kW")
            return val
        if op == 'leer_demanda':
            val = red.leer_demanda(expresion[1])
            print(f"[SENSOR] Demanda {expresion[1]}: {val:.1f} kW")
            return val
    return 0.0

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Uso: python lenguajeL.py <archivo.l>")
        sys.exit(1)

    with open(sys.argv[1], 'r', encoding='utf-8') as archivo:
        codigo = archivo.read()

    ast = parser.parse(codigo)
    if ast:
        entorno = Entorno()
        interpretar(ast, entorno)