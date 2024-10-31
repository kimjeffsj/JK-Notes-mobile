import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Dashboard from "@/features/Dashboard/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello there</Text>
      <Dashboard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
