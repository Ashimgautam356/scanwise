import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { colors, typography } from "../theme";

type AppTextVariant = "display" | "title" | "body" | "bodySmall" | "label" | "caption";

type AppTextProps = PropsWithChildren<
  TextProps & {
    variant?: AppTextVariant;
    color?: string;
    align?: TextStyle["textAlign"];
    style?: StyleProp<TextStyle>;
  }
>;

export function AppText({
  variant = "body",
  color = colors.text,
  align,
  style,
  children,
  ...props
}: AppTextProps) {
  return (
    <Text {...props} style={[styles.base, styles[variant], { color, textAlign: align }, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    letterSpacing: 0,
  },
  display: {
    fontSize: typography.sizes["2xl"],
    lineHeight: typography.lineHeights["2xl"],
    fontWeight: typography.weights.bold,
  },
  title: {
    fontSize: typography.sizes.xl,
    lineHeight: typography.lineHeights.xl,
    fontWeight: typography.weights.bold,
  },
  body: {
    fontSize: typography.sizes.md,
    lineHeight: typography.lineHeights.md,
    fontWeight: typography.weights.regular,
  },
  bodySmall: {
    fontSize: typography.sizes.sm,
    lineHeight: typography.lineHeights.sm,
    fontWeight: typography.weights.regular,
  },
  label: {
    fontSize: typography.sizes.sm,
    lineHeight: typography.lineHeights.sm,
    fontWeight: typography.weights.semibold,
  },
  caption: {
    fontSize: typography.sizes.xs,
    lineHeight: typography.lineHeights.xs,
    fontWeight: typography.weights.medium,
  },
});
