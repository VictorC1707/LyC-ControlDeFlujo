import java.util.Scanner;

public class ChomskyTipo0Irrestricta {

    public static boolean validarTransformacion(String cadena) {

        if (!cadena.contains("A") || !cadena.contains("B"))
            return false;

        String resultado = cadena.replace("A", "w")
                .replace("wB", "z");

        return resultado.contains("z");
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("[Tipo 0] Ingrese cadena: ");
        String entrada = scanner.nextLine().trim();

        System.out.println(
                validarTransformacion(entrada)
                        ? "OK: Transformación aceptada."
                        : "ERROR: Transformación rechazada.");

        scanner.close();
    }
}