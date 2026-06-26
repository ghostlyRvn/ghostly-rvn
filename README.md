# Ghostly RVN

A personal visual system — **90s-anime science fiction**. Futurism and
retro-futurism first, with a cyberpunk undercurrent: cel-painted dusk skylines,
neon haze and chrome, in soft-but-saturated color. Influences: *Evangelion ·
Akira · Ghost in the Shell · Cowboy Bebop · Sailor Moon · Nier: Automata ·
Stellar Blade · Starfield · No Man's Sky*.

One aesthetic, defined once, exported everywhere: terminal, editor, website.

## Themes

Three themes share one token vocabulary — same semantic names, different values:

| Theme       | Appearance | Character                                            |
|-------------|------------|------------------------------------------------------|
| **Spectre** | dark       | cool dusk-dark; cyan/violet over a blue-black void   |
| **Halo**    | light      | cool daylight; ink on cool mist with saturated accents |
| **Ember**   | light      | warm parchment; amber-led with a cool teal counterpoint |

Switch via the `data-theme` attribute on `<html>` (`spectre` is the default at
`:root`):

```html
<html data-theme="halo">   <!-- or "ember", or omit for Spectre -->
```

## How it works

```
tokens/palette.json       ← single source of truth (the ONLY file you edit by hand)
build/build.mjs           ← resolves tokens → outputs below
dist/tokens.css           ← CSS custom properties (--gh-*), default + per-theme blocks
dist/fonts.css            ← self-hosted Monaspace @font-face
dist/tokens.resolved.json ← flat resolved tokens (all themes) for other generators
preview/{index,halo,ember}.html ← a live preview per theme (index = Spectre)
```

The palette is two-layered: raw **`ref`** ramps (e.g. `cyan.500`) and, per theme,
a **semantic** layer that assigns meaning (`accent.primary → cyan.500`). Each
theme also defines `syntax` (editor token colors) and `ansi` (terminal 16). All
three share the `ref` ramps, typography and radius — so a single edit propagates
across every theme and every target.

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
