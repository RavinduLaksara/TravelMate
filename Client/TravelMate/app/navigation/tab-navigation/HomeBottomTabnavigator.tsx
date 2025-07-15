import HomeActivitiesScreen from "@/components/ui/screens/home/HomeActivitiesScreen";
import HomeCartScreen from "@/components/ui/screens/home/HomeCartScreen";
import HomePageScreen from "@/components/ui/screens/home/HomePageScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { Image, TouchableOpacity, Text } from "react-native";
import ProductTopTabNavigator from "./ProductTopTabNavigator";
// import { HeaderTitle } from "@react-navigation/elements";

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator({ navigation }: any) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, focused }: any) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Products") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Activities") {
            iconName = focused ? "list" : "list-outline";
          }
          // @ts-ignore
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
      })}
    >
      <Tab.Screen
        name="Home"
        component={ProductTopTabNavigator}
        options={{
          headerLeft: () => (
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                color: COLORS.white,
                marginLeft: 20,
              }}
            >
              TravelMate
            </Text>
          ),
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Ionicons
                name="person-circle-outline"
                color={COLORS.white}
                size={30}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          ),
          headerBackground: () => (
            <Image
              style={{ flex: 1, backgroundColor: COLORS.dark }}
              resizeMode="cover"
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 600,
            color: COLORS.white,
          },
          headerBackground: () => (
            <Image
              style={{ flex: 1, backgroundColor: COLORS.dark }}
              resizeMode="cover"
            />
          ),
        }}
        name="Products"
        component={ProductTopTabNavigator}
      />
      <Tab.Screen
        options={{
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 600,
            color: COLORS.white,
          },
          headerBackground: () => (
            <Image
              style={{ flex: 1, backgroundColor: COLORS.dark }}
              resizeMode="cover"
            />
          ),
        }}
        name="Cart"
        component={HomeCartScreen}
      />
      <Tab.Screen
        options={{
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 600,
            color: COLORS.white,
          },
          headerBackground: () => (
            <Image
              style={{ flex: 1, backgroundColor: COLORS.dark }}
              resizeMode="cover"
            />
          ),
        }}
        name="Activities"
        component={HomeActivitiesScreen}
      />
    </Tab.Navigator>
  );
}
