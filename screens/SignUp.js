import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import containerStyles from "../styles/constant";
import Google from "../components/google";
import HorizontalLine from "../components/horizontalLine";
import constantColors from "../styles/colors";
import InputFieldTwo from "../components/InputFieldTwo";
import InputFieldOne from "../components/InputFieldOne";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import Feather from "@expo/vector-icons/Feather";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={containerStyles.container}>
      <Text
        style={{
          fontFamily: "Merriweather-Black",
          fontSize: 25,
        }}
      >
        Sign up to find work you love
      </Text>
      <Google
        customstyles={{
          marginTop: 0,
        }}
      />
      <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
        <HorizontalLine />
        <Text style={{ fontFamily: "Merriweather-Black" }}>or</Text>
        <HorizontalLine />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 5,
          flex: 1,
        }}
      >
        <InputFieldOne
          labelname={"Email"}
          customstyles={{
            flex: 1,
            margin: 2,
          }}
        />

        <InputFieldOne
          labelname={"Last name"}
          customstyles={{
            flex: 1,
            margin: 2,
          }}
        />
      </View>
      <InputFieldOne
        labelname={"Email"}
        showIcon={<Feather name="mail" size={24} color="#e2e8f0" />}
        placeholder={"Enter Email"}
      />
      <InputFieldOne
        labelname={"Phone nummber"}
        showIcon={
          <Feather name="phone" size={24} color={constantColors.borderColor} />
        }
        placeholder={"Enter Phone number"}
      />
      <PasswordInput labelname={"Password"} />
      <PasswordInput labelname={"Confirm Password"} />
      <Button
        navigation={navigation}
        customstyles={{
          marginTop: 10,
        }}
        name={"Next"}
        routname={"nextsignup"}
        
      />
      <View
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          marginTop: 14,
        }}
      >
        <Text style={{ textAlign: "center", fontFamily: "Merriweather-Black" }}>
          Already have an account?
        </Text>
        <Pressable
          style={{ marginLeft: 5 }}
          onPress={() => navigation.navigate("login")}
        >
          <Text
            style={{
              fontFamily: "Merriweather-Black",
              color: constantColors.backgroundColor,
              opacity: 0.6,
            }}
          >
            Log In
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
