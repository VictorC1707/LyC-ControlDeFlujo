from ast_nodos import NodoAsignacion, NodoIf, NodoLlamada

class ParserUneg:
    def __init__(self, tokens_stream):
        """Recibe la lista de tuplas (TIPO, VALOR) del Lexer."""
        self.tokens = tokens_stream
        self.posicion = 0
        self.token_actual = self.tokens[0] if self.tokens else ("EOF", "")

    def avanzar(self):
        """Avanza al siguiente token."""
        self.posicion += 1
        if self.posicion < len(self.tokens):
            self.token_actual = self.tokens[self.posicion]
        else:
            self.token_actual = ("EOF", "")

    def lookahead(self, pasos=1):
        """Mira el token siguiente sin avanzar."""
        indice = self.posicion + pasos
        if indice < len(self.tokens):
            return self.tokens[indice]
        return ("EOF", "")

    def match(self, tipo_esperado, valor_esperado=None):
        """Verifica que el token actual sea el esperado y avanza."""
        tipo, valor = self.token_actual
        if tipo == tipo_esperado and (valor_esperado is None or valor == valor_esperado):
            self.avanzar()
            return valor
        else:
            # Aquí ocurre el fallo sintáctico
            raise SyntaxError(f"Error Sintáctico: Esperaba {tipo_esperado} '{valor_esperado or ''}', encontré {tipo} '{valor}'")

    def parse_programa(self):
        """Bucle principal para procesar todas las instrucciones."""
        instrucciones = []
        while self.token_actual[0] != "EOF":
            tipo, valor = self.token_actual
            
            # Lookahead: Si es un identificador y el siguiente token es "=", es una asignación
            if tipo == "IDENTIFIER" and self.lookahead()[1] == "=":
                instrucciones.append(self.parse_asignacion())
            
            # Si empieza con "if", es una condicional
            elif tipo == "KEYWORD" and valor == "if":
                instrucciones.append(self.parse_if())
            
            # Ignorar saltos de línea y espacios en blanco residuales si los hay
            elif tipo in ["NEWLINE", "WHITESPACE"]:
                self.avanzar()
            else:
                self.avanzar() # Salto de seguridad
                
        return instrucciones

    def parse_asignacion(self):
        """Analiza la estructura: IDENTIFICADOR = NUMERO ;"""
        identificador = self.match("IDENTIFIER")
        self.match("OPERATOR", "=")
        valor = self.match("NUMBER")
        
        # Consumimos el punto y coma si existe
        if self.token_actual[0] == "DELIMITER" and self.token_actual[1] == ";":
            self.avanzar()
            
        return NodoAsignacion(identificador, valor)

    def parse_if(self):
        """Analiza la estructura: if IDENTIFICADOR > NUMERO ... else ..."""
        self.match("KEYWORD", "if")
        
        # Construimos la condición simple (ej. "x > 3")
        condicion_izq = self.match("IDENTIFIER")
        operador = self.match("OPERATOR")
        condicion_der = self.match("NUMBER")
        condicion = f"{condicion_izq} {operador} {condicion_der}"
        
        # Parseamos lo que hace si es verdadero
        cuerpo_verdadero = self.parse_llamada()
        
        # Verificamos si existe un 'else'
        cuerpo_falso = None
        if self.token_actual[0] == "KEYWORD" and self.token_actual[1] == "else":
            self.match("KEYWORD", "else")
            cuerpo_falso = self.parse_llamada()
            
        return NodoIf(condicion, cuerpo_verdadero, cuerpo_falso)

    def parse_llamada(self):
        """Analiza llamadas simples como print(x) o print("no")"""
        # Nota: el lexer de Víctor convierte 'pront' corregido a KEYWORD ('print')
        nombre_funcion = self.match("KEYWORD") 
        self.match("DELIMITER", "(")
        
        argumento = ""
        if self.token_actual[0] in ["IDENTIFIER", "STRING"]:
            argumento = self.token_actual[1]
            self.avanzar()
            
        self.match("DELIMITER", ")")
        return NodoLlamada(nombre_funcion, argumento)