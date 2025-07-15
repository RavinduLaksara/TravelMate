import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SplashScreen from "@/components/ui/screens/SplashScreen";
import StackNavigator from "../navigation/stack-navigation/StackNavigation";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export default function HomeScreen() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "617455414576-61tg0qs9egu5g5j2c4hfkechsebml2j1.apps.googleusercontent.com",
      profileImageSize: 150,
    });
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <StackNavigator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
