import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
const ContactUs = () => {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.container, { width }]}>
      <Header title="تواصل معنا" />
      <View style={styles.imgContainer}>
        <Image
          style={styles.qrBorder}
          source={require("../../../assets/images/qrborder.png")}
        />
        <Image
          style={styles.qrCode}
          source={require("../../../assets/images/qrcode.png")}
        />
        <Image
          style={styles.qrScan}
          source={require("../../../assets/images/Scaning.png")}
        />
      </View>
      <Text style={styles.contactText}>تواصل معنا على:</Text>
      <Text style={styles.contactFullText}>
        infa@afaa8.com{"\n"}
        0096652709005{"\n"}
        العنوان : المملكة العربية{"\n"}
        السعودية
      </Text>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  qrBorder: {
    position: "relative",
  },
  qrCode: {
    position: "absolute",
    margin: 33,
  },
  qrScan: {
    position: "absolute",
    marginTop: 198.7,
  },
  imgContainer: {
    marginVertical: 83,
    alignSelf: "center",
  },
  contactText: {
    fontFamily: "CairoBold",
    fontSize: 22,
    marginRight: 60,
    marginLeft: 159,
    marginBottom: 22,
  },
  contactFullText: {
    textAlign: "right",
    fontFamily: "CairoRegular",
    fontSize: 22,
    marginRight: 60,
    marginLeft: 99,
  },
});
