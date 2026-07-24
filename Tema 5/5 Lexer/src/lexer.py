"""
lexer.py — Analizador Léxico Híbrido para UnegScript.

Integra:
1. Lexer tradicional basado en expresiones regulares (re).
2. Capa de corrección automática por similitud de Levenshtein (ratio >= 0.8).
3. Capa de Fallback IA / LLM cuando el ratio < 0.8 para tokens ambiguos.
4. Generación de sugerencias y salida en formato compatible con Parser Recursivo Descendente.
"""

from __future__ import annotations
import re
from tokens import Token, TokenType, TOKEN_RULES, KEYWORDS
from similarity import find_best_candidate, CANDIDATE_DICTIONARY
from llm_fallback import simulate_llm_fallback


class UnegHybridLexer:
    """
    Motor Lexer Híbrido para UnegScript.
    """

    def __init__(self, source_code: str, confidence_threshold: float = 0.8):
        self.source_code = source_code
        self.threshold = confidence_threshold
        self.tokens: list[Token] = []
        self.ai_suggestions: list[str] = []
        self.lines = source_code.splitlines()

    def tokenize(self) -> list[Token]:
        """
        Escanea el código fuente y genera la lista final de tokens procesados por el pipeline híbrido.
        """
        self.tokens = []
        self.ai_suggestions = []

        line_num = 1
        col_num = 1
        pos = 0
        n = len(self.source_code)

        while pos < n:
            match_found = False

            for group_name, pattern in TOKEN_RULES:
                regex = re.compile(pattern)
                match = regex.match(self.source_code, pos)

                if match:
                    val = match.group(0)
                    match_found = True

                    if group_name == "NEWLINE":
                        line_num += 1
                        col_num = 1
                        pos = match.end()
                        break

                    if group_name == "WHITESPACE":
                        col_num += len(val)
                        pos = match.end()
                        break

                    if group_name == "COMMENT":
                        col_num += len(val)
                        pos = match.end()
                        break

                    if group_name == "IDENTIFIER":
                        token_obj = self._process_identifier(val, line_num, col_num)
                        self.tokens.append(token_obj)
                    else:
                        t_type = TokenType[group_name]
                        self.tokens.append(Token(
                            type=t_type,
                            value=val,
                            line=line_num,
                            col=col_num
                        ))

                    col_num += len(val)
                    pos = match.end()
                    break

            if not match_found:
                unrecognized_char = self.source_code[pos]
                token_obj = self._process_unknown(unrecognized_char, line_num, col_num)
                self.tokens.append(token_obj)
                pos += 1
                col_num += 1

        return self.tokens

    def _process_identifier(self, val: str, line_num: int, col_num: int) -> Token:
        """
        Procesa identificadores aplicando reglas de coincidencia exacta, similitud y fallback IA.
        """
        if val in KEYWORDS:
            return Token(type=TokenType.KEYWORD, value=val, line=line_num, col=col_num)

        best_cand, ratio = find_best_candidate(val, CANDIDATE_DICTIONARY)

        if best_cand and ratio < 1.0:
            if ratio >= self.threshold:
                # Registrar la corrección automática en la lista de sugerencias
                # para que sea visible en la salida del programa (requerimiento)
                suggestion_msg = f"Sugerencia: '{val}' -> '{best_cand}' (auto-corregido, conf={ratio:.2f})"
                self.ai_suggestions.append(suggestion_msg)
                return Token(
                    type=TokenType.CORRECTED,
                    value=best_cand,
                    line=line_num,
                    col=col_num,
                    corrected_from=val,
                    confidence=ratio
                )
            elif ratio >= 0.4:
                context_line = self.lines[line_num - 1] if line_num <= len(self.lines) else ""
                llm_suggestion = simulate_llm_fallback(val, context_line, line_num)

                suggestion_msg = f"Sugerencia: '{val}' -> '{llm_suggestion}'"
                self.ai_suggestions.append(suggestion_msg)

                return Token(
                    type=TokenType.AI_SUGGESTION,
                    value=val,
                    line=line_num,
                    col=col_num,
                    suggestion=llm_suggestion,
                    confidence=ratio
                )

        return Token(type=TokenType.IDENTIFIER, value=val, line=line_num, col=col_num)

    def _process_unknown(self, char_val: str, line_num: int, col_num: int) -> Token:
        context_line = self.lines[line_num - 1] if line_num <= len(self.lines) else ""
        llm_suggestion = simulate_llm_fallback(char_val, context_line, line_num)

        suggestion_msg = f"Sugerencia: Caracter ambiguo '{char_val}' -> '{llm_suggestion}'"
        self.ai_suggestions.append(suggestion_msg)

        return Token(
            type=TokenType.UNKNOWN,
            value=char_val,
            line=line_num,
            col=col_num,
            suggestion=llm_suggestion,
            confidence=0.0
        )

    def get_parser_stream(self) -> list[tuple[str, str]]:
        """
        Produce la secuencia de tokens consumible por el Parser Recursivo Descendente.
        """
        stream = []
        for t in self.tokens:
            if t.type == TokenType.CORRECTED:
                target_type = "KEYWORD" if t.value in KEYWORDS else "IDENTIFIER"
                stream.append((target_type, t.value))
            elif t.type == TokenType.AI_SUGGESTION:
                val_to_use = t.suggestion if t.suggestion else t.value
                target_type = "KEYWORD" if val_to_use in KEYWORDS else "IDENTIFIER"
                stream.append((target_type, val_to_use))
            else:
                stream.append(t.to_parser_tuple())
        return stream
