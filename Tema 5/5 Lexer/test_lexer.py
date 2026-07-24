"""
test_lexer.py — Suite de pruebas unitarias y de integración para el Lexer Híbrido.
"""

from __future__ import annotations
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent / "src"))

from lexer import UnegHybridLexer
from tokens import TokenType
from similarity import levenshtein_distance, similarity_ratio, find_best_candidate


def test_levenshtein_and_ratio():
    print("[TEST] Probando metricas de similitud...")
    dist1 = levenshtein_distance("pront", "print")
    ratio1 = similarity_ratio("pront", "print")
    assert dist1 == 1, f"Expected 1, got {dist1}"
    assert abs(ratio1 - 0.8) < 1e-5, f"Expected 0.8, got {ratio1}"

    ratio_sub = similarity_ratio("prt", "print")
    assert abs(ratio_sub - 0.6) < 1e-5, f"Expected 0.6, got {ratio_sub}"
    print("  [OK] Levenshtein & similarity_ratio validados con exito.")


def test_auto_correction_threshold():
    print("[TEST] Probando auto-correccion (ratio >= 0.8)...")
    code = "pront x = 5"
    lexer = UnegHybridLexer(code, confidence_threshold=0.8)
    tokens = lexer.tokenize()

    assert tokens[0].type == TokenType.CORRECTED, f"Expected CORRECTED, got {tokens[0].type}"
    assert tokens[0].value == "print"
    assert tokens[0].corrected_from == "pront"
    assert abs(tokens[0].confidence - 0.8) < 1e-5
    print("  [OK] Token 'pront' auto-corregido a 'print' (ratio = 0.80 >= 0.8).")


def test_llm_fallback_trigger():
    print("[TEST] Probando fallback IA (ratio < 0.8)...")
    code = "prt(x)"
    lexer = UnegHybridLexer(code, confidence_threshold=0.8)
    tokens = lexer.tokenize()

    assert tokens[0].type == TokenType.AI_SUGGESTION
    assert tokens[0].suggestion == "print"
    assert len(lexer.ai_suggestions) == 1
    assert "Sugerencia: 'prt' -> 'print'" in lexer.ai_suggestions[0]
    print(f"  [OK] Fallback IA activado correctamente para 'prt' (< 0.8): {lexer.ai_suggestions[0]}")


def test_parser_stream_generation():
    print("[TEST] Probando generacion de stream para el parser recursivo descendente...")
    code = 'pront x = 5\nif x > 3 prt(x) else prnt("no")'
    lexer = UnegHybridLexer(code, confidence_threshold=0.8)
    lexer.tokenize()
    stream = lexer.get_parser_stream()

    assert stream[0] == ("KEYWORD", "print")
    assert stream[8] == ("KEYWORD", "print")
    print("  [OK] Stream para el parser generado correctamente sin interrupciones.")


if __name__ == "__main__":
    print("=" * 60)
    print("  EJECUTANDO SUITE DE PRUEBAS UNITARIAS (TEST_LEXER.PY)")
    print("=" * 60)
    test_levenshtein_and_ratio()
    test_auto_correction_threshold()
    test_llm_fallback_trigger()
    test_parser_stream_generation()
    print("=" * 60)
    print("  TODAS LAS PRUEBAS PASARON EXITOSAMENTE! (100% SUCCESS)")
    print("=" * 60)
