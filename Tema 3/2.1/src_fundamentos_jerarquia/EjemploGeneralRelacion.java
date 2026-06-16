import java.util.Scanner;

public class EjemploGeneralRelacion {

    public static boolean validar(String cadena) {
        return cadena.matches("^(x|y)(\\+(x|y))?$");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("[2.2.1] Ingrese una expresión (Ej: x+y): ");
        String entrada = scanner.nextLine().trim();

        System.out.println(
                validar(entrada)
                        ? "OK: La cadena pertenece al lenguaje."
                        : "ERROR: La cadena NO pertenece al lenguaje."

        );

        scanner.close();
    }
}