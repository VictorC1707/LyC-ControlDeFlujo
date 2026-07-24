# 🚀 Sistema Híbrido para UnegScript: Lexer y Parser — Documentación Completa

**🏛️ Materia:** Lenguaje y Compiladores · Tema 5: Análisis Sintáctico

**👥 Componentes:** Analizador Léxico Híbrido (Parte A) + Parser Descendente y AST (Parte B)

**🐍 Lenguaje:** Python 3.x (solo librería estándar, sin dependencias externas)

---

## 📑 Tabla de Contenidos

1. [¿Qué es esto y para qué sirve?](#1-qué-es-esto-y-para-qué-sirve)
2. [Estructura del proyecto](#2-estructura-del-proyecto)
3. [Cómo ejecutarlo](#3-cómo-ejecutarlo)
4. [Cómo funciona internamente](#4-cómo-funciona-internamente)
5. [Guía de integración de Tokens](#5-guía-de-integración-de-tokens)
6. [Referencia completa de tokens](#6-referencia-completa-de-tokens)
7. [Palabras clave reconocidas por UnegScript](#7-palabras-clave-reconocidas-por-unegscript)
8. [Resultados de pruebas de ejecución (Lexer + Parser)](#8-resultados-de-pruebas-de-ejecución-lexer--parser)
9. [Anexo: Árbol de Sintaxis Abstracta (AST)](#9-anexo-árbol-de-sintaxis-abstracta-ast)

---

## 1. 💡 ¿Qué es esto y para qué sirve?

Este sistema representa las dos primeras fases del compilador para *UnegScript* (un subconjunto de Python). Su trabajo conjunto es:

1. 📖 **Leer código fuente** en texto plano.
2. 🔍 **Identificar y clasificar** cada elemento del código en *tokens*.
3. 🛠️ **Corregir errores tipográficos** de forma automática (similitud ≥ 80%).
4. 🤖 **Consultar a la IA (LLM)** cuando el error es ambiguo (similitud < 80%).
5. 📤 **Entregar la lista de tokens limpia** al Analizador Sintáctico.
6. 🏗️ **Validar la sintaxis** mediante un Parser Recursivo Descendente con *lookahead*.
7. 🌳 **Construir el AST (Árbol de Sintaxis Abstracta)** para representar la jerarquía lógica de las instrucciones.

---

```
## 2. 📂 Estructura del proyecto

El proyecto unificado se encuentra dentro de la carpeta del Tema 5 y utiliza una estructura plana en `src` para facilitar la importación de módulos de ambas partes:

```text
Tema 5/
└── 5 Lexer/
    ├── ejemplos/
    │   └── ejemplo_errores.uneg   # 📝 Código de prueba con errores intencionales
    ├── src/
    │   ├── __pycache__/         # 🗑️ Archivos temporales de compilación de Python
    │   ├── ast_nodos.py         # 🌿 Clases de los nodos del árbol (Asignacion, If, Llamada)
    │   ├── lexer.py             # ⚙️ Motor principal del Lexer (pipeline híbrido)
    │   ├── llm_fallback.py      # 🧠 Generador de prompts y simulación del LLM
    │   ├── main.py              # 🚀 Punto de entrada que orquesta Lexer y Parser
    │   ├── parser_uneg.py       # 🧩 Motor del Parser Recursivo Descendente LL(1)
    │   ├── similarity.py        # 📏 Distancia Levenshtein y ratio de confianza
    │   └── tokens.py            # 🏷️ Tipos de token, dataclass, reglas regex, KEYWORDS
    ├── test_lexer.py            # 🧪 Suite de pruebas unitarias
    └── README.md                # 📖 Este archivo
```

### 🛠️ ¿Qué hace cada módulo?

| Archivo | Responsabilidad |
|---|---|
| `tokens.py` | Define qué tipos de token existen, cómo luce un `Token` y las reglas regex |
| `similarity.py` | Calcula la distancia de Levenshtein y el ratio de confianza |
| `llm_fallback.py` | Construye el prompt para el LLM y simula su respuesta |
| `lexer.py` | Orquesta todo el pipeline de tokenización híbrida |
| `main.py` | Ejecuta la demostración y permite procesar archivos `.uneg` |
| `ast_nodos.py` | Define la estructura de datos jerárquica del AST|
| `parser_uneg.py` | Valida la gramática y empaqueta los tokens en nodos |

---

## 3. 💻 Cómo ejecutarlo

**No requiere instalar ninguna librería externa.** Solo se necesita Python 3.10 o superior.

### Opción A — Demostración integrada (caso de prueba del requerimiento)

```bash
# Desde la raíz del repositorio
python "Tema 5/5 Lexer/src/main.py"
```

### Opción B — Procesar un archivo de código UnegScript

```bash
python "Tema 5/5 Lexer/src/main.py" "Tema 5/5 Lexer/ejemplos/ejemplo_errores.uneg"
```

### Opción C — Ejecutar la suite de pruebas unitarias

```bash
python "Tema 5/5 Lexer/test_lexer.py"
```

Salida esperada de las pruebas:
```
============================================================
  EJECUTANDO SUITE DE PRUEBAS UNITARIAS (TEST_LEXER.PY)
============================================================
[TEST] Probando metricas de similitud...
  [OK] Levenshtein & similarity_ratio validados con exito.
[TEST] Probando auto-correccion (ratio >= 0.8)...
  [OK] Token 'pront' auto-corregido a 'print' (ratio = 0.80 >= 0.8).
[TEST] Probando fallback IA (ratio < 0.8)...
  [OK] Fallback IA activado correctamente para 'prt' (< 0.8): Sugerencia: 'prt' -> 'print'
[TEST] Probando generacion de stream para el parser recursivo descendente...
  [OK] Stream para el parser generado correctamente sin interrupciones.
============================================================
  TODAS LAS PRUEBAS PASARON EXITOSAMENTE! (100% SUCCESS)
============================================================
```

---

## 4. ⚙️ Cómo funciona internamente

### A. Pipeline Léxico (Flujo de cada token)
```
Token escaneado del código fuente
         │
         ├─ ¿Coincide con alguna KEYWORD exacta?
         │       └─ SÍ  →  Token(KEYWORD, valor)
         │
         ├─ ¿Coincide con regla regex base (NUMBER, STRING, OPERATOR...)?
         │       └─ SÍ  →  Token(tipo correspondiente, valor)
         │
         └─ Identificador no reconocido / UNKNOWN
                  │
                  └─ Calcular ratio = 1 - Levenshtein(token, candidato) / max(len1, len2)
                           │
                           ├─ ratio >= 0.8  →  AUTO-CORREGIR
                           │                   Token(CORRECTED, valor_corregido)
                           │
                           └─ ratio < 0.8   →  FALLBACK LLM
                                               Construir prompt contextual
                                               Token(AI_SUGGESTION, sugerencia_IA)

```

### B. Pipeline Sintáctico (Parser)
```

Lookahead: Observa el token actual mediante el stream generado por el Lexer.

Derivación: Decide qué regla aplicar (ej. Si ve un IDENTIFIER seguido de =, invoca parse_asignacion()).

Consumo: Valida la estructura estricta (match). Si falla, lanza un SyntaxError.

Construcción: Empaqueta los valores validados en un objeto Nodo y lo añade al Árbol (AST).

```

### Fórmula de similitud usada

```
ratio = 1 - distancia_Levenshtein(s1, s2) / max(len(s1), len(s2))
```

- Un ratio de **1.0** significa que las dos palabras son idénticas.
- Un ratio de **0.8** significa que solo 1 carácter difiere en una palabra de 5 letras.
- El **umbral de decisión es 0.8** (configurable en `UnegHybridLexer(..., confidence_threshold=0.8)`).

---

## 5. 🔗 Guía de integración de Tokens

> **Esta sección está dirigida al compañero responsable del Parser Recursivo Descendente.**

### Cómo usar el Lexer desde el código del Parser

El lexer se consume en **3 líneas de código**:

```python
import sys
sys.path.insert(0, "ruta/a/Tema 5/5 Lexer/src")  # Ajustar ruta relativa

from lexer import UnegHybridLexer

# 1. Instanciar con el código fuente
source = open("mi_programa.uneg").read()
lexer = UnegHybridLexer(source)

# 2. Obtener la lista de tokens (ya corregidos cuando aplica)
tokens = lexer.tokenize()

# 3. Obtener el stream limpio listo para el parser
stream = lexer.get_parser_stream()
```

### El stream del Parser: formato exacto

`get_parser_stream()` devuelve una **lista de tuplas** `(tipo: str, valor: str)`:

```python
[
    ('KEYWORD',    'print'),
    ('IDENTIFIER', 'x'),
    ('OPERATOR',   '='),
    ('NUMBER',     '5'),
    ('KEYWORD',    'if'),
    ('IDENTIFIER', 'x'),
    ('OPERATOR',   '>'),
    ('NUMBER',     '3'),
    ('KEYWORD',    'print'),
    ('DELIMITER',  '('),
    ('IDENTIFIER', 'x'),
    ('DELIMITER',  ')'),
    ('KEYWORD',    'else'),
    ('KEYWORD',    'print'),
    ('DELIMITER',  '('),
    ('STRING',     '"no"'),
    ('DELIMITER',  ')'),
]
```

**Garantías del stream para el parser:**
- Los tokens con errores tipográficos corregibles ya vienen **con el valor correcto** (ej. `'pront'` ya llega como `'print'`).
- Los tokens con sugerencia de IA también vienen con el **valor sugerido** por el LLM.
- Los tipos devueltos en el stream solo son: `KEYWORD`, `IDENTIFIER`, `NUMBER`, `STRING`, `OPERATOR`, `DELIMITER`, `UNKNOWN`.
- Los espacios, tabuladores, saltos de línea y comentarios **no aparecen en el stream**.

### Lookahead: cómo anticipar tokens

Para un parser con **lookahead de 1** (LL(1)):

```python
stream = lexer.get_parser_stream()
pos = 0

def peek(offset=0):
    """Devuelve el token en posición actual + offset sin avanzar."""
    idx = pos + offset
    if idx < len(stream):
        return stream[idx]
    return ('EOF', '')

def consume(expected_type=None):
    """Avanza y devuelve el token actual."""
    global pos
    tok = stream[pos]
    if expected_type and tok[0] != expected_type:
        raise SyntaxError(f"Esperado {expected_type}, encontrado {tok[0]} ('{tok[1]}')")
    pos += 1
    return tok

# Ejemplo de uso en el parser:
if peek()[0] == 'KEYWORD' and peek()[1] == 'if':
    consume('KEYWORD')  # consume 'if'
    # ... parsear condición ...
```

### Acceder a información detallada de cada token (opcional)

Si el parser necesita metadatos extra (número de línea, columna, token original antes de corrección), puede usar la lista `tokens` completa en lugar del stream:

```python
tokens = lexer.tokenize()  # Lista de objetos Token

for tok in tokens:
    print(tok.type)           # TokenType.KEYWORD, TokenType.IDENTIFIER, etc.
    print(tok.value)          # Valor ya corregido
    print(tok.line)           # Número de línea (1-indexado)
    print(tok.col)            # Columna (1-indexada)
    print(tok.corrected_from) # Valor original si fue auto-corregido, None si no
    print(tok.suggestion)     # Sugerencia de IA si fue al fallback, None si no
    print(tok.confidence)     # Ratio de confianza de la corrección (0.0 a 1.0)
```

### Tipos en la lista `tokens` vs. stream del parser

| `tokens` (lista completa) | `stream` del parser | Descripción |
|---|---|---|
| `TokenType.KEYWORD` | `('KEYWORD', val)` | Palabra reservada exacta |
| `TokenType.IDENTIFIER` | `('IDENTIFIER', val)` | Nombre de variable/función |
| `TokenType.NUMBER` | `('NUMBER', val)` | Literal numérico |
| `TokenType.STRING` | `('STRING', val)` | Literal de cadena |
| `TokenType.OPERATOR` | `('OPERATOR', val)` | Operador |
| `TokenType.DELIMITER` | `('DELIMITER', val)` | Paréntesis, coma, dos puntos... |
| `TokenType.CORRECTED` | `('KEYWORD', val_correcto)` | Typo auto-corregido, llega como KEYWORD/IDENTIFIER limpio |
| `TokenType.AI_SUGGESTION` | `('KEYWORD', sugerencia)` | Ambiguo corregido por IA, llega limpio |
| `TokenType.UNKNOWN` | `('UNKNOWN', char)` | Carácter no reconocido |

---

## 6. 🔣 Referencia completa de tokens

### Operadores reconocidos

| Símbolo | Tipo en stream |
|---|---|
| `+` `-` `*` `/` `%` | `OPERATOR` |
| `==` `!=` `<` `>` `<=` `>=` | `OPERATOR` |
| `=` (asignación) | `OPERATOR` |
| `**` `//` | `OPERATOR` |
| `&` `\|` `^` `~` `!` | `OPERATOR` |

### Delimitadores reconocidos

| Símbolo | Tipo en stream |
|---|---|
| `(` `)` | `DELIMITER` |
| `[` `]` | `DELIMITER` |
| `{` `}` | `DELIMITER` |
| `:` `,` `;` `.` | `DELIMITER` |

### Literales reconocidos

| Ejemplo | Tipo en stream |
|---|---|
| `42`, `3.14` | `NUMBER` |
| `"hola"`, `'mundo'` | `STRING` |
| `True`, `False`, `None` | `KEYWORD` |

---

## 7. 🔑 Palabras clave reconocidas por UnegScript

El lexer reconoce exactamente estas palabras reservadas. Si el parser intenta hacer `consume('KEYWORD')` y espera una de ellas, debe estar en esta lista:

```
if       else     elif     while    for      in
def      return   pass     break    continue class
import   from     as       and      or       not
True     False    None     print    input    try
except   finally  raise    with     lambda   yield
global   nonlocal del      is       assert
```

---

## 8.🏆 Resultados de pruebas de ejecución (Lexer + Parser)

### Caso de prueba oficial requerido

**Entrada:**
```
pront x = 5
if x > 3 prnt(x) else prnt("no")
```

**Salida completa verificada del programa:**
```
======================================================================
  DEMO SISTEMA HÍBRIDO UNEGSCRIPT (REQUERIMIENTO 5)
======================================================================

[1] Código fuente de entrada con errores intencionales:
--------------------------------------------------
  Line 1: pront x = 5
  Line 2: if x > 3 prnt(x) else prnt("no")

[2] Lista de Tokens Producidos (17 tokens):
--------------------------------------------------
  Token(CORRECTED, 'print', L1:C1) [auto-corregido de 'pront', conf=0.80]
  Token(IDENTIFIER, 'x',    L1:C7)
  Token(OPERATOR,   '=',    L1:C9)
  Token(NUMBER,     '5',    L1:C11)
  ...
  Token(CORRECTED,  'print',L2:C23) [auto-corregido de 'prnt', conf=0.80]
  Token(DELIMITER,  '(',    L2:C27)
  Token(STRING,     '"no"', L2:C28)
  Token(DELIMITER,  ')',    L2:C32)

[3] Correcciones y Sugerencias del Pipeline Híbrido:
--------------------------------------------------
  * Sugerencia: 'pront' -> 'print' (auto-corregido, conf=0.80)
  * Sugerencia: 'prnt'  -> 'print' (auto-corregido, conf=0.80)
  * Sugerencia: 'prnt'  -> 'print' (auto-corregido, conf=0.80)

[4] Salida simplificada consumible por el Parser Recursivo Descendente:
--------------------------------------------------
  Stream = [('KEYWORD', 'print'), ('IDENTIFIER', 'x'), ('OPERATOR', '='), ...]

[5] AST ESTRUCTURADO (Salida del Parser):
--------------------------------------------------
  Asignacion(variable='x', valor=5)
  If(condicion=x > 3, then=LlamadaFuncion(nombre='print', args=x), else=LlamadaFuncion(nombre='print', args="no"))

[6] Mediciones de Rendimiento:
--------------------------------------------------
  • Tiempo total de ejecución (Lexer + Parser): ~2.1500 ms
======================================================================
```
### 9. 🌳 Anexo: Árbol de Sintaxis Abstracta (AST)

El parser genera una estructura orientada a objetos para validar la gramática de UnegScript. Los nodos principales soportados actualmente son:

| Nodo | Componentes Guardados | Ejemplo Estructural |
|---|---|---|
| `NodoAsignacion` | Identificador, Expresión/Valor | `x = 5` |
| `NodoIf` | Condición, Cuerpo True, Cuerpo False | `if x > 3 ... else ...` |
| `NodoLlamada` | Nombre de Función, Argumentos | `print("no")` |



### Análisis de corrección por token

La sección **[3]** registra **todas** las correcciones realizadas por el pipeline, independientemente de si provienen de la auto-corrección (ratio ≥ 0.8) o del fallback LLM (ratio < 0.8). La etiqueta `(auto-corregido)` diferencia ambos caminos.

| Token entrada | Candidato | Distancia | Ratio | Ruta | Salida sección [3] |
|---|---|---|---|---|---|
| `pront` | `print` | 1 (sustituir 'o'→'i') | 1 - 1/5 = **0.80** | Auto-corrección | `'pront' -> 'print' (auto-corregido)` |
| `prnt` | `print` | 1 (insertar 'i') | 1 - 1/5 = **0.80** | Auto-corrección | `'prnt' -> 'print' (auto-corregido)` |
| `prt` | `print` | 2 | 1 - 2/5 = **0.60** | Fallback LLM | `'prt' -> 'print'` |
| `x` | — | — | — | Sin procesar | *(no aparece, es identificador válido)* |


### Métricas de rendimiento

| Métrica | Valor |
|---|---|
| Tokens procesados | 17 |
| Tiempo de tokenización | ~2.0 ms |
| Pruebas unitarias | 4/4 (100% OK) |
| Dependencias externas | 0 |
