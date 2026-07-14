# Definición de nombres de tokens y expresiones regulares correspondientes

# Diccionario ordenado por prioridad de coincidencia
# Se utiliza una tupla de pares (Nombre de Token, Expresión Regular)
# para asegurar que se respete el orden al compilar la regex principal.
TOKEN_RULES = [
    # 1. Comentarios
    ("TK_COMENTARIO", r"#[^\n]*"),
    
    # 2. Instrucciones Docker (palabras reservadas específicas)
    # \b asegura que coincida como palabra completa
    ("TK_INSTRUCCION", r"\b(?:FROM|RUN|CMD|COPY|ADD|WORKDIR|ENV|ARG|EXPOSE|VOLUME|USER|LABEL|ENTRYPOINT|HEALTHCHECK|MAINTAINER|SHELL|STOPSIGNAL|ONBUILD)\b"),
    
    # 3. Alias 'AS' en multi-stage (case insensitive)
    ("TK_AS", r"\b(?:AS|as)\b"),
    
    # 4. Flags de instrucciones (ej. --from, --chown)
    ("TK_FLAG", r"--[a-zA-Z][-a-zA-Z0-9]*"),
    
    # 5. Variables con expansión Docker: ${VAR} o ${VAR:-default}
    ("TK_VARIABLE", r"\$\{[a-zA-Z_][a-zA-Z0-9_]*(?::?[-+][^}]*)?\}"),
    
    # 6. Variables simples: $VAR
    ("TK_VARIABLE_SIMPLE", r"\$[a-zA-Z_][a-zA-Z0-9_]*"),
    
    # 7. Cadenas de caracteres (Strings) con comillas dobles y escape
    ("TK_STRING_DOBLE", r'"(?:[^"\\]|\\.)*"'),
    
    # 8. Cadenas de caracteres (Strings) con comillas simples
    ("TK_STRING_SIMPLE", r"'[^']*'"),
    
    # 9. Números (puertos, IDs, etc.)
    ("TK_NUMERO", r"[0-9]+"),
    
    # 10. Operadores y delimitadores
    ("TK_ASIGNACION", r"="),
    ("TK_CORCHETE_ABRE", r"\["),
    ("TK_CORCHETE_CIERRA", r"\]"),
    ("TK_COMA", r","),
    ("TK_DOS_PUNTOS", r":"),
    ("TK_ARROBA", r"@"),
    ("TK_BARRA", r"/"),
    ("TK_PUNTO", r"\."),
    ("TK_GUION", r"-"),
    ("TK_PIPE", r"\|"),
    ("TK_AMPER", r"&"),
    ("TK_INTERROGACION", r"\?"),
    
    # 11. Continuación de línea
    ("TK_CONTINUACION", r"\\(?=\n)"),
    
    # 12. Rutas Unix (comienzan por / o ./ o ../)
    ("TK_RUTA", r"\.?\.?/[a-zA-Z0-9_./-]+"),
    
    # 13. Identificadores genéricos (nombres de imagen, tags, valores, etc. que pueden incluir números y guiones)
    ("TK_IDENTIFICADOR", r"[a-zA-Z_][a-zA-Z0-9_.-]*"),
    
    # 14. Saltos de línea (usados para contar líneas internamente)
    ("TK_NUEVA_LINEA", r"\n"),
    
    # 15. Espacios en blanco (ignorados, pero necesarios para delimitar)
    ("TK_ESPACIO", r"[ \t\r]+"),
]
