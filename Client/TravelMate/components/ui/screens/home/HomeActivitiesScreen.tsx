import { Text, StyleSheet, View } from "react-native";

export default function HomeActivitiesScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Activities Screen</Text>
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
