import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen } from "../screens";
import ButtomTab from "./ButtomTab";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const [fontsLoaded] = useFonts({
    Cairo: require("../../assets/fonts/static/Cairo-SemiBold.ttf"),
  });
  const [fontsLoaded2] = useFonts({
    CairoBold: require("../../assets/fonts/static/Cairo-Bold.ttf"),
  });
  const [fontsLoaded3] = useFonts({
    CairoRegular: require("../../assets/fonts/static/Cairo-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  if (!fontsLoaded2) {
    return null;
  }
  if (!fontsLoaded3) {
    return null;
  }
  return (
    <>
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        <Stack.Screen
          options={{ headerShown: false, animation: "flip" }}
          name="OnBoardingScreen"
          component={OnBoardingScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
            gestureEnabled: true,
          }}
          name="ButtomTab"
          component={ButtomTab}
        />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </>
  );
};
export default MainNavigation;
