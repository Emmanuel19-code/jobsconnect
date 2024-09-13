import { View, Text,TextInput } from 'react-native'
import React from 'react'
import constantColors from '../styles/colors';

const InputFieldTwo = ({labelname}) => {
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Text style={{ marginBottom:5,marginLeft:3 }}>{labelname}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: constantColors.borderColor,
          padding: 11,
          borderRadius:6
        }}
      >
        <TextInput />
      </View>
    </View>
  );
}

export default InputFieldTwo