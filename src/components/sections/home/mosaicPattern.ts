/**
 * A quilt-style mosaic tile (circle / diamond / cross-cluster / triangle,
 * each in its own cell, each cell a different shade of the same hue) —
 * approximates a hand-illustrated patchwork pattern, rather than a uniform
 * checkerboard or dot-grid.
 */
export function mosaicPattern([c0, c1, c2]: [string, string, string]) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <rect x="0" y="0" width="100" height="100" fill="${c0}"/>
    <circle cx="50" cy="50" r="36" fill="${c1}"/>
    <rect x="100" y="0" width="100" height="100" fill="${c1}"/>
    <rect x="115" y="15" width="70" height="70" fill="${c2}" transform="rotate(45 150 50)"/>
    <rect x="0" y="100" width="100" height="100" fill="${c2}"/>
    <g fill="${c0}">
      <rect x="22" y="118" width="8" height="24"/>
      <rect x="14" y="126" width="24" height="8"/>
      <rect x="72" y="118" width="8" height="24"/>
      <rect x="64" y="126" width="24" height="8"/>
      <rect x="22" y="160" width="8" height="24"/>
      <rect x="14" y="168" width="24" height="8"/>
      <rect x="72" y="160" width="8" height="24"/>
      <rect x="64" y="168" width="24" height="8"/>
    </g>
    <rect x="100" y="100" width="100" height="100" fill="${c0}"/>
    <polygon points="150,115 185,185 115,185" fill="${c1}"/>
  </svg>`.trim();
  return {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
    backgroundSize: "130px 130px",
  };
}

export const EMBER_PATTERN = mosaicPattern(["#d6470c", "#ff7a3d", "#f25c19"]);
export const AMBER_PATTERN = mosaicPattern(["#b45309", "#fbbf24", "#f59e0b"]);
export const RUST_PATTERN = mosaicPattern(["#9a3412", "#fb923c", "#ea580c"]);
export const COPPER_PATTERN = mosaicPattern(["#92400e", "#fdba74", "#c2410c"]);

export const WARM_PATTERNS = [
  EMBER_PATTERN,
  AMBER_PATTERN,
  RUST_PATTERN,
  COPPER_PATTERN,
];
