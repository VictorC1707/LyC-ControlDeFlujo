package src_fundamentos_jerarquia;

import java.util.Scanner;

public class ChomskyTipo3Regular {

    public static boolean validar(String cadena) {
        return cadena.matches("^id1?$");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("[Tipo 3] Ingrese un identificador: ");
        String entrada = scanner.nextLine().trim();

        System.out.println(
                validar(entrada)
                        ? "[OK] -> Cadena valida."
                        : "[ERROR] -> Cadena invalida."

        );

        scanner.close();
    }
}