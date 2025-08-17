import { Text, View, Image, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "@/constants/colors";
import { useState } from "react";
import PrimaryButton from "@/components/share/PrimaryButton";
import getBaseUrl from "@/constants/BASEURL";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ResetPasswordScreen({ navigation }: any) {
  const logo = require("../../../../assets/images/logo/logo.png");
  const [password, setpassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordDisplayState, setPasswordDisplayState] = useState(false);

  // Handle Backend
  const resetPassowrd = async () => {
    try {
      if (!password || !rePassword) {
        Alert.alert("Error", "All feilds are Required!");
        return;
      }

      if (password !== rePassword) {
        Alert.alert("Error", "password and confirm password not match");
        return;
      }

      const token = await AsyncStorage.getItem("token");

      if (!token) {
        console.log("Token not found!. ");
        navigation.navigate("signupVerifyEmail");
        return;
      }

      const response = await axios.post(
        `${getBaseUrl()}user/reset-password`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      navigation.navigate("Login");
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
          Create a New password
        </Text>
      </View>
      <View style={styles.inputOuter}>
        {/* password Input */}
        <View style={styles.formGroup}>
          <TextInput
            label="Password"
            mode={"outlined"}
            secureTextEntry={passwordDisplayState ? false : true}
            value={password}
            onChangeText={(text) => setpassword(text)}
            left={<TextInput.Icon icon="lock-outline" color={COLORS.dark} />}
            outlineColor={COLORS.dark}
            activeOutlineColor={COLORS.dark}
            style={[{ width: 300, letterSpacing: 2 }]}
            theme={{ roundness: 50, colors: { placeholder: COLORS.dark } }}
            right={
              <TextInput.Icon
                onPress={() => {
                  setPasswordDisplayState(!passwordDisplayState);
                }}
                size={20}
                color={COLORS.dark}
                icon={passwordDisplayState ? "eye" : "eye-off"}
              />
            }
          />
        </View>
        {/* Re-enter password */}
        <View style={{ ...styles.formGroup, marginBottom: 20 }}>
          <TextInput
            label="Re-Enter Password"
            mode={"outlined"}
            secureTextEntry={passwordDisplayState ? false : true}
            value={rePassword}
            onChangeText={(text) => setRePassword(text)}
            left={<TextInput.Icon icon="lock-outline" color={COLORS.dark} />}
            outlineColor={COLORS.dark}
            activeOutlineColor={COLORS.dark}
            style={[{ width: 300, letterSpacing: 2 }]}
            theme={{ roundness: 50, colors: { placeholder: COLORS.dark } }}
            right={
              <TextInput.Icon
                onPress={() => {
                  setPasswordDisplayState(!passwordDisplayState);
                }}
                size={20}
                color={COLORS.dark}
                icon={passwordDisplayState ? "eye" : "eye-off"}
              />
            }
          />
        </View>

        {/* Login Button */}
        <PrimaryButton
          text="Change Password"
          onPress={() => {
            resetPassowrd();
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
