package src_fundamentos_jerarquia;

import java.util.Scanner;

public class ChomskyTipo1SensibleContexto {

    public static boolean validar(String cadena) {

        int a = 0, b = 0, c = 0, i = 0;

        while (i < cadena.length() && cadena.charAt(i) == 'a') {
            a++;
            i++;
        }

        while (i < cadena.length() && cadena.charAt(i) == 'b') {
            b++;
            i++;
        }

        while (i < cadena.length() && cadena.charAt(i) == 'c') {
            c++;
            i++;
        }

        return i == cadena.length()
                && a > 0
                && a == b
                && b == c;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("[Tipo 1] Ingrese cadena: ");
        String entrada = scanner.nextLine().trim();

        System.out.println(
                validar(entrada)
                        ? "[OK] -> Pertenece al lenguaje."
                        : "[ERROR] -> No pertenece al lenguaje.");

        scanner.close();
    }
}