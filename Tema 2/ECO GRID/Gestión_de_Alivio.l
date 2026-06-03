// 1. Inicialización del bus de datos
init_grid

// 2. Definición de parámetros operativos
temp_critica = 55.0
limite_tiempo = 5
ciclos_en_peligro = 0
monitoreo = verdadero

// 3. Bucle de vigilancia continua
mientras monitoreo == verdadero ejecutar
    
    // Leer el sensor físico
    temp_actual = leer_temperatura(bateria_principal)
    
    // 4. Evaluación de Riesgo Térmico
    si_verdadero temp_actual >= temp_critica entonces
        
        // --- ACTIVAR PROTOCOLO DE EMERGENCIA ---
        activar_refrigeracion(bateria_principal, verdadero)
        
        // Aislar ingreso de energía (paneles solares)
        conmutar_linea(linea_solar, falso)
        
        // Conectar red comercial de respaldo para aliviar estrés
        conmutar_linea(red_publica, verdadero)
        
        // Contabilizar el tiempo que la batería lleva en estado crítico
        ciclos_en_peligro = ciclos_en_peligro + 1
        
        // Escalamiento: Si el peligro persiste tras 5 ciclos, disparar alarma
        si_verdadero ciclos_en_peligro >= limite_tiempo entonces
            emitir_alerta
        fin_si
        
    sino
        // --- CONDICIÓN SEGURA (O RECUPERADA) ---
        activar_refrigeracion(bateria_principal, falso)
        conmutar_linea(linea_solar, verdadero)
        conmutar_linea(red_publica, falso)
        
        // Reiniciar el contador de riesgo
        ciclos_en_peligro = 0
    fin_si
    
    // Pausa de 1 segundo para estabilización de los sensores
    esperar(1)
    
fin_mientras