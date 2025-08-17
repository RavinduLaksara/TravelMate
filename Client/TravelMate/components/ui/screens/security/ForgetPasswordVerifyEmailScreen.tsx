import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "@/constants/colors";
import { useState } from "react";
import PrimaryButton from "@/components/share/PrimaryButton";
import getBaseUrl from "@/constants/BASEURL";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ForgetPasswordVerifyEmailScreen({ navigation }: any) {
  const logo = require("../../../../assets/images/logo/logo.png");
  const [otp, setOtp] = useState("");

  // Handle Backend
  const verifyOtp = async () => {
    try {
      if (!otp) {
        Alert.alert("Error", "OTP is Required!");
        return;
      }

      const token = await AsyncStorage.getItem("token");

      if (!token) {
        console.log("Token not found!. ");
        navigation.navigate("signupVerifyEmail");
        return;
      }

      const response = await axios.post(
        `${getBaseUrl()}user/reset-password/verify-otp`,
        { otp }, // only otp in body
        {
          headers: {
            Authorization: `Bearer ${token}`, // token in headers
          },
        }
      );

      console.log(response);
      navigation.navigate("ResetPassword");
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
          Verify Your Email
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.mediumGray,
            alignSelf: "center",
          }}
        >
          Please check Your Email
        </Text>
      </View>
      <View style={styles.inputOuter}>
        {/* OTP Input */}
        <View style={styles.formGroup}>
          <TextInput
            label="OTP"
            mode={"outlined"}
            value={otp}
            onChangeText={(text) => setOtp(text)}
            left={<TextInput.Icon icon="numeric" color={COLORS.dark} />}
            outlineColor={COLORS.dark}
            activeOutlineColor={COLORS.dark}
            style={[{ width: 300, letterSpacing: 2 }]}
            theme={{ roundness: 50, colors: { placeholder: COLORS.dark } }}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Resend OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={() => {}}
          >
            <Text style={styles.forgotPasswordText}>Change Email</Text>
          </TouchableOpacity>
        </View>
        {/* Login Button */}
        <PrimaryButton
          text="Verify Email"
          onPress={() => {
            verifyOtp();
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
    marginBottom: 10,
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
