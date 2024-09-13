import { View, Text,TextInput } from 'react-native'
import React from 'react'
import Feather from "@expo/vector-icons/Feather";
import constantColors from '../styles/colors';

const InputFieldOne = ({customstyles,labelname,showIcon,placeholder}) => {
  return (
    <View style={{ }}>
      <Text style={[{ marginLeft: 3 }, customstyles]}>{labelname}</Text>
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
          customstyles,
        ]}
      >
        {showIcon && showIcon}

        <TextInput placeholder={placeholder} style={{ marginLeft: 10 }} />
      </View>
    </View>
  );
}

export default InputFieldOne