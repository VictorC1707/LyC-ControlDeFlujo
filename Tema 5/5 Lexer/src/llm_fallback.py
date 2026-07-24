"""
llm_fallback.py — Fallback con LLM para resolución de tokens ambiguos.

Cuando un token no reconocido o dudoso obtiene un ratio de similitud menor al
umbral de confianza (0.8), se activa este módulo que simula (o invoca) una
consulta a un Modelo de Lenguaje (LLM) con un prompt contextualizado.
"""

from __future__ import annotations
from similarity import similarity_ratio, CANDIDATE_DICTIONARY


def build_llm_prompt(unknown_token: str, context_line: str, line_num: int) -> str:
    """
    Construye el prompt de corrección de token ambiguo adaptado al contexto de UnegScript.
    """
    prompt = f"""[SISTEMA DE ASISTENCIA HÍBRIDO UNEGSCRIPT]
Contexto: Estás actuando como la capa de IA en un lexer híbrido para el lenguaje UnegScript (subconjunto de Python).
Línea {line_num}: "{context_line.strip()}"
Error Léxico Detectado: Token ambiguo '{unknown_token}'.

Instrucciones:
Analiza la sintaxis esperada en esa posición. Selecciona la palabra clave u operador válido en UnegScript más probable que el usuario intentó escribir.
Responde estrictamente con la palabra sugerida.

Sugerencia:"""
    return prompt


def simulate_llm_fallback(
    unknown_token: str,
    context_line: str = "",
    line_num: int = 1,
    candidates: set[str] | None = None
) -> str:
    """
    Simula la respuesta de un LLM evaluando el contexto sintáctico y de similitud amplia.
    """
    _prompt = build_llm_prompt(unknown_token, context_line, line_num)

    common_typos = {
        "pront": "print",
        "prnt": "print",
        "prt": "print",
        "pritn": "print",
        "impr": "print",
        "iff": "if",
        "esi": "else",
        "elss": "else",
        "whle": "while",
        "retun": "return",
        "funct": "def",
        "defi": "def",
    }

    if unknown_token.lower() in common_typos:
        return common_typos[unknown_token.lower()]

    dict_to_use = candidates if candidates is not None else CANDIDATE_DICTIONARY
    best_candidate = None
    max_ratio = 0.0

    for cand in dict_to_use:
        ratio = similarity_ratio(unknown_token, cand)
        if ratio > max_ratio:
            max_ratio = ratio
            best_candidate = cand

    if best_candidate and max_ratio >= 0.4:
        return best_candidate

    return "identifier"
