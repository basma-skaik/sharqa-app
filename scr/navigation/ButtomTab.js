import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ContactUs from "../screens/ContactUs";
import WhosUsScreen from "../screens/WhosUsScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ButtomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="phone"
              size={24}
              color={focused ? "black" : "#00000050"}
            />
          ),
          tabBarLabel: "اتصل بنا",
        }}
        name="ContactUs"
        component={ContactUs}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="infocirlce"
              size={24}
              color={focused ? "black" : "#00000050"}
            />
          ),
          tabBarLabel: "من نحن",
        }}
        name="WhosUsScreen"
        component={WhosUsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? "black" : "#00000050"}
            />
          ),
          tabBarLabel: "الرئيسية",
        }}
        name="HomeStack"
        component={HomeStack}
      />
    </Tab.Navigator>
  );
};

export default ButtomTab;
