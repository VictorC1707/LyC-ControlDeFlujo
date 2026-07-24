"""
tokens.py — Definiciones de tipos de token y reglas léxicas para UnegScript.

UnegScript es un subconjunto de Python diseñado para el asistente de
programación híbrido (técnicas clásicas + IA) del curso Lenguaje y Compiladores.
"""

from __future__ import annotations
from dataclasses import dataclass, field
from enum import Enum, auto


# ---------------------------------------------------------------------------
# Tipos de token
# ---------------------------------------------------------------------------

class TokenType(Enum):
    """Clasificación completa de tokens reconocidos por UnegScript."""

    # Tokens léxicos primarios
    KEYWORD     = auto()   # Palabra reservada del lenguaje
    IDENTIFIER  = auto()   # Nombre definido por el usuario
    NUMBER      = auto()   # Literal numérico (entero o flotante)
    STRING      = auto()   # Literal de cadena (comillas simples o dobles)
    OPERATOR    = auto()   # Operador aritmético, lógico o relacional
    DELIMITER   = auto()   # Delimitador / puntuación estructural
    COMMENT     = auto()   # Comentario de línea (#)
    NEWLINE     = auto()   # Salto de línea
    WHITESPACE  = auto()   # Espacios / tabuladores

    # Tokens producidos por el pipeline híbrido
    CORRECTED     = auto()  # Token corregido automáticamente (ratio ≥ umbral)
    AI_SUGGESTION = auto()  # Token con sugerencia del fallback LLM (ratio < umbral)

    # Token de error
    UNKNOWN = auto()        # Carácter o secuencia no reconocida


# ---------------------------------------------------------------------------
# Estructura de un token
# ---------------------------------------------------------------------------

@dataclass
class Token:
    """
    Unidad léxica producida por el lexer.

    Campos principales:
        type           : Clasificación del token.
        value          : Valor textual (ya corregido si aplica).
        line           : Número de línea (1-indexado).
        col            : Columna de inicio (1-indexado).

    Campos del pipeline híbrido:
        corrected_from : Valor original antes de la corrección automática.
        suggestion     : Sugerencia generada por el fallback LLM.
        confidence     : Ratio de confianza de la mejor coincidencia.
    """
    type: TokenType
    value: str
    line: int
    col: int
    corrected_from: str | None = field(default=None)
    suggestion: str | None = field(default=None)
    confidence: float | None = field(default=None)

    def __repr__(self) -> str:
        base = f"Token({self.type.name}, {self.value!r}, L{self.line}:C{self.col})"
        if self.corrected_from:
            base += f" [auto-corregido de {self.corrected_from!r}, conf={self.confidence:.2f}]"
        if self.suggestion:
            base += f" [sugerencia IA: {self.suggestion!r}]"
        return base

    def to_parser_tuple(self) -> tuple[str, str]:
        """
        Formato compacto (type_name, value) consumible por un parser
        recursivo descendente con lookahead.
        """
        return (self.type.name, self.value)


# ---------------------------------------------------------------------------
# Palabras clave de UnegScript
# ---------------------------------------------------------------------------

KEYWORDS: frozenset[str] = frozenset({
    "if", "else", "elif", "while", "for", "in",
    "def", "return", "pass", "break", "continue",
    "class", "import", "from", "as",
    "and", "or", "not",
    "True", "False", "None",
    "print", "input",
    "try", "except", "finally", "raise", "with",
    "lambda", "yield", "global", "nonlocal", "del",
    "is", "assert",
})

# ---------------------------------------------------------------------------
# Tabla de reglas léxicas — orden importa (primero las más específicas)
# ---------------------------------------------------------------------------

TOKEN_RULES: list[tuple[str, str]] = [
    # Comentarios de línea
    ("COMMENT",    r"#[^\n]*"),

    # Cadenas de texto (comillas dobles o simples)
    ("STRING",     r'"(?:[^"\\]|\\.)*"'),
    ("STRING",     r"'(?:[^'\\]|\\.)*'"),

    # Números: flotante antes que entero
    ("NUMBER",     r"\d+\.\d+"),
    ("NUMBER",     r"\d+"),

    # Operadores compuestos y simples
    ("OPERATOR",   r"==|!=|<=|>=|//|<<|>>|\*\*"),
    ("OPERATOR",   r"[+\-*/%<>=!&|^~]"),

    # Delimitadores
    ("DELIMITER",  r"[(){}\[\]:,;.]"),

    # Identificadores y palabras clave
    ("IDENTIFIER", r"[A-Za-z_][A-Za-z0-9_]*"),

    # Saltos de línea
    ("NEWLINE",    r"\n"),

    # Espacios y tabuladores
    ("WHITESPACE", r"[ \t]+"),
]
