import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dots = ({ index, activeIndex }) => {
  const customStyle =
    index === activeIndex ? styles.primaryBullet : styles.grayBullet;
  return <View style={[customStyle, styles.mainDotContainer]} />;
};

export default Dots;

const styles = StyleSheet.create({
  mainDotContainer: {
    marginHorizontal: 2,
    borderRadius: 15 / 2,
    alignSelf: "center",
  },
  primaryBullet: {
    height: 15,
    width: 15,
    backgroundColor: "#AEAEAE",
  },
  grayBullet: {
    height: 10,
    width: 10,
    backgroundColor: "black",
  },
});
