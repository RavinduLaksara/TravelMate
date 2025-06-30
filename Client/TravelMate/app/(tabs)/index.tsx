import { useState } from "react";
import { View, StyleSheet } from "react-native";
import SplashScreen from "@/components/ui/screens/SplashScreen";
import StackNavigator from "../navigation/stack-navigation/StackNavigation";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <SplashScreen
          onFinish={() => {
            setIsLoading(false);
          }}
        />
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
