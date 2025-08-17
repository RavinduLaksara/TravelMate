import { Text, View, Image, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "@/constants/colors";
import { useState } from "react";
import PrimaryButton from "@/components/share/PrimaryButton";
import getBaseUrl from "@/constants/BASEURL";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ForgetPasswordScreen({ navigation }: any) {
  const logo = require("../../../../assets/images/logo/logo.png");
  const [email, setEmail] = useState("");

  // Handle Backend
  const getEmail = async () => {
    try {
      if (!email) {
        Alert.alert("Error", "Email Required!");
        return;
      }

      const response = await axios.post(
        `${getBaseUrl()}user/reset-password/verify-email`,
        {
          email,
        }
      );

      if (response.data.token) {
        await AsyncStorage.setItem("token", response.data.token);
        navigation.navigate("forgetpasswordVerifyEmail");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </View>
      <View>
        <Text style={{ fontSize: 32, fontWeight: "bold", color: COLORS.dark }}>
          Reset Password
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.mediumGray,
            alignSelf: "center",
          }}
        >
          Verify Your Account
        </Text>
      </View>
      <View style={styles.inputOuter}>
        {/* Email Input */}
        <View style={styles.formGroup}>
          <TextInput
            label="Enter Your Email"
            mode={"outlined"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            left={<TextInput.Icon icon="email-outline" color={COLORS.dark} />}
            outlineColor={COLORS.dark}
            activeOutlineColor={COLORS.dark}
            style={[{ width: 300, letterSpacing: 2 }]}
            theme={{ roundness: 50, colors: { placeholder: COLORS.dark } }}
          />
        </View>

        {/*  Button */}
        <PrimaryButton
          text="Send OTP"
          onPress={() => {
            getEmail();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
  },
  logoWrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 500,
    height: 150,
  },
  inputOuter: {
    marginTop: 40,
  },
  formGroup: {
    marginBottom: 30,
  },
  forgotPasswordButton: {
    marginBottom: 15,
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: COLORS.dark,
    fontWeight: "bold",
  },
});
