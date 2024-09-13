import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import googleSheet from '../styles/google';

const Google = ({customstyles}) => {
  return (
    <TouchableOpacity style={googleSheet.googleContainer}>
      <Image
        source={require("../assets/google1.png")}
        style={[googleSheet.googleImage,customstyles]}
      />
      <Text style={googleSheet.googleContainerText}>Google</Text>
    </TouchableOpacity>
  );
}

export default Google