import HomeActivitiesScreen from "@/components/ui/screens/home/HomeActivitiesScreen";
import HomeCartScreen from "@/components/ui/screens/home/HomeCartScreen";
import HomePageScreen from "@/components/ui/screens/home/HomePageScreen";
import HomeProductsScreen from "@/components/ui/screens/home/HomeProductsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { Image, Touchable, TouchableOpacity } from "react-native";
const logo = require("../../../assets/images/logo/logo.png");

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
        component={HomePageScreen}
        options={{
          headerLeft: () => (
            <Image
              source={logo}
              resizeMode={"contain"}
              style={{ width: 130, height: 80, marginLeft: -15 }}
            />
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
                color={COLORS.primary}
                size={30}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Products" component={HomeProductsScreen} />
      <Tab.Screen name="Cart" component={HomeCartScreen} />
      <Tab.Screen name="Activities" component={HomeActivitiesScreen} />
    </Tab.Navigator>
  );
}
