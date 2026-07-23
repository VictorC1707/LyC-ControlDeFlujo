import sys
import time
import os
from antlr4 import *
from antlr4.error.ErrorListener import ErrorListener as ANTLRErrorListener
from DockerComposeLexer import DockerComposeLexer
from DockerComposeParser import DockerComposeParser

class ErrorListener(ANTLRErrorListener):
    """Listener personalizado para capturar errores sintácticos y léxicos."""
    def __init__(self):
        self.errors = []
    def syntaxError(self, recognizer, offendingSymbol, line, column, msg, e):
        self.errors.append(f"Línea {line}:{column} - {msg}")
    def reportAmbiguity(self, recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs):
        pass
    def reportAttemptingFullContext(self, recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs):
        pass
    def reportContextSensitivity(self, recognizer, dfa, startIndex, stopIndex, prediction, configs):
        pass

def analyze_file(filepath):
    """Analiza el archivo dado y retorna (exitoso, mensaje, tiempo_segundos)."""
    if not os.path.isfile(filepath):
        return False, f"Archivo no encontrado: {filepath}", 0.0

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False, f"Error al leer el archivo: {str(e)}", 0.0

    input_stream = InputStream(content)

    lexer = DockerComposeLexer(input_stream)
    stream = CommonTokenStream(lexer)

    parser = DockerComposeParser(stream)

    error_listener = ErrorListener()
    parser.removeErrorListeners()
    parser.addErrorListener(error_listener)

    start_time = time.perf_counter()
    try:
        tree = parser.compose_file()
    except Exception as e:
        elapsed = time.perf_counter() - start_time
        return False, f"Excepción durante el parseo: {str(e)}", elapsed
    elapsed = time.perf_counter() - start_time

    if error_listener.errors:
        error_msg = "; ".join(error_listener.errors)
        return False, error_msg, elapsed

    return True, "Análisis sintáctico completado", elapsed

def main():
    if len(sys.argv) < 2:
        print("Uso: python analyze_compose.py <archivo_docker_compose.yml>")
        sys.exit(1)

    filepath = sys.argv[1]
    success, message, elapsed = analyze_file(filepath)

    log_dir = os.path.dirname(os.path.abspath(__file__))
    log_file = os.path.join(log_dir, "analysis.log")

    try:
        with open(log_file, 'a', encoding='utf-8') as f:
            f.write(f"{os.path.basename(filepath)} | SALUD: {'EXITOSO' if success else 'FALLIDO'} | {elapsed:.6f}s\n")
    except Exception as e:
        print(f"Error al escribir el log: {e}", file=sys.stderr)

    print(f"Análisis completado. Ver log en: {log_file}")
    if success:
        print("✅ Parseo exitoso")
    else:
        print(f"❌ Parseo con errores: {message}")

if __name__ == "__main__":
    main()