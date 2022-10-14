import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import TouchableBack from "../../components/TouchableBack";

const ItemDetails = () => {
  const { params } = useRoute();
  const { title, imageUrl } = params;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableBack title="رجوع" />
      <Image resizeMode="contain" style={styles.img} source={imageUrl} />
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    fontFamily: "CairoBold",
  },
  img: {
    marginVertical: 20,
    width: 100,
    height: 100,
  },
});
