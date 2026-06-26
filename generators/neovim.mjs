// Neovim generator — emits a Lua colorscheme per theme under nvim/colors/.
// Install: copy the files into a directory on your runtimepath (e.g.
// ~/.config/nvim/colors/), then `:colorscheme ghostly-rvn-spectre`.

function luaColorscheme(slug, theme, meta) {
  const s = theme.semantic, sy = theme.syntax, a = theme.ansi;
  const name = `ghostly-rvn-${slug}`;

  // Palette table exposed to the highlight definitions.
  const pal = {
    bg: s["bg.base"], bg_deep: s["bg.deep"], bg_surface: s["bg.surface"], bg_overlay: s["bg.overlay"], bg_void: s["bg.void"],
    fg: s["fg.default"], fg_bright: s["fg.bright"], fg_muted: s["fg.muted"], fg_faint: s["fg.faint"],
    primary: s["accent.primary"], secondary: s["accent.secondary"], tertiary: s["accent.tertiary"], hot: s["accent.hot"],
    border: s["border.default"], sel: a.selection, cursor: a.cursor,
    success: s["signal.success"], warning: s["signal.warning"], danger: s["signal.danger"], info: s["signal.info"], special: s["signal.special"],
    comment: sy.comment, keyword: sy.keyword, storage: sy.storage, string: sy.string, escape: sy["string.escape"],
    number: sy.number, boolean: sy.boolean, constant: sy.constant, func: sy.function, method: sy.method,
    type: sy.type, variable: sy.variable, property: sy.property, parameter: sy.parameter,
    operator: sy.operator, punctuation: sy.punctuation, tag: sy.tag, attribute: sy.attribute, regex: sy.regex,
  };
  const palLua = Object.entries(pal).map(([k, v]) => `  ${k} = "${v}",`).join("\n");

  // [group, { fg?, bg?, sp?, style? }]
  const hl = [
    ["Normal", "{ fg = c.fg, bg = c.bg }"],
    ["NormalFloat", "{ fg = c.fg, bg = c.bg_deep }"],
    ["FloatBorder", "{ fg = c.border, bg = c.bg_deep }"],
    ["FloatTitle", "{ fg = c.primary, bg = c.bg_deep, bold = true }"],
    ["ColorColumn", "{ bg = c.bg_surface }"],
    ["Cursor", "{ fg = c.bg, bg = c.cursor }"],
    ["CursorLine", "{ bg = c.bg_surface }"],
    ["CursorColumn", "{ bg = c.bg_surface }"],
    ["CursorLineNr", "{ fg = c.primary, bold = true }"],
    ["LineNr", "{ fg = c.fg_faint }"],
    ["SignColumn", "{ bg = c.bg }"],
    ["VertSplit", "{ fg = c.border }"],
    ["WinSeparator", "{ fg = c.border }"],
    ["Folded", "{ fg = c.fg_muted, bg = c.bg_surface }"],
    ["FoldColumn", "{ fg = c.fg_faint, bg = c.bg }"],
    ["Visual", "{ bg = c.sel }"],
    ["Search", "{ fg = c.bg, bg = c.warning }"],
    ["IncSearch", "{ fg = c.bg, bg = c.primary }"],
    ["CurSearch", "{ fg = c.bg, bg = c.primary }"],
    ["MatchParen", "{ fg = c.hot, bold = true }"],
    ["Pmenu", "{ fg = c.fg, bg = c.bg_surface }"],
    ["PmenuSel", "{ fg = c.bg, bg = c.primary }"],
    ["PmenuSbar", "{ bg = c.bg_surface }"],
    ["PmenuThumb", "{ bg = c.fg_faint }"],
    ["StatusLine", "{ fg = c.fg_muted, bg = c.bg_surface }"],
    ["StatusLineNC", "{ fg = c.fg_faint, bg = c.bg_deep }"],
    ["TabLine", "{ fg = c.fg_muted, bg = c.bg_deep }"],
    ["TabLineSel", "{ fg = c.fg_bright, bg = c.bg }"],
    ["TabLineFill", "{ bg = c.bg_deep }"],
    ["Title", "{ fg = c.primary, bold = true }"],
    ["Directory", "{ fg = c.tertiary }"],
    ["NonText", "{ fg = c.fg_faint }"],
    ["Whitespace", "{ fg = c.fg_faint }"],
    ["SpecialKey", "{ fg = c.fg_faint }"],
    ["WildMenu", "{ fg = c.bg, bg = c.primary }"],
    ["ErrorMsg", "{ fg = c.danger }"],
    ["WarningMsg", "{ fg = c.warning }"],
    ["ModeMsg", "{ fg = c.fg_muted }"],
    ["MoreMsg", "{ fg = c.primary }"],
    ["Question", "{ fg = c.primary }"],

    // Legacy syntax
    ["Comment", "{ fg = c.comment, italic = true }"],
    ["Constant", "{ fg = c.constant }"],
    ["String", "{ fg = c.string }"],
    ["Character", "{ fg = c.string }"],
    ["Number", "{ fg = c.number }"],
    ["Float", "{ fg = c.number }"],
    ["Boolean", "{ fg = c.boolean }"],
    ["Identifier", "{ fg = c.variable }"],
    ["Function", "{ fg = c.func }"],
    ["Statement", "{ fg = c.keyword }"],
    ["Conditional", "{ fg = c.keyword }"],
    ["Repeat", "{ fg = c.keyword }"],
    ["Label", "{ fg = c.tag }"],
    ["Operator", "{ fg = c.operator }"],
    ["Keyword", "{ fg = c.keyword }"],
    ["Exception", "{ fg = c.keyword }"],
    ["PreProc", "{ fg = c.constant }"],
    ["Include", "{ fg = c.keyword }"],
    ["Define", "{ fg = c.keyword }"],
    ["Macro", "{ fg = c.constant }"],
    ["Type", "{ fg = c.type }"],
    ["StorageClass", "{ fg = c.storage }"],
    ["Structure", "{ fg = c.type }"],
    ["Typedef", "{ fg = c.type }"],
    ["Special", "{ fg = c.escape }"],
    ["SpecialChar", "{ fg = c.escape }"],
    ["Delimiter", "{ fg = c.punctuation }"],
    ["Tag", "{ fg = c.tag }"],
    ["Underlined", "{ fg = c.tertiary, underline = true }"],
    ["Error", "{ fg = c.danger }"],
    ["Todo", "{ fg = c.bg, bg = c.warning, bold = true }"],

    // Treesitter
    ["@comment", "{ link = 'Comment' }"],
    ["@keyword", "{ fg = c.keyword }"],
    ["@keyword.function", "{ fg = c.keyword }"],
    ["@keyword.return", "{ fg = c.keyword }"],
    ["@keyword.operator", "{ fg = c.keyword }"],
    ["@conditional", "{ fg = c.keyword }"],
    ["@repeat", "{ fg = c.keyword }"],
    ["@exception", "{ fg = c.keyword }"],
    ["@string", "{ fg = c.string }"],
    ["@string.escape", "{ fg = c.escape }"],
    ["@string.regex", "{ fg = c.regex }"],
    ["@character", "{ fg = c.string }"],
    ["@number", "{ fg = c.number }"],
    ["@float", "{ fg = c.number }"],
    ["@boolean", "{ fg = c.boolean }"],
    ["@constant", "{ fg = c.constant }"],
    ["@constant.builtin", "{ fg = c.constant }"],
    ["@constant.macro", "{ fg = c.constant }"],
    ["@function", "{ fg = c.func }"],
    ["@function.call", "{ fg = c.func }"],
    ["@function.builtin", "{ fg = c.func }"],
    ["@function.method", "{ fg = c.method }"],
    ["@method", "{ fg = c.method }"],
    ["@constructor", "{ fg = c.type }"],
    ["@type", "{ fg = c.type }"],
    ["@type.builtin", "{ fg = c.type }"],
    ["@variable", "{ fg = c.variable }"],
    ["@variable.builtin", "{ fg = c.parameter }"],
    ["@parameter", "{ fg = c.parameter }"],
    ["@field", "{ fg = c.property }"],
    ["@property", "{ fg = c.property }"],
    ["@operator", "{ fg = c.operator }"],
    ["@punctuation.delimiter", "{ fg = c.punctuation }"],
    ["@punctuation.bracket", "{ fg = c.punctuation }"],
    ["@punctuation.special", "{ fg = c.escape }"],
    ["@tag", "{ fg = c.tag }"],
    ["@tag.attribute", "{ fg = c.attribute }"],
    ["@tag.delimiter", "{ fg = c.punctuation }"],
    ["@attribute", "{ fg = c.attribute }"],
    ["@text.title", "{ fg = c.primary, bold = true }"],
    ["@text.literal", "{ fg = c.string }"],
    ["@text.uri", "{ fg = c.tertiary, underline = true }"],
    ["@text.reference", "{ fg = c.tertiary }"],

    // LSP semantic tokens
    ["@lsp.type.namespace", "{ fg = c.type }"],
    ["@lsp.type.class", "{ fg = c.type }"],
    ["@lsp.type.enum", "{ fg = c.type }"],
    ["@lsp.type.interface", "{ fg = c.type }"],
    ["@lsp.type.parameter", "{ fg = c.parameter }"],
    ["@lsp.type.property", "{ fg = c.property }"],

    // Diagnostics
    ["DiagnosticError", "{ fg = c.danger }"],
    ["DiagnosticWarn", "{ fg = c.warning }"],
    ["DiagnosticInfo", "{ fg = c.info }"],
    ["DiagnosticHint", "{ fg = c.tertiary }"],
    ["DiagnosticUnderlineError", "{ undercurl = true, sp = c.danger }"],
    ["DiagnosticUnderlineWarn", "{ undercurl = true, sp = c.warning }"],
    ["DiagnosticUnderlineInfo", "{ undercurl = true, sp = c.info }"],
    ["DiagnosticUnderlineHint", "{ undercurl = true, sp = c.tertiary }"],

    // Git / diff
    ["DiffAdd", "{ fg = c.success, bg = c.bg_surface }"],
    ["DiffChange", "{ fg = c.warning, bg = c.bg_surface }"],
    ["DiffDelete", "{ fg = c.danger, bg = c.bg_surface }"],
    ["DiffText", "{ fg = c.fg_bright, bg = c.bg_overlay }"],
    ["Added", "{ fg = c.success }"],
    ["Changed", "{ fg = c.warning }"],
    ["Removed", "{ fg = c.danger }"],
    ["GitSignsAdd", "{ fg = c.success }"],
    ["GitSignsChange", "{ fg = c.warning }"],
    ["GitSignsDelete", "{ fg = c.danger }"],

    // Common plugins
    ["TelescopeBorder", "{ fg = c.border, bg = c.bg_deep }"],
    ["TelescopeSelection", "{ bg = c.bg_surface }"],
    ["TelescopeMatching", "{ fg = c.primary, bold = true }"],
    ["NeoTreeNormal", "{ fg = c.fg, bg = c.bg_deep }"],
    ["WhichKey", "{ fg = c.primary }"],
  ];

  const hlLua = hl.map(([g, def]) => `  set(0, "${g}", ${def})`).join("\n");

  const term = [
    a.black, a.red, a.green, a.yellow, a.blue, a.magenta, a.cyan, a.white,
    a.brightBlack, a.brightRed, a.brightGreen, a.brightYellow, a.brightBlue, a.brightMagenta, a.brightCyan, a.brightWhite,
  ].map((hex, i) => `vim.g.terminal_color_${i} = "${hex}"`).join("\n");

  return `-- ${meta.name} — ${theme.label} (${theme.appearance})
-- ${meta.description}
-- Generated from tokens/palette.json. Do not edit by hand.

vim.cmd("highlight clear")
if vim.fn.exists("syntax_on") == 1 then
  vim.cmd("syntax reset")
end
vim.o.background = "${theme.appearance}"
vim.g.colors_name = "${name}"

local c = {
${palLua}
}

local set = vim.api.nvim_set_hl
${hlLua}

${term}
`;
}

export default function generate({ meta, themes }) {
  return Object.entries(themes).map(([slug, theme]) => ({
    file: `nvim/colors/ghostly-rvn-${slug}.lua`,
    content: luaColorscheme(slug, theme, meta),
  }));
}
