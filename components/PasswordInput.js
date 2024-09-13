import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import constantColors from "../styles/colors";

const PasswordInput = ({labelname}) => {
  return (
    <View style={{}}>
      <Text style={{ marginBottom: 5, marginLeft: 3 }}>{labelname}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: constantColors.borderColor,
          padding: 16,
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/security.png")}
          style={{
            tintColor: constantColors.borderColor,
            width: 24,
            height: 24,
          }}
        />
        <TextInput secureTextEntry={true} placeholder="Password(8 or more characters)" />
      </View>
    </View>
  );
};

export default PasswordInput;
