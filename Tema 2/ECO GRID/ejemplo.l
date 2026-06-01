// Inicializamos los drivers físicos
init_grid

// Leemos el estado crítico de la batería 2
temp_b2 = leer_temperatura(bateria_2)
carga_b2 = estado_carga(bateria_2)

// Prevención de Fuga Térmica: Si calienta mucho, la aislamos
si_verdadero temp_b2 >= 50.0 entonces
    conmutar_linea(sector_A, falso)
fin_si

// Prueba del actuador repetitivo
repetir 3 veces
    conmutar_linea(sector_B, verdadero)
fin_repetir