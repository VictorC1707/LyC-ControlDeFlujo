/**
 * 1. ANALIZADOR LÉXICO (Tokenizador)
 * Convierte el código fuente en una lista de tokens manejables.
 */
function tokenizar(input) {
    const tokens = [];
    // Expresión regular para encontrar: números (id), +, *, (, )
    const regex = /\s*(?:(\d+)|(\+)|(\*)|(\()|(\)))\s*/g;
    let match;

    while ((match = regex.exec(input)) !== null) {
        if (match[1]) tokens.push({ tipo: 'ID', valor: match[1] });
        else if (match[2]) tokens.push({ tipo: 'SUMA', valor: '+' });
        else if (match[3]) tokens.push({ tipo: 'MULT', valor: '*' });
        else if (match[4]) tokens.push({ tipo: 'LPAREN', valor: '(' });
        else if (match[5]) tokens.push({ tipo: 'RPAREN', valor: ')' });
    }
    
    // Marcador de fin de archivo/cadena
    tokens.push({ tipo: 'EOF', valor: null }); 
    return tokens;
}

/**
 * 2. ANALIZADOR SINTÁCTICO (Descendente Recursivo LL)
 */
class AnalizadorLL {
    constructor(tokens) {
        this.tokens = tokens;
        this.posicion = 0;
    }

    // Devuelve el token actual sin consumirlo (Lookahead)
    tokenActual() {
        return this.tokens[this.posicion];
    }

    // Compara el tipo esperado con el token actual y avanza
    match(tipoEsperado) {
        const actual = this.tokenActual();
        if (actual.tipo === tipoEsperado) {
            this.posicion++;
        } else {
            throw new Error(`Error de sintaxis: Se esperaba '${tipoEsperado}', pero se encontró '${actual.tipo}' (valor: ${actual.valor}) en la posición ${this.posicion}`);
        }
    }

    // Método principal para iniciar el análisis
    parsear() {
        console.log("Iniciando análisis LL...");
        this.E();
        
        // Al terminar las reglas, debemos verificar que consumimos todos los tokens
        if (this.tokenActual().tipo !== 'EOF') {
            throw new Error("Error de sintaxis: Fin de archivo inesperado. Quedan tokens sin analizar.");
        }
        console.log("¡Análisis sintáctico exitoso! La cadena es válida para el lenguaje L.");
    }

    /* --- REGLAS GRAMATICALES --- */

    // Regla: E -> T E'
    E() {
        this.T();
        this.E_prima();
    }

    // Regla: E' -> + T E' | epsilon
    E_prima() {
        const actual = this.tokenActual();
        if (actual.tipo === 'SUMA') {
            this.match('SUMA');
            this.T();
            this.E_prima();
        }
        // Epsilon (vacío): si no hay suma, simplemente no hace nada y retorna
    }

    // Regla: T -> F T'
    T() {
        this.F();
        this.T_prima();
    }

    // Regla: T' -> * F T' | epsilon
    T_prima() {
        const actual = this.tokenActual();
        if (actual.tipo === 'MULT') {
            this.match('MULT');
            this.F();
            this.T_prima();
        }
        // Epsilon
    }

    // Regla: F -> ( E ) | id
    F() {
        const actual = this.tokenActual();
        if (actual.tipo === 'LPAREN') {
            this.match('LPAREN');
            this.E(); // Llamada recursiva
            this.match('RPAREN');
        } else if (actual.tipo === 'ID') {
            this.match('ID');
        } else {
            throw new Error(`Error de sintaxis en F(): Token inesperado '${actual.tipo}' (valor: ${actual.valor})`);
        }
    }
}

/**
 * 3. PRUEBA DE LA IMPLEMENTACIÓN
 */
const codigoFuente = "3 + 5 * ( 10 + 2 )";
console.log(`Analizando cadena: "${codigoFuente}"\n`);

try {
    const tokens = tokenizar(codigoFuente);
    console.log("Tokens generados:", tokens.map(t => t.tipo).join(', '));
    
    const parser = new AnalizadorLL(tokens);
    parser.parsear();
} catch (error) {
    console.error(error.message);
}