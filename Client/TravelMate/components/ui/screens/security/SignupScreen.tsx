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
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import getBaseUrl from "@/constants/BASEURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signupscreen({ navigation }: any) {
  const logo = require("../../../../assets/images/logo/logo.png");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [passwordDisplayState, setPasswordDisplayState] = useState(false);

  // Handle backend
  const handleSignup = async () => {
    if (!email || !password || !displayName) {
      Alert.alert("Error", "All feilds are required!");
      return;
    }

    try {
      const response = await axios.post(`${getBaseUrl()}user/create-user`, {
        email,
        password,
        displayName,
      });

      if (response.data.token) {
        await AsyncStorage.setItem("token", response.data.token);
        navigation.navigate("SignupVerifyEmail");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: COLORS.dark,
            alignSelf: "center",
          }}
        >
          Get Started
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.mediumGray,
            alignSelf: "center",
          }}
        >
          Let&#39;s Join with Us
        </Text>
      </View>
      <View style={styles.inputOuter}>
        {/* Email Input */}
        <View style={styles.formGroup}>
          <TextInput
            label="Email"
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
        {/* Display Name */}
        <View style={styles.formGroup}>
          <TextInput
            label="Display Name"
            mode={"outlined"}
            value={displayName}
            onChangeText={(text) => setDisplayName(text)}
            left={<TextInput.Icon icon="account-outline" color={COLORS.dark} />}
            outlineColor={COLORS.dark}
            activeOutlineColor={COLORS.dark}
            style={[{ width: 300, letterSpacing: 2 }]}
            theme={{ roundness: 50, colors: { placeholder: COLORS.dark } }}
          />
        </View>
        {/* Password Input */}
        <View style={{ ...styles.formGroup, marginBottom: 20 }}>
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

        {/* Sign up Button */}
        <PrimaryButton
          text="Sign Up"
          onPress={() => {
            handleSignup();
          }}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              marginTop: 25,
              color: COLORS.dark,
              fontSize: 14,
              alignSelf: "center",
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Allready have an Account? Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
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
    alignItems: "center",
    marginTop: 40,
  },
  formGroup: {
    marginBottom: 10,
  },
});
