import { View, Text,Pressable } from 'react-native'
import React from 'react'
import constantColors from '../styles/colors';
import loginStyles from '../styles/login';

const Button = ({navigation,customstyles,name}) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("nextsignup")}
      style={[
        loginStyles.googleContainer,
        {
          padding: 20,
          marginTop: 50,
          backgroundColor: constantColors.backgroundColor,
          opacity: 0.2,
        },
        customstyles
      ]}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontFamily: "Merriweather-Black",
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
}

export default Button