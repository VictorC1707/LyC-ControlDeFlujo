"""
similarity.py — Módulo de similitud de cadenas y cálculo de confianza.
"""

from __future__ import annotations
from tokens import KEYWORDS

BUILTINS: set[str] = {
    "print", "input", "range", "len", "int", "float", "str", "list",
    "dict", "set", "tuple", "bool", "type", "open", "abs", "max", "min",
    "sum", "enumerate", "zip", "map", "filter", "any", "all"
}

CANDIDATE_DICTIONARY: set[str] = set(KEYWORDS) | BUILTINS


def levenshtein_distance(s1: str, s2: str) -> int:
    """
    Calcula la distancia de edición (Levenshtein) entre dos cadenas.
    """
    if s1 == s2:
        return 0
    m, n = len(s1), len(s2)
    if m == 0:
        return n
    if n == 0:
        return m

    if m > n:
        s1, s2 = s2, s1
        m, n = n, m

    previous_row = list(range(m + 1))
    for i, c2 in enumerate(s2):
        current_row = [i + 1] * (m + 1)
        for j, c1 in enumerate(s1):
            insertions = previous_row[j + 1] + 1
            deletions = current_row[j] + 1
            substitutions = previous_row[j] + (0 if c1 == c2 else 1)
            current_row[j + 1] = min(insertions, deletions, substitutions)
        previous_row = current_row

    return previous_row[m]


def similarity_ratio(s1: str, s2: str) -> float:
    """
    Calcula el ratio de similitud entre dos cadenas usando la fórmula dada:

        ratio = 1 - distancia_Levenshtein(s1, s2) / max(len(s1), len(s2))
    """
    if s1 == s2:
        return 1.0
    max_len = max(len(s1), len(s2))
    if max_len == 0:
        return 1.0
    dist = levenshtein_distance(s1, s2)
    return 1.0 - (dist / max_len)


def find_best_candidate(
    token_val: str,
    candidates: set[str] | list[str] | None = None
) -> tuple[str | None, float]:
    """
    Busca la palabra candidata con mayor ratio de similitud respecto al token dado.
    """
    if not token_val:
        return (None, 0.0)

    dict_to_use = candidates if candidates is not None else CANDIDATE_DICTIONARY

    best_word: str | None = None
    highest_ratio: float = -1.0

    for candidate in dict_to_use:
        ratio = similarity_ratio(token_val, candidate)
        if ratio > highest_ratio:
            highest_ratio = ratio
            best_word = candidate

    return (best_word, max(0.0, highest_ratio))
