import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

const OnFlexBoxItem = ({ title, imageUrl }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.flexContanier, { width }]}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={imageUrl} resizeMode="contain" />
        </View>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </View>
  );
};

export default OnFlexBoxItem;

const styles = StyleSheet.create({
  flexContanier: {
    padding: 15,
    flex: 1,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: "#fff",
    borderRadius: 7,
    flex: 1,
    height: 150,
    padding: 10,
  },
  imageContainer: {
    borderColor: "#A2AFCE",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "#F8F8FF",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Cairo",
  },
});
