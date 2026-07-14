# Analizador Léxico Básico (Conceptos de Flex)

Este programa en C++ ilustra los principios fundamentales del análisis léxico, emulando manualmente el comportamiento de herramientas de metacompilación como **FLEX**. Su función principal es leer un flujo de caracteres e identificar (tokenizar) elementos específicos mediante reglas equivalentes a las expresiones regulares `[A-Z]` y `.`.

## 🛡️ Aplicación de Flex y Análisis Léxico en Seguridad Informática

### Indagación y Reflexión
El análisis léxico y las herramientas como FLEX (Fast Lexical Analyzer Generator) tienen aplicaciones directas y cruciales en el área de la **seguridad informática**. 
Un analizador léxico es capaz de escanear y tokenizar grandes volúmenes de texto a alta velocidad. En ciberseguridad, esto se aplica ampliamente para:
- **Sistemas de Detección de Intrusos (IDS / IPS):** Herramientas como *Snort* o *Suricata* utilizan reglas léxicas y firmas basadas en patrones (expresiones regulares) para tokenizar paquetes de red y detectar payloads maliciosos, inyecciones SQL o firmas de malware.
- **Análisis de Logs (SIEM):** Los analizadores léxicos procesan millones de líneas de registros (logs) de servidores para extraer tokens (direcciones IP, nombres de usuario, códigos de error) e identificar comportamientos anómalos o intentos de fuerza bruta en tiempo real.
- **Firewalls de Aplicaciones Web (WAF):** Tokenizan las peticiones HTTP entrantes para detectar y bloquear cadenas maliciosas (como `<script>` para ataques XSS o `' OR 1=1` para SQLi) antes de que lleguen a la aplicación vulnerable.

### Lenguajes e Implementación
Muchos motores de seguridad y analizadores de tráfico son desarrollados en lenguajes de alto rendimiento como **C**, **C++** o **Rust**, donde herramientas como FLEX (o sus equivalentes) se encargan de generar el escáner léxico. 
La **tokenización** convierte el texto sin procesar en piezas de información (tokens) clasificadas como `IP_ADDRESS`, `HTTP_METHOD`, o `MALICIOUS_STRING`, permitiendo que el motor de seguridad evalúe reglas y decida rápidamente si bloquea o permite la conexión.

---

## 🚀 Instrucciones de Ejecución

### Requisitos
- Un compilador de C++ (por ejemplo, `g++` de MinGW en Windows).

### Compilación
Abre tu terminal, ubícate en esta carpeta y compila el código fuente ejecutando:
```bash
g++ flex.cpp -o lexer_basico
```

### Ejecución
```bash
# En Windows:
.\lexer_basico.exe
```

## 📝 Uso del Programa
Al iniciar el programa, se te pedirá que introduzcas un texto libre. El sistema evaluará la entrada carácter por carácter (excluyendo espacios). Emitirá un mensaje en pantalla por cada carácter que no cumpla con la regla léxica principal (ser letra mayúscula). Al finalizar (presionando `Enter`), el programa imprimirá el contador exacto de letras mayúsculas válidas que logró reconocer y tokenizar.
