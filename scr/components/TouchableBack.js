import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TouchableBack = (props) => {
  const { goBack, canGoBack } = useNavigation();
  return (
    canGoBack && (
      <TouchableOpacity
        style={{
          marginTop: -40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 3,
          padding: 10,
          marginRight: -280,
          width: 100,
        }}
        onPress={() => goBack()}
      >
        <Text style={{ fontFamily: "CairoBold", textAlign: "center" }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    )
  );
};

export default TouchableBack;
