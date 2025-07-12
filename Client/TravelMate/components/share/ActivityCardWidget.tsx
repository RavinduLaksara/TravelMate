import { COLORS } from "@/constants/colors";
import { FONTS } from "@/constants/fonts";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ActiityCartWidget() {
  const image = require("../../assets/images/baackpack_banner.jpg");
  return (
    <TouchableOpacity style={styles.container}>
      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image source={image} resizeMode={"contain"} style={styles.image} />
      </View>
      {/* Details */}
      <View style={{ gap: 5, marginTop: 10 }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: 16,
            color: COLORS.dark,
            fontWeight: 500,
          }}
        >
          Hiking Backpack (80L)
        </Text>
        <Text style={{ fontFamily: FONTS.regPoppins, fontSize: 14 }}>
          1 Item(s)
        </Text>
        <Text style={{ fontFamily: FONTS.regPoppins, fontSize: 14 }}>
          Rs. 19,900
        </Text>
      </View>
      {/* Buy/Rent */}
      <View style={styles.tagView}>
        <Text style={styles.tagText}>Buy</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 5,
    width: "100%",
    flexDirection: "row",
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 3,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    gap: 10,
    alignItems: "center",
  },
  imageWrapper: {
    width: 80,
    height: 80,
    margin: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  tagView: {
    backgroundColor: COLORS.white,
    width: 40,
    height: 20,
    alignItems: "center",
    marginLeft: 15,
    borderRadius: 10,
  },
  tagText: {
    fontFamily: FONTS.regPoppins,
    fontWeight: 500,
    color: COLORS.mediumGray,
  },
});
