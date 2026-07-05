import { StyleSheet } from "react-native";
import { AppText, Screen } from "../../src/components";
import { spacing } from "../../src/theme";

export default function ProfileScreen() {
  return (
    <Screen scroll={false} contentStyle={styles.content}>
      <AppText variant="display">Profile</AppText>
      <AppText>Your account settings will appear here.</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    gap: spacing.md,
  },
});
