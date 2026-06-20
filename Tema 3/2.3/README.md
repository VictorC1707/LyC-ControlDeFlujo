# Higiene y Optimizacion de Gramaticas - Compiladores

Script en Node.js que demuestra tres problemas clasicos de las gramaticas libres de contexto: ambiguedad, recursividad por la izquierda y factorizacion por la izquierda.

## Problema que resuelve

El archivo `demo.js` contiene implementaciones practicas que muestran:

- **Ambiguedad**: como una misma expresion aritmetica (2+3*4) puede generar dos arboles de derivacion distintos, produciendo resultados diferentes (14 y 20) segun como se asocien los operadores.
- **Recursividad por la izquierda**: simulacion del bucle infinito que ocurre en parsers descendentes recursivos cuando una produccion se llama a si misma por la izquierda, y su eliminacion mediante transformacion de gramatica.
- **Factorizacion por la izquierda**: como los prefijos comunes en producciones de un mismo no terminal impiden la decision en parsers LL(1), y como extraer ese prefijo a un nuevo no terminal para resolverlo.

## Requisitos

- Node.js 12 o superior.

## Instalacion

Para ejecutar el programa solo se necesita tener Node.js instalado en el sistema. No requiere dependencias externas ni ejecutar npm install.

## Ejecucion

```
node demo.js
```

## Licencia

Material academico de uso libre para fines educativos.
