// ============================================================
// Escenario Operativo B: Balance de Carga y Optimización Energética
// Lenguaje L - ECO-GRID
// ============================================================

init_grid

// Definición de umbrales operativos
limite_optimo = 90.0
limite_critico = 20.0

// Bucle principal de monitoreo continuo
mientras verdadero == verdadero ejecutar

    // Lectura de sensores mediante variables locales
    carga_actual = estado_carga(banco_litio)
    generacion_solar = leer_generacion(linea_solar)
    demanda_interna = leer_demanda(sector_industrial)

    // ===== CASO 1: EXCEDENTE DE ENERGÍA Y VENTA =====
    si_verdadero carga_actual >= limite_optimo y generacion_solar > demanda_interna entonces
        conmutar_linea(red_publica, verdadero)
    fin_si

    // ===== CASO 2: DÉFICIT CRÍTICO Y AISLAMIENTO =====
    si_verdadero carga_actual <= limite_critico entonces
        // Desconectar venta para priorizar consumo interno
        conmutar_linea(red_publica, falso)
        
        // Racionamiento: Aislar cargas no críticas
        conmutar_linea(sector_no_esencial, falso)
        
        // Asegurar soporte vital de la planta
        conmutar_linea(sector_esencial, verdadero)
        
        // Notificación HMI y sirenas
        emitir_alerta
    fin_si

    // Pausa de estabilización del bus de datos (5 segundos)
    esperar(5)

fin_mientras