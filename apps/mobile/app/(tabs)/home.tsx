import { StyleSheet } from "react-native";
import { AppText, Screen } from "../../src/components";
import { spacing } from "../../src/theme";

export default function HomeScreen() {
  return (
    <Screen scroll={false} contentStyle={styles.content}>
      <AppText variant="display">Home</AppText>
      <AppText>ScanWise dashboard will live here.</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    gap: spacing.md,
  },
});
