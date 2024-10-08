import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import ProgressBar from "./ProgressBar";
import Testimonials from "./Testimonials";

const ViewJovReview = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: "rgba(242, 242, 242, 1)",
          padding: 20,
          borderRadius: 10,
          margin:5
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/edit_white.png")} />
          <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 4 }}>
            Company Reviews
          </Text>
        </View>
        <View style={{ flexDirection: "row",justifyContent:'space-between',marginTop:5 }}>
          <View>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 700,
              }}
            >
              4
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../assets/Star.png")} />
              <Image source={require("../assets/Star.png")} />
              <Image source={require("../assets/Star.png")} />
              <Image source={require("../assets/Star.png")} />
              <Image source={require("../assets/ashstar.png")} />
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text>1,000</Text>
              <Text>reviews</Text>
            </View>
          </View>
          <View>
             <ProgressBar rating={"5"} percentage={"50"}/>
             <ProgressBar rating={"4"} percentage={"40"}/>
             <ProgressBar rating={"3"} percentage={"30"}/>
             <ProgressBar rating={"2"} percentage={"20"}/>
             <ProgressBar rating={"1"} percentage={"10"}/>
          </View>
        </View>
      </View>
      <Testimonials/>
    </ScrollView>
  );
};

export default ViewJovReview;
