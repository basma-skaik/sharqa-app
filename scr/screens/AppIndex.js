import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import OnBoardingScreen from "../screens/OnBoardingScreen";
// import { Pressable } from "react-native";
import ButtomTab from "../navigation/ButtomTab";
// import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const AppIndex = () => {
  const { goBack, canGoBack } = useNavigation();

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
      <Stack.Navigator
        initialRouteName="OnBoardingScreen"
        // screenOptions={{
        //   headerLeft: () =>
        //     canGoBack && (
        //       <Pressable onPress={goBack}>
        //         <FontAwesome5
        //           name="long-arrow-alt-left"
        //           size={24}
        //           color="black"
        //         />
        //       </Pressable>
        //     ),
        // }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="OnBoardingScreen"
          component={OnBoardingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ButtomTab"
          component={ButtomTab}
        />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </>
  );
};
export default AppIndex;
