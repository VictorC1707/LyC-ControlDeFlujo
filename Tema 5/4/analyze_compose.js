import fs from 'fs';
import path from 'path';
import { performance } from 'perf_hooks';
import antlr4 from 'antlr4';
import DockerComposeLexer from './DockerComposeLexer.js';
import DockerComposeParser from './DockerComposeParser.js';

// Listener silencioso para atrapar errores sin ensuciar la consola
class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errores = 0;
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errores += 1;
    }
}

function main() {
    // Verificar si se pasó el archivo como argumento
    if (process.argv.length < 3) {
        process.exit(1);
    }

    const filepath = process.argv[2];
    let estado = "OK";
    
    // 1. Iniciar cronómetro de alta resolución
    const startTime = performance.now();

    try {
        // 2. Leer archivo y pasarlo al Lexer/Parser
        const input = fs.readFileSync(filepath, 'utf8');
        const chars = new antlr4.InputStream(input);
        
        const lexer = new DockerComposeLexer(chars);
        lexer.removeErrorListeners();
        
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new DockerComposeParser(tokens);
        
        const errorListener = new CustomErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        
        // 3. Ejecutar la regla principal de tu gramática
        parser.compose_file();
        
        // 4. Validar errores sintácticos
        if (errorListener.errores > 0) {
            estado = "ERROR";
        }
    } catch (error) {
        estado = "ERROR";
    }

    // 5. Detener cronómetro y calcular milisegundos exactos
    const endTime = performance.now();
    const duracionMs = Math.round(endTime - startTime);
    const nombreArchivo = path.basename(filepath);

    // 6. Escribir en el log con el formato exacto para tu experimento de carga
    const logLine = `${nombreArchivo},${estado},${duracionMs}\n`;
    
    try {
        fs.appendFileSync('javascript_resultados.log', logLine, 'utf8');
    } catch (e) {
        // Fallo silencioso
    }
}

main();