import { Animated, View, StyleSheet, Image, Text } from "react-native";
import { useEffect, useRef } from "react";
import { COLORS } from "@/constants/colors";
import { FONTS } from "@/constants/fonts";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const logo = require("../../../assets/images/logo/logo.png");
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start(() => {
      onFinish();
    });
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={logo} resizeMode="contain" />
      </View>
      <Text
        style={{
          color: COLORS.dark,
          fontFamily: FONTS.bold,
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        Your Travel Gear Hub.
      </Text>
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightGray,
  },
  logoWrapper: {},
  logo: { height: 150 },
  progressContainer: {
    width: 180,
    height: 6,
    backgroundColor: COLORS.mediumGray,
    overflow: "hidden",
    borderRadius: 5,
    marginTop: 10,
  },
  progressBar: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    height: "100%",
  },
});
