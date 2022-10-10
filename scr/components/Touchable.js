import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Touchable = (props) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={{
        marginBottom: 60,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 3,
        padding: 10,
        marginRight: -280,
        width: 100,
      }}
      onPress={() => navigate(props.screen)}
    >
      <Text style={{ fontFamily: "CairoBold", textAlign: "center" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Touchable;
