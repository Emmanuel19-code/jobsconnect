import { View, Text,  Pressable } from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import containerStyles from "../styles/constant";
import constantColors from "../styles/colors";
import InputFieldOne from "../components/InputFieldOne";
import Button from "../components/Button";
import InputFieldThree from "../components/InputFieldThree";


const NextSignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView style={containerStyles.container}>
      <Text
        style={{
          fontFamily: "Merriweather-Black",
          fontSize: 25,
          marginBottom: 10,
        }}
      >
        Sign up to find work you love
      </Text>
      <InputFieldThree
        labelname={"Education"}
        customstyles={{
          margin: 4,
        }}
      />
      <InputFieldOne labelname={"Graduation date"} />
      <InputFieldThree
        labelname={"Work Preference"}
        customstyles={{
          margin: 4,
        }}
      />
      <InputFieldThree
        labelname={"Location"}
        customstyles={{
          margin: 4,
        }}
      />
      <View style={{ margin: 7 }}>
        <Text style={{ fontSize: 13 }}>
          Send me helpful emails to find rewarding work and jobs leads
        </Text>
      </View>
      <View style={{ margin: 7 }}>
        <Text style={{ fontSize: 12 }}>
          Yes I understand and agree to the{" "}
          <Text
            style={{
              color: constantColors.backgroundColor,
              textDecorationLine: "underline",
            }}
          >
            JobsConnect Terms of Services
          </Text>
          including the{" "}
          <Text
            style={{
              color: constantColors.backgroundColor,
              textDecorationLine: "underline",
            }}
          >
            User Agreement
          </Text>
          and
          <Text
            style={{
              color: constantColors.backgroundColor,
              textDecorationLine: "underline",
            }}
          >
            Privacy Policy
          </Text>
        </Text>
      </View>
      <Button
        customstyles={{
          marginTop: 10,
        }}
        name={"Create my account"}
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
        <Pressable style={{ marginLeft: 5 }} onPress={()=>navigation.navigate("login")}>
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

export default NextSignUp;
