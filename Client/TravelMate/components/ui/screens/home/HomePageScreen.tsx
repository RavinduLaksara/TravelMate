import { Text, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { COLORS } from "@/constants/colors";

export default function HomePageScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <ScrollView style={styles.container}>
      {/* Tag Line */}
      <View>
        <Text>Get Ready to Go: Rent or Buy Travel Gear Easily !</Text>
      </View>
      {/* Search bar */}
      <View>
        <Searchbar
          placeholder="Search Products"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
          iconColor={COLORS.dark}
          inputStyle={styles.searchInput}
          theme={{
            colors: { placeholder: COLORS.dark },
          }}
        />
      </View>
      {/* Buy Items */}
      <View>
        <Text>Buy Travel Essentials, Ready When You Are.</Text>
      </View>
      {/* Rent Items */}
      <View></View>
      {/* Recommented */}
      <View></View>
      {/* Popular */}
      <View></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  searchbar: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
    height: 40,
  },
  searchInput: {
    color: COLORS.mediumGray,
    fontSize: 14,
    alignSelf: "center",
  },
});
