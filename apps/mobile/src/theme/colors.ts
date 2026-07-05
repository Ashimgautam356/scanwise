export const colors = {
  primary: "#2563EB",
  primaryPressed: "#1D4ED8",
  background: "#F8FAFC",
  card: "#FFFFFF",
  text: "#111827",
  textMuted: "#6B7280",
  border: "#E5E7EB",
  borderStrong: "#D1D5DB",
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
  white: "#FFFFFF",
} as const;

export type ColorName = keyof typeof colors;
