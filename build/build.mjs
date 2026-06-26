#!/usr/bin/env node
// Ghostly RVN — token build.
// Reads tokens/palette.json (single source of truth), resolves semantic/ansi/
// syntax references against the raw `ref` palette, and emits:
//   dist/tokens.css   — CSS custom properties for the site + previews
//   dist/tokens.resolved.json — fully resolved tokens for other generators
//   preview/index.html — a live preview page rendered from the tokens
//
// Run:  node build/build.mjs

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const palette = JSON.parse(
  readFileSync(resolve(root, "tokens/palette.json"), "utf8")
);

// Resolve a "group.stop" reference (e.g. "cyan.500") to a hex value.
function deref(refStr) {
  const [group, stop] = refStr.split(".");
  const val = palette.ref?.[group]?.[stop];
  if (!val) throw new Error(`Unresolved token reference: ${refStr}`);
  return val;
}

// Build a resolved map for a token namespace (semantic/syntax/ansi).
function resolveMap(map) {
  const out = {};
  for (const [k, v] of Object.entries(map)) out[k] = deref(v);
  return out;
}

const resolved = {
  meta: palette.meta,
  semantic: resolveMap(palette.semantic),
  syntax: resolveMap(palette.syntax),
  ansi: resolveMap(palette.ansi),
  typography: palette.typography,
  radius: palette.radius,
  ref: palette.ref,
};

// --- emit dist/tokens.css ---------------------------------------------------
const cssVar = (name) => "--gh-" + name.replace(/[._]/g, "-");
const lines = [`:root {`, `  /* Ghostly RVN — generated from tokens/palette.json. Do not edit by hand. */`];

lines.push(`\n  /* reference ramps */`);
for (const [group, stops] of Object.entries(palette.ref))
  for (const [stop, hex] of Object.entries(stops))
    lines.push(`  ${cssVar(group + "-" + stop)}: ${hex};`);

const section = (title, map) => {
  lines.push(`\n  /* ${title} */`);
  for (const [k, hex] of Object.entries(map)) lines.push(`  ${cssVar(k)}: ${hex};`);
};
section("semantic", resolved.semantic);
section("syntax", resolved.syntax);
section("ansi", resolved.ansi);

lines.push(`\n  /* typography */`);
for (const [k, v] of Object.entries(palette.typography)) lines.push(`  ${cssVar(k)}: ${v};`);
lines.push(`\n  /* radius */`);
for (const [k, v] of Object.entries(palette.radius)) lines.push(`  ${cssVar("radius-" + k)}: ${v};`);
lines.push(`}`);

mkdirSync(resolve(root, "dist"), { recursive: true });
writeFileSync(resolve(root, "dist/tokens.css"), lines.join("\n") + "\n");
writeFileSync(resolve(root, "dist/tokens.resolved.json"), JSON.stringify(resolved, null, 2) + "\n");

// --- emit dist/fonts.css (self-hosted Monaspace @font-face) -----------------
// Fonts are vendored under assets/fonts/ — url() is resolved relative to this
// stylesheet's location (dist/), so ../assets/fonts/ lands in the repo root.
const fontFaces = (palette.fonts ?? [])
  .flatMap((f) =>
    [400, 700].map(
      (w) => `@font-face {
  font-family: "${f.family}";
  font-style: normal;
  font-weight: ${w};
  font-display: swap;
  src: url("../assets/fonts/monaspace-${f.slug}-${w}.woff2") format("woff2");
}`
    )
  )
  .join("\n");
writeFileSync(
  resolve(root, "dist/fonts.css"),
  `/* Ghostly RVN — Monaspace @font-face. Generated from tokens/palette.json. Do not edit by hand. */\n${fontFaces}\n`
);

// --- emit preview/index.html ------------------------------------------------
const swatch = (label, hex) => `
  <div class="swatch">
    <div class="chip" style="background:${hex}"></div>
    <div class="meta"><span class="name">${label}</span><span class="hex">${hex}</span></div>
  </div>`;

const ramp = (group, stops) => `
  <div class="ramp">
    <h4>${group}</h4>
    <div class="ramp-row">
      ${Object.entries(stops).map(([s, hex]) => `<div class="ramp-chip" style="background:${hex}" title="${group}.${s} ${hex}"><span>${s}</span></div>`).join("")}
    </div>
  </div>`;

const ansiCell = (name, hex) => `<div class="ansi-cell"><span class="dot" style="background:${hex}"></span>${name}<em>${hex}</em></div>`;

const S = resolved.semantic, SY = resolved.syntax, A = resolved.ansi;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${palette.meta.name} — ${palette.meta.theme}</title>
<link rel="stylesheet" href="../dist/fonts.css" />
<link rel="stylesheet" href="../dist/tokens.css" />
<style>
  * { box-sizing: border-box; }
  body {
    margin: 0; background: var(--gh-bg-void); color: var(--gh-fg-default);
    font-family: var(--gh-font-sans); line-height: 1.5;
    background-image:
      radial-gradient(1200px 600px at 80% -10%, rgba(160,124,255,.10), transparent 60%),
      radial-gradient(900px 500px at -10% 110%, rgba(56,225,200,.08), transparent 60%),
      repeating-linear-gradient(0deg, rgba(255,255,255,.012) 0 1px, transparent 1px 3px);
  }
  .wrap { max-width: 1080px; margin: 0 auto; padding: 48px 28px 96px; }
  header { border-bottom: 1px solid var(--gh-border-default); padding-bottom: 28px; margin-bottom: 40px; }
  .eyebrow { font-family: var(--gh-font-mono); font-size: 12px; letter-spacing: .35em; text-transform: uppercase; color: var(--gh-accent-primary); }
  h1 { font-family: var(--gh-font-display); font-weight: 400; font-size: 52px; margin: 14px 0 6px; color: var(--gh-fg-bright);
       text-shadow: 0 0 28px rgba(56,225,200,.25); letter-spacing: .04em; }
  h1 b { color: var(--gh-accent-secondary); font-weight: 400; }
  .lede { color: var(--gh-fg-muted); max-width: 64ch; }
  .influences { margin-top: 16px; display: flex; flex-wrap: wrap; gap: 8px; }
  .tag { font-family: var(--gh-font-mono); font-size: 11px; padding: 4px 10px; border: 1px solid var(--gh-border-default);
         border-radius: 999px; color: var(--gh-fg-muted); background: var(--gh-bg-surface); }
  h2 { font-family: var(--gh-font-display); font-weight: 400; font-size: 13px; letter-spacing: .3em; text-transform: uppercase;
       color: var(--gh-fg-muted); margin: 56px 0 18px; display: flex; align-items: center; gap: 12px; }
  h2::before { content: ""; width: 8px; height: 8px; background: var(--gh-accent-primary); box-shadow: 0 0 12px var(--gh-accent-primary); }
  h2::after { content: ""; flex: 1; height: 1px; background: var(--gh-border-default); }

  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px,1fr)); gap: 12px; }
  .swatch { background: var(--gh-bg-surface); border: 1px solid var(--gh-border-muted); border-radius: var(--gh-radius-lg); overflow: hidden; }
  .chip { height: 72px; }
  .swatch .meta { padding: 10px 12px; display: flex; flex-direction: column; gap: 2px; }
  .swatch .name { font-family: var(--gh-font-mono); font-size: 12px; color: var(--gh-fg-default); }
  .swatch .hex { font-family: var(--gh-font-mono); font-size: 11px; color: var(--gh-fg-faint); }

  .ramps { display: grid; gap: 16px; }
  .ramp h4 { font-family: var(--gh-font-mono); font-size: 12px; color: var(--gh-fg-muted); margin: 0 0 8px; text-transform: uppercase; letter-spacing: .15em; }
  .ramp-row { display: flex; gap: 6px; }
  .ramp-chip { flex: 1; height: 56px; border-radius: var(--gh-radius-md); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 6px; }
  .ramp-chip span { font-family: var(--gh-font-mono); font-size: 10px; color: rgba(0,0,0,.55); font-weight: 700; }

  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  @media (max-width: 820px){ .cols { grid-template-columns: 1fr; } }

  .panel { background: var(--gh-bg-base); border: 1px solid var(--gh-border-default); border-radius: var(--gh-radius-lg); overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,.45); }
  .panel .bar { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: var(--gh-bg-surface); border-bottom: 1px solid var(--gh-border-default); }
  .panel .bar .dot { width: 11px; height: 11px; border-radius: 50%; }
  .panel .bar .title { font-family: var(--gh-font-mono); font-size: 11px; color: var(--gh-fg-faint); margin-left: 8px; }

  pre.code { margin: 0; padding: 18px; font-family: var(--gh-font-mono); font-size: 13px; line-height: 1.7; overflow:auto; }
  .cmt{color:var(--gh-comment)} .kw{color:var(--gh-keyword)} .str{color:var(--gh-string)}
  .num{color:var(--gh-number)} .fn{color:var(--gh-function)} .ty{color:var(--gh-type)}
  .var{color:var(--gh-variable)} .cst{color:var(--gh-constant)} .pnc{color:var(--gh-punctuation)}
  .prm{color:var(--gh-parameter)} .bool{color:var(--gh-boolean)}

  .term { padding: 18px; font-family: var(--gh-font-mono); font-size: 13px; line-height: 1.7; background: var(--gh-ansi-background); }
  .term .p { color: var(--gh-accent-primary); }
  .term .u { color: var(--gh-ansi-magenta); }
  .term .path { color: var(--gh-ansi-blue); }
  .term .ok { color: var(--gh-ansi-green); }
  .term .warn { color: var(--gh-ansi-yellow); }
  .term .err { color: var(--gh-ansi-red); }
  .term .dim { color: var(--gh-fg-faint); }
  .cursor { background: var(--gh-ansi-cursor); color: var(--gh-bg-base); }

  .ansi-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px 24px; padding: 16px 18px; }
  .ansi-cell { display: flex; align-items: center; gap: 10px; font-family: var(--gh-font-mono); font-size: 12px; color: var(--gh-fg-muted); }
  .ansi-cell .dot { width: 16px; height: 16px; border-radius: var(--gh-radius-sm); }
  .ansi-cell em { margin-left: auto; color: var(--gh-fg-faint); font-style: normal; font-size: 11px; }

  .ui-demo { display:flex; flex-wrap:wrap; gap: 12px; align-items:center; padding: 22px; background: var(--gh-bg-base); border:1px solid var(--gh-border-default); border-radius: var(--gh-radius-lg); }
  .btn { font-family: var(--gh-font-mono); font-size: 12px; letter-spacing:.08em; text-transform:uppercase; padding: 10px 18px; border-radius: var(--gh-radius-md); border: 1px solid transparent; cursor: pointer; }
  .btn.primary { background: var(--gh-accent-primary); color: #06121a; box-shadow: 0 0 24px rgba(56,225,200,.35); }
  .btn.ghost { background: transparent; border-color: var(--gh-border-accent); color: var(--gh-accent-primary); }
  .btn.hot { background: var(--gh-accent-hot); color: #18030d; }
  .pill { font-family: var(--gh-font-mono); font-size:11px; padding: 5px 12px; border-radius: 999px; }
  .pill.s { background: rgba(125,219,90,.14); color: var(--gh-signal-success); border:1px solid var(--gh-signal-success); }
  .pill.w { background: rgba(255,180,84,.14); color: var(--gh-signal-warning); border:1px solid var(--gh-signal-warning); }
  .pill.d { background: rgba(255,82,119,.14); color: var(--gh-signal-danger); border:1px solid var(--gh-signal-danger); }

  .type-specimens { display: grid; gap: 12px; }
  .specimen { background: var(--gh-bg-base); border: 1px solid var(--gh-border-default); border-radius: var(--gh-radius-lg); padding: 20px 22px; }
  .spec-head { display: flex; align-items: baseline; gap: 12px; margin-bottom: 14px; }
  .spec-name { font-family: var(--gh-font-mono); font-size: 13px; color: var(--gh-accent-primary); letter-spacing: .12em; text-transform: uppercase; }
  .spec-role { font-family: var(--gh-font-mono); font-size: 11px; color: var(--gh-fg-faint); }
  .spec-big { font-size: 38px; color: var(--gh-fg-bright); line-height: 1.1; }
  .spec-line { margin-top: 8px; font-size: 14px; color: var(--gh-fg-muted); }

  footer { margin-top: 64px; padding-top: 22px; border-top: 1px solid var(--gh-border-default); font-family: var(--gh-font-mono); font-size: 11px; color: var(--gh-fg-faint); display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <div class="eyebrow">Visual System · v${palette.meta.version}</div>
    <h1>${palette.meta.name.replace("RVN", "<b>RVN</b>")}</h1>
    <p class="lede">${palette.meta.description}</p>
    <div class="influences">${palette.meta.influences.map((i) => `<span class="tag">${i}</span>`).join("")}</div>
  </header>

  <h2>Semantic</h2>
  <div class="grid">
    ${["bg.void","bg.deep","bg.base","bg.surface","bg.overlay","bg.raised","fg.bright","fg.default","fg.muted","fg.faint","accent.primary","accent.secondary","accent.tertiary","accent.hot","signal.success","signal.warning","signal.danger"].map((k) => swatch(k, S[k])).join("")}
  </div>

  <h2>Reference ramps</h2>
  <div class="ramps">
    ${Object.entries(palette.ref).map(([g, stops]) => ramp(g, stops)).join("")}
  </div>

  <h2>In context</h2>
  <div class="cols">
    <div class="panel">
      <div class="bar"><span class="dot" style="background:var(--gh-ansi-red)"></span><span class="dot" style="background:var(--gh-ansi-yellow)"></span><span class="dot" style="background:var(--gh-ansi-green)"></span><span class="title">spectre.ts — editor</span></div>
      <pre class="code"><span class="cmt">// ghostly-rvn // theme engine</span>
<span class="kw">import</span> { <span class="var">Palette</span> } <span class="kw">from</span> <span class="str">"./tokens"</span><span class="pnc">;</span>

<span class="kw">export</span> <span class="kw">async function</span> <span class="fn">render</span><span class="pnc">(</span><span class="prm">target</span><span class="pnc">:</span> <span class="ty">Target</span><span class="pnc">)</span> <span class="pnc">{</span>
  <span class="kw">const</span> <span class="var">glow</span> <span class="pnc">=</span> <span class="num">0x38e1c8</span><span class="pnc">;</span>
  <span class="kw">if</span> <span class="pnc">(</span><span class="var">target</span><span class="pnc">.</span><span class="var">live</span> <span class="pnc">===</span> <span class="bool">true</span><span class="pnc">)</span>
    <span class="kw">return</span> <span class="fn">emit</span><span class="pnc">(</span><span class="var">Palette</span><span class="pnc">.</span><span class="fn">resolve</span><span class="pnc">(</span><span class="str">"spectre"</span><span class="pnc">))</span><span class="pnc">;</span>
  <span class="kw">throw new</span> <span class="ty">Error</span><span class="pnc">(</span><span class="str">"no signal"</span><span class="pnc">)</span><span class="pnc">;</span>
<span class="pnc">}</span></pre>
    </div>
    <div class="panel">
      <div class="bar"><span class="dot" style="background:var(--gh-ansi-red)"></span><span class="dot" style="background:var(--gh-ansi-yellow)"></span><span class="dot" style="background:var(--gh-ansi-green)"></span><span class="title">rvn@nerv — terminal</span></div>
      <div class="term"><span class="p">rvn</span> <span class="dim">in</span> <span class="path">~/ghostly-rvn</span> <span class="u">λ</span> build --target spectre
<span class="dim">→</span> resolving tokens <span class="ok">ok</span>
<span class="dim">→</span> iterm  <span class="ok">✓</span>   vscode <span class="ok">✓</span>   web <span class="ok">✓</span>
<span class="warn">!</span> 1 preview regenerated
<span class="err">✗</span> 0 errors
<span class="p">rvn</span> <span class="u">λ</span> <span class="cursor">&nbsp;</span></div>
    </div>
  </div>

  <h2>Typeface · Monaspace</h2>
  <div class="type-specimens">
    ${(palette.fonts ?? []).map((f) => `
    <div class="specimen" style="font-family: '${f.family}', ui-monospace, monospace">
      <div class="spec-head"><span class="spec-name">${f.family.replace("Monaspace ", "")}</span><span class="spec-role">${f.role}</span></div>
      <div class="spec-big">Ghostly RVN — Spectre</div>
      <div class="spec-line">ABCDEFGHIJKLM abcdefghijklm 0123456789 &nbsp; =&gt; != -&gt; &lt;= λ {} [] () /* ⟶ */</div>
    </div>`).join("")}
  </div>

  <h2>Terminal · ANSI 16</h2>
  <div class="panel"><div class="ansi-grid">
    ${["black","red","green","yellow","blue","magenta","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightMagenta","brightCyan","brightWhite"].map((n) => ansiCell(n, A[n])).join("")}
  </div></div>

  <h2>Components</h2>
  <div class="ui-demo">
    <button class="btn primary">Deploy</button>
    <button class="btn ghost">Preview</button>
    <button class="btn hot">Override</button>
    <span class="pill s">synced</span>
    <span class="pill w">drift</span>
    <span class="pill d">offline</span>
  </div>

  <footer>
    <span>${palette.meta.name} · theme “${palette.meta.theme}”</span>
    <span>generated from tokens/palette.json</span>
  </footer>
</div>
</body>
</html>
`;

mkdirSync(resolve(root, "preview"), { recursive: true });
writeFileSync(resolve(root, "preview/index.html"), html);

console.log("✓ dist/tokens.css");
console.log("✓ dist/tokens.resolved.json");
console.log("✓ preview/index.html");
