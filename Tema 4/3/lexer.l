%{
#include <stdio.h>
%}

%option noyywrap

%%
"fn"       { printf("TOKEN: TK_FN, Lexema: %s\n", yytext); }
"let"      { printf("TOKEN: TK_LET, Lexema: %s\n", yytext); }
"mut"      { printf("TOKEN: TK_MUT, Lexema: %s\n", yytext); }
"if"       { printf("TOKEN: TK_IF, Lexema: %s\n", yytext); }
"else"     { printf("TOKEN: TK_ELSE, Lexema: %s\n", yytext); }
"while"    { printf("TOKEN: TK_WHILE, Lexema: %s\n", yytext); }
"return"   { printf("TOKEN: TK_RETURN, Lexema: %s\n", yytext); }

"i32"      { printf("TOKEN: TK_TIPO, Lexema: %s\n", yytext); }
"f64"      { printf("TOKEN: TK_TIPO, Lexema: %s\n", yytext); }
"bool"     { printf("TOKEN: TK_TIPO, Lexema: %s\n", yytext); }
"char"     { printf("TOKEN: TK_TIPO, Lexema: %s\n", yytext); }
"String"   { printf("TOKEN: TK_TIPO, Lexema: %s\n", yytext); }

"true"     { printf("TOKEN: TK_BOOLEANO, Lexema: %s\n", yytext); }
"false"    { printf("TOKEN: TK_BOOLEANO, Lexema: %s\n", yytext); }

[a-zA-Z_][a-zA-Z0-9_]*  { printf("TOKEN: TK_IDENTIFICADOR, Lexema: %s\n", yytext); }
[0-9]+                  { printf("TOKEN: TK_NUMERO, Lexema: %s\n", yytext); }

"+"|"-"|"*"|"/"             { printf("TOKEN: TK_OP_ARITMETICO, Lexema: %s\n", yytext); }
"=="|"!="|"<="|">="|"<"|">" { printf("TOKEN: TK_OP_RELACIONAL, Lexema: %s\n", yytext); }
"="                         { printf("TOKEN: TK_ASIGNACION, Lexema: %s\n", yytext); }

"("        { printf("TOKEN: TK_PAR_ABRE, Lexema: %s\n", yytext); }
")"        { printf("TOKEN: TK_PAR_CIERRA, Lexema: %s\n", yytext); }
"{"        { printf("TOKEN: TK_LLAVE_ABRE, Lexema: %s\n", yytext); }
"}"        { printf("TOKEN: TK_LLAVE_CIERRA, Lexema: %s\n", yytext); }
";"        { printf("TOKEN: TK_PUNTO_COMA, Lexema: %s\n", yytext); }
","        { printf("TOKEN: TK_COMA, Lexema: %s\n", yytext); }
":"        { printf("TOKEN: TK_DOS_PUNTOS, Lexema: %s\n", yytext); }

"//".* { /* Ignorar comentarios */ }
[ \t\n\r]+              { /* Ignorar espacios y saltos de linea */ }
.                       { printf("ERROR LEXICO: Caracter no reconocido: %s\n", yytext); }

%%


int main(int argc, char **argv) {
    if (argc > 1) {
        FILE *file = fopen(argv[1], "r");
        if (!file) {
            printf("Error al abrir el archivo\n");
            return 1;
        }
        yyin = file;
    }
    yylex();
    return 0;
}