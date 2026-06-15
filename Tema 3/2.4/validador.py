def validador_pgn_basico(movimiento):
    """
    Simula un Autómata Finito Determinístico (AFD) para validar
    un subconjunto básico de la notación PGN de ajedrez.
    """
    # Alfabetos
    piezas = {'K', 'Q', 'R', 'B', 'N'}
    columnas = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'}
    filas = {'1', '2', '3', '4', '5', '6', '7', '8'}

    estado_actual = 'q0'

    for caracter in movimiento:
        if estado_actual == 'q0':
            if caracter in piezas:
                estado_actual = 'q1'
            elif caracter in columnas:
                estado_actual = 'q2' # Movimiento de peón
            else:
                estado_actual = 'q_error'
                
        elif estado_actual == 'q1':
            if caracter in columnas:
                estado_actual = 'q2'
            else:
                estado_actual = 'q_error'
                
        elif estado_actual == 'q2':
            if caracter in filas:
                estado_actual = 'q3' # Llega al estado de aceptación
            else:
                estado_actual = 'q_error'
                
        elif estado_actual == 'q3':
            # Cualquier caracter extra invalida la cadena
            estado_actual = 'q_error'
            
        if estado_actual == 'q_error':
            break

    return estado_actual == 'q3'

if __name__ == "__main__":
    print("==================================================")
    print("   VALIDADOR LÉXICO PGN (SUBCONJUNTO BÁSICO)      ")
    print("==================================================")
    print("Escriba el movimiento a evaluar.")
    print("Escriba 'salir' para terminar la ejecución.\n")

    while True:
        mov = input("Ingrese un movimiento: ").strip()
        
        if mov.lower() == 'salir':
            print("Cerrando el validador...")
            break
            
        if not mov:
            continue
            
        if validador_pgn_basico(mov):
            print(f" -> [ÉXITO] El movimiento '{mov}' es VÁLIDO y fue aceptado.\n")
        else:
            print(f" -> [ERROR] El movimiento '{mov}' es INVÁLIDO y fue rechazado.\n")