import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText, Button, Divider, Input, Logo, Screen } from "../../src/components";
import { routes } from "../../src/constants/routes";
import { useBoolean } from "../../src/hooks/useBoolean";
import { colors, radius, spacing } from "../../src/theme";
import { LoginFormValues, loginSchema } from "../../src/utils/authValidation";

export default function LoginScreen() {
  const passwordVisible = useBoolean(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (_values: LoginFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    router.replace("/(tabs)/home");
  };

  return (
    <Screen contentStyle={styles.screenContent}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.titleGroup}>
          <AppText variant="display" align="center">
            Welcome Back
          </AppText>
          <AppText variant="body" color={colors.textMuted} align="center">
            Sign in to scan products, save insights, and keep reminders in one place.
          </AppText>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.form}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onBlur, onChange, value } }) => (
              <Input
                label="Email"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={errors.email?.message}
                placeholder="you@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
                returnKeyType="next"
                accessibilityLabel="Email address"
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onBlur, onChange, value } }) => (
              <Input
                label="Password"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={errors.password?.message}
                placeholder="Enter your password"
                secureTextEntry={!passwordVisible.value}
                autoCapitalize="none"
                autoComplete="password"
                textContentType="password"
                returnKeyType="done"
                accessibilityLabel="Password"
                rightElement={
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={passwordVisible.value ? "Hide password" : "Show password"}
                    hitSlop={8}
                    onPress={passwordVisible.toggle}
                  >
                    <AppText variant="label" color={colors.primary}>
                      {passwordVisible.value ? "Hide" : "Show"}
                    </AppText>
                  </Pressable>
                }
              />
            )}
          />

          <Link href={routes.forgotPassword} asChild>
            <Pressable accessibilityRole="button" style={styles.forgotButton}>
              <AppText variant="label" color={colors.primary}>
                Forgot Password?
              </AppText>
            </Pressable>
          </Link>

          <Button loading={isSubmitting} onPress={handleSubmit(onSubmit)}>
            Log In
          </Button>
        </View>

        <Divider label="OR" />

        <Button variant="secondary" onPress={() => undefined}>
          Continue with Google
        </Button>
      </View>

      <View style={styles.footer}>
        <AppText variant="bodySmall" color={colors.textMuted}>
          New to ScanWise?
        </AppText>
        <Link href={routes.register} asChild>
          <Pressable accessibilityRole="button" hitSlop={8}>
            <AppText variant="label" color={colors.primary}>
              Create Account
            </AppText>
          </Pressable>
        </Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContent: {
    justifyContent: "center",
    gap: spacing["3xl"],
  },
  header: {
    gap: spacing["2xl"],
    alignItems: "center",
  },
  titleGroup: {
    gap: spacing.sm,
  },
  card: {
    gap: spacing["2xl"],
    padding: spacing["2xl"],
    borderRadius: radius.lg,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  form: {
    gap: spacing.lg,
  },
  forgotButton: {
    alignSelf: "flex-end",
    paddingVertical: spacing.xs,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.sm,
  },
});
