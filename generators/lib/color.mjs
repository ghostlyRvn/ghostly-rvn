// Color helpers shared by the theme generators.

export function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = h.length === 3 ? h.split("").map((x) => x + x).join("") : h;
  return { r: parseInt(n.slice(0, 2), 16), g: parseInt(n.slice(2, 4), 16), b: parseInt(n.slice(4, 6), 16) };
}

// 0–1 normalized components (for plist reals).
export function rgb01(hex) {
  const { r, g, b } = hexToRgb(hex);
  return { r: r / 255, g: g / 255, b: b / 255 };
}

// Trim a float to a tidy plist <real> value.
export const real = (v) => String(Math.round(v * 1e6) / 1e6);

// #rrggbb (+ optional alpha 0–1) → #rrggbbaa, lowercased.
export function hexa(hex, alpha = 1) {
  const { r, g, b } = hexToRgb(hex);
  const a = Math.round(alpha * 255);
  const h = (n) => n.toString(16).padStart(2, "0");
  return `#${h(r)}${h(g)}${h(b)}${h(a)}`;
}
