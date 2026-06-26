# Ghostly RVN

A personal visual system — **90s-anime cyberpunk**. Cool-anchored (cyan, teal,
violet glowing over a blue-black void) cut with hot HUD accents (magenta, amber,
red). Influences: *Evangelion · Akira · Ghost in the Shell · Cowboy Bebop ·
Nier: Automata · Stellar Blade*.

One aesthetic, defined once, exported everywhere: terminal, editor, website.

## How it works

```
tokens/palette.json      ← single source of truth (the ONLY file you edit by hand)
build/build.mjs          ← resolves tokens → outputs below
dist/tokens.css          ← CSS custom properties (--gh-*)
dist/tokens.resolved.json← flat resolved tokens for other generators
preview/index.html       ← live preview, rendered from the tokens
```

The palette is two-layered: raw **`ref`** ramps (e.g. `cyan.500`) and a
**semantic** layer that assigns meaning (`accent.primary → cyan.500`). Themes
consume the semantic + `ansi` + `syntax` layers, so the look stays coherent and
a single edit propagates to every target.

## Build

```sh
node build/build.mjs        # regenerate dist/ + preview from tokens
```

Open `preview/index.html` in a browser to see the full system.

## Roadmap

- [x] Design tokens + live preview
- [ ] `generators/iterm.js` → `.itermcolors`
- [ ] `generators/vscode.js` → VS Code color theme
- [ ] `generators/css.js` → standalone web theme
- [ ] `site/` — the personal website, consuming the same tokens

## Theme

Current theme: **Spectre** (`v0.1.0`).
