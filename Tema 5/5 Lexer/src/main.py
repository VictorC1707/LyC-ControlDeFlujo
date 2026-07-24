"""
main.py — Punto de entrada para la ejecución y prueba del Lexer Híbrido UnegScript.
"""

from __future__ import annotations
import sys
import time
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from lexer import UnegHybridLexer


def run_demo():
    print("=" * 70)
    print("  DEMO LEXER HÍBRIDO UNEGSCRIPT (REQUERIMIENTO 1)")
    print("=" * 70)

    sample_code = 'pront x = 5\nif x > 3 prnt(x) else prnt("no")'

    print("\n[1] Código fuente de entrada con errores intencionales:")
    print("-" * 50)
    for idx, line in enumerate(sample_code.splitlines(), 1):
        print(f"  Line {idx}: {line}")
    print("-" * 50)

    start_time = time.perf_counter()

    lexer = UnegHybridLexer(sample_code, confidence_threshold=0.8)
    tokens = lexer.tokenize()

    end_time = time.perf_counter()
    execution_time_ms = (end_time - start_time) * 1000

    print(f"\n[2] Lista de Tokens Producidos ({len(tokens)} tokens):")
    print("-" * 70)
    for tok in tokens:
        print(f"  {tok}")

    print("\n[3] Correcciones y Sugerencias del Pipeline Hibrido:")
    print("-" * 50)
    if lexer.ai_suggestions:
        for sug in lexer.ai_suggestions:
            print(f"  * {sug}")
    else:
        print("  (Sin correcciones ni sugerencias generadas)")

    print("\n[4] Salida simplificada consumible por el Parser Recursivo Descendente:")
    print("-" * 70)
    parser_stream = lexer.get_parser_stream()
    print(f"  Stream = {parser_stream}")

    print("\n[5] Mediciones de Rendimiento:")
    print("-" * 50)
    print(f"  • Tiempo total de tokenización léxica híbrida: {execution_time_ms:.4f} ms")
    print("=" * 70)


def process_file(file_path: str):
    path = Path(file_path)
    if not path.exists():
        print(f"Error: El archivo '{file_path}' no existe.")
        return

    code = path.read_text(encoding="utf-8")

    print("=" * 70)
    print(f"  PROCESANDO ARCHIVO: {path.name}")
    print("=" * 70)

    start_time = time.perf_counter()

    lexer = UnegHybridLexer(code, confidence_threshold=0.8)
    tokens = lexer.tokenize()

    end_time = time.perf_counter()
    execution_time_ms = (end_time - start_time) * 1000

    print(f"\nTokens identificados ({len(tokens)}):")
    for tok in tokens:
        print(f"  {tok}")

    print("\nSugerencias de IA:")
    for sug in lexer.ai_suggestions:
        print(f"  • {sug}")

    print(f"\nTiempo de ejecución: {execution_time_ms:.4f} ms")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        process_file(sys.argv[1])
    else:
        run_demo()
