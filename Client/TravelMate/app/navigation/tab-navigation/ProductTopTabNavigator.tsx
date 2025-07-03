import ProductBuyScreen from "@/components/ui/screens/products/ProductBuyScreen";
import ProductRentScreen from "@/components/ui/screens/products/ProductRentScreen";
import { COLORS } from "@/constants/colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

export default function ProductTopTabNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 18, fontWeight: "bold" },
        tabBarActiveTintColor: COLORS.dark,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarIndicatorStyle: { backgroundColor: COLORS.primary, height: 3 },
        tabBarStyle: { backgroundColor: COLORS.lightGray, borderRadius: 5 },
      }}
    >
      <TopTab.Screen
        name={"buyItems"}
        options={{ title: "Buy" }}
        component={ProductBuyScreen}
      />
      <TopTab.Screen
        name={"RentItems"}
        options={{ title: "Rent" }}
        component={ProductRentScreen}
      />
    </TopTab.Navigator>
  );
}
