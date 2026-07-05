import { StyleSheet } from "react-native";
import { AppText, Screen } from "../../src/components";
import { spacing } from "../../src/theme";

export default function ScanScreen() {
  return (
    <Screen scroll={false} contentStyle={styles.content}>
      <AppText variant="display">Scan</AppText>
      <AppText>Camera scanning will live here.</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    gap: spacing.md,
  },
});
