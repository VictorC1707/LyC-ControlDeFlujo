#include <stdio.h> // Necesario para printf y getchar

int main() {
    int count = 0; // Variable para contar las mayúsculas
    char c;        // Variable para guardar cada letra que leemos

    printf("Introduce un texto (presiona Enter para finalizar):\n");

    // Bucle que lee caracter por caracter hasta encontrar un Enter (\n) o el fin de archivo (EOF)
    while ((c = getchar()) != '\n' && c != EOF) {
        
        // Verificamos si es una letra mayúscula (el equivalente a [A-Z] en Flex)
        if (c >= 'A' && c <= 'Z') {
            count++;
        } 
        // Si no es un espacio (opcional, para que no se queje de los espacios) y no es mayúscula
        // (el equivalente a la regla "." en Flex)
        else if (c != ' ') {
            printf("%c not a capital letter\n", c);
        }
    }

    // Imprimimos el resultado final
    printf("\nNumber of Capital letters in the given input - %d\n", count);

    return 0;
}
