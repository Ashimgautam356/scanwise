import { PropsWithChildren } from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { colors, radius, spacing } from "../theme";
import { AppText } from "./AppText";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = PropsWithChildren<
  PressableProps & {
    variant?: ButtonVariant;
    loading?: boolean;
    fullWidth?: boolean;
    style?: StyleProp<ViewStyle>;
  }
>;

export function Button({
  variant = "primary",
  loading = false,
  disabled,
  fullWidth = true,
  style,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const textColor = variant === "primary" ? colors.white : colors.primary;

  return (
    <Pressable
      accessibilityRole="button"
      {...props}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        fullWidth && styles.fullWidth,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      <View style={styles.content}>
        {loading ? <ActivityIndicator color={textColor} /> : null}
        <AppText variant="label" color={textColor}>
          {children}
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
  },
  fullWidth: {
    width: "100%",
  },
  content: {
    minHeight: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: {
    backgroundColor: "transparent",
  },
  pressed: {
    opacity: 0.82,
  },
  disabled: {
    opacity: 0.64,
  },
});
