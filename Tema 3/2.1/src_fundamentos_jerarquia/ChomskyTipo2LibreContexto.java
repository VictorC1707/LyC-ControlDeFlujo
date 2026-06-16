import java.util.Scanner;

public class ChomskyTipo2LibreContexto {

    public static boolean validar(String cadena) {

        if (!cadena.startsWith("x="))
            return false;

        return evaluar(cadena.substring(2));
    }

    private static boolean evaluar(String expr) {

        if (expr.equals("a") || expr.equals("b"))
            return true;

        if (expr.startsWith("(") && expr.endsWith(")")) {
            return evaluar(expr.substring(1, expr.length() - 1));
        }

        return false;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("[Tipo 2] Ingrese expresión: ");
        String entrada = scanner.nextLine().trim();

        System.out.println(
                validar(entrada)
                        ? "OK: Expresión válida."
                        : "ERROR: Expresión inválida.");

        scanner.close();
    }
}