import ActiityCartWidget from "@/components/share/ActivityCardWidget";
import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeActivitiesScreen() {
  return (
    <ScrollView style={styles.container}>
      <ActiityCartWidget />
      <ActiityCartWidget />
      <ActiityCartWidget />
      <ActiityCartWidget />
      <ActiityCartWidget />
      <ActiityCartWidget />
      <ActiityCartWidget />
      <ActiityCartWidget />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray,
    flex: 1,
  },
});
