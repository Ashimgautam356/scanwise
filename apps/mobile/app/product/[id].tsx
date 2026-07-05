import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { AppText, Screen } from "../../src/components";
import { spacing } from "../../src/theme";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Screen scroll={false} contentStyle={styles.content}>
      <AppText variant="display">Product</AppText>
      <AppText>Product ID: {id}</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    gap: spacing.md,
  },
});
