import { View, Text, Image } from "react-native";
import React from "react";

const Testimonials = () => {
  return (
    <View
      style={{
        margin:5,
        backgroundColor: "rgba(242, 242, 242, 1)",
        padding: 20,
        borderRadius: 10,
        flex:1
      }}
    >
      <Text>Employees and Testimonials</Text>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={{ marginRight: 5 }}>
          <Image source={require("../assets/userImage.png")} />
        </View>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Nathan</Text>
          <Text style={{ fontSize: 13, color: "#797979", fontWeight: "400" }}>
            August 28,2022
          </Text>
        </View>
      </View>
      <Text style={{}}>
        Great company to work for with very smart people. The best part of
        working here is the flexibilty.
      </Text>
    </View>
  );
};

export default Testimonials;
