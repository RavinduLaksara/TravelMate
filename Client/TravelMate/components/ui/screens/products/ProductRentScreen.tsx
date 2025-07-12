import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { COLORS } from "@/constants/colors";
import { FONTS } from "@/constants/fonts";
import ProductRentGridWidget from "@/components/share/ProductRentGridWidget";

const categories = [
  "Travel Gear",
  "Outdoor & Camping",
  "Travel Accessories",
  "Photography & Tech",
];

export default function ProductRentScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Travel Gear");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.taglineWrapper}>
        <Text style={styles.tagline}>Travel Smarter, Rent What You Need !</Text>
      </View>
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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.button,
              selectedCategory === category && styles.buttonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.text,
                selectedCategory === category && styles.textActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Grid card */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingRight: 16 }}
      >
        <ProductRentGridWidget navigation={navigation} />
        <ProductRentGridWidget navigation={navigation} />
        <ProductRentGridWidget navigation={navigation} />
        <ProductRentGridWidget navigation={navigation} />
      </ScrollView>

      {/* Recommended section*/}
      <View>
        <View style={styles.tagView}>
          <Text style={styles.tagline}>Recommended for You</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingRight: 16 }}
        >
          <ProductRentGridWidget navigation={navigation} />
          <ProductRentGridWidget navigation={navigation} />
          <ProductRentGridWidget navigation={navigation} />
          <ProductRentGridWidget navigation={navigation} />
        </ScrollView>
      </View>

      {/* Popular section */}
      <View>
        <View style={styles.tagView}>
          <Text style={styles.tagline}>Popular Products</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingRight: 16 }}
        >
          <ProductRentGridWidget navigation={navigation} />
          <ProductRentGridWidget navigation={navigation} />
          <ProductRentGridWidget navigation={navigation} />
          <ProductRentGridWidget navigation={navigation} />
        </ScrollView>
      </View>

      {/* Display items by category */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  taglineWrapper: {
    marginBottom: 15,
  },
  tagline: {
    padding: 10,
    fontSize: 24,
    fontWeight: 600,
    color: COLORS.primary,
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
  scrollContainer: {
    marginTop: 15,
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  buttonActive: {
    backgroundColor: "#EAEFE9",
  },
  text: {
    color: "#888",
    fontWeight: "500",
    fontSize: 16,
  },
  textActive: {
    color: "#305F38",
    fontWeight: "600",
  },
  seeAllText: {
    fontFamily: FONTS.regPoppins,
    fontSize: 16,
    padding: 5,
    color: COLORS.dark,
  },
  tagView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
