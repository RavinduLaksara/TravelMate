import { COLORS } from "@/constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ProductDetailsScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
});
