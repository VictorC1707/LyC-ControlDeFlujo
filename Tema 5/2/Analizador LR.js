/**
 * 1. ANALIZADOR LÉXICO (Reutilizado del LL)
 */
function tokenizar(input) {
    const tokens = [];
    const regex = /\s*(?:(\d+)|(\+)|(\*)|(\()|(\)))\s*/g;
    let match;

    while ((match = regex.exec(input)) !== null) {
        if (match[1]) tokens.push({ tipo: 'ID', valor: match[1] });
        else if (match[2]) tokens.push({ tipo: 'SUMA', valor: '+' });
        else if (match[3]) tokens.push({ tipo: 'MULT', valor: '*' });
        else if (match[4]) tokens.push({ tipo: 'LPAREN', valor: '(' });
        else if (match[5]) tokens.push({ tipo: 'RPAREN', valor: ')' });
    }
    tokens.push({ tipo: 'EOF', valor: null }); 
    return tokens;
}

/**
 * 2. REGLAS DE LA GRAMÁTICA (Para reducir)
 * Cada regla tiene el símbolo no terminal que produce (lhs) y 
 * la cantidad de elementos en su lado derecho (length) para saber cuánto sacar de la pila.
 */
const reglas = [
    { id: 0, lhs: 'S', length: 1 }, // Regla 0: S -> E (Aceptación)
    { id: 1, lhs: 'E', length: 3 }, // Regla 1: E -> E + T
    { id: 2, lhs: 'E', length: 1 }, // Regla 2: E -> T
    { id: 3, lhs: 'T', length: 3 }, // Regla 3: T -> T * F
    { id: 4, lhs: 'T', length: 1 }, // Regla 4: T -> F
    { id: 5, lhs: 'F', length: 3 }, // Regla 5: F -> ( E )
    { id: 6, lhs: 'F', length: 1 }  // Regla 6: F -> id
];

/**
 * 3. TABLAS DEL ANALIZADOR SLR(1)
 * Calculadas estáticamente para los 12 estados posibles del lenguaje L.
 * 's' = Shift (Desplazar), 'r' = Reduce (Reducir), 'acc' = Accept (Aceptar)
 */
const tablaAccion = {
    0:  { 'ID': 's5', 'LPAREN': 's4' },
    1:  { 'SUMA': 's6', 'EOF': 'acc' },
    2:  { 'SUMA': 'r2', 'MULT': 's7', 'RPAREN': 'r2', 'EOF': 'r2' },
    3:  { 'SUMA': 'r4', 'MULT': 'r4', 'RPAREN': 'r4', 'EOF': 'r4' },
    4:  { 'ID': 's5', 'LPAREN': 's4' },
    5:  { 'SUMA': 'r6', 'MULT': 'r6', 'RPAREN': 'r6', 'EOF': 'r6' },
    6:  { 'ID': 's5', 'LPAREN': 's4' },
    7:  { 'ID': 's5', 'LPAREN': 's4' },
    8:  { 'SUMA': 's6', 'RPAREN': 's11' },
    9:  { 'SUMA': 'r1', 'MULT': 's7', 'RPAREN': 'r1', 'EOF': 'r1' },
    10: { 'SUMA': 'r3', 'MULT': 'r3', 'RPAREN': 'r3', 'EOF': 'r3' },
    11: { 'SUMA': 'r5', 'MULT': 'r5', 'RPAREN': 'r5', 'EOF': 'r5' }
};

const tablaGoto = {
    0: { 'E': 1, 'T': 2, 'F': 3 },
    4: { 'E': 8, 'T': 2, 'F': 3 },
    6: { 'T': 9, 'F': 3 },
    7: { 'F': 10 }
};

/**
 * 4. MOTOR DEL ANALIZADOR LR (Shift-Reduce)
 */
function analizarLR(tokens) {
    console.log("Iniciando análisis LR...");
    const pila = [0]; // La pila siempre inicia en el estado 0
    let cursor = 0;   // Puntero para recorrer los tokens

    while (true) {
        let estadoActual = pila[pila.length - 1]; // Leer tope de la pila
        let tokenActual = tokens[cursor];
        
        // Buscar qué acción tomar en la tabla cruzando Estado x Token
        let accionesEstado = tablaAccion[estadoActual];
        let accion = accionesEstado ? accionesEstado[tokenActual.tipo] : undefined;

        // Si la casilla está vacía (undefined), hay un error de sintaxis
        if (!accion) {
            throw new Error(`Error de sintaxis: No se esperaba el token '${tokenActual.valor || 'Fin de archivo'}' en el estado ${estadoActual}`);
        }

        // Ejecutar Acción: SHIFT (Desplazar)
        if (accion.startsWith('s')) {
            let nuevoEstado = parseInt(accion.substring(1));
            pila.push(nuevoEstado); // Empujamos el nuevo estado a la pila
            cursor++;               // Avanzamos al siguiente token
            console.log(`SHIFT: Consumiendo '${tokenActual.valor}', pasando al estado ${nuevoEstado}`);
        } 
        
        // Ejecutar Acción: REDUCE (Reducir)
        else if (accion.startsWith('r')) {
            let numRegla = parseInt(accion.substring(1));
            let regla = reglas[numRegla];

            // Sacamos de la pila la cantidad de elementos de la parte derecha de la regla
            for (let i = 0; i < regla.length; i++) {
                pila.pop();
            }

            // Consultamos la tabla Goto para saber a qué estado ir ahora
            let estadoTopeDescubierto = pila[pila.length - 1];
            let estadoDestino = tablaGoto[estadoTopeDescubierto][regla.lhs];
            
            pila.push(estadoDestino); // Empujamos el estado Goto
            console.log(`REDUCE: Por regla [${regla.lhs} -> ${regla.length} elementos]. Goto estado ${estadoDestino}`);
        } 
        
        // Ejecutar Acción: ACCEPT (Aceptar)
        else if (accion === 'acc') {
            console.log("¡Análisis sintáctico exitoso! La cadena es válida (LR).");
            break; // Terminamos el bucle con éxito
        }
    }
}

/**
 * 5. PRUEBA DE LA IMPLEMENTACIÓN
 */
const codigoFuente = "3 + 5 * ( 10 + 2 )";
console.log(`Analizando cadena: "${codigoFuente}"\n`);

try {
    const tokens = tokenizar(codigoFuente);
    analizarLR(tokens);
} catch (error) {
    console.error(error.message);
}