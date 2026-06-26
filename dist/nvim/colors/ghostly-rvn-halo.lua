-- Ghostly RVN — Halo (light)
-- A 90s-anime science-fiction aesthetic — futurism and retro-futurism first, with a cyberpunk undercurrent. Cel-painted dusk skylines, neon haze and chrome, rendered in soft-but-saturated color.
-- Generated from tokens/palette.json. Do not edit by hand.

vim.cmd("highlight clear")
if vim.fn.exists("syntax_on") == 1 then
  vim.cmd("syntax reset")
end
vim.o.background = "light"
vim.g.colors_name = "ghostly-rvn-halo"

local c = {
  bg = "#eef2fc",
  bg_deep = "#e1e8f7",
  bg_surface = "#f7f9ff",
  bg_overlay = "#f7f9ff",
  bg_void = "#cfd9ee",
  fg = "#1c2438",
  fg_bright = "#0f1420",
  fg_muted = "#5d6b8c",
  fg_faint = "#8794b0",
  primary = "#0f8a96",
  secondary = "#5f3fc4",
  tertiary = "#2553c0",
  hot = "#b81f6a",
  border = "#cfd9ee",
  sel = "#cfd9ee",
  cursor = "#0f8a96",
  success = "#3f9a3a",
  warning = "#cf7a1c",
  danger = "#cc2a4e",
  info = "#2553c0",
  special = "#b81f6a",
  comment = "#5d6b8c",
  keyword = "#5f3fc4",
  storage = "#7c5cde",
  string = "#3f9a3a",
  escape = "#0f8a96",
  number = "#cf7a1c",
  boolean = "#cf7a1c",
  constant = "#b81f6a",
  func = "#2553c0",
  method = "#0f8a96",
  type = "#3b6fe0",
  variable = "#1c2438",
  property = "#283350",
  parameter = "#b81f6a",
  operator = "#5d6b8c",
  punctuation = "#5d6b8c",
  tag = "#b81f6a",
  attribute = "#cf7a1c",
  regex = "#3f9a3a",
}

local set = vim.api.nvim_set_hl
  set(0, "Normal", { fg = c.fg, bg = c.bg })
  set(0, "NormalFloat", { fg = c.fg, bg = c.bg_deep })
  set(0, "FloatBorder", { fg = c.border, bg = c.bg_deep })
  set(0, "FloatTitle", { fg = c.primary, bg = c.bg_deep, bold = true })
  set(0, "ColorColumn", { bg = c.bg_surface })
  set(0, "Cursor", { fg = c.bg, bg = c.cursor })
  set(0, "CursorLine", { bg = c.bg_surface })
  set(0, "CursorColumn", { bg = c.bg_surface })
  set(0, "CursorLineNr", { fg = c.primary, bold = true })
  set(0, "LineNr", { fg = c.fg_faint })
  set(0, "SignColumn", { bg = c.bg })
  set(0, "VertSplit", { fg = c.border })
  set(0, "WinSeparator", { fg = c.border })
  set(0, "Folded", { fg = c.fg_muted, bg = c.bg_surface })
  set(0, "FoldColumn", { fg = c.fg_faint, bg = c.bg })
  set(0, "Visual", { bg = c.sel })
  set(0, "Search", { fg = c.bg, bg = c.warning })
  set(0, "IncSearch", { fg = c.bg, bg = c.primary })
  set(0, "CurSearch", { fg = c.bg, bg = c.primary })
  set(0, "MatchParen", { fg = c.hot, bold = true })
  set(0, "Pmenu", { fg = c.fg, bg = c.bg_surface })
  set(0, "PmenuSel", { fg = c.bg, bg = c.primary })
  set(0, "PmenuSbar", { bg = c.bg_surface })
  set(0, "PmenuThumb", { bg = c.fg_faint })
  set(0, "StatusLine", { fg = c.fg_muted, bg = c.bg_surface })
  set(0, "StatusLineNC", { fg = c.fg_faint, bg = c.bg_deep })
  set(0, "TabLine", { fg = c.fg_muted, bg = c.bg_deep })
  set(0, "TabLineSel", { fg = c.fg_bright, bg = c.bg })
  set(0, "TabLineFill", { bg = c.bg_deep })
  set(0, "Title", { fg = c.primary, bold = true })
  set(0, "Directory", { fg = c.tertiary })
  set(0, "NonText", { fg = c.fg_faint })
  set(0, "Whitespace", { fg = c.fg_faint })
  set(0, "SpecialKey", { fg = c.fg_faint })
  set(0, "WildMenu", { fg = c.bg, bg = c.primary })
  set(0, "ErrorMsg", { fg = c.danger })
  set(0, "WarningMsg", { fg = c.warning })
  set(0, "ModeMsg", { fg = c.fg_muted })
  set(0, "MoreMsg", { fg = c.primary })
  set(0, "Question", { fg = c.primary })
  set(0, "Comment", { fg = c.comment, italic = true })
  set(0, "Constant", { fg = c.constant })
  set(0, "String", { fg = c.string })
  set(0, "Character", { fg = c.string })
  set(0, "Number", { fg = c.number })
  set(0, "Float", { fg = c.number })
  set(0, "Boolean", { fg = c.boolean })
  set(0, "Identifier", { fg = c.variable })
  set(0, "Function", { fg = c.func })
  set(0, "Statement", { fg = c.keyword })
  set(0, "Conditional", { fg = c.keyword })
  set(0, "Repeat", { fg = c.keyword })
  set(0, "Label", { fg = c.tag })
  set(0, "Operator", { fg = c.operator })
  set(0, "Keyword", { fg = c.keyword })
  set(0, "Exception", { fg = c.keyword })
  set(0, "PreProc", { fg = c.constant })
  set(0, "Include", { fg = c.keyword })
  set(0, "Define", { fg = c.keyword })
  set(0, "Macro", { fg = c.constant })
  set(0, "Type", { fg = c.type })
  set(0, "StorageClass", { fg = c.storage })
  set(0, "Structure", { fg = c.type })
  set(0, "Typedef", { fg = c.type })
  set(0, "Special", { fg = c.escape })
  set(0, "SpecialChar", { fg = c.escape })
  set(0, "Delimiter", { fg = c.punctuation })
  set(0, "Tag", { fg = c.tag })
  set(0, "Underlined", { fg = c.tertiary, underline = true })
  set(0, "Error", { fg = c.danger })
  set(0, "Todo", { fg = c.bg, bg = c.warning, bold = true })
  set(0, "@comment", { link = 'Comment' })
  set(0, "@keyword", { fg = c.keyword })
  set(0, "@keyword.function", { fg = c.keyword })
  set(0, "@keyword.return", { fg = c.keyword })
  set(0, "@keyword.operator", { fg = c.keyword })
  set(0, "@conditional", { fg = c.keyword })
  set(0, "@repeat", { fg = c.keyword })
  set(0, "@exception", { fg = c.keyword })
  set(0, "@string", { fg = c.string })
  set(0, "@string.escape", { fg = c.escape })
  set(0, "@string.regex", { fg = c.regex })
  set(0, "@character", { fg = c.string })
  set(0, "@number", { fg = c.number })
  set(0, "@float", { fg = c.number })
  set(0, "@boolean", { fg = c.boolean })
  set(0, "@constant", { fg = c.constant })
  set(0, "@constant.builtin", { fg = c.constant })
  set(0, "@constant.macro", { fg = c.constant })
  set(0, "@function", { fg = c.func })
  set(0, "@function.call", { fg = c.func })
  set(0, "@function.builtin", { fg = c.func })
  set(0, "@function.method", { fg = c.method })
  set(0, "@method", { fg = c.method })
  set(0, "@constructor", { fg = c.type })
  set(0, "@type", { fg = c.type })
  set(0, "@type.builtin", { fg = c.type })
  set(0, "@variable", { fg = c.variable })
  set(0, "@variable.builtin", { fg = c.parameter })
  set(0, "@parameter", { fg = c.parameter })
  set(0, "@field", { fg = c.property })
  set(0, "@property", { fg = c.property })
  set(0, "@operator", { fg = c.operator })
  set(0, "@punctuation.delimiter", { fg = c.punctuation })
  set(0, "@punctuation.bracket", { fg = c.punctuation })
  set(0, "@punctuation.special", { fg = c.escape })
  set(0, "@tag", { fg = c.tag })
  set(0, "@tag.attribute", { fg = c.attribute })
  set(0, "@tag.delimiter", { fg = c.punctuation })
  set(0, "@attribute", { fg = c.attribute })
  set(0, "@text.title", { fg = c.primary, bold = true })
  set(0, "@text.literal", { fg = c.string })
  set(0, "@text.uri", { fg = c.tertiary, underline = true })
  set(0, "@text.reference", { fg = c.tertiary })
  set(0, "@lsp.type.namespace", { fg = c.type })
  set(0, "@lsp.type.class", { fg = c.type })
  set(0, "@lsp.type.enum", { fg = c.type })
  set(0, "@lsp.type.interface", { fg = c.type })
  set(0, "@lsp.type.parameter", { fg = c.parameter })
  set(0, "@lsp.type.property", { fg = c.property })
  set(0, "DiagnosticError", { fg = c.danger })
  set(0, "DiagnosticWarn", { fg = c.warning })
  set(0, "DiagnosticInfo", { fg = c.info })
  set(0, "DiagnosticHint", { fg = c.tertiary })
  set(0, "DiagnosticUnderlineError", { undercurl = true, sp = c.danger })
  set(0, "DiagnosticUnderlineWarn", { undercurl = true, sp = c.warning })
  set(0, "DiagnosticUnderlineInfo", { undercurl = true, sp = c.info })
  set(0, "DiagnosticUnderlineHint", { undercurl = true, sp = c.tertiary })
  set(0, "DiffAdd", { fg = c.success, bg = c.bg_surface })
  set(0, "DiffChange", { fg = c.warning, bg = c.bg_surface })
  set(0, "DiffDelete", { fg = c.danger, bg = c.bg_surface })
  set(0, "DiffText", { fg = c.fg_bright, bg = c.bg_overlay })
  set(0, "Added", { fg = c.success })
  set(0, "Changed", { fg = c.warning })
  set(0, "Removed", { fg = c.danger })
  set(0, "GitSignsAdd", { fg = c.success })
  set(0, "GitSignsChange", { fg = c.warning })
  set(0, "GitSignsDelete", { fg = c.danger })
  set(0, "TelescopeBorder", { fg = c.border, bg = c.bg_deep })
  set(0, "TelescopeSelection", { bg = c.bg_surface })
  set(0, "TelescopeMatching", { fg = c.primary, bold = true })
  set(0, "NeoTreeNormal", { fg = c.fg, bg = c.bg_deep })
  set(0, "WhichKey", { fg = c.primary })

vim.g.terminal_color_0 = "#0f1420"
vim.g.terminal_color_1 = "#e83b62"
vim.g.terminal_color_2 = "#3f9a3a"
vim.g.terminal_color_3 = "#cf7a1c"
vim.g.terminal_color_4 = "#2553c0"
vim.g.terminal_color_5 = "#5f3fc4"
vim.g.terminal_color_6 = "#0f8a96"
vim.g.terminal_color_7 = "#8794b0"
vim.g.terminal_color_8 = "#5d6b8c"
vim.g.terminal_color_9 = "#ff5277"
vim.g.terminal_color_10 = "#57c04a"
vim.g.terminal_color_11 = "#ff9e3d"
vim.g.terminal_color_12 = "#3b6fe0"
vim.g.terminal_color_13 = "#7c5cde"
vim.g.terminal_color_14 = "#22b8c4"
vim.g.terminal_color_15 = "#1c2438"
