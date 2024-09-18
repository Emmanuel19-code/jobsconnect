import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import confirmStyles from "../styles/confirm";

const Verification = () => {
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
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Image
          source={require("../assets/touchId.png")}
          style={{ width: 248, height: 248 }}
        />
      </View>

      <Text
        style={{
          marginTop: 30,
          fontFamily: "Merriweather-Black",
          fontSize: 25,
        }}
      >
        Confirm that it's you
      </Text>
      <Text style={{ color: "#e2e8f0" }}>
        We've sent an email{" "}
        <Text style={{ fontWeight: "bold", color: "black" }}>
          (+233) 54*********73
        </Text>{" "}
        with a four digit code. Enter the code below and press{" "}
        <Text style={{ color: "black", fontWeight: "bold" }}>Next.</Text>
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            width: 70,
            height: 70,
            borderRadius: 5,
            borderColor: "#e2e8f0",
          }}
        >
          <TextInput />
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            width: 70,
            height: 70,
            borderRadius: 5,
            borderColor: "#e2e8f0",
          }}
        >
          <TextInput />
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            width: 70,
            height: 70,
            borderRadius: 5,
            borderColor: "#e2e8f0",
          }}
        >
          <TextInput />
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            width: 70,
            height: 70,
            borderRadius: 5,
            borderColor: "#e2e8f0",
          }}
        >
          <TextInput />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#7e22ce" }}>Resend</Text>
        <Text style={{ color: "#7e22ce" }}>Try another method</Text>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
