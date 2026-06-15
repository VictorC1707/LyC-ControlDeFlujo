package src_fundamentos_jerarquia;

import java.util.Scanner;

public class EjemploGeneralRelacion {

    public static boolean validar(String cadena) {
        return cadena.matches("^(x|y)(\\+(x|y))?$");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("[2.2.1] Ingrese una expresion (Ej: x+y): ");
        String entrada = scanner.nextLine().trim();

        System.out.println(
                validar(entrada)
                        ? "[SI] -> La cadena pertenece al lenguaje."
                        : "[NO] -> La cadena NO pertenece al lenguaje.");
        scanner.close();
    }
}