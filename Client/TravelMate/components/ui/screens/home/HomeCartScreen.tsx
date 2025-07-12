import CartGridViewWidget from "@/components/share/CartGridViewWidget";
import { COLORS } from "@/constants/colors";
import { Text, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeCartScreen() {
  return (
    <ScrollView style={styles.container}>
      <CartGridViewWidget />
      <CartGridViewWidget />
      <CartGridViewWidget />
      <CartGridViewWidget />
      <CartGridViewWidget />
      <CartGridViewWidget />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray,
    flex: 1,
    gap: 10,
  },
});
