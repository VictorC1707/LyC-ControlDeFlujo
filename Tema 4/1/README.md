# Autómata de Pila (Pushdown Automaton)

Este proyecto contiene un programa en C++ que implementa la simulación de un **Autómata de Pila**. El programa es capaz de reconocer un lenguaje específico (por ejemplo, lenguajes del tipo $x^n y^n$) utilizando una estructura de datos tipo LIFO (pila) para llevar el control de la memoria temporal.

## 📖 Marco Teórico y Utilidad

### Utilidades del Autómata de Pila
Los autómatas de pila son fundamentales en el diseño de compiladores y lenguajes de programación. Su principal utilidad radica en:
- **Análisis Sintáctico:** Son la base teórica de los analizadores sintácticos (parsers) utilizados para evaluar la gramática de lenguajes libres de contexto.
- **Validación de estructuras anidadas:** Permiten verificar el correcto emparejamiento de símbolos como paréntesis, llaves y etiquetas HTML/XML, algo que una máquina sin memoria no puede hacer.
- **Evaluación de expresiones matemáticas:** Manejan correctamente la precedencia de operadores aritméticos mediante algoritmos basados en pilas.

### Importancia y Poder (Comparación con AFD y AFND)
La diferencia fundamental entre un Autómata de Pila y los Autómatas Finitos (AFD y AFND) es la **memoria**.
- Los **AFD y AFND** (Autómatas Finitos Deterministas y No Deterministas) carecen de memoria auxiliar, por lo que solo pueden reconocer *lenguajes regulares*. No pueden "contar" o recordar cuántas veces ha ocurrido un evento arbitrario.
- El **Autómata de Pila**, al incorporar una memoria auxiliar de tamaño infinito en forma de pila, tiene un poder computacional estrictamente mayor. Es capaz de reconocer *lenguajes libres de contexto*, resolviendo problemas como asegurar que la cantidad de letras 'x' sea exactamente igual a la cantidad de letras 'y' ingresadas, algo totalmente imposible para un AFD o AFND.

---

## 🚀 Instrucciones de Ejecución

### Requisitos
- Un compilador de C++ (por ejemplo, `g++` de MinGW en Windows).

### Compilación
Abre tu terminal (Símbolo del sistema o PowerShell), ubícate en esta carpeta y compila el código fuente con el siguiente comando:
```bash
g++ "automata de pila.cpp" -o automata_pila
```

### Ejecución
```bash
# En Windows:
.\automata_pila.exe
```

## 📝 Uso del Programa
1. Al ejecutarlo, se te solicitará que ingreses una cadena de caracteres (por ejemplo, `xxyy`).
2. Luego, se pedirá ingresar el estado inicial de la pila. Puedes escribir `v` para que la pila inicie vacía.
3. El programa procesará la cadena, introducirá símbolos en la pila cuando lea 'x' y los sacará cuando lea 'y'. 
4. Finalmente, retornará `VERDADERO` si la cadena pertenece al lenguaje, o `FALSO` en caso contrario o si se detecta un error de sintaxis en la entrada.
