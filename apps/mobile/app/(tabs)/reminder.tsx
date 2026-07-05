import { StyleSheet } from "react-native";
import { AppText, Screen } from "../../src/components";
import { spacing } from "../../src/theme";

export default function ReminderScreen() {
  return (
    <Screen scroll={false} contentStyle={styles.content}>
      <AppText variant="display">Reminders</AppText>
      <AppText>Expiry and medicine reminders will appear here.</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    gap: spacing.md,
  },
});
