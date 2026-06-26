# Ghostly RVN

A personal visual system — **90s-anime science fiction**. Futurism and
retro-futurism first, with a cyberpunk undercurrent: cel-painted dusk skylines,
neon haze and chrome, in soft-but-saturated color. Influences: *Evangelion ·
Akira · Ghost in the Shell · Cowboy Bebop · Sailor Moon · Nier: Automata ·
Stellar Blade · Starfield · No Man's Sky*.

One aesthetic, defined once, exported everywhere: terminal, editor, website.
Planned as a trio of themes — **Spectre** (dark, shipping now), a Light theme,
and a Warm/Amber theme — that share one token structure.

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
