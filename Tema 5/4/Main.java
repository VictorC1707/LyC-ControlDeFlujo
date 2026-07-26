import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        // Verificar que se haya pasado un archivo como argumento
        if (args.length == 0) {
            return; 
        }

        String archivoPrueba = args[0];
        String estadoSalud = "OK";
        long tiempoInicio = System.currentTimeMillis();

        try {
            // 1. Leer el archivo
            CharStream input = CharStreams.fromFileName(archivoPrueba);
            
            // 2. Instanciar el Lexer y pasar los tokens al Parser
            DockerComposeLexer lexer = new DockerComposeLexer(input);
            lexer.removeErrorListeners(); // Ocultar mensajes de error en consola
            
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            DockerComposeParser parser = new DockerComposeParser(tokens);
            parser.removeErrorListeners();

            // 3. Iniciar el análisis sintáctico 
            // IMPORTANTE: Debes cambiar "reglaInicial()" por el nombre real de la primera regla de tu gramática
            parser.compose_file(); 

            // Verificar si hubo errores de sintaxis
            if (parser.getNumberOfSyntaxErrors() > 0) {
                estadoSalud = "ERROR";
            }

        } catch (Exception e) {
            estadoSalud = "ERROR";
        }

        // 4. Detener el temporizador
        long tiempoFin = System.currentTimeMillis();
        long duracion = tiempoFin - tiempoInicio;

        // 5. REGLA ESTRICTA DE LOGS: Guardar en la misma carpeta sin palabras redundantes
        try (FileWriter fw = new FileWriter("java_resultados.log", true)) {
            // Formato limpio: nombre_archivo, salud, tiempo_ms
            fw.write(archivoPrueba + "," + estadoSalud + "," + duracion + "\n");
        } catch (IOException e) {
            // Fallo silencioso para no ensuciar la salida
        }
    }
}