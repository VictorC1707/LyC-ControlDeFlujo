# Analizador Léxico para L-Rust

Este repositorio contiene la implementación de un analizador léxico (lexer) construido con el metacompilador Flex. El analizador tokeniza un subconjunto del lenguaje de programación Rust (denominado L-Rust).

## Requisitos Previos

Para compilar y ejecutar este proyecto en un entorno Linux, asegúrese de tener instalados los siguientes paquetes:
*   `flex` (Generador de analizadores léxicos)
*   `gcc` (Colección de compiladores de GNU)

## Archivos del Proyecto

*   `lexer.l`: Archivo de reglas léxicas y expresiones regulares escrito en Flex.
*   `programa.rs`: Archivo de código fuente de prueba escrito en el subconjunto L-Rust.

## Instrucciones de Instalación y Compilación

Ejecute los siguientes comandos en su terminal para generar y compilar el analizador léxico:

1. Generar el código C del analizador léxico utilizando Flex:
   ```bash
   flex lexer.l
   ```
   *Esto generará un archivo llamado `lex.yy.c`.*

2. Compilar el código C generado utilizando GCC para crear el ejecutable:
   ```bash
   gcc lex.yy.c -o analizador_lexico
   ```
   *Esto creará el archivo ejecutable `analizador_lexico`.*

## Ejecución del Analizador

Para evaluar el programa de prueba suministrado, pase el archivo fuente como argumento al ejecutable generado:

```bash
./analizador_lexico programa.rs
```

## Salida Esperada

Al procesar el archivo `programa.rs`, la consola mostrará el reconocimiento de tokens línea por línea de la siguiente manera:

```bash
TOKEN: TK_FN, Lexema: fn
TOKEN: TK_IDENTIFICADOR, Lexema: calcular_total
TOKEN: TK_PAR_ABRE, Lexema: (
TOKEN: TK_PAR_CIERRA, Lexema: )
TOKEN: TK_LLAVE_ABRE, Lexema: {
TOKEN: TK_LET, Lexema: let
TOKEN: TK_MUT, Lexema: mut
TOKEN: TK_IDENTIFICADOR, Lexema: contador
TOKEN: TK_ASIGNACION, Lexema: =
TOKEN: TK_NUMERO, Lexema: 0
...
```