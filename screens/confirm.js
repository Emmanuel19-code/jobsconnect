import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import confirmStyles from '../styles/confirm'
import Entypo from "@expo/vector-icons/Entypo";
import constantColors from '../styles/colors';
const Confirm = () => {
  return (
    <SafeAreaView style={confirmStyles.container}>
      <View style={{display:"flex",flexDirection:"row",alignItems:"center" }}>
        <Entypo name="chevron-left" size={30} color="black" />
        <Text style={{ fontFamily: "Merriweather-Black",fontSize:15 }}>Back</Text>
      </View>
      <View>
         <Text style={{ fontFamily:"Merriweather-Black",fontSize:25 }}>Confirm that it's you</Text>
      </View>
      <Text style={{ color:constantColors.backgroundColor }}>Select which contact details should we use to verify you</Text>
    </SafeAreaView>
  );
}

export default Confirm