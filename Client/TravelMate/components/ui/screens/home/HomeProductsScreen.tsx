import { Text, StyleSheet, View } from "react-native";

export default function HomeCScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Products Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
