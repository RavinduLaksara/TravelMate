import { createStackNavigator } from "@react-navigation/stack";
import HomeTabNavigator from "../tab-navigation/HomeBottomTabnavigator";

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Process"
        options={{ headerLeft: () => null, headerShown: false }}
        component={HomeTabNavigator}
      />
    </Stack.Navigator>
  );
}
