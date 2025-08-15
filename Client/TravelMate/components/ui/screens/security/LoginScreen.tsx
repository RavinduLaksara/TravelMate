import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "@/constants/colors";
import { useState } from "react";
import PrimaryButton from "@/components/share/PrimaryButton";

export default function LoginScreen({ navigation }: any) {
  // For google sign in
  const [isSubmitting, setIsSubmitting] = useState(false);

  const logo = require("../../../../assets/images/logo/logo.png");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordDisplayState, setPasswordDisplayState] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </View>
      <View>
        <Text style={{ fontSize: 32, fontWeight: "bold", color: COLORS.dark }}>
          Welcome Back
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.mediumGray,
            alignSelf: "center",
          }}
        >
          Login to your account
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
        {/* Password Input */}
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
        <View>
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={() => {
              navigation.navigate("forgetPassword");
            }}
          >
            <Text style={styles.forgotPasswordText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        {/* Login Button */}
        <PrimaryButton
          text="Login"
          onPress={() => {
            navigation.navigate("Process");
          }}
        />
        {/* Google Login */}
        <Text
          style={{
            marginBlock: 10,
            alignSelf: "center",
            fontSize: 12,
            color: COLORS.mediumGray,
          }}
        >
          OR
        </Text>
        {/* <PrimaryButton
          text="Sign in With Google"
          onPress={handleGoogleSignIn}
          // disabled={isSubmitting}
        /> */}
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
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
            Haven&#39;t Account? Create Now
          </Text>
        </TouchableOpacity>
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
