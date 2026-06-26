// iTerm2 generator — emits one .itermcolors (XML plist) per theme.
// Drop into iTerm2 ▸ Settings ▸ Profiles ▸ Colors ▸ Color Presets… ▸ Import.

import { rgb01, real } from "./lib/color.mjs";

const ANSI = [
  "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white",
  "brightBlack", "brightRed", "brightGreen", "brightYellow", "brightBlue", "brightMagenta", "brightCyan", "brightWhite",
];

function colorDict(key, hex) {
  const { r, g, b } = rgb01(hex);
  return `	<key>${key}</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Red Component</key>
		<real>${real(r)}</real>
		<key>Green Component</key>
		<real>${real(g)}</real>
		<key>Blue Component</key>
		<real>${real(b)}</real>
		<key>Alpha Component</key>
		<real>1</real>
	</dict>`;
}

function itermColors(theme) {
  const a = theme.ansi, s = theme.semantic;
  const entries = [];
  ANSI.forEach((name, i) => entries.push(colorDict(`Ansi ${i} Color`, a[name])));
  entries.push(colorDict("Background Color", a.background));
  entries.push(colorDict("Foreground Color", a.foreground));
  entries.push(colorDict("Bold Color", s["fg.bright"]));
  entries.push(colorDict("Cursor Color", a.cursor));
  entries.push(colorDict("Cursor Text Color", a.background));
  entries.push(colorDict("Selection Color", a.selection));
  entries.push(colorDict("Selected Text Color", a.foreground));
  entries.push(colorDict("Link Color", s["accent.primary"]));
  entries.push(colorDict("Badge Color", s["accent.hot"]));
  entries.push(colorDict("Cursor Guide Color", s["bg.overlay"]));

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
${entries.join("\n")}
</dict>
</plist>
`;
}

export default function generate({ themes }) {
  return Object.entries(themes).map(([slug, theme]) => ({
    file: `iterm/ghostly-rvn-${slug}.itermcolors`,
    content: itermColors(theme),
  }));
}
