import { Stack } from "expo-router";
import QueryProvider from "../src/providers/QueryProvider";

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryProvider>
  );
}
