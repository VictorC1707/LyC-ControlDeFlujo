import sys
import os

# Permitir importar desde el directorio raíz
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

try:
    from src.lexer import Lexer
except ModuleNotFoundError:
    from lexer import Lexer

def main():
    if len(sys.argv) < 2:
        print("Uso: analizador_lexer <ruta_archivo_docker>")
        sys.exit(1)

    filepath = sys.argv[1]
    if not os.path.exists(filepath):
        print(f"Error: El archivo '{filepath}' no existe.")
        sys.exit(1)

    try:
        with open(filepath, "r", encoding="utf-8") as f:
            code = f.read()
    except Exception as e:
        print(f"Error al leer el archivo: {e}")
        sys.exit(1)

    print(f"Analizando archivo: {filepath}\n")
    print("=" * 60)
    
    lexer = Lexer(code)
    tokens, errors = lexer.tokenizar()

    # Imprimir tokens válidos
    for token in tokens:
        print(token)

    print("=" * 60)
    print(f"Resumen: {len(tokens)} tokens reconocidos exitosamente.")
    
    # Imprimir errores si los hay
    if errors:
        print("\n" + "!" * 20 + " ERRORES LÉXICOS DETECTADOS " + "!" * 20)
        for err in errors:
            print(err)
        print("!" * 68)
        sys.exit(1) # Salida con error si hubo fallos léxicos
    else:
        print("\nAnálisis léxico completado exitosamente sin errores.")
        sys.exit(0)

if __name__ == "__main__":
    main()
