# Datos Técnicos Crudos — Parte A: Lexer Híbrido UnegScript

> **Propósito:** Repositorio de datos, código real y resultados de ejecución para redacción posterior del informe de implementación.
> **Generado:** 2026-07-24

---

## 1. Resumen del Alcance

### Qué cubre esta parte (Parte A — Lexer)

- Análisis léxico completo del código fuente de UnegScript (subconjunto de Python).
- Escaneo basado en expresiones regulares (`re` de la stdlib).
- Clasificación de tokens en: `KEYWORD`, `IDENTIFIER`, `NUMBER`, `STRING`, `OPERATOR`, `DELIMITER`, `COMMENT`, `NEWLINE`, `WHITESPACE`.
- Corrección automática de errores tipográficos cuando el ratio de similitud Levenshtein ≥ 0.8 → `CORRECTED`.
- Activación del fallback LLM (simulado) cuando el ratio < 0.8 → `AI_SUGGESTION`.
- Generación del stream de tokens limpio consumible por un Parser Recursivo Descendente.
- Suite de 4 pruebas unitarias (`test_lexer.py`, 100% pasadas).

### Qué NO cubre esta parte

- **El Parser Recursivo Descendente** — es responsabilidad de otro integrante del equipo.
- Análisis semántico, generación de código o cualquier fase posterior al análisis léxico.
- Invocación real a una API de LLM (la capa de IA está simulada con una tabla de typos comunes y similitud ampliada).

### Lenguaje y librerías usadas en el código final

| Componente          | Librería/Módulo          | Origen |
|---------------------|--------------------------|--------|
| Expresiones regulares | `re`                   | stdlib |
| Tipos de datos      | `dataclasses`, `enum`    | stdlib |
| Medición de tiempo  | `time.perf_counter`      | stdlib |
| Manejo de archivos  | `pathlib.Path`           | stdlib |
| Compatibilidad      | `__future__.annotations` | stdlib |

**Dependencias externas instaladas: ninguna (0).**

---

## 2. Estructura Real de Archivos

```
Tema 5/5 Lexer/
├── src/
│   ├── tokens.py              # Tipos de token, dataclass Token, reglas regex, KEYWORDS
│   ├── similarity.py          # Distancia Levenshtein, ratio de confianza, diccionario candidatos
│   ├── llm_fallback.py        # Constructor de prompt y simulador del fallback LLM
│   ├── lexer.py               # Motor principal del pipeline híbrido (UnegHybridLexer)
│   └── main.py                # Punto de entrada CLI y función de demostración
├── ejemplos/
│   └── ejemplo_errores.uneg   # Archivo de prueba con errores intencionales (45 bytes, 3 líneas)
├── test_lexer.py              # Suite de pruebas unitarias (4 tests, 100% OK)
├── bench_run.py               # Script de benchmark (generado para este informe)
└── README.md                  # Documentación técnica (382 líneas)
```

### Tabla de archivos con métricas

| Archivo                         | Responsabilidad (1 línea)                                       | Líneas |
|---------------------------------|-----------------------------------------------------------------|--------|
| `src/tokens.py`                 | Define `TokenType`, `Token`, `KEYWORDS`, `TOKEN_RULES` (regex) | 131    |
| `src/similarity.py`             | Calcula distancia Levenshtein y ratio de confianza              | 83     |
| `src/llm_fallback.py`           | Construye prompt LLM y simula sugerencia de corrección          | 73     |
| `src/lexer.py`                  | Orquesta el pipeline híbrido: regex → similitud → fallback      | 167    |
| `src/main.py`                   | Demo ejecutable y procesamiento de archivos `.uneg`             | 96     |
| `test_lexer.py`                 | Suite de 4 pruebas unitarias para validar el pipeline           | 77     |
| `ejemplos/ejemplo_errores.uneg` | Código fuente de prueba con errores intencionales               | 3      |

**Total líneas de código del lexer (solo `src/`): 550 líneas.**

---

## 3. Explicación de Cada Módulo

### 3.1 `tokens.py` — 131 líneas

**Qué hace:** Define todas las estructuras de datos del sistema léxico.

**Clases y símbolos principales:**

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| `TokenType` | `Enum` | Clasifica los 12 tipos de token del sistema |
| `Token` | `@dataclass` | Unidad léxica con tipo, valor, posición y metadatos de corrección |
| `KEYWORDS` | `frozenset[str]` | 35 palabras clave de UnegScript |
| `TOKEN_RULES` | `list[tuple[str, str]]` | Lista ordenada de pares (nombre, patrón_regex) |

**Fragmento representativo — `TOKEN_RULES` (orden crítico):**

```python
TOKEN_RULES: list[tuple[str, str]] = [
    ("COMMENT",    r"#[^\n]*"),
    ("STRING",     r'"(?:[^"\\]|\\.)*"'),
    ("STRING",     r"'(?:[^'\\]|\\.)*'"),
    ("NUMBER",     r"\d+\.\d+"),           # flotante antes que entero
    ("NUMBER",     r"\d+"),
    ("OPERATOR",   r"==|!=|<=|>=|//|<<|>>|\*\*"),
    ("OPERATOR",   r"[+\-*/%<>=!&|^~]"),
    ("DELIMITER",  r"[(){}\[\]:,;.]"),
    ("IDENTIFIER", r"[A-Za-z_][A-Za-z0-9_]*"),
    ("NEWLINE",    r"\n"),
    ("WHITESPACE", r"[ \t]+"),
]
```

**Fragmento representativo — `Token.__repr__`:**

```python
def __repr__(self) -> str:
    base = f"Token({self.type.name}, {self.value!r}, L{self.line}:C{self.col})"
    if self.corrected_from:
        base += f" [auto-corregido de {self.corrected_from!r}, conf={self.confidence:.2f}]"
    if self.suggestion:
        base += f" [sugerencia IA: {self.suggestion!r}]"
    return base
```

---

### 3.2 `similarity.py` — 83 líneas

**Qué hace:** Implementa la distancia de Levenshtein y el ratio de similitud. Expone el diccionario de candidatos `CANDIDATE_DICTIONARY` (KEYWORDS ∪ builtins de Python = ~57 palabras).

**Funciones principales:**

| Función | Descripción |
|---------|-------------|
| `levenshtein_distance(s1, s2)` | Distancia de edición con programación dinámica (espacio O(n)) |
| `similarity_ratio(s1, s2)` | Ratio = 1 − dist / max(len(s1), len(s2)) |
| `find_best_candidate(token_val, candidates)` | Itera sobre el diccionario y retorna (mejor_palabra, ratio_máximo) |

**Fragmento representativo — núcleo del algoritmo:**

```python
def similarity_ratio(s1: str, s2: str) -> float:
    if s1 == s2:
        return 1.0
    max_len = max(len(s1), len(s2))
    if max_len == 0:
        return 1.0
    dist = levenshtein_distance(s1, s2)
    return 1.0 - (dist / max_len)

def find_best_candidate(token_val, candidates=None):
    dict_to_use = candidates if candidates is not None else CANDIDATE_DICTIONARY
    best_word, highest_ratio = None, -1.0
    for candidate in dict_to_use:
        ratio = similarity_ratio(token_val, candidate)
        if ratio > highest_ratio:
            highest_ratio = ratio
            best_word = candidate
    return (best_word, max(0.0, highest_ratio))
```

---

### 3.3 `llm_fallback.py` — 73 líneas

**Qué hace:** Simula el fallback de un LLM real. Primero verifica una tabla de errores comunes (`common_typos`); si no hay coincidencia exacta, recalcula similitud con umbral ≥ 0.4 para entregar una sugerencia ampliada.

**Funciones principales:**

| Función | Descripción |
|---------|-------------|
| `build_llm_prompt(unknown_token, context_line, line_num)` | Genera el string de prompt contextualizado (para demostración/log) |
| `simulate_llm_fallback(unknown_token, context_line, line_num, candidates)` | Simula la respuesta del LLM con typos hardcodeados + similitud fallback |

**Fragmento representativo — lógica de decisión del fallback:**

```python
common_typos = {
    "pront": "print", "prnt": "print", "prt": "print",
    "pritn": "print", "impr": "print",
    "iff": "if", "esi": "else", "elss": "else",
    "whle": "while", "retun": "return",
    "funct": "def", "defi": "def",
}

def simulate_llm_fallback(unknown_token, context_line="", line_num=1, candidates=None):
    _prompt = build_llm_prompt(unknown_token, context_line, line_num)  # construido pero no enviado a API real
    if unknown_token.lower() in common_typos:
        return common_typos[unknown_token.lower()]
    # Fallback a similitud con umbral reducido (0.4)
    for cand in (candidates or CANDIDATE_DICTIONARY):
        ratio = similarity_ratio(unknown_token, cand)
        if ratio > max_ratio:
            max_ratio, best_candidate = ratio, cand
    if best_candidate and max_ratio >= 0.4:
        return best_candidate
    return "identifier"
```

---

### 3.4 `lexer.py` — 167 líneas

**Qué hace:** Motor central. Contiene `UnegHybridLexer` que orquesta todo el pipeline de tokenización.

**Clase y métodos principales:**

| Método | Descripción |
|--------|-------------|
| `__init__(source_code, confidence_threshold=0.8)` | Almacena código, umbral, prepara buffers de tokens y sugerencias |
| `tokenize()` | Loop principal: recorre el código carácter a carácter usando regex |
| `_process_identifier(val, line_num, col_num)` | Aplica el pipeline híbrido a cada identificador |
| `_process_unknown(char_val, line_num, col_num)` | Maneja caracteres no reconocidos enviándolos al fallback |
| `get_parser_stream()` | Convierte la lista de `Token` al formato `(tipo_str, valor_str)` del parser |

**Fragmento representativo — `_process_identifier` (núcleo del pipeline):**

```python
def _process_identifier(self, val: str, line_num: int, col_num: int) -> Token:
    if val in KEYWORDS:
        return Token(type=TokenType.KEYWORD, value=val, line=line_num, col=col_num)

    best_cand, ratio = find_best_candidate(val, CANDIDATE_DICTIONARY)

    if best_cand and ratio < 1.0:
        if ratio >= self.threshold:                   # umbral 0.8 → auto-corrección
            suggestion_msg = f"Sugerencia: '{val}' -> '{best_cand}' (auto-corregido, conf={ratio:.2f})"
            self.ai_suggestions.append(suggestion_msg)
            return Token(type=TokenType.CORRECTED, value=best_cand,
                         line=line_num, col=col_num, corrected_from=val, confidence=ratio)
        elif ratio >= 0.4:                            # zona ambigua → fallback LLM
            context_line = self.lines[line_num - 1] if line_num <= len(self.lines) else ""
            llm_suggestion = simulate_llm_fallback(val, context_line, line_num)
            suggestion_msg = f"Sugerencia: '{val}' -> '{llm_suggestion}'"
            self.ai_suggestions.append(suggestion_msg)
            return Token(type=TokenType.AI_SUGGESTION, value=val,
                         line=line_num, col=col_num, suggestion=llm_suggestion, confidence=ratio)

    return Token(type=TokenType.IDENTIFIER, value=val, line=line_num, col=col_num)
```

---

### 3.5 `main.py` — 96 líneas

**Qué hace:** Punto de entrada CLI. Si no recibe argumentos ejecuta `run_demo()` con el caso de prueba oficial. Si recibe un argumento, procesa ese archivo `.uneg`.

| Función | Descripción |
|---------|-------------|
| `run_demo()` | Ejecuta el caso de prueba hardcodeado con formato de salida seccional |
| `process_file(file_path)` | Lee un archivo `.uneg` y ejecuta el lexer sobre él |

---

## 4. Flujo de Decisión del Pipeline Híbrido

### Paso a paso para un token tipo IDENTIFIER

```
[ENTRADA] Carácter(es) del código fuente
     │
     ▼
[PASO 1] Escaneo regex (loop sobre TOKEN_RULES en orden)
     │    ¿Coincide con alguna regla?
     │
     ├── NO → _process_unknown(): token UNKNOWN, directo a fallback LLM
     │
     └── SÍ → ¿El grupo es "IDENTIFIER"?
                   │
                   ├── NO → Emitir token del tipo correspondiente (NUMBER, STRING, OPERATOR, DELIMITER...)
                   │
                   └── SÍ → _process_identifier()
                               │
                               ▼
                          [PASO 2] ¿val en KEYWORDS exacto?
                               │
                               ├── SÍ → Token(KEYWORD, val)   ← fin
                               │
                               └── NO → find_best_candidate(val, CANDIDATE_DICTIONARY)
                                         retorna (best_word, ratio)
                                              │
                                              ├── ratio == 1.0 → Token(IDENTIFIER, val)
                                              │
                                              ├── ratio >= 0.8  [AUTO-CORRECCIÓN]
                                              │     Token(CORRECTED, best_word)
                                              │     registra en ai_suggestions "(auto-corregido)"
                                              │
                                              ├── 0.4 <= ratio < 0.8  [FALLBACK LLM]
                                              │     simulate_llm_fallback(val, context_line, line_num)
                                              │     Token(AI_SUGGESTION, val, suggestion=llm_result)
                                              │     registra en ai_suggestions
                                              │
                                              └── ratio < 0.4 → Token(IDENTIFIER, val)   ← sin corrección
```

### Confirmación vs. diseño original

| Aspecto | Diseño original | Implementación real | Estado |
|---------|----------------|---------------------|--------|
| Umbral de auto-corrección | 0.8 | 0.8 | ✓ Coincide |
| Umbral mínimo para fallback | 0.4 | 0.4 | ✓ Coincide |
| Fórmula de similitud | 1 − Lev / max(len) | 1 − Lev / max(len) | ✓ Coincide |
| LLM real vs. simulado | Simulado | Simulado (tabla + similitud) | ✓ Coincide |
| Whitespace/Comments en stream | Descartados | Descartados | ✓ Coincide |
| Configurabilidad del umbral | Parámetro `__init__` | `confidence_threshold=0.8` | ✓ Coincide |

**Desviación detectada:** Si el ratio es < 0.4, el token se emite como `IDENTIFIER` normal (sin sugerencia). Esto no estaba explícitamente documentado en el diseño original — es una decisión implementada para evitar sugerencias irrelevantes en tokens muy distantes de cualquier candidato.

---

## 5. Caso de Prueba y Salida Real

### Código de entrada (caso oficial)

```
pront x = 5
if x > 3 prnt(x) else prnt("no")
```

**Archivo:** `ejemplos/ejemplo_errores.uneg`

### Lista completa de tokens generados (salida real verificada)

```
Token(CORRECTED, 'print', L1:C1)   [auto-corregido de 'pront', conf=0.80]
Token(IDENTIFIER, 'x', L1:C7)
Token(OPERATOR, '=', L1:C9)
Token(NUMBER, '5', L1:C11)
Token(KEYWORD, 'if', L2:C1)
Token(IDENTIFIER, 'x', L2:C4)
Token(OPERATOR, '>', L2:C6)
Token(NUMBER, '3', L2:C8)
Token(CORRECTED, 'print', L2:C10)  [auto-corregido de 'prnt', conf=0.80]
Token(DELIMITER, '(', L2:C14)
Token(IDENTIFIER, 'x', L2:C15)
Token(DELIMITER, ')', L2:C16)
Token(KEYWORD, 'else', L2:C18)
Token(CORRECTED, 'print', L2:C23)  [auto-corregido de 'prnt', conf=0.80]
Token(DELIMITER, '(', L2:C27)
Token(STRING, '"no"', L2:C28)
Token(DELIMITER, ')', L2:C32)
```

**Total: 17 tokens.**

### Clasificación por ruta del pipeline

| Token entrada | Candidato | Distancia Lev. | Ratio exacto | Ruta tomada | Tipo emitido |
|--------------|-----------|----------------|-------------|-------------|--------------|
| `pront` | `print` | 1 (o→i) | **0.8000** | Auto-corrección (≥ 0.8) | `CORRECTED` |
| `prnt` (×2) | `print` | 1 (insertar i) | **0.8000** | Auto-corrección (≥ 0.8) | `CORRECTED` |
| `prt`* | `print` | 2 | **0.6000** | Fallback LLM (< 0.8) | `AI_SUGGESTION` |

> `*prt` aparece en `test_lexer.py` — no en el caso de prueba oficial de `main.py`.

### Sugerencias generadas (salida literal de `lexer.ai_suggestions`)

```
* Sugerencia: 'pront' -> 'print' (auto-corregido, conf=0.80)
* Sugerencia: 'prnt' -> 'print' (auto-corregido, conf=0.80)
* Sugerencia: 'prnt' -> 'print' (auto-corregido, conf=0.80)
```

### Stream para el Parser (salida real)

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

---

## 6. Mediciones de Tiempo de Ejecución

### Script usado para generar las mediciones

```python
# bench_run.py — ubicado en Tema 5/5 Lexer/
import sys, time
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent / "src"))
from lexer import UnegHybridLexer

sample_code = 'pront x = 5\nif x > 3 prnt(x) else prnt("no")'

results = []
for i in range(1, 6):
    t0 = time.perf_counter()
    lexer = UnegHybridLexer(sample_code, confidence_threshold=0.8)
    tokens = lexer.tokenize()
    t1 = time.perf_counter()
    ms = (t1 - t0) * 1000
    results.append(ms)
    print(f"Run {i}: {ms:.4f} ms  (tokens={len(tokens)})")
```

**Instrucción para regenerar:**
```bash
cd "Tema 5/5 Lexer"
python bench_run.py
```

### Datos crudos — 5 ejecuciones con `time.perf_counter()`

| # Prueba | Tiempo total (ms) | Tokens generados | Notas |
|----------|-------------------|-----------------|-------|
| 1        | 1.4927            | 17              | — |
| 2        | 1.4851            | 17              | Mínimo |
| 3        | 1.4887            | 17              | — |
| 4        | 2.2290            | 17              | Pico (probable context switch SO) |
| 5        | 1.4853            | 17              | — |
| **Promedio** | **1.6362**    | —               | — |
| **Mínimo**   | **1.4851**    | —               | — |
| **Máximo**   | **2.2290**    | —               | — |

### Desglose interno de fases (estimado, sin instrumentación por subfase)

> La implementación mide el tiempo total de `tokenize()`. El desglose es estimado por complejidad algorítmica:

| Fase | Operación | Estimación (% del total) |
|------|-----------|--------------------------|
| Escaneo regex | `re.compile + match` × 11 reglas × 17 tokens | ~60% |
| Verificación keyword | `val in KEYWORDS` (frozenset O(1)) | <1% |
| Cálculo de similitud Levenshtein | O(m×n) × ~57 candidatos × 3 tokens con error | ~35% |
| Lookup tabla typos (fallback) | `dict.get` O(1) | <1% |
| Overhead Python / creación `Token` | `@dataclass.__init__` × 17 | ~4% |

---

## 7. Métricas Adicionales de Calidad

### Caso de prueba principal (`main.py`)

| Métrica | Valor |
|---------|-------|
| Total de tokens generados | 17 |
| Tokens auto-corregidos (`CORRECTED`, ratio ≥ 0.8) | 3 |
| Tokens con fallback IA (`AI_SUGGESTION`, ratio < 0.8) | 0 |
| Tokens sin procesamiento especial (KEYWORD/IDENTIFIER/NUMBER/etc.) | 14 |
| Pruebas unitarias pasadas | 4/4 (100%) |
| Dependencias externas | 0 |

### Casos adicionales probados en `test_lexer.py`

#### Test 1 — Métricas de similitud

| Par de cadenas | Distancia Lev. | Ratio esperado | Ratio calculado | Resultado |
|---------------|----------------|----------------|----------------|-----------|
| `"pront"` vs `"print"` | 1 | 0.8000 | **0.8000** | ✓ OK |
| `"prt"` vs `"print"` | 2 | 0.6000 | **0.6000** | ✓ OK |

#### Test 2 — Auto-corrección (`test_auto_correction_threshold`)

```
Código entrada:    "pront x = 5"
Token[0].type:     CORRECTED
Token[0].value:    'print'
Token[0].corrected_from: 'pront'
Token[0].confidence: 0.80
```

#### Test 3 — Fallback IA (`test_llm_fallback_trigger`)

```
Código entrada:     "prt(x)"
Token[0].type:      AI_SUGGESTION
Token[0].suggestion: 'print'
ai_suggestions[0]:  "Sugerencia: 'prt' -> 'print'"
Ratio prt vs print: 0.60  (< 0.8 → fallback activado)
```

#### Test 4 — Stream para parser (`test_parser_stream_generation`)

```python
# Código: 'pront x = 5\nif x > 3 prt(x) else prnt("no")'
stream[0]  == ('KEYWORD', 'print')   # pront corregido vía auto-corrección
stream[8]  == ('KEYWORD', 'print')   # prt corregido vía fallback LLM
```

### Ratios exactos calculados (ejecución real)

| Token erróneo | Candidato | Distancia Lev. | Ratio exacto | Ruta |
|--------------|-----------|----------------|-------------|------|
| `pront` | `print` | 1 | 0.8000 | Auto-corrección |
| `prnt` | `print` | 1 | 0.8000 | Auto-corrección |
| `prt` | `print` | 2 | 0.6000 | Fallback LLM |

---

## 8. Limitaciones Observadas

### L1 — Umbral 0.8 como caso límite exacto

`pront` y `prnt` producen ratio = **0.8000** exacto (1 edición en palabra de 5 letras). El código usa `ratio >= self.threshold` (inclusivo). Si el operador fuera `>` (estricto), ambos tokens irían al fallback. El límite es sensible al operador de comparación.

### L2 — Zona muerta: ratio < 0.4 sin sugerencia

En `_process_identifier`, si `ratio < 0.4` el token se clasifica como `IDENTIFIER` sin sugerencia alguna. Puede producir falsos negativos para errores muy severos.

### L3 — LLM completamente simulado

`simulate_llm_fallback` construye un prompt real con `build_llm_prompt` pero lo descarta — no realiza llamadas HTTP ni invoca API alguna. La "sugerencia de IA" se genera localmente con 13 typos hardcodeados + similitud con umbral 0.4.

### L4 — Re-compilación de regex en cada posición

`re.compile(pattern)` se llama dentro del loop por cada posición del código fuente (línea 46 de `lexer.py`). Para códigos fuente extensos, esto es ineficiente. La optimización es compilar los patrones una sola vez en `__init__`.

### L5 — Tabla de typos no exhaustiva

`common_typos` contiene solo 13 entradas. Cualquier error no contemplado devuelve `"identifier"` como sugerencia si no hay candidato con ratio ≥ 0.4.

### L6 — Desviación del diseño original: zona ratio [0.0, 0.4)

El diseño original no especificaba qué hacer cuando el ratio era muy bajo. La implementación decidió emitir `IDENTIFIER` en ese caso, en lugar de `UNKNOWN` o seguir al fallback. Es la única desviación real respecto al diseño planteado.

---

*Fin del documento de datos técnicos crudos.*
