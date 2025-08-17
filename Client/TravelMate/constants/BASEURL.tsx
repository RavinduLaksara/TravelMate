import { Platform } from "react-native";

export default function getBaseUrl() {
  // For web browser (Expo Web)
  if (Platform.OS === "web") {
    return "http://localhost:3000/api/v1/";
  }

  // For Android Emulator
  if (Platform.OS === "android") {
    return "http://10.0.2.2:3000/api/v1/"; // special alias for localhost
  }

  // For iOS Simulator
  if (Platform.OS === "ios") {
    return "http://localhost:3000/api/v1/";
  }

  // For real devices (Android/iOS) on same WiFi
  return "http://192.168.1.100:3000/api/v1/";
}
