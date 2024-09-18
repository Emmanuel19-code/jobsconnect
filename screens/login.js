import { View, Text, Image, TextInput, Switch, Pressable, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import loginStyles from "../styles/login";
import Feather from "@expo/vector-icons/Feather";
import constantColors from "../styles/colors";
import CustomSwitch from "../components/customSwich";
import Google from "../components/google";
import InputFieldOne from "../components/InputFieldOne";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";

const LogIn = ({navigation}) => {
    const [switchValue, setSwitchValue] = useState(false);
     const handleValueChange = (newValue) => {
       setSwitchValue(newValue);
     };
  return (
    <SafeAreaView style={loginStyles.container}>
      <Text style={loginStyles.headerOne}>Let's get you Login!</Text>
      <Text style={loginStyles.headerTwo}>Enter your information below</Text>
      <Google />
      <View style={loginStyles.subContainer}>
        <View style={loginStyles.horinzontalLine}></View>
        <Text style={loginStyles.textOne}>or login with</Text>
        <View style={loginStyles.horinzontalLine}></View>
      </View>
      <InputFieldOne placeholder={"Enter Email"} />
      <PasswordInput />
      <View
        style={{
          marginTop: 20,
          direction: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CustomSwitch value={switchValue} onValueChange={handleValueChange} />
          <Text style={{ marginLeft: 10 }}>Remember me</Text>
        </View>
        <Text style={{ color: constantColors.backgroundColor }}>
          Forgot password?
        </Text>
      </View>
      <Button navigation={navigation} name={"Login"} routname={"dashboard"} />
      <View style={{ justifyContent: "center", marginTop: 12 }}>
        <Text
          style={{
            fontSize: 10,
            textAlign: "center",
          }}
        >
          JobsConnect users cookies for
          <Text style={{ color: constantColors.backgroundColor }}>
            analytics,personalize
          </Text>
          content and
          <Text style={{ color: constantColors.backgroundColor }}>ads.</Text>
          ByUsing JobsConect services, you agree to this use of cookies
        </Text>
      </View>
      <View
        style={{
          marginTop: 25,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Merriweather-Black",
            fontSize: 15,
          }}
        >
          Don't have an account?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("signup")}>
          <Text
            style={{
              color: constantColors.backgroundColor,
              fontFamily: "Merriweather-Black",
              opacity: 0.6,
            }}
          >
            Sign up
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
