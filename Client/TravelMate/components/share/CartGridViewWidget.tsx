import { COLORS } from "@/constants/colors";
import { FONTS } from "@/constants/fonts";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
import { useState } from "react";

export default function CartGridViewWidget({ navigation }: any) {
  const [qty, setQty] = useState(1);
  const changeQty = (value: number) => {
    if (value <= 0) {
      return;
    }
    setQty(value);
  };
  const imageUrl = require("../../assets/images/baackpack_banner.jpg");
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageView}>
        <Image source={imageUrl} resizeMode={"contain"} style={styles.image} />
      </View>
      <View>
        <View>
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
          <View
            style={{
              backgroundColor: COLORS.white,
              width: 40,
              alignItems: "center",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Text style={styles.tagText}>Buy</Text>
          </View>
          <Text style={{ fontFamily: FONTS.regPoppins, fontSize: 16 }}>
            Rs. 19,900
          </Text>
        </View>
        <View style={styles.elementView}>
          <TouchableOpacity
            style={{
              padding: 8,
              borderWidth: 2,
              borderColor: COLORS.primary,
              borderRadius: 10,
            }}
          >
            <Icon source={"heart-outline"} size={18} color={COLORS.dark} />
          </TouchableOpacity>

          {/* Quantity */}
          <View style={styles.qtyView}>
            <TouchableOpacity
              style={{
                borderRightWidth: 2,
                borderRightColor: COLORS.white,
              }}
              onPress={() => changeQty(qty + 1)}
            >
              <Icon source={"plus"} size={16} color={COLORS.dark} />
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity
              style={{ borderLeftWidth: 2, borderLeftColor: COLORS.white }}
              onPress={() => changeQty(qty - 1)}
            >
              <Icon
                source={qty === 1 ? "delete-outline" : "minus"}
                size={16}
                color={COLORS.dark}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 8,
    width: "100%",
    flexDirection: "row",
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 3,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  imageView: {
    width: 130,
    height: 130,
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  elementView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  qtyView: {
    flexDirection: "row",
    gap: 12,
    borderColor: COLORS.primary,
    borderWidth: 2,
    paddingInline: 14,
    paddingBlock: 8,
    borderRadius: 12,
  },
  tagText: {
    fontFamily: FONTS.regPoppins,
    fontWeight: 500,
    color: COLORS.mediumGray,
  },
});
