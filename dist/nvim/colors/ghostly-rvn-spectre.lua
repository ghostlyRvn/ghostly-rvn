-- Ghostly RVN — Spectre (dark)
-- A 90s-anime science-fiction aesthetic — futurism and retro-futurism first, with a cyberpunk undercurrent. Cel-painted dusk skylines, neon haze and chrome, rendered in soft-but-saturated color.
-- Generated from tokens/palette.json. Do not edit by hand.

vim.cmd("highlight clear")
if vim.fn.exists("syntax_on") == 1 then
  vim.cmd("syntax reset")
end
vim.o.background = "dark"
vim.g.colors_name = "ghostly-rvn-spectre"

local c = {
  bg = "#0f1420",
  bg_deep = "#0b0f17",
  bg_surface = "#141b2b",
  bg_overlay = "#1c2438",
  bg_void = "#070a10",
  fg = "#d6def0",
  fg_bright = "#eef2ff",
  fg_muted = "#8794b0",
  fg_faint = "#44506e",
  primary = "#38e1c8",
  secondary = "#a07cff",
  tertiary = "#4d8dff",
  hot = "#f0529c",
  border = "#283350",
  sel = "#3b6fe0",
  cursor = "#38e1c8",
  success = "#7ddb5a",
  warning = "#ffb454",
  danger = "#ff5277",
  info = "#74a8ff",
  special = "#f0529c",
  comment = "#44506e",
  keyword = "#a07cff",
  storage = "#bfa0ff",
  string = "#7ddb5a",
  escape = "#6ff0dc",
  number = "#ffb454",
  boolean = "#ffd27d",
  constant = "#ff7ab0",
  func = "#38e1c8",
  method = "#6ff0dc",
  type = "#74a8ff",
  variable = "#d6def0",
  property = "#b3bdd6",
  parameter = "#ff7ab0",
  operator = "#8794b0",
  punctuation = "#8794b0",
  tag = "#f0529c",
  attribute = "#ffb454",
  regex = "#9fe85b",
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

vim.g.terminal_color_0 = "#1c2438"
vim.g.terminal_color_1 = "#ff5277"
vim.g.terminal_color_2 = "#7ddb5a"
vim.g.terminal_color_3 = "#ffb454"
vim.g.terminal_color_4 = "#4d8dff"
vim.g.terminal_color_5 = "#a07cff"
vim.g.terminal_color_6 = "#38e1c8"
vim.g.terminal_color_7 = "#d6def0"
vim.g.terminal_color_8 = "#44506e"
vim.g.terminal_color_9 = "#ff7a96"
vim.g.terminal_color_10 = "#9fe85b"
vim.g.terminal_color_11 = "#ffd27d"
vim.g.terminal_color_12 = "#74a8ff"
vim.g.terminal_color_13 = "#bfa0ff"
vim.g.terminal_color_14 = "#6ff0dc"
vim.g.terminal_color_15 = "#eef2ff"
