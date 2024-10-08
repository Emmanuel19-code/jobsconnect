import { View, Text, Pressable, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import InputFieldOne from "../components/InputFieldOne";
import constantColors from "../styles/colors";

const ApplicationDetails = () => {
  return (
    <SafeAreaView style={{
         backgroundColor:'white',
         height:"100%"
    }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
        </Pressable>
        <Text
          style={{
            fontSize: 20,

            marginRight: 8,
            fontWeight: 800,
          }}
        >
          Application Details
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/profile.png")} />
        </View>
      </View>
      <View
        style={{
          padding: 10,
        }}
      >
        <InputFieldOne
          labelname={"First Name"}
          customstyles={{
            margin: 4,
          }}
        />
        <InputFieldOne
          labelname={"Last Name"}
          customstyles={{
            margin: 4,
          }}
        />
        <InputFieldOne
          labelname={"Email address"}
          customstyles={{
            margin: 4,
          }}
        />
        <InputFieldOne
          labelname={"Phone number"}
          customstyles={{
            margin: 4,
          }}
        />
        <InputFieldOne
          labelname={"Cover"}
          customstyles={{
            margin: 4,
          }}
        />
        <View style={{ margin: 4 }}>
          <Text style={[{ marginLeft: 3 }]}>Upload CV</Text>
          <Pressable
            style={[
              {
                justifyContent: "center",
                padding: 16,
                borderWidth: 1,
                borderColor: constantColors.borderColor,
                padding: 16,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "gray",
                height: 60,
                marginTop: 2,
              },
            ]}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
              Upload File
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            
            marginTop: 20,
          }}
        >
          <Pressable
            style={{
            
              backgroundColor: "rgba(106, 57, 147, 1)",
              paddingTop: 12,
              paddingLeft: 16,
              paddingBottom: 12,
              paddingRight: 16,
              borderRadius: 10,
              height:50,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {}}
          >
            <Text
              style={{
                color: "white",
                marginRight: 2,
              }}
            >
              Apply Now
            </Text>
            
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ApplicationDetails;
