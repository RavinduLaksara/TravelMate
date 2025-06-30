import Dashboard from "@/components/ui/screens/Dashboard";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import SplashScreen from "@/components/ui/screens/SplashScreen";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <SplashScreen
          onFinish={() => {
            setIsLoading(false); //false
          }}
        />
      ) : (
        <Dashboard />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
