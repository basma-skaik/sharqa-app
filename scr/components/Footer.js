import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footerContanier}>
      <View style={styles.footerItems}>
        <Image source={require("../../assets/footerImages/phone-call.png")} />
        <Text style={styles.text}>اتصل بنا</Text>
      </View>
      <View style={styles.footerItems}>
        <Image source={require("../../assets/footerImages/.png")} />
        <Text style={styles.text}>من نحن</Text>
      </View>
      <View style={styles.footerItems}>
        <Image source={require("../../assets/footerImages/house.png")} />
        <Text style={styles.text}>الرئيسية</Text>
      </View>
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
