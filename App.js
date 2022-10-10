import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Cairo: require("./assets/fonts/static/Cairo-SemiBold.ttf"),
  });
  const [fontsLoaded2] = useFonts({
    CairoBold: require("./assets/fonts/static/Cairo-Bold.ttf"),
  });
  const [fontsLoaded3] = useFonts({
    CairoRegular: require("./assets/fonts/static/Cairo-Regular.ttf"),
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
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
