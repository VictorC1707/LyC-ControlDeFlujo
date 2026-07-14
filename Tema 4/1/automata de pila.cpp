#include <iostream>
#include <cstring>

using namespace std;

class ARREGLO {
private:
    char pila[100];
    int i, tope;

public:
    // Constructor
    ARREGLO(char m[]) { 
        tope = 100; 
        strcpy(pila, m); 
        i = strlen(pila); 
    }

    bool OCUPADO() {
        return (i >= tope);
    }

    bool VACIO() {
        return (i <= 0);
    }

    void METER(char a) {
        if (!OCUPADO()) {
            char t[2] = {a, '\0'};
            strcat(pila, t);
            i = strlen(pila);
        }
    }

    char SACAR() {
        if (!VACIO()) {
            char a = pila[i - 1];
            pila[i - 1] = '\0';
            i = strlen(pila);
            return a;
        }
        return '\0';
    }

    bool reconocedor(char x[]) {
        int e = 0;
        int j = 0;
        char temp;
        
        while (j < strlen(x)) {
            switch (e) {
                case 0:
                    if (x[j] == 'x') {
                        METER('x');
                    } else if (x[j] == 'y') {
                        if (!VACIO()) {
                            temp = SACAR();
                            if (temp != 'x') e = 3;
                        } else {
                            e = 3;
                        }
                    } else {
                        e = 3;
                    }
                    break;
            }
            if (e == 3) break; // Salir si hay error
            j++;
        }
        // Acepta si el estado es 0 y la pila quedó vacía
        return (e == 0 && VACIO());
    }
};

int main() {
    char cadena[100];
    char pila_inicial[100];

    cout << "\n INGRESE CADENA A RECONOCER (ej: xxyy): "; cin >> cadena;
    cout << "\n INGRESE PILA (o 'v' para vacia): "; cin >> pila_inicial;
    
    if (!strcmp(pila_inicial, "v")) strcpy(pila_inicial, "");
    
    ARREGLO tira(pila_inicial);
    
    if (tira.reconocedor(cadena))
        cout << "\n RESULTADO: VERDADERO" << endl;
    else 
        cout << "\n RESULTADO: FALSO" << endl;

    // Sustituto estándar de getch()
    cout << "\n Presione Enter para salir...";
    cin.ignore();
    cin.get();
    
    return 0;
}
