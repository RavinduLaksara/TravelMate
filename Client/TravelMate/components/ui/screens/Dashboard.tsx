import PrimaryButton from "@/components/share/PrimaryButton";
import { StyleSheet, View } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {PrimaryButton("Login", () => console.log("Press"))}
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
