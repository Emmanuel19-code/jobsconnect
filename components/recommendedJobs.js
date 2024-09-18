import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const RecommendedJobs = () => {
  return (
    <Pressable
      style={{
        borderWidth: 1,
        borderColor: "#e2e8f0",
        padding: 10,
        width: 200,
        height: 65,
        borderRadius: 5,
        margin: 2,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        shadow: 2,
      }}
    >
      <View
        style={{
          width: 48,
          height: 48,
          borderWidth: 1,
          borderColor: "#f4ecfd",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 2,
          marginHorizontal: 4,
          backgroundColor: "#e2e8f0",
          borderRadius: 5,
        }}
      >
        <Image
          source={require("../assets/google1.png")}
          style={{
            width: 25,
            height: 25,
            tintColor: "white",
          }}
        />
      </View>

      <View>
        <Text style={{ fontFamily: "Merriweather-Black" }}>
          Sr. UX Designer
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 12, color: "#000000" }}>Google</Text>
          <Text style={{ fontSize: 13, color: "#6A3993" }}>$2.4K/mo</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RecommendedJobs;
