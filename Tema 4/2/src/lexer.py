import re
try:
    from src.tokens import TOKEN_RULES
except ModuleNotFoundError:
    from tokens import TOKEN_RULES

class Token:
    def __init__(self, type_, value, line, column):
        self.type = type_
        self.value = value
        self.line = line
        self.column = column

    def __repr__(self):
        return f"TOKEN: {self.type}, Lexema: '{self.value}' (Línea: {self.line}, Columna: {self.column})"

class LexerError:
    def __init__(self, value, line, column):
        self.value = value
        self.line = line
        self.column = column

    def __repr__(self):
        return f"ERROR LÉXICO: Carácter no reconocido: '{self.value}' (Línea: {self.line}, Columna: {self.column})"

class Lexer:
    def __init__(self, code):
        self.code = code
        self.tokens = []
        self.errors = []
        self._compile_regex()

    def _compile_regex(self):
        # Unir todas las regex usando grupos nombrados para identificar cuál coincide
        parts = []
        for name, regex in TOKEN_RULES:
            parts.append(f"(?P<{name}>{regex})")
        self.master_regex = re.compile("|".join(parts))

    def tokenizar(self):
        line = 1
        line_start = 0
        pos = 0
        limit = len(self.code)

        while pos < limit:
            match = self.master_regex.match(self.code, pos)
            if match:
                # Encontrar qué grupo coincidió
                for name, value in match.groupdict().items():
                    if value is not None:
                        # Calcular columna
                        column = (pos - line_start) + 1
                        
                        if name == "TK_NUEVA_LINEA":
                            line += 1
                            line_start = pos + len(value)
                        elif name == "TK_ESPACIO":
                            # Espacios se ignoran como tokens pero avanzan la posición
                            pass
                        else:
                            # Añadir el token a la lista
                            self.tokens.append(Token(name, value, line, column))
                        
                        # Avanzar posición según el tamaño del lexema reconocido
                        pos = match.end()
                        break
            else:
                # Error léxico: el carácter en la posición actual no coincide con ningún patrón
                char = self.code[pos]
                column = (pos - line_start) + 1
                self.errors.append(LexerError(char, line, column))
                
                # Avanzar 1 carácter para continuar analizando el resto del archivo
                pos += 1

        return self.tokens, self.errors
