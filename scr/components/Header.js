import {
  StyleSheet,
  Image,
  View,
  Text,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import React from "react";

const Header = (props) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <StatusBar backgroundColor={"#7380A1"} />
      <View style={{ width }}>
        <Image
          style={styles.header}
          source={require("../../assets/images/image.png")}
        />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 130,
    marginTop: -30,
    position: "relative",
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    paddingTop: 40,
    fontSize: 16,
    color: "#fff",
    fontFamily: "Cairo",
  },
});
