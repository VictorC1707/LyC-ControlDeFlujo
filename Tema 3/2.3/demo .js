function inspect(obj) {
  return JSON.stringify(obj, null, 2);
}

// ── 1. GRAMÁTICA AMBIGUA ──────────────────────────────────────────
// G: E → E + E | E * E | (E) | id
// Cadena problema: 2 + 3 * 4  (id = 2, 3, 4)

console.log('══════════════════════════════════════════════════════');
console.log('  1. DEMOSTRACIÓN DE GRAMÁTICA AMBIGUA');
console.log('══════════════════════════════════════════════════════\n');

console.log('Gramática original:');
console.log('  E → E + E | E * E | (E) | id');
console.log('Cadena de entrada:  2 + 3 * 4\n');

function makeTree(shape) {
  if (typeof shape === 'number') return { val: shape };
  return { op: shape[1], left: makeTree(shape[0]), right: makeTree(shape[2]) };
}

// Árbol 1 — Asociación: 2 + (3 * 4)  → multiplicación dentro del subárbol derecho
const treeMulFirst = makeTree([2, '+', [3, '*', 4]]);

// Árbol 2 — Asociación: (2 + 3) * 4  → suma dentro del subárbol izquierdo
const treeAddFirst = makeTree([[2, '+', 3], '*', 4]);

function evalTree(node) {
  if (node.val !== undefined) return node.val;
  if (node.op === '+') return evalTree(node.left) + evalTree(node.right);
  if (node.op === '*') return evalTree(node.left) * evalTree(node.right);
}

console.log('► Árbol de derivación 1 — Asociación: 2 + (3 * 4)');
console.log('  (multiplicación dentro del subárbol derecho)');
console.log('  Parse tree:', inspect(treeMulFirst));
console.log('  Resultado:', evalTree(treeMulFirst), '\n');

console.log('► Árbol de derivación 2 — Asociación: (2 + 3) * 4');
console.log('  (suma dentro del subárbol izquierdo)');
console.log('  Parse tree:', inspect(treeAddFirst));
console.log('  Resultado:', evalTree(treeAddFirst), '\n');

console.log('=> ¡La misma cadena produce dos árboles y dos resultados distintos!');
console.log('=> La gramática es AMBIGUA.\n');

// ── 2. RECURSIVIDAD POR LA IZQUIERDA (DEMO CONTROLADA) ────────────
console.log('══════════════════════════════════════════════════════');
console.log('  2. RECURSIVIDAD POR LA IZQUIERDA');
console.log('══════════════════════════════════════════════════════\n');

console.log('Gramática original (recursiva izquierda):');
console.log('  E → E + T | T');
console.log('  T → T * F | F');
console.log('  F → (E) | id\n');

console.log('► Simulación del bucle infinito (con protección):');

function simulateLeftRecursion(maxDepth) {
  let depth = 0;
  function parseE() {
    depth++;
    if (depth > maxDepth) throw new Error(`¡BUCLE INFINITO! Profundidad máxima (${maxDepth}) alcanzada al expandir E → E + T`);
    // E → E + T (recursiva izquierda: se llama a sí misma antes de consumir input)
    let savedDepth = depth;
    try {
      parseE(); // ← esto nunca avanza, llama de nuevo
    } catch (e) {
      depth = savedDepth;
      throw e;
    }
    return true;
  }
  return parseE;
}

try {
  const badParser = simulateLeftRecursion(5);
  badParser();
} catch (e) {
  console.log('  Error:', e.message, '\n');
}

console.log('► Aplicando algoritmo de eliminación:');
console.log('  E → T E\'');
console.log('  E\' → + T E\' | ε');
console.log('  T → F T\'');
console.log('  T\' → * F T\' | ε');
console.log('  F → (E) | id\n');

function parseWithoutLeftRecursion(input) {
  let pos = 0;
  const t = () => input[pos];

  function parseE() {
    parseT();
    while (t() === '+') { pos++; parseT(); }
  }
  function parseT() {
    parseF();
    while (t() === '*') { pos++; parseF(); }
  }
  function parseF() {
    if (t() === '(') { pos++; parseE(); pos++; }
    else if (/\d+/.test(t())) { pos++; }
    else throw new Error(`Token inesperado: ${t()}`);
  }

  parseE();
  if (pos !== input.length) throw new Error(`Tokens sin consumir: ${input.slice(pos).join(' ')}`);
  return 'Análisis completado sin errores';
}

const testTokens = [2, '+', 3, '*', 4];
console.log(`  Parseando [${testTokens.join(', ')}]...`);
console.log('  Resultado:', parseWithoutLeftRecursion(testTokens), '\n');

// ── 3. FACTORIZACIÓN POR LA IZQUIERDA ─────────────────────────────
console.log('══════════════════════════════════════════════════════');
console.log('  3. FACTORIZACIÓN POR LA IZQUIERDA');
console.log('══════════════════════════════════════════════════════\n');

console.log('Gramática original:');
console.log('  S → if E then S else S | if E then S | other');
console.log('  Problema: prefijo común "if E then S" imposibilita decisión LL(1)\n');

console.log('► Cálculo de conjuntos FIRST (colisión):');
console.log('  FIRST(if E then S else S) = { if }');
console.log('  FIRST(if E then S)        = { if }');
console.log('  FIRST(other)              = { other }');
console.log('  → FIRST(if E then S else S) ∩ FIRST(if E then S) = { if } ≠ ∅');
console.log('  → El parser LL(1) NO PUEDE decidir qué producción usar\n');

console.log('► Aplicando factorización:');
console.log('  S  → if E then S S\' | other');
console.log('  S\' → else S | ε\n');

console.log('► Nuevos conjuntos FIRST (disjuntos):');
console.log('  FIRST(if E then S S\') = { if }');
console.log('  FIRST(other)           = { other }');
console.log('  FIRST(S\')              = { else }');
console.log('  → Todos disjuntos → parser LL(1) puede decidir\n');

function parseFactored(tokens) {
  let pos = 0;
  const t = () => tokens[pos];

  function parseS() {
    if (t() === 'if') {
      pos++; // consume 'if'
      parseE();
      if (t() !== 'then') throw new Error('Se esperaba then');
      pos++;
      parseS();
      parseSPrime();
    } else if (t() === 'other') {
      pos++;
    } else {
      throw new Error(`Token inesperado: ${t()}`);
    }
  }
  function parseSPrime() {
    if (t() === 'else') {
      pos++;
      parseS();
    }
    // ε: no hacer nada
  }
  function parseE() {
    if (t() === 'cond') { pos++; return; }
    throw new Error(`Token inesperado en E: ${t()}`);
  }

  parseS();
  if (pos !== tokens.length) throw new Error('Tokens sin consumir');
  return 'Análisis exitoso';
}

const ifTokens = ['if', 'cond', 'then', 'if', 'cond', 'then', 'other', 'else', 'other'];
console.log(`  Parseando [${ifTokens.join(', ')}]...`);
console.log('  Resultado:', parseFactored(ifTokens), '\n');

console.log('► Segundo ejemplo (expresiones aritméticas):');
console.log('  A → id + A | id * A | id');
console.log('  Prefijo común: id\n');

console.log('  Gramática factorizada:');
console.log('    A  → id A\'');
console.log('    A\' → +A | *A | ε\n');

function parseFactoredA(tokens) {
  let pos = 0;
  const t = () => tokens[pos];
  function parseA() {
    if (t() === 'id') { pos++; parseAPrime(); }
    else throw new Error('Se esperaba id');
  }
  function parseAPrime() {
    if (t() === '+') { pos++; parseA(); }
    else if (t() === '*') { pos++; parseA(); }
    // ε: fin
  }
  parseA();
  if (pos !== tokens.length) throw new Error('Tokens sin consumir');
  return 'Análisis exitoso';
}

const aTokens = ['id', '+', 'id', '*', 'id'];
console.log(`  Parseando [${aTokens.join(', ')}]...`);
console.log('  Resultado:', parseFactoredA(aTokens), '\n');

console.log('══════════════════════════════════════════════════════');
console.log('  RESUMEN');
console.log('══════════════════════════════════════════════════════\n');
console.log('  ✓ Ambigüedad:       Una cadena → múltiples árboles de derivación');
console.log('  ✓ Rec. izquierda:   Eliminada con transformación E → T E\'');
console.log('  ✓ Factorización:    Prefijos comunes extraídos a nuevo no terminal');
console.log('');
console.log('  Gramática final (no ambigua, sin recursión izquierda, factorizada):');
console.log('    E   → T E\'');
console.log('    E\'  → + T E\' | ε');
console.log('    T   → F T\'');
console.log('    T\'  → * F T\' | ε');
console.log('    F   → (E) | id\n');
