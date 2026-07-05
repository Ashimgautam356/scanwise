import { StyleSheet, View } from "react-native";
import { colors, radius, spacing } from "../theme";
import { AppText } from "./AppText";

export function Logo() {
  return (
    <View style={styles.container} accessibilityRole="image" accessibilityLabel="ScanWise logo">
      <View style={styles.mark}>
        <View style={styles.scanLine} />
        <AppText variant="title" color={colors.white}>
          S
        </AppText>
      </View>
      <AppText variant="title">ScanWise</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: spacing.md,
  },
  mark: {
    width: 72,
    height: 72,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: colors.primary,
  },
  scanLine: {
    position: "absolute",
    left: 12,
    right: 12,
    top: 26,
    height: 3,
    borderRadius: radius.pill,
    backgroundColor: colors.success,
  },
});
