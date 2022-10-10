import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./scr/screens/OnBoardingScreen";
import FlexboxScreen from "./scr/screens/FlexboxScreen";
import WhosUsScreen from "./scr/screens/WhosUsScreen";
import ContactUs from "./scr/screens/ContactUs";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="FlexboxScreen" component={FlexboxScreen} />
        <Stack.Screen name="WhosUsScreen" component={WhosUsScreen} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
