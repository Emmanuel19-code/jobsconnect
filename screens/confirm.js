import { View, Text, Pressable,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import confirmStyles from '../styles/confirm'
import Entypo from "@expo/vector-icons/Entypo";
import constantColors from '../styles/colors';
const Confirm = ({navigation}) => {
  return (
    <SafeAreaView style={confirmStyles.container}>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Entypo name="chevron-left" size={30} color="black" />
        <Text style={{ fontFamily: "Merriweather-Black", fontSize: 15 }}>
          Back
        </Text>
      </View>
      <View>
        <Text style={{ fontFamily: "Merriweather-Black", fontSize: 25 }}>
          Confirm that it's you
        </Text>
      </View>
      <Text style={{ color: constantColors.borderColor }}>
        Select which contact details should we use to verify you
      </Text>
      <View>
        <Image />
      </View>
      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 2,
          borderRadius: 11,
          padding: 8,
          borderColor: "",
          marginTop: 5,
        }}
      >
        <View></View>
        <View>
          <Text>Send OTP vis SMS</Text>
          <Text style={{ fontFamily: "Merriweather-Black" }}>
            (233) 54-650-6783
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 2,
          borderRadius: 11,
          padding: 8,
          borderColor: "",
          marginTop: 20,
        }}
      >
        <View></View>
        <View>
          <Text>Send OTP vis Email</Text>
          <Text styel={{ fontFamily: "Merriweather-Black" }}>
            admin@admin.com3
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: constantColors.backgroundColor,
          padding: 10,
          marginTop: 30,
          borderRadius: 10,
          height: 65,
          justifyContent: "center",
        }}
        onPress={()=>navigation.navigate("verify")}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Merriweather-Black",
            fontSize:15
          }}
        >
          Continue
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default Confirm