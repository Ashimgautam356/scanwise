import { StyleSheet } from "react-native";
import { AppText, Screen } from "../../src/components";
import { spacing } from "../../src/theme";

export default function HistoryScreen() {
  return (
    <Screen scroll={false} contentStyle={styles.content}>
      <AppText variant="display">History</AppText>
      <AppText>Your scanned products will appear here.</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    gap: spacing.md,
  },
});
