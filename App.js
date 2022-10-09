import OnBoardingScreen from "./scr/screens/OnBoardingScreen";
import FlexboxScreen from "./scr/screens/FlexboxScreen";
import WhosUsScreen from "./scr/screens/WhosUsScreen";
import { useFonts } from "expo-font";
import ContactUs from "./scr/screens/ContactUs";
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
  // return <OnBoardingScreen />;
  // return <FlexboxScreen />;
  return <WhosUsScreen />;
  // return <ContactUs />;
}
