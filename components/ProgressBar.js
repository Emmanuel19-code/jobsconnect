import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

const ProgressBar = ({ rating, percentage }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ marginLeft: 2, marginRight: 2 }}>{rating}</Text>
      <Progress.Bar
        progress={percentage / 100}
        width={150}
        color={"#fcc636"}
        borderColor={"rgba(242, 242, 242, 1)"}
        style={{ backgroundColor: "rgba(242, 242, 242, 1)", borderWidth: 1 }}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>{percentage}</Text>
        <Text>%</Text>
      </View>
    </View>
  );
};

export default ProgressBar;
