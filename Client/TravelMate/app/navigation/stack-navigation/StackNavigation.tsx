import { createStackNavigator } from "@react-navigation/stack";
import HomeTabNavigator from "../tab-navigation/HomeBottomTabNavigator";
import LoginScreen from "@/components/ui/screens/security/LoginScreen";
import Signupscreen from "@/components/ui/screens/security/SignupScreen";
import ForgetPasswordScreen from "@/components/ui/screens/security/ForgetPasswordScreen";
import ForgetPasswordVerifyEmailScreen from "@/components/ui/screens/security/ForgetPasswordVerifyEmailScreen";
import SignupVerifyEmailScreen from "@/components/ui/screens/security/SignupVerifyEmail";
import ResetPasswordScreen from "@/components/ui/screens/security/ResetPasswordScreen";
import ProductDetailsScreen from "@/components/ui/screens/others/ProductDetailsScreen";

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Process"
        options={{ headerLeft: () => null, headerShown: false }}
        component={HomeTabNavigator}
      />
      {/* Login Screen */}
      <Stack.Screen
        name="Login"
        options={{ title: "Login Here" }}
        component={LoginScreen}
      />
      {/* Signup Screen */}
      <Stack.Screen
        name="Signup"
        options={{ title: "Signup Here" }}
        component={Signupscreen}
      />
      {/* Forget Passowrd */}
      <Stack.Screen
        name="forgetPassword"
        options={{ title: "Verify Account" }}
        component={ForgetPasswordScreen}
      />
      {/* forget password verify email */}
      <Stack.Screen
        name="forgetpasswordVerifyEmail"
        options={{ title: "Verify Email" }}
        component={ForgetPasswordVerifyEmailScreen}
      />
      {/* Signup verify email */}
      <Stack.Screen
        name="SignupVerifyEmail"
        options={{ title: "Verify Email" }}
        component={SignupVerifyEmailScreen}
      />
      {/* Reset password */}
      <Stack.Screen
        name="ResetPassword"
        options={{ title: "Reset Password" }}
        component={ResetPasswordScreen}
      />
      {/* Product Details */}
      <Stack.Screen
        name="ProductDetails"
        options={{ headerLeft: () => null, headerShown: false }}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
}
