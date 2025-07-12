import { COLORS } from "@/constants/colors";
import { FONTS } from "@/constants/fonts";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";

export default function ProductGridViewWidget({ navigation }: any) {
  const imageUri = require("../../assets/images/baackpack_banner.jpg");
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("ProductDetails");
      }}
    >
      <TouchableOpacity style={styles.instock}>
        <Text
          style={{
            fontFamily: FONTS.regPoppins,
            fontWeight: 500,
            color: COLORS.mediumGray,
          }}
        >
          In Stock
        </Text>
      </TouchableOpacity>
      <View style={styles.imageWrapper}>
        <Image source={imageUri} resizeMode={"contain"} style={styles.image} />
      </View>
      <Text style={{ fontFamily: FONTS.semiBold }}>Hiking Backpack (80L)</Text>
      <Text
        style={{
          fontFamily: FONTS.regPoppins,
          marginTop: 5,
          color: COLORS.dark,
          fontWeight: 700,
        }}
      >
        Rs. 19,900
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    padding: 15,
    backgroundColor: COLORS.white,
    width: 180,
    margin: 8,
    justifyContent: "space-between",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    marginBottom: 12,
    padding: 5,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
  },
  instock: {
    width: 80,
    height: 20,
    backgroundColor: COLORS.lightGray,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 5,
    top: 7,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
