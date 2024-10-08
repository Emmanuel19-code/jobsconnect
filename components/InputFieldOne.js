import { View, Text,TextInput } from 'react-native'
import React from 'react'
import Feather from "@expo/vector-icons/Feather";
import constantColors from '../styles/colors';

const InputFieldOne = ({customstyles,labelname,showIcon,placeholder,textStyles}) => {
  return (
    <View style={[customstyles]}>
      <Text style={[{ marginLeft: 3 },textStyles]}>{labelname}</Text>
      <View
        style={[
          {
            justifyContent: "start",
            padding: 16,
            borderWidth: 1,
            borderColor: constantColors.borderColor,
            padding: 16,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
         
        ]}
      >
        {showIcon && showIcon}

        <TextInput placeholder={placeholder} style={{ marginLeft: 10 }} />
      </View>
    </View>
  );
}

export default InputFieldOne