export const colors = {
  background: "#0a0a0f",
  foreground: "#ededed",
  gold: "#D4A843",
  goldLight: "#F5C542",
  goldDark: "#8B7331",
  marbleDark: "#1a1a2e",
  selection: "rgba(212, 168, 67, 0.3)",
} as const;

export const goldMaterial = {
  color: colors.gold,
  emissive: colors.goldLight,
  emissiveIntensity: 0.15,
  metalness: 0.9,
  roughness: 0.15,
} as const;
