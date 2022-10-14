import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

const OnBoardingItem = ({ imageUrl }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.imgContanierStyle, { width }]}>
      <Image source={imageUrl} />
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  imgContanierStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
});
