📚 Fundamentos y Jerarquía de Chomsky – Implementación en Java

Este conjunto de programas en Java forma parte del estudio de los fundamentos de los lenguajes formales y la Jerarquía de Chomsky. Su propósito es demostrar de manera práctica cómo diferentes tipos de gramáticas permiten generar y reconocer lenguajes con distintos niveles de complejidad, relacionando los conceptos teóricos con implementaciones funcionales.

🎯 Propósito de los Ejercicios

Los programas fueron desarrollados para complementar el estudio de la relación entre gramáticas y lenguajes formales, así como la clasificación propuesta por Noam Chomsky. Cada implementación representa un caso práctico de reconocimiento de cadenas válidas dentro de un lenguaje específico.

Los ejercicios incluidos son:

EjemploGeneralRelacion.java: Demuestra la relación entre una gramática y el lenguaje que genera mediante la validación de expresiones simples compuestas por las variables x e y.

ChomskyTipo3Regular.java: Implementa el reconocimiento de identificadores simples mediante expresiones regulares, representando una gramática regular.

ChomskyTipo2LibreContexto.java: Valida expresiones con paréntesis balanceados mediante un analizador recursivo, representando una gramática libre de contexto.

ChomskyTipo1SensibleContexto.java: Verifica cadenas del lenguaje L = { aⁿbⁿcⁿ | n ≥ 1 }, mostrando dependencias entre diferentes símbolos de la cadena.

ChomskyTipo0Irrestricta.java: Simula transformaciones arbitrarias mediante reglas de reescritura, ilustrando el comportamiento general de una gramática irrestricta.

⚙️ Conceptos Implementados
Relación Gramática–Lenguaje

Se demuestra cómo una gramática define las reglas de construcción de un lenguaje y cómo dichas reglas permiten determinar si una cadena pertenece o no al lenguaje generado.

Gramáticas Tipo 3 (Regulares)

Utilizan reglas simples y son ampliamente empleadas en analizadores léxicos para el reconocimiento de tokens, palabras reservadas e identificadores.

Gramáticas Tipo 2 (Libres de Contexto)

Permiten describir estructuras jerárquicas y anidadas, siendo fundamentales en el análisis sintáctico de compiladores.

Gramáticas Tipo 1 (Sensibles al Contexto)

Permiten expresar dependencias entre distintas partes de una cadena, donde la validez de un símbolo depende de su entorno.

Gramáticas Tipo 0 (Irrestrictas)

Representan el nivel más poderoso de la Jerarquía de Chomsky y poseen una capacidad expresiva equivalente a las Máquinas de Turing.

🛠️ Requisitos y Ejecución
Requisitos
Java Development Kit (JDK) 8 o superior.
Visual Studio Code o cualquier entorno compatible con Java.
Compilación

Ubicarse en la carpeta que contiene los archivos .java y ejecutar:

javac *.java
Ejecución

Ejecutar el programa deseado:

java EjemploGeneralRelacion
java ChomskyTipo3Regular
java ChomskyTipo2LibreContexto
java ChomskyTipo1SensibleContexto
java ChomskyTipo0Irrestricta

📊 Resultados Esperados

Cada programa solicita una cadena de entrada y determina si cumple las reglas definidas por el lenguaje correspondiente.

Ejemplos:

[2.2.1] Ingrese una expresión (Ej: x+y):
x+y

✅ La cadena pertenece al lenguaje.
[Tipo 3] Ingrese un identificador:
id1

✅ Cadena válida.
[Tipo 1] Ingrese cadena:
aaabbbccc

✅ Pertenece al lenguaje.