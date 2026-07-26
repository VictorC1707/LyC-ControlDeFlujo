import sys
import time
import os
from antlr4 import *
from antlr4.error.ErrorListener import ErrorListener as ANTLRErrorListener
from DockerComposeLexer import DockerComposeLexer
from DockerComposeParser import DockerComposeParser

# Listener silencioso para atrapar errores sin ensuciar la consola
class ErrorListener(ANTLRErrorListener):
    def __init__(self):
        self.errores = 0
    def syntaxError(self, recognizer, offendingSymbol, line, column, msg, e):
        self.errores += 1

def main():
    if len(sys.argv) < 2:
        sys.exit(1)

    filepath = sys.argv[1]
    estado = "OK"
    
    # 1. Iniciar cronómetro
    start_time = time.perf_counter()

    try:
        # 2. Leer el archivo y pasarlo al Lexer/Parser
        input_stream = FileStream(filepath, encoding='utf-8')
        lexer = DockerComposeLexer(input_stream)
        lexer.removeErrorListeners()
        
        stream = CommonTokenStream(lexer)
        parser = DockerComposeParser(stream)
        
        error_listener = ErrorListener()
        parser.removeErrorListeners()
        parser.addErrorListener(error_listener)
        
        # 3. Ejecutar la regla principal (Asegúrate de que se llame compose_file)
        parser.compose_file()
        
        # 4. Validar errores
        if error_listener.errores > 0:
            estado = "ERROR"
            
    except Exception:
        estado = "ERROR"

    # 5. Detener cronómetro y calcular milisegundos
    duracion_ms = int((time.perf_counter() - start_time) * 1000)
    nombre_archivo = os.path.basename(filepath)
    
    # 6. Escribir en el log con el formato exacto de automatización
    try:
        with open("python_resultados.log", "a", encoding="utf-8") as f:
            f.write(f"{nombre_archivo},{estado},{duracion_ms}\n")
    except Exception:
        pass

if __name__ == "__main__":
    main()