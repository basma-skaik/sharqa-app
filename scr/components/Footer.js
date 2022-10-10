import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.footerContanier, { width }]}>
      <TouchableWithoutFeedback
        style={styles.footerItems}
        onPress={() => navigation.navigate("ContactUs")}
      >
        <Image source={require("../../assets/footerImages/phone-call.png")} />
        <Text style={styles.text}>اتصل بنا</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={styles.footerItems}
        onPress={() => navigation.navigate("WhosUsScreen")}
      >
        <Image source={require("../../assets/footerImages/.png")} />
        <Text style={styles.text}>من نحن</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={styles.footerItems}
        onPress={() => navigation.navigate("FlexboxScreen")}
      >
        <Image source={require("../../assets/footerImages/house.png")} />
        <Text style={styles.text}>الرئيسية</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContanier: {
    backgroundColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    position: "absolute",
    paddingVertical: 20,
    marginTop: 883,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  footerItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 8,
    fontFamily: "Cairo",
    paddingVertical: 20,
  },
});
