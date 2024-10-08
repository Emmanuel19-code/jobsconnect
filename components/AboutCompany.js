import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const AboutCompany = () => {
  return (
    <ScrollView
      style={{ margin: 5, borderRadius: 10, flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: "rgba(242, 242, 242, 1)",
          padding: 20,
          borderRadius: 10,
          margin: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/edit_white.png")} />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginLeft: 10,
              fontFamily: "Poppins-Black",
            }}
          >
            About Company
          </Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: "300", marginTop: 5 }}>
          IBM is a leading cloud platform and cognitive Solutions company.
          Restlessly reinventing since 1911. we are the largest technology and
          consulting employer serving clients in 170 countries
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(242, 242, 242, 1)",
          padding: 20,
          borderRadius: 10,
          margin: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/edit_white.png")} />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginLeft: 10,
              fontFamily: "Poppins-Black",
            }}
          >
            Missions
          </Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: "300", marginTop: 5 }}>
          At Spotify, work is more than a job - it’s a scaling: To build. To
          design. To code. To consult. To think along with clients and see. To
          make markets. To invent. To collaborate. Not Just to do something
          better, but to attempt things you’ve though possible.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutCompany;
