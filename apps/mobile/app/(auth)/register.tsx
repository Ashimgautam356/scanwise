import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText, Button, Logo, Screen } from "../../src/components";
import { routes } from "../../src/constants/routes";
import { colors, spacing } from "../../src/theme";

export default function RegisterScreen() {
  return (
    <Screen contentStyle={styles.content}>
      <Logo />
      <View style={styles.copy}>
        <AppText variant="display" align="center">
          Create Account
        </AppText>
        <AppText variant="body" color={colors.textMuted} align="center">
          Account creation will connect here when backend authentication is ready.
        </AppText>
      </View>
      <Link href={routes.login} asChild>
        <Button>Create Account</Button>
      </Link>
      <Link href={routes.login} asChild>
        <Pressable accessibilityRole="button" hitSlop={8}>
          <AppText variant="label" color={colors.primary} align="center">
            Back to Login
          </AppText>
        </Pressable>
      </Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    gap: spacing["2xl"],
  },
  copy: {
    gap: spacing.sm,
  },
});
